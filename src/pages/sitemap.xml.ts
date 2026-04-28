import { getCollection } from "astro:content";
import config from "@/config/config.json";

const EXCLUDED_PREFIXES = ["/search", "/elements", "/tags"];

function shouldInclude(pathname: string) {
  return !EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function toAbsoluteUrl(pathname: string) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return new URL(normalizedPath, `${config.site.base_url}/`).toString();
}

export async function GET() {
  const posts = await getCollection("posts", ({ data }) => data.draft !== true);
  const pages = [
    "/",
    "/about",
    "/authors",
    "/authors/blog-owner",
    "/book-review",
    "/categories",
    "/categories/book-review",
    "/categories/tech",
    "/page/2",
    "/privacy-policy",
    "/tech",
    ...posts
      .filter((post) => !post.id.startsWith("-index"))
      .map((post) => `/${post.id}`),
  ].filter(shouldInclude);

  const uniquePages = Array.from(new Set(pages));

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniquePages
    .map((page) => `  <url><loc>${toAbsoluteUrl(page)}</loc></url>`)
    .join("\n")}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=600",
    },
  });
}
