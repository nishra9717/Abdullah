'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-background to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
              <span className="text-yellow-400 text-sm font-medium">
                Professional Accounting Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Get Your Finances{' '}
              <span className="text-yellow-400 inline-block animate-in fade-in zoom-in duration-700 delay-300">
                In Order
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Abdullah Shahid & Co. Chartered Accountants provides reliable and professional
              services with integrity, excellence, and confidentiality to meet your individual
              requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='tel:+92-333-7954767'><Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
             <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                View Services
              </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-gray-600">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-gray-600">Confidential</p>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl rotate-6 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-3xl -rotate-6" />
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-yellow-400/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-foreground">Our Achievements</h3>
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <p className="text-gray-600">ICAP Certified Professionals</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <p className="text-gray-600">ISO 9001:2015 Certified</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <p className="text-gray-600">Tax Excellence Award 2023</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/20">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/20">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}