import { Paragraph } from '@/shared/Typography/Paragraph';
import { Title } from '@/shared/Typography/Title';
import Radar from '@/widgets/Radar/Radar';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function MapSection() {
  return (
    <Box>
      <Title>Как найти наш стенд</Title>

      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={'160px'}
        alignItems="center"
        justifyContent={'center'}
        position={'relative'}
      >
        <Box
          component={Link}
          href="/pdf/NEVA_2025_15.07.25_F_RUS_.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-block',
            maxWidth: '570px',
            cursor: 'pointer',
          }}
        >
          <Image
            src="/img/map.png"
            alt="Карта выставки"
            width={455}
            height={330}
            style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
          />
        </Box>

        {/* <Radar sx={{ position: 'absolute', left: '45%', zIndex: '-1', maxWidth: '1100px' }} /> */}

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
