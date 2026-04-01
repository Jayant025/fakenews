function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="space-y-2">
      {badge && (
        <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
          {badge}
        </span>
      )}
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <p className="text-sm text-slate-300 md:text-base">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
