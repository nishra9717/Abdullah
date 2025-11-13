'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">AS</span>
            </div>
            <div>
              <h1 className="text-yellow-400 font-bold text-lg leading-tight">
                Abdullah Shahid & Co.
              </h1>
              <p className="text-gray-400 text-xs">Chartered Accountants</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+92" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:info@asca.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300">
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden text-yellow-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 animate-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
