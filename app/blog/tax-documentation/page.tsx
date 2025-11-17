'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, CheckCircle2, Shield, Clock, Users, TrendingUp, Calculator, BookOpen, AlertCircle } from 'lucide-react';

export default function TaxDocumentation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: FileText, title: 'Tax Return Preparation', description: 'Complete preparation of individual and corporate tax returns with meticulous attention to detail.' },
    { icon: Calculator, title: 'Tax Planning & Strategy', description: 'Strategic planning to minimize tax liabilities while ensuring full compliance with regulations.' },
    { icon: BookOpen, title: 'Documentation Management', description: 'Organized record-keeping and documentation for all tax-related transactions and filings.' },
    { icon: Shield, title: 'Compliance Assurance', description: 'Ensuring all filings meet regulatory requirements and deadlines to avoid penalties.' },
  ];

  const benefits = [
    'Minimize tax liabilities through strategic planning',
    'Ensure complete compliance with tax regulations',
    'Save time with professional document preparation',
    'Reduce risk of audits and penalties',
    'Access to expert tax advice and guidance',
    'Maintain organized records for future reference',
  ];

  const processSteps = [
    { step: '01', title: 'Initial Consultation', description: 'We review your financial situation and tax requirements to understand your needs.' },
    { step: '02', title: 'Document Collection', description: 'Gathering all necessary documents and records for accurate filing.' },
    { step: '03', title: 'Analysis & Preparation', description: 'Thorough analysis of your financial data and preparation of tax returns.' },
    { step: '04', title: 'Review & Filing', description: 'Final review and submission of tax returns with all required documentation.' },
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
              <span className="text-yellow-400 text-sm font-medium">Professional Tax Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Comprehensive Tax Documentation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert tax filing and documentation services designed to ensure compliance, minimize liabilities, and maximize your returns
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Tax Documentation</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Tax documentation is a critical aspect of financial management for both individuals and businesses. 
                  Proper tax documentation ensures compliance with local tax laws, minimizes the risk of audits, and 
                  helps maximize legitimate deductions and credits.
                </p>
                <p>
                  At Abdullah Shahid & Co., we provide end-to-end tax documentation services that cover everything 
                  from initial consultation to final filing. Our experienced team of chartered accountants understands 
                  the complexities of tax regulations and works diligently to ensure your tax affairs are handled 
                  professionally and efficiently.
                </p>
                <p>
                  Whether you&apos;re an individual taxpayer, a small business owner, or managing a large corporation, 
                  our comprehensive approach to tax documentation ensures that all your financial records are properly 
                  maintained, organized, and ready for filing. We stay current with the latest tax laws and regulations 
                  to provide you with accurate, timely, and compliant tax services.
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Tax Documentation Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services tailored to meet all your tax documentation needs
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
                  Why Choose Our Tax Documentation Services?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our professional tax documentation services offer numerous advantages that help you 
                  save time, reduce stress, and ensure compliance while maximizing your tax benefits.
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
                    <div className="text-gray-600">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
                    <div className="text-gray-600">Returns Filed</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">99%</div>
                    <div className="text-gray-600">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined process designed for efficiency and accuracy
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">Important Considerations</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-foreground">Deadline Awareness:</strong> Tax filing deadlines are strict, 
                      and missing them can result in penalties and interest charges. We ensure all returns are filed 
                      on time and help you stay ahead of important dates.
                    </p>
                    <p>
                      <strong className="text-foreground">Record Keeping:</strong> Maintaining accurate records throughout 
                      the year makes tax preparation much easier. We provide guidance on what documents to keep and how to 
                      organize them effectively.
                    </p>
                    <p>
                      <strong className="text-foreground">Deduction Opportunities:</strong> Many taxpayers miss out on 
                      legitimate deductions and credits. Our expertise helps identify all available tax-saving opportunities 
                      while ensuring compliance.
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
              Ready to Get Your Tax Documentation in Order?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Contact us today to schedule a consultation and discover how we can help you 
              navigate the complexities of tax documentation with confidence.
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
