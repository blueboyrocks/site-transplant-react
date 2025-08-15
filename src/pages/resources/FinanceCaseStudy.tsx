import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Calculator,
  CheckCircle,
  ArrowRight,
  Download,
  BarChart3,
  PieChart,
  Users
} from 'lucide-react';

const FinanceCaseStudy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const caseStudyHighlights = [
    {
      metric: "40%",
      label: "Reduction in fraud detection time",
      description: "AI-powered analytics identified suspicious transactions in real-time"
    },
    {
      metric: "$2.5M",
      label: "Annual cost savings",
      description: "Through automated compliance reporting and risk assessment"
    },
    {
      metric: "85%",
      label: "Improvement in credit decisions",
      description: "Enhanced accuracy in loan approval processes"
    },
    {
      metric: "60%",
      label: "Faster regulatory reporting",
      description: "Automated generation of compliance documents"
    }
  ];

  const keyInsights = [
    {
      title: "AI-Powered Risk Assessment",
      description: "Machine learning models analyze vast datasets to identify patterns and predict potential risks with unprecedented accuracy.",
      impact: "Reduced false positives by 45%"
    },
    {
      title: "Automated Compliance Monitoring",
      description: "Real-time monitoring of transactions and automated generation of regulatory reports.",
      impact: "Saved 30 hours per week on manual reporting"
    },
    {
      title: "Intelligent Customer Insights",
      description: "Advanced analytics provide deep customer behavior insights for personalized service delivery.",
      impact: "Increased customer satisfaction by 35%"
    }
  ];

  const implementation = [
    {
      phase: "Assessment & Planning",
      duration: "4 weeks",
      activities: [
        "Current system evaluation",
        "Risk assessment framework design",
        "Compliance requirement mapping",
        "Implementation roadmap creation"
      ]
    },
    {
      phase: "AI Model Development",
      duration: "8 weeks",
      activities: [
        "Data preprocessing and cleaning",
        "Machine learning model training",
        "Risk scoring algorithm development",
        "Performance testing and validation"
      ]
    },
    {
      phase: "System Integration",
      duration: "6 weeks",
      activities: [
        "Core banking system integration",
        "Regulatory reporting automation",
        "User interface development",
        "Security implementation"
      ]
    },
    {
      phase: "Deployment & Training",
      duration: "4 weeks",
      activities: [
        "Production deployment",
        "Staff training programs",
        "Performance monitoring setup",
        "Continuous optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-primary" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Finance Case Study
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Discover how a leading financial institution transformed their operations with AI, achieving $2.5M in annual savings while enhancing security and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Transformative Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI implementation delivered measurable improvements across all key performance indicators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {caseStudyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="text-center bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{highlight.metric}</div>
                <div className="text-lg font-semibold mb-2">{highlight.label}</div>
                <div className="text-sm text-muted-foreground">{highlight.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Key Implementation Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Critical learnings and breakthrough innovations that drove success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
                <p className="text-muted-foreground mb-4">{insight.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <TrendingUp className="w-3 h-3" />
                  {insight.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">Implementation Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured 22-week implementation process ensuring maximum ROI and minimal disruption
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {implementation.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{phase.phase}</h3>
                  <span className="text-sm text-primary font-medium">{phase.duration}</span>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-4">Download the Complete Case Study</CardTitle>
                <p className="text-muted-foreground">
                  Get the full 40-page detailed analysis including technical specifications, ROI calculations, and implementation best practices.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {[
                        "Detailed technical architecture",
                        "Step-by-step implementation guide",
                        "ROI analysis and cost breakdown",
                        "Risk mitigation strategies",
                        "Performance metrics and KPIs",
                        "Lessons learned and best practices"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Job Title</Label>
                      <Input
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="Your job title"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download Case Study (PDF)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how AI can deliver similar results for your financial institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact?type=demo&industry=finance" className="flex items-center gap-2">
                Schedule Strategy Session <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/use-cases/finance">Explore Finance Solutions</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FinanceCaseStudy;