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

        [theme.breakpoints.down('sm')]: {
          height: 32,
          borderRadius: 8,
          minWidth: 80,
          fontSize: 14,
        },
      }}
    >
      {isMd ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          gap="15px"
          sx={{
            [theme.breakpoints.down('sm')]: {
              marginTop: '40px',
            },
          }}
        >
          <AppButton label="Узнать больше" primary href={'register'} />
          <BurgerMenu links={navLinks} />
        </Box>
      ) : (
        <>
          <Box
            display="flex"
            alignItems="center"
            gap="15px"
            marginRight={'172px'}
            marginTop={'20px'}
            sx={{
              [theme.breakpoints.down('lg')]: {
                marginTop: '13px',
              },
            }}
          >
            {navLinks.map((link, index) => (
              <Box key={index}>
                <AnchorLink href={link.href}>{link.label}</AnchorLink>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              position: 'fixed',
              top: 20,
              zIndex: 1000,
            }}
          >
            <AppButton label="Узнать больше" href="#register" primary />
          </Box>
        </>
      )}
    </Box>
  );
}
