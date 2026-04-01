import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import UrlAnalyzer from './sections/UrlAnalyzer';
import TextAnalyzer from './sections/TextAnalyzer';
import ExtensionMockup from './sections/ExtensionMockup';
import ResultDashboard from './sections/ResultDashboard';
import EntityHighlighter from './sections/EntityHighlighter';
import { fakeAnalyzeClaim } from './services/api';
import { initialDashboardState } from './data/mockData';

function App() {
  const [result, setResult] = useState(initialDashboardState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const statusLabel = useMemo(() => {
    if (loading) return 'Analyzing credibility signals…';
    if (error) return error;
    return 'Ready to analyze URLs or text claims.';
  }, [loading, error]);

  const runAnalysis = async (payload) => {
    setLoading(true);
    setError('');
    try {
      const data = await fakeAnalyzeClaim(payload);
      setResult(data);
    } catch (apiError) {
      setError(apiError.message || 'Analysis failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-hero-gradient" />
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-14 pt-24 md:px-8">
        <HeroSection />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-xl px-4 py-3 text-sm text-slate-300"
        >
          {statusLabel}
        </motion.p>

        <section className="grid gap-6 lg:grid-cols-2">
          <UrlAnalyzer onAnalyze={runAnalysis} loading={loading} />
          <TextAnalyzer onAnalyze={runAnalysis} loading={loading} />
        </section>

        <ExtensionMockup />

        <ResultDashboard result={result} loading={loading} />

        <EntityHighlighter entities={result.entities} highlightedText={result.annotatedText} />
      </main>
    </div>
  );
}

export default App;
