import { SITE_URL, areas, business, services } from "./site";
import { serviceUrl } from "./urls";

export const SITE_NAME = "Ironclad Commercial Floors";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_ALT = "Ironclad Commercial Floors — commercial flooring contractor in Vancouver, BC";
export const BUSINESS_ID = `${SITE_URL}/#business`;

const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

/** Per-page head: title, description, absolute canonical, Open Graph, Twitter card, robots and JSON-LD. */
export function pageHead({
  title,
  description,
  path,
  type = "website",
  jsonLd = [],
  crumbs,
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  jsonLd?: object[];
  /** Breadcrumb trail after "Home"; adds BreadcrumbList structured data. */
  crumbs?: { name: string; path: string }[];
}) {
  const url = abs(path);
  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_CA" },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: OG_IMAGE_ALT },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
    { name: "twitter:image:alt", content: OG_IMAGE_ALT },
  ];
  const ld = [...jsonLd];
  if (crumbs?.length) ld.push(breadcrumbLd(crumbs));
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: ld.map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) })),
  };
}

export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

/** Reference to the sitewide business entity (defined once in full by `localBusinessLd`). */
export const providerLd = { "@type": "GeneralContractor", "@id": BUSINESS_ID, name: SITE_NAME, url: SITE_URL };

/**
 * Sitewide local business entity. schema.org has no "FlooringContractor" type, so the closest
 * LocalBusiness subtype, GeneralContractor, is used (Google Business category: Flooring contractor).
 */
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    alternateName: "Ironclad Floors",
    description:
      "Commercial flooring contractor in Vancouver, BC: epoxy, polished concrete, luxury vinyl, sheet vinyl, rubber, carpet and tile installation, repair and replacement across Metro Vancouver.",
    url: SITE_URL,
    logo: OG_IMAGE,
    image: OG_IMAGE,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "783 E 60th Ave",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V5X 2A5",
      addressCountry: "CA",
    },
    hasMap: business.gmb,
    sameAs: [business.gmb],
    ...(business.googlePlaceId ? { identifier: { "@type": "PropertyValue", propertyID: "Google Place ID", value: business.googlePlaceId } } : {}),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: areas.map((a) => ({ "@type": "Place", name: `${a.name}, BC` })),
    knowsAbout: ["Commercial flooring installation", "Commercial flooring repair", "Epoxy flooring", "Polished concrete", "Luxury vinyl flooring"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial flooring services in Vancouver, BC",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}${serviceUrl(s.slug)}` },
      })),
    },
  };
}

export function serviceLd(name: string, description: string, areaNames: string[], url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: `${name} in Vancouver, BC`,
    description,
    ...(url ? { url: `${SITE_URL}${url}` } : {}),
    provider: providerLd,
    areaServed: areaNames.map((n) => ({ "@type": "Place", name: n })),
  };
}

/** FAQPage structured data built from the same FAQs shown on the page. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
