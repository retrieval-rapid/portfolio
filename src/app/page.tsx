import Footer from './(components)/footer';
import Hero from './(components)/hero';
import Star from './(components)/icons/star';
import Navbar from './(components)/navbar';

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative">
      <div className="flex flex-col items-center justify-center mt-8">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
