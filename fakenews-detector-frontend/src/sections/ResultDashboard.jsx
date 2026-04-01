import { motion } from 'framer-motion';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import SectionHeader from '../components/SectionHeader';
import MetricCard from '../components/MetricCard';
import LoadingSkeleton from '../components/LoadingSkeleton';

function ResultDashboard({ result, loading }) {
  const pieData = [
    { name: 'Real', value: result.likelihood.real, color: '#10b981' },
    { name: 'Fake', value: result.likelihood.fake, color: '#ef4444' }
  ];

  return (
    <section id="dashboard" className="panel p-6">
      <SectionHeader
        badge="Analysis output"
        title="Credibility intelligence dashboard"
        subtitle="Interpretable confidence, bias, sentiment, source quality, and risk tagging in one place."
      />

      {loading ? (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <LoadingSkeleton className="h-32" />
          <LoadingSkeleton className="h-32" />
          <LoadingSkeleton className="h-32" />
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard label="Model confidence" value={`${result.confidence}%`} tone="text-blue-200" />
            <MetricCard label="Political bias" value={result.bias} tone="text-violet-200" />
            <MetricCard label="Sentiment" value={result.sentiment} tone="text-amber-200" />
            <MetricCard
              label="Source credibility"
              value={`${result.sourceCredibility}/100`}
              helper="Publisher trust benchmark"
              tone="text-emerald-200"
            />
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="panel p-4"
            >
              <p className="text-sm text-slate-300">Real vs Fake likelihood</p>
              <div className="mt-2 h-56">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" innerRadius={65} outerRadius={95} paddingAngle={6}>
                      {pieData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <article className="panel p-4">
              <p className="text-sm text-slate-300">Suspicious tags</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {result.suspiciousTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-rose-300/50 bg-rose-500/10 px-3 py-1 text-xs text-rose-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-sm font-medium text-white">Explanation panel</p>
                <p className="mt-2 text-sm text-slate-300">{result.explanation}</p>
              </div>
            </article>
          </div>
        </>
      )}
    </section>
  );
}

export default ResultDashboard;
