import { Phone } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ContactForm from '../ContactForm';
import WhatsAppButton from '../WhatsAppButton';
import { COMPANY, telLink } from '../../config/site';

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-white py-20 md:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            label="Contact"
            title="Let’s Find Your Next Property."
            lead="Reach out by phone, WhatsApp, or the inquiry form. Our team is ready to discuss your property goals."
          />

          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold tracking-wider text-navy/50 uppercase">
                Company
              </p>
              <p className="mt-1 font-display text-2xl text-navy">{COMPANY.name}</p>
            </div>

            <a
              href={telLink}
              className="inline-flex items-center gap-3 text-lg font-medium text-navy transition hover:text-gold-dark"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center bg-navy text-gold">
                <Phone className="h-4 w-4" />
              </span>
              {COMPANY.phoneDisplay}
            </a>

            <div>
              <WhatsAppButton label="Message on WhatsApp" />
            </div>

            {COMPANY.email && (
              <div>
                <p className="text-sm font-semibold tracking-wider text-navy/50 uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-1 block text-navy transition hover:text-gold-dark"
                >
                  {COMPANY.email}
                </a>
              </div>
            )}

            {COMPANY.address && (
              <div>
                <p className="text-sm font-semibold tracking-wider text-navy/50 uppercase">
                  Office
                </p>
                <p className="mt-1 text-slate-soft">{COMPANY.address}</p>
              </div>
            )}

            {COMPANY.mapEmbedUrl && (
              <div className="aspect-video overflow-hidden border border-navy/10">
                <iframe
                  title="Office location map"
                  src={COMPANY.mapEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>

        <div className="border border-navy/10 bg-cream/30 p-6 md:p-8">
          <h3 className="mb-6 font-display text-2xl text-navy">Send an Inquiry</h3>
          <ContactForm mode="contact" />
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
