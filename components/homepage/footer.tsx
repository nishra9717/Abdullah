'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Internal & External Audit', href: '/blog/business-growth' },
      { name: 'Bookkeeping Services', href: '/blog/client-consultation' },
      { name: 'Tax Planning & Compliance', href: '/blog/financial-analysis' },
      { name: 'Tax Controversy & Litigation', href: '/blog/financial-planning' },
      { name: 'International Tax', href: '/blog/corporate-services' },
      { name: 'Financial Consulting', href: '/blog/tax-documentation' },
    ],
    'Quick Links': [
      { name: 'About Us', href: '/aboutus' },
      { name: 'Services', href: '/blog' },
      { name: 'Contact', href: '/contactus' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
    Contact: [
      { name: 'Islamabad Office', href: '/contact#islamabad' },
      { name: 'Sialkot Office', href: '/contact#sialkot' },
      { name: 'info@theasco.com', href: 'mailto:info@theasco.com' },
      { name: '+92-333-7954767', href: 'tel:+923337954767' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/abdullahshahidco', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/abdullahshahidco', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/abdullahshahidco', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/abdullahshahidco', label: 'Instagram' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
             <Image src="/logo.png" alt="logo" width={48} height={30} />
              <div>
                <h3 className="text-yellow-400 font-bold text-lg leading-tight">
                  Abdullah Shahid & Co.
                </h3>
                <p className="text-gray-400 text-xs">Chartered Accountants</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional accounting, audit, and tax consulting services with integrity,
              excellence, and confidentiality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-100 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-foreground font-semibold text-lg mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {currentYear} Abdullah Shahid & Co. Chartered Accountants. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed by <Link href="https://github.com/developerzohaib786" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">developerzohaib786</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 py-1">
        <div className="container mx-auto px-4 flex justify-center items-center space-x-8 text-black text-sm font-medium overflow-hidden">
          <span className="animate-pulse">Professional</span>
          <span className="animate-pulse delay-100">Reliable</span>
          <span className="animate-pulse delay-200">Confidential</span>
          <span className="animate-pulse delay-300">Excellence</span>
        </div>
      </div>
    </footer>
  );
}