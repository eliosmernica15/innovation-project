import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Lock, CreditCard, CheckCircle2, Copy, ShieldCheck, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTheme } from '@/components/theme-provider';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  codePrice: number;
  student: {
    name: string;
  };
};

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const formSchema = z.object({
  cardNumber: z.string().min(16, 'Card number must be 16 digits'),
  cardHolder: z.string().min(3, 'Please enter the cardholder name'),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, 'Format: MM/YY'),
  cvv: z.string().min(3, 'CVV must be 3 or 4 digits'),
  email: z.string().email('Please enter a valid email address'),
});

const PaymentModal = ({ isOpen, onClose, project }: PaymentModalProps) => {
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [animateIn, setAnimateIn] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setProcessing(true);
    
    setTimeout(() => {
      setProcessing(false);
      setCompleted(true);
      setAccessCode(`${project.id}-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
      
      toast.success('Payment successful! You now have access to the source code.', {
        duration: 5000,
        position: 'top-center',
      });
    }, 2000);
  };

  const copyAccessCode = () => {
    navigator.clipboard.writeText(accessCode);
    toast.success('Access code copied to clipboard!', {
      duration: 3000,
      position: 'top-center',
    });
  };

  const closeAndReset = () => {
    onClose();
    setTimeout(() => {
      setCompleted(false);
      form.reset();
    }, 300);
  };
  
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeAndReset}>
      <DialogContent className="max-w-md p-0 border-border shadow-xl overflow-hidden bg-background">
        <div className={`transition-all duration-500 transform ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {!completed ? (
            <>
              <div className="bg-gradient-to-r from-primary/90 to-primary p-6 text-primary-foreground">
                <DialogTitle className="text-xl font-bold">Purchase Source Code</DialogTitle>
                <DialogDescription className="text-primary-foreground/90 mt-1">
                  Access the full source code for {project.title}
                </DialogDescription>
              </div>
              
              <div className="p-6">
                <div className="mb-6 p-4 bg-secondary/50 rounded-lg flex items-center justify-between border border-border">
                  <span className="font-medium">{project.title}</span>
                  <span className="font-bold text-primary">${project.codePrice.toFixed(2)}</span>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              {...field} 
                              className="form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="rounded-lg border border-border p-4 bg-secondary/20">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold flex items-center text-primary">
                          <CreditCard size={18} className="mr-2" />
                          Payment Details
                        </h3>
                        <div className="flex items-center text-xs">
                          <ShieldCheck size={14} className="mr-1 text-green-500" />
                          <span className="text-green-500">Secure Payment</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="1234 5678 9012 3456" 
                                  {...field} 
                                  value={formatCardNumber(field.value)}
                                  onChange={e => {
                                    const value = e.target.value;
                                    field.onChange(value.replace(/\s/g, ''));
                                  }}
                                  className="form-input"
                                  maxLength={19}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="expiryDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expiry Date</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="MM/YY" 
                                    {...field} 
                                    value={formatExpiryDate(field.value)}
                                    onChange={e => {
                                      const value = e.target.value;
                                      field.onChange(value.replace(/\s/g, ''));
                                    }}
                                    className="form-input"
                                    maxLength={5}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="cvv"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="password"
                                    placeholder="123" 
                                    {...field} 
                                    className="form-input"
                                    maxLength={4}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="cardHolder"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cardholder Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Doe" 
                                  {...field} 
                                  className="form-input"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={processing}
                    >
                      {processing ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Processing...
                        </div>
                      ) : (
                        <>
                          <Lock size={16} className="mr-2" />
                          Pay ${project.codePrice.toFixed(2)}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </>
          ) : (
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
              <p className="text-muted-foreground mb-6">
                Your access code has been sent to your email.
              </p>
              
              <div className="bg-secondary/50 rounded-lg p-4 mb-6 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Access Code</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    onClick={copyAccessCode}
                  >
                    <Copy size={16} className="mr-2" />
                    Copy
                  </Button>
                </div>
                <div className="font-mono text-lg font-bold text-primary">
                  {accessCode}
                </div>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={closeAndReset}
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
