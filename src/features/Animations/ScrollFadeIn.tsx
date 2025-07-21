import { motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

// export default function ScrollFadeIn({ children, delay = 0.1, duration = 0.6 }: ScrollFadeInProps) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: false, margin: '0px 0px -100px 0px' });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 1, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration, delay, ease: 'easeOut' }}
//     >
//       {children}
//     </motion.div>
//   );
// }
export default function ScrollFadeIn({ children, delay = 0.1, duration = 0.6 }: ScrollFadeInProps) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const inView = useInView(ref, {
    once: false,
    margin: '0px 0px -50px 0px',
    amount: 0.1,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const transitionConfig = useMemo(
    () => ({
      duration,
      delay,
      ease: 'easeOut' as const,
    }),
    [duration, delay],
  );

  const animateConfig = useMemo(() => {
    if (hasAnimated) {
      return { opacity: 1, y: 0 };
    }
    return inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 50 };
  }, [inView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animateConfig}
      transition={transitionConfig}
      style={{ willChange: inView ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
