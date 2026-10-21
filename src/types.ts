export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  priceRange: string;
  durabilityRating: string;
  cureTime: string;
  maintenanceLevel: string;
  features: string[];
  keyFeatures?: string[];
  applications: string[];
  idealFor?: string[];
  specs: { label: string; value: string }[];
  heroImage: string;
  galleryImages?: string[];
  metaTitle?: string;
  metaDescription?: string;
  faqs?: FAQItem[];
}

export interface LocationArea {
  id: string;
  slug: string;
  name: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  address?: string;
  phone: string;
  coverageZones: string[];
  highlights: string[];
  popularServices: string[];
  description: string;
  image: string;
  mapEmbedUrl: string;
  completedProjectsCount: number;
  averageResponseTime: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  date: string;
  projectType: string;
  review: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole?: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keyTakeaways?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  clientType?: string;
  year?: string;
  location: string;
  category: string;
  sqft: string;
  serviceUsed: string;
  duration: string;
  description?: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  rating: number;
}

export interface AppointmentFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceId: string;
  facilityType: string;
  approxSqFt: string;
  timeline: string;
  location: string;
  projectDetails: string;
  preferredContact: 'phone' | 'email';
  preferredDate: string;
  preferredTime: string;
}
