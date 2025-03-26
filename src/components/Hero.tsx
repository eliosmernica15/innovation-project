
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
      
      <div className="container-narrow relative z-10 px-4 md:px-0 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-lg">
            <div className="animate-on-scroll opacity-0">
              <span className="badge badge-primary">Innovative Education</span>
            </div>
            <h1 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Education For The Future
            </h1>
            <p className="animate-on-scroll opacity-0 text-lg text-foreground/80 mt-6">
              Discover a new approach to learning that empowers students to excel in a rapidly changing world.
            </p>
            
            <div className="animate-on-scroll opacity-0 pt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href="#programs" 
                className="btn btn-primary px-8 py-3"
              >
                Explore Programs
              </a>
              <a 
                href="#about" 
                className="btn btn-secondary px-8 py-3"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 relative w-full max-w-md mx-auto md:ml-auto">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="bg-gradient-to-br from-secondary to-white/80 absolute inset-0 opacity-50"></div>
              <div className="glass-dark absolute inset-0 flex items-center justify-center">
                <div className="text-center p-10">
                  <span className="block text-6xl font-bold mb-6">10+</span>
                  <span className="block text-lg font-medium">Years of Excellence</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/10 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-2 border-primary/20"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <div className="w-0.5 h-6 bg-foreground/20"></div>
      </div>
    </section>
  );
};

export default Hero;
