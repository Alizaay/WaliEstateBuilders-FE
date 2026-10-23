export const formatPrice = (price, currency = 'PKR', transactionType = 'buy') => {
  if (price == null || Number.isNaN(Number(price))) return 'Price on request';

  const formatted = new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Number(price));

  return transactionType === 'rent' ? `${formatted}/month` : formatted;
};

export const formatPropertyType = (type) => {
  if (!type) return '';
  return type.charAt(0).toUpperCase() + type.slice(1);
};

export const formatArea = (value, unit = 'sq ft') => {
  if (value == null) return null;
  return `${Number(value).toLocaleString('en-PK')} ${unit}`;
};
