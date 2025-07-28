import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AppButton } from '@/shared/Button/Button';
import CountdownTimer from '@/features/CountdownTimer/CountdownTimer';
import { Paragraph } from '@/shared/Typography/Paragraph';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function MainSection() {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.down('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('md'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  const imageRef = useRef(null);
  const inView = useInView(imageRef, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1440px',
        margin: '0 auto',
        marginTop: '30px',
        color: '#FFFFFF',
        gap: 2,
        position: 'relative',
        flexDirection: { xs: 'column', sm: 'column', lg: 'row' },
        pb: {
          xs: '80px',
          sm: '100px',
          md: '90px',
          lg: '0px',
          xl: 0,
        },
        ...(isMd && { justifyContent: 'center', pt: 0 }),
        ...(isLg && { padding: '0 20px', pb: '80px' }),
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems="flex-start"
        sx={{ paddingTop: { xs: '20px', sm: '20px', md: '60px' } }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: '600',
            fontSize: '48px',
            [theme.breakpoints.down('lg')]: {
              fontSize: '40px',
            },
            maxWidth: { xs: '100%', lg: '550px' },
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
          gap={3}
          sx={{
            mt: {
              xs: '30px',
              sm: '0px',
              xl: '130px',
            },
            gap: {
              xs: 1,
              sm: 1.5,
              md: 2,
              xl: 3,
            },
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
            },
            justifyContent: {
              xs: 'center',
              md: 'flex-start',
            },
            alignItems: {
              xs: 'flex-start',
              xl: 'center',
            },

            right: {
              xs: '-30px',
              md: '-70px',
            },
            width: '100%',

            marginTop: {
              md: '30px',
              lg: '0px',
            },
          }}
        >
          <AppButton
            label={'Узнать больше'}
            href={'#register'}
            primary
            sx={{
              [theme.breakpoints.down('md')]: {
                width: '100%',
              },
            }}
          />
          <Box
            sx={{
              borderRadius: '12px',
              filter: 'brightness(1.2)',
              width: { xs: '100%', sm: '100%', md: 'auto' },
            }}
          >
            <AppButton
              label="Забронировать встречу"
              href="#meeting"
              primary={false}
              sx={{
                [theme.breakpoints.down('md')]: {
                  width: '100%',
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        height={'100%'}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          ...(isMd && { flexDirection: 'column' }),
        }}
      >
        <Box
          component={motion.img}
          ref={imageRef}
          src="/img/tanker.png"
          alt="tanker"
          height={450}
          sx={{
            objectFit: 'contain',
            position: 'absolute',
            top: isXl ? '-80px' : '0',

            zIndex: theme.breakpoints.between('xs', 'xl') ? -1 : 1,
            ...(isSm && { right: '30px' }),
            ...(isMd && { width: '400px', right: '2px' }),
            ...(isLg && { width: '650px', right: '20px', top: '-20px' }),
            ...(isXs || isSm || isMd ? { width: '100%', height: '100%' } : {}),
            opacity: isSm ? 0.5 : 1,
          }}
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <CountdownTimer targetDate={new Date('2025-09-23T10:00:00')} />
      </Box>
    </Box>
  );
}
