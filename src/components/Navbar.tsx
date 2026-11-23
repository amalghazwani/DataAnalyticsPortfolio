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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-accent/12 text-accent-light ring-1 ring-accent/25'
                        : 'text-text-muted hover:bg-accent/8 hover:text-text'
                    }`}
                  >
                    {translations.nav[item.key]}

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Language Switcher */}
          <div className="ml-3 flex items-center rounded-full border border-ink-line bg-ink-card/50 p-1">
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

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink-card/50 text-text transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-light lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-accent/10 bg-ink/95 backdrop-blur-xl lg:hidden">
          <div className="container-wide px-6 py-5 sm:px-8">

            <ul className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace('#', '');

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-accent/12 text-accent-light ring-1 ring-accent/25'
                          : 'text-text-muted hover:bg-accent/8 hover:text-text'
                      }`}
                    >
                      {translations.nav[item.key]}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Language Switcher */}
            <div className="mt-4 flex items-center gap-2 border-t border-ink-line pt-4">
              <button
                type="button"
                onClick={() => changeLanguage('en')}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
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
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
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
      )}
    </header>
  );
}
