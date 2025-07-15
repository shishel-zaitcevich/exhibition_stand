// import CalendlyBooking from '@/widgets/Calendly/CalendlyBooking';
'use client';

import { ExpertsSection } from '@/screens/Experts/ExpertsSection';
import Innovations from '@/screens/Innovations/Innovations';
import MainSection from '@/screens/MainSection/MainSection';
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
      <ExpertsSection />
      <PlanerkaBooking />
      <Footer />
    </PageContainer>
  );
}
