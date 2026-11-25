import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, BarChart3, BriefcaseBusiness, Database, FileSpreadsheet, Github, GraduationCap, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { profile, skills, timeline, projects } from './data/content';
import { translations, type Language } from './data/translations';

const blue = '#5A86A8';

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

const nav = [
  ['home', 'home'], ['about', 'about'], ['experience', 'experience'],
  ['skills', 'skills'], ['process', 'process'], ['projects', 'projects'], ['contact', 'contact'],
] as const;

function SectionTitle({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.28em]" style={{ color: dark ? '#8fb0c8' : blue }}>{eyebrow}</p>
      <h2 className={dark ? 'font-display text-4xl font-medium tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.7rem]' : 'font-display text-4xl font-medium tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[3.7rem]'}>{title}</h2>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try { const saved = localStorage.getItem('lang'); return saved === 'ar' || saved === 'en' ? saved : 'en'; } catch { return 'en'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);\n  const [theme, setTheme] = useState<'dark' | 'light'>(() => { try { return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; } });
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const t = translations[language];\n  const isLight = theme === 'light';
  const isArabic = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.title = isArabic ? 'أمل غزواني — محللة بيانات' : 'Amal Ghazwani — Data Analyst';
    try { localStorage.setItem('lang', language); } catch {}
  }, [language, isArabic]);\n\n  useEffect(() => {\n    document.documentElement.dataset.theme = theme;\n    try { localStorage.setItem('theme', theme); } catch {}\n  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  const localizedProjects = useMemo(() => projects.map((project) => {
    const ar = projectArabic[project.name];
    if (!isArabic || !ar) return project;
    return {
      ...project,
      name: ar.name,
      description: ar.description,
      stats: project.stats?.map((stat) => ({ ...stat, label: ar.labels[stat.label] ?? stat.label })),
    };
  }), [isArabic]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const statCards = [
    [GraduationCap, 'B.Sc. in MIS', 'GPA 4.38 / 5.00'],
    [BriefcaseBusiness, '2+ Experiences', 'Professional'],
    [BarChart3, '3 Projects', 'Excel + Power BI'],
    [Database, 'SQL', 'Graduation project'],
  ] as const;

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex h-[64px] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#071526]/75 px-4 shadow-[0_14px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-6">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3" aria-label="Home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8fb0c8]/25 bg-white/[0.04] font-display text-sm text-white">AG</span>
            <span className="hidden text-left sm:block">
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#a9bfd0]">Data Analyst</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            <span className="mx-2 h-5 w-px bg-white/10" />
            <button onClick={() => setMenuOpen((v) => !v)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#8fb0c8]/40 hover:bg-white/[0.08]" aria-expanded={menuOpen} aria-label={isArabic ? 'فتح قائمة الصفحات' : 'Open pages menu'}>
              <Menu size={15} /> <span>{isArabic ? 'الصفحات' : 'Pages'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[9px] font-bold tracking-[0.16em] text-white transition hover:border-[#8fb0c8]/40" aria-label={isArabic ? 'تغيير اللغة' : 'Change language'}>
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={() => setTheme(isLight ? 'dark' : 'light')} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#c6d7e4] transition hover:border-[#8fb0c8]/40 hover:text-white" aria-label={isLight ? (isArabic ? 'الوضع الداكن' : 'Dark mode') : (isArabic ? 'الوضع الفاتح' : 'Light mode')}>
              {isLight ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button onClick={() => setMenuOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden" aria-label={isArabic ? 'القائمة' : 'Menu'}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>

          {menuOpen && (
            <div className="absolute right-4 top-[72px] w-64 rounded-2xl border border-white/10 bg-[#0b1d30]/95 p-2 shadow-2xl backdrop-blur-xl sm:right-6">
              {nav.map(([key, labelKey]) => (
                <button key={key} onClick={() => scrollTo(key)} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-start text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white">
                  <span>{t.nav[labelKey]}</span><ArrowUpRight size={13} />
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="scroll-mt-24 relative overflow-hidden bg-[#071526] pt-28 text-white sm:pt-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-[#315b7a]/20 blur-[130px]" />
            <div className="absolute right-[-5%] top-[-5%] h-[620px] w-[620px] rounded-full bg-[#7c6ee6]/12 blur-[140px]" />
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
            <svg className="absolute bottom-[-70px] left-0 h-[300px] w-full opacity-50" viewBox="0 0 1600 300" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="heroWave" x1="0%" x2="100%"><stop offset="0%" stopColor="#5A86A8" stopOpacity="0"/><stop offset="50%" stopColor="#9f8cff" stopOpacity=".7"/><stop offset="100%" stopColor="#5A86A8" stopOpacity="0"/></linearGradient></defs>
              <path d="M-50 230 C220 70 410 330 680 180 S1120 75 1650 205" fill="none" stroke="url(#heroWave)" strokeWidth="1.2"/>
              <path d="M-50 245 C220 85 410 345 680 195 S1120 90 1650 220" fill="none" stroke="url(#heroWave)" strokeWidth=".7" opacity=".55"/>
            </svg>
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-28 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-4 lg:pb-32">
            <div className={isArabic ? 'order-2 text-right lg:order-1' : 'order-2 text-left lg:order-1'}>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#a9bfd0]">{isArabic ? 'محللة بيانات' : 'DATA ANALYST'}</p>
              <h1 className="font-display text-[clamp(2.7rem,9vw,6.6rem)] font-medium leading-[.94] tracking-[-.055em] text-white whitespace-nowrap">Amal <span className="text-[#a997ff]">Ghazwani</span></h1>
              <p className="mt-6 max-w-xl text-[14px] leading-8 text-slate-300 sm:text-base">{t.hero.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('projects')} className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-[#071526] transition hover:-translate-y-0.5 hover:bg-[#e5e0ff]">{t.hero.projects}<ArrowUpRight size={15}/></button>
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:border-[#a997ff]/60">{t.hero.contact}</button>
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{isArabic ? 'المملكة العربية السعودية • متاحة للفرص' : 'Saudi Arabia • Open to opportunities'}</p>
            </div>

            <div className="order-1 relative flex min-h-[310px] items-center justify-center lg:order-2 lg:min-h-[520px]">
              <div className="absolute h-[250px] w-[250px] rounded-full bg-[#6f67d9]/18 blur-[80px] sm:h-[340px] sm:w-[340px]" />
              <svg className="relative h-[310px] w-full max-w-[620px] overflow-visible sm:h-[400px] lg:h-[500px]" viewBox="0 0 620 500" aria-label="3D data visualization" role="img">
                <defs>
                  <linearGradient id="barA" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#4e7ca1"/><stop offset="1" stopColor="#b7a9ff"/></linearGradient>
                  <linearGradient id="barB" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#6b7fe0"/><stop offset="1" stopColor="#9fd8ff"/></linearGradient>
                  <filter id="glow"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <g opacity=".22" stroke="#8fb0c8" strokeWidth="1">
                  <path d="M95 390 L520 390"/><path d="M130 350 L555 350"/><path d="M165 310 L590 310"/>
                  <path d="M150 160 L150 390"/><path d="M230 110 L230 390"/><path d="M310 80 L310 390"/><path d="M390 105 L390 390"/><path d="M470 145 L470 390"/>
                </g>
                <ellipse cx="325" cy="395" rx="220" ry="38" fill="none" stroke="#8e7fff" strokeOpacity=".7" filter="url(#glow)"/>
                <ellipse cx="325" cy="395" rx="185" ry="30" fill="none" stroke="#67c9ff" strokeOpacity=".35"/>
                <g filter="url(#glow)">
                  <rect x="150" y="300" width="48" height="90" rx="5" fill="url(#barA)" fillOpacity=".72" stroke="#a7d8ff"/>
                  <rect x="220" y="245" width="48" height="145" rx="5" fill="url(#barB)" fillOpacity=".72" stroke="#b6e1ff"/>
                  <rect x="290" y="185" width="48" height="205" rx="5" fill="url(#barA)" fillOpacity=".8" stroke="#d3caff"/>
                  <rect x="360" y="135" width="48" height="255" rx="5" fill="url(#barB)" fillOpacity=".82" stroke="#d2edff"/>
                  <rect x="430" y="82" width="48" height="308" rx="5" fill="url(#barA)" fillOpacity=".84" stroke="#e1d9ff"/>
                </g>
                <path d="M120 300 C215 250 280 275 350 215 S475 150 535 105" fill="none" stroke="#d8d2ff" strokeWidth="2" filter="url(#glow)"/>
                <circle cx="120" cy="300" r="6" fill="#cfc8ff"/><circle cx="350" cy="215" r="6" fill="#a9e4ff"/><circle cx="535" cy="105" r="7" fill="#d9d4ff"/>
                <g>
                  <rect x="100" y="135" width="82" height="70" rx="16" fill="rgba(255,255,255,.05)" stroke="rgba(159,140,255,.45)"/>
                  <rect x="450" y="45" width="88" height="72" rx="16" fill="rgba(255,255,255,.05)" stroke="rgba(103,201,255,.35)"/>
                  <text x="141" y="177" textAnchor="middle" fill="#b7a9ff" fontSize="28">▥</text><text x="494" y="89" textAnchor="middle" fill="#9fd8ff" fontSize="26">◔</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 bg-white px-6 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />
            <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr]">
              <div className="rounded-3xl bg-[#071526] p-8 text-white sm:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8fb0c8]">Profile</p>
                <p className="mt-6 font-display text-3xl leading-tight sm:text-4xl">{isArabic ? 'أحب أن أجد القصة خلف الأرقام.' : 'I like finding the story behind the numbers.'}</p>
                <div className="mt-8 h-px bg-white/10" />
                <p className="mt-7 text-sm leading-7 text-slate-300">{t.about.paragraphs[0]}</p>
              </div>
              <div>
                <p className="max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base">{t.about.paragraphs[1]}</p>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {t.about.highlights.map((item, index) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                      <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: blue }}>0{index + 1}</span>
                      <h3 className="mt-6 text-sm font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-500">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 bg-[#eef3f7] px-6 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} />
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-300 md:left-1/2 md:-translate-x-1/2" />
              <div className="space-y-7 md:space-y-10">
                {timeline.map((item, index) => (
                  <article key={item.date + item.title} className="relative grid md:grid-cols-2">
                    <div className={index % 2 === 0 ? 'relative md:pe-16' : 'relative md:col-start-2 md:ps-16'}>
                      <div className="rounded-2xl border border-white bg-white p-6 shadow-[0_10px_35px_rgba(22,43,61,0.06)]">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: blue }}>
                          <span>{item.date}</span><span className="h-px w-8 bg-[#b7cad8]" /><span>{item.type}</span>
                        </div>
                        <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-slate-900">{isArabic ? item.titleAr : item.title}</h3>
                        <p className="mt-2 text-xs font-bold text-slate-500">{isArabic ? item.detailAr : item.detail}</p>
                        {'summary' in item && item.summary && <p className="mt-4 text-sm leading-7 text-slate-600">{isArabic ? item.summaryAr : item.summary}</p>}
                      </div>
                    </div>
                    <div className="absolute left-4 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-4 border-[#eef3f7] bg-[#5A86A8] md:left-1/2" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 bg-white px-6 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => {
                const Icon = [FileSpreadsheet, BarChart3, Database, BarChart3, BarChart3, BarChart3, FileSpreadsheet][index] ?? BarChart3;
                return (
                  <div key={skill} className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9eb8ca] hover:shadow-[0_18px_50px_rgba(44,78,105,0.10)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf3f7] text-[#4f7897] transition group-hover:bg-[#0b1d30] group-hover:text-white"><Icon size={18} /></div>
                    <p className="mt-7 text-sm font-bold text-slate-900">{skill}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-slate-400">{isArabic ? 'بيانات وتحليلات' : 'Data & Insights'}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-28 bg-[#071526] px-6 py-24 text-white sm:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow={t.process.eyebrow} title={t.process.title} dark />
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
              {t.process.steps.map((step) => (
                <div key={step.number} className="bg-[#071526] p-7 transition hover:bg-[#0c2035] sm:p-8">
                  <span className="font-display text-4xl text-[#8fb0c8]">{step.number}</span>
                  <h3 className="mt-12 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
                  <div className="mt-8 h-px w-10 bg-[#5A86A8]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 bg-[#f5f7fa] px-6 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} />
            <div className="grid gap-6 lg:grid-cols-2">
              {localizedProjects.map((project, index) => (
                <article key={project.name} className={index === 0 ? 'group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,32,50,0.055)] lg:col-span-2 lg:grid lg:grid-cols-[1.12fr_.88fr]' : 'group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,32,50,0.055)]'}>
                  <button onClick={() => setSelectedProject(project)} className={index === 0 ? 'relative block min-h-full w-full overflow-hidden bg-[#0b1d30] text-start aspect-[16/8] lg:aspect-auto' : 'relative block aspect-[16/9] w-full overflow-hidden bg-[#0b1d30] text-start'}>
                    <img src={`${import.meta.env.BASE_URL}${(project.image ?? '').replace(/^\/+/, '')}`} alt={project.name} loading="lazy" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071526]/65 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#0b1d30]">{project.tools[0]} <ArrowUpRight size={12} /></span>
                  </button>
                  <div className="flex flex-col p-7 sm:p-8">
                    <div className="flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full bg-[#edf3f7] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#4f7897]">{tool}</span>)}</div>
                    <h3 className="mt-5 font-display text-3xl font-medium leading-tight text-slate-950">{project.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                    <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {project.stats?.slice(0, 6).map((stat) => <div key={stat.label} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3"><p className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">{stat.label}</p><p className="mt-1 text-xs font-bold leading-5 text-slate-900">{stat.value}</p></div>)}
                    </div>
                    <button onClick={() => setSelectedProject(project)} className="mt-7 inline-flex w-fit items-center gap-2 text-xs font-bold text-[#3f6b89] hover:text-[#0b1d30]">{t.projects.viewCaseStudy} <ArrowUpRight size={15} /></button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 bg-white px-6 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} />
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <p className="max-w-xl text-base leading-8 text-slate-600">{t.contact.description}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  [Mail, t.contact.email, profile.email, 'mailto:' + profile.email],
                  [Linkedin, t.contact.linkedin, 'amal-ghazwani', profile.linkedin],
                  [Github, t.contact.github, 'amalghazwani', profile.github],
                ].map(([Icon, label, value, href]) => (
                  <a key={String(label)} href={String(href)} target={String(href).startsWith('mailto:') ? undefined : '_blank'} rel={String(href).startsWith('mailto:') ? undefined : 'noreferrer'} className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 transition hover:-translate-y-1 hover:border-[#9eb8ca] hover:shadow-lg">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3f7] text-[#4f7897] group-hover:bg-[#0b1d30] group-hover:text-white"><Icon size={17} /></span>
                    <p className="mt-5 text-xs font-bold text-slate-900">{String(label)}</p>
                    <p className="mt-1 truncate text-[11px] text-slate-400">{String(value)}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#071526] px-6 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
          <div><p className="font-display text-lg">Amal Ghazwani</p><p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">Data Analyst</p></div>
          <p className="text-[10px] text-slate-500">© {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </footer>

      {selectedProject && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030914]/90 p-4 backdrop-blur-md" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true">
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-3xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#071526]/90 text-white" aria-label={isArabic ? 'إغلاق معاينة المشروع' : 'Close project preview'}><X size={18} /></button>
            <img src={import.meta.env.BASE_URL + (selectedProject.image?.replace(/^\/+/, '') ?? '')} alt={selectedProject.name} className="max-h-[70vh] w-full object-contain bg-[#071526]" />
            <div className="p-7 sm:p-9"><p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: blue }}>{selectedProject.tools.join(' • ')}</p><h3 className="mt-3 font-display text-3xl text-slate-950">{selectedProject.name}</h3><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{selectedProject.description}</p></div>
          </div>
        </div>
        , document.body
      )}

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-lg backdrop-blur hover:text-[#0b1d30]" aria-label={isArabic ? 'العودة للأعلى' : 'Back to top'}>↑</button>
    </div>
  );
}
