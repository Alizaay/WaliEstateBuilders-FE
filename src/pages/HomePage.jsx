import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import TrustHighlights from '../components/sections/TrustHighlights';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Wali Estates & Builders | Building Better Tomorrows"
        description="Find your place and build your future with Wali Estates & Builders. Explore residential and commercial property opportunities, investment guidance, and construction solutions."
        path="/"
      />
      <Hero />
      <TrustHighlights />
      <FeaturedProperties />
      <Services compact />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomePage;
