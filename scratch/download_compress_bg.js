import fs from 'fs';
import https from 'https';
import path from 'path';
import sharp from 'sharp';

const imageUrl = 'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70';
const tempJpg = path.join(process.cwd(), 'scratch', 'temp_canopy.jpg');
const mobileWebp = path.join(process.cwd(), 'public', 'canopy_bg_mobile.webp');
const desktopWebp = path.join(process.cwd(), 'public', 'canopy_bg_desktop.webp');

console.log('Downloading high-res canopy image from Unsplash...');
const file = fs.createWriteStream(tempJpg);
https.get(imageUrl, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download complete. Resizing and compressing...');

    // Mobile version: width 400, quality 10
    const pMobile = sharp(tempJpg)
      .resize({ width: 400 })
      .webp({ quality: 10, effort: 6 })
      .toFile(mobileWebp)
      .then((info) => console.log(`Created mobile canopy background: ${info.size} bytes`));

    // Desktop version: width 800, quality 15
    const pDesktop = sharp(tempJpg)
      .resize({ width: 800 })
      .webp({ quality: 15, effort: 6 })
      .toFile(desktopWebp)
      .then((info) => console.log(`Created desktop canopy background: ${info.size} bytes`));

    Promise.all([pMobile, pDesktop])
      .then(() => {
        console.log('All backgrounds compressed successfully!');
        if (fs.existsSync(tempJpg)) {
          fs.unlinkSync(tempJpg);
        }
      })
      .catch((err) => {
        console.error('Error during compression:', err);
      });
  });
}).on('error', (err) => {
  console.error('Error downloading file:', err);
});
