export default function BackgroundFX() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050912]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(90,134,168,0.055),transparent_34%),linear-gradient(135deg,#050912_0%,#081221_52%,#050912_100%)]" />
      <div className="absolute left-1/2 top-[34%] h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[#5A86A8]/[0.035] blur-[140px]" style={{ animation: 'hero-glow 14s ease-in-out infinite alternate' }} />
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
        @keyframes hero-glow {
          0% { transform: translate3d(-50%, 0, 0) scale(1); opacity: 0.7; }
          100% { transform: translate3d(-50%, 10px, 0) scale(1.05); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>
    </div>
  );
}