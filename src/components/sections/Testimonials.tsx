import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import testimonialAmina from '@/assets/testimonial-amina.jpg'
import testimonialDavid from '@/assets/testimonial-david.jpg'
import testimonial3 from '@/assets/testimonial-3.jpg'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Amina Kipchoge",
      role: "CEO, Nairobi Tech Hub",
      company: "Nairobi Tech Hub",
      image: testimonialAmina,
      rating: 5,
      text: "Eric delivered an exceptional e-commerce platform for our Kenyan startup. His understanding of local market needs and technical expertise are outstanding."
    },
    {
      name: "David Mwangi",
      role: "CTO, Safaricom Digital",
      company: "Safaricom Digital",
      image: testimonialDavid,
      rating: 5,
      text: "Working with Eric on our mobile banking solution was transformative. His ability to understand the African tech landscape and deliver solutions our customers love is remarkable."
    },
    {
      name: "Grace Wanjiku",
      role: "Founder, Shujaa Creative Agency",
      company: "Shujaa Creative Agency",
      image: testimonial3,
      rating: 5,
      text: "Eric's full-stack development skills helped launch our digital marketing platform. Professional, timely, and excellent communication throughout the project."
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gradient-primary mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Testimonial Content */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground mb-8 font-inter leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-primary"
                />
                <div className="text-left">
                  <h4 className="text-lg font-space-grotesk font-bold text-foreground">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-primary text-sm font-inter">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials