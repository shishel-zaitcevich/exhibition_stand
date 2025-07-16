'use client';

import { Link as MuiLink, styled } from '@mui/material';
import React from 'react';

type AnchorLinkProps = {
  href: string;
  children: React.ReactNode;
};

const StyledAnchor = styled(MuiLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.white,
  fontFamily: `'Roboto Slab', sans-serif`,
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

export const AnchorLink: React.FC<AnchorLinkProps> = ({ href, children }) => {
  return <StyledAnchor href={href}>{children}</StyledAnchor>;
};
