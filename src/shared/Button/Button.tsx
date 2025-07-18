'use client';

import { Button, styled } from '@mui/material';

import Link from 'next/link';
import React from 'react';

type AppButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  sx?: object;
};

const StyledButton = styled(Button)<{ primary: boolean }>(({ primary, theme }) => ({
  height: 55,
  minWidth: 100,
  padding: '0 24px',
  borderRadius: 12,
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 500,
  backgroundColor: primary ? '#2934FF' : '#031457',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  position: 'relative',

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

  [theme.breakpoints.down('lg')]: {
    height: 40,
  },

  [theme.breakpoints.down('sm')]: {
    height: 32,
    borderRadius: 8,
    minWidth: 80,
    fontSize: 14,
  },
}));

export const AppButton: React.FC<AppButtonProps> = ({ label, href, onClick, primary = true }) => {
  const button = (
    <StyledButton primary={primary} onClick={onClick}>
      {label}
    </StyledButton>
  );

  // Если href начинается с #, то это якорная ссылка
  if (href && href.startsWith('#')) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {button}
      </a>
    );
  }

  // Если href существует и не является якорной ссылкой, используем Link
  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  // Если href нет, возвращаем просто кнопку
  return button;
};
