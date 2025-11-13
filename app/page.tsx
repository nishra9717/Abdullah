'use client';

import { Hero } from '@/components/homepage/hero';
import { Services } from '@/components/homepage/services';
import { About } from '@/components/homepage/about';
import { Contact } from '@/components/homepage/contact';
import { Gallery } from '@/components/homepage/gallery';
import { Newsletter } from '@/components/homepage/newsletter';
import { Footer } from '@/components/homepage/footer';
import { Header } from '@/components/homepage/header';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
