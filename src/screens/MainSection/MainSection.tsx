import Image from 'next/image';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AppButton } from '@/shared/Button/Button';
import CountdownTimer from '@/features/CountdownTimer/CountdownTimer';
import { Paragraph } from '@/shared/Typography/Paragraph';

export default function MainSection() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        // flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1440px',
        margin: '0 auto',
        marginTop: '30px',
        color: '#FFFFFF',
        // p: 4,
        gap: 2,
        position: 'relative',

        [theme.breakpoints.down('lg')]: {
          padding: '0 20px',
          pb: '40px',
        },

        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
          pt: 0,
          pb: '140px',
        },
      }}
    >
      <Box display="flex" flexDirection="column" gap={2} alignItems="flex-start" paddingTop="60px">
        <Typography
          variant="h1"
          sx={{
            maxWidth: '550px',
            fontWeight: '600',
            fontSize: '48px',
            [theme.breakpoints.down('lg')]: {
              fontSize: '40px',
              maxWidth: '450px',
            },
          }}
        >
          Транзас и NAVX: инновации навигации на выставке Нева-2025
        </Typography>

        <Paragraph
          sx={{
            marginBottom: '40px',
            maxWidth: '515px',
            marginTop: '20px',
            [theme.breakpoints.down('lg')]: {
              maxWidth: '350px',
            },
            [theme.breakpoints.down('md')]: {
              maxWidth: '100%',
            },
          }}
        >
          Узнайте о последних новинках в судоходстве! Посетите наш стенд и испытайте новейшие
          технологии в действии.
        </Paragraph>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={3}
          mt={'130px'}
          width={'100%'}
          sx={{
            [theme.breakpoints.down('lg')]: {
              mt: 0,
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
            [theme.breakpoints.down('md')]: {
              mt: 0,
              flexDirection: 'row',
              alignItems: 'flex-start',
            },
            [theme.breakpoints.down('xs')]: {
              flexDirection: 'column',
            },
          }}
        >
          <AppButton
            label={'Узнать больше'}
            href={'#register'}
            primary
            sx={{
              [theme.breakpoints.down('lg')]: {
                width: '100%',
              },
            }}
          />
          <AppButton label={'Забронировать встречу'} href={'#meeting'} primary={false} />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="flex-start"
        height={'100%'}
      >
        <Image
          src="/img/tanker.png"
          alt="tanker"
          width={700}
          height={450}
          style={{
            objectFit: 'contain',
            position: 'absolute',
            top: isLg ? '-80px' : '0',
            zIndex: isLg || isMd || isSm || isXs ? -1 : 1,
            ...(isSm && { right: '-30px' }),
            ...(isMd && { right: '-70px' }),
            ...(isSm && { width: '400px' }),
            opacity: isSm ? 0.5 : 1,
          }}
        />

        <CountdownTimer targetDate={new Date('2025-09-23T10:00:00')} />
      </Box>
    </Box>
  );
}
