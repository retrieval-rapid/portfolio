import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Technologies } from '@/components/technologies';

export default function Home() {
  return (
    <div className="overflow-x-hidden w-screen h-screen text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute top-0 h-screen w-screen z-[-2]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
      </div>
    </div>
  );
}
