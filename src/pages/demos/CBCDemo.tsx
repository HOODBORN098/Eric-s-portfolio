import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen, Calendar, BarChart3, ArrowLeft, User, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const CBCDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  
  const students = [
    { id: 1, name: 'Amina Hassan', grade: 'Grade 5', average: 85.5, status: 'Excellent' },
    { id: 2, name: 'David Kiprotich', grade: 'Grade 6', average: 78.2, status: 'Good' },
    { id: 3, name: 'Grace Wanjiku', grade: 'Grade 4', average: 92.1, status: 'Excellent' },
    { id: 4, name: 'James Ochieng', grade: 'Grade 5', average: 73.8, status: 'Satisfactory' }
  ]

  const subjects = [
    { name: 'Mathematics', grade5: 82, grade6: 78, grade4: 89 },
    { name: 'English', grade5: 85, grade6: 81, grade4: 91 },
    { name: 'Kiswahili', grade5: 88, grade6: 84, grade4: 93 },
    { name: 'Science', grade5: 79, grade6: 75, grade4: 87 },
    { name: 'Social Studies', grade5: 86, grade6: 82, grade4: 90 }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </Link>
              <h1 className="text-2xl font-bold text-gradient-primary flex items-center gap-2">
                <GraduationCap className="text-primary" />
                CBC Management System
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Academic Year 2024</span>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span className="text-sm">Teacher Portal</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {['dashboard', 'students', 'grades', 'reports'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Students</p>
                    <p className="text-2xl font-bold">285</p>
                    <p className="text-green-500 text-sm">+12 this term</p>
                  </div>
                  <Users className="text-primary" size={32} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Average Grade</p>
                    <p className="text-2xl font-bold">82.4%</p>
                    <p className="text-green-500 text-sm">+2.1% improvement</p>
                  </div>
                  <BarChart3 className="text-primary" size={32} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Subjects</p>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-muted-foreground text-sm">CBC Curriculum</p>
                  </div>
                  <BookOpen className="text-primary" size={32} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Current Term</p>
                    <p className="text-2xl font-bold">Term 1</p>
                    <p className="text-muted-foreground text-sm">Week 8 of 12</p>
                  </div>
                  <Calendar className="text-primary" size={32} />
                </div>
              </motion.div>
            </div>

            {/* Recent Students */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Recent Student Performance</h3>
              <div className="space-y-4">
                {students.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.grade}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{student.average}%</p>
                      <p className={`text-sm ${
                        student.status === 'Excellent' ? 'text-green-500' :
                        student.status === 'Good' ? 'text-blue-500' : 'text-yellow-500'
                      }`}>
                        {student.status}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subject Performance */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Subject Performance Overview</h3>
              <div className="space-y-4">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={subject.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-background rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{subject.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        Avg: {Math.round((subject.grade4 + subject.grade5 + subject.grade6) / 3)}%
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-muted-foreground">Grade 4</p>
                        <p className="font-semibold">{subject.grade4}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-muted-foreground">Grade 5</p>
                        <p className="font-semibold">{subject.grade5}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-muted-foreground">Grade 6</p>
                        <p className="font-semibold">{subject.grade6}%</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Student Management</h3>
            <p className="text-muted-foreground">Student registration, profiles, and academic records management.</p>
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">CBC Grading System</h3>
            <p className="text-muted-foreground">Competency-based assessment and grading tools.</p>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Academic Reports</h3>
            <p className="text-muted-foreground">Generate progress reports, transcripts, and performance analytics.</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="fixed bottom-6 right-6">
        <div className="flex flex-col gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center"
            title="Send Message"
          >
            <Mail size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center"
            title="Call Parent"
          >
            <Phone size={20} />
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 CBC Management System. All rights reserved. | Demo by Eric Wambua</p>
          <p className="text-sm mt-2">Comprehensive school management solution for Kenyan institutions.</p>
        </div>
      </footer>
    </div>
  )
}

export default CBCDemo