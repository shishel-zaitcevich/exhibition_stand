'use client';

import { BackButton } from '@/shared/BackButton/BackButton';
import { Typography, Box } from '@mui/material';

export const ThankPage = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, rgba(1,26,35,1) 0%, rgba(12,59,80,1) 70%)',
        borderRadius: 20,

        padding: {
          xs: '60px 20px',
          lg: '80px 40px',
        },
        maxWidth: 800,
        width: '80%',

        minHeight: {
          xs: '350',
          lg: '500',
        },
        margin: '0 auto',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        zIndex: 1000,

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Box>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: '#FFF',
            fontSize: {
              xs: 26,
              lg: 36,
            },
            // fontSize: 36,
            fontWeight: 700,
            marginBottom: '60px',
          }}
        >
          СПАСИБО
          <br />
          ЗА ВАШУ ЗАЯВКУ!
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="body1"
          sx={{
            color: '#FFF',
            fontSize: {
              xs: 24,
              lg: 28,
            },
            // fontSize: 28,
            marginBottom: '60px',
          }}
        >
          Наш менеджер свяжется по указанному Вами телефону в самое ближайшее время.
        </Typography>
      </Box>
      <BackButton href={'https://neva25.transas.ru/'} />
    </Box>
  );
};
