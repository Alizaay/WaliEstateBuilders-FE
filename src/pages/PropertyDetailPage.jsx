import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Bath, BedDouble, LandPlot, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import { fetchPropertyById } from '../services/api';
import { formatArea, formatPrice, formatPropertyType } from '../utils/format';
import { telLink, whatsappPropertyMessage } from '../config/site';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchPropertyById(id);
        if (!active) return;
        setProperty(result.data);
        setActiveImage(0);
      } catch (err) {
        if (!active) return;
        setError(err.message || 'Property not found');
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="pt-28">
        <LoadingState label="Loading property details…" />
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="container-site pt-28 pb-20">
        <EmptyState
          title="Property not found"
          message={error || 'This listing may have been removed or is unavailable.'}
          action={
            <Link to="/properties" className="btn-primary">
              Back to Properties
            </Link>
          }
        />
      </div>
    );
  }

  const isSample = property.isSample || property.status === 'sample';

  return (
    <>
      <SEO
        title={`${property.title} | Wali Estates & Builders`}
        description={property.shortDescription}
        path={`/properties/${property._id}`}
      />

      <section className="bg-cream/30 pt-28 pb-20">
        <div className="container-site">
          <Link
            to="/properties"
            className="mb-6 inline-block text-sm font-medium text-navy/70 transition hover:text-gold-dark"
          >
            ← Back to Properties
          </Link>

          {isSample && (
            <p className="mb-6 border-l-2 border-gold bg-white px-4 py-3 text-sm text-slate-soft">
              This is a <strong>sample development listing</strong> and is not a verified available
              property.
            </p>
          )}

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-navy/5">
                {property.images?.[activeImage] ? (
                  <img
                    src={property.images[activeImage]}
                    alt={property.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-soft">
                    No image available
                  </div>
                )}
              </div>
              {property.images?.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto">
                  {property.images.map((img, index) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`h-20 w-28 shrink-0 overflow-hidden border-2 ${
                        activeImage === index ? 'border-gold' : 'border-transparent'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="bg-navy px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-white uppercase">
                    {formatPropertyType(property.propertyType)}
                  </span>
                  <span className="bg-gold px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-navy uppercase">
                    {property.transactionType === 'rent' ? 'For Rent' : 'For Sale'}
                  </span>
                </div>
                <h1 className="font-display text-3xl text-navy md:text-4xl">{property.title}</h1>
                <p className="mt-2 flex items-center gap-1.5 text-slate-soft">
                  <MapPin className="h-4 w-4 text-gold" />
                  {property.location}
                </p>
                <p className="mt-4 font-display text-3xl text-navy">
                  {formatPrice(property.price, property.currency, property.transactionType)}
                </p>

                <div className="mt-6 flex flex-wrap gap-6 border-y border-navy/10 py-5 text-sm text-navy">
                  {property.bedrooms != null && (
                    <span className="inline-flex items-center gap-2">
                      <BedDouble className="h-4 w-4 text-gold" />
                      {property.bedrooms} Bedrooms
                    </span>
                  )}
                  {property.bathrooms != null && (
                    <span className="inline-flex items-center gap-2">
                      <Bath className="h-4 w-4 text-gold" />
                      {property.bathrooms} Bathrooms
                    </span>
                  )}
                  {property.landArea != null && (
                    <span className="inline-flex items-center gap-2">
                      <LandPlot className="h-4 w-4 text-gold" />
                      Land: {formatArea(property.landArea, property.areaUnit)}
                    </span>
                  )}
                  {property.coveredArea != null && (
                    <span className="inline-flex items-center gap-2">
                      <LandPlot className="h-4 w-4 text-gold" />
                      Covered: {formatArea(property.coveredArea, property.areaUnit)}
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <h2 className="font-display text-2xl text-navy">Description</h2>
                  <p className="mt-3 whitespace-pre-line leading-relaxed text-slate-soft">
                    {property.description}
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="border border-navy/10 bg-white p-6">
                <h2 className="font-display text-2xl text-navy">Inquire About This Property</h2>
                <div className="mt-4 flex flex-col gap-3">
                  <a href={telLink} className="btn-primary w-full">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <WhatsAppButton
                    label="WhatsApp Inquiry"
                    message={`Assalam-o-Alaikum, I am interested in "${property.title}". Please share more details.`}
                    className="w-full justify-center"
                  />
                  <a
                    href={whatsappPropertyMessage(property.title)}
                    className="sr-only"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="border border-navy/10 bg-white p-6">
                <h3 className="mb-4 font-display text-xl text-navy">Send a Message</h3>
                <ContactForm
                  mode="inquiry"
                  propertyId={property._id}
                  propertyTitle={property.title}
                  defaultInquiryType={
                    property.transactionType === 'rent' ? 'renting' : 'buying'
                  }
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailPage;
