import { ExpertCard } from '@/shared/Cards/Experts/ExpertCard';
import { Box, Grid } from '@mui/material';
import { experts } from './config/experts';
import { Title } from '@/shared/Typography/Title';

export const ExpertsSection = () => {
  return (
    <Box>
      <Title>Наши эксперты</Title>
      <Grid
        container
        spacing={4}
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {experts.map((expert, index) => (
          <Grid key={index}>
            <ExpertCard name={expert.name} role={expert.role} photoSrc={expert.photoSrc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
