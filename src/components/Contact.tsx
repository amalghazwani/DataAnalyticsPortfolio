import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/content';
import { SectionHeading, useReveal } from './Section';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Amal Ghazwani',
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'amalghazwani',
    href: profile.github,
    icon: Github,
  },
] as const;

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-pad">
      <div ref={ref}>
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <SectionHeading eyebrow="Contact" title="Where to reach me" />

          <div className="grid gap-4 sm:grid-cols-3">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={
                  href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
                }
                className="group relative flex flex-col rounded-2xl border border-ink-line bg-ink-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink-deep">
                  <Icon size={19} strokeWidth={1.7} />
                </span>

                <span className="text-xs font-semibold uppercase tracking-widest text-text-faint">
                  {label}
                </span>

                <span className="mt-1 break-all text-sm font-semibold text-text">
                  {value}
                </span>

                <ArrowUpRight
                  size={16}
                  className="absolute right-5 top-5 text-text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-light"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}