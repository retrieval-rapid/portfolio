import Link from 'next/link';
import Logo from './logo';
import { LINK } from '@/constants/link';
import Star from './icons/star';

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center gap-2 border-2 border-black px-4 rounded-sm shadow-md">
      <div className="px-2">
        <Logo />
      </div>

      {LINK.map((x, index) => (
        <Link
          key={index}
          href={x.href}
          className="border-l-2 border-black flex items-center self-stretch px-4"
        >
          {x.text}
        </Link>
      ))}
      
        {/* Star Posiitons */}
        <Star className="absolute -top-10 -right-16 rotate-180" />
        <Star className="absolute top-10 -left-16" />
    </div>
  );
};

export default Navbar;
