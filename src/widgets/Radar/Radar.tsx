import { Box, SxProps, Theme } from '@mui/material';
import RadarCanvas from './RadarCanvas';

interface RadarProps {
  sx?: SxProps<Theme>;
}

export default function Radar({ sx }: RadarProps) {
  return (
    <Box
      sx={{
        width: '90vw',
        maxWidth: '1200px',
        aspectRatio: '16 / 9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mx: 'auto',
        my: 4,
        borderRadius: 2,
        overflow: 'hidden',
        ...sx,
      }}
    >
      <RadarCanvas />
    </Box>
  );
}
