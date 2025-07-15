import { Box } from '@mui/material';
import { FC } from 'react';

interface Props {
  x: number;
  y: number;
  degree?: number;
}

export const Flashing: FC<Props> = ({ x, y, degree }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 800,
        position: 'absolute',
        top: `${y}%`,
        left: `${x}%`,
        opacity: 0.2,
        zIndex: -1,
        transform: `rotate(${degree ?? 45}deg)`,
        background: (theme) =>
          `radial-gradient(ellipse, ${theme.palette.primary.main} 0%, rgba(138, 165, 255, 0) 60%)`,
        filter: 'blur(5px)',
      }}
    />
  );
};
