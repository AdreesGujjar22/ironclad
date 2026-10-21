import React, { useState } from 'react';
import { Calendar, Phone, ChevronDown, ChevronUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { LOCATIONS } from '../data/locationsData';
import { getServiceSeo, pageH1 } from '../data/seoContent';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
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

      {/* Hero */}
      <section className="bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          <div className="lg:col-span-7 bg-[#3B4D5D] p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-5">
            <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              10-Year Workmanship Warranty
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {pageH1(seo)}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{seo.heroDescription}</p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking({ serviceId: service.id })}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider border border-white/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Get a Free Estimate</span>
              </button>
              <a
                href="tel:6045403999"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A2530] hover:bg-[#243342] text-white border border-slate-600 font-mono font-bold text-xs uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#88D2A8]" />
                <span>Call (604) 540-3999</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-[240px]">
            <img
              src={service.heroImage}
              alt={`${seo.keyword} in Vancouver, BC by Ironclad Commercial Floors`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 md:pt-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
          {seo.sectionHeading}
        </h2>
        {seo.paragraphs.map((p, i) => (
          <p key={i} className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
            {p}
          </p>
        ))}
        <div className="flex flex-wrap gap-2 pt-3">
          {LOCATIONS.slice(0, 8).map((l) => (
            <button
              key={l.slug}
              type="button"
              onClick={() => onNavigate('location-detail', l.slug)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 hover:border-[#3B945E] text-xs font-mono font-bold text-slate-700 cursor-pointer"
            >
              <span>{l.name}</span>
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
          {seo.faqs.map((faq, idx) => {
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

      {/* Quote CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <div className="bg-[#1A2530] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold">
              Get a Quote for {seo.keyword} in Vancouver, BC
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Ironclad Commercial Floors, 783 E 60th Ave, Vancouver, BC V5X 2A5.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking({ serviceId: service.id })}
            className="shrink-0 px-6 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider cursor-pointer"
          >
            Request Estimate
          </button>
        </div>
      </section>
    </div>
  );
};
