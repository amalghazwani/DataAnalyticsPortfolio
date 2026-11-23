import { useEffect, useState } from 'react';
import BackgroundFX from './components/BackgroundFX';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import { translations, type Language } from './data/translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
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
