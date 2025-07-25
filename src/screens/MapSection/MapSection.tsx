import { Paragraph } from '@/shared/Typography/Paragraph';
import { Title } from '@/shared/Typography/Title';
import Radar from '@/widgets/Radar/Radar';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function MapSection() {
  // const theme = useTheme();

  return (
    <Box overflow={'hidden'} id="map" sx={{ py: { xs: 6, md: 8, lg: 10 } }}>
      <Title>Как найти наш стенд</Title>

      <Box
        maxWidth={'1250px'}
        display="flex"
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
        gap={{ xs: 6, sm: 10, md: '120px', lg: '160px' }}
        alignItems="center"
        justifyContent="space-between"
        position="relative"
        margin="0 auto"
        px={{ xs: 2, sm: 3, lg: 0 }}
      >
        {/* Карта */}
        <Box
          component={Link}
          href="/pdf/NEVA_2025_17.07.25_F_RUS.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-block',
            maxWidth: {
              xs: '100%',
              sm: '500px',
              lg: '40%',
            },
            cursor: 'pointer',
            zIndex: 2,
          }}
        >
          <img
            src="/img/map.png"
            alt="Карта выставки"
            style={{
              borderRadius: '12px',
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>

        {/* Радар (фон) */}
        <Radar
          sx={{
            position: 'absolute',
            left: {
              xs: 0,
              sm: '10%',
              md: '20%',
              lg: '33%',
            },
            zIndex: -1,
            maxWidth: '1100px',
            opacity: {
              xs: 0.3,
              sm: 0.5,
              md: 0.7,
              lg: 1,
            },
          }}
        />

        {/* Информация о стенде */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            minWidth: { xs: '50%', lg: '40%' },
            position: {
              xs: 'relative',
              lg: 'absolute',
            },
            right: {
              xs: 'auto',
              lg: '6%',
            },
            top: {
              xs: 'auto',
              lg: 0,
            },
            mt: {
              xs: 0,
              lg: 8,
            },
            zIndex: 3,
            px: {
              xs: 2,
              sm: 4,
              lg: 0,
            },
          }}
        >
          <Paragraph
            colorVariant="white"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: {
                xs: '24px',
                sm: '28px',
                md: '32px',
                lg: '35px', // ← сохраняем десктопный размер
              },
            }}
          >
            Стенд F5 245
          </Paragraph>

          <Paragraph
            colorVariant="lightBlue"
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '20px',
                sm: '24px',
                md: '26px',
                lg: '30px',
              },
              mb: 1,
            }}
          >
            Выставка пройдёт <br />с 10:00 до 18:00
          </Paragraph>

          <Paragraph
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '20px',
                sm: '24px',
                md: '26px',
                lg: '30px',
              },
              mb: 1,
            }}
          >
            c 23 по 26 сентября 2025 года
          </Paragraph>

          <Paragraph
            colorVariant="lightBlue"
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '20px',
                sm: '24px',
                md: '26px',
                lg: '30px',
              },
              mb: 1,
            }}
          >
            в Санкт-Петербурге,
          </Paragraph>

          <Paragraph
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '20px',
                sm: '24px',
                md: '26px',
                lg: '30px',
              },
            }}
          >
            КВЦ Экспофорум.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
}
