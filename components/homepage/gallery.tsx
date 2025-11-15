'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Calculator, PieChart, TrendingUp, Building2, Users2 } from 'lucide-react';

const posts = [
  { slug: 'tax-documentation', title: 'Tax Documentation', description: 'Comprehensive tax filing and documentation services' },
  { slug: 'financial-planning', title: 'Financial Planning', description: 'Strategic financial planning for individuals and businesses' },
  { slug: 'financial-analysis', title: 'Financial Analysis', description: 'In-depth analysis of financial statements and reports' },
  { slug: 'business-growth', title: 'Business Growth', description: 'Advisory services to accelerate your business growth' },
  { slug: 'corporate-services', title: 'Corporate Services', description: 'Complete corporate accounting and compliance services' },
  { slug: 'client-consultation', title: 'Client Consultation', description: 'Personalized consultation for all your financial needs' },
];

const icons = [FileText, Calculator, PieChart, TrendingUp, Building2, Users2];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-medium">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Exploring the World of Taxes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A visual journey through our comprehensive accounting and tax services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((item, index) => {
            const Icon = icons[index] ?? FileText;
            return (
              <div
                key={item.slug}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-card border border-border rounded-2xl p-8 h-64 flex flex-col justify-between transition-all duration-300 group-hover:border-yellow-400/50 group-hover:scale-105">
                  <div>
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${hoveredIndex === index ? 'bg-yellow-400 scale-110' : 'bg-yellow-400/10'}`}>
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-yellow-400'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-yellow-400 transition-colors mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`/blog/${item.slug}`} className="inline-flex items-center text-yellow-400 text-sm font-medium">
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
