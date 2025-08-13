import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Testimonials from '../components/sections/Testimonials'
import RateCard from '../components/sections/RateCard'
import CV from '../components/sections/CV'
import Contact from '../components/sections/Contact'
import ChatBot from '../components/ChatBot'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import BackToTop from '../components/BackToTop'
import LoadingScreen from '../components/LoadingScreen'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <RateCard />
            <CV />
            <Contact />
          </main>
          
          {/* Footer */}
          <footer className="py-12 px-6 border-t border-border bg-card/20">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                {/* About */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-space-grotesk font-bold text-gradient-primary mb-4">
                    Eric Wambua
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Full-stack developer specializing in modern web technologies and creating 
                    exceptional digital experiences.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-space-grotesk font-semibold text-foreground mb-4">
                    Quick Links
                  </h4>
                  <div className="space-y-2">
                    {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                      <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="font-space-grotesk font-semibold text-foreground mb-4">
                    Contact
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>ericwambua098@gmail.com</p>
                    <p>+254 112 394 362</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8 text-center">
                <p className="text-muted-foreground">
                  © 2024 Eric Wambua. Built with React, TypeScript, and Framer Motion
                </p>
              </div>
            </div>
          </footer>
          
          {/* Floating Elements */}
          <ChatBot />
          <FloatingWhatsApp />
          <BackToTop />
        </div>
      )}
    </>
  );
};

export default Index;
