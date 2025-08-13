import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Shield, Camera, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "MERN Stack, Python Flask, REST APIs",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Network Security, Ethical Hacking, Risk Assessment",
      color: "text-red-400"
    },
    {
      icon: Camera,
      title: "Digital Content Creation",
      description: "Photography, Video Editing, Adobe Creative Suite",
      color: "text-green-400"
    },
    {
      icon: Award,
      title: "Problem Solving",
      description: "Algorithm Design, System Architecture, Innovation",
      color: "text-yellow-400"
    }
  ]

  const timeline = [
    {
      year: "2021",
      title: "Started Computer Science Journey",
      description: "Enrolled at Egerton University, began coding foundations"
    },
    {
      year: "2022",
      title: "First Web Development Projects",
      description: "Built responsive websites and learned MERN stack"
    },
    {
      year: "2023",
      title: "Cybersecurity Focus",
      description: "Completed Google Cybersecurity certification"
    },
    {
      year: "2024",
      title: "Full Stack Mastery",
      description: "Advanced projects with modern frameworks and databases"
    }
  ]

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-gradient-primary mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a Computer Science student at Egerton University, I've spent my academic life immersed in coding, 
            cybersecurity research, and real-world project building. I'm also passionate about creative 
            photography and video production.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className={`inline-flex p-3 bg-background rounded-lg mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={32} />
              </div>
              <h3 className="text-xl font-space-grotesk font-semibold mb-2 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <h3 className="text-3xl md:text-4xl font-space-grotesk font-bold text-center mb-12 text-gradient-silver">
            My Journey
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'}`}>
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 card-hover">
                    <div className="text-2xl font-space-grotesk font-bold text-primary mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-space-grotesk font-medium text-gradient-primary leading-relaxed">
            "I strive to deliver cutting-edge solutions that are both secure and scalable, 
            bridging the gap between innovation and practical implementation."
          </blockquote>
          <cite className="block mt-6 text-lg text-muted-foreground">
            — Eric Wambua
          </cite>
        </motion.div>
      </div>
    </section>
  )
}

export default About