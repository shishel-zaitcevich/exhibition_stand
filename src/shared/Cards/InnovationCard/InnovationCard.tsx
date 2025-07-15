'use client';

import { AppButton } from '@/shared/Button/Button';
import { Box, Typography } from '@mui/material';

import { ReactNode } from 'react';

interface InnovationCardProps {
  variant?: 'black' | 'blue';
  logo: ReactNode;
  text: string;
}

const cardStyles = {
  base: {
    width: '530px',
    height: '350px',
    display: 'flex',
    flexDirection: 'column' as const,
    paddingTop: '20px',
    paddingRight: '40px',
    paddingLeft: '80px',
    justifyContent: 'flex-start',
    borderRadius: '26px',
  },
  variants: {
    black: {
      background:
        'linear-gradient(180deg, rgba(229, 223, 221, 1) 0%, rgba(194, 210, 228, 1) 99.52%)',
      color: '#000000',
      boxShadow: 'inset 0px 2px 7.6px 0px rgba(255, 255, 255, 0.35)',
      textMaxWidth: '275px',
    },
    blue: {
      background:
        'linear-gradient( 180deg,rgba(1, 26, 35, 1) 0%,rgba(12, 59, 80, 1) 99.5192289352417%)',
      color: '#FFFFFF',
      boxShadow: 'inset 0px 2px 7.6px 0px rgba(64, 119, 149, 0.68)',
      textMaxWidth: '280px',
    },
  },
};

export const InnovationCard = ({ variant = 'black', logo, text }: InnovationCardProps) => {
  const styles = {
    ...cardStyles.base,
    ...cardStyles.variants[variant],
  };

  return (
    <Box sx={styles}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box>{logo}</Box>
        <AppButton primary={false} arrow />
      </Box>

      <Typography
        sx={{
          maxWidth: cardStyles.variants[variant].textMaxWidth,
          fontSize: '20px',
          fontWeight: '500',
          color: cardStyles.variants[variant].color,
          marginTop: '20px',
          lineHeight: '25px',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
