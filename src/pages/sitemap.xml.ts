import { getCollection } from "astro:content";
import config from "@/config/config.json";

const EXCLUDED_PREFIXES = ["/search", "/elements", "/tags"];

type SitemapEntry = {
  path: string;
  lastmod?: string;
};

function shouldInclude(pathname: string) {
  return !EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function toAbsoluteUrl(pathname: string) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return new URL(normalizedPath, `${config.site.base_url}/`).toString();
}

function formatLastMod(date?: Date) {
  return date ? date.toISOString() : undefined;
}

export async function GET() {
  const posts = await getCollection("posts", ({ data }) => data.draft !== true);

  const staticEntries: SitemapEntry[] = [
    { path: "/" },
    { path: "/about" },
    { path: "/authors" },
    { path: "/authors/blog-owner" },
    { path: "/book-review" },
    { path: "/categories" },
    { path: "/categories/book-review" },
    { path: "/categories/tech" },
    { path: "/page/2" },
    { path: "/privacy-policy" },
    { path: "/tech" },
  ];

  const postEntries: SitemapEntry[] = posts
    .filter((post) => !post.id.startsWith("-index"))
    .map((post) => ({
      path: `/${post.id}`,
      lastmod: formatLastMod(
        post.data.modDatetime ?? post.data.pubDatetime ?? post.data.date,
      ),
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
        `  <url><loc>${toAbsoluteUrl(entry.path)}</loc>${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}</url>`,
    )
    .join("\n")}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=600",
    },
  });
}
