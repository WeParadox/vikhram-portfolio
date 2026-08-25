import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://weparadox.github.io',
  base: '/vikhram-portfolio',
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
