import { useEffect, useState } from 'react';
import { BarChart3, Menu, X } from 'lucide-react';
import type { Language } from '../data/translations';

type NavbarTranslations = {
  nav: {
    home: string;
    about: string;
    skills: string;
    process: string;
    projects: string;
    contact: string;
  };
};

type NavbarProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: NavbarTranslations;
};

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'process', href: '#process' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const;

export default function Navbar({
  language,
  setLanguage,
  translations,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-accent/20 bg-ink/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-ink/30 backdrop-blur-sm'
      }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between px-6 sm:px-8">

        {/* Brand */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 text-text transition-colors hover:text-accent-light"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-light transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent/20">
            <BarChart3 size={17} strokeWidth={1.8} />
          </span>

          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold tracking-tight text-text">
              Amal Ghazwani
            </p>

            <p className="text-[10px] uppercase tracking-[0.18em] text-text-faint">
              {language === 'ar' ? 'محللة بيانات' : 'Data Analyst'}
            </p>
          </div>
        </a>

        {/* Controls */}
        <div
          dir="ltr"
          className="flex items-center gap-2"
        >

          {/* Navigation Menu */}
          <div
            className={
              language === 'ar'
                ? 'order-1'
                : 'order-2'
            }
          >
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border bg-ink-card/50 text-text transition-all duration-300 ${
                  open
                    ? 'border-accent/50 bg-accent/10 text-accent-light'
                    : 'border-ink-line hover:border-accent/40 hover:bg-accent/10 hover:text-accent-light'
                }`}
                aria-label={
                  open
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={open}
              >
                {open ? <X size={19} /> : <Menu size={19} />}
              </button>

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute right-0 top-12 z-50 w-52 rounded-2xl border border-ink-line bg-ink-card/95 p-2 shadow-card backdrop-blur-xl">
                  <nav>
                    <ul className="flex flex-col gap-1">
                      {navItems.map((item) => {
                        const isActive =
                          activeSection ===
                          item.href.replace('#', '');

                        return (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                isActive
                                  ? 'bg-accent/12 text-accent-light ring-1 ring-accent/25'
                                  : 'text-text-muted hover:bg-accent/8 hover:text-text'
                              }`}
                            >
                              <span>
                                {translations.nav[item.key]}
                              </span>

                              {isActive && (
                                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(92,163,178,0.7)]" />
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Language Switcher */}
          <div
            className={
              language === 'ar'
                ? 'order-2'
                : 'order-1'
            }
          >
            <div className="flex items-center rounded-full border border-ink-line bg-ink-card/50 p-1">

              <button
                type="button"
                onClick={() => changeLanguage('en')}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-accent/15 text-accent-light'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => changeLanguage('ar')}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all duration-300 ${
                  language === 'ar'
                    ? 'bg-accent/15 text-accent-light'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                العربية
              </button>

            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}
