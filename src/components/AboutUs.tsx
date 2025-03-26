
import { useEffect, useRef } from 'react';

const features = [
  {
    title: 'Innovative Curriculum',
    description: 'Our curriculum integrates cutting-edge research and industry insights to prepare students for the challenges of tomorrow.'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from distinguished faculty members who are leaders in their fields and passionate about education.'
  },
  {
    title: 'Personalized Learning',
    description: 'We customize our approach to meet the unique needs and learning styles of each student.'
  },
  {
    title: 'State-of-the-Art Facilities',
    description: 'Our campus features modern facilities equipped with the latest technology to enhance the learning experience.'
  }
];

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary"
    >
      <div className="container-narrow">
        <div className="text-center mb-16 max-w-2xl mx-auto px-4">
          <div className="animate-on-scroll opacity-0">
            <span className="badge badge-primary mb-4">About Us</span>
          </div>
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold mb-6">
            Redefining Education Through Innovation
          </h2>
          <p className="animate-on-scroll opacity-0 text-lg text-foreground/70">
            Since our founding, we've been dedicated to providing an exceptional learning environment that nurtures intellectual growth and fosters creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 glass p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-on-scroll opacity-0">
          <a href="#programs" className="btn btn-primary px-8 py-3">
            Discover Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
