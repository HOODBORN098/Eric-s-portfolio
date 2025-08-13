import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, Play, MessageCircle } from 'lucide-react'
import projectEcommerce from '@/assets/project-ecommerce-new.jpg'
import projectFintech from '@/assets/project-fintech-new.jpg'
import projectAIContent from '@/assets/project-ai-content.jpg'
import projectCBCGrading from '@/assets/project-cbc-grading.jpg'
import projectHostelSystem from '@/assets/project-hostel-system.jpg'
import projectFinanceTracker from '@/assets/project-finance-tracker.jpg'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      id: "e-commerce-platform",
      name: "E-Commerce Platform",
      techStack: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
      description: "A comprehensive multi-vendor e-commerce platform with advanced features for modern online retail businesses.",
      features: [
        "Multi-vendor marketplace with vendor dashboard",
        "Real-time inventory management with low-stock alerts",
        "Advanced payment processing (Stripe, M-Pesa, PayPal)",
        "AI-powered product recommendations",
        "Advanced search with filters and faceted navigation",
        "Real-time analytics and business intelligence dashboard",
        "Mobile-responsive PWA with offline functionality",
        "Automated email marketing and customer segmentation",
        "Order tracking and logistics management",
        "Multi-currency and multi-language support",
        "Advanced SEO optimization and meta management",
        "Customer reviews and rating system with moderation"
      ],
      liveDemo: "/demo/ecommerce",
      repoLink: "https://github.com/ericwambua/ecommerce-platform",
      gradient: "from-blue-600 to-purple-600",
      image: projectEcommerce,
      isLive: true
    },
    {
      id: "fintech-dashboard",
      name: "FinTech Analytics Dashboard",
      techStack: ["React.js", "D3.js", "TypeScript", "Python", "FastAPI", "Redis", "PostgreSQL", "WebSocket"],
      description: "Enterprise-grade financial analytics platform with real-time market data processing and advanced algorithmic trading capabilities.",
      features: [
        "Real-time market data feeds with WebSocket connections",
        "Advanced D3.js visualizations and interactive charts",
        "Automated algorithmic trading strategies",
        "Risk assessment and portfolio optimization algorithms",
        "Real-time P&L tracking and performance analytics",
        "Multi-asset portfolio management (stocks, crypto, forex)",
        "Advanced technical analysis indicators and signals",
        "Automated report generation with PDF exports",
        "Compliance monitoring and regulatory reporting",
        "Machine learning price prediction models",
        "Multi-currency support with real-time exchange rates",
        "API integration with major financial data providers"
      ],
      liveDemo: "/demo/fintech",
      repoLink: "https://github.com/ericwambua/fintech-dashboard",
      gradient: "from-green-600 to-teal-600",
      image: projectFintech,
      isLive: true
    },
    {
      id: "ai-content-platform",
      name: "AI Content Generation Platform",
      techStack: ["React.js", "Python", "TensorFlow", "OpenAI API", "MongoDB", "AWS", "Docker", "Kubernetes"],
      description: "Enterprise AI-powered content creation platform with advanced natural language processing and multi-modal content generation.",
      features: [
        "Multi-modal AI content generation (text, images, videos)",
        "Custom brand voice training with fine-tuned models",
        "Advanced content optimization and SEO suggestions",
        "Multi-format content creation (blogs, social media, ads)",
        "Automated content calendar and publishing workflows",
        "Social media platform integration and scheduling",
        "Content performance analytics and A/B testing",
        "Plagiarism detection and originality scoring",
        "Multi-language content generation and translation",
        "Content template library with industry-specific templates",
        "Team collaboration tools with approval workflows",
        "API access for third-party integrations"
      ],
      liveDemo: "/demo/ai-content",
      repoLink: "https://github.com/ericwambua/ai-content-platform",
      gradient: "from-purple-600 to-pink-600",
      image: projectAIContent
    },
    {
      id: "cbc-grading-system",
      name: "CBC Grading System",
      techStack: ["React.js", "Node.js", "MongoDB", "JWT", "Express.js", "PDF-Kit", "Chart.js"],
      description: "Comprehensive student management system for Kenyan schools following CBC curriculum guidelines with advanced analytics and reporting.",
      features: [
        "Multi-role dashboards (Admin, Teacher, Student, Parent)",
        "CBC-compliant grading and assessment tools",
        "Automated grade computation with rubric scoring",
        "Advanced PDF report generation with custom templates",
        "Student performance analytics and trend tracking",
        "Parent portal with real-time progress updates",
        "Class management and timetable scheduling",
        "Exam scheduling and invigilation management",
        "School fee management and payment tracking",
        "SMS and email notification system",
        "Data backup and disaster recovery features",
        "Multi-term academic year management"
      ],
      liveDemo: "/demo/cbc",
      repoLink: "https://github.com/ericwambua/cbc-grading-system",
      gradient: "from-blue-500 to-cyan-500",
      image: projectCBCGrading
    },
    {
      id: "smart-hostel-system",
      name: "Smart Hostel Management System",
      techStack: ["Python", "Flask", "PostgreSQL", "Bootstrap", "Redis", "Celery", "Socket.IO"],
      description: "Advanced hostel management platform for universities with IoT integration, real-time monitoring, and intelligent room allocation.",
      features: [
        "Intelligent room allocation algorithm based on preferences",
        "Real-time occupancy tracking and visualization",
        "IoT integration for smart room monitoring",
        "Online application and payment processing",
        "Maintenance request tracking and management",
        "Visitor management and security features",
        "Emergency alert and notification system",
        "Energy consumption monitoring and billing",
        "Student community features and social networking",
        "Advanced reporting and analytics dashboard",
        "Mobile app for students and staff",
        "Integration with university student information systems"
      ],
      liveDemo: "/demo/hostel",
      repoLink: "https://github.com/ericwambua/hostel-management",
      gradient: "from-purple-500 to-pink-500",
      image: projectHostelSystem
    },
    {
      id: "finance-tracker",
      name: "Personal Finance Tracker",
      techStack: ["Vue.js", "Firebase", "Chart.js", "PWA", "Vuetify", "Cloud Functions"],
      description: "Comprehensive personal finance management PWA with AI-powered insights, investment tracking, and financial goal planning.",
      features: [
        "AI-powered expense categorization and insights",
        "Investment portfolio tracking and analysis",
        "Advanced budgeting with predictive analytics",
        "Bill reminders and automated payment scheduling",
        "Credit score monitoring and improvement tips",
        "Tax preparation and document management",
        "Financial goal setting with milestone tracking",
        "Multi-currency support for international users",
        "Bank account synchronization and transaction import",
        "Detailed financial reports and export options",
        "Offline functionality with data synchronization",
        "Family financial planning and shared budgets"
      ],
      liveDemo: "/demo/finance",
      repoLink: "https://github.com/ericwambua/finance-tracker",
      gradient: "from-green-500 to-emerald-500",
      image: projectFinanceTracker
    }
  ]

  return (
    <section id="projects" ref={ref} className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-gradient-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical skills and problem-solving abilities through real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Project Card */}
              <Link to={`/project/${project.id}`}>
                <div className="relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 card-hover cursor-pointer">
                {/* Project Image/Gradient */}
                <div className={`h-48 relative overflow-hidden`}>
                  {project.image && typeof project.image === 'string' && !project.image.startsWith('/api') ? (
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-primary/80 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors duration-200 shadow-lg"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                  
                  {/* Live Demo Badge */}
                  <div className="absolute bottom-4 left-4">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-2 bg-primary/90 backdrop-blur-sm rounded-lg text-white text-sm font-medium shadow-lg hover:bg-primary transition-colors duration-200"
                    >
                      <Play size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-space-grotesk font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-jetbrains"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 3 && (
                      <div className="text-sm text-primary font-medium">
                        +{project.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Link>
              
              {/* Quick Contact */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href="https://wa.me/+254112394362"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageCircle size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/ericwambua"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-neon"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects