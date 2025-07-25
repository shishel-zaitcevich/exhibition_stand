'use client';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import './globals.css';
import theme from './theme';
import { Backstage } from '@/screens/Backstage';
import Script from 'next/script';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <Head>
          <title>Транзас и Navx</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />

          <meta name="theme-color" content="#010101ff" />

          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/103482891"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
        </Head>
        <body>
          {children}
          <Backstage />
          <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            (function(m,e,t,r,i,k,a){
              m[i] = m[i] || function(){ (m[i].a = m[i].a || []).push(arguments) };
              m[i].l = 1 * new Date();
              for (var j = 0; j < document.scripts.length; j++) { 
                if (document.scripts[j].src === r) { return; } 
              }
              k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(103482891, "init", {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `,
            }}
          />
        </body>
      </html>
    </ThemeProvider>
  );
}
