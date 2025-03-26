import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';

const About = () => {
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
      
      <section className="pt-32 pb-16 md:py-40 bg-secondary dark:bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Empowering the next generation of innovators through education, mentorship, and hands-on experience.
            </p>
          </div>
        </div>
      </section>
      
      <section ref={sectionRef} className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-foreground gradient-heading">Our Mission</h2>
              <p className="text-lg">
                At Innovation Academy, we are dedicated to providing high-quality education that prepares students for the challenges of the future. Our mission is to foster creativity, critical thinking, and problem-solving skills in a supportive and collaborative environment.
              </p>
              <p className="text-lg">
                We believe that every student has the potential to be an innovator and a leader. Our programs are designed to help students discover their passions, develop their talents, and pursue their dreams.
              </p>
              <p className="text-lg">
                Through hands-on projects, real-world experiences, and mentorship from industry professionals, we empower students to become lifelong learners who are prepared to make a positive impact on the world.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-card border border-border dark:bg-card dark:border-border">
                <div className="w-full h-full flex items-center justify-center p-10 backdrop-blur-sm">
                  <div className="text-center">
                    <span className="block text-6xl font-bold mb-6 text-primary">2015</span>
                    <span className="block text-xl font-medium text-foreground">Founded with a vision to transform education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-secondary dark:bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">Our Values</h2>
            <p className="text-lg text-foreground/70">
              These core principles guide everything we do at Innovation Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from curriculum development to student support."
              },
              {
                title: "Innovation",
                description: "We embrace innovation and creativity, constantly seeking new and better ways to teach and learn."
              },
              {
                title: "Inclusivity",
                description: "We believe that everyone deserves access to quality education, regardless of background or circumstances."
              },
              {
                title: "Collaboration",
                description: "We foster a collaborative environment where students, teachers, and industry partners work together."
              },
              {
                title: "Integrity",
                description: "We act with honesty, transparency, and ethical responsibility in all our interactions."
              },
              {
                title: "Growth Mindset",
                description: "We believe in the power of continuous learning and personal development."
              }
            ].map((value, index) => (
              <div key={index} className="bg-card hover:scale-105 transition-transform duration-300 p-8 rounded-xl shadow-sm border border-border dark:bg-card dark:border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-foreground">{value.title}</h3>
                <p className="text-muted-foreground dark:text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-card border border-border dark:bg-card dark:border-border">
                <div className="w-full h-full flex items-center justify-center p-10 backdrop-blur-sm">
                  <div className="text-center">
                    <span className="block text-6xl font-bold mb-6 text-primary">500+</span>
                    <span className="block text-xl font-medium text-foreground">Students graduated since founding</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">Our Team</h2>
              <p className="text-lg">
                Our team consists of experienced educators, industry professionals, and dedicated staff who are passionate about student success. Each member brings unique perspectives and expertise to create a dynamic learning environment.
              </p>
              <p className="text-lg">
                Our faculty members are not just experts in their fields but also skilled mentors who are committed to helping students achieve their full potential. They provide guidance, support, and inspiration throughout the learning journey.
              </p>
              <div className="mt-8">
                <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 hover-gradient">
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
