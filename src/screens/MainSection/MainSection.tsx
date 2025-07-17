import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { AppButton } from '@/shared/Button/Button';
import CountdownTimer from '@/features/CountdownTimer/CountdownTimer';
import { Paragraph } from '@/shared/Typography/Paragraph';

export default function MainSection() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1440px',
        margin: '0 auto',
        marginTop: '30px',
        color: '#FFFFFF',
        // p: 4,
        gap: 2,
      }}
    >
      <Box display="flex" flexDirection="column" gap={2} alignItems="flex-start" paddingTop="60px">
        <Typography variant="h1" sx={{ maxWidth: '550px', fontWeight: '600', fontSize: '48px' }}>
          Транзас и NAVX: инновации навигации на выставке Нева-2025
        </Typography>

        <Paragraph sx={{ marginBottom: '40px', maxWidth: '515px', marginTop: '20px' }}>
          Узнайте о последних новинках в судоходстве! Посетите наш стенд и испытайте новейшие
          технологии в действии.
        </Paragraph>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={3}
          mt={1}
          width={'100%'}
        >
          <AppButton label={'Регистрация'} href={'#'} primary />
          <AppButton label={'Забронировать встречу'} href={'#'} primary={false} />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="flex-start">
        <Image
          src="/img/tanker.png"
          alt="tanker"
          width={700}
          height={450}
          style={{ objectFit: 'contain' }}
        />

        <CountdownTimer targetDate={new Date('2025-09-23T10:00:00')} />
      </Box>
    </Box>
  );
}
