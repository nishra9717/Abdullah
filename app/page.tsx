'use client';

import { Hero } from '@/components/homepage/hero';
import { Services } from '@/components/homepage/services';
import { About } from '@/components/homepage/about';
import { Contact } from '@/components/homepage/contact';
import { Newsletter } from '@/components/homepage/newsletter';
import { Footer } from '@/components/homepage/footer';
import { Header } from '@/components/homepage/header';

export default function Home() {
  return (
  <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}
