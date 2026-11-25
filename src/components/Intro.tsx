import { useEffect, useState } from 'react';

export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setExiting(true), 900);
    const removeTimer = window.setTimeout(() => setVisible(false), 1350);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#050912] transition-opacity duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(90,134,168,0.10),transparent_34%),linear-gradient(135deg,#050912_0%,#081221_52%,#050912_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[380px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A86A8]/[0.045] blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-px w-[min(78vw,620px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7A9CB7]/40 to-transparent" style={{ animation: 'intro-line 1.2s ease-out forwards' }} />
      <div className="absolute left-1/2 top-1/2 h-px w-[min(44vw,300px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#5A86A8]/65 to-transparent blur-[1px]" style={{ animation: 'intro-line-soft 1.2s ease-out forwards' }} />
      <style>{`
        @keyframes intro-line {
          0% { transform: translateX(-50%) scaleX(0.18); opacity: 0; }
          55% { opacity: 1; }
          100% { transform: translateX(-50%) scaleX(1); opacity: 0.8; }
        }
        @keyframes intro-line-soft {
          0% { transform: translateX(-50%) scaleX(0.08); opacity: 0; }
          55% { opacity: 0.8; }
          100% { transform: translateX(-50%) scaleX(1); opacity: 0.55; }
        }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>
    </div>
  );
}