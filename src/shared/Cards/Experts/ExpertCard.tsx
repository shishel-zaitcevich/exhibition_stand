import { Box, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import Image from 'next/image';

interface ExpertCardProps {
  name: string;
  role: string;
  photoSrc: string;
  sx?: SxProps;
}

export const ExpertCard = ({
  name,
  role,
  photoSrc,

  sx,
}: ExpertCardProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        // height: 280,
        borderRadius: '20px',
        border: '1px solid #95ACF7',
        backgroundColor: 'rgba(217, 217, 217, 0)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        padding: '30px',
        boxSizing: 'border-box',
        overflow: 'hidden', // Ensure the shine effect stays within bounds
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
        }}
      >
        <Image
          src={photoSrc}
          alt={name}
          // width={206}
          width={240}
          height={211}
          // height={211}
          style={{
            width:
              name === 'Никита Сиваков' || name === 'Евгений Корянов'
                ? '200px'
                : name === 'Алексей Зенин'
                ? '270px'
                : '260px',
            height: `auto`,
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
            left: name === 'Никита Сиваков' ? '0' : name === 'Евгений Корянов' ? '0' : '-30px',
          }}
        />
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography variant="h6" fontWeight={700} fontSize={'30px'} mb={1} color={'#8da7ff'}>
          {name}
        </Typography>
        <Typography color={'#FFFFFF'} fontSize={'26px'} sx={{ marginTop: '20px', fontWeight: 300 }}>
          {role}
        </Typography>
      </Box>
    </Box>
  );
};
