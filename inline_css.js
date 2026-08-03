import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const htmlPath = path.join(distDir, 'index.html');

function inlineCss() {
  if (!fs.existsSync(htmlPath)) {
    console.log('dist/index.html not found, skipping inline CSS script.');
    return;
  }

  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Find stylesheet link tags in html
  // Example: <link rel="stylesheet" crossorigin href="/Snowiest-City-Tree-Service-/assets/index-B0av3a3e.css">
  const linkRegex = /<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+\.css)["'][^>]*>/gi;
  let match;
  let modified = false;

  while ((match = linkRegex.exec(htmlContent)) !== null) {
    const fullTag = match[0];
    const cssHref = match[1];
    
    // Resolve local path of css file
    // e.g. /Snowiest-City-Tree-Service-/assets/index-B0av3a3e.css -> assets/index-B0av3a3e.css
    const cssBaseName = path.basename(cssHref);
    const cssPath = path.join(distDir, 'assets', cssBaseName);

    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      const styleTag = `<style>${cssContent}</style>`;
      
      htmlContent = htmlContent.replace(fullTag, styleTag);
      console.log(`Inlined CSS: ${cssBaseName} into dist/index.html`);
      modified = true;
    } else {
      console.log(`CSS file not found locally: ${cssPath}`);
    }
  }

  if (modified) {
    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    console.log('Successfully saved dist/index.html with inlined critical CSS.');
  }
}

inlineCss();
