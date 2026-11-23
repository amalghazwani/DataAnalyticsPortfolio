import { BarChart3, Sparkles, Table2 } from 'lucide-react';
import { SectionHeading, useReveal } from './Section';

type AboutTranslations = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: {
    title: string;
    text: string;
  }[];
};

const highlightIcons = [Sparkles, BarChart3, Table2];

export default function About({
  translations,
}: {
  translations: AboutTranslations;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad">
      <div ref={ref}>

        {/* About Heading */}
        <div
          className={`
            mb-8
            transition-all
            duration-700
            ease-out
            ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }
          `}
        >
          <SectionHeading
            eyebrow={translations.eyebrow}
            title={translations.title}
          />
        </div>

        {/* Main Content */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-12">

          {/* Left Side */}
          <div className="max-w-xl">

            {/* Text */}
            <div className="space-y-5 text-base leading-relaxed text-text-muted md:text-lg">
              {translations.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`
                    transition-all
                    duration-700
                    ease-out
                    ${
                      visible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-5 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: `${250 + index * 140}ms`,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Abstract Data Waves */}
            <div
              className={`
                relative
                mt-8
                h-[135px]
                w-full
                overflow-hidden
                transition-all
                duration-1000
                ease-out
                ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-5 opacity-0'
                }
              `}
              style={{ transitionDelay: '520ms' }}
            >
              {/* Soft ambient glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-[12%]
                  top-[15%]
                  h-24
                  w-72
                  rounded-full
                  bg-accent/[0.055]
                  blur-[55px]
                "
              />

              <svg
                viewBox="0 0 520 135"
                className="absolute inset-0 h-full w-full overflow-visible"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Main flowing wave */}
                <path
                  d="
                    M-20 65
                    C55 20, 105 18, 170 48
                    S285 105, 355 76
                    S445 35, 540 18
                  "
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  className="text-accent/40"
                />

                {/* Parallel wave */}
                <path
                  d="
                    M-20 73
                    C55 28, 105 26, 170 56
                    S285 113, 355 84
                    S445 43, 540 26
                  "
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className="text-accent/25"
                />

                {/* Lower flowing wave */}
                <path
                  d="
                    M-20 82
                    C58 48, 108 42, 176 70
                    S286 122, 360 96
                    S448 62, 540 42
                  "
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className="text-accent/20"
                />

                {/* Fine secondary wave */}
                <path
                  d="
                    M-20 55
                    C58 12, 112 10, 174 38
                    S286 92, 350 65
                    S445 25, 540 8
                  "
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  className="text-accent-light/20"
                />

                {/* Very subtle lower wave */}
                <path
                  d="
                    M-20 91
                    C60 58, 112 55, 180 82
                    S292 132, 365 105
                    S450 74, 540 55
                  "
                  stroke="currentColor"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  className="text-accent/15"
                />

                {/* Small glowing points */}
                <circle
                  cx="170"
                  cy="48"
                  r="2"
                  className="fill-accent-light"
                />

                <circle
                  cx="355"
                  cy="76"
                  r="2"
                  className="fill-accent"
                />

                <circle
                  cx="445"
                  cy="35"
                  r="1.8"
                  className="fill-accent-light"
                />
              </svg>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="space-y-4">
            {translations.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index];

              return (
                <div
                  key={highlight.title}
                  className={`
                    group
                    flex
                    gap-4
                    rounded-2xl
                    border
                    border-ink-line
                    bg-ink-card/60
                    p-5
                    transition-all
                    duration-1000
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:-translate-y-1
                    hover:border-accent/40
                    hover:shadow-card
                    ${
                      visible
                        ? 'translate-y-0 opacity-100 [clip-path:inset(0_0_0_0)]'
                        : 'translate-y-4 opacity-0 [clip-path:inset(100%_0_0_0)]'
                    }
                  `}
                  style={{
                    transitionDelay: `${420 + index * 180}ms`,
                  }}
                >
                  <span
                    className="
                      mt-0.5
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-accent/15
                      text-accent
                      transition-all
                      duration-300
                      group-hover:bg-accent
                      group-hover:text-ink-deep
                      group-hover:shadow-[0_0_20px_rgba(92,163,178,0.25)]
                    "
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <div>
                    <h3 className="font-sans text-base font-semibold text-text">
                      {highlight.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                      {highlight.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
