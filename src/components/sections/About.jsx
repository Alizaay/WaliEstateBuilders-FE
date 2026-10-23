import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80';

const About = () => {
  return (
    <section id="about" className="bg-cream/50 py-20 md:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 h-24 w-24 border-t-2 border-l-2 border-gold" />
          <img
            src={ABOUT_IMAGE}
            alt="Modern architectural residence reflecting quality construction and design"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute -right-4 -bottom-4 hidden h-24 w-24 border-r-2 border-b-2 border-gold md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            label="About Us"
            title="Building Trust. Creating Opportunities."
            className="mb-6"
          />
          <div className="space-y-4 text-[0.98rem] leading-relaxed text-slate-soft">
            <p>
              Wali Estates &amp; Builders helps clients explore property opportunities, make
              informed real estate decisions, and pursue residential, commercial, and construction
              goals with clarity.
            </p>
            <p>
              We believe lasting relationships are built through professionalism, transparent
              communication, and attentive customer service. Whether you are searching for a home,
              evaluating an investment, or planning a building project, our focus is on guiding you
              with care and integrity.
            </p>
            <p>
              Our team is committed to understanding your needs and supporting you through each
              step — from first conversation to confident next action.
            </p>
          </div>
          <Link to="/contact" className="btn-primary mt-8">
            Talk to Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
