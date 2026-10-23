import { useEffect, useMemo, useRef, useState } from 'react';
import { fetchProperties } from '../services/api';

export const useProperties = (filters = {}) => {
  const [properties, setProperties] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadToken, setReloadToken] = useState(0);
  const requestId = useRef(0);

  const filterKey = useMemo(() => JSON.stringify(filters), [filters]);

  useEffect(() => {
    const currentRequest = ++requestId.current;
    const parsedFilters = JSON.parse(filterKey);

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchProperties(parsedFilters);
        if (currentRequest !== requestId.current) return;
        setProperties(result.data || []);
        setPagination(result.pagination || null);
      } catch (err) {
        if (currentRequest !== requestId.current) return;
        setError(err.message || 'Unable to load properties');
        setProperties([]);
      } finally {
        if (currentRequest === requestId.current) {
          setLoading(false);
        }
      }
    };

    load();
  }, [filterKey, reloadToken]);

  return {
    properties,
    pagination,
    loading,
    error,
    filters,
    reload: () => setReloadToken((token) => token + 1),
  };
};
