import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, BarChart3, Database, FileSpreadsheet, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { profile, skills, timeline, projects, type Project } from './data/content';
import { translations, type Language } from './data/translations';

const pages = ['home', 'about', 'experience', 'skills', 'projects', 'contact'] as const;
type Page = typeof pages[number];

const pageNames: Record<Page, { en: string; ar: string }> = {
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

function getRoute() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [page, slug] = raw.split('/');
  return {
    page: (pages.includes(page as Page) ? page as Page : 'home'),
    slug: slug || null,
  };
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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
    try { return localStorage.getItem('lang') === 'ar' ? 'ar' : 'en'; } catch { return 'en'; }
  });
  const [route, setRoute] = useState(getRoute);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];
  const arabic = language === 'ar';

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = arabic ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = 'dark';
    document.title = arabic ? 'أمل غزواني — محللة بيانات' : 'Amal Ghazwani — Data Analyst';
    try { localStorage.setItem('lang', language); } catch {}
  }, [language, arabic]);

  const go = (page: Page, slug?: string) => {
    window.location.hash = slug ? '#/' + page + '/' + slug : '#/' + page;
    setMenuOpen(false);
  };

  const navItems = pages.map(key => ({ key, label: arabic ? pageNames[key].ar : pageNames[key].en }));

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

  const activeProject = route.page === 'projects' && route.slug
    ? localizedProjects.find(p => slugify(p.name) === route.slug || slugify(projects.find(x => x.name === p.name)?.name || '') === route.slug)
    : null;

  return (
    <div className="site-shell">
      <header className="site-nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => go('home')} aria-label="Home">
            <span className="brand-mark">AG</span>
            <span className="brand-name">Amal Ghazwani</span>
          </button>

          <nav className="desktop-nav">
            {navItems.map(item => (
              <button key={item.key} className={route.page === item.key ? 'nav-link active' : 'nav-link'} onClick={() => go(item.key)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="language-toggle" onClick={() => setLanguage(arabic ? 'en' : 'ar')}>{arabic ? 'EN' : 'AR'}</button>
            <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
          </div>

          {menuOpen && (
            <div className="mobile-panel">
              {navItems.map(item => (
                <button key={item.key} onClick={() => go(item.key)} className={route.page === item.key ? 'mobile-link active' : 'mobile-link'}>
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="page-main">
        {route.page === 'home' && <HomePage go={go} arabic={arabic} t={t} />}
        {route.page === 'about' && <AboutPage arabic={arabic} t={t} />}
        {route.page === 'experience' && <ExperiencePage arabic={arabic} t={t} />}
        {route.page === 'skills' && <SkillsPage arabic={arabic} t={t} />}
        {route.page === 'projects' && !activeProject && <ProjectsPage arabic={arabic} t={t} projects={localizedProjects} go={go} />}
        {route.page === 'projects' && activeProject && <ProjectDetailPage arabic={arabic} project={activeProject} go={go} />}
        {route.page === 'contact' && <ContactPage arabic={arabic} t={t} />}
      </main>

      <footer className="footer">
        <div><strong>Amal Ghazwani</strong><span>Data Analyst</span></div>
        <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
      </footer>
    </div>
  );
}

function HomePage({ go, arabic, t }: any) {
  return (
    <div className="home-page">
      <section className="hero-page">
        <div className="hero-grid"/>
        <div className="hero-glow glow-one"/>
        <div className="hero-glow glow-two"/>
        <div className="hero-content">
          <div className={arabic ? 'hero-copy rtl' : 'hero-copy'}>
            <p className="eyebrow"><span/> {arabic ? 'محللة بيانات' : 'DATA ANALYST'}</p>
            <h1>Amal Ghazwani</h1>
            <p className="hero-tagline">{t.hero.tagline}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => go('projects')}>{t.hero.projects}<ArrowUpRight size={16}/></button>
              <button className="btn btn-outline" onClick={() => go('contact')}>{t.hero.contact}</button>
            </div>
            <div className="hero-proof"><span>Excel</span><i/><span>Power BI</span><i/><span>Data Visualization</span></div>
          </div>

          <div className="hero-side">
            <div className="intro-panel">
              <p className="panel-kicker">01 / PORTFOLIO</p>
              <h2>{arabic ? 'تحليل واضح. تصوّر ذكي. قرارات أفضل.' : 'Clear analysis. Thoughtful visualization. Better decisions.'}</h2>
              <p>{arabic ? 'أبني تحليلات ولوحات معلومات تركّز على السؤال المهم والنتيجة القابلة للاستخدام.' : 'I build analysis and dashboards around the question that matters and the outcome that can be used.'}</p>
              <button className="text-link" onClick={() => go('about')}>{arabic ? 'اعرفي عني أكثر' : 'Learn more about me'} <ArrowUpRight size={15}/></button>
            </div>
            <div className="mini-metrics">
              <div><span>01</span><strong>Excel</strong><small>Analysis</small></div>
              <div><span>02</span><strong>Power BI</strong><small>Dashboards</small></div>
              <div><span>03</span><strong>SQL</strong><small>Data</small></div>
            </div>
          </div>
        </div>
        <button className="hero-scroll" onClick={() => go('projects')}>{arabic ? 'استكشفي المشاريع' : 'Explore projects'} <span>↓</span></button>
      </section>

      <section className="home-strip">
        <div className="home-strip-inner">
          <p>{arabic ? 'مشاريع مختارة' : 'SELECTED WORK'}</p>
          <div><span>Sales</span><span>Retail</span><span>Travel</span></div>
          <button onClick={() => go('projects')}>{arabic ? 'عرض جميع المشاريع' : 'View all projects'} <ArrowUpRight size={15}/></button>
        </div>
      </section>
    </div>
  );
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
    <div className="skills-page-grid">{skills.map((skill:string,i:number)=>{const Icon=[FileSpreadsheet,BarChart3,Database,BarChart3,BarChart3,BarChart3,FileSpreadsheet][i] ?? BarChart3;return <div className="skill-card-dark" key={skill}><span className="skill-no">0{i+1}</span><Icon size={21}/><h3>{skill}</h3><p>{arabic ? 'بيانات وتحليلات' : 'Data & Insights'}</p></div>})}</div>
  </PageFrame>;
}

function ProcessPage({ arabic, t }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.process.eyebrow} title={t.process.title} description={arabic ? 'من فهم السؤال إلى بناء لوحة معلومات واضحة وقابلة لاتخاذ القرار.' : 'From the business question to a clear, decision-ready dashboard.'}/>
    <div className="process-page-grid">{t.process.steps.map((step:any)=><div className="process-card" key={step.number}><span>{step.number}</span><h2>{step.title}</h2><p>{step.description}</p><div/></div>)}</div>
  </PageFrame>;
}

function ProjectsPage({ arabic, t, projects, go }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.projects.eyebrow} title={t.projects.title} description={arabic ? 'نماذج عملية من أعمال تحليل البيانات والتصور البصري.' : 'Selected work across sales, retail, and travel analytics.'}/>
    <div className="projects-page-grid">{projects.map((project:Project,i:number)=><article className="project-card-dark" key={project.name}>
      <button className="project-image" onClick={() => go('projects', slugify(project.name))}>
        <img src={import.meta.env.BASE_URL + (project.image?.replace(/^\/+/, '') ?? '')} alt={project.name}/>
        <span>{arabic ? 'عرض المشروع' : 'View project'} <ArrowUpRight size={14}/></span>
      </button>
      <div className="project-info">
        <div className="tool-row">{project.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
        <p className="project-number">0{i+1}</p>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className="stats-grid">{project.stats?.slice(0,3).map(stat=><div className="stat" key={stat.label}><small>{stat.label}</small><strong>{stat.value}</strong></div>)}</div>
        <button className="case-link" onClick={() => go('projects', slugify(project.name))}>{arabic ? 'فتح المشروع' : 'Open project'} <ArrowUpRight size={14}/></button>
      </div>
    </article>)}</div>
  </PageFrame>;
}

function ProjectDetailPage({ arabic, project, go }: { arabic:boolean; project:Project; go:(page:Page)=>void }) {
  return <PageFrame>
    <button className="back-link" onClick={() => go('projects')}><ArrowLeft size={15}/> {arabic ? 'العودة للمشاريع' : 'Back to projects'}</button>
    <div className="project-detail">
      <div className="project-detail-copy">
        <p className="eyebrow">{arabic ? 'مشروع' : 'PROJECT'}</p>
        <div className="tool-row">{project.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
        <h1>{project.name}</h1>
        <p className="detail-description">{project.description}</p>
        <div className="stats-grid detail-stats">{project.stats?.map(stat=><div className="stat" key={stat.label}><small>{stat.label}</small><strong>{stat.value}</strong></div>)}</div>
      </div>
      <div className="project-detail-image"><img src={import.meta.env.BASE_URL + (project.image?.replace(/^\/+/, '') ?? '')} alt={project.name}/></div>
    </div>
  </PageFrame>;
}

function ContactPage({ arabic, t }: any) {
  return <PageFrame><SectionTitle arabic={arabic} eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description}/>
    <div className="contact-page-grid">
      {[[Mail,t.contact.email,profile.email,'mailto:'+profile.email],[Linkedin,t.contact.linkedin,'amal-ghazwani',profile.linkedin],[Github,t.contact.github,'amalghazwani',profile.github]].map(([Icon,label,value,href]:any)=>
        <a className="contact-card-dark" key={String(label)} href={String(href)} target={String(href).startsWith('mailto:')?undefined:'_blank'} rel={String(href).startsWith('mailto:')?undefined:'noreferrer'}>
          <span className="contact-icon"><Icon size={19}/></span><div><small>{String(label)}</small><strong>{String(value)}</strong></div><ArrowUpRight size={16}/>
        </a>
      )}
    </div>
  </PageFrame>;
}

function PageFrame({ children }: any) {
  return <section className="inner-page"><div className="page-container">{children}</div></section>;
}
