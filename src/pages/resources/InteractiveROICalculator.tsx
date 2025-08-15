import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Users,
  BarChart3,
  ArrowRight,
  Zap,
  Target,
  Shield
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const InteractiveROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState([500000]);
  const [employeeCount, setEmployeeCount] = useState([50]);
  const [manualHours, setManualHours] = useState([80]);
  const [hourlyRate, setHourlyRate] = useState([75]);
  const [errorRate, setErrorRate] = useState([25]);
  const [industry, setIndustry] = useState('finance');
  
  const [results, setResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    roiPercentage: 0,
    paybackPeriod: 0,
    timeSavings: 0,
    errorSavings: 0,
    productivityGains: 0,
    implementationCost: 0,
    annualCost: 0,
    netAnnualSavings: 0
  });

  const industries = [
    { value: 'finance', label: 'Finance & Banking', multiplier: 1.2 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.1 },
    { value: 'retail', label: 'Retail & E-commerce', multiplier: 1.0 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.3 },
    { value: 'government', label: 'Government & SLED', multiplier: 0.9 },
    { value: 'enterprise', label: 'Enterprise', multiplier: 1.1 }
  ];

  const calculateROI = () => {
    const currentIndustry = industries.find(ind => ind.value === industry) || industries[0];
    const revenue = monthlyRevenue[0];
    const employees = employeeCount[0];
    const hours = manualHours[0];
    const rate = hourlyRate[0];
    const errors = errorRate[0];

    // AI automation benefits
    const automationEfficiency = 0.6; // 60% of manual tasks automated
    const errorReduction = 0.75; // 75% error reduction
    const productivityBoost = 0.25; // 25% productivity increase

    // Monthly savings calculations
    const timeSavings = (hours * 4.33 * rate * automationEfficiency); // Monthly time savings
    const errorSavings = (errors * errorReduction * 500); // $500 per error saved
    const productivityGains = (employees * rate * 40 * productivityBoost); // Monthly productivity gains
    
    const monthlySavings = (timeSavings + errorSavings + productivityGains) * currentIndustry.multiplier;
    const annualSavings = monthlySavings * 12;

    // Implementation costs (scaled by company size)
    const baseCost = 25000;
    const employeeCost = employees * 200;
    const complexityCost = revenue > 1000000 ? 15000 : 0;
    const implementationCost = baseCost + employeeCost + complexityCost;
    
    const monthlyLicenseCost = Math.max(1000, employees * 25);
    const annualCost = implementationCost + (monthlyLicenseCost * 12);

    const netAnnualSavings = annualSavings - annualCost;
    const roiPercentage = annualCost > 0 ? (netAnnualSavings / annualCost) * 100 : 0;
    const paybackPeriod = monthlySavings > 0 ? implementationCost / monthlySavings : 0;

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roiPercentage: Math.round(roiPercentage),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      timeSavings: Math.round(timeSavings),
      errorSavings: Math.round(errorSavings),
      productivityGains: Math.round(productivityGains),
      implementationCost: Math.round(implementationCost),
      annualCost: Math.round(annualCost),
      netAnnualSavings: Math.round(netAnnualSavings)
    });
  };

  // Real-time calculation whenever sliders change
  useEffect(() => {
    calculateROI();
  }, [monthlyRevenue, employeeCount, manualHours, hourlyRate, errorRate, industry]);

  const benefits = [
    {
      icon: Zap,
      title: "Instant Automation",
      description: "Automate 60% of repetitive tasks immediately"
    },
    {
      icon: Target,
      title: "Precision Accuracy",
      description: "Reduce errors by up to 75% with AI validation"
    },
    {
      icon: TrendingUp,
      title: "Productivity Boost",
      description: "25% increase in employee productivity"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Minimize compliance and operational risks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calculator className="w-12 h-12 text-purple-400" />
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Interactive ROI Calculator</span>
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See Your AI Investment Returns in Real-Time
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Move the sliders below to instantly calculate your potential ROI from AI automation. 
              Get personalized projections based on your industry and business metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="section-padding bg-gray-900/50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">AI-Powered Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI automation transforms your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-800/30 border border-gray-700 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Interactive ROI Calculator</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Adjust the sliders to see your real-time ROI calculations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Business Parameters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Industry Selection */}
                  <div>
                    <label className="text-white font-medium mb-3 block">Industry</label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((ind) => (
                          <SelectItem key={ind.value} value={ind.value}>
                            {ind.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Monthly Revenue */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-white font-medium">Monthly Revenue</label>
                      <span className="text-purple-400 font-bold">
                        ${monthlyRevenue[0].toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={monthlyRevenue}
                      onValueChange={setMonthlyRevenue}
                      max={10000000}
                      min={10000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>$10K</span>
                      <span>$10M</span>
                    </div>
                  </div>

                  {/* Employee Count */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-white font-medium">Number of Employees</label>
                      <span className="text-purple-400 font-bold">{employeeCount[0]}</span>
                    </div>
                    <Slider
                      value={employeeCount}
                      onValueChange={setEmployeeCount}
                      max={1000}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1</span>
                      <span>1,000</span>
                    </div>
                  </div>

                  {/* Manual Process Hours */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-white font-medium">Manual Process Hours/Week</label>
                      <span className="text-purple-400 font-bold">{manualHours[0]}h</span>
                    </div>
                    <Slider
                      value={manualHours}
                      onValueChange={setManualHours}
                      max={200}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1h</span>
                      <span>200h</span>
                    </div>
                  </div>

                  {/* Average Hourly Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-white font-medium">Average Hourly Rate</label>
                      <span className="text-purple-400 font-bold">${hourlyRate[0]}</span>
                    </div>
                    <Slider
                      value={hourlyRate}
                      onValueChange={setHourlyRate}
                      max={200}
                      min={15}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>$15</span>
                      <span>$200</span>
                    </div>
                  </div>

                  {/* Error Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-white font-medium">Errors per Month</label>
                      <span className="text-purple-400 font-bold">{errorRate[0]}</span>
                    </div>
                    <Slider
                      value={errorRate}
                      onValueChange={setErrorRate}
                      max={100}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0</span>
                      <span>100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Real-time Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white">Your ROI Projection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                      <div className="text-3xl font-bold gradient-text mb-2">
                        <AnimatedCounter value={results.roiPercentage} suffix="%" />
                      </div>
                      <div className="text-sm text-gray-300">ROI Percentage</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                      <div className="text-3xl font-bold gradient-text mb-2">
                        <AnimatedCounter value={results.paybackPeriod} suffix=" mo" />
                      </div>
                      <div className="text-sm text-gray-300">Payback Period</div>
                    </div>
                  </div>

                  {/* Annual Savings Highlight */}
                  <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      ${results.netAnnualSavings.toLocaleString()}
                    </div>
                    <div className="text-lg text-gray-300">Net Annual Savings</div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-4">
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Monthly Savings Breakdown</h4>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Time Automation:</span>
                          <span className="font-semibold text-white">${results.timeSavings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Error Reduction:</span>
                          <span className="font-semibold text-white">${results.errorSavings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Productivity Gains:</span>
                          <span className="font-semibold text-white">${results.productivityGains.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-gray-700 pt-3">
                          <div className="flex justify-between items-center font-semibold">
                            <span className="text-white">Total Monthly Savings:</span>
                            <span className="text-green-400">${results.monthlySavings.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Implementation Cost:</span>
                        <span className="text-white">${results.implementationCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Annual Software Cost:</span>
                        <span className="text-white">${results.annualCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-6">
                    <Button asChild className="w-full btn-primary">
                      <Link to="/contact?type=demo">
                        Schedule Strategy Call
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                      <Link to="/contact">
                        Speak with ROI Expert
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Realize These Savings?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations already achieving these results with our AI automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?type=demo&source=roi-calculator">
                <Button className="btn-primary text-lg px-8 py-4">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/products/surroundai">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Explore SurroundAI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveROICalculator;