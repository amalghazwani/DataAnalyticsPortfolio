import { ArrowRight } from 'lucide-react';
import { useReveal } from './Section';

type HeroTranslations = {
  name: string;
  tagline: string;
  projects: string;
  contact: string;
};

function MagneticButton({
  children,
  href,
  primary = false,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    event.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = (event: React.PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = '';
  };

  return (
    <a
      href={href}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={primary
        ? 'group relative inline-flex min-w-[180px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#5A86A8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(90,134,168,0.18)] transition-[transform,background-color,box-shadow] duration-200 hover:bg-[#6B96B5] hover:shadow-[0_12px_34px_rgba(90,134,168,0.28)] sm:min-w-0 sm:px-8'
        : 'inline-flex min-w-[180px] items-center justify-center rounded-full border border-[#5A86A8]/45 bg-white px-7 py-3.5 text-sm font-semibold text-ink-deep shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:border-[#5A86A8]/70 hover:bg-[#F5F7F9] hover:shadow-[0_10px_28px_rgba(90,134,168,0.14)] sm:min-w-0 sm:px-8'}
    >
      {primary && <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />}
      <span className="relative">{children}</span>
    </a>
  );
}

export default function Hero({ translations }: { translations: HeroTranslations }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 md:px-10 md:pb-32 md:pt-36 lg:px-12 lg:pb-36 lg:pt-40"
    >
      <div
        ref={ref}
        className={`container-wide relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center transition-all duration-900 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      >
        <div className="w-full">
          <div
            className="mx-auto mb-7 h-px w-16 bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 sm:mb-8"
            style={{ animation: visible ? 'hero-line-in 1.1s ease-out 0.12s forwards' : 'none' }}
          />
          <h1 className="whitespace-nowrap font-display text-[clamp(2.8rem,10vw,7rem)] font-medium leading-[0.92] tracking-[-0.055em] text-text sm:text-[clamp(3.4rem,8vw,6.8rem)] md:text-[clamp(4rem,7vw,7rem)] lg:text-[clamp(5rem,7vw,7.5rem)]">
            {translations.name}
          </h1>

          <p className="mx-auto mt-7 max-w-[760px] text-[15px] leading-[1.85] text-text-muted sm:mt-8 sm:text-base md:mt-9 md:text-lg">
            {translations.tagline}
          </p>

          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4 md:mt-10"
            style={{ animation: visible ? 'hero-actions-in 0.9s ease-out 0.38s both' : 'none' }}
          >
            <MagneticButton href="#projects" primary>
              {translations.projects}
              <ArrowRight size={17} className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </MagneticButton>

            <MagneticButton href="#contact">
              {translations.contact}
            </MagneticButton>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes hero-line-in {
          0% { transform: scaleX(0.15); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: scaleX(1); opacity: 0.75; }
        }
        @keyframes hero-actions-in {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>
    </section>
  );
}
