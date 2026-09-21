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

/**
 * Titles, descriptions, canonical URLs, Open Graph tags, breadcrumb, business
 * and service schema are now emitted server-side by each file route's head()
 * (see src/lib/seo.ts), so they are present in the first HTML response.
 *
 * This component only adds the page's FAQ schema, which is derived from
 * content rendered on the page itself.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({ faqs }) => {
  useEffect(() => {
    const id = 'schema-faq';
    const existing = document.getElementById(id);
    if (!faqs || faqs.length === 0) {
      if (existing) existing.remove();
      return;
    }

    const scriptEl = (existing as HTMLScriptElement | null) ?? document.createElement('script');
    scriptEl.id = id;
    (scriptEl as HTMLScriptElement).type = 'application/ld+json';
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
    if (!existing) document.head.appendChild(scriptEl);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [faqs]);

  return null;
};

export default SEOHead;
