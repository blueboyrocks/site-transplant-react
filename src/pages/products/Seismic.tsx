'use client'

import { motion } from 'framer-motion'
import { FileText, Heart, Shield, Brain, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import AnimatedCounter from '../../components/AnimatedCounter'

const Seismic = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI-Powered Clinical Documentation',
      description: 'Automatically generate comprehensive clinical notes from patient interactions using advanced natural language processing.',
      capabilities: ['Real-time transcription', 'Medical terminology recognition', 'Structured note generation', 'Template customization']
    },
    {
      icon: Brain,
      title: 'Emotional Intelligence Insights',
      description: 'Analyze patient emotional states and communication patterns to enhance care quality and patient satisfaction.',
      capabilities: ['Sentiment analysis', 'Emotional state tracking', 'Communication insights', 'Care recommendations']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant Security',
      description: 'Enterprise-grade security and compliance features designed specifically for healthcare environments.',
      capabilities: ['End-to-end encryption', 'Audit trails', 'Access controls', 'Compliance monitoring']
    }
  ]

  const benefits = [
    '79% less documentation time',
    '89% billing accuracy improvement',
    '100% HIPAA compliant',
    'Real-time clinical insights',
    'Automated coding suggestions',
    'Enhanced patient satisfaction'
  ]

  const stats = [
    { value: 79, suffix: '%', label: 'Time Saved' },
    { value: 89, suffix: '%', label: 'Billing Accuracy' },
    { value: 100, suffix: '%', label: 'HIPAA Compliant' },
    { value: 2, suffix: ' hrs', label: 'Saved Per Doctor Daily' }
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
            <img
              src="https://live.staticflickr.com/65535/50722535078_be9a617405_b.jpg"
              alt="Seismic Clinical Documentation"
              className="w-full max-w-2xl mx-auto rounded-2xl mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Seismic</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Clinical Documentation AI
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Reduce Documentation Time by 79% with 89% Billing Accuracy
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI-powered clinical notes with emotional intelligence, automated billing codes, and HIPAA compliance. 
              Transform healthcare documentation while enhancing patient care quality and revenue cycle management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact?type=demo&product=seismic">
                <Button className="btn-primary text-lg px-8 py-4">
                  Request Seismic Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/resources/seismic-roi-calculator">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Calculate Time Savings
                </Button>
              </Link>
            </div>

            {/* Stats */}
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

      {/* Platform Overview */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://cdn.prod.website-files.com/6626cd90a59907680f6ccb64/665cd301dd25792d97cb5600_hero-freed-p-800.png"
                alt="Seismic Clinical Interface"
                className="w-full rounded-2xl border border-gray-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Healthcare AI</h2>
              <p className="text-xl text-gray-300 mb-8">
                Seismic combines cutting-edge AI technology with deep healthcare expertise to deliver documentation solutions 
                that enhance both efficiency and care quality.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Clinical Documentation Made Simple</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>✓ Voice-to-text conversion</div>
                    <div>✓ Medical terminology recognition</div>
                    <div>✓ Automated billing codes</div>
                    <div>✓ Patient sentiment analysis</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Clinical AI Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seismic provides the complete toolkit for modern clinical documentation, from AI-powered note generation to emotional intelligence insights.
            </p>
          </motion.div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Feature Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
                    <feature.icon className="w-24 h-24 mx-auto mb-6 text-purple-400" />
                    <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                    <div className="space-y-2">
                      {feature.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="text-gray-400 text-sm">
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Transform Healthcare Documentation</h2>
              <p className="text-xl text-gray-300 mb-8">
                Seismic revolutionizes how healthcare providers document patient care, reducing administrative burden while improving care quality and billing accuracy.
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
                <Link to="/industries/healthcare">
                  <Button className="btn-primary">
                    Learn About Healthcare Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <Heart className="w-16 h-16 mx-auto mb-4 text-red-400" />
                  <h3 className="text-2xl font-bold text-white mb-4">Patient-Centered Care</h3>
                  <p className="text-gray-300">
                    By reducing documentation time by 79%, healthcare providers can spend more time with patients, 
                    leading to better outcomes and higher satisfaction scores.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold gradient-text">2x</div>
                    <div className="text-gray-400 text-sm">More Patient Time</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold gradient-text">95%</div>
                    <div className="text-gray-400 text-sm">Provider Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Clinical Documentation?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare organizations already using Seismic to improve documentation efficiency and patient care quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?type=demo&product=seismic">
                <Button className="btn-primary text-lg px-8 py-4">
                  Schedule Seismic Demo
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

export default Seismic