import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';
import lit from "@astrojs/lit";
import preact from "@astrojs/preact";
import solidJs from "@astrojs/solid-js";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // site: TODO: Add site URL here e.g. https://stargazers.club
  output: 'server',
  adapter: netlify(),
  integrations: [sitemap(), react(), lit(), preact(), solidJs(), svelte()]
});