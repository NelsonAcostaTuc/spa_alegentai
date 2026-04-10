const fs = require('fs');
let html = fs.readFileSync('flyer_landscape.html', 'utf8');

// Replace the logo (handling multiple occurrences)
html = html.replace(/imagen_alegent\.jpeg/g, 'imagen_alegent_white.jpeg');

// Change sidebar logo background and text color
html = html.replace('.sidebar-logo {\r\n            background: var(--navy); height: 35mm; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;\r\n        }', '.sidebar-logo {\r\n            background: white; height: 35mm; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--navy);\r\n        }');
html = html.replace('.sidebar-logo {\n            background: var(--navy); height: 35mm; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;\n        }', '.sidebar-logo {\n            background: white; height: 35mm; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--navy);\n        }');

// Remove left FLYER CORPORATIVO
html = html.replace('<h1 class=\"title main-title\">FLYER<br>CORPORATIVO</h1>', '');

// Remove right FLYER CORPORATIVO
html = html.replace('<h1 class=\"main-title\">FLYER<br>CORPORATIVO</h1>', '');

fs.writeFileSync('flyer_landscape.html', html);
console.log('Replacements complete.');