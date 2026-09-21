/**
 * Server-rendered SEO helpers.
 *
 * Every title, description, canonical, Open Graph tag and JSON-LD block is
 * produced here and returned from a route's `head()` so crawlers receive it in
 * the initial HTML response instead of after hydration.
 */

export const BASE_URL = 'https://ironcladcommercialfloors.ca';
export const DEFAULT_IMAGE = `${BASE_URL}/IRONCLAD-COMMERCIAL-FLOORS.jpg`;
export const SITE_NAME = 'Ironclad Commercial Floors';

export const abs = (path: string) =>
  path.startsWith('http') ? path : `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export interface Crumb {
  name: string;
  path: string;
}

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${BASE_URL}/#business`,
  additionalType: 'https://schema.org/FlooringContractor',
  name: 'IRONCLAD COMMERCIAL FLOORS',
  legalName: 'Ironclad Commercial Flooring Solutions Ltd.',
  description:
    'Commercial flooring contractor in Vancouver, BC. Concrete polishing, industrial epoxy coatings, carpet tile, luxury vinyl and subfloor preparation, available 24/7.',
  url: BASE_URL,
  logo: `${BASE_URL}/IRONCLAD-COMMERCIAL-FLOORS.jpg`,
  image: DEFAULT_IMAGE,
  telephone: '+1-604-540-3999',
  email: 'info@ironcladcommercialfloors.ca',
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, Cheque, Invoicing',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '783 E 60th Ave',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    postalCode: 'V5X 2A5',
    addressCountry: 'CA'
  },
  geo: { '@type': 'GeoCoordinates', latitude: 49.2158341, longitude: -123.088378 },
  hasMap:
    'https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5',
  sameAs: [
    'https://www.facebook.com/ironcladcommercialfloors',
    'https://www.linkedin.com/company/ironcladcommercialfloors',
    'https://www.instagram.com/ironcladcommercialfloors'
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Vancouver' },
    { '@type': 'City', name: 'Burnaby' },
    { '@type': 'City', name: 'New Westminster' },
    { '@type': 'City', name: 'Coquitlam' },
    { '@type': 'City', name: 'Port Coquitlam' },
    { '@type': 'City', name: 'Richmond' },
    { '@type': 'City', name: 'Surrey' }
  ]
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: SITE_NAME,
  url: BASE_URL,
  publisher: { '@id': `${BASE_URL}/#business` }
};

const ldScript = (schema: object) => ({
  type: 'application/ld+json',
  children: JSON.stringify(schema)
});

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path)
  }))
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  category?: string;
  image?: string;
  path: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  serviceType: opts.category || 'Commercial Flooring',
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: LOCAL_BUSINESS_SCHEMA.areaServed,
  image: opts.image ? abs(opts.image) : DEFAULT_IMAGE,
  url: abs(opts.path)
});

export const articleSchema = (opts: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  author?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: opts.headline,
  description: opts.description,
  image: opts.image ? abs(opts.image) : DEFAULT_IMAGE,
  datePublished: opts.datePublished,
  author: { '@type': 'Person', name: opts.author || SITE_NAME },
  publisher: { '@id': `${BASE_URL}/#business` },
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.path) }
});

export const localBusinessForArea = (areaName: string, path: string) => ({
  ...LOCAL_BUSINESS_SCHEMA,
  '@id': `${abs(path)}#business`,
  name: `IRONCLAD COMMERCIAL FLOORS - ${areaName}`,
  description: `Commercial flooring contractor serving ${areaName}, BC — polished concrete, industrial epoxy, carpet tile and luxury vinyl installed around the clock.`
});

/**
 * Build a complete head() payload: unique title/description, self-referencing
 * canonical and og:url, share image, plus any JSON-LD passed in.
 */
export function buildHead(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  schemas?: object[];
}) {
  const url = abs(opts.path);
  const image = opts.image ? abs(opts.image) : DEFAULT_IMAGE;

  return {
    meta: [
      { title: opts.title },
      { name: 'description', content: opts.description },
      { property: 'og:title', content: opts.title },
      { property: 'og:description', content: opts.description },
      { property: 'og:type', content: opts.type ?? 'website' },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: opts.title },
      { name: 'twitter:description', content: opts.description },
      { name: 'twitter:image', content: image }
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: (opts.schemas ?? []).map(ldScript)
  };
}
