import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

function ExtensionMockup() {
  return (
    <section id="extension" className="panel p-6">
      <SectionHeader
        badge="Chrome extension"
        title="One-click trust score on any active tab"
        subtitle="Popup mockup for browser-side instant scanning and on-page credibility overlays."
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[300px_1fr]">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl border border-slate-600 bg-slate-950 p-4"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">VeriLens Scan</h3>
            <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-200">Active</span>
          </div>
          <p className="text-xs text-slate-400">Current tab: worldbreakingupdates.info</p>
          <button className="mt-4 w-full rounded-xl bg-blue-600 py-2 text-sm font-semibold">Scan Active Tab</button>
          <div className="mt-4 rounded-xl bg-slate-900 p-3 text-sm">
            Trust Score: <span className="font-bold text-amber-300">42 / 100</span>
          </div>
        </motion.div>

        <div className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
          <p className="text-sm text-slate-300">In-page overlay preview</p>
          <div className="mt-4 rounded-2xl border border-rose-400/40 bg-rose-500/10 p-4">
            <p className="text-sm font-semibold text-rose-200">⚠ Potential Misinformation Detected</p>
            <p className="mt-1 text-sm text-slate-300">
              This page contains unverified claims and low-credibility sourcing patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExtensionMockup;
