import Image from 'next/image'
import { Features } from '@/components/features';
import { Footer } from '@/components/footer';
import { Navbar } from "@/components/navbar.jsx";
import { Hero } from "@/components/hero.jsx";
import { walkThrough } from '@/components/walkthrough.jsx';
export default function Home() {
  return (
    <main>
      <>
        <Navbar />
        <Hero />
        <Features />
        <walkThrough />
        <Footer />
      </>
    </main>
  );
}
