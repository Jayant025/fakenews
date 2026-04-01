import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { heroFeatures } from '../data/mockData';

function HeroSection() {
  return (
    <section className="panel overflow-hidden p-6 md:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <SectionHeader
            badge="AI Verification"
            title="Detect misinformation before it spreads"
            subtitle="Enterprise-grade fake news detection for journalists, analysts, and trust & safety teams."
          />

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Start Free Analysis
            </button>
            <button className="rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-slate-400">
              View API Docs
            </button>
          </div>
        </div>

        <div className="grid gap-3">
          {heroFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="glass rounded-xl p-4"
            >
              <h3 className="font-medium text-white">{feature.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
