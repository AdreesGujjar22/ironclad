import { business } from "./site";

const SITE = "Ironclad Commercial Floors";

/** Per-page head tags: title, description, Open Graph, Twitter and a self-referencing canonical. */
export function pageHead({
  title,
  description,
  path,
  type = "website",
  noindex = false,
  jsonLd = [],
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: object[];
}) {
  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (noindex) meta.push({ name: "robots", content: "noindex" });
  return {
    meta,
    links: noindex ? [] : [{ rel: "canonical", href: path }],
    scripts: jsonLd.map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) })),
  };
}

export const providerLd = {
  "@type": "GeneralContractor",
  name: SITE,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "783 E 60th Ave",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    postalCode: "V5X 2A5",
    addressCountry: "CA",
  },
};

export function serviceLd(name: string, description: string, areaNames: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
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
