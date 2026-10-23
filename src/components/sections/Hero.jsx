import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropertySearch from '../PropertySearch';
import WhatsAppButton from '../WhatsAppButton';
import { COMPANY } from '../../config/site';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy">
      <img
        src={HERO_IMAGE}
        alt="Luxury modern residence exterior representing premium real estate"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/78 to-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/30" />

      <div className="relative container-site flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-gold uppercase">
            {COMPANY.name}
          </p>
          <h1 className="font-display text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Place. Build Your Future.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Discover property opportunities with Wali Estates &amp; Builders. From finding your
            ideal home to exploring investment opportunities, we help you take the next step with
            confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/properties" className="btn-gold">
              Explore Properties
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Our Team
            </Link>
            <WhatsAppButton label="WhatsApp Us" variant="outline" className="border-white/40 text-white hover:border-[#25D366] hover:bg-[#25D366] hover:text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-10 w-full"
        >
          <PropertySearch variant="hero" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
