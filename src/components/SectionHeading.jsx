const SectionHeading = ({ label, title, lead, align = 'left', className = '' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left';

  return (
    <div className={`mb-10 flex flex-col ${alignment} ${className}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      <div className={`gold-rule mb-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      {lead && <p className={`section-lead ${align === 'center' ? 'mx-auto' : ''}`}>{lead}</p>}
    </div>
  );
};

export default SectionHeading;
