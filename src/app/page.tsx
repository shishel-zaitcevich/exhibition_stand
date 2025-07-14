// import CalendlyBooking from '@/widgets/Calendly/CalendlyBooking';
'use client';

import PlanerkaBooking from '@/widgets/Calendly/PlanerkaBooking';
import Footer from '@/widgets/Footer/Footer';
import Header from '@/widgets/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <PlanerkaBooking />
      <Footer />
    </>
  );
}
