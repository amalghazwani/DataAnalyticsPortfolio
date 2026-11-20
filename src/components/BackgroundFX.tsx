export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(92,163,178,0.07),transparent_60%)]" />

      {/* soft flowing forms */}
      <div
        className="animate-drift-a absolute -top-40 right-[-12%] h-[620px] w-[620px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(92,163,178,0.14) 0%, rgba(92,163,178,0.05) 45%, transparent 70%)',
        }}
      />
      <div
        className="animate-drift-b absolute bottom-[-25%] left-[-10%] h-[560px] w-[560px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(110,155,165,0.12) 0%, rgba(110,155,165,0.04) 50%, transparent 72%)',
        }}
      />
      <div
        className="animate-drift-a absolute left-[30%] top-[40%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(92,163,178,0.08) 0%, transparent 70%)',
        }}
      />

      {/* gentle flowing curve lines */}
      <svg
        className="absolute inset-x-0 top-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-100 220 C 300 120, 620 340, 980 240 S 1560 160, 1560 160"
          stroke="#5CA3B2"
          strokeWidth="1.2"
        />
        <path
          d="M-100 520 C 260 420, 640 640, 1000 540 S 1560 460, 1560 460"
          stroke="#5CA3B2"
          strokeWidth="1.2"
        />
        <path
          d="M-100 760 C 320 660, 660 880, 1020 780 S 1560 700, 1560 700"
          stroke="#5CA3B2"
          strokeWidth="1.2"
        />
      </svg>

      {/* subtle vignette so content edges stay calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,16,19,0.5)_100%)]" />
    </div>
  );
}
