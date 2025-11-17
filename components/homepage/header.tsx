'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

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
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/blog' },
    { label: 'About', href: '/aboutus' },
    { label: 'Contact', href: '/contactus' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
             <Image src="/logo.png" alt="logo" width={48} height={30} />
              <div>
                <h3 className="text-black font-bold text-lg leading-tight">
                  Abdullah Shahid & Co.
                </h3>
                <p className="text-gray-400 text-xs">Chartered Accountants</p>
              </div>
            </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+92-333-7954767" className="text-gray-700 hover:text-yellow-400 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:info@theasco.com" className="text-gray-700 hover:text-yellow-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
           <Link href="/contactus" className="text-yellow-400"> <Button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300">
              Get Started
            </Button>
            </Link>
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
