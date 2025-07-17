'use client';

import { Button, styled } from '@mui/material';

import Link from 'next/link';
import React from 'react';
import { ArrowIcon } from '../Icons/Arrow';
import theme from '@/app/theme';

type AppButtonProps = {
  label?: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  arrow?: boolean;
  sx?: object;
};

const BaseButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'primary' && prop !== 'arrow',
})<AppButtonProps>(({ primary, arrow }) => ({
  height: arrow ? 55 : 55,
  width: arrow ? 55 : 'auto',
  minWidth: arrow ? 55 : 100,
  padding: arrow ? 0 : '0 24px',
  borderRadius: arrow ? '8px' : 12,
  textTransform: 'none',
  fontSize: arrow ? 0 : 16,
  fontWeight: 500,
  backgroundColor: arrow ? '#ffffff' : primary ? '#2934FF' : '#031457',
  color: arrow ? '#031457' : '#ffffff',
  transition: 'all 0.3s ease',
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: {
    height: 40,
  },

  [theme.breakpoints.down('sm')]: {
    height: 40,
    fontSize: arrow ? 0 : 14,
  },

  [theme.breakpoints.down('sm')]: {
    height: 32,
    borderRadius: '8px',
    minWidth: arrow ? 40 : 80,
    fontSize: arrow ? 0 : 14,
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
  '&:hover': {
    // backgroundColor: arrow ? '#031457' : primary ? '#031457' : '#2934FF',
    backgroundColor: arrow ? '#031457' : primary,
    stroke: '#ffffff',
    '& svg': {
      transform: arrow ? 'rotate(-45deg)' : undefined,
      stroke: '#ffffff',

      '& path': {
        fill: '#ffffff',
      },
    },
  },
  '& svg': {
    transition: 'transform 0.3s ease, color 0.3s ease',
    fontSize: 28,
  },
}));

export const AppButton: React.FC<AppButtonProps> = ({
  label,
  href,
  onClick,
  primary = true,
  arrow = false,
}) => {
  const content = arrow ? <ArrowIcon /> : label;

  const button = (
    <BaseButton primary={primary} arrow={arrow} onClick={onClick}>
      {content}
    </BaseButton>
  );

  return href ? <Link href={href}>{button}</Link> : button;
};
