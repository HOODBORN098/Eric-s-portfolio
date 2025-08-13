import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, BarChart3, PieChart, ArrowLeft, Wallet, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

const FintechDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  
  const portfolioData = [
    { name: 'Safaricom (SCOM)', value: 45000, change: 2.5, trend: 'up' },
    { name: 'Equity Bank (EQTY)', value: 32000, change: -1.2, trend: 'down' },
    { name: 'KCB Group (KCB)', value: 28000, change: 1.8, trend: 'up' },
    { name: 'East African Breweries (EABL)', value: 22000, change: 0.5, trend: 'up' },
    { name: 'Co-operative Bank (COOP)', value: 18000, change: -0.8, trend: 'down' }
  ]

  const transactions = [
    { id: 1, type: 'buy', asset: 'SCOM', amount: 5000, date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'sell', asset: 'EQTY', amount: 3200, date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'buy', asset: 'KCB', amount: 2800, date: '2024-01-13', status: 'pending' },
    { id: 4, type: 'dividend', asset: 'EABL', amount: 450, date: '2024-01-12', status: 'completed' }
  ]

  const marketData = [
    { symbol: 'NSE20', value: 1850.45, change: 15.2, percentage: 0.83 },
    { symbol: 'NSE25', value: 3247.89, change: -8.7, percentage: -0.27 },
    { symbol: 'NASI', value: 156.78, change: 2.1, percentage: 1.36 }
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
              <h1 className="text-2xl font-bold text-gradient-primary">FinanceHub</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Last updated: 2 min ago</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {['dashboard', 'portfolio', 'trading', 'analytics'].map((tab) => (
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

      {/* Dashboard Content */}
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
                    <p className="text-muted-foreground text-sm">Total Portfolio</p>
                    <p className="text-2xl font-bold">KSh 145,000</p>
                    <p className="text-green-500 text-sm flex items-center gap-1">
                      <TrendingUp size={16} />
                      +2.1% today
                    </p>
                  </div>
                  <Wallet className="text-primary" size={32} />
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
                    <p className="text-muted-foreground text-sm">Available Cash</p>
                    <p className="text-2xl font-bold">KSh 12,500</p>
                    <p className="text-muted-foreground text-sm">Ready to invest</p>
                  </div>
                  <CreditCard className="text-primary" size={32} />
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
                    <p className="text-muted-foreground text-sm">Day's Gain/Loss</p>
                    <p className="text-2xl font-bold text-green-500">+KSh 3,045</p>
                    <p className="text-green-500 text-sm">+2.14%</p>
                  </div>
                  <TrendingUp className="text-green-500" size={32} />
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
                    <p className="text-muted-foreground text-sm">Total Investments</p>
                    <p className="text-2xl font-bold">5 Assets</p>
                    <p className="text-muted-foreground text-sm">Diversified</p>
                  </div>
                  <PieChart className="text-primary" size={32} />
                </div>
              </motion.div>
            </div>

            {/* Market Overview */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Market Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {marketData.map((market, index) => (
                  <motion.div
                    key={market.symbol}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-background rounded-lg"
                  >
                    <div>
                      <p className="font-semibold">{market.symbol}</p>
                      <p className="text-2xl font-bold">{market.value}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${market.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {market.change > 0 ? '+' : ''}{market.change}
                      </p>
                      <p className={`text-sm ${market.percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {market.percentage > 0 ? '+' : ''}{market.percentage}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Portfolio Holdings */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Top Holdings</h3>
              <div className="space-y-4">
                {portfolioData.map((stock, index) => (
                  <motion.div
                    key={stock.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold">{stock.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {((stock.value / 145000) * 100).toFixed(1)}% of portfolio
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">KSh {stock.value.toLocaleString()}</p>
                      <p className={`text-sm flex items-center gap-1 ${
                        stock.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {stock.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        {stock.change > 0 ? '+' : ''}{stock.change}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Recent Transactions</h3>
              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-background rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        transaction.type === 'buy' ? 'bg-green-500' : 
                        transaction.type === 'sell' ? 'bg-red-500' : 'bg-blue-500'
                      }`}></div>
                      <div>
                        <p className="font-semibold capitalize">{transaction.type} {transaction.asset}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">KSh {transaction.amount.toLocaleString()}</p>
                      <p className={`text-sm capitalize ${
                        transaction.status === 'completed' ? 'text-green-500' : 'text-yellow-500'
                      }`}>
                        {transaction.status}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Portfolio Management</h3>
            <p className="text-muted-foreground">Detailed portfolio analytics and rebalancing tools coming soon...</p>
          </div>
        )}

        {activeTab === 'trading' && (
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Trading Platform</h3>
            <p className="text-muted-foreground">Advanced trading interface with real-time data coming soon...</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Advanced Analytics</h3>
            <p className="text-muted-foreground">Risk analysis and performance metrics coming soon...</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 FinanceHub. All rights reserved. | Demo by Eric Wambua</p>
          <p className="text-sm mt-2">This is a demonstration of financial dashboard capabilities.</p>
        </div>
      </footer>
    </div>
  )
}

export default FintechDemo