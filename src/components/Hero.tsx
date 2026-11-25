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
      className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
    >
      <div
        ref={ref}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <div
          className={`transition-all duration-900 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <h1 className="font-display text-[clamp(2.5rem,8vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-text">
            {translations.name}
          </h1>
        </div>

        <p
          className={`mt-7 max-w-2xl text-[15px] leading-relaxed text-text-muted transition-all delay-100 duration-900 ease-out sm:mt-8 sm:text-base ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          {translations.tagline}
        </p>

        <div
          className={`mt-8 flex flex-wrap items-center justify-center gap-3 transition-all delay-200 duration-900 ease-out sm:mt-9 ${
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

        <div
          aria-hidden="true"
          className="mt-10 h-1 w-48 rounded-full bg-accent opacity-100 shadow-glow"
        />
      </div>
    </section>
  );
}
