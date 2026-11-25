import { BarChart3, Database, Search, Sparkles } from 'lucide-react';
import { SectionHeading, useReveal } from './Section';

type ProcessTranslations = {
  eyebrow: string;
  title: string;
  steps: { number: string; title: string; description: string }[];
};

const stepIcons = [Search, Database, BarChart3, Sparkles];

export default function Process({ translations }: { translations: ProcessTranslations }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="section-pad">
      <div ref={ref}>
        <div className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <SectionHeading eyebrow={translations.eyebrow} title={translations.title} />

          <div className="grid gap-4 lg:grid-cols-4">
            {translations.steps.map(({ number, title, description }, index) => {
              const Icon = stepIcons[index];
              return (
                <div
                  key={number}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className={`group relative overflow-hidden rounded-2xl border border-ink-line bg-ink-card/55 p-6 transition-all duration-700 hover:-translate-y-1 hover:border-accent/35 hover:shadow-card ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent/[0.045] blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-medium tracking-tight text-accent/80">{number}</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07] text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-ink-deep">
                        <Icon size={18} strokeWidth={1.7} />
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-medium text-text">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>
                    <div className="mt-6 h-px w-10 bg-accent/40 transition-all duration-300 group-hover:w-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
