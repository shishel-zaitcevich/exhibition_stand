import { ExpertCard } from '@/shared/Cards/Experts/ExpertCard';
import { Box, Stack } from '@mui/material';
import { experts } from './config/experts';

export const ExpertsSection = () => {
  return (
    <Box>
      <Stack spacing={4}>
        {experts.map((expert, index) => (
          <ExpertCard
            key={index}
            name={expert.name}
            role={expert.role}
            photoSrc={expert.photoSrc}
          />
        ))}
      </Stack>
    </Box>
  );
};
