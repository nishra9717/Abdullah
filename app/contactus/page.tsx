'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Users, Award, Sparkles, Building2 } from 'lucide-react';

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    const phone = '923337954767';
    const message = encodeURIComponent('Hello! I would like to inquire about your services.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleEmailDirect = () => {
    window.location.href = 'mailto:info@theasco.com?subject=Service Inquiry';
  };

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50/30">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-xl opacity-50 animate-pulse" />
              <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <MessageCircle className="w-12 h-12 text-black" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Let&apos;s Start a
              <span className=""> Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
              We&apos;re here to help you achieve your business goals
            </p>
            <p className="text-lg text-gray-500">
              Choose your preferred way to connect with us instantly
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Cards */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* WhatsApp Card */}
              <div
                className={`group transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-3xl p-10 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <MessageCircle className="w-14 h-14 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      <Sparkles className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-3 text-left">WhatsApp</h3>
                    <p className="text-green-50 text-lg mb-4 text-left">Chat with us instantly for quick responses</p>
                    
                    <div className="bg-green-600/50 rounded-2xl p-4 mb-4">
                      <p className="text-white font-semibold text-lg">+92-333-7954767</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-green-100 text-sm">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      <span>Usually responds within minutes</span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Email Card */}
              <div
                className={`group transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <button
                  onClick={handleEmailDirect}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-black rounded-3xl p-10 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <Mail className="w-14 h-14 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      <Sparkles className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-3 text-white text-left">Email Us</h3>
                    <p className="text-gray-800 text-lg mb-4 text-white text-left">Send detailed inquiries and documents</p>
                    
                    <div className="bg-yellow-500/50 rounded-2xl p-4 mb-4">
                      <p className="text-black font-semibold text-white text-lg">info@theasco.com</p>
                    </div>
                    
                    <div className="flex text-white items-center gap-2 text-gray-800 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>We&apos;ll respond within 24 hours</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="w-8 h-8 text-yellow-400" />
                  Call Our Office
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <button
                    onClick={() => handleCall('+923337954767')}
                    className="bg-gray-700/50 hover:bg-gray-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105 group"
                  >
                    <p className="text-yellow-400 font-semibold mb-2 text-sm">Whatsapp</p>
                    <p className="text-xl font-bold group-hover:text-yellow-400 transition-colors">+92-333-7954767</p>
                  </button>
                  <button
                    onClick={() => handleCall('05242620671')}
                    className="bg-gray-700/50 hover:bg-gray-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105 group"
                  >
                    <p className="text-yellow-400 font-semibold mb-2 text-sm">Office Phone </p>
                    <p className="text-xl font-bold group-hover:text-yellow-400 transition-colors">052-4262067</p>
                  </button>
                  <button
                    onClick={() => handleCall('05242620682')}
                    className="bg-gray-700/50 hover:bg-gray-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105 group"
                  >
                    <p className="text-yellow-400 font-semibold mb-2 text-sm">Office Phone</p>
                    <p className="text-xl font-bold group-hover:text-yellow-400 transition-colors">052-4262068</p>
                  </button>
                </div>
                <div className="mt-6 flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Available Mon-Fri: 9AM-6PM | Sat: 10AM-2PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Connect With Us?
              </h2>
              <p className="text-xl text-gray-600">
                Experience professional service that puts your needs first
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Dedicated professionals with years of experience in accounting and financial services',
                  color: 'from-blue-500 to-blue-600',
                  delay: 'delay-400'
                },
                {
                  icon: Award,
                  title: 'Trusted Service',
                  description: 'Certified chartered accountants delivering reliable and accurate solutions',
                  color: 'from-yellow-400 to-yellow-500',
                  delay: 'delay-500'
                },
                {
                  icon: Clock,
                  title: 'Quick Response',
                  description: 'Fast turnaround times and prompt communication for all your queries',
                  color: 'from-green-500 to-green-600',
                  delay: 'delay-600'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${feature.delay} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 group h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Visit Our Offices
              </h2>
              <p className="text-xl text-gray-600">
                We have multiple locations to serve you better
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sialkot Office */}
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-8 shadow-xl border border-yellow-200 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sialkot Office</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="leading-relaxed">
                      City Mall Plaza Office No. 8, 13 & 14,<br />
                      2nd Floor, Kachehri Road,<br />
                      Sialkot, Pakistan. 51310
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">052-4262067</p>
                      <p className="font-semibold text-gray-900">052-4262068</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Islamabad Office */}
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-8 shadow-xl border border-yellow-200 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Islamabad Office</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="leading-relaxed">
                      13 Street 3A, Sector D<br />
                      DHA Phase II,<br />
                      Islamabad, Pakistan
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                   <div>
                      <p className="font-semibold text-gray-900">052-4262067</p>
                      <p className="font-semibold text-gray-900">052-4262068</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-400" />
                Office Hours
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <p className="font-bold text-gray-900 mb-2">Monday - Friday</p>
                  <p className="text-yellow-400 font-semibold text-lg">9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <p className="font-bold text-gray-900 mb-2">Saturday</p>
                  <p className="text-yellow-400 font-semibold text-lg">10:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                  <p className="font-bold text-gray-900 mb-2">Sunday</p>
                  <p className="text-yellow-600 font-semibold text-lg">Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
                  Don&apos;t hesitate to reach out. We&apos;re excited to hear from you and help with your financial needs.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg flex items-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp Now
                  </button>
                  <button
                    onClick={handleEmailDirect}
                    className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg flex items-center gap-3"
                  >
                    <Mail className="w-6 h-6" />
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}