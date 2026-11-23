import { Github, Linkedin, Mail } from 'lucide-react';
import { profile, navLinks } from '../data/content';

type FooterTranslations = {
  copyright: string;
};

export default function Footer({
  translations,
}: {
  translations: FooterTranslations;
}) {
  return (
    <footer className="border-t border-ink-line/60">
      <div className="container-wide px-6 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-5">
          {/* Navigation */}
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-text-muted transition-colors hover:text-accent-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent-light"
            >
              <Mail size={15} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent-light"
            >
              <Linkedin size={15} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent-light"
            >
              <Github size={15} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-text-faint">
            © {new Date().getFullYear()} {translations.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
