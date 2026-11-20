import {
  BarChart3,
  Database,
  LineChart,
  ScanSearch,
  Sparkles,
  Table2,
} from 'lucide-react';
import { SectionHeading, useReveal } from './Section';

const skillItems = [
  { label: 'Microsoft Excel', icon: Table2 },
  { label: 'Power BI', icon: BarChart3 },
  { label: 'Data Interpretation', icon: ScanSearch },
  { label: 'Data Cleaning', icon: Sparkles },
  { label: 'Data Analysis', icon: Database },
  { label: 'Data Visualization', icon: LineChart },
] as const;

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-pad">
      <div ref={ref}>
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <SectionHeading eyebrow="Skills" title="Tools and strengths" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {skillItems.map(({ label, icon: Icon }, i) => (
              <div
                key={label}
                style={{ transitionDelay: `${i * 60}ms` }}
                className={`group flex items-center gap-3.5 rounded-2xl border border-ink-line bg-ink-card/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card sm:p-5 ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink-deep">
                  <Icon size={20} strokeWidth={1.7} />
                </span>

                <span className="text-sm font-semibold text-text sm:text-[0.95rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}