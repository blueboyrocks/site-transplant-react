import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Building2,
  Shield,
  Target
} from 'lucide-react';

const CustomerSuccess = () => {
  const stats = [
    {
      value: "50-80%",
      label: "Efficiency Gains",
      description: "Average improvement across all implementations"
    },
    {
      value: "3",
      label: "Industry Leaders",
      description: "Transformed with our solutions"
    },
    {
      value: "Proven",
      label: "ROI",
      description: "Measurable return on investment"
    }
  ];

  const successStories = [
    {
      title: "Healthcare Sales Transformation",
      company: "Leading Healthcare Organization",
      industry: "Healthcare",
      size: "Large Enterprise",
      description: "Revolutionized sales operations with AI-powered automation, reducing response times and boosting productivity.",
      results: [
        { metric: "50%", label: "Response Time Reduction" },
        { metric: "40%", label: "Sales Productivity Boost" },
        { metric: "Increased", label: "Conversion Rate" },
        { metric: "Instant", label: "Real-time Insights" }
      ],
      challenge: "Manual workflows, fragmented data, and delayed customer response times",
      solution: "AI Sales Assistant with CRM integration and real-time insights",
      link: "/customer-success/healthcare-sales-transformation",
      product: "SurroundAI",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Government Data Modernization", 
      company: "Leading Government Agency",
      industry: "Government/Public Sector",
      size: "Medium Enterprise",
      description: "Transformed data processing and citizen services with secure AI-powered document automation.",
      results: [
        { metric: "80%", label: "Document Review Time" },
        { metric: "60%", label: "Citizen Response Speed" },
        { metric: "Enhanced", label: "Compliance" },
        { metric: "Real-time", label: "Decision Making" }
      ],
      challenge: "Processing vast unstructured data while ensuring strict compliance",
      solution: "Azure-based AI with automated document processing and virtual assistants",
      link: "/customer-success/government-data-modernization",
      product: "DataCoffee",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Medical Documentation Revolution",
      company: "Healthcare Practice",
      industry: "Healthcare Industry", 
      size: "Small Business",
      description: "Eliminated documentation burden with ambient AI transcription, reducing documentation time while enhancing patient care.",
      results: [
        { metric: "50%", label: "Documentation Time" },
        { metric: "Increased", label: "Patient Engagement" },
        { metric: "Enhanced", label: "HIPAA Compliance" },
        { metric: "Reduced", label: "Physician Burnout" }
      ],
      challenge: "Healthcare professionals spending 30-40% of time on documentation",
      solution: "Ambient AI transcription with seamless EHR integration",
      link: "/customer-success/medical-documentation-revolution",
      product: "Seismic",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Customer Success Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how organizations across industries are transforming their operations with LeapGen.AI solutions, achieving measurable results and driving innovation.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${story.gradient} p-8`}>
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column - Story Info */}
                        <div className="lg:w-2/3">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                              {story.product}
                            </span>
                            <span className="px-3 py-1 bg-muted/80 text-muted-foreground rounded-full text-sm">
                              {story.size}
                            </span>
                          </div>
                          
                          <h2 className="text-3xl font-bold mb-4">{story.title}</h2>
                          <p className="text-lg text-muted-foreground mb-6">{story.description}</p>
                          
                          <div className="text-sm text-muted-foreground mb-6">
                            <span className="font-medium">{story.company}</span> • {story.industry}
                          </div>

                          {/* Results Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {story.results.map((result, idx) => (
                              <div key={idx} className="text-center">
                                <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                                <div className="text-sm text-muted-foreground">{result.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* Challenge & Solution */}
                          <div className="space-y-4 mb-6">
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Challenge
                              </h4>
                              <p className="text-muted-foreground text-sm">{story.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Solution
                              </h4>
                              <p className="text-muted-foreground text-sm">{story.solution}</p>
                            </div>
                          </div>

                          <Button asChild className="group">
                            <Link to={story.link} className="flex items-center gap-2">
                              Read Full Case Study 
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join these industry leaders and transform your organization with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact?type=demo" className="flex items-center gap-2">
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/contact?type=consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CustomerSuccess;