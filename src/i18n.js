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
      "about.description": "We are an expert Generative Artificial Intelligence consultancy. We design and implement custom platforms that solve real-world problems: from automated data analysis and computer vision to the development of advanced corporate assistants. Our goal is to democratize access to AI for companies in any industry, putting technological innovation just a click away.",
      "projects.title": "Our Projects",
      "project3.title": "GenAI Image Analytics",
      "project3.desc": "GenAI platform for advanced visual analysis of any type of image. As a prominent use case, it evaluates medical images (like X-Rays) and provides detailed observations of what it analyzes.",
      "project4.title": "AI Financial Assistant",
      "project4.desc": "GenAI-powered application for analyzing statements, forecasting trends, and AI market insights.",
      "project5.title": "Vibecoding Platform",
      "project5.desc": "Platform to generate simple applications through prompts, to share and increase enterprise productivity. The generated app is deployed with a single click.",
      "project6.title": "AI Data Analysis Dashboard",
      "project6.desc": "This is an AI Data Analysis Dashboard. As a user, you upload your file (Excel or CSV) and ask direct questions in natural language. In the background, Azure OpenAI interprets your query, and E2B safely and automatically executes Python code to create and return the chart you requested, all in seconds and without needing to know how to code.",
      "project7.title": "Real-time Object Tracking",
      "project7.desc": "Object Tracking in action: Computer vision pipeline operating in real-time. The YOLOv8 neural network handles frame-by-frame detection, while the ByteTrack algorithm assigns unique IDs and maintains the exact track of each moving element.",
      "project8.title": "TerraceM-3: Satellite AI Assistant",
      "project8.desc": "TerraceM-3 allows you to 'chat' with the precision of the ICESat-2 satellite to understand our planet instantly. It transforms complex laser measurements into visual charts and clear answers, eliminating the technical barrier forever. It is the intelligent assistant that turns scientific data into fast, simple, and actionable decisions. With TerraceM-3, advanced satellite science is now as simple as having a conversation...",
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
      "about.description": "Somos una consultora experta en Inteligencia Artificial Generativa. Nos dedicamos a diseñar e implementar plataformas a medida que resuelven problemas reales: desde análisis de datos automatizados y visión computacional, hasta el desarrollo de asistentes corporativos avanzados. Nuestro objetivo es democratizar el acceso a la IA para empresas de cualquier sector, haciendo que la innovación tecnológica esté a un clic de distancia.",
      "projects.title": "Nuestros Proyectos",
      "project3.title": "Image Analytics con IA Generativa",
      "project3.desc": "Plataforma de GenAI para el análisis visual avanzado de cualquier tipo de imagen. Como caso de uso destacado, evalúa imágenes médicas (como radiografías) y emite observaciones detalladas de lo que analiza.",
      "project4.title": "Asistente Financiero con IA",
      "project4.desc": "Aplicación financiera impulsada por GenAI para el análisis de transacciones, predicción de tendencias y reportes de mercado con IA.",
      "project5.title": "Plataforma Vibecoding",
      "project5.desc": "Plataforma para generar por medio de prompts, aplicaciones simples y sencillas, para compartir y aumentar la productividad en una empresa. El despliegue de la app generada es por medio de un simple clic.",
      "project6.title": "Dashboard de IA para Análisis de Datos",
      "project6.desc": "Este es un Dashboard de IA para Análisis de Datos. Como usuario, subes tu archivo (Excel o CSV) y le haces preguntas directas en lenguaje natural. Por detrás, la IA de Azure OpenAI interpreta tu consulta y E2B ejecuta código Python automáticamente de forma segura para crear y devolverte el gráfico que pediste, todo en segundos y sin necesidad de saber programar.",
      "project7.title": "Object Tracking en Tiempo Real",
      "project7.desc": "Object Tracking en acción: Pipeline de visión computacional operando en tiempo real. La red neuronal YOLOv8 se encarga de la detección cuadro por cuadro, mientras que el algoritmo ByteTrack asigna IDs únicos y mantiene el rastro exacto de cada elemento en movimiento.",
      "project8.title": "TerraceM-3: Asistente Satelital con IA",
      "project8.desc": "TerraceM-3 te permite \"chatear\" con la precisión del satélite ICESat-2 para entender nuestro planeta al instante. Transforma mediciones láser complejas en gráficos visuales y respuestas claras, eliminando la barrera técnica para siempre. Es el asistente inteligente que convierte datos científicos en decisiones rápidas, sencillas y accionables. Con TerraceM-3, la ciencia satelital avanzada ahora es tan simple como tener una conversación...",
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
      "about.description": "Wir sind eine Expertenberatung für generative künstliche Intelligenz. Wir entwerfen und implementieren maßgeschneiderte Plattformen, die reale Probleme lösen: von der automatisierten Datenanalyse und Computer Vision bis hin zur Entwicklung fortschrittlicher Unternehmensassistenten. Unser Ziel ist es, den Zugang zu KI für Unternehmen jeder Branche zu demokratisieren und technologische Innovation mit nur einem Klick verfügbar zu machen.",
      "projects.title": "Unsere Projekte",
      "project3.title": "GenAI Bildanalytik",
      "project3.desc": "GenAI-Plattform für die fortschrittliche visuelle Analyse jeder Art von Bild. Als herausragender Anwendungsfall wertet sie medizinische Bilder (wie Röntgenaufnahmen) aus und liefert detaillierte Beobachtungen.",
      "project4.title": "KI-Finanzassistent",
      "project4.desc": "GenAI-gestützte Finanzanwendung zur Analyse von Kontoauszügen, Trendprognosen und KI-Marktanalysen.",
      "project5.title": "Vibecoding Plattform",
      "project5.desc": "Plattform zur Generierung einfacher Anwendungen durch Prompts, zum Teilen und zur Steigerung der Unternehmensproduktivität. Die Bereitstellung der generierten App erfolgt mit einem einzigen Klick.",
      "project6.title": "KI-Datenanalyse-Dashboard",
      "project6.desc": "Dies ist ein KI-Dashboard zur Datenanalyse. Als Benutzer laden Sie Ihre Datei (Excel oder CSV) hoch und stellen direkte Fragen in natürlicher Sprache. Im Hintergrund interpretiert die Azure OpenAI-KI Ihre Anfrage, und E2B führt automatisch und sicher Python-Code aus, um das gewünschte Diagramm in Sekundenschnelle zu erstellen und zurückzugeben, ganz ohne Programmierkenntnisse.",
      "project7.title": "Echtzeit-Objektverfolgung",
      "project7.desc": "Objektverfolgung in Aktion: Computer Vision-Pipeline, die in Echtzeit arbeitet. Das neuronale Netzwerk YOLOv8 übernimmt die bildweise Erkennung, während der ByteTrack-Algorithmus eindeutige IDs zuweist und die genaue Spur jedes sich bewegenden Elements aufrechterhält.",
      "project8.title": "TerraceM-3: Satelliten-KI-Assistent",
      "project8.desc": "Mit TerraceM-3 können Sie mit der Präzision des ICESat-2-Satelliten 'chatten', um unseren Planeten sofort zu verstehen. Es wandelt komplexe Lasermessungen in visuelle Diagramme und klare Antworten um und beseitigt die technische Barriere für immer. Es ist der intelligente Assistent, der wissenschaftliche Daten in schnelle, einfache und umsetzbare Entscheidungen verwandelt. Mit TerraceM-3 ist fortschrittliche Satellitenwissenschaft jetzt so einfach wie eine Unterhaltung...",
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
      "about.description": "Nous sommes un cabinet de conseil expert en Intelligence Artificielle Générative. Nous concevons et mettons en œuvre des plateformes sur mesure qui résolvent des problèmes concrets : de l'analyse automatisée des données et de la vision par ordinateur au développement d'assistants d'entreprise avancés. Notre objectif est de démocratiser l'accès à l'IA pour les entreprises de tout secteur, en mettant l'innovation technologique à portée de clic.",
      "projects.title": "Nos Projets",
      "project3.title": "Analyse d'Images par GenAI",
      "project3.desc": "Plateforme GenAI pour l'analyse visuelle avancée de tout type d'image. Comme cas d'usage phare, elle évalue des images médicales (comme des radiographies) et fournit des observations détaillées de ce qu'elle analyse.",
      "project4.title": "Assistant Financier par IA",
      "project4.desc": "Application financière propulsée par GenAI pour l'analyse des relevés, la prévision des tendances et les analyses de marché par IA.",
      "project5.title": "Plateforme Vibecoding",
      "project5.desc": "Plateforme pour générer des applications simples via des prompts, à partager et pour augmenter la productivité de l'entreprise. Le déploiement de l'application générée se fait en un seul clic.",
      "project6.title": "Tableau de Bord IA d'Analyse de Données",
      "project6.desc": "Il s'agit d'un tableau de bord IA d'analyse de données. En tant qu'utilisateur, vous téléchargez votre fichier (Excel ou CSV) et posez des questions directes en langage naturel. En arrière-plan, l'IA Azure OpenAI interprète votre requête et E2B exécute automatiquement et en toute sécurité du code Python pour créer et renvoyer le graphique que vous avez demandé, le tout en quelques secondes et sans nécessiter de compétences en programmation.",
      "project7.title": "Suivi d'Objets en Temps Réel",
      "project7.desc": "Suivi d'objets en action : pipeline de vision par ordinateur fonctionnant en temps réel. Le réseau de neurones YOLOv8 gère la détection image par image, tandis que l'algorithme ByteTrack attribue des identifiants uniques et maintient la trace exacte de chaque élément en mouvement.",
      "project8.title": "TerraceM-3 : Assistant IA Satellitaire",
      "project8.desc": "TerraceM-3 vous permet de 'discuter' avec la précision du satellite ICESat-2 pour comprendre notre planète instantanément. Il transforme des mesures laser complexes en graphiques visuels et en réponses claires, éliminant à jamais la barrière technique. C'est l'assistant intelligent qui transforme les données scientifiques en décisions rapides, simples et exploitables. Avec TerraceM-3, la science satellitaire avancée est désormais aussi simple qu'une conversation...",
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
