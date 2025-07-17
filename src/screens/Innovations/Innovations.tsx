import { Box } from '@mui/material';
import { UnitedCardInnovations } from '@/shared/Cards/InnovationCard/UnitedCardInnovations';
import { Title } from '@/shared/Typography/Title';
import InnovationCards from '@/widgets/InnovationCards/InnovationCards';

export default function Innovations() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',

        color: '#FFFFFF',
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" margin={' 0 auto'}>
        <Title>35 лет инноваций для судоходства</Title>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={'80px'}
          mt={1}
          marginBottom={'80px'}
        >
          <InnovationCards />
        </Box>
        <UnitedCardInnovations />
      </Box>
    </Box>
  );
}
