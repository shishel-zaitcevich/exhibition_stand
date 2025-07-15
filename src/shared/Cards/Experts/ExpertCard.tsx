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
        height: '240px',
        borderRadius: '20px',
        border: '1px solid #95ACF7',
        backgroundColor: 'rgba(217, 217, 217, 0)',
        position: 'relative',
        // filter: 'blur(0.65px)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      <Box
        sx={{
          minWidth: '206px',
          height: '211px',
          position: 'relative',
          borderRadius: '15px',
          overflow: 'hidden',
          transition: 'background 0.3s ease',
          background: `linear-gradient(
            0deg,
            rgba(58, 58, 58, 1) 0%,
            rgba(199, 199, 199, 1) 100%
          )`,
          '&:hover': {
            background: 'linear-gradient(180deg, #2934FF 0%, #031457 40%)',
          },
          mr: 4,
        }}
      >
        <Image src={photoSrc} alt={name} width={'206'} height={'211'} />
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
