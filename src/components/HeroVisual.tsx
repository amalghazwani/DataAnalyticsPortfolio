const bars = [42, 68, 52, 84, 61, 94, 74];

export default function HeroVisual() {
  return (
    <div className="hero-visual-wrap" aria-hidden="true">
      <div className="orb orb-a" /><div className="orb orb-b" />
      <div className="data-orbit orbit-1" /><div className="data-orbit orbit-2" />
      <div className="hero-dashboard glass-card">
        <div className="dash-top"><span>Analytics Overview</span><span className="live-dot">● Live</span></div>
        <div className="mini-kpi"><span>Revenue</span><strong>$773.9K</strong><small>+12.4%</small></div>
        <svg viewBox="0 0 360 190" className="chart">
          {[45, 90, 135].map(y => <line key={y} x1="0" x2="360" y1={y} y2={y} className="grid-line" />)}
          {bars.map((h, i) => <rect key={i} className="bar" style={{ animationDelay: `${i * 100}ms` }} x={16 + i * 48} y={168 - h * 1.25} width="28" height={h * 1.25} rx="8" />)}
          <polyline className="line" points={bars.map((h, i) => `${30 + i * 48},${158 - h * 1.2}`).join(" ")} />
        </svg>
        <div className="dash-bottom"><span>Sales trend</span><span>2023 — 2024</span></div>
      </div>
      <div className="floating-card card-one"><span>Top Category</span><strong>Electronics</strong><small>42% of revenue</small></div>
      <div className="floating-card card-two"><span>Data Insight</span><strong>+18.6%</strong><small>YoY performance</small></div>
    </div>
  );
}