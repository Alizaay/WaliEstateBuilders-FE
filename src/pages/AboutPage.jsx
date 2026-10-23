import SEO from '../components/SEO';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TrustHighlights from '../components/sections/TrustHighlights';
import Gallery from '../components/sections/Gallery';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | Wali Estates & Builders"
        description="Learn about Wali Estates & Builders — Building Better Tomorrows through professional real estate guidance, transparent communication, and quality-focused construction."
        path="/about"
      />
      <section className="bg-navy pt-28 pb-16">
        <div className="container-site">
          <p className="section-label !text-gold">Our Story</p>
          <h1 className="font-display text-4xl text-white md:text-5xl">
            Building Trust. Creating Opportunities.
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Wali Estates &amp; Builders is dedicated to helping clients navigate property
            opportunities with clarity, professionalism, and care.
          </p>
        </div>
      </section>
      <About />
      <TrustHighlights />
      <WhyChooseUs />
      <Gallery />
    </>
  );
};

export default AboutPage;
