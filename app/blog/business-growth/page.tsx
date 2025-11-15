'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/homepage/header';
import { Footer } from '@/components/homepage/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, TrendingUp, CheckCircle2, Shield, Users, Target, Lightbulb, AlertCircle, BarChart3 } from 'lucide-react';

export default function BusinessGrowth() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Rocket, title: 'Growth Strategy Development', description: 'Comprehensive strategies designed to accelerate business growth and market expansion.' },
    { icon: BarChart3, title: 'Market Analysis', description: 'In-depth market research and competitive analysis to identify growth opportunities.' },
    { icon: Target, title: 'Performance Optimization', description: 'Identify and optimize key business processes to improve efficiency and profitability.' },
    { icon: Lightbulb, title: 'Innovation Consulting', description: 'Strategic guidance on innovation and new product development to drive growth.' },
  ];

  const benefits = [
    'Accelerate business growth and expansion',
    'Identify new market opportunities',
    'Optimize operations for better performance',
    'Increase profitability and market share',
    'Build sustainable competitive advantages',
    'Navigate growth challenges effectively',
  ];

  const processSteps = [
    { step: '01', title: 'Business Assessment', description: 'Comprehensive evaluation of your current business position, strengths, and growth potential.' },
    { step: '02', title: 'Strategy Development', description: 'Creating customized growth strategies aligned with your business objectives and market conditions.' },
    { step: '03', title: 'Implementation Support', description: 'Guided implementation of growth initiatives with ongoing support and monitoring.' },
    { step: '04', title: 'Performance Tracking', description: 'Regular monitoring and adjustment of strategies to ensure optimal growth outcomes.' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
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
              <span className="text-yellow-400 text-sm font-medium">Business Growth Advisory</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Accelerate Your Business Growth
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Strategic advisory services designed to help businesses scale sustainably and achieve their growth objectives
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Path to Sustainable Business Growth</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Business growth is not just about increasing revenue—it's about building a sustainable, scalable 
                  organization that can thrive in competitive markets. Successful growth requires strategic planning, 
                  market insight, operational excellence, and the ability to adapt to changing conditions. Whether 
                  you're a startup looking to scale or an established business seeking expansion, growth requires 
                  careful planning and expert guidance.
                </p>
                <p>
                  At Abdullah Shahid & Co., we specialize in helping businesses achieve sustainable growth through 
                  comprehensive advisory services. Our team combines financial expertise with strategic business 
                  acumen to develop growth strategies that are both ambitious and achievable. We work closely with 
                  management teams to identify opportunities, overcome challenges, and implement strategies that 
                  drive long-term success.
                </p>
                <p>
                  Our business growth services encompass market analysis, strategic planning, operational optimization, 
                  and financial modeling. We help you understand your competitive position, identify growth opportunities, 
                  and develop actionable plans to capitalize on them. With our support, you can navigate the complexities 
                  of growth while maintaining financial stability and operational efficiency.
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Business Growth Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to accelerate your business growth
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
                  Why Business Growth Advisory Matters
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Strategic growth advisory provides the expertise and guidance needed to scale 
                  your business successfully while managing risks and maintaining stability.
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
                      <Rocket className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">200+</div>
                    <div className="text-gray-600">Businesses Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">150%</div>
                    <div className="text-gray-600">Avg. Growth Rate</div>
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
                    <div className="text-3xl font-bold text-foreground mb-2">95%</div>
                    <div className="text-gray-600">Success Rate</div>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Drive Business Growth</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for sustainable business expansion
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">Growth Strategy Considerations</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-foreground">Market Positioning:</strong> Understanding your position in 
                      the market is crucial for growth. We help you identify your competitive advantages and develop 
                      strategies that leverage your strengths while addressing weaknesses.
                    </p>
                    <p>
                      <strong className="text-foreground">Financial Planning:</strong> Growth requires capital, and 
                      managing cash flow during expansion is critical. We help you plan for growth financing, manage 
                      working capital, and ensure financial stability throughout the growth process.
                    </p>
                    <p>
                      <strong className="text-foreground">Operational Scalability:</strong> Successful growth requires 
                      systems and processes that can scale. We help you identify operational bottlenecks, optimize processes, 
                      and build infrastructure that supports sustainable expansion.
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
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Partner with us to develop and implement growth strategies that drive sustainable 
              expansion. Contact us today to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/#contact">
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
                <Link href="/#services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
