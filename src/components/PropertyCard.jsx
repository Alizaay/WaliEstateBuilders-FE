import { Link } from 'react-router-dom';
import { Bath, BedDouble, LandPlot, MapPin, MessageCircle } from 'lucide-react';
import { formatArea, formatPrice, formatPropertyType } from '../utils/format';
import { whatsappPropertyMessage } from '../config/site';

const PropertyCard = ({ property }) => {
  const image = property.images?.[0];
  const isSample = property.isSample || property.status === 'sample';

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-white shadow-[0_8px_30px_rgba(11,29,54,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,29,54,0.1)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
        {image ? (
          <img
            src={image}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-soft">
            No image available
          </div>
        )}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="bg-navy px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-white uppercase">
            {formatPropertyType(property.propertyType)}
          </span>
          <span className="bg-gold px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-navy uppercase">
            {property.transactionType === 'rent' ? 'For Rent' : 'For Sale'}
          </span>
        </div>
        {isSample && (
          <span className="absolute right-3 bottom-3 bg-black/70 px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-white uppercase">
            Sample Listing
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="font-display text-xl leading-snug text-navy">{property.title}</h3>
        </div>
        <p className="mb-3 flex items-center gap-1.5 text-sm text-slate-soft">
          <MapPin className="h-3.5 w-3.5 text-gold" />
          {property.location}
        </p>
        <p className="mb-4 font-display text-2xl text-navy">
          {formatPrice(property.price, property.currency, property.transactionType)}
        </p>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-soft">
          {property.shortDescription}
        </p>

        <div className="mb-5 flex flex-wrap gap-4 text-xs text-navy/70">
          {property.bedrooms != null && (
            <span className="inline-flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5 text-gold" />
              {property.bedrooms} Beds
            </span>
          )}
          {property.bathrooms != null && (
            <span className="inline-flex items-center gap-1">
              <Bath className="h-3.5 w-3.5 text-gold" />
              {property.bathrooms} Baths
            </span>
          )}
          {(property.landArea != null || property.coveredArea != null) && (
            <span className="inline-flex items-center gap-1">
              <LandPlot className="h-3.5 w-3.5 text-gold" />
              {formatArea(property.coveredArea ?? property.landArea, property.areaUnit)}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          <Link to={`/properties/${property._id}`} className="btn-outline-navy flex-1">
            View Details
          </Link>
          <a
            href={whatsappPropertyMessage(property.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 border border-[#25D366] px-3 py-2.5 text-sm font-medium text-[#128C7E] transition hover:bg-[#25D366] hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
