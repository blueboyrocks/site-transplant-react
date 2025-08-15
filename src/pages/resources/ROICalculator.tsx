import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Target
} from 'lucide-react';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    industry: '',
    companySize: '',
    monthlyRevenue: '',
    employeeCount: '',
    manualHours: '',
    hourlyRate: '',
    currentEfficiency: '',
    errorRate: ''
  });

  const [results, setResults] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const calculateROI = () => {
    const monthlyRevenue = parseInt(formData.monthlyRevenue) || 0;
    const employeeCount = parseInt(formData.employeeCount) || 0;
    const manualHours = parseInt(formData.manualHours) || 0;
    const hourlyRate = parseInt(formData.hourlyRate) || 0;
    const errorRate = parseInt(formData.errorRate) || 0;

    // AI Benefits Calculations (industry-specific multipliers)
    const industryMultipliers: { [key: string]: number } = {
      'finance': 1.2,
      'healthcare': 1.1,
      'retail': 1.0,
      'manufacturing': 1.3,
      'government': 0.9,
      'enterprise': 1.1
    };

    const multiplier = industryMultipliers[formData.industry] || 1.0;

    // Calculate savings
    const efficiencyGain = 0.45 * multiplier; // 45% average efficiency gain
    const errorReduction = 0.75; // 75% error reduction
    const automationSavings = manualHours * hourlyRate * efficiencyGain * 4; // per month
    const errorSavings = errorRate * 500 * errorReduction; // $500 per error
    const productivityBoost = (monthlyRevenue * 0.15) * multiplier; // 15% revenue impact

    const totalMonthlySavings = automationSavings + errorSavings + productivityBoost;
    const annualSavings = totalMonthlySavings * 12;

    // Implementation costs
    const baseCost = 25000;
    const employeeCost = employeeCount * 500;
    const implementationCost = baseCost + employeeCost;
    const monthlyLicenseCost = employeeCount * 50;
    const annualCost = implementationCost + (monthlyLicenseCost * 12);

    const netAnnualSavings = annualSavings - annualCost;
    const roiPercentage = ((netAnnualSavings / annualCost) * 100);
    const paybackMonths = annualCost / totalMonthlySavings;

    setResults({
      automationSavings,
      errorSavings,
      productivityBoost,
      totalMonthlySavings,
      annualSavings,
      implementationCost,
      annualCost,
      netAnnualSavings,
      roiPercentage,
      paybackMonths,
      efficiencyGain: efficiencyGain * 100
    });
  };

  const benefits = [
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows"
    },
    {
      icon: TrendingUp,
      title: "Productivity Boost",
      description: "Increase team efficiency by 30-50%"
    },
    {
      icon: Target,
      title: "Error Reduction",
      description: "Minimize human errors and improve accuracy"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce operational costs significantly"
    }
  ];

  const industries = [
    { value: 'finance', label: 'Finance & Banking', avgROI: '340%' },
    { value: 'healthcare', label: 'Healthcare', avgROI: '280%' },
    { value: 'retail', label: 'Retail & E-commerce', avgROI: '250%' },
    { value: 'manufacturing', label: 'Manufacturing', avgROI: '420%' },
    { value: 'government', label: 'Government & Education', avgROI: '180%' },
    { value: 'enterprise', label: 'Enterprise', avgROI: '300%' }
  ];

  const useCases = [
    {
      title: "Document Processing",
      description: "Automate data extraction and document classification",
      savings: "60-80% time reduction",
      industries: ["Finance", "Healthcare", "Government"]
    },
    {
      title: "Customer Service",
      description: "AI-powered chatbots and support automation",
      savings: "50% faster response times",
      industries: ["Retail", "Enterprise", "Healthcare"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast demand, risks, and business outcomes",
      savings: "25% better decision accuracy",
      industries: ["Manufacturing", "Finance", "Retail"]
    },
    {
      title: "Process Optimization",
      description: "Streamline workflows and eliminate bottlenecks",
      savings: "40% efficiency improvement",
      industries: ["Manufacturing", "Enterprise", "Government"]
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
              <Calculator className="w-8 h-8 text-primary" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                AI ROI Calculator
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Calculate the potential return on investment from implementing AI solutions in your organization. Get industry-specific projections based on your business metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI Benefits Across Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how AI can transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Average ROI by Industry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See typical returns across different sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2">{industry.label}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{industry.avgROI}</div>
                <p className="text-sm text-muted-foreground">Average ROI in first year</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Calculate Your Potential ROI</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enter your organization's details to get a personalized ROI projection
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Organization Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry.value} value={industry.value}>
                            {industry.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-50 employees)</SelectItem>
                        <SelectItem value="medium">Medium (51-500 employees)</SelectItem>
                        <SelectItem value="large">Large (500+ employees)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="monthlyRevenue">Monthly Revenue ($)</Label>
                    <Input
                      id="monthlyRevenue"
                      type="number"
                      value={formData.monthlyRevenue}
                      onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                      placeholder="e.g., 500000"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="employeeCount">Number of Employees</Label>
                    <Input
                      id="employeeCount"
                      type="number"
                      value={formData.employeeCount}
                      onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                      placeholder="e.g., 100"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="manualHours">Manual Process Hours (per week)</Label>
                    <Input
                      id="manualHours"
                      type="number"
                      value={formData.manualHours}
                      onChange={(e) => handleInputChange('manualHours', e.target.value)}
                      placeholder="e.g., 40"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="hourlyRate">Average Hourly Rate ($)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      value={formData.hourlyRate}
                      onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                      placeholder="e.g., 50"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="errorRate">Monthly Process Errors</Label>
                    <Input
                      id="errorRate"
                      type="number"
                      value={formData.errorRate}
                      onChange={(e) => handleInputChange('errorRate', e.target.value)}
                      placeholder="e.g., 20"
                    />
                  </div>

                  <Button onClick={calculateROI} className="w-full" size="lg">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate ROI
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              {results ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Your ROI Projection</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          ${results.netAnnualSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Net Annual Savings</div>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {results.roiPercentage.toFixed(1)}%
                        </div>
                        <div className="text-sm text-muted-foreground">ROI Percentage</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Automation Savings:</span>
                        <span className="font-semibold">${results.automationSavings.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Error Reduction Savings:</span>
                        <span className="font-semibold">${results.errorSavings.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Productivity Boost:</span>
                        <span className="font-semibold">${results.productivityBoost.toLocaleString()}/month</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between font-semibold">
                          <span>Total Monthly Savings:</span>
                          <span>${results.totalMonthlySavings.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>Efficiency Gain:</span>
                        <span className="font-semibold">{results.efficiencyGain.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payback Period:</span>
                        <span className="font-semibold">{results.paybackMonths.toFixed(1)} months</span>
                      </div>
                    </div>

                    <Button asChild className="w-full" size="lg">
                      <Link to="/contact?type=demo">
                        Schedule Implementation Call
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Calculate?</h3>
                    <p className="text-muted-foreground">
                      Fill out the form on the left to see your personalized ROI projections
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Popular AI Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore common applications and their typical impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {useCase.savings}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {useCase.industries.join(', ')}
                  </div>
                </div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a detailed implementation plan tailored to your organization's needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact?type=demo" className="flex items-center gap-2">
                Schedule Strategy Session <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/use-cases">Explore Use Cases</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ROICalculator;