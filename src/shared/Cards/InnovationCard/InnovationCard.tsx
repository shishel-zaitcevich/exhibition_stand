'use client';

import { Box, Typography } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowButton } from '@/shared/Button/ArrowButton';
import { MotionCard } from './MotionCard';

interface InnovationCardProps {
  variant: 'black' | 'blue';
  logo: ReactNode;
  name: string;
  href?: string;
  text: string;
  state: 'normal' | 'expanded' | 'collapsed';
  onHoverStart: () => void;
  onHoverEnd: () => void;
  backgroundImage?: string;
  stats?: { label: string; value: string }[];
}

const cardVariants = {
  normal: { width: 530, height: 350 },
  expanded: { width: 800, height: 350 },
  collapsed: { width: 530 * 0.6, height: 350 },
};

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

export function InnovationCard({
  variant,
  logo,
  name,
  text,
  state,
  onHoverStart,
  onHoverEnd,
  backgroundImage,
  stats = [],
}: InnovationCardProps) {
  const isExpanded = state === 'expanded';

  return (
    <MotionCard
      variants={cardVariants}
      animate={state}
      initial="normal"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        padding: '20px 40px 40px 40px',
        background:
          variant === 'black' && !isExpanded
            ? 'linear-gradient(180deg, rgba(229,223,221,1) 0%,rgba(194,210,228,1) 99.5%)'
            : variant === 'blue' && !isExpanded
            ? 'linear-gradient(180deg, rgba(1,26,35,1) 0%,rgba(12,59,80,1) 99.5%)'
            : `url(${backgroundImage}) center/cover no-repeat`,
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
        {isExpanded ? (
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
          fontSize: 20,
          fontWeight: 500,
          lineHeight: '25px',
          maxWidth: isExpanded ? '100%' : 280,
          color: variant === 'black' ? (!isExpanded ? '#000000' : '#FFFFFF') : '#FFFFFF',
          position: 'relative',
          zIndex: 3,
          marginTop: isExpanded ? '30px' : '60px',
        }}
      >
        {text}
      </Typography>

      {isExpanded && stats.length > 0 && (
        <motion.div
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
                    position: 'relative',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      )}
    </MotionCard>
  );
}
