'use client';
import { DiPostgresql, DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'motion/react';
import { useCallback } from 'react';

export function Technologies() {
  const iconVariants = useCallback(
    (duration: number) => ({
      initial: { y: -10 },
      animate: {
        y: [10, -10],
        transition: {
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse' as 'reverse',
        },
      },
    }),
    []
  );
  return (
    <div className="border-b border-neutral-800 pb-8">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 text-center text-4xl"
      >
        Tech Stacks
      </motion.h2>
      <div className="my-20 text-center text-4xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(1.5)}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandNextjs className="text-7xl text-white" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4.5)}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiRedis className="text-7xl text-red-700" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5.5)}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(1.5)}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiPostgresql className="text-7xl text-sky-700" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
