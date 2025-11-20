'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Scale, TrendingDown, Shield, CheckCircle2, AlertCircle, Calculator, Briefcase } from 'lucide-react';

export default function TaxPlanningCompliance() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Calculator, title: 'Tax Strategy Development', description: 'Comprehensive tax planning strategies to minimize tax liability while ensuring full compliance with regulations.' },
    { icon: FileText, title: 'Tax Return Preparation', description: 'Professional preparation and filing of corporate, individual, and partnership tax returns with accuracy and efficiency.' },
    { icon: Scale, title: 'Compliance Management', description: 'Ongoing monitoring and management of tax compliance obligations to avoid penalties and maintain good standing.' },
    { icon: Briefcase, title: 'Advisory Services', description: 'Expert guidance on tax implications of business decisions, transactions, and restructuring initiatives.' },
  ];

  const benefits = [
    'Minimize tax liability through strategic planning',
    'Ensure full compliance with tax regulations',
    'Avoid penalties and interest charges',
    'Optimize business structure for tax efficiency',
    'Stay updated with changing tax laws',
    'Peace of mind with expert tax management',
  ];

  const processSteps = [
    { step: '01', title: 'Tax Position Analysis', description: 'Comprehensive review of your current tax position, identifying opportunities and risks.' },
    { step: '02', title: 'Strategy Development', description: 'Creating customized tax strategies aligned with your business objectives and regulatory requirements.' },
    { step: '03', title: 'Implementation Support', description: 'Guiding implementation of tax strategies and ensuring proper documentation and compliance.' },
    { step: '04', title: 'Ongoing Compliance', description: 'Continuous monitoring of tax obligations and proactive management of filing requirements.' },
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
              <span className="text-yellow-400 text-sm font-medium">Taxation Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tax Planning & Compliance
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Strategic tax solutions to achieve goals in a tax-efficient manner while ensuring full compliance
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-yellow-400/20 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Tax Management</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Help achieve goals in a tax-efficient manner both at a national and international level. We 
                  provide tax consulting, advisory and cross-border restructuring support services under domestic 
                  law and international tax treaty network. These services range from conceptualization of tax 
                  strategy through analysis of tax and regulatory implications of transactions to final 
                  implementation assistance.
                </p>
                <p>
                  Our tax planning and compliance services are designed to help businesses and individuals navigate 
                  the complex tax landscape while minimizing their tax burden legally and ethically. We stay 
                  current with ever-changing tax laws and regulations to ensure our clients remain compliant while 
                  taking advantage of all available tax benefits and incentives.
                </p>
                <p>
                  From routine tax compliance to complex strategic tax planning, our experienced team provides 
                  comprehensive support tailored to your specific circumstances. We help you understand the tax 
                  implications of your business decisions and develop strategies that align with your financial 
                  objectives while meeting all regulatory requirements.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tax Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax solutions for businesses and individuals
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
                  Why Tax Planning Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Effective tax planning helps you minimize tax liability while ensuring compliance, 
                  allowing you to reinvest savings into business growth and development.
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
                      <TrendingDown className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">30%</div>
                    <div className="text-gray-600">Avg. Tax Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="text-gray-600">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-gray-600">Returns Filed</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Scale className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Handle Your Taxes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach to tax planning and compliance
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tax Planning Essentials</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">Proactive Approach:</strong> Effective tax planning 
                      requires year-round attention, not just at filing time. We work with you throughout the 
                      year to identify opportunities and make timely decisions.
                    </p>
                    <p>
                      <strong className="text-gray-900">Cross-Border Expertise:</strong> Our team provides support 
                      for international tax matters, including cross-border restructuring and treaty network 
                      optimization under domestic and international law.
                    </p>
                    <p>
                      <strong className="text-gray-900">Complete Implementation:</strong> From conceptualization 
                      through implementation assistance, we provide end-to-end support for your tax strategies 
                      and compliance needs.
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
              Ready to Optimize Your Tax Strategy?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let our tax experts help you minimize tax liability while ensuring full compliance. 
              Contact us today for a comprehensive tax consultation.
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