import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Database, 
  Brain, 
  Shield, 
  Zap, 
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const CompleteHealthcareSolution = () => {
  const benefits = [
    "Complete patient history accessible to all providers",
    "Predictive models for early intervention opportunities", 
    "Automated administrative processes reducing staff burden",
    "Enhanced patient safety through comprehensive data visibility"
  ];

  const outcomes = [
    { metric: "50%", description: "Reduction in administrative costs" },
    { metric: "25%", description: "Improvement in patient outcomes" },
    { metric: "40%", description: "Faster diagnosis and treatment" },
    { metric: "30%", description: "Increase in care efficiency" }
  ];

  const steps = [
    { 
      title: "Unified Data Foundation", 
      description: "Data Coffee collects and unifies all patient information from disparate sources into a single, cohesive patient record",
      icon: Database
    },
    { 
      title: "AI-Powered Analysis", 
      description: "Surround AI processes this unified data to identify patterns, predict health risks, and generate insights",
      icon: Brain
    },
    { 
      title: "Proactive Care Delivery", 
      description: "Healthcare providers receive real-time alerts and personalized treatment recommendations",
      icon: TrendingUp
    },
    { 
      title: "Continuous Improvement", 
      description: "The system learns from outcomes to continuously refine predictions and recommendations",
      icon: Zap
    }
  ];

  const applications = [
    {
      title: "Emergency Medicine",
      description: "Complete patient history instantly available for critical care decisions"
    },
    {
      title: "Chronic Disease Management", 
      description: "Predictive monitoring and intervention for diabetes, heart disease, and other conditions"
    },
    {
      title: "Population Health",
      description: "Identify trends and at-risk populations for preventive care programs"
    },
    {
      title: "Quality Improvement",
      description: "Track outcomes and optimize care protocols based on real-world evidence"
    },
    {
      title: "Care Coordination",
      description: "Seamless information sharing across specialists and care teams"
    },
    {
      title: "Research & Development",
      description: "Accelerate clinical research with comprehensive, anonymized datasets"
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
                <HeartHandshake className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Complete Healthcare Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                The Ultimate Healthcare AI Platform
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Combine unified patient data management with predictive health intelligence to deliver proactive, personalized, and efficient healthcare that improves outcomes while reducing costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact?product=complete-solution&industry=healthcare">Schedule Healthcare Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/resources/healthcare-roi-calculator">Calculate Total Impact</Link>
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
                src="https://img.freepik.com/free-photo/medical-technology-doctor-touch-screen_1150-16896.jpg"
                alt="Complete Healthcare Intelligence Solution"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">The Challenge</h2>
            <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-4">
              <p>
                Healthcare providers struggle with fragmented patient data across various systems—Electronic Health Records (EHR), billing, and patient portals. This creates a disjointed patient experience, delays in care, and higher administrative costs.
              </p>
              <p>
                It also hinders research capabilities and the ability to identify at-risk populations for preventative care, leading to reactive rather than proactive healthcare delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">The Complete Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              By combining Data Coffee's unified patient data management with Surround AI's predictive health analytics, you get a comprehensive platform that transforms healthcare delivery from reactive to proactive.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">How the Complete Solution Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Coffee acts as the central hub, automatically collecting and unifying all patient information from disparate sources into a single, cohesive patient record. It intelligently identifies and merges duplicate records, ensuring each patient has one accurate and complete profile.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Expected Outcomes</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">{application.title}</h3>
                <p className="text-muted-foreground">{application.description}</p>
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
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how the complete healthcare intelligence platform can revolutionize patient care, reduce costs, and improve outcomes across your entire organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact?product=complete-solution&industry=healthcare" className="flex items-center gap-2">
                Schedule Complete Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/use-cases/healthcare">Back to Healthcare</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CompleteHealthcareSolution;