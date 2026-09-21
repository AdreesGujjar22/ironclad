import React from 'react';

/**
 * Deprecated shim.
 *
 * Titles, descriptions, canonical tags, Open Graph data and JSON-LD are now
 * produced server-side by each route's head() via src/lib/seo.ts, so crawlers
 * see them in the initial HTML. This component renders nothing and exists only
 * so page components can keep their existing props without duplicating tags.
 */

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

export { BASE_URL, DEFAULT_IMAGE } from '@/lib/seo';

export const SEOHead: React.FC<SEOHeadProps> = () => null;
