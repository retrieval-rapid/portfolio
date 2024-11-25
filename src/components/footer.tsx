'use client';
import { Text } from './ui/text';
import Link from 'next/link';
import { Button } from './ui/button';
import { SOCIAL_LINKS } from '@/constants';
import { motion } from 'motion/react';
import { COLLAB } from '@/constants';
import { useAnimate } from '@/hooks/useAnimate';

export function Footer() {
  const { animateFromBottom } = useAnimate();
  return (
    <div className="px-4 py-2">
      <div className="grid grid-cols-5 mb-6">
        <div className="col-span-5 md:col-span-4">
          <Text variant="h4" className="text-3xl tracking-wider leading-loose text-justify">
            {COLLAB?.split(' ')?.map((x, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5 * i,
                  delay: i / 10,
                }}
              >
                {x.match(/<br\s*\/?>/) ? <br /> : x}{' '}
              </motion.span>
            ))}
          </Text>
        </div>
        <div className="col-span-5 md:col-span-1 flex">
          <div className="self-end mx-auto">
            <Button
              variant="default"
              className="relative !bg-black text-white rounded-3xl pr-8 mt-5"
            >
              <Text variant="body-esr" className="tracking-wider">
                Drop me line
              </Text>
              <span className="animate-pulse bg-white rounded-full size-2 absolute right-2 top-1/2 -translate-y-1/2"></span>
            </Button>
          </div>
        </div>
      </div>
      <motion.div
        initial="initial"
        whileInView={'whileInView'}
        variants={animateFromBottom(0.5, 1)}
        className="flex flex-wrap justify-between items-center"
      >
        <Text variant="body-esr" className="tracking-wider text-center">
          &copy;
          <span className="px-1 text-lg bg-gradient-to-r from-slate-400 to-gray-900 bg-clip-text text-transparent">
            {new Date().getFullYear()}
          </span>
          | All Rights Reserved &reg;
        </Text>

        <div className="flex flex-wrap justify-between items-center gap-16">
          {SOCIAL_LINKS.map((link, index) => (
            <Link key={index} href={link.href}>
              <Text variant="body-esr" className="tracking-wider">
                {link.text}
              </Text>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
