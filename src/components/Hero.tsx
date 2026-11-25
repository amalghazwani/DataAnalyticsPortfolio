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
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32 lg:pt-40">
      <div ref={ref} className="container-wide relative z-10">
        <div className={`max-w-4xl transition-all duration-900 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="font-display text-[clamp(3.4rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.055em] text-text">
            {translations.name}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-[1.8] text-text-muted sm:mt-9 sm:text-lg">
            {translations.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-ink-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2F4F7] hover:shadow-card sm:px-7"
            >
              {translations.projects}
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/80 bg-white px-6 py-3.5 text-sm font-semibold text-ink-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2F4F7] hover:shadow-card sm:px-7"
            >
              {translations.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
