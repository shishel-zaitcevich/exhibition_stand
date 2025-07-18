import { Box } from '@mui/material';
import { useEffect } from 'react';

const BitrixScript = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.setAttribute('data-b24-form', 'inline/27/de7ee2');
      script.setAttribute('data-skip-moving', 'true');
      script.async = true;
      script.src = `https://bitrix24.transas.org/upload/crm/form/loader_27_de7ee2.js?${Date.now() / 180000 | 0}`;
      script.onerror = () => console.error('Ошибка загрузки скрипта Bitrix24');
      document.getElementsByTagName('script')[0]?.parentNode?.insertBefore(script, document.getElementsByTagName('script')[0]);

      // Перемещение формы в нужный контейнер
      const interval = setInterval(() => {
        const formContainer = document.querySelector('.b24-form');
        const targetContainer = document.getElementById('bitrix-form-container');
        if (formContainer && targetContainer) {
          targetContainer.appendChild(formContainer);
          clearInterval(interval);
        }
      }, 100);

      // Очистка интервала при размонтировании компонента
      return () => clearInterval(interval);
    }
  }, []);

  return <Box id="bitrix-form-container" />;
};

export default BitrixScript;