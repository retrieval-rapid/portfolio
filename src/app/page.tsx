import { Experiences } from '@/components/experiences';
import { FAQS } from '@/components/faqs';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <main className="w-full mx-auto selection:bg-teal-200">
      <div className='fixed inset-0 h-screen w-screen -z-10'>
        <div className="absolute inset-0 -z-10 size-full max-h-screen max-w-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" />
        </div>
      </div>
      <div className="w-full md:w-3/5 mx-auto">
        <Navbar />
        <Hero />
        <Skills />
        <Experiences />
        <FAQS />
        <Footer />
      </div>
    </main>
  );
}
