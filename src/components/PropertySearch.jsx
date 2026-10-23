import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { PROPERTY_TYPES, TRANSACTION_TYPES } from '../config/site';

const PropertySearch = ({ variant = 'hero', initialValues = {}, onSearch }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    propertyType: initialValues.propertyType || '',
    transactionType: initialValues.transactionType || '',
    location: initialValues.location || '',
    minPrice: initialValues.minPrice || '',
    maxPrice: initialValues.maxPrice || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== '') params.set(key, value);
    });

    if (onSearch) {
      onSearch(form);
      return;
    }

    navigate(`/properties?${params.toString()}`);
  };

  const isHero = variant === 'hero';

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isHero
          ? 'border border-white/15 bg-white/95 p-4 shadow-2xl backdrop-blur-sm md:p-5'
          : 'border border-navy/10 bg-white p-4 md:p-5'
      }`}
      aria-label="Property search"
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-[0.7rem] font-semibold tracking-wider text-navy/60 uppercase">
            Property Type
          </span>
          <select
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className="input-field"
          >
            {PROPERTY_TYPES.map((opt) => (
              <option key={opt.value || 'all'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-[0.7rem] font-semibold tracking-wider text-navy/60 uppercase">
            Buy or Rent
          </span>
          <select
            name="transactionType"
            value={form.transactionType}
            onChange={handleChange}
            className="input-field"
          >
            {TRANSACTION_TYPES.map((opt) => (
              <option key={opt.value || 'any'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-[0.7rem] font-semibold tracking-wider text-navy/60 uppercase">
            Location
          </span>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Area or community"
            className="input-field"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-[0.7rem] font-semibold tracking-wider text-navy/60 uppercase">
            Min Budget (PKR)
          </span>
          <input
            type="number"
            name="minPrice"
            min="0"
            value={form.minPrice}
            onChange={handleChange}
            placeholder="Minimum"
            className="input-field"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-[0.7rem] font-semibold tracking-wider text-navy/60 uppercase">
            Max Budget (PKR)
          </span>
          <input
            type="number"
            name="maxPrice"
            min="0"
            value={form.maxPrice}
            onChange={handleChange}
            placeholder="Maximum"
            className="input-field"
          />
        </label>

        <div className="flex items-end">
          <button type="submit" className="btn-gold w-full">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default PropertySearch;
