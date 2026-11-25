export default function BackgroundFX() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050912]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_24%,rgba(78,163,255,0.11),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(31,92,150,0.14),transparent_36%),radial-gradient(circle_at_14%_72%,rgba(21,59,104,0.12),transparent_34%),linear-gradient(135deg,#050912_0%,#081221_52%,#050912_100%)]" />
      <div className="absolute left-[54%] top-[8%] h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-[#4EA3FF]/[0.08] blur-[150px]" style={{ animation: 'background-glow-a 16s ease-in-out infinite alternate' }} />
      <div className="absolute -right-[12%] top-[14%] h-[520px] w-[520px] rounded-full bg-[#1E5D94]/[0.10] blur-[150px]" style={{ animation: 'background-glow-b 20s ease-in-out infinite alternate' }} />
      <div className="absolute -left-[12%] bottom-[8%] h-[430px] w-[430px] rounded-full bg-[#163D69]/[0.10] blur-[150px]" style={{ animation: 'background-glow-c 18s ease-in-out infinite alternate' }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.20]" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4EA3FF" stopOpacity="0" />
            <stop offset="38%" stopColor="#4EA3FF" stopOpacity="0.24" />
            <stop offset="58%" stopColor="#72B8FF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#4EA3FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A6A9D" stopOpacity="0" />
            <stop offset="45%" stopColor="#4EA3FF" stopOpacity="0.14" />
            <stop offset="70%" stopColor="#72B8FF" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#2A6A9D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-80 150 C120 45, 300 70, 470 160 S780 250, 960 140 S1280 40, 1680 160" fill="none" stroke="url(#wave-gradient-1)" strokeWidth="1" />
        <path d="M-80 335 C130 215, 320 240, 500 345 S790 460, 980 335 S1300 215, 1680 355" fill="none" stroke="url(#wave-gradient-2)" strokeWidth="1" />
        <path d="M-80 525 C140 405, 320 430, 505 535 S800 655, 1000 525 S1300 415, 1680 540" fill="none" stroke="url(#wave-gradient-1)" strokeWidth="0.9" />
        <path d="M-80 725 C150 615, 350 630, 530 730 S820 845, 1010 720 S1320 615, 1680 740" fill="none" stroke="url(#wave-gradient-2)" strokeWidth="0.9" />
      </svg>
      <div className="absolute inset-0 opacity-[0.018] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.5px,transparent_0.5px)] [background-size:5px_5px]" />
      <style>{`
        @keyframes background-glow-a { 0% { transform: translate3d(-50%, 0, 0) scale(1); } 100% { transform: translate3d(-50%, 24px, 0) scale(1.08); } }
        @keyframes background-glow-b { 0% { transform: translate3d(0, 0, 0) scale(1); } 100% { transform: translate3d(-26px, 22px, 0) scale(1.07); } }
        @keyframes background-glow-c { 0% { transform: translate3d(0, 0, 0) scale(1); } 100% { transform: translate3d(24px, -18px, 0) scale(1.07); } }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>
    </div>
  );
}
