import SectionHeader from '../components/SectionHeader';
import { entityClassMap } from '../utils/entityStyles';

function EntityHighlighter({ entities, highlightedText }) {
  let decoratedText = highlightedText;

  entities.forEach((entity) => {
    decoratedText = decoratedText.replace(entity.label, `[[${entity.type}::${entity.label}]]`);
  });

  const segments = decoratedText.split(/(\[\[[^\]]+\]\])/g);

  return (
    <section className="panel p-6">
      <SectionHeader
        badge="NLP entities"
        title="Context-aware claim breakdown"
        subtitle="Named entities and suspicious claim spans highlighted for fast editorial review."
      />

      <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950 p-5 leading-7 text-slate-200">
        {segments.map((segment) => {
          if (!segment.startsWith('[[')) return <span key={segment}>{segment}</span>;

          const [entityType, label] = segment.slice(2, -2).split('::');
          return (
            <span
              key={`${entityType}-${label}`}
              className={`mx-0.5 inline-flex rounded-md border px-2 py-0.5 text-xs font-semibold ${entityClassMap[entityType]}`}
            >
              {label}
            </span>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {entities.map((entity) => (
          <span
            key={`${entity.type}-${entity.label}`}
            className={`rounded-full border px-3 py-1 text-xs ${entityClassMap[entity.type]}`}
          >
            {entity.type}
          </span>
        ))}
      </div>
    </section>
  );
}

export default EntityHighlighter;
