import { useEffect, useState } from 'react';

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0B0507]"
      aria-label="Portfolio introduction"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(229,138,175,0.12),transparent_34%),linear-gradient(135deg,#0B0507_0%,#16080E_52%,#0B0507_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E58AAF]/[0.07] blur-[120px]" />

      <div className="relative z-10 w-full max-w-4xl px-7 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 text-[10px] font-semibold tracking-[0.22em] text-accent uppercase sm:text-xs">
            <span className="flex w-7 flex-col gap-[4px]" aria-hidden="true">
              <span className="h-[2px] w-7 rounded-full bg-accent" />
              <span className="h-[2px] w-5 rounded-full bg-accent/80" />
              <span className="h-[2px] w-7 rounded-full bg-accent/55" />
            </span>
            <span>DATA ANALYSIS • EXCEL • POWER BI</span>
          </div>

          <div className="mt-5 h-px w-full bg-accent/35" />

          <div className="mt-28 text-center sm:mt-32">
            <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-medium leading-none tracking-[-0.04em] text-text">
              DATA ANALYTICS
            </h1>

            <p className="mt-2 font-display text-[clamp(2.4rem,8vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-accent">
              PORTFOLIO
            </p>

            <p className="mt-8 text-base font-medium tracking-[0.04em] text-text-muted sm:text-lg">
              Amal Ghazwani
            </p>
          </div>

          <div className="mx-auto mt-24 h-[2px] w-24 rounded-full bg-accent/70 sm:mt-28" />
        </div>
      </div>

      <style>{`
        @keyframes intro-enter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
