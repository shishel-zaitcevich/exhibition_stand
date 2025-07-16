import { AnchorLink } from '@/shared/AnchorLink/AnchorLink';
import { AppButton } from '@/shared/Button/Button';
import { Box } from '@mui/material';
import React from 'react';
import { navLinks } from './config/links';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '75px',
        px: 4,
        py: 2,
      }}
    >
      <Box display="flex" gap={4}>
        {navLinks.map((link, index) => (
          <AnchorLink key={index} href={link.href}>
            {link.label}
          </AnchorLink>
        ))}
      </Box>

      <AppButton label={'Регистрация'} href={'#'} primary />
    </Box>
  );
}
