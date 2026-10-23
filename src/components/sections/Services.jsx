import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  Home,
  KeyRound,
  LineChart,
  MessagesSquare,
  Hammer,
} from 'lucide-react';
import SectionHeading from '../SectionHeading';

export const SERVICES = [
  {
    icon: KeyRound,
    title: 'Buying and Selling Properties',
    text: 'Support for property buyers and sellers seeking clear guidance throughout the transaction process.',
    inquiry: 'buying',
  },
  {
    icon: Home,
    title: 'Residential Real Estate',
    text: 'Homes, apartments, and residential opportunities aligned with your lifestyle and long-term plans.',
    inquiry: 'buying',
  },
  {
    icon: Building2,
    title: 'Commercial Real Estate',
    text: 'Commercial property options for businesses and investors exploring growth and location strategy.',
    inquiry: 'investment',
  },
  {
    icon: LineChart,
    title: 'Property Investment Guidance',
    text: 'Practical insight to help you evaluate property investments with greater confidence and clarity.',
    inquiry: 'investment',
  },
  {
    icon: Hammer,
    title: 'Construction and Building Solutions',
    text: 'Construction-focused support for clients pursuing building and development goals.',
    inquiry: 'construction',
  },
  {
    icon: MessagesSquare,
    title: 'Property Consultation',
    text: 'One-to-one consultation to discuss your property needs, questions, and next steps.',
    inquiry: 'consultation',
  },
];

const Services = ({ compact = false }) => {
  return (
    <section id="services" className="bg-white py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          label="Services"
          title="Property Solutions for Every Stage"
          lead="From first inquiry to informed decision, our services are designed to support residential, commercial, investment, and construction goals."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, compact ? 3 : 6).map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group border border-navy/10 p-7 transition hover:border-gold/50"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-soft">{service.text}</p>
              <Link
                to={`/contact?type=${service.inquiry}`}
                className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold-dark"
              >
                Inquire About This Service
              </Link>
            </motion.article>
          ))}
        </div>

        {compact && (
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline-navy">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
