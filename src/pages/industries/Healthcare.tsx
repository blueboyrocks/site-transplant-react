'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, TrendingUp, FileText, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import AnimatedCounter from '../../components/AnimatedCounter'

const Healthcare = () => {
  const solutions = [
    {
      icon: FileText,
      title: 'Clinical Documentation',
      description: 'AI-powered note-taking that reduces documentation time by 50% while ensuring accuracy and compliance.',
      features: ['Voice-to-text conversion', 'Medical terminology recognition', 'HIPAA compliant storage']
    },
    {
      icon: Shield,
      title: 'Patient Data Security',
      description: 'Enterprise-grade security with full HIPAA compliance and advanced encryption protocols.',
      features: ['End-to-end encryption', 'Audit trails', 'Access controls']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Identify at-risk patients and optimize treatment outcomes with advanced AI insights.',
      features: ['Risk assessment', 'Treatment recommendations', 'Outcome predictions']
    }
  ]

  const benefits = [
    'Reduce documentation time by 50%',
    'Improve billing accuracy by 35%',
    'Enhance patient satisfaction scores',
    'Ensure HIPAA compliance',
    'Streamline clinical workflows',
    'Reduce administrative burden'
  ]

  const stats = [
    { value: 50, suffix: '%', label: 'Less Documentation Time' },
    { value: 35, suffix: '%', label: 'Better Billing Accuracy' },
    { value: 2, suffix: ' hrs', label: 'Saved Per Doctor Daily' },
    { value: 100, suffix: '%', label: 'HIPAA Compliant' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="w-12 h-12 text-red-400" />
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">Healthcare</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionize Patient Care with AI-Powered Clinical Documentation
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform healthcare delivery with intelligent automation that reduces documentation burden, 
              improves accuracy, and allows providers to focus on what matters most - patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact?type=demo">
                <Button className="btn-primary text-lg px-8 py-4">
                  Schedule Healthcare Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/resources/healthcare-roi-calculator">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Calculate Healthcare ROI
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Healthcare AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI tools designed specifically for healthcare providers to improve efficiency, 
              accuracy, and patient outcomes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg w-fit mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://thedoctorpreneuracademy.com/wp-content/uploads/2024/06/Ai-hospital-5.jpg"
                alt="AI-powered healthcare technology"
                className="w-full rounded-2xl border border-gray-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Transform Healthcare Delivery</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI solutions are specifically designed for healthcare environments, ensuring compliance, 
                security, and seamless integration with existing workflows.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/products/seismic">
                  <Button className="btn-primary">
                    Learn About Seismic
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Healthcare?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare organizations already using our AI solutions to improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?type=demo&industry=healthcare">
                <Button className="btn-primary text-lg px-8 py-4">
                  Schedule Healthcare Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Speak with Healthcare Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Healthcare