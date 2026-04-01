function LoadingSkeleton({ className = '' }) {
  return <div className={`animate-pulse rounded-xl bg-slate-700/45 ${className}`} />;
}

export default LoadingSkeleton;
