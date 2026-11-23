import { useEffect, useState } from 'react';
import { BarChart3, Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

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
              Data Analyst
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-accent/12 text-accent-light ring-1 ring-accent/25'
                        : 'text-text-muted hover:bg-accent/8 hover:text-text'
                    }`}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Language */}
          <div className="ml-3 flex items-center rounded-full border border-ink-line bg-ink-card/50 p-1">
            <button
              type="button"
              className="rounded-full bg-accent/15 px-3 py-1.5 text-[11px] font-semibold text-accent-light"
            >
              EN
            </button>

            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-text-muted transition-colors hover:text-text"
            >
              العربية
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
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
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-accent/12 text-accent-light ring-1 ring-accent/25'
                          : 'text-text-muted hover:bg-accent/8 hover:text-text'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex items-center gap-2 border-t border-ink-line pt-4">
              <button
                type="button"
                className="rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold text-accent-light"
              >
                EN
              </button>

              <button
                type="button"
                className="rounded-full px-4 py-2 text-xs font-semibold text-text-muted hover:text-text"
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
