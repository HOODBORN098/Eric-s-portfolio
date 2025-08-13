import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, User, Bot, Loader2 } from 'lucide-react'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Eric's AI assistant. I can help you learn more about Eric's skills, projects, and services. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Eric's information and responses
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return "Eric is skilled in JavaScript, Python, Java, C++, React, Node.js, MongoDB, and cybersecurity. He's also experienced in graphics design, photography, and video editing. He's currently studying Computer Science at Egerton University."
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return "Eric has built several impressive projects including:\n\n🎓 CBC Grading System - A secure student assessment system for Kenyan schools\n🏠 Smart Hostel Management System - Room allocation system for university hostels\n💰 Personal Finance Tracker - A PWA for expense tracking\n\nYou can check out the projects section for more details!"
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('rate') || message.includes('service')) {
      return "Eric offers various services:\n\n💻 Web Development: KES 7,500 - 35,000\n🎨 Graphics Design: KES 800 - 3,000\n📸 Photography: KES 1,500 - 6,000\n🎬 Video Editing: KES 1,000 - 6,000\n\nCheck out the Rate Card section for detailed packages!"
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('hire')) {
      return "You can contact Eric through:\n\n📧 Email: ericwambua098@gmail.com\n📱 WhatsApp: +254 112 394 362\n🐙 GitHub: github.com/ericwambua\n💼 LinkedIn: linkedin.com/in/eric-wambua\n\nHe's currently available for internships and freelance work!"
    }
    
    if (message.includes('education') || message.includes('university') || message.includes('study')) {
      return "Eric is currently pursuing a Bachelor of Science in Computer Science at Egerton University (2021-Present). He's studying courses like Software Engineering, Operating Systems, Data Structures, and Networks & Security."
    }
    
    if (message.includes('location') || message.includes('where') || message.includes('kenya')) {
      return "Eric is based at Egerton University in Njoro, Kenya. He's proud to represent Kenyan tech talent and often incorporates Kenyan identity into his work!"
    }
    
    if (message.includes('experience') || message.includes('background')) {
      return "🎓 Computer Science background\n💼 3+ years of full-stack development\n🏆 Successfully delivered 20+ projects\n🌟 Specializes in modern web technologies\n🇰🇪 Expert in African market solutions\n📱 Mobile-first development approach\n\nExperienced in startups, fintech, e-commerce, and education sectors."
    }
    
    if (message.includes('process') || message.includes('workflow') || message.includes('how do you work')) {
      return "🔄 Eric's Development Process:\n1️⃣ Discovery & Planning (Free consultation)\n2️⃣ Design & Prototyping\n3️⃣ Development with regular updates\n4️⃣ Testing & Quality Assurance\n5️⃣ Deployment & Launch\n6️⃣ 30-day support & maintenance\n\n✅ Agile methodology\n✅ Weekly progress reports\n✅ Client collaboration throughout"
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "👋 Hello! I'm Eric's AI assistant. I can help you learn about:\n• 🛠️ Technical skills & expertise\n• 💼 Previous projects & portfolio\n• 💰 Rates & pricing\n• 📞 Contact information\n• ⚡ Development process\n• 🌍 Location & availability\n\nWhat would you like to know about Eric's services?"
    }
    
    if (message.includes('availability') || message.includes('when') || message.includes('start')) {
      return "📅 Current Availability:\n✅ Available for new projects\n⏱️ Typical start time: 1-2 weeks\n🚀 Rush projects possible (additional cost)\n\n💬 For immediate consultation: WhatsApp\n📧 For detailed proposals: Email\n\nLet's discuss your project timeline and requirements!"
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "🙏 You're welcome! I'm here to help with any questions about Eric's work.\n\n💡 Quick suggestions:\n• Ask about 'rates' for pricing info\n• Ask about 'projects' to see portfolio\n• Ask about 'contact' for direct communication\n• Ask about 'skills' for technical expertise\n\nAnything else you'd like to know?"
    }
    
    return "🤖 Thank you for your message! I'm here to help with information about Eric's:\n• Technical skills & expertise\n• Portfolio & previous work\n• Pricing & packages\n• Contact details & availability\n\nTry asking about 'skills', 'projects', 'rates', or 'contact' for detailed information!"
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <MessageCircle size={24} className="text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-primary-glow flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Eric's Assistant</h3>
                  <p className="text-white/80 text-xs">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-white ml-auto'
                      : 'bg-muted text-foreground'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-muted-foreground" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                      <Loader2 size={16} className="animate-spin text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Eric's skills, projects, or services..."
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot