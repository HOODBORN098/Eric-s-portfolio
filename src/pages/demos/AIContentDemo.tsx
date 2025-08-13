import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Copy, Download, RefreshCw, ArrowLeft, Wand2, FileText, Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIContentDemo = () => {
  const [activeTab, setActiveTab] = useState('text')
  const [prompt, setPrompt] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const templates = [
    { name: 'Blog Post', category: 'Content', prompt: 'Write a comprehensive blog post about sustainable technology in Kenya' },
    { name: 'Social Media', category: 'Marketing', prompt: 'Create engaging social media content for a tech startup' },
    { name: 'Product Description', category: 'E-commerce', prompt: 'Write compelling product descriptions for Kenyan coffee beans' },
    { name: 'Email Newsletter', category: 'Marketing', prompt: 'Create a professional email newsletter for a fintech company' }
  ]

  const generateContent = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const sampleContent = `# ${prompt.includes('blog') ? 'The Future of Technology in Kenya' : 'Generated Content'}

${prompt.includes('social media') ? 
`🚀 Exciting news! Our latest fintech innovation is revolutionizing how Kenyans manage their finances.

✨ Key features:
• Real-time expense tracking
• AI-powered investment advice
• M-Pesa integration
• Multi-currency support

Join thousands of satisfied users who've already transformed their financial journey! 

#FinTech #Kenya #Innovation #TechStartup #DigitalFinance` :

prompt.includes('product') ?
`## Premium Kenyan Coffee Beans - AA Grade

Experience the rich, full-bodied flavor of authentic Kenyan coffee beans, sourced directly from the highlands of Central Kenya. Our AA grade beans are hand-picked at optimal ripeness and processed using traditional methods passed down through generations.

**Key Features:**
- Single-origin beans from 1,800m altitude farms
- Bright acidity with wine-like characteristics
- Notes of black currant and citrus
- Fair trade certified and sustainably grown
- Freshly roasted to order

**Perfect for:** Pour-over, French press, and espresso brewing methods.

*Taste the difference that comes from decades of coffee farming expertise.*` :

`## Sustainable Technology: Kenya's Path to a Greener Future

Kenya stands at the forefront of sustainable technology adoption in Africa, leveraging innovation to address environmental challenges while driving economic growth. From renewable energy solutions to smart agriculture systems, the country is pioneering approaches that other nations are beginning to emulate.

### The Solar Revolution

With over 300 days of sunshine annually, Kenya has embraced solar technology like few other countries. The government's push for renewable energy has resulted in:

- Over 2,000 MW of solar capacity installed
- Rural electrification reaching 75% of households
- Reduced reliance on fossil fuel imports
- Creation of green jobs in manufacturing and installation

### Smart Agriculture Solutions

Kenyan farmers are adopting precision agriculture technologies that optimize water usage and increase crop yields:

- IoT sensors monitoring soil moisture and weather patterns
- Drone technology for crop surveillance and pest management
- Mobile apps providing real-time market prices and weather forecasts
- Sustainable irrigation systems reducing water consumption by 40%

### The Road Ahead

As Kenya continues to invest in sustainable technology, the focus remains on solutions that are both environmentally sound and economically viable for local communities. The integration of traditional knowledge with modern technology creates a unique approach to sustainability that serves as a model for other developing nations.`}

The future is bright for sustainable technology in Kenya, with innovation driving both environmental protection and economic prosperity.`
    
    setGeneratedContent(sampleContent)
    setIsGenerating(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
  }

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
                <Sparkles className="text-primary" />
                AI Content Studio
              </h1>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">AI Models Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content Type Tabs */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'text', name: 'Text Content', icon: FileText },
              { id: 'image', name: 'Image Generation', icon: ImageIcon },
              { id: 'social', name: 'Social Media', icon: Wand2 }
            ].map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                  activeTab === id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon size={16} />
                {name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Content Generator</h3>
              
              {/* Templates */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Quick Templates</h4>
                <div className="space-y-2">
                  {templates.map((template, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setPrompt(template.prompt)}
                      className="w-full text-left p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                    >
                      <p className="font-medium text-sm">{template.name}</p>
                      <p className="text-xs text-muted-foreground">{template.category}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Custom Prompt */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Custom Prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what content you want to generate..."
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground resize-none h-32 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Generate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateContent}
                disabled={!prompt.trim() || isGenerating}
                className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="animate-spin" size={16} />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Generate Content
                  </>
                )}
              </motion.button>

              {/* Settings */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Settings</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Creativity Level</label>
                    <input type="range" min="1" max="10" defaultValue="7" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Length</label>
                    <select className="w-full p-2 border border-border rounded bg-background text-foreground">
                      <option>Short (100-200 words)</option>
                      <option>Medium (300-500 words)</option>
                      <option>Long (800+ words)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Tone</label>
                    <select className="w-full p-2 border border-border rounded bg-background text-foreground">
                      <option>Professional</option>
                      <option>Casual</option>
                      <option>Formal</option>
                      <option>Creative</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Generated Content</h3>
                {generatedContent && (
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={copyToClipboard}
                      className="p-2 bg-background border border-border rounded-lg hover:bg-muted transition-colors"
                      title="Copy to clipboard"
                    >
                      <Copy size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="p-2 bg-background border border-border rounded-lg hover:bg-muted transition-colors"
                      title="Download as file"
                    >
                      <Download size={16} />
                    </motion.button>
                  </div>
                )}
              </div>

              {generatedContent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="prose prose-slate max-w-none"
                >
                  <div className="bg-background border border-border rounded-lg p-6 min-h-96">
                    <pre className="whitespace-pre-wrap text-foreground font-normal text-sm leading-relaxed">
                      {generatedContent}
                    </pre>
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-96 bg-background border border-dashed border-border rounded-lg">
                  <div className="text-center">
                    <Sparkles className="mx-auto text-muted-foreground mb-4" size={48} />
                    <p className="text-muted-foreground">Enter a prompt and click generate to create content</p>
                  </div>
                </div>
              )}
            </div>

            {/* Usage Stats */}
            {generatedContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{generatedContent.split(' ').length}</p>
                  <p className="text-sm text-muted-foreground">Words</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{generatedContent.length}</p>
                  <p className="text-sm text-muted-foreground">Characters</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">~{Math.ceil(generatedContent.split(' ').length / 200)}</p>
                  <p className="text-sm text-muted-foreground">Reading Time (min)</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 AI Content Studio. All rights reserved. | Demo by Eric Wambua</p>
          <p className="text-sm mt-2">Powered by advanced AI language models for content generation.</p>
        </div>
      </footer>
    </div>
  )
}

export default AIContentDemo