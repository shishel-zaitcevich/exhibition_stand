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
  const [isAnimated, setIsAnimated] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const inView = useInView(ref, {
    once: false,
    margin: '0px 0px -50px 0px',
    amount: 0.1,
  });

  // Отслеживаем направление скролла
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Логика анимации при входе в зону видимости
  useEffect(() => {
    if (inView && scrollDirection === 'down') {
      // Запускаем анимацию при прокрутке вниз
      setIsAnimated(false);
      // Небольшая задержка для сброса состояния
      setTimeout(() => {
        setIsAnimated(true);
        setAnimationKey((prev) => prev + 1);
      }, 10);
    }
    // При прокрутке вверх ничего не делаем - элемент остается анимированным
  }, [inView, scrollDirection]);

  const transitionConfig = useMemo(
    () => ({
      duration,
      delay,
      ease: 'easeOut' as const,
    }),
    [duration, delay],
  );

  const animateConfig = useMemo(
    () => (isAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }),
    [isAnimated],
  );

  return (
    <motion.div
      ref={ref}
      key={animationKey} // Принудительный перерендер для повторной анимации
      initial={{ opacity: 0, y: 50 }}
      animate={animateConfig}
      transition={transitionConfig}
      style={{ willChange: isAnimated ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
