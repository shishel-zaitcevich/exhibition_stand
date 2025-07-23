import ImageSlider from '@/features/Slider/Slider';
import PlanerkaBooking from '@/widgets/Calendly/PlanerkaBooking';
import Footer from '@/widgets/Footer/Footer';
import Header from '@/widgets/Header/Header';
import { ExpertsSection } from '../Experts/ExpertsSection';
import Innovations from '../Innovations/Innovations';
import KnowMore from '../KnowMore/KnowMore';
import MainSection from '../MainSection/MainSection';
import MapSection from '../MapSection/MapSection';
import NewSection from '../NewSection/NewSection';
import { ProductsScreen } from '../Products/ProductsScreen';
import ScrollFadeIn from '@/features/Animations/ScrollFadeIn';
import { useEffect, useState } from 'react';
import CompassPreloader from '@/shared/CompassPreloader/CompassPreloader';

import { useMediaQuery } from '@mui/material';

export default function MainScreen() {
  const [mounted, setMounted] = useState(false);

  const isMobile = useMediaQuery('(max-width:1250px)');

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0); // Срабатывает, когда страница загружена на клиенте
  }, []);

  if (!mounted) return <CompassPreloader />;

  if (isMobile) {
    return <CompassPreloader />;
  }

  return (
    <>
      <Header />
      <MainSection />
      <Innovations />

      <ScrollFadeIn>
        <NewSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ProductsScreen />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ExpertsSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <MapSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <PlanerkaBooking />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ImageSlider />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <KnowMore />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Footer />
      </ScrollFadeIn>
    </>
  );
}
