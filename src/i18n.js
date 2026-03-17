import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.title": "Intelligent Solutions for Tomorrow",
      "hero.subtitle": "We build cutting-edge software powered by Artificial Intelligence.",
      "about.title": "About Us",
      "about.description": "We are a specialized software development consultancy dedicated to integrating advanced AI into modern digital products, automating workflows, and building intelligent web and mobile applications.",
      "projects.title": "Our Projects",
      "project1.title": "Smart CRM Integration",
      "project1.desc": "AI-Powered Customer Success Platform",
      "project2.title": "Automated Data Analysis",
      "project2.desc": "Machine Learning Dashboard Toolkit",
      "contact.title": "Ready to start your project?",
      "contact.button": "Contact us on WhatsApp"
    }
  },
  ar: {
    translation: {
      "nav.home": "Inicio",
      "nav.about": "Nosotros",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "hero.title": "Soluciones Inteligentes para el Mañana",
      "hero.subtitle": "Construimos software de vanguardia impulsado por Inteligencia Artificial.",
      "about.title": "Sobre Nosotros",
      "about.description": "Somos una consultoría especializada en desarrollo de software, dedicada a integrar IA avanzada en productos digitales modernos, automatizar flujos de trabajo y crear aplicaciones web y móviles inteligentes.",
      "projects.title": "Nuestros Proyectos",
      "project1.title": "Integración CRM Inteligente",
      "project1.desc": "Plataforma de Éxito del Cliente potenciada por IA",
      "project2.title": "Análisis de Datos Automatizado",
      "project2.desc": "Kit de herramientas para Dashboards de Machine Learning",
      "contact.title": "¿Listo para comenzar tu proyecto?",
      "contact.button": "Contáctanos por WhatsApp"
    }
  },
  de: {
    translation: {
      "nav.home": "Startseite",
      "nav.about": "Über Uns",
      "nav.projects": "Projekte",
      "nav.contact": "Kontakt",
      "hero.title": "Intelligente Lösungen für Morgen",
      "hero.subtitle": "Wir entwickeln hochmoderne Software, die durch künstliche Intelligenz angetrieben wird.",
      "about.title": "Über Uns",
      "about.description": "Wir sind eine spezialisierte Softwareentwicklungsberatung, die sich der Integration fortschrittlicher KI in moderne digitale Produkte, der Automatisierung von Arbeitsabläufen und der Entwicklung intelligenter Web- und mobilen Anwendungen widmet.",
      "projects.title": "Unsere Projekte",
      "project1.title": "Intelligente CRM-Integration",
      "project1.desc": "KI-gestützte Customer Success Plattform",
      "project2.title": "Automatisierte Datenanalyse",
      "project2.desc": "Machine Learning Dashboard Toolkit",
      "contact.title": "Bereit, Ihr Projekt zu starten?",
      "contact.button": "Kontaktieren Sie uns über WhatsApp"
    }
  },
  fr: {
    translation: {
      "nav.home": "Accueil",
      "nav.about": "À Propos",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      "hero.title": "Solutions Intelligentes pour Demain",
      "hero.subtitle": "Nous développons des logiciels de pointe propulsés par l'Intelligence Artificielle.",
      "about.title": "À Propos de Nous",
      "about.description": "Nous sommes un cabinet de conseil en développement logiciel spécialisé, dédié à l'intégration d'une IA avancée dans des produits numériques modernes, à l'automatisation des flux de travail et à la création d'applications web et mobiles intelligentes.",
      "projects.title": "Nos Projets",
      "project1.title": "Intégration CRM Intelligente",
      "project1.desc": "Plateforme de Succès Client propulsée par l'IA",
      "project2.title": "Analyse de Données Automatisée",
      "project2.desc": "Boîte à outils de tableau de bord d'Apprentissage Automatique",
      "contact.title": "Prêt à commencer votre projet ?",
      "contact.button": "Contactez-nous sur WhatsApp"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
