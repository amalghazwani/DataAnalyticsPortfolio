import { ArrowRight } from 'lucide-react';
import { useReveal } from './Section';

type HeroTranslations = {
  name: string;
  title: string;
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
      className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
    >
      {/* Soft background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[20%] h-[420px] w-[70%] -translate-x-1/2 rounded-full bg-accent/[0.025] blur-[110px]" />

        <div className="absolute left-[20%] top-[35%] h-[220px] w-[30%] rounded-full bg-accent/[0.018] blur-[90px]" />

        <div className="absolute right-[15%] top-[45%] h-[240px] w-[30%] rounded-full bg-white/[0.012] blur-[100px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Main heading */}
        <div
          className={`transition-all duration-900 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <h1 className="font-display text-[clamp(2.7rem,9vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-text">
            <span className="block">
              {translations.name}
            </span>

            <span className="mt-2.5 block bg-gradient-to-r from-[#77747A] via-[#FFFFFF] to-[#A7A4A8] bg-clip-text text-transparent sm:mt-3">
              {translations.title}
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className={`mt-6 max-w-2xl text-[15px] leading-relaxed text-text-muted transition-all delay-100 duration-900 ease-out sm:mt-7 sm:text-base ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          {translations.tagline}
        </p>

        {/* Buttons */}
        <div
          className={`mt-7 flex flex-wrap items-center justify-center gap-3 transition-all delay-200 duration-900 ease-out sm:mt-8 ${
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
      </div>
    </section>
  );
}
