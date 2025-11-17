'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, CheckCircle2, Shield, Users, FileCheck, Scale, AlertCircle, BookOpen, Globe } from 'lucide-react';

export default function CorporateServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Building2, title: 'Corporate Accounting', description: 'Complete accounting services including financial reporting, bookkeeping, and record management.' },
    { icon: FileCheck, title: 'Compliance Management', description: 'Ensuring adherence to all regulatory requirements and statutory obligations.' },
    { icon: Scale, title: 'Corporate Governance', description: 'Expert guidance on corporate governance practices and board compliance.' },
    { icon: BookOpen, title: 'Financial Reporting', description: 'Preparation of accurate financial statements and reports for stakeholders and regulators.' },
  ];

  const benefits = [
    'Ensure full regulatory compliance',
    'Maintain accurate financial records',
    'Reduce compliance risks and penalties',
    'Improve corporate governance',
    'Streamline financial operations',
    'Support strategic decision-making',
  ];

  const processSteps = [
    { step: '01', title: 'Needs Assessment', description: 'Comprehensive evaluation of your corporate accounting and compliance requirements.' },
    { step: '02', title: 'Service Design', description: 'Customizing our services to meet your specific corporate needs and objectives.' },
    { step: '03', title: 'Implementation', description: 'Seamless implementation of accounting systems and compliance processes.' },
    { step: '04', title: 'Ongoing Support', description: 'Continuous monitoring, support, and updates to ensure ongoing compliance.' },
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
              <span className="text-yellow-400 text-sm font-medium">Corporate Accounting Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Complete Corporate Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive corporate accounting, compliance, and reporting services tailored for growing companies
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Corporate Services</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Corporate accounting and compliance are fundamental to the success and sustainability of any business. 
                  As companies grow, the complexity of financial management, regulatory compliance, and corporate governance 
                  increases significantly. Professional corporate services ensure that your business maintains accurate records, 
                  meets all regulatory requirements, and operates with financial integrity.
                </p>
                <p>
                  At Abdullah Shahid & Co., we provide comprehensive corporate services that cover all aspects of corporate 
                  accounting, compliance, and governance. Our experienced team understands the unique challenges faced by 
                  growing companies and provides tailored solutions that support business operations while ensuring full 
                  compliance with regulatory requirements.
                </p>
                <p>
                  Our corporate services include financial reporting, compliance management, corporate governance support, 
                  and ongoing accounting services. We help businesses stay compliant with statutory requirements, maintain 
                  accurate financial records, and provide the financial information needed for strategic decision-making. With 
                  our support, you can focus on growing your business while we handle the complexities of corporate accounting 
                  and compliance.
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Corporate Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete solutions for corporate accounting and compliance needs
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
                  Why Corporate Services Matter
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Professional corporate services provide essential support that helps businesses 
                  maintain compliance, manage finances effectively, and support strategic growth.
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
                      <Building2 className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">300+</div>
                    <div className="text-gray-600">Companies Served</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                    <div className="text-gray-600">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileCheck className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                    <div className="text-gray-600">Reports Filed</div>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Deliver Corporate Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to corporate accounting and compliance
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">Corporate Compliance Essentials</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-foreground">Statutory Filings:</strong> Companies must file various 
                      statutory returns and reports with regulatory authorities. We ensure all filings are completed 
                      accurately and on time to avoid penalties and maintain good standing.
                    </p>
                    <p>
                      <strong className="text-foreground">Financial Reporting:</strong> Accurate financial reporting 
                      is essential for stakeholders, investors, and regulatory compliance. We prepare comprehensive 
                      financial statements that meet all reporting standards and requirements.
                    </p>
                    <p>
                      <strong className="text-foreground">Corporate Governance:</strong> Good corporate governance 
                      practices are essential for business credibility and compliance. We provide guidance on governance 
                      structures, board compliance, and best practices.
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
              Ensure Your Corporate Compliance and Accounting Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let us handle your corporate accounting and compliance needs so you can focus on 
              growing your business. Contact us today to learn more about our services.
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
