'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Shield, Users, Award, Target, Eye, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
              A group of professionals with a strong background in accounting, consultancy, 
              tax and service management, providing reliable services with integrity, excellence 
              and confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About the Firm</h2>
              <p className="text-gray-600 leading-relaxed">
                Abdullah Shahid & Co. Chartered Accountants is a group of professionals with 
                a strong background in accounting, consultancy, tax and service management. 
                The firm provides reliable and professional services with integrity, excellence 
                and confidentiality to meet clients&apos; individual requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We bring in-depth knowledge, as well as the technical expertise you are looking 
                for in a professional services firm. We understand your needs to provide a tailored 
                solution that meets with your requirements and garners consent of all stakeholders 
                involved.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform allows us to objectively serve as our clients&apos; advocate; the only 
                advice and solutions we offer are those that are in the best interest of our client.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl rotate-3" />
              <div className="relative bg-gradient-to-br from-yellow-400/5 to-yellow-400/20 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                  alt="Professional accounting office workspace" 
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">
              The principles that guide our work and relationships with clients
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We value open communication, information sharing and inclusive decision making.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Independence</h3>
              <p className="text-gray-600">
                We maintain professional independence to provide objective advice and solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stewardship</h3>
              <p className="text-gray-600">
                We hire the best and brightest and invest in our people to ensure the legacy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best-in-class</h3>
              <p className="text-gray-600">
                We aim to be the benchmark for quality and the standard by which other firms are measured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">
              Led by experienced professionals with extensive backgrounds in accounting and finance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <Image
              src="/abdullah-shahid.png" 
              alt="Abdullah Shahid" 
              width={150} 
              height={150} 
              className="rounded-full mx-auto mb-6 object-cover shadow-lg" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Abdullah Shahid</h3>
              <p className="text-yellow-400 font-semibold mb-4 text-center">Partner</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Associate member of the Institute of Chartered Accountants of Pakistan. Abdullah 
                spent 5 years working for KPMG in Pakistan in their assurance, tax and advisory 
                line of service.
              </p>

            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <Image
              src="/zohair-tahir.png" 
              alt="M. Zohair Tahir" 
              width={150} 
              height={150} 
              className="rounded-full mx-auto mb-6 object-cover shadow-lg" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">M. Zohair Tahir</h3>
              <p className="text-yellow-400 font-semibold mb-4 text-center">Partner</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Member of Association of Chartered Certified Accountants. During a career span 
                of 6 years, he has worked with A.F Ferguson & Co. as tax consultant before moving 
                to KPMG in their assurance department.
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
          <Link href='/contactus'>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}