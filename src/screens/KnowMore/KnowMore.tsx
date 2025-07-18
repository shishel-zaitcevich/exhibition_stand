import { Paragraph } from '@/shared/Typography/Paragraph';
import { Title } from '@/shared/Typography/Title';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

export default function KnowMore() {
  const formRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Создаём контейнер с нужными data-* атрибутами
    const container = document.createElement('div');
    container.setAttribute('data-b24-form', 'inline/27/de7ee2');
    container.setAttribute('data-skip-moving', 'true');

    // Вставляем его в DOM
    if (formRef.current) {
      formRef.current.innerHTML = ''; // очищаем, если перерендер
      formRef.current.appendChild(container);
    }

    // Загружаем скрипт
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');
        s.async=true;
        s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s,h);
      })(window,document,'https://bitrix24.transas.org/upload/crm/form/loader_27_de7ee2.js');
    `;
    document.body.appendChild(script);

    return () => {
      script.remove();
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
        {/* Контейнер, в который Bitrix вставит форму */}
        <div ref={formRef}></div>
      </Box>
    </Box>
  );
}
