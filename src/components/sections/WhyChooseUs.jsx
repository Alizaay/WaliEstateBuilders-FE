import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const REASONS = [
  {
    title: 'Professional Guidance',
    text: 'Receive clear, thoughtful advice tailored to your property goals and questions.',
  },
  {
    title: 'Client-First Approach',
    text: 'Your priorities shape the conversation — we listen carefully before recommending next steps.',
  },
  {
    title: 'Clear Communication',
    text: 'Straightforward updates and honest discussions help you stay informed throughout the process.',
  },
  {
    title: 'Property-Focused Solutions',
    text: 'From residential and commercial listings to construction support, our focus stays on real outcomes.',
  },
  {
    title: 'Long-Term Relationship Building',
    text: 'We aim to earn trust over time through reliability, respect, and consistent service.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-navy py-20 text-white md:py-24">
      <div className="container-site">
        <SectionHeading
          label="Why Choose Us"
          title="A Partner for Your Property Journey"
          lead="We combine professional guidance with a client-first mindset — without unsupported guarantees."
          className="[&_.section-title]:text-white [&_.section-lead]:text-white/70 [&_.section-label]:text-gold"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <CheckCircle2 className="mb-4 h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="font-display text-xl text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{reason.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
