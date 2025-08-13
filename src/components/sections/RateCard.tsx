import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RateCard = () => {
  const services = [
    {
      category: "Web Development",
      icon: "🖥️",
      packages: [
        {
          title: "Basic Portfolio Website",
          price: 7500,
          features: [
            "Up to 3 pages",
            "Responsive design",
            "Contact form",
            "1-month support"
          ]
        },
        {
          title: "Business Website",
          price: 20000,
          features: [
            "Up to 6 pages",
            "Custom UI/UX design",
            "WhatsApp integration",
            "Domain + Hosting setup",
            "1 month free support"
          ]
        },
        {
          title: "Advanced System (e.g. CBC Grading, Hostel System)",
          price: 35000,
          features: [
            "Custom dashboard (Admin, User, etc.)",
            "Backend database integration",
            "Authentication & API",
            "Reports & PDF export",
            "3-months support & maintenance"
          ]
        }
      ]
    },
    {
      category: "Graphics Design",
      icon: "🎨",
      packages: [
        {
          title: "Social Media Post Design",
          price: 800,
          features: [
            "One high-quality post",
            "Optimized for IG, FB, Twitter",
            "Fast delivery (24 hrs)"
          ]
        },
        {
          title: "Business Logo Design",
          price: 3000,
          features: [
            "3 concept options",
            "Editable vector files",
            "Social media branding kit"
          ]
        },
        {
          title: "Poster / Banner Design",
          price: 2000,
          features: [
            "Print-ready file",
            "Custom size & theme",
            "Unlimited revisions (2 days)"
          ]
        }
      ]
    },
    {
      category: "Photography",
      icon: "📷",
      packages: [
        {
          title: "Student Portrait Shoot",
          price: 1500,
          features: [
            "5 edited photos",
            "Outdoor shoot at Egerton",
            "Delivery within 24–48 hrs"
          ]
        },
        {
          title: "Event Photography",
          price: 6000,
          features: [
            "2-hour coverage",
            "20+ high-res photos",
            "Online delivery & backup"
          ]
        },
        {
          title: "Brand/Product Shoot",
          price: 3500,
          features: [
            "Studio or outdoor setup",
            "8 edited shots",
            "Suitable for Instagram/shop/ads"
          ]
        }
      ]
    },
    {
      category: "Video Editing",
      icon: "🎬",
      packages: [
        {
          title: "Short Instagram/TikTok Edit",
          price: 1000,
          features: [
            "Up to 60 seconds",
            "Text overlay, transitions, music",
            "Delivered in 24–48 hrs"
          ]
        },
        {
          title: "YouTube Video Edit",
          price: 2500,
          features: [
            "Up to 10 minutes",
            "Intro/Outro design",
            "Color grading + B-rolls"
          ]
        },
        {
          title: "Event Recap Video",
          price: 6000,
          features: [
            "1–3 minutes highlight video",
            "Music sync, transitions",
            "Social media ready export"
          ]
        }
      ]
    }
  ];

  const addOns = [
    { name: "Express Delivery (24 hours)", price: 1000 },
    { name: "Editable Source Files", price: 500 },
    { name: "Extra Revision Round", price: 300 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="ratecard" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Affordable Services & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore affordable, high-quality digital services tailored for the Kenyan market. 
            Transparent pricing. No hidden charges. Flexible packages for startups, students, and growing businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        {services.map((service, serviceIndex) => (
          <motion.div
            key={service.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-2xl font-bold text-foreground">{service.category}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.packages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="perspective-1000"
                >
                  <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {pkg.title}
                      </CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary">KES {pkg.price.toLocaleString()}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <span className="text-accent text-sm mt-1">✓</span>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Add-On Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={addon.name} className="bg-card/30 border-border/30 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">{addon.name}</h4>
                  <p className="text-xl font-bold text-accent">+KES {addon.price.toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/20 rounded-lg p-8 border border-border/30 mb-12"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">Payment Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Accepted Methods:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• M-Pesa</li>
                <li>• Bank Transfer</li>
                <li>• PayPal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Payment Terms:</h4>
              <p className="text-muted-foreground text-sm">
                A 50% deposit is required for all projects above KES 5,000. 
                Full payment on delivery for others.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Interested in working together?</h3>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-glow hover:shadow-glow-intense transition-all duration-300"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RateCard;