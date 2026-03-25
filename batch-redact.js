const sharp = require('sharp');
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

const RAW_DIR = 'C:/Users/kekus/yamazen-hp/portfolio-raw';
const OUT_DIR = 'C:/Users/kekus/yamazen-hp/portfolio-processed';

async function redactDrawing(pngPath, outputPath) {
  const meta = await sharp(pngPath).metadata();
  const w = meta.width;
  const h = meta.height;

  const zones = [
    // Bottom title block (8% of height)
    { x: 0, y: Math.floor(h * 0.92), w, h: Math.ceil(h * 0.08) },
    // Top-left company logo area
    { x: 0, y: 0, w: Math.floor(w * 0.15), h: Math.floor(h * 0.05) },
    // Right-bottom company name area
    { x: Math.floor(w * 0.7), y: Math.floor(h * 0.88), w: Math.ceil(w * 0.3), h: Math.ceil(h * 0.12) },
  ];

  const overlays = zones.map(z => ({
    input: Buffer.from(`<svg width="${z.w}" height="${z.h}"><rect width="${z.w}" height="${z.h}" fill="black"/></svg>`),
    top: z.y, left: z.x,
  }));

  await sharp(pngPath).composite(overlays).webp({ quality: 80 }).toFile(outputPath);
  console.log(`  -> ${path.basename(outputPath)}`);
}

async function main() {
  const pdfs = fs.readdirSync(RAW_DIR).filter(f => f.endsWith('.pdf'));
  console.log(`Processing ${pdfs.length} PDFs...\n`);

  for (const pdf of pdfs) {
    const base = path.basename(pdf, '.pdf');
    const pdfPath = path.join(RAW_DIR, pdf);
    const pngBase = path.join(RAW_DIR, `tmp_${base}`);

    console.log(`[${base}]`);
    try {
      // PDF -> PNG
      execSync(`pdftoppm -png -r 200 -f 1 -l 1 "${pdfPath}" "${pngBase}"`, { stdio: 'pipe' });

      // Find generated PNG (pdftoppm adds -1 suffix)
      const pngFile = fs.readdirSync(RAW_DIR).find(f => f.startsWith(`tmp_${base}`) && f.endsWith('.png'));
      if (!pngFile) { console.log('  SKIP: no PNG generated'); continue; }

      const pngPath = path.join(RAW_DIR, pngFile);
      const outPath = path.join(OUT_DIR, `${base}.webp`);

      await redactDrawing(pngPath, outPath);

      // Cleanup temp PNG
      fs.unlinkSync(pngPath);
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }
  }
  console.log('\nDone!');
}

main();
