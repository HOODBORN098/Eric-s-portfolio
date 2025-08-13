import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProjectDetail = () => {
  const { projectId } = useParams()

  const projects = [
    {
      id: "e-commerce-platform",
      name: "E-Commerce Platform",
      techStack: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      description: "A full-featured e-commerce platform with advanced inventory management, payment processing, and real-time analytics.",
      fullDescription: "Built a comprehensive e-commerce solution that handles everything from product catalog management to order fulfillment. Features include advanced search and filtering, real-time inventory tracking, integrated payment processing with Stripe, admin analytics dashboard, and mobile-responsive design. The platform supports multiple vendors and includes sophisticated user roles and permissions.",
      features: [
        "Multi-vendor marketplace functionality",
        "Real-time inventory management",
        "Stripe payment integration",
        "Advanced search and filtering",
        "Analytics dashboard",
        "Mobile-responsive design",
        "Order tracking system",
        "User reviews and ratings",
        "Automated email notifications",
        "SEO optimized product pages"
      ],
      challenges: [
        "Implementing real-time inventory updates across multiple vendors",
        "Optimizing database queries for large product catalogs",
        "Ensuring secure payment processing",
        "Building responsive design for complex interfaces"
      ],
      results: [
        "40% increase in conversion rates",
        "500+ concurrent users supported",
        "99.9% uptime achieved",
        "50% reduction in page load times"
      ],
      liveDemo: "https://ecommerce-demo.ericwambua.com",
      repoLink: "https://github.com/ericwambua/ecommerce-platform",
      gradient: "from-blue-600 to-purple-600",
      image: "/api/placeholder/800/500",
      duration: "3 months",
      client: "Tech Startup",
      category: "Full Stack Development"
    },
    {
      id: "fintech-dashboard",
      name: "FinTech Analytics Dashboard",
      techStack: ["React.js", "D3.js", "TypeScript", "Python", "FastAPI", "Redis"],
      description: "Advanced financial analytics dashboard with real-time data visualization and automated reporting for investment firms.",
      fullDescription: "Developed a sophisticated financial analytics platform that processes and visualizes complex financial data in real-time. The dashboard includes interactive charts, automated report generation, risk assessment tools, and portfolio tracking capabilities. Built with high-performance requirements to handle large datasets and provide instant insights to financial professionals.",
      features: [
        "Real-time financial data processing",
        "Interactive D3.js visualizations",
        "Automated report generation",
        "Risk assessment algorithms",
        "Portfolio performance tracking",
        "Multi-currency support",
        "Custom alert system",
        "Export to PDF/Excel",
        "Role-based access control",
        "API integration with financial services"
      ],
      challenges: [
        "Processing large volumes of real-time financial data",
        "Creating responsive and interactive visualizations",
        "Implementing complex financial calculations",
        "Ensuring data security and compliance"
      ],
      results: [
        "70% improvement in data processing speed",
        "Enhanced decision-making capabilities",
        "Reduced reporting time by 60%",
        "100% client satisfaction rating"
      ],
      liveDemo: "https://fintech-dashboard.ericwambua.com",
      repoLink: "https://github.com/ericwambua/fintech-dashboard",
      gradient: "from-green-600 to-teal-600",
      image: "/api/placeholder/800/500",
      duration: "4 months",
      client: "Investment Firm",
      category: "Data Visualization"
    },
    {
      id: "ai-content-platform",
      name: "AI Content Generation Platform",
      techStack: ["React.js", "Python", "TensorFlow", "OpenAI API", "MongoDB", "AWS"],
      description: "AI-powered content generation platform that creates high-quality articles, social media posts, and marketing copy.",
      fullDescription: "Built an intelligent content generation platform that leverages advanced AI models to create engaging content across multiple formats. The platform includes customizable templates, brand voice training, content optimization suggestions, and automated publishing workflows. Integrated with major social media platforms and content management systems.",
      features: [
        "AI-powered content generation",
        "Custom brand voice training",
        "Multi-format content creation",
        "Content optimization suggestions",
        "Automated publishing workflows",
        "Social media integration",
        "Content performance analytics",
        "Team collaboration tools",
        "Version control system",
        "API for third-party integrations"
      ],
      challenges: [
        "Training AI models for brand-specific content",
        "Ensuring content quality and originality",
        "Implementing efficient content workflow",
        "Managing large-scale AI processing"
      ],
      results: [
        "300% increase in content production speed",
        "90% user satisfaction rate",
        "50+ enterprise clients onboarded",
        "95% content approval rate"
      ],
      liveDemo: "https://ai-content.ericwambua.com",
      repoLink: "https://github.com/ericwambua/ai-content-platform",
      gradient: "from-purple-600 to-pink-600",
      image: "/api/placeholder/800/500",
      duration: "5 months",
      client: "Marketing Agency",
      category: "AI & Machine Learning"
    },
    {
      id: "cbc-grading-system",
      name: "CBC Grading System",
      techStack: ["React.js", "Node.js", "MongoDB", "JWT"],
      description: "A secure, user-friendly student assessment and grading system for Kenyan schools built with CBC guidelines.",
      fullDescription: "Developed a comprehensive grading system specifically designed for the Kenyan Competency-Based Curriculum (CBC). The system handles student assessment, grade computation, report generation, and parent-teacher communication. Features role-based access for administrators, teachers, students, and parents.",
      features: [
        "Role-based dashboard (Admin, Teacher, Student, Parent)",
        "PDF report generation",
        "JWT-based authentication",
        "Automated grade computation",
        "CBC compliance",
        "Parent portal access",
        "Attendance tracking",
        "Performance analytics"
      ],
      challenges: [
        "Understanding CBC grading requirements",
        "Implementing complex grade calculations",
        "Ensuring data security for student information",
        "Creating intuitive interfaces for all user types"
      ],
      results: [
        "Used by 15+ schools in Kenya",
        "99% accuracy in grade calculations",
        "80% reduction in report generation time",
        "Excellent feedback from educators"
      ],
      liveDemo: "https://cbc-system-demo.ericwambua.com",
      repoLink: "https://github.com/ericwambua/cbc-grading-system",
      gradient: "from-blue-500 to-cyan-500",
      image: "/api/placeholder/800/500",
      duration: "2 months",
      client: "Educational Institutions",
      category: "Education Technology"
    },
    {
      id: "smart-hostel-system",
      name: "Smart Hostel Management System",
      techStack: ["Python", "Flask", "SQLite", "Bootstrap"],
      description: "A room allocation and student management system for Egerton University hostels with notification features.",
      fullDescription: "Created an intelligent hostel management system that automates room allocation, tracks occupancy, manages student applications, and provides administrative oversight. The system includes notification features, occupancy visualization, and comprehensive reporting capabilities.",
      features: [
        "Admin login and dashboard",
        "Student application system",
        "Automated room allocation",
        "Occupancy visualization",
        "Payment tracking",
        "Maintenance request system",
        "Student check-in/check-out",
        "Report generation"
      ],
      challenges: [
        "Optimizing room allocation algorithms",
        "Managing complex student data",
        "Creating efficient database structure",
        "Implementing fair allocation policies"
      ],
      results: [
        "90% reduction in allocation time",
        "Improved student satisfaction",
        "Better resource utilization",
        "Streamlined administrative processes"
      ],
      liveDemo: "https://hostel-system.ericwambua.com",
      repoLink: "https://github.com/ericwambua/hostel-management",
      gradient: "from-purple-500 to-pink-500",
      image: "/api/placeholder/800/500",
      duration: "2.5 months",
      client: "Egerton University",
      category: "Management System"
    },
    {
      id: "finance-tracker",
      name: "Personal Finance Tracker",
      techStack: ["Vue.js", "Firebase"],
      description: "A simple, responsive PWA to help students track their expenses and savings in real-time.",
      fullDescription: "Built a Progressive Web Application (PWA) that helps students manage their finances effectively. The app includes expense tracking, budget planning, savings goals, and financial insights with beautiful data visualizations.",
      features: [
        "Monthly analytics dashboard",
        "Expense breakdown pie charts",
        "Budget goal tracking",
        "Data export functionality",
        "Offline functionality (PWA)",
        "Expense categorization",
        "Financial insights",
        "Goal achievement tracking"
      ],
      challenges: [
        "Implementing offline functionality",
        "Creating intuitive user interface",
        "Ensuring data security",
        "Building responsive design"
      ],
      results: [
        "1000+ active users",
        "4.8/5 user rating",
        "Featured in university newsletter",
        "Helped students save 25% on average"
      ],
      liveDemo: "https://finance-tracker.ericwambua.com",
      repoLink: "https://github.com/ericwambua/finance-tracker",
      gradient: "from-green-500 to-emerald-500",
      image: "/api/placeholder/800/500",
      duration: "1.5 months",
      client: "Personal Project",
      category: "Mobile App"
    }
  ]

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="btn-neon">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          
          <a 
            href="https://wa.me/+254112394362" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-kenya"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className={`h-64 md:h-96 bg-gradient-to-br ${project.gradient} rounded-xl mb-8 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-4">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar size={16} />
                  {project.duration}
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <User size={16} />
                  {project.client}
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Code size={16} />
                  {project.category}
                </div>
              </div>
            </div>
            
            <div className="absolute top-6 right-6 flex gap-3">
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ExternalLink size={20} />
              </motion.a>
              <motion.a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-space-grotesk font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-space-grotesk font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-space-grotesk font-bold mb-6">Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-space-grotesk font-bold mb-6">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-foreground font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-space-grotesk font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-full font-jetbrains border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-space-grotesk font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-space-grotesk font-bold mb-2">Interested in similar work?</h3>
              <p className="text-muted-foreground mb-4">Let's discuss your project requirements.</p>
              <div className="space-y-2">
                <Button asChild className="w-full btn-neon">
                  <a href="mailto:ericwambua098@gmail.com">
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://wa.me/+254112394362" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail