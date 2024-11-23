import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="overflow-x-hidden max-h-screen max-w-[1440px] text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
}
