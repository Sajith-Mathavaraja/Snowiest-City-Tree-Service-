import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = fs.readdirSync(publicDir);

async function run() {
  // Clean up any temp files first
  for (const file of files) {
    if (file.startsWith('temp_')) {
      try {
        fs.unlinkSync(path.join(publicDir, file));
      } catch (e) {}
    }
  }

  const cleanFiles = fs.readdirSync(publicDir);
  for (const file of cleanFiles) {
    if (file.endsWith('.webp') && !file.includes('logo') && !file.startsWith('temp_')) {
      const filePath = path.join(publicDir, file);
      console.log(`Compressing ${file}...`);
      
      try {
        const fileBuffer = fs.readFileSync(filePath);
        const compressedBuffer = await sharp(fileBuffer)
          .resize({ width: 500, withoutEnlargement: true })
          .webp({ quality: 35, effort: 6 })
          .toBuffer();
          
        fs.writeFileSync(filePath, compressedBuffer);
        console.log(`Finished ${file}. New size: ${fs.statSync(filePath).size} bytes`);
      } catch (err) {
        console.error(`Error compressing ${file}:`, err);
      }
    }
  }
}

run();
