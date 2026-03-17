import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

function App() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const flags = {
    ar: "https://flagcdn.com/w20/ar.png",
    en: "https://flagcdn.com/w20/us.png",
    de: "https://flagcdn.com/w20/de.png",
    fr: "https://flagcdn.com/w20/fr.png"
  };
  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo">Alegent AI</div>
        
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#home" onClick={() => setMenuOpen(false)}>{t('nav.home')}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>{t('nav.projects')}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a>
          
          <div className="lang-switcher" onClick={() => setLangOpen(!langOpen)}>
            <div className="current-lang">
              <img src={flags[i18n.language]} alt={i18n.language} />
              <span>{i18n.language.toUpperCase()}</span>
            </div>
            {langOpen && (
              <div className="lang-menu">
                <div onClick={() => changeLanguage('ar')}><img src={flags.ar} alt="AR" /> AR</div>
                <div onClick={() => changeLanguage('en')}><img src={flags.en} alt="EN" /> EN</div>
                <div onClick={() => changeLanguage('de')}><img src={flags.de} alt="DE" /> DE</div>
                <div onClick={() => changeLanguage('fr')}><img src={flags.fr} alt="FR" /> FR</div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
        </section>

        <section id="about" className="about-section">
          <h2>{t('about.title')}</h2>
          <p>{t('about.description')}</p>
        </section>

        <section id="projects" className="projects-section">
          <h2>{t('projects.title')}</h2>
          <div className="projects-grid">
            <div className="project-card">
              <video autoPlay loop muted playsInline>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="project-info">
                <h3>{t('project1.title')}</h3>
                <p>{t('project1.desc')}</p>
              </div>
            </div>
            <div className="project-card">
              <video autoPlay loop muted playsInline>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
              <div className="project-info">
                <h3>{t('project2.title')}</h3>
                <p>{t('project2.desc')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer-section">
        <h2>{t('contact.title')}</h2>
        <a 
          href="https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20discuss%20a%20project." 
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('contact.button')}
        </a>
      </footer>
    </div>
  );
}

export default App;
