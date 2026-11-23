import { ArrowRight, BarChart3 } from 'lucide-react';
import { useReveal } from './Section';

type HeroTranslations = {
  name: string;
  title: string;
  tagline: string;
  projects: string;
  contact: string;
  insight: string;
  decisions: string;
  visualLabel: string;
};

function AnalyticsVisual({
  translations,
}: {
  translations: HeroTranslations;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="relative aspect-[1.15/1] w-full">

        {/* Ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />

        {/* Decorative data points */}
        <span className="absolute left-[8%] top-[27%] h-2.5 w-2.5 rounded-full bg-accent-light/90 shadow-[0_0_18px_rgba(92,163,178,0.6)] animate-[pulse_5s_ease-in-out_infinite]" />

        <span className="absolute right-[9%] top-[19%] h-2.5 w-2.5 rounded-full bg-accent-light/90 shadow-[0_0_18px_rgba(92,163,178,0.6)] animate-[pulse_6s_ease-in-out_infinite]" />

        <span className="absolute left-[10%] bottom-[23%] h-2 w-2 rounded-full bg-accent/90 shadow-[0_0_16px_rgba(92,163,178,0.5)] animate-[pulse_5.5s_ease-in-out_infinite]" />

        <span className="absolute right-[17%] bottom-[10%] h-2.5 w-2.5 rounded-full bg-accent-light/90 shadow-[0_0_18px_rgba(92,163,178,0.5)] animate-[pulse_6.5s_ease-in-out_infinite]" />

        {/* Soft grid */}
        <div className="absolute bottom-[14%] left-[10%] right-[10%] top-[18%] rounded-[2rem] border border-accent/[0.08] bg-accent/[0.015]" />

        <div className="absolute left-[15%] right-[15%] top-[27%] h-px bg-accent/[0.07]" />
        <div className="absolute left-[15%] right-[15%] top-[46%] h-px bg-accent/[0.07]" />
        <div className="absolute left-[15%] right-[15%] top-[65%] h-px bg-accent/[0.07]" />

        {/* Chart bars */}
        <div className="absolute bottom-[18%] left-[17%] right-[17%] flex h-[48%] items-end justify-center gap-3 sm:gap-5">
          <div className="h-[42%] w-8 rounded-t-md border border-accent/40 bg-gradient-to-t from-accent/[0.03] to-accent/20 sm:w-11 animate-[pulse_7s_ease-in-out_infinite]" />

          <div className="h-[63%] w-8 rounded-t-md border border-accent/45 bg-gradient-to-t from-accent/[0.03] to-accent/25 sm:w-11 animate-[pulse_8s_ease-in-out_infinite]" />

          <div className="h-[51%] w-8 rounded-t-md border border-accent/40 bg-gradient-to-t from-accent/[0.03] to-accent/20 sm:w-11 animate-[pulse_7.5s_ease-in-out_infinite]" />

          <div className="h-[82%] w-8 rounded-t-md border border-accent/60 bg-gradient-to-t from-accent/[0.04] to-accent/30 shadow-[0_0_24px_rgba(92,163,178,0.08)] sm:w-11 animate-[pulse_8.5s_ease-in-out_infinite]" />

          <div className="h-[61%] w-8 rounded-t-md border border-accent/40 bg-gradient-to-t from-accent/[0.03] to-accent/22 sm:w-11 animate-[pulse_7.8s_ease-in-out_infinite]" />
        </div>

        {/* Growth line */}
        <svg
          viewBox="0 0 620 360"
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M105 258
               C150 246 176 254 215 231
               C255 207 275 165 320 174
               C365 183 384 212 421 191
               C458 170 462 131 503 141
               C540 150 551 112 585 70"
            stroke="rgba(154, 207, 218, 0.95)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle
            cx="585"
            cy="70"
            r="6"
            fill="rgba(154, 207, 218, 1)"
          />

          <circle
            cx="585"
            cy="70"
            r="14"
            fill="rgba(92, 163, 178, 0.08)"
            className="animate-[pulse_5s_ease-in-out_infinite]"
          />
        </svg>

        {/* Floating insight card */}
        <div className="absolute right-[5%] top-[10%] rounded-2xl border border-accent/20 bg-ink-card/75 px-3 py-2.5 shadow-card backdrop-blur-md sm:px-4 sm:py-3 animate-[pulse_8s_ease-in-out_infinite]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <BarChart3 size={14} />
            </span>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-wider text-text-faint">
                {translations.insight}
              </p>

              <p className="mt-0.5 text-[11px] font-semibold text-accent-light sm:text-xs">
                {translations.decisions}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom data label */}
        <div className="absolute bottom-[6%] left-[7%] rounded-full border border-ink-line bg-ink-card/70 px-3 py-1.5 backdrop-blur-md sm:px-4">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-text-faint sm:text-[10px]">
            {translations.visualLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero({
  translations,
}: {
  translations: HeroTranslations;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-28"
    >
      {/* Background waves */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-18%] top-[12%] h-[260px] w-[70%] rounded-[50%] border border-accent/[0.06] blur-[1px] sm:h-[320px]" />

        <div className="absolute right-[-25%] top-[48%] h-[280px] w-[75%] rounded-[50%] border border-accent/[0.05] blur-[1px] sm:h-[340px]" />

        <div className="absolute bottom-[-5%] left-[-20%] h-[240px] w-[70%] rounded-[50%] border border-accent/[0.04] blur-[1px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16"
      >
        {/* Visual */}
        <div
          className={`order-1 w-full transition-all delay-150 duration-1000 ease-out lg:order-2 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <AnalyticsVisual translations={translations} />
        </div>

        {/* Text */}
        <div
          className={`order-2 w-full transition-all duration-1000 ease-out lg:order-1 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Role badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(92,163,178,0.7)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-light sm:text-xs">
              {translations.title}
            </span>
          </div>

          {/* Name */}
          <h1 className="max-w-[700px] whitespace-nowrap font-display text-[clamp(2.6rem,8vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-text sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.5rem]">
            {translations.name}
          </h1>

          {/* Tagline */}
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-accent-light sm:mt-7 sm:text-xl lg:text-[1.45rem]">
            {translations.tagline}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:mt-9">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-card sm:px-7 sm:py-4 sm:text-base"
            >
              {translations.projects}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 rtl:rotate-180"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-accent/35 bg-transparent px-6 py-3.5 text-sm font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-text sm:px-7 sm:py-4 sm:text-base"
            >
              {translations.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
