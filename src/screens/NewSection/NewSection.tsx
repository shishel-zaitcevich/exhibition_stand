import { Paragraph } from '@/shared/Typography/Paragraph';

import { Box } from '@mui/material';

export default function NewSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: 12,
        width: '100vw',
        height: '600px',
        marginLeft: 'calc(-50vw + 50%)',
        backgroundImage: 'url(/img/imageNew.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Enables parallax effect
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay filter
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
        <Box
          sx={{
            maxWidth: '870px',
            // marginTop: '-80px', // Закомментировано, так как неактивно
          }}
        >
          <Paragraph colorVariant="white" sx={{ fontSize: '25px' }}>
            <Paragraph colorVariant="lightBlue" component="span" sx={{ fontSize: '25px' }}>
              На нашем стенде вы увидите
            </Paragraph>{' '}
            новейшие разработки в <br /> области навигационных технологий{' '}
            <Paragraph colorVariant="lightBlue" component="span" sx={{ fontSize: '25px' }}>
              — решения, которые <br />
              задают новый стандарт в судоходстве. Мы представляем <br /> линейку готовых продуктов,
              включая
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
  );
}
