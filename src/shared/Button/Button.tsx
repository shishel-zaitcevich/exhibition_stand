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
  // '&:hover': {
  //   backgroundColor: primary ? '#031457' : '#2934FF',
  // },

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

  return href ? <Link href={href}>{button}</Link> : button;
};
