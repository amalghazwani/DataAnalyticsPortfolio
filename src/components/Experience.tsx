import { BriefcaseBusiness, GraduationCap, Award } from 'lucide-react';
import { education, experience, certifications } from '../data/content';
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

export default function Experience({ translations }: { translations: ExperienceTranslations }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-pad">
      <div ref={ref}>
        <div className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <SectionHeading eyebrow={translations.eyebrow} title={translations.title} />

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-4">
              {experience.map((item, index) => (
                <article
                  key={item.company}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className={`group relative overflow-hidden rounded-2xl border border-ink-line bg-ink-card/55 p-6 transition-all duration-700 hover:-translate-y-1 hover:border-accent/35 hover:shadow-card ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent/[0.045] blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-accent">
                          <BriefcaseBusiness size={16} />
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">{item.period}</span>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-medium text-text">{item.role}</h3>
                        <p className="mt-1 text-sm font-semibold text-accent-light">{item.company}</p>
                      </div>
                      <span className="rounded-full border border-ink-line bg-ink/30 px-3 py-1.5 text-[10px] text-text-faint">{item.location}</span>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-4">
              <article className="rounded-2xl border border-ink-line bg-ink-card/55 p-6">
                <div className="flex items-center gap-3 text-accent">
                  <GraduationCap size={19} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">{translations.education}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-medium leading-tight text-text">{education.degree}</h3>
                <p className="mt-2 text-sm font-semibold text-accent-light">{education.university}</p>
                <p className="mt-1 text-xs text-text-faint">{education.period}</p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-ink-line bg-ink/30 p-3">
                    <span className="block text-[9px] uppercase tracking-wider text-text-faint">{translations.gpa}</span>
                    <span className="mt-1 block text-sm font-bold text-text">{education.gpa}</span>
                  </div>
                  <div className="rounded-xl border border-ink-line bg-ink/30 p-3">
                    <span className="block text-[9px] uppercase tracking-wider text-text-faint">{translations.honors}</span>
                    <span className="mt-1 block text-sm font-bold text-text">{education.distinction}</span>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-ink-line bg-ink-card/55 p-6">
                <div className="flex items-center gap-3 text-accent">
                  <Award size={18} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">{translations.certifications}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {certifications.map((item) => (
                    <div key={item.name} className="border-l border-accent/30 pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3">
                      <p className="text-xs font-semibold leading-relaxed text-text">{item.name}</p>
                      <p className="mt-0.5 text-[10px] text-text-faint">{item.provider} · {item.period}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
