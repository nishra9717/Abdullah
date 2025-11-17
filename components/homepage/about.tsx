'use client';

import { CheckCircle2, Target, Award, Heart } from 'lucide-react';

export function About() {
  return (
  <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
              <span className="text-yellow-400  md:text-5xl text-sm font-medium">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Professionals with Strong Background & Expertise
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Abdullah Shahid & Co. Chartered Accountants is a group of professionals with a
              strong background in accounting, consultancy, tax, and service management. We
              provide reliable and professional services with integrity, excellence, and
              confidentiality to meet clients&apos; individual requirements.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Target className="w-6 h-6 text-yellow-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Client-Centered Approach</h3>
                  <p className="text-gray-400">
                    We work closely with clients to understand their unique needs and goals,
                    developing customized financial and tax solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Award className="w-6 h-6 text-yellow-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Excellence & Integrity</h3>
                  <p className="text-gray-400">
                    Our commitment to excellence and integrity ensures the highest quality of
                    service for every client engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Heart className="w-6 h-6 text-yellow-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Confidentiality Guaranteed</h3>
                  <p className="text-gray-400">
                    We maintain the highest standards of confidentiality in all our client
                    relationships and services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-yellow-400/20 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/20">
                  <CheckCircle2 className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-3xl font-bold text-black mb-2">500+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/20">
                  <CheckCircle2 className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-3xl font-bold text-black mb-2">100%</h3>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-400/20 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/20">
                  <CheckCircle2 className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-3xl font-bold text-black mb-2">10+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/20">
                  <CheckCircle2 className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-3xl font-bold text-black mb-2">24/7</h3>
                  <p className="text-gray-400">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
