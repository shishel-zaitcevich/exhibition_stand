'use client';

import { FC, ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Props = {
  children: ReactNode;
  from: 'left' | 'right';
};

export const MotionProductCard: FC<Props> = ({ children, from }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: from === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
