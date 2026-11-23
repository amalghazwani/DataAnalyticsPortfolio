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
    <div className="relative mx-auto w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px]">
      <div className="relative aspect-[1.35/1] w-full">

        {/* Soft glow */}
        <div className="absolute left-1/2 top-1/2 h-[45%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.045] blur-3xl" />

        {/* Minimal data points */}
        <span className="absolute left-[12%] top-[34%] h-2 w-2 rounded-full bg-accent-light/75 shadow-[0_0_14px_rgba(92,163,178,0.45)]" />

        <span className="absolute right-[13%] bottom-[27%] h-2 w-2 rounded-full bg-accent-light/75 shadow-[0_0_14px_rgba(92,163,178,0.45)]" />

        {/* Chart area */}
        <div className="absolute bottom-[13%] left-[7%] right-[7%] top-[17%]">

          {/* Very subtle grid */}
          <div className="absolute inset-0 rounded-[2rem] border border-accent/[0.055]" />

          <div className="absolute left-[7%] right-[7%] top-[30%] h-px bg-accent/[0.045]" />
          <div className="absolute left-[7%] right-[7%] top-[58%] h-px bg-accent/[0.045]" />

          {/* Bars */}
          <div className="absolute bottom-[8%] left-[10%] right-[10%] flex h-[52%] items-end justify-between gap-3 sm:gap-5">

            <div
              className="w-full max-w-[42px] rounded-t-md border border-accent/25 bg-accent/[0.045]"
              style={{ height: '38%' }}
            />

            <div
              className="w-full max-w-[42px] rounded-t-md border border-accent/30 bg-accent/[0.07]"
              style={{ height: '58%' }}
            />

            <div
              className="w-full max-w-[42px] rounded-t-md border border-accent/25 bg-accent/[0.05]"
              style={{ height: '46%' }}
            />

            <div
              className="w-full max-w-[42px] rounded-t-md border border-accent/40 bg-accent/[0.10]"
              style={{ height: '76%' }}
            />

            <div
              className="w-full max-w-[42px] rounded-t-md border border-accent/30 bg-accent/[0.06]"
              style={{ height: '59%' }}
            />
          </div>

          {/* Growth line */}
          <svg
            viewBox="0 0 620 360"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M 35 278
                C 90 270, 125 265, 165 242
                C 210 216, 230 164, 275 173
                C 320 182, 340 222, 382 211
                C 425 200, 438 145, 475 151
                C 515 157, 540 125, 585 72
              "
              stroke="rgba(154, 207, 218, 0.9)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Insight card */}
          <div className="absolute right-[3%] top-[0%] rounded-2xl border border-accent/15 bg-ink-card/85 px-3 py-2.5 shadow-card backdrop-blur-md sm:px-4 sm:py-3">
            <div className="flex items-center gap-2.5">

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BarChart3 size={14} strokeWidth={1.8} />
              </span>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-text-faint">
                  {translations.insight}
                </p>

                <p className="mt-0.5 text-[10px] font-semibold text-accent-light sm:text-xs">
                  {translations.decisions}
                </p>
              </div>

            </div>
          </div>

          {/* Small point near the end of the line */}
          <span className="absolute right-[4%] top-[28%] h-2 w-2 rounded-full bg-accent-light/75 shadow-[0_0_12px_rgba(92,163,178,0.45)]" />

        </div>

        {/* Bottom label */}
        <div className="absolute bottom-[2%] left-[7%] rounded-full border border-ink-line/70 bg-ink-card/60 px-3 py-1.5 backdrop-blur-md sm:px-4">
          <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-text-faint sm:text-[9px]">
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
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-5 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16"
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
