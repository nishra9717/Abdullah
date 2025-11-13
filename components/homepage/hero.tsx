'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-black to-black" />

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

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Get Your Finances{' '}
              <span className="text-yellow-400 inline-block animate-in fade-in zoom-in duration-700 delay-300">
                In Order
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Abdullah Shahid & Co. Chartered Accountants provides reliable and professional
              services with integrity, excellence, and confidentiality to meet your individual
              requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                View Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-gray-400">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-gray-400">Confidential</p>
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
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="h-4 bg-yellow-400/20 rounded animate-pulse" />
                  <div className="h-4 bg-yellow-400/10 rounded animate-pulse delay-100" />
                  <div className="h-4 bg-yellow-400/20 rounded animate-pulse delay-200" />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-yellow-400/10 rounded-lg p-4">
                      <div className="h-8 w-8 bg-yellow-400 rounded mb-2" />
                      <div className="h-3 bg-yellow-400/20 rounded" />
                    </div>
                    <div className="bg-yellow-400/10 rounded-lg p-4">
                      <div className="h-8 w-8 bg-yellow-400 rounded mb-2" />
                      <div className="h-3 bg-yellow-400/20 rounded" />
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
