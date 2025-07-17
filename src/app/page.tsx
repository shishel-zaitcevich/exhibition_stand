'use client';
import ImageSlider from '@/features/Slider/Slider';
// import CalendlyBooking from '@/widgets/Calendly/CalendlyBooking';
import { ExpertsSection } from '@/screens/Experts/ExpertsSection';
import Innovations from '@/screens/Innovations/Innovations';
import KnowMore from '@/screens/KnowMore/KnowMore';
import MainSection from '@/screens/MainSection/MainSection';
import MapSection from '@/screens/MapSection/MapSection';
import NewSection from '@/screens/NewSection/NewSection';
import PageContainer from '@/shared/PageContainer/PageContainer';
import PlanerkaBooking from '@/widgets/Calendly/PlanerkaBooking';
import Footer from '@/widgets/Footer/Footer';
import Header from '@/widgets/Header/Header';

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <MainSection />
      <Innovations />
      <NewSection />
      <ExpertsSection />
      <MapSection />
      <PlanerkaBooking />
      <ImageSlider />
      <KnowMore />
      <Footer />
    </PageContainer>
  );
}
