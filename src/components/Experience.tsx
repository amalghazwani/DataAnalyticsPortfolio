import { BriefcaseBusiness, GraduationCap, Award } from 'lucide-react';
import { education, experience, certifications } from '../data/content';
import type { Language } from '../data/translations';
import { SectionHeading, useReveal } from './Section';

type ExperienceTranslations = {
  eyebrow: string;
  title: string;
  education: string;
  degree: string;
  gpa: string;
  honors: string;
  certifications: string;
};

export default function Experience({ translations, language }: { translations: ExperienceTranslations; language: Language }) {
  const isArabic = language === 'ar';
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-pad">
      <div ref={ref}>
        <div className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <SectionHeading eyebrow={translations.eyebrow} title={translations.title} />

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative">
              <div className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-accent/20 via-accent/55 to-accent/20 rtl:left-auto rtl:right-[15px]" />
              <div className="space-y-7">
                {[...experience].reverse().map((item) => (
                  <article key={item.company} className="group relative pl-12 rtl:pl-0 rtl:pr-12">
                    <div className="absolute left-[8px] top-2 h-[15px] w-[15px] rounded-full border-2 border-accent/70 bg-ink shadow-[0_0_0_5px_rgba(90,134,168,0.08)] transition-all duration-300 group-hover:scale-125 group-hover:bg-accent rtl:left-auto rtl:right-[8px]" />
                    <div className="rounded-2xl border border-ink-line bg-ink-card/55 p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/35 group-hover:shadow-card">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] font-semibold tracking-[0.16em] text-accent">{item.period}</span>
                        <BriefcaseBusiness size={16} className="text-accent" />
                      </div>
                      <h3 className="mt-3 font-display text-xl font-medium text-text">{isArabic ? item.roleAr : item.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-accent-light">{item.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">{isArabic ? item.summaryAr : item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-4">
      </div>
    </section>
  );
}
