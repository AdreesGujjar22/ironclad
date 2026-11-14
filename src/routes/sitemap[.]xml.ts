import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { isSitemapRouteIncluded, sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";
import { areas, services } from "@/lib/site";

const BASE_URL = "https://ironclad-surface-studio.lovable.app";

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
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const serviceRouteId = "/services/$slug";
        if (isSitemapRouteIncluded(router.routesById[serviceRouteId])) {
          for (const s of services) {
            const location = router.buildLocation({ to: "/services/$slug", params: { slug: s.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, serviceRouteId);
            if (path) entries.push({ path });
          }
        }

        const areaRouteId = "/service-areas/$slug";
        if (isSitemapRouteIncluded(router.routesById[areaRouteId])) {
          for (const a of areas) {
            const location = router.buildLocation({ to: "/service-areas/$slug", params: { slug: a.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, areaRouteId);
            if (path) entries.push({ path });
          }
        }

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
