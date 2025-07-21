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

export default function MainScreen() {
  return (
    <>
      <Header />
      <MainSection />
      <Innovations />
      <NewSection />
      <ProductsScreen />
      <ExpertsSection />
      <MapSection />
      <PlanerkaBooking />
      <ImageSlider />
      <KnowMore />
      <Footer />
    </>
  );
}
