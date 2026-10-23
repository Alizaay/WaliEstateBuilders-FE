import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Logo from './Logo';
import WhatsAppButton from './WhatsAppButton';
import { COMPANY, NAV_LINKS, SOCIAL, telLink } from '../config/site';

const SERVICES = [
  'Buying & Selling',
  'Residential Real Estate',
  'Commercial Real Estate',
  'Investment Guidance',
  'Construction Solutions',
  'Property Consultation',
];

const Footer = () => {
  const year = new Date().getFullYear();
  const socialEntries = Object.entries(SOCIAL).filter(([, url]) => Boolean(url));

  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo size="lg" className="rounded-sm bg-white px-3 py-2" />
          <p className="text-sm font-medium tracking-[0.15em] text-gold uppercase">
            {COMPANY.tagline}
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Helping clients explore property opportunities, make informed decisions, and pursue
            real estate and construction goals with clarity.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl text-white">Navigate</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/70 transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl text-white">Services</h3>
          <ul className="space-y-2">
            {SERVICES.map((service) => (
              <li key={service}>
                <Link to="/services" className="text-sm text-white/70 transition hover:text-gold">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="mb-4 font-display text-xl text-white">Contact</h3>
          <a
            href={telLink}
            className="inline-flex items-center gap-2 text-sm text-white/90 transition hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            {COMPANY.phoneDisplay}
          </a>
          <div>
            <WhatsAppButton label="Chat on WhatsApp" />
          </div>
          {COMPANY.email && (
            <a
              href={`mailto:${COMPANY.email}`}
              className="block text-sm text-white/70 transition hover:text-gold"
            >
              {COMPANY.email}
            </a>
          )}
          {COMPANY.address && (
            <p className="text-sm leading-relaxed text-white/70">{COMPANY.address}</p>
          )}
          {socialEntries.length > 0 && (
            <ul className="flex flex-wrap gap-3 pt-2">
              {socialEntries.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm capitalize text-white/70 transition hover:text-gold"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
