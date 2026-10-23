const LoadingState = ({ label = 'Loading…' }) => (
  <div className="flex flex-col items-center justify-center gap-3 py-16" role="status">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-navy/15 border-t-gold" />
    <p className="text-sm text-slate-soft">{label}</p>
  </div>
);

export default LoadingState;
