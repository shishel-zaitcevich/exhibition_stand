import { styled } from '@mui/material';
import { motion } from 'framer-motion';

export const MotionCard = styled(motion.div)<{ isExpanded: boolean }>(({ isExpanded }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 26,
  width: '100%',
  height: '100%',
  ...(isExpanded && {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    },
  }),
}));
