import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchProjects } from '../../services/api';
import SectionHeading from '../SectionHeading';
import LoadingState from '../LoadingState';
import EmptyState from '../EmptyState';

const FALLBACK_GALLERY = [
  {
    _id: 'fallback-1',
    title: 'Contemporary Residence Concept',
    category: 'architectural-concept',
    description: 'Illustrative architectural concept for modern residential living.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    isIllustrative: true,
  },
  {
    _id: 'fallback-2',
    title: 'Residential Community Atmosphere',
    category: 'community',
    description: 'Illustrative community setting imagery for residential presentation.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdbc?w=1200&q=80',
    isIllustrative: true,
  },
  {
    _id: 'fallback-3',
    title: 'Commercial Development Concept',
    category: 'commercial',
    description: 'Illustrative commercial architecture imagery.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    isIllustrative: true,
  },
  {
    _id: 'fallback-4',
    title: 'Luxury Interior Finish Concept',
    category: 'residential',
    description: 'Illustrative interior concept highlighting refined finishes.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    isIllustrative: true,
  },
  {
    _id: 'fallback-5',
    title: 'Nighttime Architecture Concept',
    category: 'architectural-concept',
    description: 'Illustrative exterior lighting and facade concept.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
    isIllustrative: true,
  },
  {
    _id: 'fallback-6',
    title: 'Construction Progress Atmosphere',
    category: 'residential',
    description: 'Illustrative construction imagery for building solutions.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    isIllustrative: true,
  },
];

const Gallery = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const result = await fetchProjects();
        if (!active) return;
        if (result.data?.length) {
          setProjects(result.data);
          setUsingFallback(false);
        } else {
          setProjects(FALLBACK_GALLERY);
          setUsingFallback(true);
        }
      } catch {
        if (!active) return;
        setProjects(FALLBACK_GALLERY);
        setUsingFallback(true);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          label="Construction & Development"
          title="Architectural Vision and Craft"
          lead="A visual showcase of architectural concepts, residential construction, and commercial development atmospheres. Illustrative concepts are clearly marked."
        />

        {(usingFallback || projects.some((p) => p.isIllustrative)) && (
          <p className="mb-6 border-l-2 border-gold bg-cream/60 px-4 py-3 text-sm text-slate-soft">
            Images below are <strong>illustrative concepts</strong> for presentation. They are not
            represented as completed Wali Estates &amp; Builders projects unless verified project
            data is added.
          </p>
        )}

        {loading && <LoadingState label="Loading gallery…" />}

        {!loading && projects.length === 0 && (
          <EmptyState
            title="Gallery coming soon"
            message="Verified project imagery will appear here once company projects are added."
          />
        )}

        {!loading && projects.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.figure
                key={project._id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5 pt-16">
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-gold uppercase">
                    {project.isIllustrative ? 'Illustrative Concept' : project.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-white">{project.title}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
