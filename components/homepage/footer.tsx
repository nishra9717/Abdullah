'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Updated footerLinks with icons for better visual presentation in the Contact section
  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '/aboutus' },
      { name: 'Services', href: '/blog' },
      { name: 'Contact', href: '/contactus' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
    Contact: [
      { name: 'Islamabad : 13 Street 3A, Sector D DHA Phase II, Islamabad, Pakistan.', href: '/contactus', icon: MapPin },
      { name: 'Sialkot : City Mall Plaza Office No. 8, 13 & 14, 2nd Floor, Kachehri Road, Sialkot, Pakistan. 51310', href: '/contactus', icon: MapPin },
      { name: 'Office PTCL Numbers', href: 'tel:052-4262067' },
      { name: '052-4262067', href: 'tel:052-4262067', icon: Phone },
      { name: '052-4262068', href: 'tel:052-4262068', icon: Phone },
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
        
        {/* Adjusted Grid Layout: Uses a 5-column grid (lg:grid-cols-5) on large screens.
            Layout: [Logo (col-span-1)] [Quick Links (col-span-1)] [Spacer (col-span-1)] [Contact (col-span-2)]
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* 1. Logo/Branding Column (Far Left) */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
<div className="relative w-24 h-12 md:w-32 md:h-16">
  <Image 
    src="/logo.png" 
    alt="logo" 
    fill 
    className="object-contain" // The Tailwind equivalent for objectFit: "contain"
  />
</div>              {/* <div>
                <h3 className="text-black font-bold text-lg leading-tight">
                  Abdullah Shahid & Co.
                </h3>
                <p className="text-gray-400 text-xs">Chartered Accountants</p>
              </div> */}
            </Link>
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
          
          {/* 2. Quick Links Column */}
          {Object.entries(footerLinks).map(([title, links]) => {
            const isContact = title === 'Contact';
            
            // Render Quick Links
            if (!isContact) {
                return (
                    <div key={title} className="lg:col-span-1">
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
                );
            }
            return null; // Skip Contact for now
          })}

          {/* 3. Spacer Column (Pushes Contact to the Right) */}
          <div className="hidden lg:block lg:col-span-1">
            {/* Empty column for spacing on large screens */}
          </div>

          {/* 4. Contact Column (Far Right, Takes 2 columns) */}
          {footerLinks['Contact'] && (
            <div key="Contact" className="lg:col-span-2">
              <h4 className="text-foreground font-semibold text-lg mb-6">Contact</h4>
              <ul className="space-y-3">
                {footerLinks['Contact'].map((link, index) => {
                    const IconComponent = link.icon; 
                    return (
                        <li key={index}>
                            <Link
                                href={link.href}
                                // Added flex items-start and space-x-2 for icon alignment
                                className="text-gray-600 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-start space-x-2"
                            >
                                {/* Conditionally render icon for Contact links */}
                                {IconComponent && <IconComponent className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" />}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    );
                })}
              </ul>
            </div>
          )}
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