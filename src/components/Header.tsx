'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { name: 'SurroundAI', href: '/products/surroundai', description: 'AI-powered customer support automation' },
    { name: 'Data Coffee', href: '/products/data-coffee', description: 'Centralized data analytics platform' },
    { name: 'Seismic', href: '/products/seismic', description: 'Clinical documentation with AI' },
  ]

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Financial Services', href: '/industries/financial-services' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
  ]

  const useCases = [
    { name: 'Finance & Banking', href: '/use-cases/finance', description: 'Predictive intelligence for financial services' },
    { name: 'Healthcare', href: '/use-cases/healthcare', description: 'Proactive patient care and unified records' },
    { name: 'Government & Education', href: '/use-cases/sled', description: 'Data-driven public service optimization' },
    { name: 'Retail & E-commerce', href: '/use-cases/retail', description: 'Customer experience personalization' },
  ]

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-2xl font-bold gradient-text">LeapGen.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-4 space-y-3">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          className="block p-3 hover:bg-gray-800 rounded-lg transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="font-semibold text-white">{product.name}</div>
                          <div className="text-sm text-gray-400">{product.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('use-cases')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors">
                <span>Use Cases</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'use-cases' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-4 space-y-3">
                      {useCases.map((useCase) => (
                        <Link
                          key={useCase.name}
                          to={useCase.href}
                          className="block p-3 hover:bg-gray-800 rounded-lg transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="font-semibold text-white">{useCase.name}</div>
                          <div className="text-sm text-gray-400">{useCase.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-4 space-y-2">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          to={industry.href}
                          className="block p-2 hover:bg-gray-800 rounded-lg transition-colors text-white"
                          onClick={closeMenu}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
              About Us
            </Link>
            <Link to="/resources" className="text-white hover:text-purple-400 transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact?type=demo">
              <Button className="btn-primary">
                Schedule Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900 border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-4">
                <div className="space-y-2">
                  <div className="font-semibold text-gray-300">Products</div>
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block pl-4 py-2 text-white hover:text-purple-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="font-semibold text-gray-300">Use Cases</div>
                  {useCases.map((useCase) => (
                    <Link
                      key={useCase.name}
                      to={useCase.href}
                      className="block pl-4 py-2 text-white hover:text-purple-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {useCase.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-300">Industries</div>
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      to={industry.href}
                      className="block pl-4 py-2 text-white hover:text-purple-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="block py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/resources"
                  className="block py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={closeMenu}
                >
                  Resources
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                <div className="pt-4">
                  <Link to="/contact?type=demo" onClick={closeMenu}>
                    <Button className="btn-primary w-full">
                      Schedule Free Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header