'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Scale, Shield, FileText, Gavel, CheckCircle2, AlertCircle, Users, Award } from 'lucide-react';

export default function TaxControversyLitigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Gavel, title: 'Tax Dispute Resolution', description: 'Expert representation in tax disputes with tax authorities, from initial notices to final resolution.' },
    { icon: FileText, title: 'Tax Audits Defense', description: 'Comprehensive support during tax audits, ensuring your rights are protected and optimal outcomes achieved.' },
    { icon: Scale, title: 'Appeals & Litigation', description: 'Professional representation in tax appeals and litigation proceedings at all administrative and judicial levels.' },
    { icon: Shield, title: 'Penalty Abatement', description: 'Strategic advocacy to reduce or eliminate tax penalties through negotiation and proper documentation.' },
  ];

  const benefits = [
    'Expert representation before tax authorities',
    'Protection of your legal rights throughout proceedings',
    'Reduction or elimination of tax assessments',
    'Minimization of penalties and interest charges',
    'Resolution of complex tax controversies',
    'Peace of mind during stressful tax disputes',
  ];

  const processSteps = [
    { step: '01', title: 'Case Assessment', description: 'Thorough review of your tax controversy, analyzing the merits and developing a strategic approach.' },
    { step: '02', title: 'Response Strategy', description: 'Crafting comprehensive responses to tax authority notices, inquiries, or assessments with supporting documentation.' },
    { step: '03', title: 'Negotiation & Advocacy', description: 'Engaging with tax authorities to negotiate favorable resolutions and defend your position.' },
    { step: '04', title: 'Appeals & Resolution', description: 'Pursuing appeals when necessary and seeing the matter through to final resolution.' },
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
              <span className="text-yellow-400 text-sm font-medium">Tax Litigation Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tax Controversy & Litigation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert representation and advocacy in tax disputes, audits, and litigation matters
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-yellow-400/20 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Defending Your Tax Position</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Tax controversies and disputes with tax authorities can be complex, stressful, and potentially 
                  costly. Whether you&apos;re facing a tax audit, assessment, or formal litigation, having experienced 
                  professional representation is crucial to protecting your interests and achieving the best 
                  possible outcome.
                </p>
                <p>
                  Our Tax Controversy & Litigation services provide comprehensive support throughout the entire 
                  process, from initial contact with tax authorities through final resolution. We have extensive 
                  experience representing clients in tax disputes, negotiating with tax officials, and litigating 
                  matters when necessary. Our team understands tax law, administrative procedures, and litigation 
                  strategies to effectively defend your position.
                </p>
                <p>
                  We work diligently to resolve tax controversies efficiently and favorably, whether through 
                  negotiation, administrative appeals, or formal litigation. Our goal is to minimize your tax 
                  liability, reduce or eliminate penalties, and protect your rights throughout the process while 
                  keeping you informed every step of the way.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Litigation Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive representation in all tax controversy matters
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
                  Why Professional Representation Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Facing tax authorities alone can be overwhelming. Expert representation ensures your 
                  rights are protected and increases the likelihood of favorable outcomes.
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
                      <Scale className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                    <div className="text-gray-600">Cases Handled</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="text-gray-600">Client Advocacy</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Handle Tax Disputes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A strategic approach to resolving tax controversies
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Considerations</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">Act Quickly:</strong> Tax disputes often have strict 
                      deadlines for responses and appeals. Early engagement with professional representation 
                      provides more options and better outcomes.
                    </p>
                    <p>
                      <strong className="text-gray-900">Documentation is Key:</strong> Proper documentation 
                      and evidence are crucial in tax controversies. We help gather, organize, and present 
                      supporting materials effectively.
                    </p>
                    <p>
                      <strong className="text-gray-900">Multiple Resolution Paths:</strong> Not all controversies 
                      require litigation. We explore all options including negotiation, settlement, and alternative 
                      dispute resolution before proceeding to formal litigation.
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
              Facing a Tax Dispute?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don&apos;t face tax authorities alone. Get expert representation to protect your rights 
              and achieve the best possible outcome. Contact us today for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Get Help Now
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