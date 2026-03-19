// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your actual domain
  site: 'https://ocblstraining.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
