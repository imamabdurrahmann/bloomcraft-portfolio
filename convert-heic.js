const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const heicFiles = [
  'IMG_8011.HEIC',
  'IMG_8012.HEIC',
  'IMG_8015.HEIC',
  'IMG_8018.HEIC',
  'IMG_8020.HEIC',
  'IMG_8024.HEIC',
];

const outputDir = path.join(__dirname, 'public', 'images');

async function convert() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (let i = 0; i < heicFiles.length; i++) {
    const inputPath = path.join(__dirname, heicFiles[i]);
    const outputName = `bouquet-${i + 1}.jpg`;
    const outputPath = path.join(outputDir, outputName);

    try {
      await sharp(inputPath)
        .jpeg({ quality: 85 })
        .toFile(outputPath);
      console.log(`✓ Converted: ${heicFiles[i]} -> ${outputName}`);
    } catch (err) {
      console.error(`✗ Error converting ${heicFiles[i]}:`, err.message);
    }
  }
  console.log('\nDone! Images saved to public/images/');
}

convert();
