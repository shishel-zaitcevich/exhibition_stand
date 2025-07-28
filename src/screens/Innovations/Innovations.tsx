import { Box, useMediaQuery, useTheme } from '@mui/material';
import { UnitedCardInnovations } from '@/shared/Cards/InnovationCard/UnitedCardInnovations';
import { Title } from '@/shared/Typography/Title';
import InnovationCards from '@/widgets/InnovationCards/InnovationCards';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import { InnovationCardsMobile } from '@/widgets/InnovationCards/InnovationsCardsMobile';

export default function Innovations() {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewForward, setInViewForward] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const startPosition = isMobile ? ratio >= 0.9 : ratio >= 0.6;

        // Прямое попадание на 50% — активировать
        if (startPosition) {
          setInViewForward(true);
        }

        // Прокрутка назад — деактивировать, когда 70% блока прокручено
        if (entry.boundingClientRect.top > 0 && ratio <= 0.5 + 200) {
          setInViewForward(false);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0 → 1 шагом 0.01
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        color: '#fff',
        maxHeight: { lg: '800px', sm: 'auto' },
        width: '100%',
      }}
    >
      <Box>
        <Title>35 лет инноваций для судоходства</Title>
      </Box>

      <motion.div
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={
          inViewForward ? { opacity: 0.7, scale: 1, y: -70 } : { opacity: 1, scale: 1, y: 0 }
        }
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ display: 'flex', gap: 32, position: 'relative', zIndex: 1, width: '100%' }}
      >
        <InnovationCards />
      </motion.div>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: isMobile ? 140 : 0, scale: 1 }}
        whileInView={isMobile ? {y: 0} : undefined}
        animate={
          isMobile
            ? { opacity: 1 }
            : inViewForward
            ? { opacity: 1, y: -420, scale: 1.05 }
            : { opacity: 0, y: 100, scale: 1 }
        }
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        sx={{
          position: 'relative',
          zIndex: 2,
          marginTop: {sm: '30px', lg: '80px'},
          width: {lg: 'auto', sm: '100%'}
        }}
      >
        <UnitedCardInnovations />
      </Box>
    </Box>
    // <Box
    //   ref={ref}
    //   sx={{
    //     position: 'relative',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     margin: '0 auto',
    //     color: '#fff',
    //     maxHeight: { sx: 'auto', xl: '800px' },
    //   }}
    // >
    //   <Box>
    //     <Title>35 лет инноваций для судоходства</Title>
    //   </Box>

    //   {isMobile ? (
    //     <InnovationCardsMobile />
    //   ) : (
    //     <>
    //       <motion.div
    //         initial={{ opacity: 1, scale: 1, y: 0 }}
    //         animate={
    //           inViewForward ? { opacity: 0.7, scale: 1, y: -70 } : { opacity: 1, scale: 1, y: 0 }
    //         }
    //         transition={{ duration: 0.6, ease: 'easeInOut' }}
    //         style={{ display: 'flex', gap: 32, position: 'relative', zIndex: 1 }}
    //       >
    //         <InnovationCards />
    //       </motion.div>

    //       <motion.div
    //         initial={{ opacity: 0, y: 0, scale: 1 }}
    //         animate={
    //           inViewForward
    //             ? { opacity: 1, y: -420, scale: 1.05 }
    //             : { opacity: 0, y: 100, scale: 1 }
    //         }
    //         transition={{ duration: 0.6, ease: 'easeInOut' }}
    //         style={{
    //           position: 'relative',
    //           zIndex: 2,
    //           marginTop: '80px',
    //         }}
    //       >
    //         <UnitedCardInnovations />
    //       </motion.div>
    //     </>
    //   )}
    // </Box>
  );
}
