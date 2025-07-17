import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { GrowthTrackingBlock } from './GrowthTrackingBlock';

const cardStyles = {
  base: {
    width: '900px',
    height: '550px',
    display: 'flex',
    flexDirection: 'column' as const,
    paddingTop: '40px',
    paddingRight: '40px',
    paddingLeft: '80px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: '26px',
    background:
      'linear-gradient(180deg,rgba(200, 214, 229, 0.9) 0%,rgba(168, 192, 212, 0.9) 25%,rgba(122, 153, 184, 0.9) 50%,rgba(77, 107, 130, 0.9) 75%,rgba(44, 83, 100, 0.9) 100%)',
    color: '#000000',
    boxShadow: 'inset 0px 2px 7.6px 0px rgba(64, 119, 149, 0.68)',
    textMaxWidth: '280px',
    overflow: 'hidden',
  },
};

export const UnitedCardInnovations = () => {
  const styles = {
    ...cardStyles.base,
  };

  return (
    <Box sx={styles}>
      <Typography
        component="h1"
        sx={{ fontWeight: '700', fontSize: '28px', maxWidth: '834px', lineHeight: '35px' }}
      >
        TRANSAS и NAVX — это не просто сотрудничество.
        <br /> Это синергия технологий и опыта.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: '20px',
          marginBottom: '40px',
          maxWidth: '645px',
          marginTop: '20px',
          lineHeight: '30px',
        }}
      >
        Когда разработки дополняются экспертизой и инфраструктурой — рождаются комплексные решения,
        готовые к реальной работе на флоте.
      </Typography>
      <Box position="relative" display="flex">
        <Box
          position="relative"
          width={'380px'}
          height="250px"
          borderRadius="16px"
          overflow="hidden"
        >
          <Box
            sx={{
              background: `
        linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        linear-gradient(to left, rgba(0, 0, 0, 0.79), rgba(0, 0, 0, 0.79)),
        linear-gradient(180deg, rgba(41, 52, 255, 1) 99.99%, rgba(41, 52, 255, 0) 100%)
      `,
              opacity: 0.55,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              background: `rgba(217, 217, 217, 0.1)`,
              filter: 'blur(10px)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              padding: '20px',
              color: 'white',
            }}
          >
            <GrowthTrackingBlock />
          </Box>
        </Box>
        <Image
          src="/img/graph.png"
          alt="tanker"
          width={600}
          height={350}
          style={{ objectFit: 'contain', position: 'relative', bottom: '85px', right: '100px' }}
        />
      </Box>
    </Box>
  );
};
