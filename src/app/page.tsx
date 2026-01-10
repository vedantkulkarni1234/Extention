import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import Showcase from '@/components/sections/Showcase';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Showcase />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
