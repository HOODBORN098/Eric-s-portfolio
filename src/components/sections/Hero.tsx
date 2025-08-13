import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react'
import workspaceHero from '@/assets/workspace-hero.jpg'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background">
      {/* Animated Background with workspace image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${workspaceHero})` }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-card/30 backdrop-blur-sm border border-border rounded-full text-sm text-muted-foreground"
          >
            <MapPin size={16} />
            Egerton University, Njoro, Kenya
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-space-grotesk font-bold"
          >
            <span className="block text-gradient-primary">Eric Wambua</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-inter font-normal text-muted-foreground mt-4">
              Computer Science Major | Full Stack Developer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about blending tech innovation with creative solutions. 
            Specializing in cybersecurity, full-stack development, and digital content creation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button
              onClick={scrollToAbout}
              className="btn-neon group"
            >
              View My Work
              <ArrowDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <a
              href="https://wa.me/+254112394362"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-kenya flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center items-center gap-6 pt-8"
          >
            {[
              { icon: Github, href: "https://github.com/ericwambua", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/eric-ujuzi-techlabz-wambua-01894928a", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/hoodborn_visuals_media", label: "Instagram" },
              { icon: Mail, href: "mailto:ericwambua098@gmail.com", label: "Email" },
              { icon: MessageCircle, href: "https://wa.me/+254112394362", label: "WhatsApp" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-card/20 backdrop-blur-sm border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero