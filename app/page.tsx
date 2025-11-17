'use client';

import { Hero } from '@/components/homepage/hero';
import { Services } from '@/components/homepage/services';
import { About } from '@/components/homepage/about';
import { Contact } from '@/components/homepage/contact';
import { Newsletter } from '@/components/homepage/newsletter';


export default function Home() {
  return (
  <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <About />
      <Newsletter />
    </main>
  );
}
