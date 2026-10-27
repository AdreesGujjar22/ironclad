import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '../data/locationsData';
import { SERVICES } from '../data/servicesData';
import { getLocationSeo, pageH1 } from '../data/seoContent';
import { MapEmbed } from '../components/MapEmbed';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ImageHero } from '../components/ImageHero';

interface LocationDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;

}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const location = LOCATIONS.find((l) => l.slug === slug) || LOCATIONS[0];
  const seo = getLocationSeo(location.slug) || getLocationSeo(LOCATIONS[0].slug)!;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          { name: 'Service Areas', page: 'locations' },
          { name: location.name, current: true },
        ]}
        onNavigate={onNavigate}
      />

      <ImageHero
        image={location.image}
        imageAlt={`Commercial flooring contractor in ${seo.area} - Ironclad Commercial Floors`}
        eyebrow={`Commercial flooring · ${seo.area}`}
        title={pageH1(seo)}
        description={seo.heroDescription}
        actions={
          <>
            <a href="tel:6045403999" className="ic-pf-button ic-pf-button-primary"><Phone /> Call now</a>
            <button type="button" onClick={() => onNavigate('services')} className="ic-pf-button ic-pf-button-outline">Our services <ArrowRight /></button>
          </>
        }
        aside={
          <aside className="ic-pf-quote-card">
            <p className="ic-pf-card-kicker">Serving {seo.area}</p>
            <h2>Flooring for your workspace.</h2>
            <p>Discuss your project and schedule with our local team.</p>
            <button type="button" onClick={() => onNavigate('contact')} className="ic-pf-button ic-pf-button-primary">Contact us <ArrowRight /></button>
          </aside>
        }
      />

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 md:pt-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
          {seo.sectionHeading}
        </h2>
        {seo.paragraphs.slice(0, 2).map((p, i) => (
          <p key={i} className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
            {p}
          </p>
        ))}
        <div className="flex flex-wrap gap-2 pt-3">
          {SERVICES.slice(0, 3).map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => onNavigate('service-detail', s.slug)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 hover:border-[#3B945E] text-xs font-mono font-bold text-slate-700 cursor-pointer"
            >
              <span>{s.name}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 md:pt-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
          {seo.faqHeading}
        </h2>
        <div className="space-y-2.5">
          {seo.faqs.slice(0, 3).map((faq, idx) => {
            const open = openFaq === idx;
            return (
              <div key={faq.question} className="bg-white border border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                  aria-expanded={open}
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
                  {open ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                </button>
                {open && <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Map */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <MapEmbed title={`${location.name} service area`} subtitle="Local commercial flooring service." className="ic-locations-map" />
      </section>
    </div>
  );
};
