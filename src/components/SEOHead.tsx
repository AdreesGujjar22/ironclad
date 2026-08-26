import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  category?: string;
  priceRange?: string;
  image?: string;
}

export interface ArticleSchemaData {
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  serviceData?: ServiceSchemaData;
  articleData?: ArticleSchemaData;
  locationName?: string;
}

const BASE_URL = 'https://ironcladcommercialfloors.ca';
const DEFAULT_IMAGE = `${BASE_URL}/IRONCLAD-COMMERCIAL-FLOORS.jpg`;

// Global Baseline Schemas for Vancouver Flooring Contractor
const SITELINKS_NAVIGATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Site Navigation Sitelinks',
  description: 'Primary navigation links and deep pages for Ironclad Commercial Floors Vancouver',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: 'Services',
      url: `${BASE_URL}/services`,
      description: 'Comprehensive commercial and industrial flooring services across Vancouver, BC and the Lower Mainland.'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'About Us',
      url: `${BASE_URL}/about`,
      description: 'Learn about Ironclad Commercial Floors, our Red Seal journeyman installers, heavy equipment fleet, and COR-certified safety standards.'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'Commercial Epoxy Flooring',
      url: `${BASE_URL}/commercial-epoxy-flooring-vancouver-bc`,
      description: '100% solids industrial epoxy coatings, seamless hygienic systems, and high-traffic warehouse floor solutions in Vancouver.'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: 'Flooring Installation',
      url: `${BASE_URL}/flooring-installation-vancouver-bc`,
      description: 'Turnkey commercial flooring installation for offices, retail stores, healthcare facilities, and industrial warehouses.'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
      name: 'Service Areas & Locations',
      url: `${BASE_URL}/locations`,
      description: 'Local commercial flooring services across Vancouver, Burnaby, New Westminster, Coquitlam, and Greater Vancouver.'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 6,
      name: 'Projects & Case Studies',
      url: `${BASE_URL}/projects`,
      description: 'Explore completed commercial flooring projects, technical specs, and client case studies across British Columbia.'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 7,
      name: 'Technical Guides & Blogs',
      url: `${BASE_URL}/blogs`,
      description: 'Engineering guides on polished concrete vs epoxy, subfloor moisture mitigation, and zero-downtime installations.'
    },
    {
      '@type': 'SiteNavigationElement',
      position: 8,
      name: 'Contact & 24/7 Dispatch',
      url: `${BASE_URL}/contact`,
      description: 'Contact our commercial estimators or request an immediate on-site subfloor survey at 783 E 60th Ave, Vancouver.'
    }
  ]
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  additionalType: 'https://schema.org/FlooringContractor',
  name: 'IRONCLAD COMMERCIAL FLOORS',
  legalName: 'Ironclad Commercial Flooring Solutions Ltd.',
  alternateName: 'Ironclad Commercial Floors Vancouver',
  description: 'Commercial Flooring Contractor in Vancouver, BC. Specializing in concrete polishing, industrial epoxy coatings, carpet tiles, luxury vinyl & subfloor prep 24/7.',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.2158341,
    longitude: -123.088378
  },
  hasMap: 'https://maps.google.com/?q=783+E+60th+Ave,+Vancouver,+BC+V5X+2A5',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Vancouver', sameAs: 'https://en.wikipedia.org/wiki/Vancouver' },
    { '@type': 'City', name: 'Burnaby' },
    { '@type': 'City', name: 'Richmond' },
    { '@type': 'City', name: 'Surrey' },
    { '@type': 'City', name: 'Coquitlam' },
    { '@type': 'City', name: 'New Westminster' },
    { '@type': 'City', name: 'Port Coquitlam' },
    { '@type': 'City', name: 'Delta' },
    { '@type': 'City', name: 'Langley' },
    { '@type': 'City', name: 'North Vancouver' },
    { '@type': 'City', name: 'West Vancouver' }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '184',
    bestRating: '5',
    worstRating: '1'
  },
  knowsAbout: [
    'Commercial Flooring Installation',
    'Industrial Epoxy Floor Coatings',
    'Concrete Floor Polishing',
    'Commercial Carpet Tiles',
    'Commercial Luxury Vinyl Tile and Plank',
    'Medical Sheet Vinyl Flooring',
    'ASTM F2170 Subfloor Moisture Testing',
    'Urethane Mortar Cementitious Flooring'
  ]
};

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IRONCLAD COMMERCIAL FLOORS',
  url: BASE_URL,
  logo: `${BASE_URL}/IRONCLAD-COMMERCIAL-FLOORS.jpg`,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-604-540-3999',
      contactType: 'customer service',
      areaServed: 'CA',
      availableLanguage: ['English']
    }
  ],
  sameAs: [
    'https://www.facebook.com/ironcladcommercialfloors',
    'https://www.linkedin.com/company/ironcladcommercialfloors',
    'https://www.instagram.com/ironcladcommercialfloors'
  ]
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ironclad Commercial Floors',
  alternateName: 'Ironclad Floors Vancouver',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/services?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  },
  hasPart: [
    {
      '@type': 'WebPage',
      name: 'Services',
      url: `${BASE_URL}/services`,
      description: 'Full commercial and industrial flooring catalog in Vancouver, BC.'
    },
    {
      '@type': 'WebPage',
      name: 'About',
      url: `${BASE_URL}/about`,
      description: 'About Ironclad Commercial Floors, COR safety certification, and master flooring installers.'
    },
    {
      '@type': 'WebPage',
      name: 'Commercial Epoxy Flooring',
      url: `${BASE_URL}/commercial-epoxy-flooring-vancouver-bc`,
      description: 'Industrial epoxy, polyaspartic and urethane mortar floors for commercial facilities.'
    },
    {
      '@type': 'WebPage',
      name: 'Flooring Installation',
      url: `${BASE_URL}/flooring-installation-vancouver-bc`,
      description: 'Turnkey commercial carpet tile, resilient vinyl and concrete installation.'
    },
    {
      '@type': 'WebPage',
      name: 'Service Areas',
      url: `${BASE_URL}/locations`,
      description: 'Vancouver, Burnaby, New Westminster, Coquitlam & Lower Mainland service hubs.'
    },
    {
      '@type': 'WebPage',
      name: 'Projects',
      url: `${BASE_URL}/projects`,
      description: 'Commercial flooring case studies and project portfolios across BC.'
    },
    {
      '@type': 'WebPage',
      name: 'Contact & 24/7 Dispatch',
      url: `${BASE_URL}/contact`,
      description: 'Direct contact and 24/7 commercial emergency dispatch in Vancouver.'
    }
  ]
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Commercial Flooring Contractor Vancouver | Ironclad Floors',
  description = 'Commercial Flooring Contractor in Vancouver, BC. Ironclad installs concrete polishing, industrial epoxy, carpet tile & vinyl flooring 24/7. Call (604) 540-3999.',
  canonicalPath = '/',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  breadcrumbs,
  faqs,
  serviceData,
  articleData,
  locationName
}) => {
  useEffect(() => {
    // 1. Title Tag (~58 chars targeted)
    document.title = title;

    // Helper to safely set meta tags
    const setMeta = (selector: string, attr: string, key: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // 2. Standard Meta Description (~159 chars targeted)
    setMeta('meta[name="description"]', 'name', 'description', description);

    // 3. Canonical URL
    const fullCanonicalUrl = canonicalPath.startsWith('http') 
      ? canonicalPath 
      : `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 4. Open Graph Tags
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', fullCanonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Ironclad Commercial Floors');
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_CA');

    // 5. Twitter Card Tags
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    setMeta('meta[name="twitter:site"]', 'name', 'twitter:site', '@ironcladfloors');

    // 6. JSON-LD Schemas Management
    const injectSchema = (id: string, schemaObj: object) => {
      let scriptEl = document.getElementById(id) as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = id;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schemaObj, null, 2);
    };

    const removeSchema = (id: string) => {
      const scriptEl = document.getElementById(id);
      if (scriptEl) {
        scriptEl.remove();
      }
    };

    // A. LocalBusiness / FlooringContractor Schema (enriched with regional location if provided)
    const localSchema = locationName ? {
      ...LOCAL_BUSINESS_SCHEMA,
      name: `IRONCLAD COMMERCIAL FLOORS - ${locationName}`,
      description: `Commercial Flooring Contractor in ${locationName}, BC. Concrete polishing, industrial epoxy, commercial carpet tile, and vinyl flooring 24/7.`
    } : LOCAL_BUSINESS_SCHEMA;
    injectSchema('schema-localbusiness', localSchema);

    // B. Organization Schema
    injectSchema('schema-organization', ORGANIZATION_SCHEMA);

    // C. WebSite Schema
    injectSchema('schema-website', WEBSITE_SCHEMA);

    // C2. Sitelinks Navigation Schema (for Google SERP Sitelinks)
    injectSchema('schema-sitelinks', SITELINKS_NAVIGATION_SCHEMA);

    // D. BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbListSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: item.path.startsWith('http') ? item.path : `${BASE_URL}${item.path}`
        }))
      };
      injectSchema('schema-breadcrumbs', breadcrumbListSchema);
    } else {
      removeSchema('schema-breadcrumbs');
    }

    // E. FAQPage Schema
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };
      injectSchema('schema-faq', faqSchema);
    } else {
      removeSchema('schema-faq');
    }

    // F. Service Schema (For Service Pages)
    if (serviceData) {
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceData.name,
        description: serviceData.description,
        serviceType: serviceData.category || 'Commercial Flooring',
        provider: {
          '@type': 'LocalBusiness',
          name: 'IRONCLAD COMMERCIAL FLOORS',
          telephone: '+1-604-540-3999',
          url: BASE_URL,
          address: LOCAL_BUSINESS_SCHEMA.address
        },
        areaServed: LOCAL_BUSINESS_SCHEMA.areaServed,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'CAD',
          price: serviceData.priceRange || 'Contact for fixed quote',
          availability: 'https://schema.org/InStock'
        },
        image: serviceData.image || ogImage
      };
      injectSchema('schema-service', serviceSchema);
    } else {
      removeSchema('schema-service');
    }

    // G. Article / BlogPosting Schema (For Blog Detail Pages)
    if (articleData) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: articleData.title,
        description: articleData.description,
        image: articleData.image || ogImage,
        datePublished: articleData.datePublished || '2026-08-01',
        dateModified: articleData.dateModified || '2026-08-23',
        author: {
          '@type': 'Person',
          name: articleData.authorName || 'Marcus Vance, P.Eng. (Subfloor Diagnostics)'
        },
        publisher: {
          '@type': 'Organization',
          name: 'IRONCLAD COMMERCIAL FLOORS',
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/IRONCLAD-COMMERCIAL-FLOORS.jpg`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullCanonicalUrl
        }
      };
      injectSchema('schema-article', articleSchema);
    } else {
      removeSchema('schema-article');
    }

    // Clean up dynamic schemas on unmount if needed
    return () => {
      // Retain core business schemas for performance
    };
  }, [
    title, 
    description, 
    canonicalPath, 
    ogImage, 
    ogType, 
    breadcrumbs, 
    faqs, 
    serviceData, 
    articleData, 
    locationName
  ]);

  return null;
};
