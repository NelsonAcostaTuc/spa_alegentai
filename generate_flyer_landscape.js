import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        console.log("Lanzando Puppeteer para Flyer Landscape...");
        const browser = await puppeteer.launch({
            // headless: "new"
        });
        const page = await browser.newPage();
        
        const filePath = `file://${path.join(__dirname, 'flyer_landscape.html').replace(/\\/g, '/')}`;
        console.log(`Cargando archivo: ${filePath}`);
        
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        const pdfPath = 'Flyer_Landscape.pdf';
        console.log("Generando PDF en formato apaisado (Landscape)...");
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            landscape: true,
            printBackground: true
        });
        
        await browser.close();
        console.log(`¡PDF generado exitosamente en ${pdfPath}!`);
    } catch (error) {
        console.error("Error al generar el PDF:", error);
    }
})();