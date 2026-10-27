import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { getServiceSeo, pageH1 } from '../data/seoContent';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ImageHero } from '../components/ImageHero';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;

}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const service = SERVICES.find((s) => s.slug === slug) || SERVICES[0];
  const seo = getServiceSeo(service.slug) || getServiceSeo(SERVICES[0].slug)!;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          { name: 'Commercial Flooring Services', page: 'services' },
          { name: service.name, current: true },
        ]}
        onNavigate={onNavigate}
      />

      <ImageHero
        image={service.heroImage}
        imageAlt={`${seo.keyword} in Vancouver, BC by Ironclad Commercial Floors`}
        eyebrow="Commercial flooring · Vancouver, BC"
        title={pageH1(seo)}
        description={seo.heroDescription}
        actions={
          <>
            <a href="tel:6045403999" className="ic-pf-button ic-pf-button-primary"><Phone /> Call now</a>
            <button type="button" onClick={() => onNavigate('locations')} className="ic-pf-button ic-pf-button-outline">Service areas <ArrowRight /></button>
          </>
        }
        aside={
          <aside className="ic-pf-quote-card">
            <p className="ic-pf-card-kicker">Project enquiry</p>
            <h2>Planning a flooring project?</h2>
            <p>Tell us about your space and schedule.</p>
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
        <button type="button" onClick={() => onNavigate('locations')} className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#2A6E44]">View service areas <ArrowRight className="w-4 h-4" /></button>
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


    </div>
  );
};
