
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Data Scientist',
    content: 'The Data Science program exceeded all my expectations. The curriculum was comprehensive and the instructors were incredibly knowledgeable. I secured a job offer before even completing the program!',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'The Digital Marketing Mastery program transformed my approach to marketing. The hands-on projects and real-world applications made the learning experience invaluable. Highly recommended!',
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    content: 'As someone transitioning careers, the UX Design program gave me exactly what I needed - practical skills, portfolio-worthy projects, and career guidance. The instructors genuinely care about your success.',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const selectTestimonial = (index: number) => {
    setActiveIndex(index);
    // Reset interval when manually selecting
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      startInterval();
    }
  };
  
  const startInterval = () => {
    intervalRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 8000); // Change testimonial every 8 seconds
  };
  
  useEffect(() => {
    startInterval();
    
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);
  
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
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="container-narrow">
        <div className="text-center mb-16 max-w-2xl mx-auto px-4 animate-on-scroll opacity-0">
          <span className="badge bg-white/20 text-white mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Students Say
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Hear directly from our graduates about their experiences and successes after completing our programs.
          </p>
        </div>
        
        <div className="relative px-4 py-8 animate-on-scroll opacity-0">
          {/* Testimonial slider */}
          <div className="relative overflow-hidden">
            <div 
              className="transition-all duration-700 ease-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-6 md:p-10"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 text-white shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-primary-foreground/70">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2 animate-on-scroll opacity-0">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => selectTestimonial(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === activeIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
