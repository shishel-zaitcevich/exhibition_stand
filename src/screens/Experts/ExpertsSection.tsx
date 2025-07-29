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
        maxWidth="1250px"
        sx={{
          justifyContent: { xs: 'center', lg: 'space-between' },
        }}
      >
        <Grid container size={{ lg: 12 }} sx={{ width: '100%', justifyContent: 'center' }}>
          <Grid
            size={{ lg: 6 }}
            sx={{
              margin: { xs: 0, lg: '0 auto' },
              maxWidth: '609px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ExpertCard
              name={'Алексей Зенин'}
              role={'Директор, Бортовые системы и сервисы данных'}
              photoSrc={'/img/experts/zenin.png'}
              style={{ margin: '0 auto' }}
            />
          </Grid>
        </Grid>

        {experts.map((expert, index) => (
          <Grid size={{ lg: 6 }} key={index}>
            <ExpertCard name={expert.name} role={expert.role} photoSrc={expert.photoSrc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
