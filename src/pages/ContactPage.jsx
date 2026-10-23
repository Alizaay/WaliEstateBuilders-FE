import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactCTA from '../components/sections/ContactCTA';
import ContactForm from '../components/ContactForm';
import { INQUIRY_TYPES } from '../config/site';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type') || 'general';
  const validType = INQUIRY_TYPES.some((t) => t.value === typeParam) ? typeParam : 'general';

  return (
    <>
      <SEO
        title="Contact | Wali Estates & Builders"
        description="Contact Wali Estates & Builders at 03040474640 or WhatsApp. Send an inquiry about property buying, selling, investment, or construction."
        path="/contact"
      />
      <section className="bg-navy pt-28 pb-16">
        <div className="container-site">
          <p className="section-label !text-gold">Get in Touch</p>
          <h1 className="font-display text-4xl text-white md:text-5xl">
            Let’s Find Your Next Property.
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Call, WhatsApp, or send a message — we are ready to discuss your property goals.
          </p>
        </div>
      </section>

      {validType !== 'general' && (
        <section className="border-b border-navy/10 bg-cream/40 py-10">
          <div className="container-site max-w-3xl">
            <h2 className="mb-4 font-display text-2xl text-navy">
              Inquiry:{' '}
              {INQUIRY_TYPES.find((t) => t.value === validType)?.label || 'General Inquiry'}
            </h2>
            <div className="border border-navy/10 bg-white p-6">
              <ContactForm mode="inquiry" defaultInquiryType={validType} />
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
};

export default ContactPage;
