/**
 * Central site configuration.
 * Sensitive/optional values come from environment variables.
 * Do not invent unverified company details.
 */

export const COMPANY = {
  name: 'Wali Estates & Builders',
  tagline: 'Building Better Tomorrows',
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || '03040474640',
  phoneTel: import.meta.env.VITE_PHONE_TEL || '03040474640',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '923040474640',
  email: import.meta.env.VITE_COMPANY_EMAIL || '',
  address: import.meta.env.VITE_OFFICE_ADDRESS || '',
  mapEmbedUrl: import.meta.env.VITE_MAP_EMBED_URL || '',
};

export const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');

export const API_URL = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

export const SOCIAL = {
  facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || '',
  instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || '',
  linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN || '',
  youtube: import.meta.env.VITE_SOCIAL_YOUTUBE || '',
};

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsappNumber}`;

export const telLink = `tel:${COMPANY.phoneTel}`;

export const whatsappPropertyMessage = (title) => {
  const text = encodeURIComponent(
    `Assalam-o-Alaikum, I am interested in "${title}" listed on the Wali Estates & Builders website. Please share more details.`
  );
  return `${WHATSAPP_URL}?text=${text}`;
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const PROPERTY_TYPES = [
  { value: '', label: 'All Types' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'plot', label: 'Plot' },
  { value: 'commercial', label: 'Commercial' },
];

export const TRANSACTION_TYPES = [
  { value: '', label: 'Buy or Rent' },
  { value: 'buy', label: 'Buy' },
  { value: 'rent', label: 'Rent' },
];

export const INQUIRY_TYPES = [
  { value: 'buying', label: 'Buying a Property' },
  { value: 'selling', label: 'Selling a Property' },
  { value: 'renting', label: 'Renting' },
  { value: 'investment', label: 'Property Investment' },
  { value: 'construction', label: 'Construction' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'general', label: 'General Inquiry' },
];

/**
 * Editable placeholders — replace with verified company information only.
 * These are intentionally unlabeled as live statistics.
 */
export const VERIFIED_STATS_PLACEHOLDERS = [
  {
    label: 'Projects Completed',
    value: '[Add verified number]',
    note: 'Requires verified company information',
  },
  {
    label: 'Client Relationships',
    value: '[Add verified number]',
    note: 'Requires verified company information',
  },
  {
    label: 'Years of Experience',
    value: '[Add verified number]',
    note: 'Requires verified company information',
  },
];
