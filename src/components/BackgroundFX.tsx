export default function BackgroundFX() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0B0507]"
      aria-hidden="true"
    >
      {/* Warm burgundy-black base with a soft pink atmosphere behind the hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(229,138,175,0.11),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(112,30,58,0.16),transparent_38%),radial-gradient(circle_at_18%_78%,rgba(92,24,47,0.12),transparent_32%),linear-gradient(135deg,#0B0507_0%,#14080D_50%,#0B0507_100%)]" />

      {/* Main soft pink glow — kept subtle and centered behind the name */}
      <div
        className="absolute left-1/2 top-[12%] h-[430px] w-[620px] -translate-x-1/2 rounded-full bg-[#E58AAF]/[0.10] blur-[140px]"
        style={{
          animation: 'background-glow-a 14s ease-in-out infinite alternate',
        }}
      />

      {/* Soft burgundy glow — upper right */}
      <div
        className="absolute -right-[12%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#7A2948]/[0.12] blur-[140px]"
        style={{
          animation: 'background-glow-b 18s ease-in-out infinite alternate',
        }}
      />

      {/* Very subtle warm glow — bottom left */}
      <div
        className="absolute -left-[10%] bottom-[4%] h-[420px] w-[420px] rounded-full bg-[#6B263F]/[0.09] blur-[140px]"
        style={{
          animation: 'background-glow-c 16s ease-in-out infinite alternate',
        }}
      />

      {/* Subtle wave lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.24]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="wave-gradient-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#8A4A61" stopOpacity="0" />
            <stop offset="30%" stopColor="#C97899" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#E58AAF" stopOpacity="0.32" />
            <stop offset="80%" stopColor="#8A4A61" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#8A4A61" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="wave-gradient-2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#6E3047" stopOpacity="0" />
            <stop offset="40%" stopColor="#A65A78" stopOpacity="0.20" />
            <stop offset="65%" stopColor="#D27D9D" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6E3047" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M-80 145
             C120 40, 300 65, 470 155
             S780 245, 960 135
             S1280 35, 1680 155"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="1"
        />

        <path
          d="M-80 330
             C130 210, 320 235, 500 340
             S790 455, 980 330
             S1300 210, 1680 350"
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="1"
        />

        <path
          d="M-80 520
             C140 400, 320 425, 505 530
             S800 650, 1000 520
             S1300 410, 1680 535"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="0.9"
        />

        <path
          d="M-80 720
             C150 610, 350 625, 530 725
             S820 840, 1010 715
             S1320 610, 1680 735"
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="0.9"
        />
      </svg>

      {/* Very subtle grain */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.5px,transparent_0.5px)] [background-size:5px_5px]" />

      <style>{`
        @keyframes background-glow-a {
          0% {
            transform: translate3d(-50%, 0, 0) scale(1);
          }

          100% {
            transform: translate3d(-50%, 25px, 0) scale(1.08);
          }
        }

        @keyframes background-glow-b {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          100% {
            transform: translate3d(-30px, 25px, 0) scale(1.08);
          }
        }

        @keyframes background-glow-c {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          100% {
            transform: translate3d(25px, -20px, 0) scale(1.08);
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
