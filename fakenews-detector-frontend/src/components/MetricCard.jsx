import { motion } from 'framer-motion';

function MetricCard({ label, value, helper, tone = 'text-slate-100' }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="panel p-4 transition"
    >
      <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
      <p className={`mt-2 text-2xl font-bold ${tone}`}>{value}</p>
      {helper && <p className="mt-1 text-xs text-slate-400">{helper}</p>}
    </motion.article>
  );
}

export default MetricCard;
