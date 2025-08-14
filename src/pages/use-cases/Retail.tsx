import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, TrendingUp, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Retail = () => {
  const challenges = [
    "Generic customer experiences across all touchpoints",
    "High cart abandonment and low conversion rates",
    "Fragmented customer data across channels",
    "Inventory optimization difficulties", 
    "Ineffective marketing spend and targeting",
    "Lack of real-time customer insights"
  ];

  const solutions = [
    {
      title: "Surround AI for E-commerce & Retail",
      description: "Hyper-personalized customer experiences and predictive analytics",
      benefits: [
        "25% higher conversion rates",
        "35% less cart abandonment",
        "20% enhanced customer lifetime value"
      ],
      href: "/products/surroundai",
      icon: TrendingUp
    },
    {
      title: "Data Coffee for Retail",
      description: "Unified customer and inventory data across all retail channels", 
      benefits: [
        "80% less data consolidation time",
        "95% analytics accuracy improvement",
        "Complete data leakage elimination"
      ],
      href: "/products/data-coffee",
      icon: Shield
    },
    {
      title: "Complete Retail Intelligence",
      description: "Integrated solution for comprehensive retail optimization",
      benefits: [
        "25% conversion rate increase",
        "35% cart abandonment reduction",
        "20% inventory optimization"
      ],
      href: "/contact?type=demo&industry=retail",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">E-commerce & Retail</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Personalize Every Customer Journey with AI Intelligence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform generic shopping experiences into hyper-personalized customer journeys. Optimize inventory, reduce cart abandonment, and maximize customer lifetime value through predictive intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact?type=demo&industry=retail">See Retail Solutions</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/resources/roi-calculator">Calculate ROI</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="AI Solutions for E-commerce and Retail"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Retail Challenges */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">Retail Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Retail businesses face complex customer experience and operational challenges in today's competitive landscape.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI Solutions for Retail Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right AI solution to transform your retail operations and customer experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                  <Link to={solution.href} className="flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Retail Performance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a consultation to see how our AI solutions can help you increase conversions, reduce cart abandonment, and optimize inventory management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact?type=consultation&industry=retail">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/resources/roi-calculator">Calculate ROI</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Retail;