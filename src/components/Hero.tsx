import { ArrowRight, BarChart3, TrendingUp } from 'lucide-react';
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
    <div className="relative mx-auto mt-2 w-full max-w-[760px] sm:mt-4">
      <div className="relative h-[220px] sm:h-[250px]">

        {/* Soft pink atmosphere */}
        <div className="absolute left-1/2 top-1/2 h-[65%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[80px]" />

        {/* Main visual */}
        <div className="absolute inset-x-[5%] top-[12%] bottom-[10%] overflow-hidden rounded-[2rem] border border-accent/[0.14] bg-ink-card/60 shadow-glow backdrop-blur-xl sm:inset-x-[9%]">

          {/* Very subtle lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-[8%] right-[8%] top-1/3 h-px bg-white/[0.04]" />
            <div className="absolute left-[8%] right-[8%] top-2/3 h-px bg-white/[0.04]" />
          </div>

          {/* Label */}
          <div className="absolute left-5 top-4 flex items-center gap-2 sm:left-7">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <BarChart3 size={14} strokeWidth={1.7} />
            </span>

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-text-faint">
                {translations.insight}
              </p>

              <p className="text-[10px] font-semibold text-accent-light sm:text-xs">
                {translations.decisions}
              </p>
            </div>
          </div>

          {/* Data visualization */}
          <svg
            viewBox="0 0 800 260"
            className="absolute inset-x-[7%] bottom-[15%] h-[55%] w-[86%]"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="silverLine"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#77747A" />
                <stop offset="45%" stopColor="#D8D6D9" />
                <stop offset="65%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#A7A4A8" />
              </linearGradient>

              <linearGradient
                id="pinkLine"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#C97899" />
                <stop offset="55%" stopColor="#E58AAF" />
                <stop offset="100%" stopColor="#F1A9C5" />
              </linearGradient>
            </defs>

            {/* Silver supporting line */}
            <path
              d="M 10 205
                 C 100 198, 145 188, 215 196
                 C 285 204, 320 172, 380 178
                 C 440 184, 485 155, 540 162
                 C 605 170, 655 135, 790 145"
              stroke="url(#silverLine)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Main pink trend */}
            <path
              d="M 10 210
                 C 85 205, 125 188, 185 195
                 C 245 202, 280 160, 335 170
                 C 390 180, 420 125, 480 142
                 C 540 159, 570 108, 630 120
                 C 690 132, 735 82, 790 48"
              stroke="url(#pinkLine)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Data points */}
            <circle cx="185" cy="195" r="4" fill="#E58AAF" />
            <circle cx="335" cy="170" r="4" fill="#F1A9C5" />
            <circle cx="480" cy="142" r="4" fill="#F1A9C5" />
            <circle cx="630" cy="120" r="4" fill="#FFFFFF" />
            <circle cx="790" cy="48" r="5" fill="#E58AAF" />

            {/* Final point glow */}
            <circle
              cx="790"
              cy="48"
              r="13"
              fill="none"
              stroke="#E58AAF"
              strokeWidth="1"
              opacity="0.25"
            />
          </svg>

          {/* Bottom labels */}
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between sm:bottom-5 sm:left-7 sm:right-7">

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-text-faint">
                Analyze
              </p>

              <p className="mt-1 text-[10px] font-medium text-text-muted">
                Patterns
              </p>
            </div>

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-text-faint">
                Visualize
              </p>

              <p className="mt-1 text-[10px] font-medium text-text-muted">
                Trends
              </p>
            </div>

            <div className="text-right">
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-text-faint">
                Insight
              </p>

              <p className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold text-accent-light">
                <TrendingUp size={11} />
                Decisions
              </p>
            </div>

          </div>
        </div>

        {/* Small floating point */}
        <span className="absolute right-[8%] top-[8%] h-2 w-2 rounded-full bg-accent-light shadow-[0_0_16px_rgba(229,138,175,0.6)] sm:right-[13%]" />

        {/* Visual label */}
        <div className="absolute bottom-[-1%] left-1/2 -translate-x-1/2 rounded-full border border-ink-line/70 bg-ink-card/80 px-4 py-1.5 backdrop-blur-md">
          <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.18em] text-text-faint sm:text-[9px]">
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
      className="relative overflow-hidden px-6 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-32"
    >

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[18%] h-[420px] w-[65%] -translate-x-1/2 rounded-full bg-accent/[0.025] blur-[100px]" />

        <div className="absolute left-1/2 top-[48%] h-[280px] w-[40%] -translate-x-1/2 rounded-full bg-accent/[0.018] blur-[90px]" />

      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >

        {/* Role badge */}
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-2">

            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(229,138,175,0.7)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent-light sm:text-[10px]">
              {translations.title}
            </span>

          </div>
        </div>

        {/* Main heading */}
        <div
          className={`mt-6 transition-all delay-100 duration-900 ease-out sm:mt-7 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <h1 className="font-display text-[clamp(3rem,11vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-text">

            <span className="block">
              {translations.name}
            </span>

            <span className="mt-2 block bg-gradient-to-r from-[#77747A] via-[#FFFFFF] to-[#A7A4A8] bg-clip-text text-transparent sm:mt-3">
              {translations.title}
            </span>

          </h1>
        </div>

        {/* Tagline */}
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed text-text-muted transition-all delay-200 duration-900 ease-out sm:mt-7 sm:text-lg ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          {translations.tagline}
        </p>

        {/* Buttons */}
        <div
          className={`mt-7 flex flex-wrap items-center justify-center gap-3 transition-all delay-300 duration-900 ease-out sm:mt-8 ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >

          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-glow sm:px-7"
          >
            {translations.projects}

            <ArrowRight
              size={17}
              className="transition-transform duration-300 rtl:rotate-180"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-ink-line bg-ink-card/40 px-6 py-3.5 text-sm font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.06] hover:text-accent-light sm:px-7"
          >
            {translations.contact}
          </a>

        </div>

        {/* Analytics visual */}
        <div
          className={`w-full transition-all delay-400 duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <AnalyticsVisual translations={translations} />
        </div>

      </div>
    </section>
  );
}
