import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, MapPin, Calendar, Award, Briefcase, GraduationCap, Code, FileText } from 'lucide-react'
import CVDownload from '../CVDownload'

const CV = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const cvData = {
    summary: "An ambitious and detail-oriented Computer Science major with strong foundations in software engineering, web development, and cybersecurity. Proven ability to manage multiple projects with creativity and technical excellence.",
    education: [
      {
        institution: "Egerton University",
        degree: "Bachelor of Science in Computer Science",
        duration: "2021 – Present",
        relevantCourses: ["Software Engineering", "Operating Systems", "Data Structures", "Networks & Security"]
      }
    ],
    experience: [
      {
        role: "Freelance Web Developer",
        company: "Self-employed",
        duration: "2022 – Present",
        achievements: [
          "Built 10+ responsive websites using MERN stack",
          "Customized CMS platforms like WordPress for local businesses",
          "Deployed APIs for client-side integrations"
        ]
      },
      {
        role: "Graphics Designer & Photographer",
        company: "Eric Wambua Media",
        duration: "2021 – Present",
        achievements: [
          "Edited over 300 high-quality images using Adobe Photoshop",
          "Directed and edited marketing videos for local tourism agencies"
        ]
      }
    ],
    skills: [
      "Languages: JavaScript, Python, Java, C++",
      "Frameworks: React, Express, Flask, TailwindCSS",
      "Tools: Git, Docker, Postman, Figma, Photoshop",
      "Databases: MongoDB, MySQL, Firebase",
      "Soft Skills: Teamwork, Leadership, Time Management, Communication"
    ],
    certifications: [
      "Google Cybersecurity Fundamentals (2024)",
      "FreeCodeCamp Full-Stack Web Dev Certification"
    ]
  }

  return (
    <section id="cv" ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-gradient-primary mb-6">
            Curriculum Vitae
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            My professional journey, skills, and achievements in the world of technology
          </p>
          
          {/* Download CV Buttons */}
          <CVDownload />
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-space-grotesk font-bold text-foreground">Professional Summary</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {cvData.summary}
            </p>
          </div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full hidden lg:block" />

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-16 lg:pr-8 lg:w-1/2 lg:ml-auto lg:pl-12"
          >
            <div className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold text-foreground">Education</h3>
              </div>
              
              {cvData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-2 w-3 h-3 bg-primary rounded-full" />
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <MapPin size={16} />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Relevant Courses:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline dot for large screens */}
            <div className="absolute right-0 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block" />
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-16 lg:pl-8 lg:w-1/2 lg:pr-12"
          >
            <div className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Briefcase className="text-green-400" size={24} />
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold text-foreground">Experience</h3>
              </div>
              
              {cvData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-6 relative mb-8 last:mb-0">
                  <div className="absolute -left-2 top-2 w-3 h-3 bg-primary rounded-full" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h4>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline dot for large screens */}
            <div className="absolute left-0 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block" />
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mb-16 lg:pr-8 lg:w-1/2 lg:ml-auto lg:pl-12"
          >
            <div className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Code className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold text-foreground">Technical Skills</h3>
              </div>
              
              <div className="space-y-4">
                {cvData.skills.map((skillGroup, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-lg">
                    <p className="text-muted-foreground">{skillGroup}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Timeline dot for large screens */}
            <div className="absolute right-0 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block" />
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative lg:pl-8 lg:w-1/2 lg:pr-12"
          >
            <div className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold text-foreground">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {cvData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Timeline dot for large screens */}
            <div className="absolute left-0 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block" />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl">
            <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm actively seeking internship opportunities and exciting projects to contribute to. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:ericwambua098@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon"
              >
                Contact Me
              </motion.a>
              <CVDownload />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CV