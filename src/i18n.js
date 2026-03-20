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
      "project3.title": "AI Medical Image Analysis",
      "project3.desc": "GenAI application for X-Ray analysis and automated diagnostic reporting based on visual observations.",
      "project4.title": "AI Financial Assistant",
      "project4.desc": "GenAI-powered application for analyzing statements, forecasting trends, and intelligent market insights.",
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
      "project3.title": "Análisis de Imágenes Médicas (GenAI)",
      "project3.desc": "Aplicación de IA Generativa para analizar radiografías (Rayos X) y emitir opiniones diagnósticas sobre lo que observa.",
      "project4.title": "Asistente Financiero con IA",
      "project4.desc": "Aplicación financiera impulsada por GenAI para el análisis de transacciones, predicción de tendencias y reportes de mercado inteligentes.",
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
      "project3.title": "KI-Medizinische Bildanalyse",
      "project3.desc": "GenAI-Anwendung zur Röntgenanalyse und automatisierten Diagnoseberichterstattung basierend auf visuellen Beobachtungen.",
      "project4.title": "KI-Finanzassistent",
      "project4.desc": "GenAI-gestützte Finanzanwendung zur Analyse von Kontoauszügen, Trendprognosen und intelligenten Marktanalysen.",
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
      "project3.title": "Analyse d'Images Médicales par l'IA",
      "project3.desc": "Application GenAI pour l'analyse des radiographies (Rayons X) et la génération de rapports de diagnostic automatisés.",
      "project4.title": "Assistant Financier par IA",
      "project4.desc": "Application financière propulsée par GenAI pour l'analyse des relevés, la prévision des tendances et les analyses de marché intelligentes.",
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
