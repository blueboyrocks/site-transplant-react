'use client'

import { motion } from 'framer-motion'
import { Heart, DollarSign, Cog, ShoppingCart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const IndustriesSection = () => {
  const industries = [
    {
      name: 'Healthcare',
      title: 'Revolutionize patient care with AI-powered clinical documentation and automated workflows',
      image: 'https://thedoctorpreneuracademy.com/wp-content/uploads/2024/06/Ai-hospital-5.jpg',
      icon: Heart,
      href: '/industries/healthcare',
      benefits: [
        'Reduce documentation time by 50%',
        'Improve billing accuracy by 35%',
        'Enhance patient satisfaction scores',
        'Ensure HIPAA compliance'
      ]
    },
    {
      name: 'Financial Services',
      title: 'Accelerate data insights and automate compliance with enterprise-grade security',
      image: 'https://thumbs.dreamstime.com/z/photo-high-tech-trading-floor-features-digital-screens-financial-analytics-vertical-mobile-wallpaper-photo-high-tech-trading-309989983.jpg',
      icon: DollarSign,
      href: '/industries/financial-services',
      benefits: [
        'Generate insights 10x faster',
        'Automate regulatory reporting',
        'Reduce operational costs by 30%',
        'Enhance fraud detection'
      ]
    },
    {
      name: 'Manufacturing',
      title: 'Optimize operations and predictive maintenance with intelligent automation',
      image: 'https://www.modelcamtechnologies.com/images/blogs/Smart-Factory-Using-IoT.jpg',
      icon: Cog,
      href: '/industries/manufacturing',
      benefits: [
        'Reduce downtime by 40%',
        'Improve quality control',
        'Optimize supply chain',
        'Enhance worker safety'
      ]
    },
    {
      name: 'Retail',
      title: 'Transform customer experience and inventory management with AI-driven insights',
      image: 'https://img.freepik.com/premium-photo/ai-powered-robot-assisting-customer-modern-retail-store-with-her-inquiries_1064559-47348.jpg',
      icon: ShoppingCart,
      href: '/industries/retail',
      benefits: [
        'Personalize customer experiences',
        'Optimize inventory levels',
        'Increase sales conversion by 25%',
        'Automate customer support'
      ]
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Industry-Specific </span>
            <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our AI solutions are tailored to meet the unique challenges and requirements of your industry, 
            ensuring maximum impact and compliance.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Industry Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={`${industry.name} Industry`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 p-3 bg-black/60 backdrop-blur-sm rounded-lg border border-gray-600">
                  <industry.icon className="w-6 h-6 text-purple-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">{industry.name}</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {industry.title}
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link to={industry.href}>
                  <Button className="btn-secondary group w-full">
                    Explore {industry.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Industry CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/30 p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Industry?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our AI solutions are flexible and can be customized for any industry. 
            Let's discuss how we can address your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=consultation">
              <Button className="btn-primary">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button className="btn-secondary">
                Learn About Our Approach
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesSection