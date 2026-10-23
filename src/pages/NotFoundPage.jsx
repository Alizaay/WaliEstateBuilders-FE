import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Page Not Found | Wali Estates & Builders" path="/404" />
      <section className="flex min-h-[70vh] items-center bg-cream/40 pt-28 pb-20">
        <div className="container-site text-center">
          <p className="section-label">404</p>
          <h1 className="font-display text-4xl text-navy md:text-5xl">Page not found</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-soft">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">
              Go Home
            </Link>
            <Link to="/properties" className="btn-outline-navy">
              Explore Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
