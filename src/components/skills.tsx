'use client';
import { SKILLS } from '@/constants';
import { Text } from './ui/text';
import { motion } from 'motion/react';
import { useAnimate } from '@/hooks/useAnimate';

export function Skills() {
  const { animateFromTop, animateVisible } = useAnimate();
  return (
    <div className="flex flex-col px-4 py-2 mb-6 border-b border-b-neutral-300">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={animateVisible(0.5)}
        className="text-2xl font-semibold"
      >
        <Text variant="h6" className="tracking-wider">
          I can help you with ...
        </Text>
      </motion.div>
      <div className="flex justify-between flex-wrap gap-4 mb-4">
        {SKILLS.map((skill, index) => (
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={animateVisible(0.5 * index)}
            key={index}
            className="w-72 border-l-2 px-4 py-2"
          >
            <div className="flex flex-col gap-4">
              <Text variant="h4" className="tracking-wide text-gray-500/60">
                {String(index + 1).padStart(2, '0')}
              </Text>
              <div className="flex flex-col gap-2">
                <Text variant="body-lm" className="tracking-wider">
                  {skill.title}
                </Text>
                <Text variant="body-sr" className="text-justify leading-4 tracking-wider">
                  {skill.description}
                </Text>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
