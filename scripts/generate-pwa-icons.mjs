import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const svg = readFileSync(join(publicDir, 'icon.svg'));

const sizes = [192, 512, 180];

for (const size of sizes) {
  const name =
    size === 180 ? 'apple-touch-icon.png' : `pwa-${size}x${size}.png`;
  await sharp(svg).resize(size, size).png().toFile(join(publicDir, name));
  console.log(`Generated ${name}`);
}
