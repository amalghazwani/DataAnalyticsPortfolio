import {
  BarChart3,
  Database,
  Search,
  Sparkles,
} from 'lucide-react';
import { SectionHeading, useReveal } from './Section';

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Understand the data, the business context, and the questions that need to be answered.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Clean',
    description:
      'Prepare the data by checking missing values, duplicates, inconsistencies, and data quality.',
    icon: Database,
  },
  {
    number: '03',
    title: 'Analyze',
    description:
      'Explore patterns, trends, and relationships to turn raw data into meaningful insights.',
    icon: BarChart3,
  },
  {
    number: '04',
    title: 'Visualize',
    description:
      'Build clear visualizations and dashboards that make findings easy to understand and use.',
    icon: Sparkles,
  },
] as const;

export default function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="section-pad">
      <div ref={ref}>
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <SectionHeading
            eyebrow="How I Work"
            title="From raw data to clear insight"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ number, title, description, icon: Icon }, index) => (
              <div
                key={number}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`group relative rounded-3xl border border-ink-line bg-ink-card/60 p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-card ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm font-semibold tracking-wider text-accent">
                    {number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-ink-deep">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>
                </div>

                <h3 className="mt-7 font-display text-xl font-semibold text-text">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {description}
                </p>

                {index < processSteps.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-accent/20 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
