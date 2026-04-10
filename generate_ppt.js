import pptxgen from 'pptxgenjs';

let pptx = new pptxgen();

// Paleta de colores de Alegent AI
const colors = {
    bg: '020205',
    primary: '00F0FF',
    secondary: 'FF0055',
    accent: '8B5CF6',
    text: 'F8FAFC',
    textMuted: '94A3B8'
};

// Configurar el layout para que sea panorámico 16:9
pptx.layout = 'LAYOUT_16x9';

// Definir un Master Slide para aplicar el fondo y estilos a todas las diapositivas
pptx.defineSlideMaster({
  title: 'MASTER_ALEGENT',
  background: { color: colors.bg },
  objects: [
    // Barra superior decorativa (primary color)
    { rect: { x: 0, y: 0, w: '100%', h: 0.1, fill: { color: colors.primary } } },
    // Logo / Texto en la esquina inferior derecha
    { text: { text: 'ALEGENT AI', options: { x: '80%', y: '92%', w: '20%', fontSize: 12, color: colors.primary, bold: true, align: 'right' } } }
  ]
});

// Textos base
const aboutTitle = "Quiénes Somos";
const aboutDesc = "Somos una consultora experta en Inteligencia Artificial Generativa. Nos dedicamos a diseñar e implementar plataformas a medida que resuelven problemas reales: desde análisis de datos automatizados y visión computacional, hasta el desarrollo de asistentes corporativos avanzados. Nuestro objetivo es democratizar el acceso a la IA para empresas de cualquier sector, haciendo que la innovación tecnológica esté a un clic de distancia.";

// ---------------------------------------------
// Diapositiva 1: Nosotros (About Us)
// ---------------------------------------------
let slide0 = pptx.addSlide({ masterName: 'MASTER_ALEGENT' });
slide0.addText("ALEGENT AI", { 
    x: 0.5, y: 0.8, w: '90%', fontSize: 44, bold: true, color: colors.primary 
});
slide0.addText(aboutTitle.toUpperCase(), { 
    x: 0.5, y: 1.8, w: '90%', fontSize: 24, bold: true, color: colors.text 
});
slide0.addText(aboutDesc, { 
    x: 0.5, y: 2.5, w: '80%', fontSize: 18, color: colors.textMuted, align: 'justify', lineSpacing: 28 
});

// ---------------------------------------------
// Diapositiva 2: TerraceM-3
// ---------------------------------------------
let slide1 = pptx.addSlide({ masterName: 'MASTER_ALEGENT' });
slide1.addText("TerraceM-3: Asistente Satelital con IA", { 
    x: 0.5, y: 0.5, w: '90%', fontSize: 28, bold: true, color: colors.primary 
});
slide1.addText("TerraceM-3 te permite \"chatear\" con la precisión del satélite ICESat-2 para entender nuestro planeta al instante. Transforma mediciones láser complejas en gráficos visuales y respuestas claras, eliminando la barrera técnica para siempre. Es el asistente inteligente que convierte datos científicos en decisiones rápidas, sencillas y accionables. Con TerraceM-3, la ciencia satelital avanzada ahora es tan simple como tener una conversación.", { 
    x: 0.5, y: 1.2, w: '90%', fontSize: 13, color: 'F8FAFC', align: 'justify' 
});
slide1.addMedia({ 
    type: "video", path: "./public/terracem3.mp4", 
    x: 1.6, y: 2.6, w: 7, h: 4.5 
});

// ---------------------------------------------
// Diapositiva 3: Vibecoding
// ---------------------------------------------
let slide2 = pptx.addSlide({ masterName: 'MASTER_ALEGENT' });
slide2.addText("Plataforma Vibecoding", { 
    x: 0.5, y: 0.5, w: '90%', fontSize: 28, bold: true, color: colors.primary 
});
slide2.addText("Plataforma para generar por medio de prompts, aplicaciones simples y sencillas, para compartir y aumentar la productividad en una empresa. El despliegue de la app generada es por medio de un simple clic.", { 
    x: 0.5, y: 1.2, w: '90%', fontSize: 14, color: 'F8FAFC', align: 'justify' 
});
slide2.addMedia({ 
    type: "video", path: "./public/Vibecoding.mp4", 
    x: 1.6, y: 2.3, w: 7, h: 4.5 
});

// ---------------------------------------------
// Diapositiva 4: Análisis de Datos
// ---------------------------------------------
let slide3 = pptx.addSlide({ masterName: 'MASTER_ALEGENT' });
slide3.addText("Dashboard de IA para Análisis de Datos", { 
    x: 0.5, y: 0.5, w: '90%', fontSize: 28, bold: true, color: colors.primary 
});
slide3.addText("Como usuario, subes tu archivo (Excel o CSV) y le haces preguntas directas en lenguaje natural. Por detrás, la IA de Azure OpenAI interpreta tu consulta y E2B ejecuta código Python automáticamente de forma segura para crear y devolverte el gráfico que pediste, todo en segundos y sin necesidad de saber programar.", { 
    x: 0.5, y: 1.2, w: '90%', fontSize: 13, color: 'F8FAFC', align: 'justify' 
});
slide3.addMedia({ 
    type: "video", path: "./public/Data_Analyze.mp4", 
    x: 1.6, y: 2.6, w: 7, h: 4.5 
});

// Guardar el archivo PPTX
pptx.writeFile({ fileName: "Brochure_AlegentAI_V2.pptx" }).then(() => {
    console.log("¡El archivo Brochure_AlegentAI_V2.pptx se ha creado exitosamente!");
}).catch(err => {
    console.error("Error al crear el PPTX:", err);
});
