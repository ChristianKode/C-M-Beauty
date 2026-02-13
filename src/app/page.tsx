import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
