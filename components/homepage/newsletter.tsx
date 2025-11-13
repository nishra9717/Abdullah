'use client';

import { Mail, Gift } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Mail className="w-10 h-10 text-black" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Stay Updated
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest tax updates, financial tips, and exclusive offers.
              </p>

              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-2 px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full">
                  <Gift className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Get 10% discount on your first purchase</span>
                </div>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-black border-gray-700 text-white focus:border-yellow-400 flex-1"
                  />
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
