export const useAnimate = () => {
  const animateFromLeft = (delay: number, duration: number = 0.5) => ({
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay, duration } },
    whileInView: { x: 0, opacity: 1, transition: { delay, duration } },
  });

  const animateFromRight = (delay: number, duration: number = 0.5) => ({
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay, duration } },
    whileInView: { x: 0, opacity: 1, transition: { delay, duration } },
  });

  const animateFromTop = (delay: number, duration: number = 0.5) => ({
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay, duration } },
    whileInView: { y: 0, opacity: 1, transition: { delay, duration } },
  });

  const animateFromBottom = (delay: number, duration: number = 0.5) => ({
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay, duration } },
    whileInView: { y: 0, opacity: 1, transition: { delay, duration, type: 'spring' } },
  });

  const animateVisible = (delay: number, duration: number = 0.5) => ({
    initial: { opacity: 0, transition: { delay, duration } },
    animate: { opacity: 1, transition: { delay, duration } },
    whileInView: { opacity: 1, transition: { delay, duration } },
  });

  return { animateFromLeft, animateFromRight, animateFromTop, animateFromBottom, animateVisible };
};
