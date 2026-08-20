import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sharp from "sharp";
import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  // Avoid duplicate content after taxonomy rename (development → tech)
  redirects: {
    "/categories/tech": "/tech",
    "/categories/book-review": "/tech",
    "/book-review": "/tech",

    // legacy
    "/categories/development": "/tech",
    "/development/astro-blog-setup": "/tech/astro-blog-setup",
    "/development/openclaw-review-automation-part1": "/tech/openclaw-review-automation-part1",
  },
  image: { service: sharp() },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    react(),

    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
    extendDefaultPlugins: true,
  },
});
