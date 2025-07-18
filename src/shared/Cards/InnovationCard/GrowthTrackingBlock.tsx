import { Box, Typography, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckBox';

export const GrowthTrackingBlock = () => {
  const items = [
    'Сквозной цикл: от разработки до внедрения',
    'Точная интеграция всех компонентов',
    'Быстрый запуск решений под задачи клиента',
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Две компетенции. Один результат
      </Typography>

      <Stack spacing={1} marginTop={'30px'} marginLeft={'20px'} maxWidth={'330px'}>
        {items.map((item, index) => (
          <Box key={index} display="flex" alignItems="center">
            <CheckIcon sx={{ mr: 1, color: '#FFFFFF' }} />
            <Typography fontSize="15px">{item}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
