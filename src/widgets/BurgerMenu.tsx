'use client';

import { IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import { AnchorLink } from '@/shared/AnchorLink/AnchorLink';
import CloseIcon from '@mui/icons-material/Close';
import { AppButton } from '@/shared/Button/Button';
import theme from '@/app/theme';

type BurgerMenuProps = {
  links: { href: string; label: string }[];
};

export default function BurgerMenu({ links }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);

  const toggle = (value: boolean) => () => setOpen(value);

  return (
    <>
      <IconButton
        onClick={toggle(true)}
        size="large"
        sx={{
          color: 'common.white',
          position: 'fixed',
          right: '20px',
          mixBlendMode: 'difference',
          zIndex: 100,
        }}
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggle(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#031457',
            width: '100vw',
            p: 3,
            // [theme.breakpoints.down('md')]: {
            //   overflow: 'hidden',
            //   width: '90vw',
            // },
            // [theme.breakpoints.down('sm')]: {
            //   width: '100vw',
            // },
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end" position={'relative'}>
          <IconButton onClick={toggle(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={'20px'}
          sx={{
            paddingTop: '40px',
            position: ' relative',
            [theme.breakpoints.down('md')]: {
              marginBottom: '50px',
              gap: '15px',
            },
          }}
        >
          {links.map((link, i) => (
            <Box key={i} onClick={toggle(false)}>
              <AnchorLink href={link.href}>{link.label}</AnchorLink>
            </Box>
          ))}
        </Box>
        {/* <img
          src="/img/sys.png"
          alt="system"
          width={450}
          height={400}
          style={{
            objectFit: 'contain',
            position: 'absolute',
            zIndex: -1,
            top: '150px',
            right: '-40px',
          }}
        /> */}
        <AppButton
          label="Регистрация"
          href={'#register'}
          primary
          sx={{
            marginTop: '50px',
          }}
          onClick={toggle(false)}
        />
      </Drawer>
    </>
  );
}
