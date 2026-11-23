export default function BackgroundFX() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#070811]"
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(111,61,133,0.22),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(104,55,128,0.16),transparent_30%),linear-gradient(135deg,#070811_0%,#0A0A17_48%,#080811_100%)]" />

      {/* Soft purple glow — top right */}
      <div
        className="absolute -right-[12%] top-[5%] h-[520px] w-[520px] rounded-full bg-[#7B4A91]/[0.16] blur-[130px]"
        style={{
          animation: 'background-glow-a 14s ease-in-out infinite alternate',
        }}
      />

      {/* Soft pink glow — right center */}
      <div
        className="absolute right-[8%] top-[35%] h-[360px] w-[360px] rounded-full bg-[#D58AB5]/[0.09] blur-[120px]"
        style={{
          animation: 'background-glow-b 18s ease-in-out infinite alternate',
        }}
      />

      {/* Soft purple glow — bottom left */}
      <div
        className="absolute -left-[10%] bottom-[4%] h-[420px] w-[420px] rounded-full bg-[#6D4A91]/[0.13] blur-[130px]"
        style={{
          animation: 'background-glow-c 16s ease-in-out infinite alternate',
        }}
      />

      {/* Wave lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.32]"
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
            <stop offset="0%" stopColor="#8E5AA8" stopOpacity="0" />
            <stop offset="30%" stopColor="#A86EBB" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#D29ACD" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#8E5AA8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8E5AA8" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="wave-gradient-2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#6E4C91" stopOpacity="0" />
            <stop offset="40%" stopColor="#9D6DB4" stopOpacity="0.3" />
            <stop offset="65%" stopColor="#D48FB7" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#6E4C91" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main wave */}
        <path
          d="M-80 145
             C120 40, 300 65, 470 155
             S780 245, 960 135
             S1280 35, 1680 155"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="1"
        />

        {/* Second wave */}
        <path
          d="M-80 330
             C130 210, 320 235, 500 340
             S790 455, 980 330
             S1300 210, 1680 350"
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="1"
        />

        {/* Third wave */}
        <path
          d="M-80 520
             C140 400, 320 425, 505 530
             S800 650, 1000 520
             S1300 410, 1680 535"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="0.9"
        />

        {/* Fourth wave */}
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
            transform: translate3d(0, 0, 0) scale(1);
          }

          100% {
            transform: translate3d(-35px, 25px, 0) scale(1.08);
          }
        }

        @keyframes background-glow-b {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.7;
          }

          100% {
            transform: translate3d(-25px, 35px, 0) scale(1.12);
            opacity: 1;
          }
        }

        @keyframes background-glow-c {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          100% {
            transform: translate3d(30px, -20px, 0) scale(1.08);
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
