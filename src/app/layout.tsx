'use client';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import './globals.css';
import theme from './theme';
import { Backstage } from '@/screens/Backstage';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body>
          <Backstage />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
