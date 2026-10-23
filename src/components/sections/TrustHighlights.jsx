import { motion } from 'framer-motion';
import { Compass, Handshake, HardHat, MessageSquare } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { VERIFIED_STATS_PLACEHOLDERS } from '../../config/site';

const HIGHLIGHTS = [
  {
    icon: Handshake,
    title: 'Client-Focused Service',
    text: 'Every conversation starts with your goals — whether you are buying, selling, investing, or building.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    text: 'Clear updates, honest guidance, and straightforward conversations at every stage of your property journey.',
  },
  {
    icon: Compass,
    title: 'Property Investment Guidance',
    text: 'Thoughtful support to help you evaluate opportunities and make informed real estate decisions.',
  },
  {
    icon: HardHat,
    title: 'Quality-Focused Construction',
    text: 'Construction and building solutions guided by attention to detail, planning, and lasting quality.',
  },
];

const TrustHighlights = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          label="Our Approach"
          title="Built on Trust and Clarity"
          lead="We focus on dependable service, open communication, and property solutions that respect your long-term goals."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border border-navy/8 bg-cream/40 p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold-dark">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 border border-dashed border-gold/40 bg-cream/30 p-6">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
            Editable placeholders — verified company information required
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {VERIFIED_STATS_PLACEHOLDERS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-navy/40">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-navy">{stat.label}</p>
                <p className="text-xs text-slate-soft">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
