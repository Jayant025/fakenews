import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { fetchArticlePreview } from '../services/api';

function UrlAnalyzer({ onAnalyze, loading }) {
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState(null);
  const [fetchingPreview, setFetchingPreview] = useState(false);
  const [error, setError] = useState('');

  const handlePreview = async () => {
    setError('');
    setFetchingPreview(true);
    try {
      const data = await fetchArticlePreview(url.trim());
      setPreview(data);
    } catch (err) {
      setPreview(null);
      setError(err.message);
    } finally {
      setFetchingPreview(false);
    }
  };

  return (
    <section id="analyze" className="panel p-6">
      <SectionHeader
        badge="URL analyzer"
        title="Analyze published article links"
        subtitle="Paste any news URL to preview metadata and run credibility analysis."
      />

      <div className="mt-5 space-y-3">
        <input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="https://news-site.com/article"
          className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-sm outline-none ring-blue-400 transition placeholder:text-slate-500 focus:ring"
        />
        <div className="flex gap-3">
          <button
            onClick={handlePreview}
            disabled={fetchingPreview}
            className="rounded-xl border border-slate-500 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-slate-300 disabled:opacity-50"
          >
            Preview
          </button>
          <button
            onClick={() => onAnalyze({ url, text: preview?.headline || '' })}
            disabled={loading || !preview}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50"
          >
            Analyze URL
          </button>
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-rose-300">{error}</p>}

      <div className="mt-5">
        {fetchingPreview && (
          <div className="space-y-3">
            <LoadingSkeleton className="h-48 w-full" />
            <LoadingSkeleton className="h-4 w-2/3" />
            <LoadingSkeleton className="h-4 w-1/3" />
          </div>
        )}

        {!fetchingPreview && !preview && (
          <div className="rounded-xl border border-dashed border-slate-600 p-6 text-center text-sm text-slate-400">
            No preview yet. Paste a URL and click <strong>Preview</strong>.
          </div>
        )}

        {preview && !fetchingPreview && (
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900"
          >
            <img src={preview.image} alt="Article cover" className="h-44 w-full object-cover" />
            <div className="space-y-2 p-4">
              <h3 className="font-semibold text-white">{preview.headline}</h3>
              <p className="text-sm text-slate-300">
                {preview.author} • {preview.source} • {preview.date}
              </p>
            </div>
          </motion.article>
        )}
      </div>
    </section>
  );
}

export default UrlAnalyzer;
