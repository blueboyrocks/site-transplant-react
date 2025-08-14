import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  FileText, 
  BarChart3, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Building2,
  Database,
  Zap,
  TrendingUp
} from 'lucide-react';

const SLED = () => {
  const challenges = [
    {
      icon: Database,
      title: "Legacy System Silos",
      description: "Disconnected systems prevent unified view of operations and citizen services"
    },
    {
      icon: BarChart3,
      title: "Resource Allocation Inefficiencies", 
      description: "Manual processes lead to suboptimal allocation of public resources and budgets"
    },
    {
      icon: FileText,
      title: "Manual Reporting Processes",
      description: "Time-intensive reporting delays decision-making and compliance efforts"
    }
  ];

  const outcomes = [
    {
      metric: "30%",
      description: "Better resource allocation through predictive analytics"
    },
    {
      metric: "15%", 
      description: "Improved student retention with early intervention systems"
    },
    {
      metric: "70%",
      description: "Faster reporting with automated data collection and analysis"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Citizen Service Optimization",
      description: "Unify citizen data across departments to provide better, more personalized public services"
    },
    {
      icon: GraduationCap,
      title: "Educational Analytics",
      description: "Track student performance, predict at-risk students, and optimize educational resource allocation"
    },
    {
      icon: Shield,
      title: "Compliance & Transparency",
      description: "Automated reporting and audit trails ensure regulatory compliance and public transparency"
    },
    {
      icon: TrendingUp,
      title: "Budget Optimization",
      description: "Predictive analytics help optimize budget allocation and identify cost-saving opportunities"
    }
  ];

  const benefits = [
    "Real-time dashboards for department heads and elected officials",
    "Automated compliance reporting for federal and state requirements", 
    "Predictive models for budget planning and resource allocation",
    "Integrated citizen service portals with unified data views",
    "Performance tracking across all government programs",
    "Data-driven policy recommendations and impact analysis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Government & Education
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Optimize public services and educational outcomes with data-driven insights that improve citizen experiences and institutional effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact?type=demo&industry=sled">Request Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact?type=consultation">Schedule Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Common SLED Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Government and educational institutions face unique data management and operational challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Outcomes */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-primary/5 rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our SLED Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built AI solutions for government agencies and educational institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform how your organization serves citizens and students
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join forward-thinking government agencies and educational institutions using AI to better serve their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact?type=demo&industry=sled" className="flex items-center gap-2">
                Schedule Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/resources/case-studies?industry=sled">View Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SLED;