import { Paragraph } from '@/shared/Typography/Paragraph';
import { Title } from '@/shared/Typography/Title';
import { Box } from '@mui/material';

export default function NewSection() {
  return (
    <>
      <Title>Новинки 2024-2026 годов</Title>
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: '800px',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundImage: 'url(/img/imageNew.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // фильтр: черный с прозрачностью
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '1440px',
            height: '600px',
            // mx: 'auto',
            // px: 2,
            // py: 6,
            paddingRight: '20px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'absolute',
            right: '20px',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: '870px',
              // marginTop: '-80px',
            }}
          >
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
    </>
  );
}
