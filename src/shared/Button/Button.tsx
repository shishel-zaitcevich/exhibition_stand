'use client';

import { Button, styled } from '@mui/material';

import Link from 'next/link';
import React from 'react';

type AppButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  sx?: object;
};

const StyledButton = styled(Button)<{ primary: boolean }>(({ primary, theme }) => ({
  height: 55,
  minWidth: 100,
  padding: '0 24px',
  borderRadius: 12,
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 300,
  backgroundColor: primary ? '#2934FF' : '#031457',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  position: 'relative',

  '&:hover::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    animation: 'shine 1s ease-in-out',
  },

  '@keyframes shine': {
    '0%': {
      left: '-100%',
    },
    '100%': {
      left: '100%',
    },
  },

  // Адаптивные стили для разных размеров экранов
  [theme.breakpoints.down('xl')]: {
    height: 52,
    fontSize: 15,
    padding: '0 22px',
  },

  [theme.breakpoints.down('lg')]: {
    height: 48,
    fontSize: 15,
    padding: '0 20px',
    minWidth: 90,
  },

  [theme.breakpoints.down('md')]: {
    height: 44,
    fontSize: 14,
    padding: '0 18px',
    minWidth: 85,
    borderRadius: 10,
  },

  [theme.breakpoints.down('sm')]: {
    height: 38,
    borderRadius: 8,
    minWidth: 80,
    fontSize: 14,
    lineHeight: '14px', // Изменено с 10px на 14px для 0–599px
    padding: '10px 16px',
  },

  [theme.breakpoints.down('xs')]: {
    height: 36,
    fontSize: 13,
    padding: '0 14px',
    minWidth: 75,
    borderRadius: 6,
  },
}));

export const AppButton: React.FC<AppButtonProps> = ({
  label,
  href,
  onClick,
  primary = true,
  sx,
}) => {
  const button = (
    <StyledButton primary={primary} onClick={onClick} sx={sx}>
      {label}
    </StyledButton>
  );

  // Если href начинается с #, то это якорная ссылка
  if (href && href.startsWith('#')) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {button}
      </a>
    );
  }

  // Если href существует и не является якорной ссылкой, используем Link
  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  // Если href нет, возвращаем просто кнопку
  return button;
};

// type AppButtonProps = {
//   label: string;
//   href?: string;
//   onClick?: () => void;
//   primary?: boolean;
//   sx?: object;
// };

// const StyledButton = styled(Button)<{ primary: boolean }>(({ primary, theme }) => ({
//   height: 55,
//   minWidth: 100,
//   padding: '0 24px',
//   borderRadius: 12,
//   textTransform: 'none',
//   fontSize: 16,
//   fontWeight: 300,
//   backgroundColor: primary ? '#2934FF' : '#031457',
//   color: '#ffffff',
//   transition: 'all 0.3s ease',
//   overflow: 'hidden',
//   position: 'relative',

//   '&:hover::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: '-100%',
//     width: '100%',
//     height: '100%',
//     background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
//     animation: 'shine 1s ease-in-out',
//   },

//   '@keyframes shine': {
//     '0%': {
//       left: '-100%',
//     },
//     '100%': {
//       left: '100%',
//     },
//   },

//   [theme.breakpoints.down('lg')]: {
//     height: 40,
//   },

//   [theme.breakpoints.down('sm')]: {
//     height: 38,
//     borderRadius: 8,
//     minWidth: 80,
//     fontSize: 14,
//     lineHeight: '14px',
//   },
// }));

// export const AppButton: React.FC<AppButtonProps> = ({ label, href, onClick, primary = true }) => {
//   const button = (
//     <StyledButton primary={primary} onClick={onClick}>
//       {label}
//     </StyledButton>
//   );

//   // Если href начинается с #, то это якорная ссылка
//   if (href && href.startsWith('#')) {
//     return (
//       <a href={href} style={{ textDecoration: 'none' }}>
//         {button}
//       </a>
//     );
//   }

//   // Если href существует и не является якорной ссылкой, используем Link
//   if (href) {
//     return <Link href={href}>{button}</Link>;
//   }

//   // Если href нет, возвращаем просто кнопку
//   return button;
// };
