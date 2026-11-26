import { profile } from "../data/content";
import HeroVisual from "./HeroVisual";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid-bg" />
      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><span /> DATA ANALYTICS PORTFOLIO</div></Reveal>
          <Reveal delay={100}><h1>Turning <em>data</em> into<br /><span>clear insights.</span></h1></Reveal>
          <Reveal delay={180}><p className="hero-intro">{profile.intro}</p></Reveal>
          <Reveal delay={260} className="hero-actions">
            <a href="#projects" className="btn-primary">Explore My Work <span>↗</span></a>
            <a href="#contact" className="btn-ghost">Let’s Connect</a>
          </Reveal>
          <Reveal delay={340}><div className="hero-proof"><span>Excel</span><i /> <span>Power BI</span><i /> <span>Data Visualization</span></div></Reveal>
        </div>
        <Reveal delay={220}><HeroVisual /></Reveal>
      </div>
      <a className="scroll-cue" href="#about">Scroll to explore <span>↓</span></a>
    </section>
  );
}