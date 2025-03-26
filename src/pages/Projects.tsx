import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Eye, User } from 'lucide-react';
import ProjectModal from '@/components/ProjectModal';
import { useNavigate } from 'react-router-dom';

// Enhanced project data with student information
const projects = [
  {
    id: 1,
    title: "AI-Powered Mental Health App",
    category: "Health Tech",
    description: "A mobile application that uses artificial intelligence to provide personalized mental health support, developed by students in our Data Science program.",
    longDescription: "This comprehensive mental health application leverages natural language processing and machine learning algorithms to analyze user input and provide personalized support strategies. The app includes features such as mood tracking, guided meditation sessions, cognitive behavioral therapy exercises, and emergency resources.",
    impact: "Currently being used by over 500 users with a 92% satisfaction rate.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Mental+Health+App",
    demoLink: "https://mental-health-demo.example.com",
    codePrice: 49.99,
    technologies: ["React Native", "TensorFlow", "Node.js", "MongoDB"],
    student: {
      name: "Mia Johnson",
      avatar: "https://placehold.co/200/4338ca/ffffff?text=MJ",
      program: "Data Science",
      year: "Senior",
      portfolio: "https://miajohnson-portfolio.example.com"
    }
  },
  {
    id: 2,
    title: "Sustainable Urban Farm",
    category: "Sustainability",
    description: "A vertical farming solution designed for urban spaces, using IoT sensors and automation to optimize plant growth and resource usage.",
    longDescription: "This urban farming system integrates IoT sensors, automated irrigation, and climate control to create an optimal growing environment in limited urban spaces. The solution includes a mobile app for remote monitoring and control, data analytics for yield optimization, and a community marketplace for selling excess produce.",
    impact: "Produces 30% more vegetables while using 60% less water than traditional farming methods.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Urban+Farm",
    demoLink: "https://urban-farm-demo.example.com",
    codePrice: 79.99,
    technologies: ["Arduino", "IoT", "React", "Python", "TensorFlow"],
    student: {
      name: "Daniel Chen",
      avatar: "https://placehold.co/200/10b981/ffffff?text=DC",
      program: "Environmental Engineering",
      year: "Graduate",
      portfolio: "https://danielchen.example.com"
    }
  },
  {
    id: 3,
    title: "Educational VR Platform",
    category: "EdTech",
    description: "A virtual reality platform that transforms abstract concepts into immersive learning experiences, making complex subjects more accessible and engaging.",
    longDescription: "This educational VR platform transforms abstract scientific and mathematical concepts into interactive 3D visualizations. Students can manipulate molecular structures, explore geometric spaces, and conduct virtual experiments. The platform includes curriculum-aligned content for K-12 and university-level courses.",
    impact: "Implemented in 12 schools, resulting in a 40% improvement in student understanding of complex topics.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=VR+Education",
    demoLink: "https://vr-education-demo.example.com",
    codePrice: 129.99,
    technologies: ["Unity", "C#", "WebXR", "Three.js", "Firebase"],
    student: {
      name: "Sofia Patel",
      avatar: "https://placehold.co/200/f59e0b/ffffff?text=SP",
      program: "Computer Science",
      year: "Junior",
      portfolio: "https://sofiapatel.example.com"
    }
  },
  {
    id: 4,
    title: "Community Resource Mapping App",
    category: "Social Impact",
    description: "A web and mobile application that maps and connects users to community resources such as food banks, shelters, and health clinics.",
    longDescription: "This comprehensive resource mapping application helps vulnerable populations locate and access essential services in their community. The app includes real-time availability updates, transportation options, and eligibility information for various services. Community organizations can update their listings and communicate directly with users.",
    impact: "Helped connect over 2,000 individuals to essential services in its first year.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Resource+Mapping",
    demoLink: "https://community-resources-demo.example.com",
    codePrice: 39.99,
    technologies: ["React", "Node.js", "Google Maps API", "MongoDB", "Express"],
    student: {
      name: "Marcus Washington",
      avatar: "https://placehold.co/200/ec4899/ffffff?text=MW",
      program: "Social Work & Computer Science",
      year: "Senior",
      portfolio: "https://marcuswashington.example.com"
    }
  },
  {
    id: 5,
    title: "Renewable Energy Management System",
    category: "Clean Energy",
    description: "An integrated system that optimizes the generation, storage, and distribution of renewable energy for residential and commercial buildings.",
    longDescription: "This comprehensive energy management system optimizes the generation, storage, and distribution of renewable energy in buildings. It uses machine learning to predict energy usage patterns, weather conditions, and grid demand to maximize efficiency and cost savings. The system integrates with various types of renewable energy sources and storage solutions.",
    impact: "Reduced energy costs by 25% and carbon footprint by 40% in pilot implementations.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Energy+Management",
    demoLink: "https://energy-management-demo.example.com",
    codePrice: 89.99,
    technologies: ["Python", "TensorFlow", "IoT", "React", "Node.js", "AWS"],
    student: {
      name: "Leila Rodriguez",
      avatar: "https://placehold.co/200/6366f1/ffffff?text=LR",
      program: "Electrical Engineering",
      year: "Graduate",
      portfolio: "https://leilarodriguez.example.com"
    }
  },
  {
    id: 6,
    title: "Inclusive Design Toolkit",
    category: "Design",
    description: "A comprehensive toolkit that helps designers create more accessible and inclusive products, developed by students in our UX Design program.",
    longDescription: "This inclusive design toolkit provides designers with guidelines, components, and testing methodologies to create accessible digital products. It includes simulation tools for various disabilities, an accessibility checker, and a library of inclusive design patterns. The toolkit is accompanied by extensive documentation and case studies.",
    impact: "Adopted by 15 design agencies and integrated into 3 university design curriculums.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Design+Toolkit",
    demoLink: "https://inclusive-design-demo.example.com",
    codePrice: 59.99,
    technologies: ["React", "Figma API", "JavaScript", "WCAG Guidelines", "Testing Libraries"],
    student: {
      name: "Jordan Smith",
      avatar: "https://placehold.co/200/8b5cf6/ffffff?text=JS",
      program: "UX Design",
      year: "Senior",
      portfolio: "https://jordansmith.example.com"
    }
  },
];

