import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProperties } from '../../hooks/useProperties';
import SectionHeading from '../SectionHeading';
import PropertyCard from '../PropertyCard';
import LoadingState from '../LoadingState';
import EmptyState from '../EmptyState';

const FeaturedProperties = () => {
  const filters = useMemo(() => ({ featured: true, limit: 6 }), []);
  const { properties, loading, error, reload } = useProperties(filters);

  return (
    <section id="properties" className="bg-cream/40 py-20 md:py-24">
      <div className="container-site">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Featured Properties"
            title="Opportunities Worth Exploring"
            lead="Browse featured listings. Sample listings are clearly labeled and intended for development demonstration until real inventory is published."
            className="mb-0"
          />
          <Link to="/properties" className="btn-outline-navy shrink-0 self-start md:self-auto">
            View All Properties
          </Link>
        </div>

        {loading && <LoadingState label="Loading featured properties…" />}

        {!loading && error && (
          <EmptyState
            title="Unable to load properties"
            message={error}
            action={
              <button type="button" onClick={reload} className="btn-primary">
                Try Again
              </button>
            }
          />
        )}

        {!loading && !error && properties.length === 0 && (
          <EmptyState
            title="No featured properties yet"
            message="Property listings will appear here once they are added to the system. Contact our team to discuss current opportunities."
            action={
              <Link to="/contact" className="btn-primary">
                Contact Our Team
              </Link>
            }
          />
        )}

        {!loading && !error && properties.length > 0 && (
          <>
            {properties.some((p) => p.isSample) && (
              <p className="mb-6 border-l-2 border-gold bg-white px-4 py-3 text-sm text-slate-soft">
                Some listings shown are <strong>sample development data</strong> and are not
                verified available properties.
              </p>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
