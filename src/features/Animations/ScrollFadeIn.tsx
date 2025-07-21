import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function ScrollFadeIn({ children, delay = 0.1, duration = 0.6 }: ScrollFadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
