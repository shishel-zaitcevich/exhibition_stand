'use client';

import BitrixScript from '@/shared/BitrixScript/BitrixScript';
import { Paragraph } from '@/shared/Typography/Paragraph';
import { Title } from '@/shared/Typography/Title';
import { Grid } from '@mui/material';

export default function KnowMore() {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        mx: 'auto',
        gap: 4,
        margin: '100px 0',
        marginBottom: 0,
      }}
      id={'register'}
    >
      <Grid size={{ xs: 12, lg: 6 }}>
        <Title
          sx={{
            textAlign: {
              xs: 'center', // центрируем для xs-md (0-899px)
              lg: 'left', // оставляем исходное для lg+ (900px+)
            },
            fontSize: { xs: '24px', md: '30px', lg: '42px' },
            color: '#FFFFFF',
            padding: 0,
            fontWeight: 600,
            margin: '20px 0',
          }}
        >
          Хотите узнать больше <br />
          или записаться на <br />
          встречу на выставке?
        </Title>
        <Paragraph
          sx={{
            maxWidth: '500px',
            textAlign: {
              xs: 'center', // центрируем для xs-md (0-899px)
              lg: 'left', // оставляем исходное для lg+ (900px+)
            },
            mx: {
              xs: 'auto', // центрируем блок для xs-md (0-899px)
              lg: 0, // оставляем исходное для lg+ (900px+)
            },
          }}
        >
          Оставьте свои контакты — мы свяжемся с вами, расскажем о наших решениях <br /> и
          договоримся о встрече на выставке.
        </Paragraph>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <BitrixScript />
      </Grid>
    </Grid>
  );
}
