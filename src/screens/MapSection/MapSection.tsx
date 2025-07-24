import { Paragraph } from '@/shared/Typography/Paragraph';
import { Title } from '@/shared/Typography/Title';
import Radar from '@/widgets/Radar/Radar';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function MapSection() {
  return (
    <Box overflow={'hidden'} id={'map'}>
      <Title>Как найти наш стенд</Title>

      <Box
        maxWidth={'1250px'}
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={'160px'}
        alignItems="center"
        justifyContent={'space-between'}
        position={'relative'}
        margin={'0 auto'}
      >
        <Box
          component={Link}
          href="/pdf/NEVA_2025_17.07.25_F_RUS.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-block',
            maxWidth: '570px',
            cursor: 'pointer',
          }}
        >
          <img
            src="/img/map.png"
            alt="Карта выставки"
            width={455}
            height={330}
            style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
          />
        </Box>

        <Radar sx={{ position: 'absolute', left: '33%', zIndex: '-1', maxWidth: '1100px' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            right: '6%',
          }}
        >
          <Paragraph colorVariant="white" sx={{ fontWeight: 600, mb: 2, fontSize: '35px' }}>
            Стенд F5 245
          </Paragraph>
          <Paragraph colorVariant="lightBlue" sx={{ textAlign: 'center', fontSize: '30px' }}>
            Выставка пройдёт <br />с 10:00 до 18:00
          </Paragraph>
          <Paragraph sx={{ textAlign: 'center', fontSize: '30px' }}>
            c 23 по 26 сентября 2025 года
          </Paragraph>
          <Paragraph colorVariant="lightBlue" sx={{ textAlign: 'center', fontSize: '30px' }}>
            в Санкт-Петербурге,
          </Paragraph>
          <Paragraph sx={{ textAlign: 'center', fontSize: '30px' }}>КВЦ Экспофорум.</Paragraph>
        </Box>
      </Box>
    </Box>
  );
}
