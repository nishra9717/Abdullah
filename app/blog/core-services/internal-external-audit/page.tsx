'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, FileCheck, Search, Users, CheckCircle2, AlertCircle, BarChart3, ClipboardCheck } from 'lucide-react';

export default function InternalExternalAudit() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: FileCheck, title: 'External Audit', description: 'Comprehensive external audit services designed to complete audit procedures with utmost effectiveness and regulatory compliance.' },
    { icon: Search, title: 'Internal Audit', description: 'Risk-based internal audit services to maximize value, increase efficiency, and help achieve organizational objectives.' },
    { icon: Shield, title: 'Compliance Audits', description: 'Specialized audits to ensure adherence to regulatory requirements and industry standards.' },
    { icon: ClipboardCheck, title: 'Financial Statement Audits', description: 'Thorough examination of financial statements to provide assurance on accuracy and compliance.' },
  ];

  const benefits = [
    'Independent assurance on financial statements',
    'Enhanced credibility with stakeholders',
    'Identification of operational inefficiencies',
    'Risk management and internal control assessment',
    'Regulatory compliance verification',
    'Improved corporate governance',
  ];

  const processSteps = [
    { step: '01', title: 'Planning & Risk Assessment', description: 'Understanding your organization, identifying risks, and developing a tailored audit approach.' },
    { step: '02', title: 'Audit Execution', description: 'Performing detailed audit procedures, testing controls, and gathering evidence with specialist skills.' },
    { step: '03', title: 'Findings & Recommendations', description: 'Analyzing results, documenting findings, and providing actionable recommendations.' },
    { step: '04', title: 'Reporting & Follow-up', description: 'Delivering comprehensive audit reports and supporting implementation of improvements.' },
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
              <span className="text-yellow-400 text-sm font-medium">Audit Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Internal & External Audit
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive audit services delivering independent assurance, risk insights, and operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-yellow-400/20 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Audit Services</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Our External Audit Services are designed to complete audit procedures with utmost effectiveness. 
                  We begin by immersing ourselves in your organization, understanding its unique challenges, and 
                  tailoring a risk-based audit approach to optimize efficiency. Our team brings specialist skills 
                  and regulatory compliance expertise to the table, ensuring that audits are both comprehensive 
                  and efficient.
                </p>
                <p>
                  For Internal Audit services, maximizing value and effectiveness requires an understanding of 
                  the organization&apos;s objectives, risks, risk management priorities, regulatory environment, and 
                  the diverse needs of crucial stakeholders. We can help supplement in-house internal audit 
                  departments with specialist skills. Our risk-based audit approach will help increase efficiency 
                  and deliver value to your business.
                </p>
                <p>
                  Whether you need external assurance for stakeholders or internal audit support to strengthen 
                  controls and manage risks, our experienced team provides professional, independent, and insightful 
                  audit services tailored to your organization&apos;s needs.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Audit Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive audit solutions for every business need
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
                  Why Audit Services Matter
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Professional audit services provide stakeholders with confidence in your financial 
                  reporting while helping identify risks and opportunities for improvement.
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
                      <Shield className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-gray-600">Audits Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileCheck className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="text-gray-600">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Conduct Audits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring thorough and effective audits
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">Risk-Based Approach:</strong> Our audit methodology focuses 
                      on areas of highest risk to your organization, ensuring efficient use of resources while 
                      providing comprehensive assurance.
                    </p>
                    <p>
                      <strong className="text-gray-900">Specialist Expertise:</strong> Our team includes professionals 
                      with experience at leading firms like KPMG, bringing specialized knowledge in various industries 
                      and audit areas.
                    </p>
                    <p>
                      <strong className="text-gray-900">Value Addition:</strong> Beyond compliance, we provide 
                      insights on operational improvements, risk management, and best practices to help strengthen 
                      your organization.
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
              Need Professional Audit Services?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let our experienced team provide the independent assurance and insights your 
              organization needs. Contact us today to discuss your audit requirements.
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