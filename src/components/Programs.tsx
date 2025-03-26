
import { useEffect, useRef } from 'react';

const programs = [
  {
    title: 'Data Science & Analytics',
    description: 'Develop expertise in data analysis, machine learning, and statistical modeling to drive data-informed decision making.',
    duration: '12 Weeks',
    level: 'Intermediate to Advanced'
  },
  {
    title: 'Digital Marketing Mastery',
    description: 'Learn cutting-edge digital marketing strategies, SEO, social media campaigns, and analytics to grow businesses online.',
    duration: '8 Weeks',
    level: 'Beginner to Intermediate'
  },
  {
    title: 'Leadership Development',
    description: 'Enhance your leadership skills with a program designed to cultivate strategic thinking, emotional intelligence, and effective team management.',
    duration: '10 Weeks',
    level: 'All Levels'
  },
  {
    title: 'UX Design Fundamentals',
    description: 'Master the principles of user experience design, prototyping, and usability testing to create intuitive digital products.',
    duration: '6 Weeks',
    level: 'Beginner'
  }
];

const Programs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-scale-in');
              }, index * 100); // Staggered animation
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="programs" 
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <div className="container-narrow">
        <div className="text-center mb-16 max-w-2xl mx-auto px-4">
          <span className="badge badge-primary mb-4">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cutting-Edge Programs for Modern Learning
          </h2>
          <p className="text-lg text-foreground/70">
            Explore our innovative programs designed to equip you with the skills and knowledge needed to thrive in today's rapidly evolving world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 bg-white border border-border/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-foreground/80 mb-6">{program.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="badge badge-primary">{program.duration}</span>
                  <span className="badge bg-secondary text-secondary-foreground">{program.level}</span>
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center font-medium text-primary hover:underline"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-primary px-8 py-3">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
