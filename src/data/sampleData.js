/**
 * SAMPLE / DEMO DATA for frontend-only mode.
 * Not verified inventory. Replace via backend when ready.
 */

const IMG = 'https://images.unsplash.com';

export const SAMPLE_PROPERTIES = [
  {
    _id: 'sample-modern-family-residence',
    title: 'Modern Family Residence — Sample Listing',
    slug: 'modern-family-residence-sample',
    description:
      'SAMPLE LISTING FOR DEVELOPMENT ONLY. A thoughtfully designed family home featuring open living spaces, natural light, and a refined contemporary finish.',
    shortDescription:
      'Sample residential listing showcasing a modern family home layout and presentation.',
    propertyType: 'house',
    transactionType: 'buy',
    location: 'Residential Community',
    city: '',
    price: 28500000,
    currency: 'PKR',
    bedrooms: 5,
    bathrooms: 4,
    landArea: 4500,
    coveredArea: 3200,
    areaUnit: 'sq ft',
    images: [
      `${IMG}/photo-1600596542815-ffad4c1539a9?w=1200&q=80`,
      `${IMG}/photo-1600585154340-be6161a56a0c?w=1200&q=80`,
    ],
    featured: true,
    status: 'sample',
    isSample: true,
  },
  {
    _id: 'sample-contemporary-apartment',
    title: 'Contemporary Apartment — Sample Listing',
    slug: 'contemporary-apartment-sample',
    description:
      'SAMPLE LISTING FOR DEVELOPMENT ONLY. An elegant apartment concept with efficient planning, balcony access, and premium interior finishes.',
    shortDescription:
      'Sample apartment listing for demonstrating urban residential inventory.',
    propertyType: 'apartment',
    transactionType: 'buy',
    location: 'Urban District',
    city: '',
    price: 12500000,
    currency: 'PKR',
    bedrooms: 3,
    bathrooms: 2,
    landArea: null,
    coveredArea: 1450,
    areaUnit: 'sq ft',
    images: [
      `${IMG}/photo-1502672260266-1c1ef2d93688?w=1200&q=80`,
      `${IMG}/photo-1560448204-e02f11c3be14?w=1200&q=80`,
    ],
    featured: true,
    status: 'sample',
    isSample: true,
  },
  {
    _id: 'sample-investment-plot',
    title: 'Investment Plot Opportunity — Sample Listing',
    slug: 'investment-plot-sample',
    description:
      'SAMPLE LISTING FOR DEVELOPMENT ONLY. A plot concept intended to illustrate land-based investment opportunities.',
    shortDescription: 'Sample plot listing for investment-focused property presentation.',
    propertyType: 'plot',
    transactionType: 'buy',
    location: 'Developing Sector',
    city: '',
    price: 8500000,
    currency: 'PKR',
    bedrooms: null,
    bathrooms: null,
    landArea: 10,
    coveredArea: null,
    areaUnit: 'marla',
    images: [`${IMG}/photo-1500382017468-9049fed747ef?w=1200&q=80`],
    featured: false,
    status: 'sample',
    isSample: true,
  },
  {
    _id: 'sample-commercial-shop',
    title: 'Commercial Shop Front — Sample Listing',
    slug: 'commercial-shop-front-sample',
    description:
      'SAMPLE LISTING FOR DEVELOPMENT ONLY. A commercial frontage concept for retail or office use.',
    shortDescription: 'Sample commercial listing for shop and retail presentation.',
    propertyType: 'commercial',
    transactionType: 'buy',
    location: 'Business Corridor',
    city: '',
    price: 42000000,
    currency: 'PKR',
    bedrooms: null,
    bathrooms: 2,
    landArea: 8,
    coveredArea: 2200,
    areaUnit: 'marla',
    images: [`${IMG}/photo-1486406146926-c627a92ad1ab?w=1200&q=80`],
    featured: true,
    status: 'sample',
    isSample: true,
  },
  {
    _id: 'sample-luxury-villa',
    title: 'Luxury Villa Concept — Sample Listing',
    slug: 'luxury-villa-concept-sample',
    description:
      'SAMPLE LISTING FOR DEVELOPMENT ONLY. A villa-style residence concept with landscaped outdoor space and high-end finishes.',
    shortDescription: 'Sample villa listing highlighting premium residential presentation.',
    propertyType: 'villa',
    transactionType: 'buy',
    location: 'Premium Enclave',
    city: '',
    price: 75000000,
    currency: 'PKR',
    bedrooms: 6,
    bathrooms: 5,
    landArea: 6000,
    coveredArea: 4800,
    areaUnit: 'sq ft',
    images: [
      `${IMG}/photo-1613490493576-7fde63acd811?w=1200&q=80`,
      `${IMG}/photo-1600607687939-ce8a6c25118c?w=1200&q=80`,
    ],
    featured: true,
    status: 'sample',
    isSample: true,
  },
  {
    _id: 'sample-apartment-rent',
    title: 'Furnished Apartment for Rent — Sample Listing',
    slug: 'furnished-apartment-rent-sample',
    description:
      'SAMPLE LISTING FOR DEVELOPMENT ONLY. A rental apartment concept with furnishings and ready-to-move presentation.',
    shortDescription: 'Sample rental apartment listing for lease-focused inventory display.',
    propertyType: 'apartment',
    transactionType: 'rent',
    location: 'City Center',
    city: '',
    price: 95000,
    currency: 'PKR',
    bedrooms: 2,
    bathrooms: 2,
    landArea: null,
    coveredArea: 1100,
    areaUnit: 'sq ft',
    images: [`${IMG}/photo-1522708323590-d24dbb6b0267?w=1200&q=80`],
    featured: false,
    status: 'sample',
    isSample: true,
  },
  {
    _id: 'sample-house-rent',
    title: 'Family House for Rent — Sample Listing',
    slug: 'family-house-rent-sample',
    description:
      'SAMPLE LISTING FOR DEVELOPMENT ONLY. A family house rental concept with multiple bedrooms and outdoor space.',
    shortDescription: 'Sample house rental listing for residential lease presentation.',
    propertyType: 'house',
    transactionType: 'rent',
    location: 'Suburban Area',
    city: '',
    price: 175000,
    currency: 'PKR',
    bedrooms: 4,
    bathrooms: 3,
    landArea: 3500,
    coveredArea: 2800,
    areaUnit: 'sq ft',
    images: [`${IMG}/photo-1564013799919-ab600027ffc6?w=1200&q=80`],
    featured: false,
    status: 'sample',
    isSample: true,
  },
  {
    _id: 'sample-corner-plot',
    title: 'Corner Commercial Plot — Sample Listing',
    slug: 'corner-commercial-plot-sample',
    description:
      'SAMPLE LISTING FOR DEVELOPMENT ONLY. A corner commercial plot concept suitable for illustrating land investment conversations.',
    shortDescription: 'Sample commercial plot listing for development opportunity display.',
    propertyType: 'plot',
    transactionType: 'buy',
    location: 'Main Boulevard',
    city: '',
    price: 55000000,
    currency: 'PKR',
    bedrooms: null,
    bathrooms: null,
    landArea: 20,
    coveredArea: null,
    areaUnit: 'marla',
    images: [`${IMG}/photo-1464146072230-91cabc968266?w=1200&q=80`],
    featured: false,
    status: 'sample',
    isSample: true,
  },
];

