import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">LeapGen.AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering Artificial Intelligence Solutions for Tomorrow's Challenges.
              Trusted by 500+ organizations worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/leap-gen-solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/LeapgenAi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/leapgen_solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@leapgensolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products/surroundai" className="text-gray-400 hover:text-white transition-colors">SurroundAI</Link></li>
              <li><Link to="/products/data-coffee" className="text-gray-400 hover:text-white transition-colors">Data Coffee</Link></li>
              <li><Link to="/products/seismic" className="text-gray-400 hover:text-white transition-colors">Seismic</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><Link to="/industries/healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/financial-services" className="text-gray-400 hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link to="/industries/manufacturing" className="text-gray-400 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/industries/retail" className="text-gray-400 hover:text-white transition-colors">Retail</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contact@leapgen.ai</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Enterprise-grade security • HIPAA compliant • GDPR ready
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer