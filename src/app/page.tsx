// import CalendlyBooking from '@/widgets/Calendly/CalendlyBooking';
'use client';

import MainBlock from '@/screens/MainBlock/MainBlock';
import PageContainer from '@/shared/PageContainer/PageContainer';
import PlanerkaBooking from '@/widgets/Calendly/PlanerkaBooking';
import Footer from '@/widgets/Footer/Footer';
import Header from '@/widgets/Header/Header';

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <MainBlock />
      <PlanerkaBooking />
      <Footer />
    </PageContainer>
  );
}
