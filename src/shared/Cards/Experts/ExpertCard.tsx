import { Box, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import Image from 'next/image';

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
        width: '565px',
        height: '260px',
        borderRadius: '20px',
        border: '1px solid #95ACF7',
        backgroundColor: 'rgba(217, 217, 217, 0)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        padding: '25px 40px',
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
          width={'206'}
          height={'211'}
          style={{
            marginTop: name === 'Никита Сиваков' || 'Евгений Корянов' ? '15px' : 0,
            width: name === 'Никита Сиваков' || 'Евгений Корянов' ? '95%' : 206,
          }}
        />
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography variant="h6" fontWeight={700} mb={1} color={'#8da7ff'}>
          {name}
        </Typography>
        <Typography color={'#FFFFFF'} fontSize={'20px'}>
          {role}
        </Typography>
      </Box>
    </Box>
  );
};
