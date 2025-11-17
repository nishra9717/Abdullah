'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/blogData';
import { 
  ArrowRight, 
  FileText, 
  Calculator, 
  PieChart, 
  TrendingUp, 
  Building2, 
  Users2,
  CheckCircle2,
  Shield,
  Users,
  Clock,
  Target,
  BookOpen,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const icons = [FileText, Calculator, PieChart, TrendingUp, Building2, Users2];

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: BookOpen, value: '15+', label: 'Years Experience' },
    { icon: Shield, value: '100%', label: 'Confidential' },
    { icon: Target, value: '100%', label: 'Client Satisfaction' },
  ];

  const services = [
    'Internal & External Audit',
    'Bookkeeping Services',
    'Tax Planning & Compliance',
    'Tax Controversy & Litigation',
    'International Tax',
    'Financial Consulting',
  ];

  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-16">
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
              <span className="text-yellow-400 text-sm font-medium">Our Blog & Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Explore Our Financial Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover comprehensive guides, insights, and detailed information about our professional accounting, 
              tax, and financial consulting services
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
                  <span className="text-yellow-400 text-sm font-medium">About Us</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Abdullah Shahid & Co. Chartered Accountants
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We are a leading firm of chartered accountants providing professional accounting, audit, and tax 
                  consulting services with integrity, excellence, and confidentiality. With over 15 years of experience, 
                  we have built a reputation for delivering reliable and professional services tailored to meet your 
                  individual requirements.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team of experienced professionals is committed to helping individuals and businesses navigate 
                  the complexities of financial management, tax compliance, and strategic planning. We combine technical 
                  expertise with practical business insight to deliver value that goes beyond traditional accounting services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 group"
                  >
                    <Link href="/aboutus">
                      Learn More About Us
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400/10 to-transparent rounded-3xl p-8 border border-yellow-400/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
                <span className="text-yellow-400 text-sm font-medium">What We Offer</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive accounting and financial services tailored to your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-yellow-400 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 group-hover:text-black transition-colors" />
                    </div>
                    <p className="text-gray-700 font-medium group-hover:text-yellow-400 transition-colors">
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-background to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
              <span className="text-yellow-400 text-2xl font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our detailed service guides to learn more about how we can help you achieve your financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => {
              const Icon = icons[index] ?? FileText;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative bg-card border border-border rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:border-yellow-400/50 group-hover:scale-105">
                    <div>
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${hoveredIndex === index ? 'bg-yellow-400 scale-110' : 'bg-yellow-400/10'}`}>
                        <Icon className={`w-8 h-8 transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-yellow-400'}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-yellow-400 transition-colors mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post.description}
                      </p>
                    </div>

                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="inline-flex items-center text-yellow-400 text-sm font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-gray-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-yellow-400/10 to-transparent rounded-3xl p-8 md:p-12 border border-yellow-400/20">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Why Choose Abdullah Shahid & Co.?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Professional Excellence</h3>
                      <p className="text-gray-600">Our team of chartered accountants brings years of experience and expertise to every engagement.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Client-Focused Approach</h3>
                      <p className="text-gray-600">We tailor our services to meet your specific needs and work closely with you to achieve your goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Confidentiality & Trust</h3>
                      <p className="text-gray-600">We maintain the highest standards of confidentiality and integrity in all our client relationships.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Get Started Today
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Ready to take control of your finances? Contact us today to schedule a consultation 
                  and discover how we can help you achieve your financial objectives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+92-333-7954767</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@theasco.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Offices</p>
                      <p className="text-gray-600">Islamabad & Sialkot</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                  >
                  <Link href='tel:+92-333-7954767'>
                      Schedule Consultation
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our services, read our detailed guides, and get in touch to discuss how we can 
              help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/contactus">
                  Contact Us
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

