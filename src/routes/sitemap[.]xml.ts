import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";
import { areaUrl, serviceUrl } from "@/lib/urls";
import { SITE_URL, areas, services } from "@/lib/site";
import { blogPageCount, blogPosts } from "@/lib/blog";

const BASE_URL = SITE_URL;
const LASTMOD = new Date().toISOString().slice(0, 10);

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        if (!BASE_URL) {
          return new Response("Sitemap domain not configured", {
            status: 503,
            headers: { "Cache-Control": "no-store" },
          });
        }
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path, lastmod: LASTMOD }));

        // Service and area pages live at the site root, so they are listed explicitly.
        for (const sv of services) entries.push({ path: serviceUrl(sv.slug), lastmod: LASTMOD });
        for (const ar of areas) entries.push({ path: areaUrl(ar.slug), lastmod: LASTMOD });
        for (const post of blogPosts) entries.push({ path: `/blog/${post.slug}`, lastmod: post.updatedAt ?? post.publishedAt ?? LASTMOD });
        for (let page = 2; page <= blogPageCount(); page++) entries.push({ path: `/blog/page/${page}` });

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
