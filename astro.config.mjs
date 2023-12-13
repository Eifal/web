// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://eifal.github.io',
  integrations: [tailwind()],
  generate: {
    additionalHtmlTags: () => [
      {
        tag: 'link',
        rel: 'icon',
        href: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
});
