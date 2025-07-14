'use client';

import { Button, styled } from '@mui/material';

import Link from 'next/link';
import React from 'react';
import { ArrowIcon } from '../Icons/Arrow';

type AppButtonProps = {
  label?: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  arrow?: boolean;
};

const BaseButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'primary' && prop !== 'arrow',
})<AppButtonProps>(({ primary, arrow }) => ({
  height: arrow ? 55 : 42,
  width: arrow ? 55 : 'auto',
  minWidth: arrow ? 55 : 100,
  padding: arrow ? 0 : '0 24px',
  borderRadius: arrow ? '50%' : 12,
  textTransform: 'none',
  fontSize: arrow ? 0 : 16,
  fontWeight: 500,
  backgroundColor: arrow ? '#ffffff' : primary ? '#2934FF' : '#031457',
  color: arrow ? '#031457' : '#ffffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: arrow ? '#031457' : primary ? '#031457' : '#2934FF',
    color: '#ffffff',
    '& svg': {
      transform: arrow ? 'rotate(-45deg)' : undefined,
      color: '#ffffff',
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
