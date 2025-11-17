'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, TrendingUp, CheckCircle2, Shield, Users, PieChart, FileText, AlertCircle, Calculator } from 'lucide-react';

export default function FinancialAnalysis() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: BarChart3, title: 'Financial Statement Analysis', description: 'Comprehensive analysis of balance sheets, income statements, and cash flow statements.' },
    { icon: TrendingUp, title: 'Performance Metrics', description: 'Evaluation of key performance indicators and financial ratios to assess business health.' },
    { icon: PieChart, title: 'Profitability Analysis', description: 'In-depth examination of revenue streams, costs, and profit margins.' },
    { icon: Calculator, title: 'Cash Flow Analysis', description: 'Detailed assessment of cash inflows and outflows to ensure liquidity.' },
  ];

  const benefits = [
    'Gain deep insights into financial performance',
    'Identify areas for improvement and optimization',
    'Make data-driven business decisions',
    'Improve cash flow management',
    'Enhance profitability and efficiency',
    'Support strategic planning and forecasting',
  ];

  const processSteps = [
    { step: '01', title: 'Data Collection', description: 'Gathering all relevant financial documents, statements, and records for comprehensive analysis.' },
    { step: '02', title: 'Analysis & Evaluation', description: 'Thorough examination of financial data using advanced analytical techniques and tools.' },
    { step: '03', title: 'Report Generation', description: 'Creating detailed reports with findings, insights, and actionable recommendations.' },
    { step: '04', title: 'Presentation & Discussion', description: 'Presenting findings and working with you to develop implementation strategies.' },
  ];

  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-background to-transparent" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-medium">In-Depth Financial Analysis</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Comprehensive Financial Analysis Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert analysis of financial statements and reports to provide actionable insights for informed decision-making
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Financial Analysis</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Financial analysis is a critical tool for understanding the financial health and performance of your 
                  business. It involves examining financial statements, ratios, and trends to identify strengths, 
                  weaknesses, and opportunities for improvement. Effective financial analysis provides the foundation 
                  for strategic decision-making and helps ensure long-term financial stability.
                </p>
                <p>
                  At Abdullah Shahid & Co., we perform comprehensive financial analyses that go beyond surface-level 
                  numbers. Our experienced analysts use advanced techniques and industry benchmarks to provide deep 
                  insights into your financial position. We examine profitability, liquidity, solvency, and efficiency 
                  metrics to give you a complete picture of your business&apos;s financial performance.
                </p>
                <p>
                  Our financial analysis services help you understand not just where you are, but where you&apos;re heading. 
                  We identify trends, patterns, and potential issues before they become problems, enabling proactive 
                  management and strategic planning. Whether you need analysis for internal decision-making, investor 
                  presentations, or compliance purposes, we deliver detailed, accurate, and actionable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-b from-background to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Financial Analysis Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive analytical services to understand your financial performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
                    <Icon className="w-7 h-7 text-yellow-400 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
                  <span className="text-yellow-400 text-sm font-medium">Key Benefits</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Why Financial Analysis Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Comprehensive financial analysis provides valuable insights that drive better 
                  business decisions and improved financial performance.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400/10 to-transparent rounded-3xl p-8 border border-yellow-400/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
                    <div className="text-gray-600">Analyses Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                    <div className="text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                    <div className="text-gray-600">Clients Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Conduct Financial Analysis</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering actionable financial insights
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors">
                      <span className="text-2xl font-bold text-yellow-400 group-hover:text-black transition-colors">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Key Analysis Metrics</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-foreground">Profitability Ratios:</strong> We analyze gross profit margins, 
                      net profit margins, and return on investment to assess how effectively your business generates profits 
                      from its operations and investments.
                    </p>
                    <p>
                      <strong className="text-foreground">Liquidity Analysis:</strong> Understanding your ability to meet 
                      short-term obligations is crucial. We examine current ratios, quick ratios, and cash positions to 
                      ensure financial stability.
                    </p>
                    <p>
                      <strong className="text-foreground">Trend Analysis:</strong> By comparing financial data over multiple 
                      periods, we identify trends and patterns that help predict future performance and inform strategic 
                      planning decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400/10 via-background to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Get Comprehensive Financial Analysis for Your Business
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unlock valuable insights into your financial performance. Contact us today to schedule 
              a consultation and discover how our analysis services can drive better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 group"
              >
                  <Link href='tel:+92-333-7954767'>
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <Link href="/blog">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
