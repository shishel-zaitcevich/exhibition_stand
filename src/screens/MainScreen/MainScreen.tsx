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
import ScrollFadeIn from '@/features/Animations/ScrollFadeIn';
import { ResponsiveProducts } from '../Products/ResponsiveProducts';

export default function MainScreen() {
  return (
    <>
      <Header />
      <MainSection />
      <Innovations />

      <ScrollFadeIn>
        <NewSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* <ProductsScreen /> */}
        <ResponsiveProducts />
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
