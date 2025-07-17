'use client';

import Image from 'next/image';
import { IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import { AnchorLink } from '@/shared/AnchorLink/AnchorLink';
import CloseIcon from '@mui/icons-material/Close';

type BurgerMenuProps = {
  links: { href: string; label: string }[];
};

export default function BurgerMenu({ links }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);

  const toggle = (value: boolean) => () => setOpen(value);

  return (
    <>
      <IconButton onClick={toggle(true)} size="large" sx={{ color: 'common.white' }}>
        <MenuIcon fontSize="inherit" />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggle(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#031457', // цвет фона
            width: '80vw', // ширина 80% экрана
            p: 3, // внутренние отступы
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={toggle(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={'20px'}
          sx={{ paddingTop: '40px', position: ' relative' }}
        >
          {links.map((link, i) => (
            <AnchorLink key={i} href={link.href}>
              {link.label}
            </AnchorLink>
          ))}

          <Image
            src="/img/sys.png"
            alt="system"
            width={280}
            height={400}
            style={{ objectFit: 'contain', position: 'absolute', zIndex: -1, top: '150px' }}
          />
        </Box>
      </Drawer>
    </>
  );
}
