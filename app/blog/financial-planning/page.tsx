'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, CheckCircle2, Shield, Users, PieChart, DollarSign, BarChart3, AlertCircle, Calendar } from 'lucide-react';

export default function FinancialPlanning() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Target, title: 'Goal Setting & Strategy', description: 'Define clear financial objectives and develop comprehensive strategies to achieve them.' },
    { icon: BarChart3, title: 'Budget Development', description: 'Create detailed budgets that align with your income, expenses, and financial goals.' },
    { icon: PieChart, title: 'Investment Planning', description: 'Strategic investment advice to grow your wealth while managing risk effectively.' },
    { icon: DollarSign, title: 'Retirement Planning', description: 'Comprehensive retirement planning to ensure financial security in your golden years.' },
  ];

  const benefits = [
    'Achieve financial goals with structured planning',
    'Optimize cash flow and budget management',
    'Build wealth through strategic investments',
    'Secure your financial future',
    'Make informed financial decisions',
    'Reduce financial stress and uncertainty',
  ];

  const processSteps = [
    { step: '01', title: 'Financial Assessment', description: 'Comprehensive review of your current financial situation, assets, liabilities, and goals.' },
    { step: '02', title: 'Strategy Development', description: 'Creating a customized financial plan tailored to your unique circumstances and objectives.' },
    { step: '03', title: 'Implementation', description: 'Guided implementation of your financial plan with ongoing support and adjustments.' },
    { step: '04', title: 'Monitoring & Review', description: 'Regular reviews and updates to ensure your plan stays aligned with your evolving needs.' },
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
              <span className="text-yellow-400 text-sm font-medium">Strategic Financial Planning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Strategic Financial Planning Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive financial planning solutions designed to help individuals and businesses achieve their financial goals with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Importance of Financial Planning</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Financial planning is the cornerstone of long-term financial success. It involves creating a comprehensive 
                  roadmap that helps you manage your finances effectively, achieve your goals, and build wealth over time. 
                  Whether you&apos;re planning for retirement, saving for a major purchase, or growing your business, strategic 
                  financial planning provides the foundation for sound financial decisions.
                </p>
                <p>
                  At Abdullah Shahid & Co., we understand that every individual and business has unique financial circumstances 
                  and objectives. Our financial planning services are designed to provide personalized guidance that aligns 
                  with your specific needs, risk tolerance, and long-term aspirations. We take a holistic approach, considering 
                  all aspects of your financial life to create a cohesive and actionable plan.
                </p>
                <p>
                  Our experienced financial planners work closely with you to analyze your current financial position, identify 
                  opportunities for improvement, and develop strategies that maximize your financial potential. We help you 
                  navigate complex financial decisions, optimize your tax situation, and build a portfolio that supports your 
                  goals while managing risk appropriately.
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Financial Planning Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to help you achieve your financial objectives
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
                  Why Financial Planning Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Effective financial planning provides numerous advantages that help you take control 
                  of your financial future and achieve peace of mind.
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
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                    <div className="text-gray-600">Plans Created</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">95%</div>
                    <div className="text-gray-600">Goal Achievement</div>
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
                      <PieChart className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Create Your Financial Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to building your financial future
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">Key Financial Planning Principles</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-foreground">Start Early:</strong> The earlier you begin financial planning, 
                      the more time your investments have to grow. Time is one of the most powerful factors in building wealth, 
                      and starting early can significantly impact your long-term financial success.
                    </p>
                    <p>
                      <strong className="text-foreground">Regular Reviews:</strong> Financial plans should be reviewed and 
                      updated regularly to reflect changes in your life circumstances, goals, and market conditions. Annual 
                      reviews ensure your plan remains relevant and effective.
                    </p>
                    <p>
                      <strong className="text-foreground">Diversification:</strong> A well-diversified portfolio helps manage 
                      risk while maximizing returns. We help you build portfolios that balance growth potential with risk 
                      management based on your individual circumstances.
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
              Start Your Financial Planning Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take the first step towards achieving your financial goals. Contact us to schedule 
              a consultation and begin building your comprehensive financial plan.
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
