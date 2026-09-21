import { SITE_URL } from "./routes";

const DEFAULT_IMAGE = `${SITE_URL}/IRONCLAD-COMMERCIAL-FLOORS.jpg`;

export interface Crumb {
  name: string;
  path: string;
}

export interface BuildHeadOptions {
  title: string;
  description: string;
  /** Path of this page, e.g. "/services/flooring-repair" */
  path: string;
  image?: string;
  ogType?: "website" | "article";
  /** Breadcrumb trail excluding "Home", which is prepended automatically. */
  breadcrumbs?: Crumb[];
  /** Extra JSON-LD objects (Service, LocalBusiness, FAQPage, Article...) */
  schemas?: Record<string, unknown>[];
}

function absolute(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function breadcrumbSchema(crumbs: Crumb[]): Record<string, unknown> {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };
}

export const ORGANIZATION_SCHEMA: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Ironclad Commercial Floors",
  image: DEFAULT_IMAGE,
  url: `${SITE_URL}/`,
  telephone: "+1-604-540-3999",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "783 E 60th Ave",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    postalCode: "V5X 2A5",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.2158341, longitude: -123.088378 },
  areaServed: "Metro Vancouver, British Columbia",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

/** Builds a complete, self-referencing-canonical head config for a route. */
export function buildHead(options: BuildHeadOptions) {
  const {
    title,
    description,
    path,
    image = DEFAULT_IMAGE,
    ogType = "website",
    breadcrumbs,
    schemas = [],
  } = options;

  const canonical = absolute(path);
  const jsonLd: Record<string, unknown>[] = [...schemas];
  if (breadcrumbs && breadcrumbs.length > 0) {
    jsonLd.unshift(breadcrumbSchema(breadcrumbs));
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: "Ironclad Commercial Floors" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: jsonLd.map((schema, index) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
      key: `ld-${index}`,
    })),
  };
}
