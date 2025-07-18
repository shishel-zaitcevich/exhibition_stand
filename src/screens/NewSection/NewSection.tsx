import { Paragraph } from '@/shared/Typography/Paragraph';
import { Title } from '@/shared/Typography/Title';

import { Box } from '@mui/material';

export default function NewSection() {
  return (
    <Box id={'new'}>
      {/* Заголовок вне параллакс блока */}
      <Box
        sx={{
          maxWidth: '1440px',
          margin: '0 auto',
          px: 2,
          mt: 12,
        }}
      >
        <Title>Новинки 2024–2026 годов</Title>
      </Box>

      {/* Параллакс-блок */}
      <Box
        sx={{
          position: 'relative',
          marginTop: 4,
          width: '100vw',
          height: '600px',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundImage: 'url(/img/imageNew.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '1440px',
            height: '600px',
            mx: 'auto',
            px: 2,
            py: 6,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box sx={{ maxWidth: '870px' }}>
            <Paragraph colorVariant="white" sx={{ fontSize: '25px' }}>
              <Paragraph colorVariant="lightBlue" component="span" sx={{ fontSize: '25px' }}>
                На нашем стенде вы увидите
              </Paragraph>{' '}
              новейшие разработки в <br /> области навигационных технологий{' '}
              <Paragraph colorVariant="lightBlue" component="span" sx={{ fontSize: '25px' }}>
                — решения, которые <br />
                задают новый стандарт в судоходстве. Мы представляем <br /> линейку готовых
                продуктов, включая
              </Paragraph>{' '}
              навигационные <br />
              системы и серверные решения,
              <Paragraph colorVariant="lightBlue" component="span" sx={{ fontSize: '25px' }}>
                {' '}
                которые ранее были <br /> доступны только от зарубежных производителей.
              </Paragraph>
            </Paragraph>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
