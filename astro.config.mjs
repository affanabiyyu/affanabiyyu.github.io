import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
// import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://affanabiyyu.github.io/',
  markdown: {
    smartypants: false,
    gfm: false,
  },
  integrations: [
    mdx({
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
    sitemap(),
    svelte()
  ]
  // integrations: [mdx(), sitemap(), svelte(), tailwind()]
});