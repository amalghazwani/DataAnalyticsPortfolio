import { ArrowRight } from 'lucide-react';
import { useReveal } from './Section';

type HeroTranslations = {
  name: string;
  tagline: string;
  projects: string;
  contact: string;
};

export default function Hero({ translations }: { translations: HeroTranslations }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12 lg:pb-32 lg:pt-36">
      <div ref={ref} className="container-wide relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className={`max-w-3xl transition-all duration-900 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="font-display text-[clamp(3.2rem,8vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-text">
            {translations.name}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-[1.8] text-text-muted sm:mt-9 sm:text-lg">
            {translations.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#5A86A8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(90,134,168,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6B96B5] hover:shadow-[0_12px_34px_rgba(90,134,168,0.28)] sm:px-8"
            >
              {translations.projects}
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#5A86A8]/45 bg-white px-7 py-3.5 text-sm font-semibold text-ink-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5A86A8]/70 hover:bg-[#F5F7F9] hover:shadow-[0_10px_28px_rgba(90,134,168,0.14)] sm:px-8"
            >
              {translations.contact}
            </a>
          </div>
        </div>

        <div className={`relative min-h-[260px] transition-all delay-150 duration-1000 ease-out sm:min-h-[320px] lg:min-h-[380px] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A86A8]/[0.035] blur-[90px] sm:h-72 sm:w-96" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 380" fill="none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="hero-chart-line" x1="40" y1="190" x2="610" y2="190" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5A86A8" stopOpacity="0" />
                <stop offset="0.22" stopColor="#5A86A8" stopOpacity="0.48" />
                <stop offset="0.52" stopColor="#7A9CB7" stopOpacity="0.72" />
                <stop offset="0.8" stopColor="#5A86A8" stopOpacity="0.42" />
                <stop offset="1" stopColor="#5A86A8" stopOpacity="0" />
              </linearGradient>
              <filter id="hero-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path d="M25 245 C115 205 155 235 225 190 S335 135 405 184 S510 230 615 105" stroke="url(#hero-chart-line)" strokeWidth="1.4" filter="url(#hero-soft-glow)" />
            <path d="M35 275 C130 250 175 270 245 228 S355 205 430 225 S530 260 610 208" stroke="#5A86A8" strokeOpacity="0.12" strokeWidth="1" />
            <path d="M35 115 C130 95 185 120 255 105 S380 70 450 105 S545 125 610 92" stroke="#7A9CB7" strokeOpacity="0.07" strokeWidth="1" />
            <g fill="#7A9CB7" filter="url(#hero-soft-glow)">
              <circle cx="225" cy="190" r="2.5" opacity="0.55" />
              <circle cx="335" cy="135" r="2.5" opacity="0.7" />
              <circle cx="405" cy="184" r="2.5" opacity="0.55" />
              <circle cx="510" cy="230" r="2.5" opacity="0.45" />
              <circle cx="615" cy="105" r="3" opacity="0.8" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}