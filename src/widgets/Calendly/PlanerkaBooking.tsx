'use client';

import { useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { Title } from '@/shared/Typography/Title';
import { Paragraph } from '@/shared/Typography/Paragraph';

export default function PlanerkaBooking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://planerka.app/meet/assets/external/embed.js?v=0.1';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        mx: 'auto',
        maxWidth: '1100px',
        background: 'transparent',
        borderRadius: '24px',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <Title>Забронируйте встречу</Title>

      <Paragraph
        sx={{
          maxWidth: '800px',
          textAlign: 'center',
          margin: '0 auto',
          marginBottom: '60px',
          marginTop: '-20px',
        }}
      >
        Можете забронировать переговорную комнату для ваших <br />
        личных бизнес-задач и решить актуальные вопросы прямо <br /> на локации.
      </Paragraph>

      <Box
        className="app-planerka-embed"
        data-planerka-embed="default"
        data-planerka-url="https://planerka.app/meet"
        data-planerka-user="dlyavsyakogo-dimdvk"
        data-planerka-event="vstrecha-na-60-minut"
        sx={{
          mt: 3,
          height: '730px',
          borderRadius: '24px',
          overflow: 'clip',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        }}
      />
    </Paper>
  );
}
