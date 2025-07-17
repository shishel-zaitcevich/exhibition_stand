'use client';

import { Button } from '@mui/material';
import React from 'react';

import { ArrowIcon } from '../Icons/Arrow';

type Props = {
  href?: string;
  onClick?: () => void;
  active?: boolean;
};

export const ArrowButton: React.FC<Props> = ({
  onClick,
  active,
}) => {

  return (
    <Button
      sx={{
        height: 55,
        width: 55,
        minWidth: 55,
        padding: 0,
        borderRadius: '8px',
        backgroundColor: (theme) =>  active ? theme.palette.primary.dark : '#ffffff',
        color: active ? '#ffffff' : '#031457',
        transition: 'all 0.3s ease',
        '& svg': {
            transform: active ? 'rotate(-45deg)' : undefined,
            stroke: active ? '#ffffff' : '#031457',

            '& path': {
              fill: active ? '#ffffff' : '#031457',
            },
          },
      }}
      onClick={onClick}
    >
      <ArrowIcon />
    </Button>
  );
};
