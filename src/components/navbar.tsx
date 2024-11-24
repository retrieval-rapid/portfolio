import { LINKS } from '@/constants';
import { Logo } from './logo';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 mb-10">
      <div className="flex items-center w-16">
        <Logo size="default" />
      </div>
      <nav className="hidden md:block">
        {LINKS.map((link, index) => (
          <Link key={index} href={link.href} className="px-4 py-2 tracking-wide text-sm">
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}
