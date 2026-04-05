import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';

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
      {/* Futuristic Background Elements */}
      <div className="cyber-grid"></div>
      <div className="scanlines"></div>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">ALEGENT</div>
        
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#home" onClick={() => setMenuOpen(false)}>{t('nav.home') || 'Home'}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t('nav.about') || 'About'}</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>{t('nav.projects') || 'Projects'}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t('nav.contact') || 'Contact'}</a>
          
          <div className="lang-switcher" onClick={() => setLangOpen(!langOpen)}>
            <div className="current-lang">
              <img src={flags[i18n.language] || flags.en} alt={i18n.language} />
              <span>{(i18n.language || 'en').toUpperCase()}</span>
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
          <h1><span className="text-gradient">{t('hero.title') || 'Next-Gen AI Integration'}</span></h1>
          <p>{t('hero.subtitle') || 'Transforming enterprises with cutting-edge artificial intelligence, seamless automation, and forward-thinking strategies.'}</p>
          <a href="#projects" className="primary-btn">
            Explore Solutions <ChevronRight size={18} />
          </a>
        </section>

        <section id="about" className="about-section">
          <div className="section-header">
            <h2>{t('about.title') || 'About Us'}</h2>
          </div>
          <p className="about-text">{t('about.description') || 'We specialize in deploying highly autonomous, scalable, and intelligent systems. Our mission is to bridge the gap between complex AI research and enterprise-ready solutions.'}</p>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-header">
            <h2>{t('projects.title') || 'Featured Deployments'}</h2>
          </div>
          <div className="stacked-projects-container">
            
            <div className="stacked-project-card">
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/cv_analyze.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>{t('project7.title') || 'CV Analyzer AI'}</h3>
                <p>{t('project7.desc') || 'Advanced neural network processing for rapid resume parsing and talent acquisition automation.'}</p>
              </div>
            </div>

            <div className="stacked-project-card reverse-layout">
              <div className="project-content">
                <h3>{t('project6.title') || 'Data Analytics Engine'}</h3>
                <p>{t('project6.desc') || 'Real-time big data processing pipeline providing predictive insights and anomaly detection.'}</p>
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
                <h3>{t('project5.title') || 'Vibecoding'}</h3>
                <p>{t('project5.desc') || 'Generative AI assistant tailored for rapid software prototyping and intuitive code generation.'}</p>
              </div>
            </div>

            <div className="stacked-project-card reverse-layout">
              <div className="project-content">
                <h3>{t('project4.title') || 'Visual Recognition'}</h3>
                <p>{t('project4.desc') || 'Deep learning models trained for high-accuracy object detection and image segmentation.'}</p>
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
                <h3>{t('project3.title') || 'Image Detection AI'}</h3>
                <p>{t('project3.desc') || 'Enterprise-grade facial and pattern recognition systems deployed at the edge.'}</p>
              </div>
            </div>

            <div className="stacked-project-card reverse-layout">
              <div className="project-content">
                <h3>{t('project8.title') || 'Terracem3 Integration'}</h3>
                <p>{t('project8.desc') || 'Automated infrastructure management powered by smart heuristic agents.'}</p>
              </div>
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/terracem3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="stacked-project-card">
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/n8n_example.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>{t('project9.title') || 'N8N Workflow Automation'}</h3>
                <p>{t('project9.desc') || 'Complex multi-node automation sequences utilizing dynamic AI-driven routing.'}</p>
              </div>
            </div>

            <div className="stacked-project-card reverse-layout">
              <div className="project-content">
                <h3>{t('project10.title') || 'Pedagogical Agent'}</h3>
                <p>{t('project10.desc') || 'Interactive AI tutor leveraging LLMs to provide personalized learning experiences.'}</p>
              </div>
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/agente_pedagogico.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="stacked-project-card">
              <div className="project-video-wrapper">
                <video autoPlay loop muted playsInline controls>
                  <source src="/agente_administrativo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>{t('project11.title') || 'ADMIN DISRUPTOR'}</h3>
                <p>{t('project11.desc') || 'ADMIN DISRUPTOR es un agente virtual de "Guerrilla Jurisprudence" que democratiza la normativa del Instituto Técnico (UNT) mediante IA. Analiza documentos con OCR y una base vectorial de 20 leyes, garantizando rigor jurídico absoluto sin margen para la improvisación. Su diferencial es el sentido crítico: identifica vacíos y contradicciones legales, proponiendo soluciones y recursos administrativos proactivos. Es una herramienta estratégica diseñada para agilizar el acceso al derecho institucional y resolver conflictos burocráticos de forma eficiente.'}</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer id="contact" className="footer-section">
        <h2>{t('contact.title') || 'Initialize Connection'}</h2>
        <a 
          href="https://wa.me/5493815301789?text=Hello!%20I%20would%20like%20to%20discuss%20an%20AI%20project." 
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t('contact.button') || 'Connect via WhatsApp'}
        </a>
      </footer>
    </div>
  );
}

export default App;