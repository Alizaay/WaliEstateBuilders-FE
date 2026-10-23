import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import PropertyCard from '../components/PropertyCard';
import PropertySearch from '../components/PropertySearch';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import { useProperties } from '../hooks/useProperties';

const PropertiesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo(
    () => ({
      propertyType: searchParams.get('propertyType') || '',
      transactionType: searchParams.get('transactionType') || '',
      location: searchParams.get('location') || '',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      page: Number(searchParams.get('page') || 1),
      limit: 9,
    }),
    [searchParams]
  );

  const { properties, pagination, loading, error, reload } = useProperties(filters);

  const handleSearch = (formValues) => {
    const next = new URLSearchParams();
    Object.entries(formValues).forEach(([key, value]) => {
      if (value !== '') next.set(key, value);
    });
    setSearchParams(next);
  };

  const goToPage = (page) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', String(page));
    setSearchParams(next);
  };

  return (
    <>
      <SEO
        title="Properties | Wali Estates & Builders"
        description="Browse residential and commercial properties with Wali Estates & Builders. Filter by type, transaction, location, and budget."
        path="/properties"
      />

      <section className="bg-navy pt-28 pb-16">
        <div className="container-site">
          <p className="section-label !text-gold">Property Listings</p>
          <h1 className="font-display text-4xl text-white md:text-5xl">Explore Properties</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Search available listings by type, buy or rent preference, location, and budget.
            Sample development listings are clearly labeled.
          </p>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white py-8">
        <div className="container-site">
          <PropertySearch variant="page" initialValues={filters} onSearch={handleSearch} />
        </div>
      </section>

      <section className="bg-cream/30 py-14">
        <div className="container-site">
          {loading && <LoadingState label="Loading properties…" />}

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
              title="No properties match your search"
              message="Try adjusting your filters, or contact our team to discuss current opportunities."
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
                  Listings marked <strong>Sample Listing</strong> are development placeholders and
                  are not verified available properties.
                </p>
              )}

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {properties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>

              {pagination && pagination.pages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    className="btn-outline-navy"
                    disabled={pagination.page <= 1}
                    onClick={() => goToPage(pagination.page - 1)}
                  >
                    Previous
                  </button>
                  <span className="px-4 text-sm text-slate-soft">
                    Page {pagination.page} of {pagination.pages}
                  </span>
                  <button
                    type="button"
                    className="btn-outline-navy"
                    disabled={pagination.page >= pagination.pages}
                    onClick={() => goToPage(pagination.page + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
