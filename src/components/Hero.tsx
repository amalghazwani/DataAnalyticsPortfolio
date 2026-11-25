import { ArrowRight, BarChart3, Database, LineChart, Table2 } from 'lucide-react';
import { useReveal } from './Section';

type HeroTranslations = {
  name: string;
  tagline: string;
  projects: string;
  contact: string;
};

const focusAreas = [
  { label: 'Data Cleaning', icon: Database },
  { label: 'Data Analysis', icon: BarChart3 },
  { label: 'Data Visualization', icon: LineChart },
  { label: 'Excel & Power BI', icon: Table2 },
];

export default function Hero({ translations }: { translations: HeroTranslations }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32 lg:pt-40">
      <div ref={ref} className="container-wide relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:gap-16">
        <div className={`max-w-3xl transition-all duration-900 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
            Data Analyst
          </p>
          <h1 className="font-display text-[clamp(3.4rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.055em] text-text">
            {translations.name}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-[1.8] text-text-muted sm:mt-9 sm:text-lg">
            {translations.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center justify-center gap-3 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-ink-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-glow sm:px-7">
              {translations.projects}
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-ink-line bg-ink-card/35 px-6 py-3.5 text-sm font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/[0.07] hover:text-accent-light sm:px-7">
              {translations.contact}
            </a>
          </div>
        </div>

        <div className={`transition-all delay-150 duration-900 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-ink-card/65 p-6 shadow-card backdrop-blur-md sm:p-7">
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-accent/[0.07] blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-ink-line pb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-faint">Focus areas</span>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(78,163,255,0.75)]" />
              </div>
              <div className="mt-5 space-y-2.5">
                {focusAreas.map(({ label, icon: Icon }) => (
                  <div key={label} className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-accent/20 hover:bg-accent/[0.045]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/[0.08] text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-ink-deep">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-medium text-text-muted transition-colors group-hover:text-text">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-ink-line pt-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-text-faint">Excel · Power BI · Data Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
