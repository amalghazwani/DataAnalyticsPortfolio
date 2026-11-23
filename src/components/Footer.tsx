import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { profile, navLinks } from '../data/content';

type FooterTranslations = {
  copyright: string;
};

export default function Footer({
  translations,
}: {
  translations: FooterTranslations;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="border-t border-ink-line/60">
      <div className="container-wide px-6 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-5">

          {/* Footer controls */}
          <div className="flex items-center gap-3">

            {/* Navigation menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent-light"
              >
                {menuOpen ? (
                  <X size={16} />
                ) : (
                  <Menu size={16} />
                )}
              </button>

              {menuOpen && (
                <div className="absolute bottom-12 left-1/2 z-20 w-48 -translate-x-1/2 rounded-2xl border border-ink-line bg-ink-card/95 p-2 shadow-card backdrop-blur-md">
                  <nav>
                    <ul className="flex flex-col">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-xl px-4 py-2.5 text-xs font-medium text-text-muted transition-all duration-200 hover:bg-accent/10 hover:text-accent-light"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}
            </div>

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent-light"
            >
              <Mail size={15} />
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent-light"
            >
              <Linkedin size={15} />
            </a>

            {/* GitHub */}
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
