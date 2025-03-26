import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Education in a Digital World",
    excerpt: "Exploring how technology is reshaping education and what it means for learners and educators alike.",
    author: "Dr. Sarah Martinez",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Education",
    image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Education+Digital",
  },
  {
    id: 2,
    title: "Building Resilience Through Project-Based Learning",
    excerpt: "How hands-on projects help students develop not just technical skills but also adaptability and perseverance.",
    author: "Prof. James Wilson",
    date: "April 28, 2023",
    readTime: "6 min read",
    category: "Learning",
    image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Project+Learning",
  },
  {
    id: 3,
    title: "The Rise of AI in Educational Technology",
    excerpt: "Examining the impact of artificial intelligence on personalized learning experiences and educational outcomes.",
    author: "Dr. Michelle Chen",
    date: "April 10, 2023",
    readTime: "10 min read",
    category: "Technology",
    image: "https://placehold.co/800x500/e2e8f0/1e293b?text=AI+EdTech",
  },
  {
    id: 4,
    title: "Bridging the Digital Divide in Education",
    excerpt: "Strategies for ensuring equitable access to educational technology and digital resources for all students.",
    author: "Prof. Robert Johnson",
    date: "March 22, 2023",
    readTime: "7 min read",
    category: "Equity",
    image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Digital+Divide",
  },
  {
    id: 5,
    title: "The Power of Mentorship in Career Development",
    excerpt: "How mentorship programs can accelerate learning, build confidence, and open doors to new opportunities.",
    author: "Dr. Emily Rodriguez",
    date: "March 8, 2023",
    readTime: "5 min read",
    category: "Career",
    image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Mentorship",
  },
  {
    id: 6,
    title: "Cultivating Creativity in STEM Education",
    excerpt: "Why creative thinking is essential in science and technology fields and how educators can foster it.",
    author: "Prof. David Lee",
    date: "February 19, 2023",
    readTime: "9 min read",
    category: "STEM",
    image: "https://placehold.co/800x500/e2e8f0/1e293b?text=STEM+Creativity",
  },
];

const categories = ["All", "Education", "Learning", "Technology", "Equity", "Career", "STEM"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory]);
  
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
    <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 md:py-40 bg-secondary dark:bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Insights, research, and perspectives on education, innovation, and the future of learning.
            </p>
          </div>
        </div>
      </section>
      
      <section ref={sectionRef} className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">Latest Articles</h2>
            <p className="text-lg text-foreground/70">
              Stay updated with our latest thoughts, research findings, and educational insights.
            </p>
          </div>
          
          <div className="mb-12 flex flex-wrap justify-center gap-4 px-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground'
                    : 'bg-secondary hover:bg-primary/10 dark:bg-secondary/50 dark:hover:bg-primary/20 dark:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {filteredPosts.map((post, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-border"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-full dark:bg-card/50">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{post.title}</h3>
                  <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-foreground/60 space-x-4 mt-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center font-medium text-primary hover:underline dark:text-primary/90"
                    >
                      Read More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="btn btn-primary px-8 py-3 hover-gradient">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-secondary dark:bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Stay up-to-date with our latest articles, research findings, and events. Join our community of lifelong learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary dark:bg-card"
              />
              <button className="btn btn-primary px-6 py-3 hover-gradient">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
