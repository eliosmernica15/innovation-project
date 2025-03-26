import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'

const features = [
  {
    title: 'Innovative Learning',
    description: 'Experience cutting-edge educational methods that prepare you for the future of technology and innovation.'
  },
  {
    title: 'Expert Mentorship',
    description: 'Learn from industry professionals and experienced mentors who guide you through your learning journey.'
  },
  {
    title: 'Hands-on Projects',
    description: 'Apply your knowledge through real-world projects and build a portfolio that showcases your skills.'
  }
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Index() {
  const { theme } = useTheme()

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      <motion.section 
        className="container mx-auto px-4 pt-32 pb-16 text-center"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
          variants={fadeIn}
        >
          Welcome to Innovation Academy
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Empowering the next generation of innovators through cutting-edge education and hands-on experience.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={fadeIn}
        >
          <Button asChild size="lg">
            <Link to="/programs">Explore Programs</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </motion.section>

      <motion.section 
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn}
        >
          Why Choose Us
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
