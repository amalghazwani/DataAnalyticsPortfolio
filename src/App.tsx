import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, BarChart3, Database, FileSpreadsheet, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { profile, skills, timeline, projects, type Project } from './data/content';
import { translations, type Language } from './data/translations';

const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'] as const;
type Section = typeof sections[number];

const labels: Record<Section, { en: string; ar: string }> = {
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About', ar: 'نبذة' },
  experience: { en: 'Experience', ar: 'الخبرات' },
  skills: { en: 'Skills', ar: 'المهارات' },
  projects: { en: 'Projects', ar: 'المشاريع' },
  contact: { en: 'Contact', ar: 'تواصل' },
};

const projectArabic: Record<string, { name: string; description: string; labels: Record<string, string> }> = {
  'Retail Sales Performance Analysis': {
    name: 'تحليل أداء مبيعات التجزئة',
    description: 'تحليل استكشافي لبيانات مبيعات تجزئة افتراضية باستخدام Excel لتقييم الإيرادات والفئات وقنوات البيع والمرتجعات.',
    labels: { 'Total Revenue':'إجمالي الإيرادات', 'Order Lines':'عدد سطور الطلبات', 'Total Units':'إجمالي الوحدات', 'Top Category':'أعلى فئة', 'Top Channel':'أعلى قناة', 'Highest Return Rate':'أعلى معدل مرتجعات' },
  },
  'Adidas Sales Performance Analysis': {
    name: 'تحليل أداء مبيعات Adidas',
    description: 'تحليل لبيانات مبيعات Adidas باستخدام Excel لتقييم المبيعات والربحية والمنتجات والمناطق وقنوات البيع.',
    labels: { 'Total Sales':'إجمالي المبيعات', 'Operating Margin':'هامش التشغيل', 'Transactions':'المعاملات', 'Top Product':'أعلى منتج', 'Top Region':'أعلى منطقة', 'Leading Channel':'القناة الرائدة' },
  },
  'Travel Analytics Dashboard': {
    name: 'لوحة تحليلات السفر',
    description: 'لوحة معلومات تفاعلية باستخدام Power BI لتحليل أنماط السفر والوجهات وتفضيلات الإقامة ووسائل النقل وتكاليف الرحلات.',
    labels: { 'Total Trips':'إجمالي الرحلات', 'Destinations':'الوجهات', 'Avg. Trip Duration':'متوسط مدة الرحلة', 'Total Travel Cost':'إجمالي تكلفة السفر', 'Most Visited':'الأكثر زيارة', 'Most Common Stay':'الإقامة الأكثر شيوعًا' },
  },
};

