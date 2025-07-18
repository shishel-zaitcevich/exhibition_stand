import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';
import { ArrowButton } from '@/shared/ArrowButton/ArrowButton';

interface Props {
  open?: boolean;
  icon: string;
  title: string;
  description: string;
}

export const Product: FC<Props> = ({ open, icon, title, description }) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        borderRadius: 2,
        background: (theme) => theme.palette.background.paper,
        border: '2px solid #ddd',
        padding: 2,
        flex: 1,
        opacity: 1,
        transition: 'height 0.5s ease-in-out 0.2s, opacity 0.5s ease-in-out',
        height: open ? 300 : 100,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': {
          top: -8,
        },
      }}
    >
      <Stack
        justifyContent="space-between"
        gap={2}
        direction="row"
        sx={{ marginBottom: 2, alignItems: 'center' }}
      >
        <Stack justifyContent="start" gap={2} direction="row" sx={{ alignItems: 'center' }}>
          <Box
            sx={{
              minWidth: 40,
              minHeight: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              zIndex: 2,
              borderRadius: 2,
              padding: '4px',
              boxSizing: 'content-box',
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <Image src={icon} alt="icon" width={34} height={34} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
        </Stack>
        <ArrowButton active={hover} />
      </Stack>

      <Typography
        variant="body1"
        sx={{ zIndex: 2, opacity: open ? 1 : 0, transition: 'opacity 0.5s linear 0.3s' }}
      >
        {description}
      </Typography>
    </Box>
  );
};
