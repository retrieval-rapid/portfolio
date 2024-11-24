'use client';
import Image from 'next/image';
import aboutImg from '../../public/assets/about.jpg';
import { ABOUT_TEXT } from '@/constants';
import { motion } from 'motion/react';

export function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <Image
              src={aboutImg}
              alt="about-img"
              width={200}
              height={200}
              className="rounded-2xl"
            />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
