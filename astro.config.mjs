import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://KEKUSON.github.io',
  base: '/yamazen-hp',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
