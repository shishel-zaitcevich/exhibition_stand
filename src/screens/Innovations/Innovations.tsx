import { Box } from '@mui/material';
import { UnitedCardInnovations } from '@/shared/Cards/InnovationCard/UnitedCardInnovations';
import { Title } from '@/shared/Typography/Title';
import InnovationCards from '@/widgets/InnovationCards/InnovationCards';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Innovations() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        color: '#fff',
      }}
    >
      <Box>
        <Title>35 лет инноваций для судоходства</Title>
      </Box>

      <motion.div
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={isHovered ? { opacity: 0, scale: 0.8, y: 100 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ display: 'flex', gap: 32, position: 'relative', zIndex: 1 }}
      >
        <InnovationCards />
      </motion.div>

      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={isHovered ? { y: -360, scale: 1.05, opacity: 1 } : { y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          position: 'relative',
          zIndex: 2,
          marginTop: '80px',
        }}
      >
        <UnitedCardInnovations />
      </motion.div>
    </Box>
  );
}
