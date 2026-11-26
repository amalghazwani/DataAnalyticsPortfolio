import { useEffect, useState } from "react";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = window.localStorage.getItem("portfolio-theme"); } catch { /* Storage may be unavailable. */ }
    const initial = saved === null ? true : saved === "dark";
    setDark(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    applyTheme(next);
    try { window.localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch { /* Keep the current session usable. */ }
  };

  return (
    <button type="button" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"} className="theme-toggle">
      <span className="theme-icon" aria-hidden="true">{dark ? "☾" : "☀"}</span>
    </button>
  );
}