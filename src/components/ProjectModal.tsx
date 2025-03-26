import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Eye, User, Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import PaymentModal from './PaymentModal';
import { useTheme } from '@/components/theme-provider';
import { useNavigate } from 'react-router-dom';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  impact: string;
  image: string;
  demoLink: string;
  codePrice: number;
  technologies: string[];
  student: {
    name: string;
    avatar: string;
    program: string;
    year: string;
    portfolio: string;
  };
};

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();
  
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

  const handlePaymentClick = () => {
    setPaymentModalOpen(true);
  };

  const viewPortfolio = (studentId: string) => {
    navigate(`/portfolio/${studentId}`);
    onClose();
  };

  const viewDemo = (projectId: string) => {
    navigate(`/demo/${projectId}`);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-background border-border shadow-xl">
          <ScrollArea className="max-h-[90vh]">
            <div className={`transition-all duration-500 transform ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <DialogHeader className="p-6 pb-0">
                <div className="flex items-center justify-between">
                  <Badge variant="purple" className="mb-2">
                    {project.category}
                  </Badge>
                  <Badge variant="secondary" className="mb-2">
                    ${project.codePrice.toFixed(2)} for Source Code
                  </Badge>
                </div>
                <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                <DialogDescription className="flex items-center mt-1">
                  <span>By {project.student.name}</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span>{project.student.program}</span>
                </DialogDescription>
              </DialogHeader>

              <div className="mb-6 overflow-hidden px-6 pt-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 pt-0">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Project Overview</h3>
                  <p className="mb-4 text-foreground/80">{project.longDescription}</p>
                  
                  <h3 className="text-lg font-semibold mb-2 text-primary">Impact</h3>
                  <p className="mb-4 text-foreground/80">{project.impact}</p>
                  
                  <h3 className="text-lg font-semibold mb-2 text-primary">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/70">{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6">
                  <div className="bg-secondary/50 rounded-lg p-4 mb-6 border border-border transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-16 w-16 mr-4 border-2 border-primary/20 ring-2 ring-primary/10 ring-offset-2 ring-offset-background">
                        <AvatarImage src={project.student.avatar} alt={project.student.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">{project.student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg text-primary">{project.student.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.student.program}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <User size={16} className="mr-2 text-primary" />
                        <span>{project.student.year} Student</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Briefcase size={16} className="mr-2 text-primary" />
                        <span>Innovation Academy</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary/20 text-primary hover:bg-primary/5 hover-gradient"
                      onClick={() => viewPortfolio(project.student.name.toLowerCase().replace(' ', '-'))}
                    >
                      View Portfolio
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all group hover-gradient"
                      onClick={handlePaymentClick}
                    >
                      <Code size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                      Purchase Source Code (${project.codePrice.toFixed(2)})
                    </Button>
                    <Button 
                      variant="secondary"
                      className="w-full hover-gradient"
                      onClick={() => viewDemo(project.title.toLowerCase().replace(/ /g, '-'))}
                    >
                      <Eye size={16} className="mr-2" />
                      View Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
      
      <PaymentModal 
        isOpen={paymentModalOpen} 
        onClose={() => setPaymentModalOpen(false)} 
        project={project}
      />
    </>
  );
};

export default ProjectModal;
