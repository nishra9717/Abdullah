'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      'Internal & External Audit',
      'Bookkeeping Services',
      'Tax Planning & Compliance',
      'Tax Controversy & Litigation',
      'International Tax',
      'Financial Consulting',
    ],
    'Quick Links': [
      'About Us',
      'Services',
      'Gallery',
      'Contact',
      'Privacy Policy',
      'Terms of Service',
    ],
    Contact: [
      'Islamabad Office',
      'Sialkot Office',
      'info@asca.com',
      '+92-XXX-XXXXXXX',
    ],
  };

  return (
  <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">AS</span>
              </div>
              <div>
                <h3 className="text-yellow-400 font-bold text-lg leading-tight">
                  Abdullah Shahid & Co.
                </h3>
                <p className="text-gray-400 text-xs">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional accounting, audit, and tax consulting services with integrity,
              excellence, and confidentiality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-foreground font-semibold text-lg mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-yellow-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
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
              Designed by <span className="text-yellow-400">Omi</span>
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
