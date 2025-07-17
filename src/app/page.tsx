'use client';
// import CalendlyBooking from '@/widgets/Calendly/CalendlyBooking';
import { ExpertsSection } from '@/screens/Experts/ExpertsSection';
import Innovations from '@/screens/Innovations/Innovations';
import MainSection from '@/screens/MainSection/MainSection';
import { ProductsScreen } from '@/screens/Products/ProductsScreen';
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
      <ProductsScreen />
      <ExpertsSection />
      <PlanerkaBooking />
      {/* <CalendlyBooking /> */}
      <Footer />
    </PageContainer>
  );
}
