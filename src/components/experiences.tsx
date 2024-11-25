'use client';
import classNames from 'classnames';
import { Text } from './ui/text';
import { EXPERIENCE } from '@/constants';
import { useAnimate } from '@/hooks/useAnimate';
import { motion } from 'motion/react';

export function Experiences() {
  const { animateFromTop, animateFromLeft, animateFromRight, animateVisible } = useAnimate();
  return (
    <div className="flex flex-col gap-4 px-4 my-4 mt-8 mb-6 border-b border-b-neutral-300">
      <motion.div initial="initial" whileInView="whileInView" variants={animateVisible(1.5)}>
        <Text variant="h6" className="tracking-wider">
          Experiences
        </Text>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={animateVisible(0.5)}
        className="flex flex-col items-center justify-start"
      >
        {EXPERIENCE.map((exp, index) => {
          const [intro, ...restExp] = exp.details.split('-');
          return (
            <motion.div
              key={index}
              initial="initial"
              whileInView="whileInView"
              variants={animateVisible(0.5)}
              className={classNames(
                { 'border-l border-l-neutral-300': exp.active },
                'relative px-4 '
              )}
            >
              {exp.active ? (
                <div className="absolute inset-0 -left-2 h-4 w-4 rounded-full bg-green-300 after:absolute after:inset-0 after:h-4 after:w-4 after:animate-ping after:rounded-full after:bg-green-300"></div>
              ) : (
                <div className="absolute inset-0 -left-2 h-4 w-4 rounded-full bg-neutral-300"></div>
              )}

              <div className="flex flex-col gap-2 mb-6">
                <div>
                  <Text variant="body-sr" className="tracking-wider">
                    {exp.office} | {exp.year}
                  </Text>
                  <Text variant="body-sr" className="tracking-wider font-semibold">
                    {exp.role}
                  </Text>
                </div>

                <Text variant="body-sr" className="tracking-wider leading-relaxed">
                  {intro}
                </Text>
                <ul className="px-2">
                  {restExp.map((exp, index) => (
                    <motion.li
                      key={index}
                      className='flex gap-2 before:content-["✓"] before:text-green-400'
                      initial="initial"
                      whileInView={'whileInView'}
                      variants={animateVisible(0.5 * index)}
                    >
                      <Text variant="body-sr" className="tracking-wider leading-relaxed">
                        {exp}
                      </Text>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
