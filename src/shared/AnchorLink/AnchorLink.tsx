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
  padding: '8px 12px',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(217, 217, 217, 0.2)',
    borderRadius: '16px',

    // width: '120%',
    // height: '120%',
  },
}));

export const AnchorLink: React.FC<AnchorLinkProps> = ({ href, children }) => {
  return <StyledAnchor href={href}>{children}</StyledAnchor>;
};
