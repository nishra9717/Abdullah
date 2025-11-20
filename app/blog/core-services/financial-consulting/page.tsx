'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, PieChart, BarChart3, CheckCircle2, AlertCircle, Target, Lightbulb } from 'lucide-react';

export default function FinancialConsulting() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: PieChart, title: 'Financial Analysis & Reporting', description: 'In-depth financial analysis and comprehensive reporting to support strategic decision-making.' },
    { icon: Target, title: 'Business Valuation', description: 'Professional valuation services for mergers, acquisitions, and strategic planning purposes.' },
    { icon: TrendingUp, title: 'Financial Planning & Forecasting', description: 'Strategic financial planning and forecasting to guide business growth and investment decisions.' },
    { icon: Lightbulb, title: 'Strategic Advisory', description: 'Expert guidance on financial strategy, capital structure, and investment opportunities.' },
  ];

  const benefits = [
    'Data-driven financial insights for better decisions',
    'Improved financial performance and profitability',
    'Strategic guidance on growth opportunities',
    'Enhanced financial planning and forecasting',
    'Professional business valuation expertise',
    'Optimized capital structure and financing',
  ];

  const processSteps = [
    { step: '01', title: 'Financial Assessment', description: 'Comprehensive analysis of your current financial position, performance, and challenges.' },
    { step: '02', title: 'Strategy Development', description: 'Creating customized financial strategies aligned with your business objectives and market conditions.' },
    { step: '03', title: 'Implementation Planning', description: 'Developing detailed implementation plans with clear milestones and measurable outcomes.' },
    { step: '04', title: 'Ongoing Support', description: 'Continuous monitoring and adjustment of strategies to ensure optimal financial performance.' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent" />
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
              <span className="text-yellow-400 text-sm font-medium">Advisory Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Financial Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Strategic financial guidance to optimize performance and achieve your business objectives
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-yellow-400/20 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Financial Guidance</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  In today&apos;s complex business environment, making informed financial decisions requires more 
                  than just accounting knowledge—it demands strategic insight, market understanding, and the 
                  ability to translate financial data into actionable business intelligence. Our Financial 
                  Consulting services provide the expert guidance you need to navigate financial challenges and 
                  capitalize on opportunities.
                </p>
                <p>
                  We work closely with business leaders to analyze financial performance, identify improvement 
                  opportunities, and develop strategies that drive sustainable growth. Our team combines technical 
                  financial expertise with practical business acumen to deliver solutions that are both 
                  strategically sound and operationally feasible. Whether you&apos;re planning for growth, 
                  considering a transaction, or seeking to optimize financial performance, we provide the insights 
                  and support you need.
                </p>
                <p>
                  Our consulting approach is collaborative and results-oriented. We take time to understand your 
                  business, industry, and objectives, then develop customized solutions that address your specific 
                  needs. From financial analysis and planning to business valuation and strategic advisory, our 
                  comprehensive services help you make confident decisions and achieve your financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial advisory for business success
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
                    <Icon className="w-7 h-7 text-yellow-400 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-400 transition-colors">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
                  <span className="text-yellow-400 text-sm font-medium">Key Benefits</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Financial Consulting Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Expert financial consulting provides the strategic insights and guidance needed to 
                  optimize performance, manage risks, and achieve sustainable business growth.
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
                      <TrendingUp className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                    <div className="text-gray-600">Businesses Advised</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">$50M+</div>
                    <div className="text-gray-600">Value Created</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Deliver Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to financial consulting and advisory
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors">
                      <span className="text-2xl font-bold text-yellow-400 group-hover:text-black transition-colors">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-400 transition-colors">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Consulting Approach</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">Tailored Solutions:</strong> We don&apos;t believe in 
                      one-size-fits-all approaches. Every engagement is customized to your specific business 
                      context, challenges, and objectives.
                    </p>
                    <p>
                      <strong className="text-gray-900">Practical Implementation:</strong> Our recommendations 
                      are designed to be actionable and implementable. We provide clear roadmaps with practical 
                      steps you can take immediately.
                    </p>
                    <p>
                      <strong className="text-gray-900">Long-term Partnership:</strong> We view our client 
                      relationships as long-term partnerships. Beyond individual projects, we remain available 
                      to support your ongoing financial needs and strategic initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Elevate Your Financial Strategy?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Partner with our financial consulting experts to unlock insights, optimize performance, 
              and achieve your business objectives. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  View All Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}