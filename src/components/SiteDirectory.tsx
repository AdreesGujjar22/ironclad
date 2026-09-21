import React from "react";
import { Link } from "@tanstack/react-router";

import { SERVICES } from "../data/servicesData";
import { LOCATIONS } from "../data/locationsData";
import { BLOGS } from "../data/testimonialsData";

interface Item {
  label: string;
  to: string;
}

const MAIN: Item[] = [
  { label: "Home", to: "/" },
  { label: "About Ironclad", to: "/about" },
  { label: "All Services", to: "/services" },
  { label: "Service Areas", to: "/locations" },
  { label: "Projects", to: "/projects" },
  { label: "Articles", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

const Column: React.FC<{ title: string; items: Item[] }> = ({ title, items }) => (
  <div>
    <h2 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#88D2A8] mb-3">
      {title}
    </h2>
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className="text-[13px] leading-snug text-slate-300 hover:text-white hover:underline transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Crawlable, server-rendered directory of every indexable URL. Renders real
 * <a href> links so search engines can reach each page in one click from
 * anywhere on the site, without executing JavaScript.
 */
export const SiteDirectory: React.FC = () => {
  const services: Item[] = SERVICES.map((s) => ({
    label: s.name,
    to: `/services/${s.slug}`,
  }));
  const locations: Item[] = LOCATIONS.map((l) => ({
    label: `Commercial Flooring ${l.name}`,
    to: `/locations/${l.slug}`,
  }));
  const articles: Item[] = BLOGS.map((b) => ({ label: b.title, to: `/blogs/${b.slug}` }));

  return (
    <nav aria-label="Site directory" className="bg-[#16202B] border-t border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Column title="Pages" items={MAIN} />
        <Column title="Flooring Services" items={services} />
        <Column title="Areas We Serve" items={locations} />
        <Column title="Guides & Articles" items={articles} />
      </div>
    </nav>
  );
};
