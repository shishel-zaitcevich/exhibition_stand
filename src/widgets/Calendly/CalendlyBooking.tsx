'use client';

import { InlineWidget } from 'react-calendly';
import { Paper, Box, useMediaQuery, useTheme } from '@mui/material';

export default function CalendlyBooking() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const widgetHeight = isMobile ? 750 : 850;
  const widgetMinWidth = isMobile ? '0' : '1440px';

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: '1920px',
        height: '100%',
        mx: 'auto',
        mt: 5,
        backgroundColor: 'transparent',
        background: 'red',
      }}
    >
      {/* <Box
        sx={{
          mt: 3,
          width: '100%',
          height: isMobile ? '1100px' : '650px',
          minWidth: isMobile ? '0' : '850px',
          backgroundColor: 'blue',
          background: 'blue',
        }}
      >
        <InlineWidget
          url="https://calendly.com/dlyavsyakogo41/30min"
          styles={{ height: '100%', width: '100%' }}
          pageSettings={{
            hideEventTypeDetails: isMobile,
            hideLandingPageDetails: isMobile,
            primaryColor: '0057ff',
            textColor: '4d5055',
          }}
        />
      </Box> */}
      <Box
        sx={{
          mt: 5,
          width: '100%',
          maxWidth: '1110px',
          height: '750px',
          mx: 'auto',
          borderRadius: 4,
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden',
          backgroundColor: 'transparent', // фон вокруг iframe
        }}
      >
        <iframe
          src="https://calendly.com/dlyavsyakogo41/30min?background_color=ffffff&primary_color=0057ff&text_color=4d5055&embed_type=Inline&embed_domain=1"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{
            border: 'none',
          }}
          title="Calendly Scheduling Page"
        />
      </Box>
    </Paper>
  );
}
