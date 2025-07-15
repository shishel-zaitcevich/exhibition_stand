import { Box, Typography, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckBox';

export const GrowthTrackingBlock = () => {
  const items = [
    '100% точность в любое время',
    'Мониторинг статистики и роста',
    'Начните развиваться прямо сейчас',
  ];

  return (
    <Box sx={{ color: '#FFFFFF', maxWidth: 420 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Отслеживание роста
      </Typography>

      <Stack spacing={1.5}>
        {items.map((item, index) => (
          <Box key={index} display="flex" alignItems="center">
            <CheckIcon sx={{ mr: 1, color: '#FFFFFF' }} />
            <Typography>{item}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
