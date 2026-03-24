import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

function App() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Background Ambience */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Alegent AI</div>
        
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
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
          <div className="hero-tag">Innovation Engine</div>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-header">
            <h2>{t('about.title')}</h2>
          </div>
          <p className="about-text">{t('about.description')}</p>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-header">
            <h2>{t('projects.title')}</h2>
            <p>A selection of our latest and most impactful work.</p>
          </div>
          <div className="stacked-projects-container">
            
            <div className="stacked-project-card">
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/cv_analyze.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>{t('project7.title')}</h3>
                <p>{t('project7.desc')}</p>
              </div>
            </div>

            <div className="stacked-project-card reverse-layout">
              <div className="project-content">
                <h3>{t('project6.title')}</h3>
                <p>{t('project6.desc')}</p>
              </div>
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/Data_Analyze.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="stacked-project-card">
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/Vibecoding.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>{t('project5.title')}</h3>
                <p>{t('project5.desc')}</p>
              </div>
            </div>

            <div className="stacked-project-card reverse-layout">
              <div className="project-content">
                <h3>{t('project4.title')}</h3>
                <p>{t('project4.desc')}</p>
              </div>
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/analyze_image.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="stacked-project-card">
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/detect_imagen.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>{t('project3.title')}</h3>
                <p>{t('project3.desc')}</p>
              </div>
            </div>

            <div className="stacked-project-card reverse-layout">
              <div className="project-content">
                <h3>{t('project8.title')}</h3>
                <p>{t('project8.desc')}</p>
              </div>
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/TerraceM-3_Example.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer id="contact" className="footer-section">
        <h2>{t('contact.title')}</h2>
        <p>Ready to build something amazing together?</p>
        <a 
          href="https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20discuss%20a%20project." 
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t('contact.button')}
        </a>
      </footer>
    </div>
  );
}

export default App;