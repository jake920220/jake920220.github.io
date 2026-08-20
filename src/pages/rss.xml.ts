import rss from "@astrojs/rss";
import config from "@/config/config.json";
import { getCollection } from "astro:content";

export async function GET(context: { site?: URL }) {
  const posts = await getCollection("posts", ({ data, id }) => {
    // exclude drafts and non-article entries
    return data.draft !== true && !id.startsWith("-index") && !id.startsWith("drafts/") && !id.startsWith("book-review");
  });



  // newest first
  posts.sort((a, b) => {
    const da = a.data.date ? new Date(a.data.date).getTime() : 0;
    const db = b.data.date ? new Date(b.data.date).getTime() : 0;
    return db - da;
  });

  const site = context.site ?? new URL(config.site.base_url);

  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? "",
      link: `/${post.id}`,
      pubDate: post.data.date ?? new Date(),
    })),
  });
}
