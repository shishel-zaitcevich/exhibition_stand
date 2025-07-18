import { Product } from '@/shared/Cards/Product/Product';
import { Typography, Box } from '@mui/material';
import { useInView, motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { productsList } from './consts';

export const ProductList: React.FC = () => {
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentOpeningIndex, setCurrentOpeningIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  // Запуск последовательного раскрытия карточек после завершения анимации появления
  useEffect(() => {
    if (animationComplete && isInView && currentOpeningIndex < productsList.length) {
      const timeout = setTimeout(() => {
        setOpenCards((prev) => new Set([...prev, productsList[currentOpeningIndex].title]));
        setCurrentOpeningIndex((prev) => prev + 1);
      }, 500); // Задержка между раскрытиями карточек (0.3 секунды)

      return () => clearTimeout(timeout);
    }
  }, [animationComplete, isInView, currentOpeningIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const, // или просто убрать ease совсем
      },
    },
  };

  return (
    <Box sx={{ maxWidth: '1400px' }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: (theme) => theme.palette.text.primary,
        }}
      >
        Наши продукты
      </Typography>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
            },
            gap: 3,
            width: '100%',
          }}
        >
          {productsList.map((product, index) => (
            <motion.div
              key={product.title}
              variants={itemVariants}
              onAnimationComplete={
                index === productsList.length - 6 ? handleAnimationComplete : undefined
              }
            >
              <Product
                open={openCards.has(product.title)}
                icon={product.icon}
                title={product.title}
                description={product.description}
              />
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};
