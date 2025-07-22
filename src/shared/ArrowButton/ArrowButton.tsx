'use client';

import { Button } from '@mui/material';
import React from 'react';

import { ArrowIcon } from '../Icons/Arrow';

type Props = {
  href?: string;
  onClick?: () => void;
  active?: boolean;
};

export const ArrowButton: React.FC<Props> = ({ onClick, active }) => {
  return (
    <Button
      sx={{
        height: 55,
        width: 55,
        minWidth: 55,
        padding: 0,
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        color: '#031457',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '& svg': {
          transform: active ? 'rotate(-45deg)' : undefined,
          transition: 'all 0.3s ease',
          stroke: '#031457',

          '& path': {
            fill: '#031457',
          },
        },
      }}
      onClick={onClick}
    >
      <ArrowIcon />
    </Button>
  );
};