const categories = ["All", "Health Tech", "Sustainability", "EdTech", "Social Impact", "Clean Energy", "Design"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
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

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const viewPortfolio = (studentId: string) => {
    navigate(`/portfolio/${studentId}`);
  };

  const viewDemo = (projectId: string) => {
    navigate(`/demo/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 md:py-40 bg-secondary dark:bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Discover the innovative solutions created by our students as they apply their knowledge to solve real-world problems.
            </p>
          </div>
        </div>
      </section>
      
      <section ref={sectionRef} className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">Explore Our Projects</h2>
            <p className="text-lg text-foreground/70">
              These projects showcase the creativity, technical skills, and innovative thinking of our students across various disciplines.
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
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="animate-on-scroll opacity-0 border border-border/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-border dark:bg-card"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="mb-2 dark:bg-secondary/50 dark:text-foreground">
                      {project.category}
                    </Badge>
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src={project.student.avatar} alt={project.student.name} />
                      <AvatarFallback>{project.student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl dark:text-foreground">{project.title}</CardTitle>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-muted-foreground dark:text-muted-foreground">By {project.student.name}</span>
                    <span className="mx-2 text-muted-foreground dark:text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground dark:text-muted-foreground">{project.student.program}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4 line-clamp-3 dark:text-foreground/80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-secondary/50 dark:bg-secondary/50 dark:text-foreground">{tech}</Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-secondary/50 dark:bg-secondary/50 dark:text-foreground">+{project.technologies.length - 3}</Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover-gradient"
                      onClick={() => viewPortfolio(project.student.name.toLowerCase().replace(' ', '-'))}
                    >
                      <User size={16} />
                      Portfolio
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover-gradient"
                      onClick={() => viewDemo(project.title.toLowerCase().replace(/ /g, '-'))}
                    >
                      <Eye size={16} />
                      Live Demo
                    </Button>
                  </div>
                  <Button 
                    size="sm" 
                    className="gap-2 hover-gradient"
                    onClick={() => openProjectModal(project)}
                  >
                    <Code size={16} />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="/contact" className="btn btn-primary px-8 py-3 hover-gradient">
              Partner with Us
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">Project-Based Learning</h2>
              <p className="text-lg">
                At Innovation Academy, we believe that the best way to learn is by doing. Our project-based approach enables students to apply theoretical knowledge to practical challenges, developing critical thinking, problem-solving, and collaboration skills.
              </p>
              <p className="text-lg">
                Each project is carefully designed to address real-world problems and provide students with the opportunity to make a meaningful impact. Through these projects, students not only develop technical expertise but also gain experience in project management, teamwork, and communication.
              </p>
              <div className="mt-8">
                <a href="/programs" className="btn btn-primary px-8 py-3 hover-gradient">
                  Explore Our Programs
                </a>
              </div>
            </div>
            
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg glass">
                <div className="w-full h-full flex items-center justify-center p-10">
                  <div className="text-center">
                    <span className="block text-6xl font-bold mb-6 text-primary">125+</span>
                    <span className="block text-xl font-medium">Projects completed by our students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Projects;
