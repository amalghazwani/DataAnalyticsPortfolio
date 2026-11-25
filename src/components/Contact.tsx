import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/content';
import { SectionHeading, useReveal } from './Section';

type ContactTranslations = {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
};

const contactItems = [
  { key: 'email', icon: Mail, href: `mailto:${profile.email}` },
  { key: 'linkedin', icon: Linkedin, href: profile.linkedin },
  { key: 'github', icon: Github, href: profile.github },
] as const;

export default function Contact({ translations }: { translations: ContactTranslations }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const labels = {
    email: translations.email,
    linkedin: translations.linkedin,
    github: translations.github,
  };

  return (
    <section id="contact" className="section-pad">
      <div ref={ref}>
        <div className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow={translations.eyebrow} title={translations.title} />

            <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-ink-card/60 p-7 shadow-card sm:p-10 lg:p-12">
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-accent/[0.08] blur-[90px]" />
              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#1B5A91]/[0.08] blur-[90px]" />

              <div className="relative">
                <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">{translations.description}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {contactItems.map(({ key, icon: Icon, href }, index) => (
                    <a
                      key={key}
                      href={href}
                      target={key === 'email' ? undefined : '_blank'}
                      rel={key === 'email' ? undefined : 'noopener noreferrer'}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      className={`group flex min-h-[96px] items-center gap-4 rounded-xl border border-ink-line bg-ink/35 px-5 py-4 transition-all duration-700 hover:-translate-y-1 hover:border-accent/35 hover:bg-accent/[0.05] hover:shadow-card ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/15 bg-accent/[0.07] text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-ink-deep">
                        <Icon size={19} strokeWidth={1.7} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold text-text">{labels[key]}</span>
                        <span className="mt-1 block truncate text-[11px] text-text-faint">
                          {key === 'email' ? profile.email : key === 'linkedin' ? 'LinkedIn' : 'GitHub'}
                        </span>
                      </span>
                      <ArrowUpRight size={15} className="ml-auto shrink-0 text-text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