function SectionTitle({ eyebrow, title, description, arabic }: { eyebrow: string; title: string; description?: string; arabic?: boolean }) {
  return (
    <div className={arabic ? 'page-title rtl' : 'page-title'}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem('lang') === 'ar' ? 'ar' : 'en'; } catch { return 'en'; }
  });
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];
  const arabic = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = arabic ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = 'dark';
    document.title = arabic ? 'أمل غزواني — محللة بيانات' : 'Amal Ghazwani — Data Analyst';
    try { localStorage.setItem('lang', language); } catch {}
  }, [language, arabic]);

  useEffect(() => {
    const elements = sections.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id as Section);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: Section) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const localizedProjects = useMemo(() => projects.map(project => {
    const ar = projectArabic[project.name];
    if (!arabic || !ar) return project;
    return {
      ...project,
      name: ar.name,
      description: ar.description,
      stats: project.stats?.map(stat => ({ ...stat, label: ar.labels[stat.label] ?? stat.label })),
    };
  }), [arabic]);

  return (
    <div className="site-shell landing-site">
      <header className="site-nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Home">
            <span className="brand-mark">AG</span>
            <span className="brand-name">Amal Ghazwani</span>
          </button>

          <nav className="desktop-nav">
            {sections.map(id => (
              <button key={id} className={activeSection === id ? 'nav-link active' : 'nav-link'} onClick={() => scrollTo(id)}>
                {arabic ? labels[id].ar : labels[id].en}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="language-toggle" onClick={() => setLanguage(arabic ? 'en' : 'ar')}>{arabic ? 'EN' : 'AR'}</button>
            <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
          </div>

          {menuOpen && (
            <div className="mobile-panel">
              {sections.map(id => (
                <button key={id} onClick={() => scrollTo(id)} className={activeSection === id ? 'mobile-link active' : 'mobile-link'}>
                  {arabic ? labels[id].ar : labels[id].en}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="page-main landing-main">
        <section id="home" className="hero-page landing-section">
          <div className="hero-grid" />
          <div className="hero-glow glow-one" />
          <div className="hero-content page-container">
            <div className={arabic ? 'hero-copy rtl' : 'hero-copy'}>
              <p className="eyebrow"><span />{arabic ? 'محللة بيانات' : 'DATA ANALYST'}</p>
              <h1>Amal Ghazwani</h1>
              <p className="hero-tagline">{t.hero.tagline}</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => scrollTo('projects')}>{t.hero.projects}<ArrowUpRight size={16}/></button>
                <button className="btn btn-outline" onClick={() => scrollTo('contact')}>{t.hero.contact}</button>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="visual-frame">
                <div className="visual-top"><span>DATA / 01</span><span>ANALYSIS</span></div>
                <div className="visual-core">
                  <div className="orbit orbit-a"><i/><i/><i/></div>
                  <div className="orbit orbit-b"><i/><i/></div>
                  <div className="core-dot" />
                  <div className="signal signal-a"><span/><span/><span/><span/></div>
                  <div className="signal signal-b"><span/><span/><span/></div>
                </div>
                <div className="visual-bottom"><span>INSIGHT</span><span>CLARITY</span><span>DECISION</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="landing-section inner-page">
          <div className="page-container">
            <SectionTitle arabic={arabic} eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.paragraphs[1]}/>
            <div className="about-layout">
              <div className="feature-panel"><span className="panel-number">01</span><p className="quote">{arabic ? 'أحب أن أجد القصة خلف الأرقام.' : 'I like finding the story behind the numbers.'}</p><div className="line"/><p>{t.about.paragraphs[0]}</p></div>
              <div className="about-details">{t.about.highlights.map((item:any,i:number)=><div className="detail-row" key={item.title}><span>0{i+1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="landing-section inner-page section-alt">
          <div className="page-container">
            <SectionTitle arabic={arabic} eyebrow={t.experience.eyebrow} title={t.experience.title} description={arabic ? 'التعليم والخبرات والشهادات التي شكّلت رحلتي المهنية.' : 'The education, experience, and certifications that shaped my journey.'}/>
            <div className="timeline-page">{timeline.map((item:any,i:number)=><article className="timeline-card" key={item.date+item.title}><span className="timeline-index">0{i+1}</span><div><div className="meta">{item.date} <span/> {item.type}</div><h2>{arabic ? item.titleAr : item.title}</h2><b>{arabic ? item.detailAr : item.detail}</b>{item.summary && <p>{arabic ? item.summaryAr : item.summary}</p>}</div></article>)}</div>
          </div>
        </section>

        <section id="skills" className="landing-section inner-page">
          <div className="page-container">
            <SectionTitle arabic={arabic} eyebrow={t.skills.eyebrow} title={t.skills.title} description={arabic ? 'الأدوات والمهارات التي أستخدمها لتحويل البيانات إلى رؤى واضحة.' : 'The tools and skills I use to turn data into clear insights.'}/>
            <div className="skills-page-grid">{skills.map((skill:string,i:number)=>{const Icon=[FileSpreadsheet,BarChart3,Database,BarChart3,BarChart3,BarChart3,FileSpreadsheet][i] ?? BarChart3;return <div className="skill-card-dark" key={skill}><span className="skill-no">0{i+1}</span><Icon size={21}/><h3>{skill}</h3><p>{arabic ? 'بيانات وتحليلات' : 'Data & Insights'}</p></div>})}</div>
          </div>
        </section>

        <section id="projects" className="landing-section inner-page section-alt">
          <div className="page-container">
            <SectionTitle arabic={arabic} eyebrow={t.projects.eyebrow} title={t.projects.title} description={arabic ? 'نماذج عملية من أعمال تحليل البيانات والتصور البصري.' : 'Selected work across sales, retail, and travel analytics.'}/>
            <div className="projects-page-grid">{localizedProjects.map((project:Project,i:number)=><article className="project-card-dark" key={project.name}>
              <div className="project-image">
                <img src={import.meta.env.BASE_URL + (project.image?.replace(/^\/+/, '') ?? '')} alt={project.name}/>
                <span>{project.tools.join(' · ')}</span>
              </div>
              <div className="project-info">
                <div className="tool-row">{project.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
                <p className="project-number">0{i+1}</p>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="stats-grid">{project.stats?.slice(0,3).map(stat=><div className="stat" key={stat.label}><small>{stat.label}</small><strong>{stat.value}</strong></div>)}</div>
              </div>
            </article>)}</div>
          </div>
        </section>

        <section id="contact" className="landing-section inner-page">
          <div className="page-container">
            <SectionTitle arabic={arabic} eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description}/>
            <div className="contact-page-grid">
              {[[Mail,t.contact.email,profile.email,'mailto:'+profile.email],[Linkedin,t.contact.linkedin,'amal-ghazwani',profile.linkedin],[Github,t.contact.github,'amalghazwani',profile.github]].map(([Icon,label,value,href]:any)=>
                <a className="contact-card-dark" key={String(label)} href={String(href)} target={String(href).startsWith('mailto:')?undefined:'_blank'} rel={String(href).startsWith('mailto:')?undefined:'noreferrer'}>
                  <span className="contact-icon"><Icon size={19}/></span><div><small>{String(label)}</small><strong>{String(value)}</strong></div><ArrowUpRight size={16}/>
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><strong>Amal Ghazwani</strong><span>Data Analyst</span></div>
        <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
      </footer>
    </div>
  );
}
