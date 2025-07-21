import { ExpertCard } from '@/shared/Cards/Experts/ExpertCard';
import { Box, Grid } from '@mui/material';
import { experts } from './config/experts';
import { Title } from '@/shared/Typography/Title';

export const ExpertsSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      id={'experts'}
      justifyContent={'center'}
    >
      <Title>Наши эксперты</Title>
      <Grid
        container
        spacing={4}
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1250px"
      >
        <Box sx={{ width: '100%' }}>
          <ExpertCard
            name={'Евгений Корянов'}
            role={'CTO/System Architect'}
            photoSrc={'/img/experts/koryanov.png'}
            sx={{ margin: '0 auto' }}
          />
        </Box>

        {experts.map((expert, index) => (
          <Grid key={index}>
            <ExpertCard name={expert.name} role={expert.role} photoSrc={expert.photoSrc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
