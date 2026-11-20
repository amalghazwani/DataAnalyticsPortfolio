import { useEffect, useState } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-accent/20 bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-ink/40 backdrop-blur-sm'
      }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between px-6 sm:px-8">

        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-text transition-colors hover:text-accent-light"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-light">
            <BarChart3 size={17} strokeWidth={2} />
          </span>

          <span className="font-display text-base font-semibold tracking-tight">
            Data Analyst
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent/15 text-accent-light ring-1 ring-accent/30'
                      : 'text-text-muted hover:bg-accent/10 hover:text-accent-light'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-accent/10 hover:text-accent-light lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-accent/10 bg-ink/95 backdrop-blur-md lg:hidden">
          <ul className="container-wide flex flex-col gap-2 px-6 py-4 sm:px-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-accent/15 text-accent-light ring-1 ring-accent/30'
                        : 'text-text-muted hover:bg-accent/10 hover:text-accent-light'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}