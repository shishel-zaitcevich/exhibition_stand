import { Button, styled } from '@mui/material';
import React from 'react';
import { ArrowIcon } from '../Icons/Arrow';

type ArrowButtonProps = {
  onClick?: () => void;
  isHover: boolean;
};

const StyledArrowButton = styled(Button)<{ isHover: boolean }>(({ isHover, theme }) => ({
  height: 50,
  width: 50,
  minWidth: 50,
  padding: 0,
  borderRadius: 8,
  backgroundColor: '#ffffff',
  color: '#031457',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  position: 'relative',

  '& svg': {
    fontSize: 28,
    transform: isHover ? 'rotate(-45deg)' : 'rotate(0)',
    transition: 'transform 0.3s ease, fill 0.3s ease',
  },

  [theme.breakpoints.down('lg')]: {
    height: 40,
    width: 40,
  },
  [theme.breakpoints.down('sm')]: {
    height: 32,
    width: 32,
  },
}));

export const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, isHover }) => {
  return (
    <StyledArrowButton onClick={onClick} isHover={isHover}>
      <ArrowIcon />
    </StyledArrowButton>
  );
};
