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
    // Section / Taxonomy roots -> Home
    "/tech": "/",
    "/categories/tech": "/",
    "/categories/book-review": "/",
    "/categories/development": "/",
    "/book-review": "/",

    // Post URLs -> Clean Root URLs
    "/tech/openclaw-review-automation-part1": "/openclaw-review-automation-part1",
    "/development/openclaw-review-automation-part1": "/openclaw-review-automation-part1",
    "/tech/openclaw-review-automation-part2": "/openclaw-review-automation-part2",
    "/tech/harness-engineering-spiky-pomodoro": "/harness-engineering-spiky-pomodoro",

    // Book Review Posts -> -book-review Root URLs
    "/tech/ai-agent-engineering": "/ai-agent-engineering-book-review",
    "/book-review/ai-agent-engineering": "/ai-agent-engineering-book-review",
    "/ai-agent-engineering": "/ai-agent-engineering-book-review",

    "/tech/good-code-criteria-review": "/good-code-criteria-book-review",
    "/book-review/good-code-criteria-review": "/good-code-criteria-book-review",
    "/book-review/good-code-criteria": "/good-code-criteria-book-review",
    "/good-code-criteria-review": "/good-code-criteria-book-review",
    "/good-code-criteria": "/good-code-criteria-book-review",

    // Legacy drafts
    "/development/astro-blog-setup": "/",
    "/tech/astro-blog-setup": "/",
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
