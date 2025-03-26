import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';

const programs = [
  {
    title: "Data Science & Analytics",
    description: "Master the skills of data analysis, machine learning, and statistical modeling to drive data-informed decision making. This comprehensive program covers Python programming, data visualization, predictive analytics, and big data technologies.",
    duration: "12 Weeks",
    level: "Intermediate to Advanced",
    topics: ["Python for Data Science", "Statistical Analysis", "Machine Learning", "Big Data Technologies", "Data Visualization", "Predictive Modeling"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "📊"
  },
  {
    title: "Digital Marketing Mastery",
    description: "Develop expertise in cutting-edge digital marketing strategies, SEO, social media campaigns, and analytics to grow businesses in the digital space. Learn to create effective marketing campaigns, analyze performance metrics, and optimize for conversion.",
    duration: "8 Weeks",
    level: "Beginner to Intermediate",
    topics: ["SEO & SEM", "Content Marketing", "Social Media Strategy", "Analytics & Reporting", "Email Marketing", "Conversion Optimization"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    icon: "🎯"
  },
  {
    title: "Leadership Development",
    description: "Enhance your leadership capabilities with a program designed to cultivate strategic thinking, emotional intelligence, and effective team management. Develop the skills needed to lead with confidence, inspire teams, and drive organizational success.",
    duration: "10 Weeks",
    level: "All Levels",
    topics: ["Strategic Thinking", "Emotional Intelligence", "Team Management", "Conflict Resolution", "Decision Making", "Change Management"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "👥"
  },
  {
    title: "UX Design Fundamentals",
    description: "Learn the principles of user experience design, prototyping, and usability testing to create intuitive digital products. This hands-on program covers the entire UX process from research to implementation.",
    duration: "6 Weeks",
    level: "Beginner",
    topics: ["User Research", "Information Architecture", "Wireframing", "Prototyping", "Usability Testing", "UI Design Basics"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "🎨"
  },
  {
    title: "Web Development Bootcamp",
    description: "Gain comprehensive skills in full-stack web development including HTML, CSS, JavaScript, and popular frameworks. Build responsive websites and dynamic web applications through practical, project-based learning.",
    duration: "14 Weeks",
    level: "Beginner to Intermediate",
    topics: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Database Design", "API Development"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    icon: "💻"
  },
  {
    title: "Business Entrepreneurship",
    description: "Develop the mindset and skills needed to launch and grow successful businesses. Learn about business modeling, market research, funding strategies, and operational management from experienced entrepreneurs.",
    duration: "12 Weeks",
    level: "All Levels",
    topics: ["Business Model Canvas", "Market Research", "Financial Planning", "Pitching & Fundraising", "Growth Strategies", "Legal Considerations"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "💡"
  }
];

const Programs = () => {
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
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 md:py-40 bg-secondary/50 dark:bg-secondary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Discover our cutting-edge programs designed to equip you with the skills and knowledge needed in today's rapidly evolving world.
            </p>
          </div>
        </div>
      </section>
      
      <section ref={sectionRef} className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Programs</h2>
            <p className="text-lg text-foreground/70">
              Our programs are designed and taught by industry experts, combining theoretical knowledge with practical application to prepare you for real-world challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 bg-card dark:bg-card/50 border border-border/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-4xl">{program.icon}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-foreground/80 mb-6">{program.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="badge badge-primary">{program.duration}</span>
                    <span className="badge bg-secondary text-secondary-foreground">{program.level}</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Key Topics:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {program.topics.map((topic, i) => (
                        <li key={i} className="flex items-center text-sm group-hover:text-primary transition-colors">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="/apply" 
                    className="inline-flex items-center font-medium text-primary hover:underline group-hover:text-primary/80 transition-colors"
                  >
                    Apply Now
                    <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="/apply" className="btn btn-primary px-8 py-3">
              Apply for a Program
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-secondary/50 dark:bg-secondary/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Program Structure</h2>
              <p className="text-lg text-foreground/80">
                Our programs combine theoretical knowledge with practical application through a blend of lectures, workshops, projects, and mentorship sessions. This comprehensive approach ensures that students develop both conceptual understanding and hands-on skills.
              </p>
              <div className="space-y-4 mt-8">
                <div className="bg-card dark:bg-card/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      👨‍🏫
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Expert-Led Instruction</h3>
                      <p className="text-foreground/80">Learn from industry professionals who bring real-world experience to the classroom.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card dark:bg-card/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      💻
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Hands-On Projects</h3>
                      <p className="text-foreground/80">Apply your knowledge through practical projects that simulate real-world challenges.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card dark:bg-card/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      🤝
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personalized Mentorship</h3>
                      <p className="text-foreground/80">Receive guidance and feedback from mentors who are invested in your success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg glass group">
                <div className="w-full h-full flex items-center justify-center p-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center relative z-10">
                    <span className="block text-6xl font-bold mb-6 text-primary group-hover:scale-110 transition-transform">85%</span>
                    <span className="block text-xl font-medium text-foreground/80">Job placement rate for our graduates</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Programs;
