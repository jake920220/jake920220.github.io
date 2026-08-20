import { getCollection } from "astro:content";
import config from "@/config/config.json";

const EXCLUDED_PREFIXES = ["/search", "/elements", "/tech", "/book-review", "/categories/book-review", "/categories/tech", "/categories/development", "/development"];

type SitemapEntry = {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
};

function shouldInclude(pathname: string) {
  return !EXCLUDED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function toAbsoluteUrl(pathname: string) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return new URL(normalizedPath, `${config.site.base_url}/`).toString();
}

function formatLastMod(date?: Date) {
  return date ? new Date(date).toISOString() : undefined;
}

export async function GET() {
  const posts = await getCollection("posts", ({ data }) => data.draft !== true);

  const staticEntries: SitemapEntry[] = [
    { path: "/", changefreq: "daily", priority: "1.0" },
    { path: "/tags", changefreq: "weekly", priority: "0.8" },
    { path: "/about", changefreq: "monthly", priority: "0.7" },
    { path: "/authors", changefreq: "monthly", priority: "0.5" },
    { path: "/authors/blog-owner", changefreq: "monthly", priority: "0.5" },
    { path: "/categories", changefreq: "weekly", priority: "0.6" },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  ];

  const postEntries: SitemapEntry[] = posts
    .filter((post) => !post.id.startsWith("-index") && !post.id.startsWith("drafts/") && !post.id.startsWith("book-review"))
    .map((post) => ({
      path: `/${post.id}`,

      lastmod: formatLastMod(
        post.data.modDatetime ?? post.data.pubDatetime ?? post.data.date,
      ),
      changefreq: "monthly",
      priority: "0.8",
    }));

  const entries = [...staticEntries, ...postEntries]
    .filter((entry) => shouldInclude(entry.path))
    .filter(
      (entry, index, arr) =>
        arr.findIndex((candidate) => candidate.path === entry.path) === index,
    );

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${toAbsoluteUrl(entry.path)}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""}${entry.changefreq ? `\n    <changefreq>${entry.changefreq}</changefreq>` : ""}${entry.priority ? `\n    <priority>${entry.priority}</priority>` : ""}\n  </url>`,
    )
    .join("\n")}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=600",
    },
  });
}

