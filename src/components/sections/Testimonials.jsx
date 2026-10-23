import { Link } from 'react-router-dom';
import SectionHeading from '../SectionHeading';
import EmptyState from '../EmptyState';

/**
 * Testimonials are only shown when verified customer feedback exists.
 * No fabricated names, photos, ratings, or reviews.
 */
const VERIFIED_TESTIMONIALS = [];

const Testimonials = () => {
  const hasTestimonials = VERIFIED_TESTIMONIALS.length > 0;

  return (
    <section className="bg-cream/40 py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          label="Client Feedback"
          title="Voices of Trust"
          lead="We value genuine client feedback. Verified testimonials will appear here as they become available."
          align="center"
        />

        {!hasTestimonials && (
          <EmptyState
            title="Testimonials coming soon"
            message="We do not display fabricated customer reviews. Once verified client feedback is available, it will be featured here with permission."
            action={
              <Link to="/contact" className="btn-outline-navy">
                Share Your Experience
              </Link>
            }
          />
        )}

        {hasTestimonials && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VERIFIED_TESTIMONIALS.map((item) => (
              <blockquote
                key={item.id}
                className="border border-navy/10 bg-white p-6"
              >
                <p className="text-sm leading-relaxed text-slate-soft">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-navy">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
