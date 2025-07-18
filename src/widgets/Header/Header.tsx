import { AnchorLink } from '@/shared/AnchorLink/AnchorLink';
import { AppButton } from '@/shared/Button/Button';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { navLinks } from './config/links';
import BurgerMenu from '../BurgerMenu';

export default function Header() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        py: 2,
      }}
    >
      {isMd ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={'100%'}
          gap="15px"
        >
          <AppButton label="Регистрация" primary />
          <BurgerMenu links={navLinks} />
        </Box>
      ) : (
        <Box display="flex" alignItems="center" gap="15px">
          {navLinks.map((link, index) => (
            <AnchorLink key={index} href={link.href}>
              {link.label}
            </AnchorLink>
          ))}
          <AppButton label="Регистрация" primary />
        </Box>
      )}
    </Box>
  );
}
