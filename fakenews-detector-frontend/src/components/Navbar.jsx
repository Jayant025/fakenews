import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur"
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <div>
          <p className="text-xl font-semibold tracking-tight">
            Veri<span className="headline">Lens</span>
          </p>
          <p className="text-xs text-slate-400">Fake News Intelligence Platform</p>
        </div>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#analyze" className="hover:text-white">Analyze</a>
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
          <a href="#extension" className="hover:text-white">Extension</a>
        </div>

        <button className="rounded-full border border-blue-400/45 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20">
          Book Demo
        </button>
      </nav>
    </motion.header>
  );
}

export default Navbar;
