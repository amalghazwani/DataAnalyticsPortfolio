import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, BarChart3, BriefcaseBusiness, Database, FileSpreadsheet, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { profile, skills, timeline, projects } from './data/content';
import { translations, type Language } from './data/translations';

const blue = '#78B7C8';
const violet = '#9B8CFF';

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

const pages = ['home','about','experience','skills','projects','process','contact'] as const;
type Page = typeof pages[number];

const pageNames: Record<Page, { en: string; ar: string }> = {
  home: { en:'Home', ar:'الرئيسية' },
  about: { en:'About', ar:'نبذة' },
  experience: { en:'Experience', ar:'الخبرات' },
  skills: { en:'Skills', ar:'المهارات' },
  projects: { en:'Projects', ar:'المشاريع' },
  process: { en:'Process', ar:'المنهجية' },
  contact: { en:'Contact', ar:'تواصل' },
};

function getPage(): Page {
  const value = window.location.hash.replace('#/','').split('/')[0] as Page;
  return pages.includes(value) ? value : 'home';
}

function SectionTitle({ eyebrow, title, description, arabic }: { eyebrow: string; title: string; description?: string; arabic?: boolean }) {
  return (
    <div className={arabic ? 'page-title rtl' : 'page-title'}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try { const saved = localStorage.getItem('lang'); return saved === 'ar' ? 'ar' : 'en'; } catch { return 'en'; }
  });
  const [page, setPage] = useState<Page>(getPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const t = translations[language];
  const isArabic = language === 'ar';

  useEffect(() => {
    const onHash = () => { setPage(getPage()); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = 'dark';
    document.title = isArabic ? 'أمل غزواني — محللة بيانات' : 'Amal Ghazwani — Data Analyst';
    try { localStorage.setItem('lang', language); } catch {}
  }, [language, isArabic]);

  const localizedProjects = useMemo(() => projects.map((project) => {
    const ar = projectArabic[project.name];
    if (!isArabic || !ar) return project;
    return { ...project, name: ar.name, description: ar.description, stats: project.stats?.map((stat) => ({ ...stat, label: ar.labels[stat.label] ?? stat.label })) };
  }), [isArabic]);

  const go = (target: Page) => { setMenuOpen(false); window.location.hash = '#/' + target; };

  const navItems = pages.map((key) => ({ key, label: isArabic ? pageNames[key].ar : pageNames[key].en }));

  return (
    <div className="site-shell">
      <header className="site-nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => go('home')}>
            <span className="brand-mark">AG</span>
            <span className="brand-name">Amal Ghazwani</span>
          </button>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button key={item.key} className={page === item.key ? 'nav-link active' : 'nav-link'} onClick={() => go(item.key)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="language-toggle" onClick={() => setLanguage(isArabic ? 'en' : 'ar')}>{isArabic ? 'EN' : 'AR'}</button>
            <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
          </div>

          {menuOpen && (
            <div className="mobile-panel">
              {navItems.map(item => <button key={item.key} onClick={() => go(item.key)} className={page === item.key ? 'mobile-link active' : 'mobile-link'}>{item.label}</button>)}
            </div>
          )}
        </div>
      </header>

      <main className="page-main">
        {page === 'home' && <HomePage go={go} arabic={isArabic} t={t} />}
        {page === 'about' && <AboutPage arabic={isArabic} t={t} />}
        {page === 'experience' && <ExperiencePage arabic={isArabic} t={t} />}
        {page === 'skills' && <SkillsPage arabic={isArabic} t={t} />}
        {page === 'projects' && <ProjectsPage arabic={isArabic} t={t} projects={localizedProjects} onOpen={setSelectedProject} />}
        {page === 'process' && <ProcessPage arabic={isArabic} t={t} />}
        {page === 'contact' && <ContactPage arabic={isArabic} t={t} />}
      </main>

      <footer className="footer">
        <div><strong>Amal Ghazwani</strong><span>Data Analyst</span></div>
        <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
      </footer>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}><X size={19}/></button>
            <img src={import.meta.env.BASE_URL + (selectedProject.image?.replace(/^\/+/, '') ?? '')} alt={selectedProject.name} />
            <div className="modal-content">
              <div className="tool-row">{selectedProject.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <div className="stats-grid">{selectedProject.stats?.map(stat => <div key={stat.label} className="stat"><small>{stat.label}</small><strong>{stat.value}</strong></div>)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HomePage({ go, arabic, t }: any) {
  return <div className="home-page">
    <section className="hero-page">
      <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
      <div className="hero-grid"/>
      <div className="hero-content">
        <div className={arabic ? 'hero-copy rtl' : 'hero-copy'}>
          <p className="eyebrow"><span/> {arabic ? 'محللة بيانات' : 'Data Analyst'}</p>
          <h1>Amal <em>Ghazwani</em></h1>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => go('projects')}>{t.hero.projects}<ArrowUpRight size={15}/></button>
            <button className="btn btn-outline" onClick={() => go('contact')}>{t.hero.contact}</button>
          </div>
          <div className="hero-proof"><span>Excel</span><i/> <span>Power BI</span><i/> <span>Data Visualization</span></div>
        </div>
        <HeroVisual/>
      </div>
      <button className="hero-scroll" onClick={() => go('about')}>Explore portfolio <span>↓</span></button>
    </section>
  </div>;
}

function HeroVisual() {
  return <div className="hero-visual">
    <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
    <div className="dashboard-card glass-card">
      <div className="dash-head"><span>ANALYTICS OVERVIEW</span><b>● LIVE</b></div>
      <div className="revenue"><div><small>Revenue</small><strong>$773.9K</strong></div><span>+12.4%</span></div>
      <svg viewBox="0 0 430 190" className="chart" aria-label="Analytics chart">
        <g className="chart-grid"><path d="M20 160H410M20 120H410M20 80H410M20 40H410"/></g>
        {[55,80,108,76,132,102,151,119].map((h,i)=><rect key={i} x={35+i*48} y={165-h} width="22" height={h} rx="5" className="chart-bar"/>)}
        <path d="M35 128 C85 110 100 126 130 95 S185 105 215 80 S265 92 300 58 S350 75 395 35" className="chart-line"/>
      </svg>
      <div className="dash-foot"><span>Performance</span><b>+18.6% YoY</b></div>
    </div>
    <div className="float-card float-one"><small>Top Category</small><strong>Electronics</strong><span>42% of revenue</span></div>
    <div className="float-card float-two"><small>Data Insight</small><strong>+18.6%</strong><span>YoY performance</span></div>
  </div>;
}

function AboutPage({ arabic, t }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.paragraphs[1]}/>
    <div className="about-layout">
      <div className="feature-panel"><span className="panel-number">01</span><p className="quote">{arabic ? 'أحب أن أجد القصة خلف الأرقام.' : 'I like finding the story behind the numbers.'}</p><div className="line"/><p>{t.about.paragraphs[0]}</p></div>
      <div className="about-details">{t.about.highlights.map((item:any,i:number)=><div className="detail-row" key={item.title}><span>0{i+1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div>
    </div>
  </PageFrame>;
}

function ExperiencePage({ arabic, t }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.experience.eyebrow} title={t.experience.title}/>
    <div className="timeline-page">{timeline.map((item:any,i:number)=><article className="timeline-card" key={item.date+item.title}><span className="timeline-index">0{i+1}</span><div><div className="meta">{item.date} <span/> {item.type}</div><h2>{arabic ? item.titleAr : item.title}</h2><b>{arabic ? item.detailAr : item.detail}</b>{item.summary && <p>{arabic ? item.summaryAr : item.summary}</p>}</div></article>)}</div>
  </PageFrame>;
}

function SkillsPage({ arabic, t }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.skills.eyebrow} title={t.skills.title} description={arabic ? 'الأدوات والمهارات التي أستخدمها لتحويل البيانات إلى رؤى واضحة.' : 'The tools and skills I use to turn data into clear insights.'}/>
    <div className="skills-page-grid">{skills.map((skill:string,i:number)=>{const Icon=[FileSpreadsheet,BarChart3,Database,BarChart3,BarChart3,BarChart3,FileSpreadsheet][i]??BarChart3;return <div className="skill-card-dark" key={skill}><span className="skill-no">0{i+1}</span><Icon size={20}/><h3>{skill}</h3><p>{arabic?'بيانات وتحليلات':'Data & Insights'}</p></div>})}</div>
  </PageFrame>;
}

function ProjectsPage({ arabic, t, projects, onOpen }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.projects.eyebrow} title={t.projects.title} description={arabic ? 'نماذج عملية من أعمال تحليل البيانات والتصور البصري.' : 'Selected work across sales, retail, and travel analytics.'}/>
    <div className="projects-page-grid">{projects.map((project:any,i:number)=><article className="project-card-dark" key={project.name}><button className="project-image" onClick={()=>onOpen(project)}><img src={import.meta.env.BASE_URL + (project.image?.replace(/^\/+/, '') ?? '')} alt={project.name}/><span>View dashboard <ArrowUpRight size={13}/></span></button><div className="project-info"><div className="tool-row">{project.tools.map((tool:string)=><span key={tool}>{tool}</span>)}</div><p className="project-number">0{i+1}</p><h2>{project.name}</h2><p>{project.description}</p><div className="stats-grid">{project.stats?.slice(0,3).map((stat:any)=><div className="stat" key={stat.label}><small>{stat.label}</small><strong>{stat.value}</strong></div>)}</div><button className="case-link" onClick={()=>onOpen(project)}>View case study <ArrowUpRight size={14}/></button></div></article>)}</div>
  </PageFrame>;
}

function ProcessPage({ arabic, t }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.process.eyebrow} title={t.process.title} description={arabic ? 'من فهم السؤال إلى بناء لوحة معلومات واضحة وقابلة لاتخاذ القرار.' : 'From the business question to a clear, decision-ready dashboard.'}/>
    <div className="process-page-grid">{t.process.steps.map((step:any)=><div className="process-card" key={step.number}><span>{step.number}</span><h2>{step.title}</h2><p>{step.description}</p><div/></div>)}</div>
  </PageFrame>;
}

function ContactPage({ arabic, t }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description}/>
    <div className="contact-page-grid">
      {[[Mail,t.contact.email,profile.email,'mailto:'+profile.email],[Linkedin,t.contact.linkedin,'amal-ghazwani',profile.linkedin],[Github,t.contact.github,'amalghazwani',profile.github]].map(([Icon,label,value,href]:any)=><a className="contact-card-dark" key={String(label)} href={String(href)} target={String(href).startsWith('mailto:')?undefined:'_blank'} rel={String(href).startsWith('mailto:')?undefined:'noreferrer'}><span className="contact-icon"><Icon size={19}/></span><div><small>{String(label)}</small><strong>{String(value)}</strong></div><ArrowUpRight size={16}/></a>)}
    </div>
  </PageFrame>;
}

function PageFrame({ children }: any) {
  return <section className="inner-page"><div className="page-container">{children}</div></section>;
}
