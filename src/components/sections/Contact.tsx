import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:ericwambua098@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ericwambua098@gmail.com",
      href: "mailto:ericwambua098@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+254 112 394 362",
      href: "https://wa.me/254112394362"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0112394362",
      href: "tel:0112394362"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Egerton University, Njoro, Kenya",
      href: "https://maps.google.com/?q=Egerton+University+Njoro"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/ericwambua",
      color: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/eric-ujuzi-techlabz-wambua-01894928a",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      title: "Instagram",
      href: "https://www.instagram.com/hoodborn_visuals_media",
      color: "hover:text-pink-400"
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-gradient-primary mb-6">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Available for internships, freelance work, or collaboration. 
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-space-grotesk font-semibold mb-4 text-foreground">
                Send me a message
              </h3>
              <p className="text-muted-foreground mb-6">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 btn-neon"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-space-grotesk font-semibold mb-4 text-foreground">
                Get in touch
              </h3>
              <p className="text-muted-foreground mb-8">
                Prefer to reach out directly? Here are all the ways you can contact me.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                 <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-space-grotesk font-semibold mb-4 text-foreground">
                Follow me online
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-gradient-to-br from-card to-card/80 border border-border rounded-lg text-muted-foreground ${social.color} hover:border-primary/50 hover:shadow-xl hover:shadow-primary/25 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 transition-all duration-300`}
                    aria-label={social.title}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-green-400">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to internship opportunities, freelance projects, and collaboration. 
                Expected to graduate in 2025.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact