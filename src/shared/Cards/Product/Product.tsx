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
        padding: 2,
        flex: 1,
        opacity: 0.8,
        transition: 'all 0.2s linear',
        height: open ? 300 : 100,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': {
          background: (theme) => theme.palette.secondary.light,
        },
        '&::before': {
          // Gray wave at the top
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '20px',
          background: `linear-gradient(
            to right,
            transparent 0%,
            rgba(188, 186, 186, 0.2) 50%,
            transparent 100%
          )`,
          borderRadius: '50% 50% 0 0',
          transform: 'translateY(-50%)',
          zIndex: 1,
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
            <Image src={icon} alt="icon" width={34} height={34}/>
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
      {open && (
        <Typography variant="body1" sx={{ zIndex: 2 }}>
          {description}
        </Typography>
      )}
    </Box>
  );
};
