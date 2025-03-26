import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Innovation Academy. We'll get back to you shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 md:py-40 bg-secondary dark:bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading">Contact Us</h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Have questions or ready to start your journey? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 px-4">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-heading">Get in Touch</h2>
              <p className="text-lg text-foreground/70 mb-8">
                We're here to answer any questions you have about our programs, admissions process, or facilities. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-primary dark:text-primary/90" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground">Phone</h3>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-primary dark:text-primary/90" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground">Email</h3>
                    <p className="text-foreground/70">info@innovationacademy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-primary dark:text-primary/90" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground">Location</h3>
                    <p className="text-foreground/70">123 Innovation Street, Tech City, TC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-primary dark:text-primary/90" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground">Office Hours</h3>
                    <p className="text-foreground/70">Monday-Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-foreground/70">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md dark:shadow-none">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1652813702675!5m2!1sen!2sus" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Innovation Academy Location"
                ></iframe>
              </div>
            </div>
            
            <div>
              <div className="bg-card rounded-2xl shadow-sm p-8 md:p-10 dark:border dark:border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors dark:bg-card"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors dark:bg-card"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors dark:bg-card"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors dark:bg-card"
                      >
                        <option value="" disabled>Select a Subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="program">Program Information</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="career">Career Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none dark:bg-card"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-primary py-3 px-6 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
