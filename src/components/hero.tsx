'use client';

import { HERO_CONTENT } from '@/constants';
import profilePic from '../../public/assets/kevinRushProfile.jpg';
import Image from 'next/image';
import { motion } from 'motion/react';

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay, ease: 'easeInOutOut' } },
});

export function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap items-center justify-center ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={container(1)}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl capitalize"
            >
              rejan bajracharya
            </motion.h1>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={container(1)}
              className="bg-gradient-to-r from-purple-500 via-slate-500 to-pink-500 text-4xl tracking-tight pb-6 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={container(1)}
              className="max-w-lg px-6 py-4 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="w-full lg:w-1/2 lg:p-8">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOutOut' }}
                className="flex justify-center"
              >
                <Image src={profilePic} alt="profile-pic" />
              </motion.div>
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
