'use client';

import PageContainer from '@/shared/PageContainer/PageContainer';

import MainScreen from '@/screens/MainScreen/MainScreen';
import CompassPreloader from '@/shared/CompassPreloader/CompassPreloader';
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const isMobile = useMediaQuery('(max-width:1250px)');

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!mounted)
    return (
      <CompassPreloader
        text1={'Поиск пути к контенту'}
        text2={'Определяем направление к лучшему'}
      />
    );

  if (isMobile) {
    return (
      <CompassPreloader
        text1={'В настоящий момент мобильная версия находится в разработке.'}
        text2={'Приносим свои извинения.'}
      />
    );
  }
  return (
    <PageContainer>
      <MainScreen />
    </PageContainer>
  );
}
