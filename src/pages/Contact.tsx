'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Calendar, MessageSquare, ArrowRight } from 'lucide-react'
import { GradientButton } from '../components/ui/gradient-button'
import { EnhancedCard } from '../components/ui/enhanced-card'
import { AnimatedBackground } from '../components/ui/animated-background'
import { FloatingElements } from '../components/ui/floating-elements'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface ContactForm {
  name: string
  email: string
  company: string
  phone: string
  message: string
  type: string
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Thank you! We\'ll be in touch within 24 hours.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
    setIsSubmitting(false)
  }

  const contactOptions = [
    {
      icon: Calendar,
      title: 'Schedule a Demo',
      description: 'Get a personalized demonstration of our AI solutions',
      action: 'Book Demo Call',
      href: '#demo-form'
    },
    {
      icon: Phone,
      title: 'Speak with Expert',
      description: 'Talk directly with our AI specialists',
      action: 'Call Now',
      href: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and we\'ll respond quickly',
      action: 'Send Email',
      href: 'mailto:contact@leapgen.ai'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <AnimatedBackground variant="gradient" theme="healthcare" className="absolute inset-0" />
        <FloatingElements count={6} variant="circles" theme="healthcare" className="absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-hero mb-6">
              <span className="text-white">Get in </span>
              <span className="gradient-text-healthcare">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your business with AI? Our experts are here to help you get started.
              Schedule a personalized demo or consultation today.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">&lt; 24hrs</div>
                <div className="text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Demos This Month</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">How Can We Help?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the best way to connect with our team and get the information you need.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <EnhancedCard
                key={index}
                variant="glass"
                hoverable={true}
                className="text-center p-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    index === 0 ? 'bg-gradient-healthcare' : 
                    index === 1 ? 'bg-gradient-datacoffee' : 
                    'bg-gradient-surroundai'
                  }`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title text-white mb-4">{option.title}</h3>
                  <p className="text-gray-300 mb-6">{option.description}</p>
                  <a href={option.href}>
                    <GradientButton variant={index === 0 ? 'healthcare' : index === 1 ? 'datacoffee' : 'surroundai'} className="w-full">
                      {option.action}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </GradientButton>
                  </a>
                </motion.div>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="demo-form" className="section-padding bg-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="form-input"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      {...register('company')}
                      className="form-input"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      {...register('phone')}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Interest</label>
                  <select {...register('type')} className="form-input">
                    <option value="demo">Product Demo</option>
                    <option value="consultation">Expert Consultation</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="form-input"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <GradientButton 
                  type="submit" 
                  disabled={isSubmitting}
                  variant="healthcare"
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <MessageSquare className="w-5 h-5 ml-2" />
                </GradientButton>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-300">contact@leapgen.ai</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">Business Hours</div>
                    <div className="text-gray-300">Mon-Fri: 9AM-6PM PST</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-white font-medium mb-4">What to Expect</h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div>✓ Response within 24 hours</div>
                  <div>✓ Personalized solution recommendations</div>
                  <div>✓ ROI analysis and implementation timeline</div>
                  <div>✓ No pressure, consultative approach</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact