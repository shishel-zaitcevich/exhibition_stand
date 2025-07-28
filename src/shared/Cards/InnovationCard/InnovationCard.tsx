'use client';

import { Box, Typography } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';
import { ArrowButton } from '@/shared/Button/ArrowButton';
import { MotionCard } from './MotionCard';

// Интерфейс для пропсов с учетом ref
interface InnovationCardProps {
  variant: 'black' | 'blue';
  logo: ReactNode;
  name: string;
  href?: string;
  text: string;
  state: 'normal' | 'expanded' | 'collapsed' | 'mobile';
  onHoverStart: () => void;
  onHoverEnd: () => void;
  backgroundImage?: string;
  stats?: { label: string; value: string }[];
}

// Варианты анимации для карты
const cardVariants = {
  normal: { width: 530, height: 350 },
  expanded: { width: 800, height: 350 },
  collapsed: { width: 530 * 0.6, height: 350 },
  mobile: { width: '100%', height: 400 },
};

// Варианты анимации для контейнера статистики
const statsContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Варианты анимации для элементов статистики
const statItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

export const InnovationCard = forwardRef<HTMLDivElement, InnovationCardProps>(
  (
    {
      variant,
      logo,
      name,
      text,
      state,
      onHoverStart,
      onHoverEnd,
      backgroundImage,
      stats = [],
    },
    ref 
  ) => {
    const isExpanded = state === 'expanded';
    const isMobile = state === 'mobile';
    const isBlack = variant === 'black' && !isMobile && !isExpanded;

    return (
      <MotionCard
        ref={ref}
        variants={cardVariants}
        animate={state}
        initial={isMobile ? {left: '-100%', opacity: 0} : "normal"}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        whileInView={isMobile ? {opacity: 1, left: 0} : undefined}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          padding: { md: '20px 40px 40px 40px', xs: '24px' },
          position: 'relative',
          width: '100%',
          '&::before': {
            content: "''",
            position: 'absolute',
            opacity: 0.6,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transition: 'background 0.5s linear',
            background:
              variant === 'black' && !isExpanded && !isMobile
                ? 'linear-gradient(180deg, rgba(229,223,221,1) 0%,rgba(194,210,228,1) 99.5%)'
                : variant === 'blue' && !isExpanded && !isMobile
                ? 'linear-gradient(180deg, rgba(1,26,35,1) 0%,rgba(12,59,80,1) 99.5%)'
                : `url(${backgroundImage}) center/cover no-repeat`,
          },
        }}
        isExpanded={isExpanded}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 3,
          }}
        >
          {isExpanded || isMobile ? (
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 700,
                maxWidth: '100%',
                position: 'relative',
                zIndex: 3,
              }}
            >
              {name}
            </Typography>
          ) : (
            logo
          )}
          <ArrowButton isHover={isExpanded} />
        </Box>

        <Typography
          sx={{
            mt: 3,
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '25px',
            maxWidth: isExpanded ? '100%' : 280,
            color: isBlack ? 'black' : '#FFFFFF',
            position: 'relative',
            zIndex: 3,
            marginTop: { md: isExpanded ? '30px' : '60px', xs: '20px' },
            textShadow: isBlack ? 'none' : `0 0 2px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0, 0, 0, 0.6), 0 0 2px rgba(0, 0, 0, 0.4)`,
          }}
        >
          {text}
        </Typography>

        {isExpanded && stats.length > 0 && (
          <Box
            component={motion.div}
            variants={statsContainerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginTop: '65px',
              position: 'relative',
              zIndex: 3,
            }}
          >
            {stats.map((item, idx) => (
              <motion.div key={idx} variants={statItemVariants}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    padding: '12px 16px',
                    borderRadius: '20px',
                    width: '160px',
                    height: '100px',
                    color: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: variant === 'black' ? 'flex-start' : 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      lineHeight: '15px',
                      textAlign: variant === 'black' ? 'flex-start' : 'center',
                      fontWeight: variant === 'black' ? '500' : '550',
                      position: 'relative',
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        )}
        {isMobile && stats.length > 0 && (
          <Box
            component={motion.div}
            variants={statsContainerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 1,
              marginTop: '40px',
              position: 'relative',
              zIndex: 3,
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: 16,
            }}
          >
            {stats.map((item, idx) => (
              <Box
                variants={statItemVariants}
                key={idx}
                component={motion.div}
                sx={{
                  padding: 1,
                  width: '100%',
                  color: '#000',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  borderRight: idx < (stats.length - 1) ? '2px solid gray' : 'none'
                }}
              >
                <Typography sx={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>
                  {item.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    lineHeight: '15px',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </MotionCard>
    );
  }
);

InnovationCard.displayName = 'InnovationCard';