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
      "hero.title": "Powering the Future with Generative AI",
      "hero.subtitle": "We transform the way you work with Artificial Intelligence solutions that automate processes, analyze complex data, and boost your enterprise's productivity.",
      "about.title": "About Us",
      "about.description": "We are an expert Generative Artificial Intelligence consultancy. We design and implement custom platforms that solve real-world problems: from advanced image analysis to intelligent financial assistants and 'vibecoding' tools. Our goal is to democratize access to AI for companies in any industry, putting innovation just a click away.",
      "projects.title": "Our Projects",
      "project3.title": "GenAI Image Analytics",
      "project3.desc": "GenAI platform for advanced visual analysis of any type of image. As a prominent use case, it evaluates medical images (like X-Rays) and provides detailed observations of what it analyzes.",
      "project4.title": "AI Financial Assistant",
      "project4.desc": "GenAI-powered application for analyzing statements, forecasting trends, and intelligent market insights.",
      "project5.title": "Vibecoding Platform",
      "project5.desc": "Platform to generate simple applications through prompts, to share and increase enterprise productivity. The generated app is deployed with a single click.",
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
      "hero.title": "Impulsando el Futuro con IA Generativa",
      "hero.subtitle": "Transformamos la manera en que trabajas con soluciones de Inteligencia Artificial que automatizan procesos, analizan datos complejos y potencian la productividad de tu empresa.",
      "about.title": "Quiénes Somos",
      "about.description": "Somos una consultora experta en Inteligencia Artificial Generativa. Nos dedicamos a diseñar e implementar plataformas a medida que resuelven problemas reales: desde análisis avanzado de imágenes hasta asistentes financieros inteligentes y herramientas de 'vibecoding'. Nuestro objetivo es democratizar el acceso a la IA para empresas de cualquier sector, haciendo que la innovación esté a un clic de distancia.",
      "projects.title": "Nuestros Proyectos",
      "project3.title": "Image Analytics con IA Generativa",
      "project3.desc": "Plataforma de GenAI para el análisis visual avanzado de cualquier tipo de imagen. Como caso de uso destacado, evalúa imágenes médicas (como radiografías) y emite observaciones detalladas de lo que analiza.",
      "project4.title": "Asistente Financiero con IA",
      "project4.desc": "Aplicación financiera impulsada por GenAI para el análisis de transacciones, predicción de tendencias y reportes de mercado inteligentes.",
      "project5.title": "Plataforma Vibecoding",
      "project5.desc": "Plataforma para generar por medio de prompts, aplicaciones simples y sencillas, para compartir y aumentar la productividad en una empresa. El despliegue de la app generada es por medio de un simple clic.",
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
      "hero.title": "Impulse für die Zukunft mit generativer KI",
      "hero.subtitle": "Wir verändern die Art und Weise, wie Sie arbeiten, mit Lösungen für künstliche Intelligenz, die Prozesse automatisieren, komplexe Daten analysieren und die Produktivität Ihres Unternehmens steigern.",
      "about.title": "Wer wir sind",
      "about.description": "Wir sind eine Expertenberatung für generative künstliche Intelligenz. Wir entwerfen und implementieren maßgeschneiderte Plattformen, die reale Probleme lösen: von der erweiterten Bildanalyse über intelligente Finanzassistenten bis hin zu 'Vibecoding'-Tools. Unser Ziel ist es, den Zugang zu KI für Unternehmen jeder Branche zu demokratisieren und Innovation mit nur einem Klick verfügbar zu machen.",
      "projects.title": "Unsere Projekte",
      "project3.title": "GenAI Bildanalytik",
      "project3.desc": "GenAI-Plattform für die fortschrittliche visuelle Analyse jeder Art von Bild. Als herausragender Anwendungsfall wertet sie medizinische Bilder (wie Röntgenaufnahmen) aus und liefert detaillierte Beobachtungen.",
      "project4.title": "KI-Finanzassistent",
      "project4.desc": "GenAI-gestützte Finanzanwendung zur Analyse von Kontoauszügen, Trendprognosen und intelligenten Marktanalysen.",
      "project5.title": "Vibecoding Plattform",
      "project5.desc": "Plattform zur Generierung einfacher Anwendungen durch Prompts, zum Teilen und zur Steigerung der Unternehmensproduktivität. Die Bereitstellung der generierten App erfolgt mit einem einzigen Klick.",
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
      "hero.title": "Propulser l'Avenir avec l'IA Générative",
      "hero.subtitle": "Nous transformons votre façon de travailler avec des solutions d'Intelligence Artificielle qui automatisent les processus, analysent des données complexes et boostent la productivité de votre entreprise.",
      "about.title": "Qui Sommes-Nous",
      "about.description": "Nous sommes un cabinet de conseil expert en Intelligence Artificielle Générative. Nous concevons et mettons en œuvre des plateformes sur mesure qui résolvent des problèmes concrets : de l'analyse avancée d'images aux assistants financiers intelligents et aux outils de 'vibecoding'. Notre objectif est de démocratiser l'accès à l'IA pour les entreprises de tout secteur, en mettant l'innovation à portée de clic.",
      "projects.title": "Nos Projets",
      "project3.title": "Analyse d'Images par GenAI",
      "project3.desc": "Plateforme GenAI pour l'analyse visuelle avancée de tout type d'image. Comme cas d'usage phare, elle évalue des images médicales (comme des radiographies) et fournit des observations détaillées de ce qu'elle analyse.",
      "project4.title": "Assistant Financier par IA",
      "project4.desc": "Application financière propulsée par GenAI pour l'analyse des relevés, la prévision des tendances et les analyses de marché intelligentes.",
      "project5.title": "Plateforme Vibecoding",
      "project5.desc": "Plateforme pour générer des applications simples via des prompts, à partager et pour augmenter la productivité de l'entreprise. Le déploiement de l'application générée se fait en un seul clic.",
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
