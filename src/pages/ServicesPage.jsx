import SEO from '../components/SEO';
import Services from '../components/sections/Services';
import ContactCTA from '../components/sections/ContactCTA';

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Services | Wali Estates & Builders"
        description="Buying and selling, residential and commercial real estate, investment guidance, construction solutions, and property consultation from Wali Estates & Builders."
        path="/services"
      />
      <section className="bg-navy pt-28 pb-16">
        <div className="container-site">
          <p className="section-label !text-gold">What We Offer</p>
          <h1 className="font-display text-4xl text-white md:text-5xl">Our Services</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Professional support across property sales, investment guidance, and construction
            solutions — tailored to your goals.
          </p>
        </div>
      </section>
      <Services />
      <ContactCTA />
    </>
  );
};

export default ServicesPage;
