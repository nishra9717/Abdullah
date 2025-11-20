'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calculator, FileText, TrendingUp, CheckCircle2, AlertCircle, DollarSign, PieChart } from 'lucide-react';

export default function BookkeepingServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Calculator, title: 'Transaction Recording', description: 'Accurate and timely recording of all business transactions, ensuring complete financial documentation.' },
    { icon: FileText, title: 'Financial Statements', description: 'Preparation of comprehensive financial statements including balance sheets, income statements, and cash flow reports.' },
    { icon: PieChart, title: 'Accounts Reconciliation', description: 'Regular reconciliation of bank accounts, credit cards, and other financial accounts to ensure accuracy.' },
    { icon: DollarSign, title: 'Expense Management', description: 'Systematic tracking and categorization of business expenses for better financial control and tax preparation.' },
  ];

  const benefits = [
    'Accurate and organized financial records',
    'Simplified tax preparation and compliance',
    'Better financial decision-making insights',
    'Time savings to focus on core business',
    'Improved cash flow management',
    'Reduced risk of errors and discrepancies',
  ];

  const processSteps = [
    { step: '01', title: 'Initial Setup', description: 'Setting up your chart of accounts, establishing bookkeeping systems, and understanding your business processes.' },
    { step: '02', title: 'Daily Recording', description: 'Tracking and recording all income and expenses as they occur, maintaining up-to-date financial records.' },
    { step: '03', title: 'Monthly Reconciliation', description: 'Reconciling accounts, reviewing transactions, and ensuring accuracy of all financial data.' },
    { step: '04', title: 'Reporting & Analysis', description: 'Generating financial reports and providing insights to support business decision-making.' },
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
              <span className="text-yellow-400 text-sm font-medium">Financial Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bookkeeping Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Accurate and organized financial records that form the backbone of your successful business
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-yellow-400/20 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Financial Foundation</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Accurate and organized financial records are the backbone of any successful business. Our 
                  Bookkeeping Services provide the essential support you need to maintain a clear and up-to-date 
                  financial picture of your company. Our expert bookkeepers handle the day-to-day tracking of 
                  income and expenses, ensuring that every transaction is recorded accurately.
                </p>
                <p>
                  This allows you to make informed financial decisions, simplify tax preparation, and focus on 
                  what you do best – running your business. Whether you&apos;re a small startup or an established 
                  enterprise, maintaining proper books is crucial for financial health, compliance, and growth.
                </p>
                <p>
                  Our bookkeeping services go beyond simple data entry. We provide comprehensive financial record 
                  management that gives you real-time visibility into your business finances, helps identify 
                  trends, and supports strategic planning. With our professional bookkeeping support, you can be 
                  confident that your financial records are accurate, complete, and ready for any business need.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Bookkeeping Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to keep your finances organized
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
                  Why Professional Bookkeeping Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Proper bookkeeping provides the financial clarity you need to run your business 
                  effectively and make data-driven decisions with confidence.
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
                      <BookOpen className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-gray-600">Businesses Served</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                    <div className="text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                    <div className="text-gray-600">Records Access</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Manage Your Books</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to maintaining accurate financial records
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Can Expect</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">Real-Time Access:</strong> Access your financial records 
                      anytime, anywhere through secure cloud-based systems. Stay informed about your business 
                      finances in real-time.
                    </p>
                    <p>
                      <strong className="text-gray-900">Expert Support:</strong> Our experienced bookkeepers 
                      bring professional expertise to ensure your records are maintained according to accounting 
                      standards and best practices.
                    </p>
                    <p>
                      <strong className="text-gray-900">Tax-Ready Records:</strong> Organized records that make 
                      tax filing simple and straightforward. We maintain documentation that meets tax authority 
                      requirements.
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
              Ready to Organize Your Finances?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let us handle your bookkeeping so you can focus on growing your business. 
              Contact us today to get started with professional bookkeeping services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Get Started Today
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