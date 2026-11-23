import {
  BarChart3,
  Database,
  LineChart,
  Sparkles,
  Table2,
} from 'lucide-react';
import { SectionHeading, useReveal } from './Section';

const skillItems = [
  {
    label: 'Microsoft Excel',
    icon: Table2,
  },
  {
    label: 'Power BI',
    icon: BarChart3,
  },
  {
    label: 'Data Cleaning',
    icon: Sparkles,
  },
  {
    label: 'Data Analysis',
    icon: Database,
  },
  {
    label: 'Data Visualization',
    icon: LineChart,
  },
] as const;

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-pad">
      <div ref={ref}>
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <SectionHeading
            eyebrow="Skills"
            title="Tools and strengths"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skillItems.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                className={`group flex min-h-[130px] flex-col justify-between rounded-2xl border border-ink-line bg-ink-card/60 p-5 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-accent/40 hover:bg-ink-card/80 hover:shadow-card ${
                  visible
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'translate-y-8 scale-[0.97] opacity-0'
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-ink-deep">
                  <Icon size={20} strokeWidth={1.7} />
                </span>

                <span className="mt-6 text-sm font-semibold leading-snug text-text">
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
