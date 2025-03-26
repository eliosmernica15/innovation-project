import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Code2, Layout, Zap } from 'lucide-react';
import { DecorativeBackground } from "@/components/ui/decorative-background";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { GradientButton } from "@/components/ui/gradient-button";

// This would typically come from your backend/database
const projectDemos = {
  "ai-mental-health-app": {
    title: "AI-Powered Mental Health App",
    description: "A mobile application that uses artificial intelligence to provide personalized mental health support and resources.",
    student: "Mia Johnson",
    program: "Data Science",
    year: "Senior",
    features: [
      {
        title: "AI Chat Support",
        description: "24/7 AI-powered chat support that provides immediate responses and resources based on user needs.",
        demo: "https://example.com/ai-chat-demo"
      },
      {
        title: "Mood Tracking",
        description: "Advanced mood tracking system with predictive analytics to identify patterns and provide personalized recommendations.",
        demo: "https://example.com/mood-tracking-demo"
      },
      {
        title: "Resource Library",
        description: "Curated collection of mental health resources, articles, and guided exercises.",
        demo: "https://example.com/resources-demo"
      }
    ],
    technologies: ["React Native", "TensorFlow", "Node.js", "MongoDB"],
    screenshots: [
      "https://placehold.co/800x600/4338ca/ffffff?text=AI+Chat+Interface",
      "https://placehold.co/800x600/4338ca/ffffff?text=Mood+Tracking+Dashboard",
      "https://placehold.co/800x600/4338ca/ffffff?text=Resource+Library"
    ]
  },
  "sustainable-urban-farm": {
    title: "Sustainable Urban Farm",
    description: "An IoT-powered vertical farming solution that optimizes plant growth while minimizing resource usage.",
    student: "Daniel Chen",
    program: "Environmental Engineering",
    year: "Graduate",
    features: [
      {
        title: "Smart Irrigation System",
        description: "Automated irrigation system that uses soil moisture sensors and weather data to optimize water usage.",
        demo: "https://example.com/irrigation-demo"
      },
      {
        title: "Growth Monitoring",
        description: "Real-time monitoring of plant growth using computer vision and environmental sensors.",
        demo: "https://example.com/growth-monitoring-demo"
      },
      {
        title: "Resource Analytics",
        description: "Dashboard showing resource usage, efficiency metrics, and yield predictions.",
        demo: "https://example.com/analytics-demo"
      }
    ],
    technologies: ["Arduino", "IoT", "Python", "React", "TensorFlow"],
    screenshots: [
      "https://placehold.co/800x600/10b981/ffffff?text=Vertical+Farm+Setup",
      "https://placehold.co/800x600/10b981/ffffff?text=Monitoring+Dashboard",
      "https://placehold.co/800x600/10b981/ffffff?text=Analytics+View"
    ]
  },
  "educational-vr-platform": {
    title: "Educational VR Platform",
    description: "A virtual reality platform that creates immersive learning experiences for students.",
    student: "Sofia Patel",
    program: "Computer Science",
    year: "Junior",
    features: [
      {
        title: "Interactive 3D Models",
        description: "Explore detailed 3D models of complex concepts in science, history, and art.",
        demo: "https://example.com/3d-models-demo"
      },
      {
        title: "Virtual Field Trips",
        description: "Visit historical sites, museums, and natural wonders through immersive VR experiences.",
        demo: "https://example.com/field-trips-demo"
      },
      {
        title: "Collaborative Learning",
        description: "Multi-user VR classrooms where students can interact and learn together.",
        demo: "https://example.com/collaborative-demo"
      }
    ],
    technologies: ["Unity", "C#", "WebXR", "Three.js", "Firebase"],
    screenshots: [
      "https://placehold.co/800x600/f59e0b/ffffff?text=VR+Classroom",
      "https://placehold.co/800x600/f59e0b/ffffff?text=3D+Model+Viewer",
      "https://placehold.co/800x600/f59e0b/ffffff?text=Virtual+Field+Trip"
    ]
  },
  "community-resource-mapping": {
    title: "Community Resource Mapping App",
    description: "A web application that helps users find and access local community resources and services.",
    student: "Marcus Washington",
    program: "Social Work & Computer Science",
    year: "Senior",
    features: [
      {
        title: "Interactive Map",
        description: "Search and filter community resources on an interactive map interface.",
        demo: "https://example.com/map-demo"
      },
      {
        title: "Resource Directory",
        description: "Comprehensive directory of local services with detailed information and reviews.",
        demo: "https://example.com/directory-demo"
      },
      {
        title: "Community Events",
        description: "Calendar of local events and opportunities for community engagement.",
        demo: "https://example.com/events-demo"
      }
    ],
    technologies: ["React", "Node.js", "Google Maps API", "MongoDB"],
    screenshots: [
      "https://placehold.co/800x600/ec4899/ffffff?text=Resource+Map",
      "https://placehold.co/800x600/ec4899/ffffff?text=Resource+Directory",
      "https://placehold.co/800x600/ec4899/ffffff?text=Events+Calendar"
    ]
  },
  "renewable-energy-system": {
    title: "Renewable Energy Management System",
    description: "An integrated system for optimizing renewable energy generation and distribution.",
    student: "Leila Rodriguez",
    program: "Electrical Engineering",
    year: "Graduate",
    features: [
      {
        title: "Energy Dashboard",
        description: "Real-time monitoring of energy generation, consumption, and distribution.",
        demo: "https://example.com/energy-dashboard-demo"
      },
      {
        title: "Predictive Analytics",
        description: "AI-powered predictions for energy demand and optimal resource allocation.",
        demo: "https://example.com/analytics-demo"
      },
      {
        title: "Grid Management",
        description: "Tools for managing and optimizing the power grid infrastructure.",
        demo: "https://example.com/grid-management-demo"
      }
    ],
    technologies: ["Python", "TensorFlow", "IoT", "React", "Node.js", "AWS"],
    screenshots: [
      "https://placehold.co/800x600/6366f1/ffffff?text=Energy+Dashboard",
      "https://placehold.co/800x600/6366f1/ffffff?text=Analytics+View",
      "https://placehold.co/800x600/6366f1/ffffff?text=Grid+Management"
    ]
  },
  "inclusive-design-toolkit": {
    title: "Inclusive Design Toolkit",
    description: "A comprehensive toolkit for creating accessible and inclusive digital products.",
    student: "Jordan Smith",
    program: "UX Design",
    year: "Senior",
    features: [
      {
        title: "Accessibility Checker",
        description: "Automated tool for checking and reporting accessibility issues in digital products.",
        demo: "https://example.com/accessibility-checker-demo"
      },
      {
        title: "Design Guidelines",
        description: "Interactive guide with best practices for inclusive design.",
        demo: "https://example.com/guidelines-demo"
      },
      {
        title: "Component Library",
        description: "Collection of pre-built accessible UI components and patterns.",
        demo: "https://example.com/components-demo"
      }
    ],
    technologies: ["React", "Figma API", "JavaScript", "WCAG Guidelines"],
    screenshots: [
      "https://placehold.co/800x600/8b5cf6/ffffff?text=Accessibility+Checker",
      "https://placehold.co/800x600/8b5cf6/ffffff?text=Design+Guidelines",
      "https://placehold.co/800x600/8b5cf6/ffffff?text=Component+Library"
    ]
  }
};

const Demo = () => {
  const { projectId } = useParams();
  const demo = projectDemos[projectId as keyof typeof projectDemos];

  if (!demo) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Demo Not Found</h1>
          <GradientButton onClick={() => window.history.back()}>Go Back</GradientButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <DecorativeBackground variant="grid" />
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

          <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  {demo.title}
                </h1>
                <p className="text-muted-foreground">
                  by {demo.student} • {demo.program} • {demo.year}
                </p>
              </div>
              <div className="flex gap-2">
                <GradientButton>
                  <Code2 className="mr-2 h-4 w-4" />
                  View Code
                </GradientButton>
                <GradientButton variant="variant">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </GradientButton>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">{demo.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Features
                </h2>
                <div className="space-y-6">
                  {demo.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto mt-2 hover:bg-transparent"
                          onClick={() => window.open(feature.demo, '_blank')}
                        >
                          Try it out <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {demo.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Screenshots
                </h2>
                <div className="space-y-4">
                  {demo.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <img
                        src={screenshot}
                        alt={`${demo.title} screenshot ${index + 1}`}
                        className="w-full rounded-lg shadow-md transition-transform group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
                          <Layout className="mr-2 h-4 w-4" />
                          View Full Size
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Demo; 