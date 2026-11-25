import { useEffect, useState } from 'react';
import { BriefcaseBusiness, GraduationCap, Award, FolderKanban } from 'lucide-react';
import { timeline } from '../data/content';
import type { Language } from '../data/translations';
import { SectionHeading, useReveal } from './Section';

type ExperienceTranslations = {
  eyebrow: string;
  title: string;
};

const iconMap = {
  experience: BriefcaseBusiness,
  education: GraduationCap,
  certification: Award,
  project: FolderKanban,
} as const;

export default function Experience({ translations, language }: { translations: ExperienceTranslations; language: Language }) {
  const isArabic = language === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-timeline-item]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.getAttribute('data-timeline-item')));
        });
      },
      { rootMargin: '-38% 0px -42% 0px', threshold: 0 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section-pad">
      <div ref={ref}>
        <div className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <SectionHeading eyebrow={translations.eyebrow} title={translations.title} />

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/45 to-transparent md:block" />

              <div className="space-y-10 md:space-y-14">
                {timeline.map((item, index) => {
                  const Icon = iconMap[item.type];
                  const active = activeIndex === index;
                  const side = index % 2 === 0 ? 'left' : 'right';

                  return (
                    <article
                      key={item.date + item.title}
                      data-timeline-item={index}
                      className="relative grid items-center md:grid-cols-2 md:min-h-[170px]"
                    >
                      <div className={`relative ${side === 'left' ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                        <div
                          className={`rounded-2xl border bg-ink-card/55 p-5 transition-all duration-500 ${active ? 'border-accent/45 shadow-[0_16px_50px_rgba(90,134,168,0.10)] -translate-y-1' : 'border-ink-line'}`}
                        >
                          <div className={`flex items-center gap-2 text-accent ${side === 'left' ? 'md:justify-end' : ''}`}>
                            <span className="text-[10px] font-semibold tracking-[0.18em]">{item.date}</span>
                            <Icon size={15} className={active ? 'opacity-100' : 'opacity-60'} />
                          </div>

                          <h3 className="mt-3 font-display text-xl font-medium leading-tight text-text">
                            {isArabic ? item.titleAr : item.title}
                          </h3>

                          <p className="mt-2 text-xs font-semibold text-accent-light">
                            {isArabic ? item.detailAr : item.detail}
                          </p>

                          {'summary' in item && item.summary && (
                            <p className="mt-3 text-sm leading-relaxed text-text-muted">
                              {isArabic ? item.summaryAr : item.summary}
                            </p>
                          )}
                        </div>
                      </div>

                      <div
                        className={`absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex h-11 w-11 items-center justify-center rounded-full border bg-ink transition-all duration-500 ${active ? 'border-accent bg-accent/10 shadow-[0_0_0_8px_rgba(90,134,168,0.09),0_0_28px_rgba(90,134,168,0.20)] scale-110' : 'border-accent/35'}`}
                      >
                        <span className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${active ? 'bg-accent scale-125' : 'bg-accent/45'}`} />
                      </div>

                      <div className="hidden md:block" />
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
