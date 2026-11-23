import { ArrowRight } from 'lucide-react';
import { useReveal } from './Section';

type HeroTranslations = {
  name: string;
  tagline: string;
  projects: string;
  contact: string;
};

export default function Hero({
  translations,
}: {
  translations: HeroTranslations;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12 lg:pb-32 lg:pt-36"
    >
      <div
        ref={ref}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
      >
        {/* Text Content */}
        <div
          className={`max-w-2xl transition-all duration-1000 ease-out lg:max-w-xl ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Small eyebrow */}
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent-light/70 sm:text-[11px]">
            Turning data into clear insights
          </p>

          {/* Name */}
          <h1 className="font-display text-[clamp(3.4rem,8vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-text">
            <span className="block">Amal</span>
            <span className="mt-1 block italic text-accent-light">
              Ghazwani
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`mt-8 max-w-lg text-[15px] leading-8 text-text-muted transition-all delay-100 duration-1000 ease-out sm:mt-9 sm:text-base ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            {translations.tagline}
          </p>

          {/* Buttons */}
          <div
            className={`mt-8 flex flex-wrap items-center gap-3 transition-all delay-200 duration-1000 ease-out sm:mt-10 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-accent/70 bg-accent/[0.08] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/[0.16] hover:shadow-glow sm:px-7"
            >
              {translations.projects}

              <ArrowRight
                size={15}
                className="transition-transform duration-300 rtl:rotate-180"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm border border-transparent px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted transition-all duration-300 hover:text-text"
            >
              {translations.contact}
            </a>
          </div>
        </div>

        {/* Visual */}
        <div
          className={`relative flex min-h-[360px] items-center justify-center transition-all delay-200 duration-1000 ease-out sm:min-h-[430px] lg:min-h-[520px] ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Ambient glow */}
          <div className="absolute h-[230px] w-[230px] rounded-full bg-accent/[0.08] blur-[90px] sm:h-[300px] sm:w-[300px]" />

          {/* Orb */}
          <div className="relative h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] lg:h-[390px] lg:w-[390px]">
            {/* Outer glow rings */}
            <div className="absolute inset-[7%] rounded-full border border-accent/20 shadow-[0_0_70px_rgba(229,138,175,0.12)]" />

            <div className="absolute inset-[14%] rounded-full border border-accent-light/20" />

            <div className="absolute inset-[22%] rounded-full border border-accent/15" />

            {/* Curved data lines */}
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="hero-orb-gradient"
                  x1="40"
                  y1="50"
                  x2="350"
                  y2="350"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F1A9C5" stopOpacity="0.05" />
                  <stop offset="0.5" stopColor="#E58AAF" stopOpacity="0.75" />
                  <stop offset="1" stopColor="#F1A9C5" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <ellipse
                cx="200"
                cy="200"
                rx="145"
                ry="62"
                transform="rotate(-28 200 200)"
                stroke="url(#hero-orb-gradient)"
                strokeWidth="1"
              />

              <ellipse
                cx="200"
                cy="200"
                rx="145"
                ry="62"
                transform="rotate(28 200 200)"
                stroke="url(#hero-orb-gradient)"
                strokeWidth="1"
              />

              <ellipse
                cx="200"
                cy="200"
                rx="145"
                ry="62"
                transform="rotate(72 200 200)"
                stroke="url(#hero-orb-gradient)"
                strokeWidth="1"
              />

              <path
                d="M75 225 C135 120 250 105 325 190"
                stroke="#F1A9C5"
                strokeOpacity="0.55"
                strokeWidth="1"
              />

              <path
                d="M92 275 C165 185 265 155 320 105"
                stroke="#E58AAF"
                strokeOpacity="0.4"
                strokeWidth="1"
              />

              {/* Data points */}
              <circle cx="75" cy="225" r="3" fill="#F1A9C5" />
              <circle cx="325" cy="190" r="2.5" fill="#F1A9C5" />
              <circle cx="320" cy="105" r="2" fill="#E58AAF" />
              <circle cx="155" cy="170" r="2" fill="#F1A9C5" />
              <circle cx="245" cy="235" r="2" fill="#E58AAF" />
            </svg>

            {/* Center glow */}
            <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-light/30 blur-xl" />

            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-light shadow-[0_0_22px_rgba(241,169,197,0.9)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
