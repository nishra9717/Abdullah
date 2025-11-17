'use client';

import { useState } from 'react';
import {
  FileCheck,
  Calculator,
  BookOpen,
  Scale,
  TrendingUp,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const services = [
  {
    icon: FileCheck,
    title: 'Internal & External Audit',
    description:
      'Comprehensive audit services ensuring compliance and identifying areas for improvement in your financial operations.',
    features: ['Financial Audits', 'Operational Reviews', 'Compliance Checks'],
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping Services',
    description:
      'Professional bookkeeping to maintain accurate financial records and support informed business decisions.',
    features: ['Daily Transactions', 'Financial Reports', 'Account Reconciliation'],
  },
  {
    icon: Calculator,
    title: 'Tax Planning & Compliance',
    description:
      'Strategic tax planning and preparation services to minimize liabilities and ensure full compliance.',
    features: ['Tax Strategy', 'Return Preparation', 'Compliance Management'],
  },
  {
    icon: Scale,
    title: 'Tax Controversy & Litigation',
    description:
      'Expert representation in tax disputes and litigation to protect your interests.',
    features: ['Dispute Resolution', 'Legal Representation', 'Appeals'],
  },
  {
    icon: Globe,
    title: 'International Tax',
    description:
      'Specialized international tax services for businesses operating across borders.',
    features: ['Cross-border Planning', 'Transfer Pricing', 'Tax Treaties'],
  },
  {
    icon: TrendingUp,
    title: 'Financial Consulting',
    description:
      'Strategic financial consulting to help businesses achieve their growth objectives.',
    features: ['Business Planning', 'Financial Analysis', 'Advisory Services'],
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer a wide range of accounting, audit, and tax consulting services tailored to
            your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'bg-yellow-400 scale-110'
                        : 'bg-yellow-400/10'
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 transition-colors duration-300 ${
                        hoveredIndex === index ? 'text-black' : 'text-yellow-400'
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link href='/blog'><button className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
            View All Services
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
