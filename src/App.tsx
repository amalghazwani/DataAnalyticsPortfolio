import { useEffect, useState } from 'react';
import BackgroundFX from './components/BackgroundFX';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import { translations, type Language } from './data/translations';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'ar' || saved === 'en') return saved;
    } catch {
      /* storage unavailable */
    }
    return 'en';
  });

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = language === 'ar' ? 'أمل غزواني — محللة بيانات' : 'Amal Ghazwani — Data Analyst';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = language === 'ar'
        ? 'ملف أعمال أمل غزواني، محللة بيانات. أحوّل البيانات إلى رؤى واضحة وقصص تساعد على اتخاذ القرار.'
        : 'Portfolio of Amal Ghazwani, Data Analyst. Turning data into clear insights and decision-ready stories.';
    }
    try {
      localStorage.setItem('lang', language);
    } catch {
      /* storage unavailable */
    }
  }, [language]);

  return (
    <div className="relative min-h-screen bg-ink">
      <Intro />
      <BackgroundFX />

      <div className="relative z-10">
        <Navbar
          language={language}
          setLanguage={setLanguage}
          translations={t}
        />

        <main>
          <Hero translations={t.hero} />
          <About translations={t.about} />
          <Experience translations={t.experience} language={language} />
          <Skills translations={t.skills} />
          <Process translations={t.process} />
          <Projects translations={t.projects} />
          <Contact translations={t.contact} />
        </main>

        <Footer translations={t.footer} />
      </div>
    </div>
  );
}
