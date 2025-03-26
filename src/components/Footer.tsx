
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          <div>
            <h3 className="text-xl font-semibold mb-6">Innovation Academy</h3>
            <p className="text-foreground/70 mb-6">
              Transforming education through innovation and excellence, preparing students for the challenges of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-foreground/70 hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-foreground transition-colors">Programs</a></li>
              <li><a href="#testimonials" className="text-foreground/70 hover:text-foreground transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-foreground/70 hover:text-foreground transition-colors">Data Science & Analytics</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-foreground transition-colors">Digital Marketing</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-foreground transition-colors">Leadership Development</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-foreground transition-colors">UX Design</a></li>
              <li><a href="#programs" className="text-foreground/70 hover:text-foreground transition-colors">View All Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-foreground/70">123 Innovation Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground/70">info@innovationacademy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/50 text-center px-4">
          <p className="text-foreground/60">
            © {currentYear} Innovation Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