export const SAMPLE_PROJECTS = [
  {
    _id: 'project-1',
    title: 'Contemporary Residence Concept',
    category: 'architectural-concept',
    description: 'Illustrative architectural concept for modern residential living.',
    image: `${IMG}/photo-1600585154340-be6161a56a0c?w=1200&q=80`,
    isIllustrative: true,
    sortOrder: 1,
  },
  {
    _id: 'project-2',
    title: 'Residential Community Atmosphere',
    category: 'community',
    description: 'Illustrative community setting imagery for residential presentation.',
    image: `${IMG}/photo-1600047509807-ba8f99d2cdbc?w=1200&q=80`,
    isIllustrative: true,
    sortOrder: 2,
  },
  {
    _id: 'project-3',
    title: 'Commercial Development Concept',
    category: 'commercial',
    description: 'Illustrative commercial architecture imagery.',
    image: `${IMG}/photo-1486406146926-c627a92ad1ab?w=1200&q=80`,
    isIllustrative: true,
    sortOrder: 3,
  },
  {
    _id: 'project-4',
    title: 'Luxury Interior Finish Concept',
    category: 'residential',
    description: 'Illustrative interior concept highlighting refined finishes.',
    image: `${IMG}/photo-1600210492486-724fe5c67fb0?w=1200&q=80`,
    isIllustrative: true,
    sortOrder: 4,
  },
  {
    _id: 'project-5',
    title: 'Nighttime Architecture Concept',
    category: 'architectural-concept',
    description: 'Illustrative exterior lighting and facade concept.',
    image: `${IMG}/photo-1600607687644-c7171b42498b?w=1200&q=80`,
    isIllustrative: true,
    sortOrder: 5,
  },
  {
    _id: 'project-6',
    title: 'Construction Progress Atmosphere',
    category: 'residential',
    description: 'Illustrative construction imagery for building solutions.',
    image: `${IMG}/photo-1503387762-592deb58ef4e?w=1200&q=80`,
    isIllustrative: true,
    sortOrder: 6,
  },
];

export const filterSampleProperties = (filters = {}) => {
  let results = [...SAMPLE_PROPERTIES];

  if (filters.propertyType) {
    results = results.filter((p) => p.propertyType === filters.propertyType);
  }
  if (filters.transactionType) {
    results = results.filter((p) => p.transactionType === filters.transactionType);
  }
  if (filters.location) {
    const q = String(filters.location).toLowerCase();
    results = results.filter((p) => p.location.toLowerCase().includes(q));
  }
  if (filters.minPrice) {
    results = results.filter((p) => p.price >= Number(filters.minPrice));
  }
  if (filters.maxPrice) {
    results = results.filter((p) => p.price <= Number(filters.maxPrice));
  }
  if (filters.featured === true || filters.featured === 'true') {
    results = results.filter((p) => p.featured);
  }
  if (filters.search) {
    const q = String(filters.search).toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  results.sort((a, b) => Number(b.featured) - Number(a.featured));

  const page = Math.max(1, parseInt(filters.page, 10) || 1);
  const limit = Math.min(50, Math.max(1, parseInt(filters.limit, 10) || 12));
  const start = (page - 1) * limit;
  const paged = results.slice(start, start + limit);

  return {
    success: true,
    data: paged,
    pagination: {
      page,
      limit,
      total: results.length,
      pages: Math.ceil(results.length / limit) || 0,
    },
  };
};

export const getSamplePropertyById = (id) => {
  const property = SAMPLE_PROPERTIES.find((p) => p._id === id || p.slug === id);
  if (!property) return null;
  return { success: true, data: property };
};
