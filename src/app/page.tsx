import { Experiences } from '@/components/experiences';
import { FAQS } from '@/components/faqs';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <main className="overflow-x-hidden max-w-[1440px] mx-auto selection:bg-teal-200">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="container mx-auto">
          <Navbar />
          <Hero />
          <Skills />
          <Experiences />
          <FAQS />
          <Footer />
        </div>
      </div>
    </main>
  );
}
