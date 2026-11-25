import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-accent/70" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      </div>

      <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.03em] text-text sm:text-4xl md:text-[3rem]">
        {title}
      </h2>

      <div className="mt-5 h-px w-20 bg-gradient-to-r from-accent/60 via-accent/20 to-transparent" />
    </div>
  );
}
