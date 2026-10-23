const EmptyState = ({ title, message, action }) => (
  <div className="border border-dashed border-navy/20 bg-cream/50 px-6 py-14 text-center">
    <h3 className="font-display text-2xl text-navy">{title}</h3>
    <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-soft">{message}</p>
    {action && <div className="mt-6">{action}</div>}
  </div>
);

export default EmptyState;
