'use client'
import { LINKS } from '@/constants';
import { Logo } from './logo';
import Link from 'next/link';
import {motion} from 'motion/react';
import { useAnimate } from '@/hooks/useAnimate';

export function Navbar() {
  const { animateFromTop } = useAnimate();
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      variants={animateFromTop(0.5)}
      transition={{type: 'spring'}}
      className="flex items-center justify-between px-4 py-2 mb-10"
    >
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
    </motion.div>
  );
}
