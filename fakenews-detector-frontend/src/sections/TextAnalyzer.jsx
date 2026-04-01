import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

function TextAnalyzer({ onAnalyze, loading }) {
  const [text, setText] = useState('');

  return (
    <section className="panel p-6">
      <SectionHeader
        badge="Claim scanner"
        title="Analyze social media claims"
        subtitle="Paste viral text snippets and detect manipulative framing instantly."
      />

      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Paste a post, quote, or paragraph to inspect..."
        className="mt-5 h-52 w-full rounded-xl border border-slate-600 bg-slate-900 p-4 text-sm outline-none ring-blue-400 placeholder:text-slate-500 focus:ring"
      />

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-slate-400">{text.length} characters</p>
        <button
          onClick={() => onAnalyze({ text })}
          disabled={!text.trim() || loading}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50"
        >
          Analyze Text
        </button>
      </div>
    </section>
  );
}

export default TextAnalyzer;
