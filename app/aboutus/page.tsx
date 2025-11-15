'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Shield, Users, Award, Target, Eye, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Abdullah Shahid & Co.
              <span className="block text-yellow-400 mt-2">Chartered Accountants</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Providing reliable and professional accounting services with integrity, 
              excellence, and confidentiality since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2008, Abdullah Shahid & Co. has grown to become one of Pakistan&apos;s 
                most trusted chartered accountancy firms. With over 15 years of experience, 
                we&apos;ve built our reputation on delivering exceptional financial services to 
                businesses of all sizes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of ICAP-certified professionals brings together expertise in taxation, 
                auditing, financial advisory, and business consulting. We pride ourselves on 
                understanding each client&lsquo;s unique needs and providing tailored solutions that 
                drive growth and compliance.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-yellow-400/10 rounded-lg p-6 border border-yellow-400/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-yellow-400/10 rounded-lg p-6 border border-yellow-400/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl rotate-3" />
              <div className="relative bg-gradient-to-br from-yellow-400/5 to-yellow-400/20 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1554224311-beee460ae6fb?w=800&h=600&fit=crop" 
                  alt="Office" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver world-class accounting and financial services that empower businesses 
                to achieve their goals. We are committed to maintaining the highest standards of 
                professional excellence, integrity, and confidentiality in everything we do.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Pakistan&apos;s most trusted and innovative chartered accountancy firm, 
                recognized for our expertise, client-centric approach, and contribution to the 
                financial success of businesses across all sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              The principles that guide our work and relationships with clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards and maintain complete transparency 
                in all our dealings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every service we deliver, continuously improving 
                our skills and knowledge.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Focus</h3>
              <p className="text-gray-600">
                Your success is our priority. We build lasting relationships based on trust 
                and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-gray-600">
              Our commitment to excellence has been recognized by leading industry bodies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-400/20 text-center">
              <CheckCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">ICAP Certified</h3>
              <p className="text-sm text-gray-600">
                Institute of Chartered Accountants of Pakistan
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-400/20 text-center">
              <CheckCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">
                Quality Management System Certified
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-400/20 text-center">
              <CheckCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Tax Excellence 2023</h3>
              <p className="text-sm text-gray-600">
                Recognized for Outstanding Tax Advisory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business achieve its financial goals
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}