'use client';

import { Button } from '@mui/material';

import { FC } from 'react';

interface BackButtonProps {
  href: string;
  primary?: boolean;
}

export const BackButton: FC<BackButtonProps> = ({ href }) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        height: 55,
        minWidth: 200,
        padding: '0 24px',
        borderRadius: 2,
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 300,
        backgroundColor: '#02103a',
        color: '#ffffff',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          backgroundColor: '#02103a',
        },
        '&:hover::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          animation: 'shine 1s ease-in-out',
        },
        '@keyframes shine': {
          '0%': {
            left: '-100%',
          },
          '100%': {
            left: '100%',
          },
        },
      }}
    >
      Вернуться назад
    </Button>
  );
};
