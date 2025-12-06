import sharp from 'sharp';
import { readdirSync } from 'fs';

const inputDir = './src/assets/images/raw/';
const outputDir = './src/assets/images/optimised/';

readdirSync(inputDir)
  .filter(file => 
    file.endsWith('.jpg') || 
    file.endsWith('.jpeg') || 
    file.endsWith('.png') ||
    file.endsWith('.svg')
  )
  .forEach(async (file) => {
    try {
      const ext = file.substring(file.lastIndexOf('.'));
      const fileToConvert = `${outputDir}${file.replace(ext, '.webp')}`;
      
      await sharp(`${inputDir}${file}`)
        .webp({ quality: 85 })
        .toFile(fileToConvert);
      
      console.log(`✓ Converted: ${file}`);
    } catch (error) {
      console.error(`✗ Failed: ${file}`, error);
    }
  });