import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Heart, Filter, Search, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const EcommerceDemo = () => {
  const [cartItems, setCartItems] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  
  const products = [
    {
      id: 1,
      name: "Kenyan Coffee Beans - AA Grade",
      price: 850,
      originalPrice: 1200,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      rating: 4.8,
      reviews: 245,
      category: "Coffee & Tea"
    },
    {
      id: 2,
      name: "Maasai Beaded Jewelry Set",
      price: 2500,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      rating: 4.9,
      reviews: 89,
      category: "Jewelry"
    },
    {
      id: 3,
      name: "Kikoy Beach Towel",
      price: 1200,
      originalPrice: 1800,
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400",
      rating: 4.7,
      reviews: 156,
      category: "Textiles"
    },
    {
      id: 4,
      name: "Kenyan Black Tea Premium",
      price: 450,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
      rating: 4.6,
      reviews: 203,
      category: "Coffee & Tea"
    },
    {
      id: 5,
      name: "Soapstone Sculpture",
      price: 3200,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      rating: 4.9,
      reviews: 67,
      category: "Art & Crafts"
    },
    {
      id: 6,
      name: "African Print Fabric",
      price: 800,
      originalPrice: 1100,
      image: "https://images.unsplash.com/photo-1594736797933-d0400caa4501?w=400",
      rating: 4.8,
      reviews: 134,
      category: "Textiles"
    }
  ]

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1)
  }

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
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
              <h1 className="text-2xl font-bold text-gradient-primary">KenyaMart</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="relative p-2 bg-primary text-primary-foreground rounded-lg"
              >
                <ShoppingCart size={20} />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Authentic Kenyan Products</h2>
            <p className="text-xl text-muted-foreground mb-8">From coffee to crafts, discover the best of Kenya</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <Filter size={20} className="text-muted-foreground" />
            <div className="flex gap-2 flex-wrap">
              {['All', 'Coffee & Tea', 'Jewelry', 'Textiles', 'Art & Crafts'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      size={20}
                      className={favorites.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}
                    />
                  </button>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-semibold">
                      SALE
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">KSh {product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          KSh {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product.id)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">KenyaMart</h3>
              <p className="text-muted-foreground">Your trusted source for authentic Kenyan products.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Coffee & Tea</li>
                <li>Jewelry</li>
                <li>Textiles</li>
                <li>Art & Crafts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Contact Us</li>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Payment Methods</h4>
              <p className="text-muted-foreground">M-Pesa, Visa, Mastercard, PayPal</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 KenyaMart. All rights reserved. | Demo by Eric Wambua</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EcommerceDemo