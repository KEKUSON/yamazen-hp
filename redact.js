const sharp = require('sharp');
const path = require('path');

async function redactDrawing(inputPath, outputPath, options = {}) {
  const meta = await sharp(inputPath).metadata();
  const w = meta.width;
  const h = meta.height;

  // Default redaction zones (relative to image dimensions)
  const zones = options.zones || [
    // Bottom title block strip (last ~8% of height — covers full 図枠)
    { x: 0, y: Math.floor(h * 0.92), w: w, h: Math.ceil(h * 0.08) },
    // Top-left company logo/name area
    { x: 0, y: 0, w: Math.floor(w * 0.15), h: Math.floor(h * 0.05) },
    // Right-bottom corner — 会社名・現場名 area (extra safety)
    { x: Math.floor(w * 0.7), y: Math.floor(h * 0.88), w: Math.ceil(w * 0.3), h: Math.ceil(h * 0.12) },
  ];

  // Create black rectangle SVG overlays
  const overlays = zones.map(zone => ({
    input: Buffer.from(
      `<svg width="${zone.w}" height="${zone.h}">
        <rect x="0" y="0" width="${zone.w}" height="${zone.h}" fill="black"/>
      </svg>`
    ),
    top: zone.y,
    left: zone.x,
  }));

  await sharp(inputPath)
    .composite(overlays)
    .webp({ quality: 85 })
    .toFile(outputPath);

  console.log(`Redacted: ${path.basename(inputPath)} -> ${path.basename(outputPath)} (${w}x${h})`);
}

// Process sample
const input = 'C:/Users/kekus/yamazen-hp/portfolio-raw/sample_tarapp-1.png';
const output = 'C:/Users/kekus/yamazen-hp/portfolio-processed/sample_tarapp.webp';

redactDrawing(input, output).catch(console.error);
