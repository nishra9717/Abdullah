'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, CheckCircle2, Shield, Users, Clock, Heart, AlertCircle, Phone, Mail } from 'lucide-react';

export default function ClientConsultation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: MessageCircle, title: 'Initial Assessment', description: 'Comprehensive review of your financial situation and identification of key areas needing attention.' },
    { icon: Heart, title: 'Personalized Advice', description: 'Tailored financial advice and recommendations based on your unique circumstances and goals.' },
    { icon: Clock, title: 'Strategic Planning', description: 'Development of actionable plans to address your financial challenges and opportunities.' },
    { icon: Shield, title: 'Ongoing Support', description: 'Continuous guidance and support as you implement recommendations and navigate financial decisions.' },
  ];

  const benefits = [
    'Get expert financial guidance tailored to your needs',
    'Understand your financial situation clearly',
    'Develop actionable plans for improvement',
    'Access professional expertise and insights',
    'Make informed financial decisions',
    'Build confidence in your financial future',
  ];

  const processSteps = [
    { step: '01', title: 'Schedule Consultation', description: 'Book a convenient time for your consultation with one of our experienced advisors.' },
    { step: '02', title: 'Initial Discussion', description: 'We discuss your financial situation, goals, challenges, and areas where you need support.' },
    { step: '03', title: 'Analysis & Recommendations', description: 'We analyze your situation and provide clear, actionable recommendations and strategies.' },
    { step: '04', title: 'Follow-up Support', description: 'Ongoing support and follow-up consultations to ensure you stay on track with your goals.' },
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
              <span className="text-yellow-400 text-sm font-medium">Personalized Consultation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Client Consultation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Personalized consultation for all your financial needs, providing expert guidance and tailored solutions
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Your Financial Partner</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Every individual and business has unique financial circumstances, goals, and challenges. That&apos;s why 
                  personalized consultation is at the heart of our service approach. We believe that effective financial 
                  guidance must be tailored to your specific situation, taking into account your goals, risk tolerance, 
                  and unique circumstances.
                </p>
                <p>
                  At Abdullah Shahid & Co., our consultation services are designed to provide you with expert financial 
                  guidance in a comfortable, confidential setting. Whether you&apos;re facing complex tax issues, planning for 
                  retirement, managing business finances, or navigating any other financial challenge, our experienced 
                  advisors are here to help.
                </p>
                <p>
                  During your consultation, we take the time to understand your complete financial picture. We listen to 
                  your concerns, answer your questions, and provide clear, practical advice that you can act on. Our goal 
                  is not just to provide information, but to empower you with the knowledge and confidence to make informed 
                  financial decisions that support your long-term success.
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
            <h2 className="text-4xl font-bold text-foreground mb-4">What to Expect in Your Consultation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive consultation services tailored to your needs
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
                  Why Schedule a Consultation?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Professional consultation provides valuable insights and guidance that can 
                  significantly impact your financial success and peace of mind.
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
                    <div className="text-gray-600">Consultations</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
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
                      <Clock className="w-8 h-8 text-black" />
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
            <h2 className="text-4xl font-bold text-foreground mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple process to connect with our expert advisors
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">Preparing for Your Consultation</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-foreground">Gather Documents:</strong> Bring relevant financial documents 
                      such as tax returns, bank statements, investment records, and any other financial information that 
                      will help us understand your situation better.
                    </p>
                    <p>
                      <strong className="text-foreground">List Your Questions:</strong> Prepare a list of questions or 
                      concerns you&apos;d like to discuss. This helps ensure we address all your important topics during the 
                      consultation.
                    </p>
                    <p>
                      <strong className="text-foreground">Define Your Goals:</strong> Think about your short-term and 
                      long-term financial goals. Understanding what you want to achieve helps us provide more targeted 
                      and effective advice.
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
              Ready to Get Expert Financial Guidance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Book a consultation today and take the first step towards achieving your financial goals. 
              Our experienced advisors are ready to help you navigate your financial journey with confidence.
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
