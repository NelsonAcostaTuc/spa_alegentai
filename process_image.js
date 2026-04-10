import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const imgPath = path.join(__dirname, 'public', 'imagen_alegent.jpeg');
    const base64Img = fs.readFileSync(imgPath).toString('base64');
    const dataUrl = `data:image/jpeg;base64,${base64Img}`;

    const newBase64 = await page.evaluate(async (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i+1];
                    const b = data[i+2];
                    
                    // The background is very dark. 
                    // Let's replace anything that is dark with white.
                    if (r < 70 && g < 70 && b < 80) {
                        data[i] = 255;
                        data[i+1] = 255;
                        data[i+2] = 255;
                    }
                }
                
                ctx.putImageData(imageData, 0, 0);
                resolve(canvas.toDataURL('image/jpeg', 0.95));
            };
            img.src = url;
        });
    }, dataUrl);

    const base64Data = newBase64.replace(/^data:image\/jpeg;base64,/, "");
    fs.writeFileSync(path.join(__dirname, 'public', 'imagen_alegent_white.jpeg'), base64Data, 'base64');
    
    await browser.close();
    console.log("Image processed and saved as imagen_alegent_white.jpeg");
})();