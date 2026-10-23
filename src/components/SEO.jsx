import { useEffect } from 'react';
import { SITE_URL } from '../config/site';

const SEO = ({
  title = 'Wali Estates & Builders | Building Better Tomorrows',
  description = 'Discover residential and commercial property opportunities with Wali Estates & Builders. Professional guidance for buying, selling, investment, and construction.',
  path = '/',
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        } else {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    if (SITE_URL) {
      const canonicalHref = `${SITE_URL}${path}`;
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalHref);
      setMeta('meta[property="og:url"]', 'content', canonicalHref);
    }
  }, [title, description, path]);

  return null;
};

export default SEO;
