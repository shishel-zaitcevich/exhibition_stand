import theme from '@/app/theme';
import { Box, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface ExpertCardProps {
  name: string;
  role: string;
  photoSrc: string;
  sx?: SxProps;
}

export const ExpertCard = ({ name, role, photoSrc, sx }: ExpertCardProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '609px',
        borderRadius: '20px',
        border: '1px solid #95ACF7',
        backgroundColor: 'rgba(217, 217, 217, 0)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        padding: '30px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        '&:hover::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          animation: 'shine 1s ease-in-out',
        },
        '@keyframes shine': {
          '0%': {
            left: '-100%',
          },
          '100%': {
            left: '100%',
          },
        },
        // Адаптивные стили для экранов до 899px

        [theme.breakpoints.down('md')]: {
          maxWidth: '400px',
          height: '180px',
          padding: '15px',
          borderRadius: '12px',
          alignItems: 'center',
        },
        // Адаптивные стили для экранов 900–1199px
        [theme.breakpoints.between('lg', 'xl')]: {
          maxWidth: '500px',
          height: '220px',
          padding: '20px',
          borderRadius: '15px',
          alignItems: 'center',
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          minWidth: '206px',
          height: '210px',
          position: 'relative',
          borderRadius: '15px',
          overflow: 'hidden',
          transition: 'background 0.3s ease',
          background: `linear-gradient(
            0deg,
            rgba(58, 58, 58, 1) 0%,
            rgba(199, 199, 199, 1) 100%
          )`,
          mr: 4,
          // Адаптивные стили для экранов до 899px
          [theme.breakpoints.down('md')]: {
            width: '140px',
            height: '140px',
            borderRadius: '10px',
            mr: 2,
          },
          // Адаптивные стили для экранов 900–1199px
          [theme.breakpoints.between('lg', 'xl')]: {
            minWidth: '170px',
            height: '170px',
            borderRadius: '12px',
            mr: 3,
          },
        }}
      >
        <img
          src={photoSrc}
          alt={name}
          width={240}
          height={211}
          style={{
            width:
              name === 'Никита Сиваков' || name === 'Евгений Корянов'
                ? '200px'
                : name === 'Алексей Зенин'
                ? '270px'
                : '260px',
            height: 'auto',
            objectFit: 'contain',
            position: 'relative',
            top:
              name === 'Никита Сиваков'
                ? '10px'
                : name === 'Евгений Корянов'
                ? '0'
                : name === 'Алексей Зенин'
                ? '-20px'
                : '-10px',
            left: name === 'Никита Сиваков' || name === 'Евгений Корянов' ? '0' : '-30px',
            // Адаптивные стили для экранов до 899px
            [theme.breakpoints.down('md')]: {
              width: '140px',
              top: 0,
              left: 0,
            },
            // Адаптивные стили для экранов 900–1199px
            [theme.breakpoints.between('lg', 'xl')]: {
              width: '170px',
              top: 0,
              left: 0,
            },
          }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{
          // Адаптивные стили для экранов до 899px
          [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            flex: 1,
          },
          // Адаптивные стили для экранов 900–1199px
          [theme.breakpoints.between('lg', 'xl')]: {
            justifyContent: 'center',
            flex: 1,
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          fontSize={'30px'}
          mb={1}
          color={'#8da7ff'}
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '18px',
              mb: 0.5,
            },
            [theme.breakpoints.between('lg', 'xl')]: {
              fontSize: '24px',
              mb: 0.75,
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          color={'#FFFFFF'}
          fontSize={'26px'}
          sx={{
            marginTop: '20px',
            fontWeight: 300,
            [theme.breakpoints.down('md')]: {
              fontSize: '14px',
              marginTop: '8px',
            },
            [theme.breakpoints.between('lg', 'xl')]: {
              fontSize: '18px',
              marginTop: '12px',
            },
          }}
        >
          {role}
        </Typography>
      </Box>
    </Box>
  );
};
