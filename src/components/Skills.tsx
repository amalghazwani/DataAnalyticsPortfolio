import {
  BarChart3,
  Database,
  LineChart,
  Sparkles,
  Table2,
} from 'lucide-react';
import { SectionHeading, useReveal } from './Section';

type SkillsTranslations = {
  eyebrow: string;
  title: string;
};

const skillItems = [
  { label: 'Microsoft Excel', icon: Table2 },
  { label: 'Power BI', icon: BarChart3 },
  { label: 'Data Cleaning', icon: Sparkles },
  { label: 'Data Analysis', icon: Database },
  { label: 'Data Visualization', icon: LineChart },
] as const;

export default function Skills({ translations }: { translations: SkillsTranslations }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-pad">
      <div ref={ref}>
        <div className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <SectionHeading eyebrow={translations.eyebrow} title={translations.title} />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {skillItems.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                style={{ transitionDelay: `${index * 90}ms` }}
                className={`group relative min-h-[150px] overflow-hidden rounded-2xl border border-ink-line bg-ink-card/55 p-5 transition-all duration-700 hover:-translate-y-1 hover:border-accent/35 hover:bg-ink-card/75 hover:shadow-card ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 scale-[0.98] opacity-0'}`}
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/[0.055] blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07] text-accent transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent group-hover:text-ink-deep">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-text">{label}</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-text-faint">Data & Insights</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
