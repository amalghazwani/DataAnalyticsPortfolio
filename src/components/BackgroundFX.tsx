import { useEffect, useState } from 'react';

export default function BackgroundFX() {
  const [pointer, setPointer] = useState({ x: 50, y: 42 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      setPointer({
        x: 50 + ((event.clientX / window.innerWidth) - 0.5) * 5,
        y: 42 + ((event.clientY / window.innerHeight) - 0.5) * 5,
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050912]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,#050912_0%,#081221_52%,#050912_100%)]"
      />
      <div
        className="absolute h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A86A8]/[0.045] blur-[150px] transition-[left,top] duration-1000 ease-out"
        style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }}
      />
      <div
        className="absolute h-[340px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A9CB7]/[0.025] blur-[130px] transition-[left,top] duration-[1400ms] ease-out"
        style={{ left: `${pointer.x + 4}%`, top: `${pointer.y + 7}%` }}
      />
      <div
        className="absolute left-[14%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#7A9CB7]/50 blur-[1px]"
        style={{ animation: 'ambient-drift 9s ease-in-out infinite alternate' }}
      />
      <div
        className="absolute right-[16%] top-[48%] h-1 w-1 rounded-full bg-[#5A86A8]/45 blur-[1px]"
        style={{ animation: 'ambient-drift-reverse 11s ease-in-out infinite alternate' }}
      />

      <svg className="absolute left-0 top-[24%] h-[240px] w-full opacity-[0.13]" viewBox="0 0 1600 240" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5A86A8" stopOpacity="0" />
            <stop offset="25%" stopColor="#5A86A8" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#7A9CB7" stopOpacity="0.16" />
            <stop offset="75%" stopColor="#5A86A8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5A86A8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-40 125 C260 82, 430 168, 720 120 S1160 74, 1640 128" fill="none" stroke="url(#hero-line)" strokeWidth="1" />
        <path d="M-40 137 C260 94, 430 180, 720 132 S1160 86, 1640 140" fill="none" stroke="url(#hero-line)" strokeWidth="0.6" opacity="0.45" />
      </svg>

      <div className="absolute inset-0 opacity-[0.012] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.5px,transparent_0.5px)] [background-size:5px_5px]" />

      <style>{`
        @keyframes ambient-drift {
          0% { transform: translate3d(0, 0, 0); opacity: 0.25; }
          100% { transform: translate3d(22px, 10px, 0); opacity: 0.7; }
        }
        @keyframes ambient-drift-reverse {
          0% { transform: translate3d(0, 0, 0); opacity: 0.2; }
          100% { transform: translate3d(-18px, -8px, 0); opacity: 0.6; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
