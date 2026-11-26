import { useState } from "react";
import { navLinks, profile } from "../data/content";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <nav className="nav-inner">
        <a href="#top" className="brand"><span className="brand-mark">A</span><span>{profile.name}</span></a>
        <div className="nav-right">
          <ul className="nav-links">
            {navLinks.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
          </ul>
          <ThemeToggle />
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="mobile-menu">{open ? "×" : "☰"}</button>
        </div>
      </nav>
      {open && <div className="mobile-panel">{navLinks.map((l) => <a key={l} onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`}>{l}</a>)}</div>}
    </header>
  );
}