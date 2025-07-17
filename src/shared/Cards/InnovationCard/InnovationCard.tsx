'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowButton } from '@/shared/Button/ArrowButton';

interface InnovationCardProps {
  variant: 'black' | 'blue';
  logo: ReactNode;
  text: string;
  state: 'normal' | 'expanded' | 'collapsed';
  onHoverStart: () => void;
  onHoverEnd: () => void;
  backgroundImage?: string;
  stats?: { label: string; value: string }[];
}

export function InnovationCard({
  variant,
  logo,
  text,
  state,
  onHoverStart,
  onHoverEnd,
  backgroundImage,
  stats = [],
}: InnovationCardProps) {
  const isExpanded = state === 'expanded';

  const variants = {
    normal: { width: 530, height: 350 },
    expanded: { width: 800, height: 350 },
    collapsed: { width: 530 * 0.6, height: 350, paddingLeft: '20px' },
  };

  return (
    <motion.div
      variants={variants}
      animate={state}
      initial="normal"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{
        overflow: 'hidden',
        borderRadius: 26,
        background:
          variant === 'black' && !isExpanded
            ? 'linear-gradient(180deg, rgba(229,223,221,1) 0%,rgba(194,210,228,1) 99.5%)'
            : variant === 'blue' && !isExpanded
            ? 'linear-gradient(180deg, rgba(1,26,35,1) 0%,rgba(12,59,80,1) 99.5%)'
            : `url(${backgroundImage}) center/cover no-repeat`,
        color: variant === 'black' ? '#000' : '#fff',
        boxShadow:
          variant === 'black'
            ? 'inset 0px 2px 7.6px rgba(255,255,255,0.35)'
            : 'inset 0px 2px 7.6px rgba(64,119,149,0.68)',
        padding: '40px 40px 20px 80px',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {logo}
        <ArrowButton isHover={isExpanded} />
      </Box>

      <Typography
        sx={{
          mt: 3,
          fontSize: 20,
          fontWeight: 500,
          lineHeight: '25px',
          maxWidth: isExpanded ? '100%' : 280,
        }}
      >
        {text}
      </Typography>

      {isExpanded && stats.length > 0 && (
        <Box display="flex" flexWrap="wrap" gap={3} mt={4}>
          {stats.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.7)',
                padding: '12px 16px',
                borderRadius: '20px',
                width: '160px',
                height: '100px',
                color: '#000',
              }}
            >
              <Typography fontWeight="bold">{item.value}</Typography>
              <Typography fontSize={'12px'}>{item.label}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </motion.div>
  );
}
