import { Paragraph } from '@/shared/Typography/Paragraph';
import { Title } from '@/shared/Typography/Title';
import { Box } from '@mui/material';
import { useEffect } from 'react';

export default function KnowMore() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://b24-yq6kji.bitrix24.site/bitrix/js/crm/form_loader.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '90%',
        mx: 'auto',
        gap: 4,
        marginBottom: '80px',
      }}
      id={'register'}
    >
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Title
          sx={{
            textAlign: 'left',
            fontSize: '42px',
            color: '#FFFFFF',
            padding: 0,
            fontWeight: 600,
            margin: '140px 0 80px 0',
          }}
        >
          Хотите узнать больше <br />
          или записаться на <br />
          встречу на выставке?
        </Title>
        <Paragraph sx={{ maxWidth: '500px' }}>
          Оставьте свои контакты — мы свяжемся с вами, расскажем о наших решениях <br /> и
          договоримся о встрече на выставке.
        </Paragraph>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <div
          className="bitrix24-form"
          data-b24-form="inline/13/xwqcu9"
          data-skip-moving="true"
        ></div>
      </Box>
    </Box>
  );
}
