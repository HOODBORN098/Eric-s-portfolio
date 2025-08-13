import { motion } from 'framer-motion'
import { Download, User, MapPin, Phone, Mail, GraduationCap, Briefcase, Code, Award } from 'lucide-react'

const CVDownload = () => {
  const generateAndDownloadCV = () => {
    const cvContent = `
ERIC WAMBUA
Computer Science Major | Full Stack Developer | Cybersecurity Enthusiast | Creative Technologist

Contact Information:
• Email: ericwambua098@gmail.com
• Phone: +254 112 394 362
• Location: Egerton University, Njoro, Kenya
• GitHub: https://github.com/ericwambua
• LinkedIn: https://linkedin.com/in/eric-wambua

PROFESSIONAL SUMMARY
An ambitious and detail-oriented Computer Science major with strong foundations in software engineering, web development, and cybersecurity. Proven ability to manage multiple projects with creativity and technical excellence. Passionate about blending tech innovation with creative solutions.

EDUCATION
Bachelor of Science in Computer Science (2021 – Present)
Egerton University, Njoro, Kenya
Relevant Courses: Software Engineering, Operating Systems, Data Structures, Networks & Security

EXPERIENCE

Freelance Web Developer (2022 – Present)
Self-employed
• Built 10+ responsive websites using MERN stack
• Customized CMS platforms like WordPress for local businesses
• Deployed APIs for client-side integrations
• Delivered secure, user-friendly solutions for Kenyan schools and businesses

Graphics Designer & Photographer (2021 – Present)
Eric Wambua Media
• Edited over 300 high-quality images using Adobe Photoshop
• Directed and edited marketing videos for local tourism agencies
• Created comprehensive branding solutions for clients

TECHNICAL SKILLS
Programming Languages: JavaScript, Python, Java, C++
Frameworks & Libraries: React, Express, Flask, TailwindCSS, Node.js
Tools & Technologies: Git, Docker, Postman, Figma, Adobe Photoshop, MongoDB, MySQL, Firebase
Specializations: Full-stack web development, Cybersecurity, UI/UX Design, API Development

PROJECTS

CBC Grading System
• Secure student assessment system for Kenyan schools built with React.js, Node.js, MongoDB
• Role-based dashboard with JWT authentication
• PDF report generation and automated grade computation
• Demo: https://cbc-system-demo.ericwambua.com

Smart Hostel Management System
• Room allocation system for Egerton University hostels using Python, Flask, SQLite
• Admin login, student application, and automated allocation features
• Occupancy visualization and notification system

Personal Finance Tracker
• Progressive Web App built with Vue.js and Firebase
• Real-time expense tracking with monthly analytics
• Interactive expense breakdown and data export capabilities

CERTIFICATIONS
• Google Cybersecurity Fundamentals (2024)
• FreeCodeCamp Full-Stack Web Development Certification

SOFT SKILLS
• Teamwork and Leadership
• Time Management and Organization
• Creative Problem Solving
• Effective Communication
• Adaptability and Learning Agility

SERVICES & RATES
Web Development: KES 7,500 - 35,000
Graphics Design: KES 800 - 3,000
Photography: KES 1,500 - 6,000
Video Editing: KES 1,000 - 6,000

AVAILABILITY
Currently available for internships, freelance projects, and collaboration opportunities.
Expected graduation: 2025

---
Generated from https://ericwambua.com
    `

    const blob = new Blob([cvContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Eric_Wambua_CV.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const generatePDFCV = () => {
    // This creates a formatted HTML version for better printing/PDF conversion
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Eric Wambua - CV</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        .header { text-align: center; border-bottom: 2px solid #0ea5e9; padding-bottom: 20px; margin-bottom: 30px; }
        .name { font-size: 28px; font-weight: bold; color: #0ea5e9; margin-bottom: 10px; }
        .title { font-size: 16px; color: #666; margin-bottom: 20px; }
        .contact { font-size: 14px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; color: #0ea5e9; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 15px; }
        .job-title { font-weight: bold; color: #333; }
        .company { color: #0ea5e9; font-style: italic; }
        .duration { color: #666; font-size: 14px; }
        .achievement { margin-left: 20px; margin-bottom: 5px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-tag { background: #f0f9ff; color: #0ea5e9; padding: 5px 10px; border-radius: 5px; font-size: 12px; }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">ERIC WAMBUA</div>
        <div class="title">Computer Science Major | Full Stack Developer | Cybersecurity Enthusiast</div>
        <div class="contact">
            📧 ericwambua098@gmail.com | 📱 +254 112 394 362 | 📍 Egerton University, Njoro, Kenya<br>
            🔗 github.com/ericwambua | 💼 linkedin.com/in/eric-wambua
        </div>
    </div>

    <div class="section">
        <div class="section-title">PROFESSIONAL SUMMARY</div>
        <p>An ambitious and detail-oriented Computer Science major with strong foundations in software engineering, web development, and cybersecurity. Proven ability to manage multiple projects with creativity and technical excellence. Passionate about blending tech innovation with creative solutions.</p>
    </div>

    <div class="section">
        <div class="section-title">EDUCATION</div>
        <div class="job-title">Bachelor of Science in Computer Science</div>
        <div class="company">Egerton University, Njoro, Kenya</div>
        <div class="duration">2021 – Present</div>
        <div class="achievement">• Relevant Courses: Software Engineering, Operating Systems, Data Structures, Networks & Security</div>
    </div>

    <div class="section">
        <div class="section-title">EXPERIENCE</div>
        
        <div style="margin-bottom: 20px;">
            <div class="job-title">Freelance Web Developer</div>
            <div class="company">Self-employed</div>
            <div class="duration">2022 – Present</div>
            <div class="achievement">• Built 10+ responsive websites using MERN stack</div>
            <div class="achievement">• Customized CMS platforms like WordPress for local businesses</div>
            <div class="achievement">• Deployed APIs for client-side integrations</div>
        </div>

        <div>
            <div class="job-title">Graphics Designer & Photographer</div>
            <div class="company">Eric Wambua Media</div>
            <div class="duration">2021 – Present</div>
            <div class="achievement">• Edited over 300 high-quality images using Adobe Photoshop</div>
            <div class="achievement">• Directed and edited marketing videos for local tourism agencies</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">TECHNICAL SKILLS</div>
        <div class="skills">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Photoshop</span>
        </div>
    </div>

    <div class="section">
        <div class="section-title">KEY PROJECTS</div>
        <div style="margin-bottom: 15px;">
            <div class="job-title">CBC Grading System</div>
            <div class="achievement">• Secure student assessment system for Kenyan schools (React.js, Node.js, MongoDB)</div>
            <div class="achievement">• Role-based dashboard with JWT authentication and PDF generation</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div class="job-title">Smart Hostel Management System</div>
            <div class="achievement">• Room allocation system using Python, Flask, SQLite</div>
            <div class="achievement">• Automated allocation and occupancy visualization</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">CERTIFICATIONS</div>
        <div class="achievement">• Google Cybersecurity Fundamentals (2024)</div>
        <div class="achievement">• FreeCodeCamp Full-Stack Web Development Certification</div>
    </div>

    <div class="section">
        <div class="section-title">AVAILABILITY</div>
        <p>Currently available for internships, freelance projects, and collaboration opportunities. Expected graduation: 2025.</p>
    </div>
</body>
</html>
    `

    const blob = new Blob([htmlContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Eric_Wambua_CV.html'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.button
        onClick={generatePDFCV}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 btn-neon"
      >
        <Download size={20} />
        Download CV (HTML)
      </motion.button>
      <motion.button
        onClick={generateAndDownloadCV}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 btn-kenya"
      >
        <Download size={20} />
        Download CV (Text)
      </motion.button>
    </div>
  )
}

export default CVDownload