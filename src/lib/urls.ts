import { areas, services } from "./site";

// Page URLs live at the site root and follow  category-service-location  (all lowercase):
//   /commercial-epoxy-flooring-vancouver
//   /commercial-flooring-contractor-south-vancouver
// The internal `slug` on each service/area stays the data key; these helpers map it to the public URL.

const base = (s: string) => (s.startsWith("commercial-") ? s : `commercial-${s}`);

/** internal service slug -> public URL slug */
export const serviceSlugs: Record<string, string> = Object.fromEntries(
  services.map((s) => [s.slug, `${base(s.slug)}-vancouver`]),
);

/** internal area slug -> public URL slug */
export const areaSlugs: Record<string, string> = Object.fromEntries(
  areas.map((a) => [a.slug, `commercial-flooring-contractor-${a.slug === "vancouver" ? "south-vancouver" : a.slug}`]),
);

export const serviceSlug = (slug: string) => serviceSlugs[slug] ?? slug;
export const areaSlug = (slug: string) => areaSlugs[slug] ?? slug;
export const serviceUrl = (slug: string) => `/${serviceSlug(slug)}`;
export const areaUrl = (slug: string) => `/${areaSlug(slug)}`;

/** Resolve a public URL slug to its service or area page. */
export function resolvePage(urlSlug: string) {
  const s = services.find((x) => serviceSlugs[x.slug] === urlSlug);
  if (s) return { kind: "service" as const, service: s };
  const a = areas.find((x) => areaSlugs[x.slug] === urlSlug);
  if (a) return { kind: "area" as const, area: a };
  return null;
}
