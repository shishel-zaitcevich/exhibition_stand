import Image from 'next/image';

import { InnovationCard } from '@/shared/Cards/InnovationCard/InnovationCard';
import { Box, Typography } from '@mui/material';
import { UnitedCardInnovations } from '@/shared/Cards/InnovationCard/UnitedCardInnovations';

export default function Innovations() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        marginTop: '85px',
        color: '#FFFFFF',
        // p: 4,
        gap: '80px',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={'100px'}
        alignItems="center"
        paddingTop="60px"
        margin={' 0 auto'}
      >
        <Typography variant="h4" component="h1" fontWeight={600}>
          35 лет инноваций для судоходства
        </Typography>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={'80px'}
          mt={1}
          // width={'100%'}
        >
          <InnovationCard
            variant="black"
            logo={
              <Image
                src="/img/logo/transas.png"
                alt="tanker"
                width={150}
                height={50}
                style={{ objectFit: 'contain', marginLeft: '-20px' }}
              />
            }
            text="Многолетний опыт создания программно-аппаратных комплексов, интеграции, поддержки и управления жизненным циклом продуктов"
          />
          <InnovationCard
            variant="blue"
            logo={
              <Image
                src="/img/logo/navx.png"
                alt="tanker"
                width={150}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            }
            text="Разрабатывает высокоточные цифровые системы для судовождения и управления флотом."
          />
        </Box>
      </Box>
      <UnitedCardInnovations />
    </Box>
  );
}
