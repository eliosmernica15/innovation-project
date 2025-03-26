import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowLeft, GraduationCap } from 'lucide-react';
import { DecorativeBackground } from "@/components/ui/decorative-background";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { GradientButton } from "@/components/ui/gradient-button";

// This would typically come from your backend/database
const studentPortfolios = {
  "mia-johnson": {
    name: "Mia Johnson",
    avatar: "https://placehold.co/200/4338ca/ffffff?text=MJ",
    program: "Data Science",
    year: "Senior",
    bio: "Passionate about leveraging AI and data science to solve real-world problems. Specialized in machine learning and natural language processing.",
    skills: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "Machine Learning", "NLP"],
    projects: [
      {
        title: "AI-Powered Mental Health App",
        description: "Developed a mobile application using AI to provide personalized mental health support.",
        technologies: ["React Native", "TensorFlow", "Node.js", "MongoDB"],
        impact: "Currently being used by over 500 users with a 92% satisfaction rate."
      },
      {
        title: "Predictive Analytics Dashboard",
        description: "Created a dashboard for analyzing and predicting student performance trends.",
        technologies: ["Python", "Scikit-learn", "React", "D3.js"],
        impact: "Helped improve student retention rates by 15%."
      }
    ],
    social: {
      github: "https://github.com/miajohnson",
      linkedin: "https://linkedin.com/in/miajohnson",
      email: "mia.johnson@example.com"
    }
  },
  "daniel-chen": {
    name: "Daniel Chen",
    avatar: "https://placehold.co/200/10b981/ffffff?text=DC",
    program: "Environmental Engineering",
    year: "Graduate",
    bio: "Environmental engineer focused on sustainable urban solutions. Combining engineering principles with IoT technology to create smart, eco-friendly systems.",
    skills: ["Arduino", "IoT", "Python", "React", "Environmental Engineering", "Sustainability"],
    projects: [
      {
        title: "Sustainable Urban Farm",
        description: "Designed a vertical farming solution using IoT sensors and automation.",
        technologies: ["Arduino", "IoT", "React", "Python", "TensorFlow"],
        impact: "Produces 30% more vegetables while using 60% less water."
      },
      {
        title: "Smart Irrigation System",
        description: "Developed an AI-powered irrigation system for agricultural use.",
        technologies: ["Python", "IoT", "Machine Learning", "Cloud Computing"],
        impact: "Reduced water usage by 40% in test implementations."
      }
    ],
    social: {
      github: "https://github.com/danielchen",
      linkedin: "https://linkedin.com/in/danielchen",
      email: "daniel.chen@example.com"
    }
  },
  "sofia-patel": {
    name: "Sofia Patel",
    avatar: "https://placehold.co/200/f59e0b/ffffff?text=SP",
    program: "Computer Science",
    year: "Junior",
    bio: "Full-stack developer passionate about creating immersive educational experiences through virtual reality and interactive technologies.",
    skills: ["Unity", "C#", "WebXR", "Three.js", "React", "Node.js", "VR Development"],
    projects: [
      {
        title: "Educational VR Platform",
        description: "Developed a virtual reality platform for interactive learning experiences.",
        technologies: ["Unity", "C#", "WebXR", "Three.js", "Firebase"],
        impact: "Implemented in 12 schools, resulting in a 40% improvement in student understanding."
      },
      {
        title: "3D Chemistry Lab",
        description: "Created an immersive VR chemistry lab for safe and interactive experiments.",
        technologies: ["Unity", "C#", "VR SDK", "Physics Engine"],
        impact: "Reduced lab accidents by 100% while maintaining learning outcomes."
      }
    ],
    social: {
      github: "https://github.com/sofiapatel",
      linkedin: "https://linkedin.com/in/sofiapatel",
      email: "sofia.patel@example.com"
    }
  },
  "marcus-washington": {
    name: "Marcus Washington",
    avatar: "https://placehold.co/200/ec4899/ffffff?text=MW",
    program: "Social Work & Computer Science",
    year: "Senior",
    bio: "Combining social work principles with technology to create solutions that help underserved communities access essential resources.",
    skills: ["React", "Node.js", "MongoDB", "Social Work", "Community Outreach", "UI/UX Design"],
    projects: [
      {
        title: "Community Resource Mapping App",
        description: "Developed a web application to connect users with local community resources.",
        technologies: ["React", "Node.js", "Google Maps API", "MongoDB"],
        impact: "Helped connect over 2,000 individuals to essential services."
      },
      {
        title: "Youth Mentorship Platform",
        description: "Created a platform connecting youth with mentors in their community.",
        technologies: ["React", "Firebase", "WebRTC", "MongoDB"],
        impact: "Facilitated over 500 mentor-mentee connections."
      }
    ],
    social: {
      github: "https://github.com/marcuswashington",
      linkedin: "https://linkedin.com/in/marcuswashington",
      email: "marcus.washington@example.com"
    }
  },
  "leila-rodriguez": {
    name: "Leila Rodriguez",
    avatar: "https://placehold.co/200/6366f1/ffffff?text=LR",
    program: "Electrical Engineering",
    year: "Graduate",
    bio: "Electrical engineer specializing in renewable energy systems and smart grid technologies. Focused on creating sustainable energy solutions for the future.",
    skills: ["Python", "TensorFlow", "IoT", "React", "Node.js", "AWS", "Smart Grid"],
    projects: [
      {
        title: "Renewable Energy Management System",
        description: "Developed an integrated system for optimizing renewable energy generation and distribution.",
        technologies: ["Python", "TensorFlow", "IoT", "React", "Node.js", "AWS"],
        impact: "Reduced energy costs by 25% and carbon footprint by 40%."
      },
      {
        title: "Smart Grid Analytics Platform",
        description: "Created a platform for analyzing and optimizing power grid performance.",
        technologies: ["Python", "Machine Learning", "IoT", "Cloud Computing"],
        impact: "Improved grid efficiency by 15% and reduced power outages by 30%."
      }
    ],
    social: {
      github: "https://github.com/leilarodriguez",
      linkedin: "https://linkedin.com/in/leilarodriguez",
      email: "leila.rodriguez@example.com"
    }
  },
  "jordan-smith": {
    name: "Jordan Smith",
    avatar: "https://placehold.co/200/8b5cf6/ffffff?text=JS",
    program: "UX Design",
    year: "Senior",
    bio: "UX designer passionate about creating accessible and inclusive digital experiences. Specialized in user research and interaction design.",
    skills: ["Figma", "React", "JavaScript", "WCAG Guidelines", "User Research", "Prototyping"],
    projects: [
      {
        title: "Inclusive Design Toolkit",
        description: "Created a comprehensive toolkit for designing accessible digital products.",
        technologies: ["React", "Figma API", "JavaScript", "WCAG Guidelines"],
        impact: "Adopted by 15 design agencies and integrated into 3 university curriculums."
      },
      {
        title: "Accessibility Testing Platform",
        description: "Developed a platform for automated accessibility testing and reporting.",
        technologies: ["React", "Node.js", "Testing Libraries", "WCAG Guidelines"],
        impact: "Helped 50+ companies improve their digital accessibility scores."
      }
    ],
    social: {
      github: "https://github.com/jordansmith",
      linkedin: "https://linkedin.com/in/jordansmith",
      email: "jordan.smith@example.com"
    }
  }
};

export default function Portfolio() {
  const { studentId } = useParams();
  const portfolio = studentPortfolios[studentId as keyof typeof studentPortfolios];

  if (!portfolio) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
          <GradientButton onClick={() => window.history.back()}>Go Back</GradientButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <DecorativeBackground variant="gradient" />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <GradientButton
            variant="variant"
            className="mb-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </GradientButton>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={portfolio.avatar}
                      alt={portfolio.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      {portfolio.name}
                    </h1>
                    <p className="text-muted-foreground">
                      {portfolio.program} • {portfolio.year}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">{portfolio.bio}</p>
              </div>

              <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {portfolio.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-card rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Connect
                </h2>
                <div className="space-y-4">
                  <a
                    href={portfolio.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                  <a
                    href={portfolio.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${portfolio.social.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolio.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/50 rounded-lg p-6 hover:bg-muted/80 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-gradient-to-r from-primary/5 to-purple-500/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 