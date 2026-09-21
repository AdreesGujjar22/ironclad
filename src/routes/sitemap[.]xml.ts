import { createFileRoute } from "@tanstack/react-router";

import { SERVICES } from "../data/servicesData";
import { LOCATIONS } from "../data/locationsData";
import { BLOGS } from "../data/testimonialsData";

const SITE = "https://ironcladcommercialfloors.ca";

interface Entry {
  path: string;
  priority: string;
  changefreq: string;
}

function buildEntries(): Entry[] {
  const statics: Entry[] = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "weekly" },
    { path: "/locations", priority: "0.9", changefreq: "weekly" },
    { path: "/projects", priority: "0.7", changefreq: "monthly" },
    { path: "/about", priority: "0.7", changefreq: "monthly" },
    { path: "/blogs", priority: "0.7", changefreq: "weekly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
  ];

  const services: Entry[] = SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const locations: Entry[] = LOCATIONS.map((l) => ({
    path: `/locations/${l.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const blogs: Entry[] = BLOGS.map((b) => ({
    path: `/blogs/${b.slug}`,
    priority: "0.6",
    changefreq: "monthly",
  }));

  return [...statics, ...services, ...locations, ...blogs];
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${buildEntries()
  .map(
    (entry) => `  <url>
    <loc>${SITE}${entry.path === "/" ? "/" : entry.path}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
