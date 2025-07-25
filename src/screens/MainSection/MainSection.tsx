import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AppButton } from '@/shared/Button/Button';
import CountdownTimer from '@/features/CountdownTimer/CountdownTimer';
import { Paragraph } from '@/shared/Typography/Paragraph';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function MainSection() {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.down('xl'));
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  const imageRef = useRef(null);
  const inView = useInView(imageRef, { once: true, margin: '0px 0px -100px 0px' });

  console.log('isXl', isXl);
  console.log('isLg', isLg);
  console.log('isMd', isMd);
  console.log('isSm', isSm);
  console.log('isXs', isXs);
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

        ...(isMd && { justifyContent: 'center', pt: 0, pb: '140px' }),
        ...(isLg && { padding: '0 20px', pb: '80px' }),
        // [theme.breakpoints.down('lg')]: {
        //   padding: '0 20px',
        //   pb: '40px',
        // },

        // [theme.breakpoints.down('md')]: {
        //   justifyContent: 'center',
        //   pt: 0,
        //   pb: '140px',
        // },
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
            ...(isSm && { right: '-30px', width: '400px' }),
            ...(isMd && { right: '-70px' }),
            // ...(isSm && { width: '400px', flexDirection: 'column', alignItems: 'flex-start' }),
            ...(isLg && { marginTop: 0 }),
            // [theme.breakpoints.down('lg')]: {
            //   mt: 0,
            //   flexDirection: 'column',
            //   alignItems: 'flex-start',
            // },
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
          <div
            style={{
              // boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              filter: 'brightness(1.2)',
            }}
          >
            <AppButton label="Забронировать встречу" href="#meeting" primary={false} />
          </div>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="flex-start"
        height={'100%'}
        sx={{
          // ...(isSm && { right: '-30px', width: '400px' }),
          ...(isMd && { flexDirection: 'column' }),
          // ...(isSm && { width: '400px' }),
          // ...(isLg && { width: '650px', right: '20px', top: '-20px' }),
        }}
      >
        <motion.img
          ref={imageRef}
          src="/img/tanker.png"
          alt="tanker"
          width={700}
          height={450}
          style={{
            objectFit: 'contain',
            position: 'absolute',
            top: isXl ? '-80px' : '0',
            zIndex: theme.breakpoints.between('xs', 'xl') ? -1 : 1, // -1 для 0–1199px, 1 для ≥1200px
            ...(isXs || isSm || isMd ? { width: '100%', height: '100%' } : {}), // 60% для 0–899px
            ...(isSm && { right: '-30px' }),
            ...(isMd && { right: '-70px' }),
            ...(isLg && { width: '650px', right: '20px', top: '-20px' }),
            opacity: isSm ? 0.5 : 1,
          }}
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        {/* <Image
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
        />  */}

        <CountdownTimer targetDate={new Date('2025-09-23T10:00:00')} />
      </Box>
    </Box>
  );
}
