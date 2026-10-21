import React, { useState } from 'react';
import { Calendar, Phone, ChevronDown, ChevronUp, ArrowRight, MapPin } from 'lucide-react';
import { LOCATIONS } from '../data/locationsData';
import { SERVICES } from '../data/servicesData';
import { getLocationSeo, pageH1 } from '../data/seoContent';
import { MapEmbed } from '../components/MapEmbed';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LocationDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
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

      {/* Hero */}
      <section className="bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          <div className="lg:col-span-7 bg-[#3B4D5D] p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-5">
            <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
              <MapPin className="w-3.5 h-3.5" />
              {seo.shortArea}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {pageH1(seo)}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{seo.heroDescription}</p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
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
              src={location.image}
              alt={`Commercial flooring contractor in ${seo.area} - Ironclad Commercial Floors`}
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
          {SERVICES.slice(0, 6).map((s) => (
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

      {/* Map */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <MapEmbed
          title="Ironclad Commercial Floors, Vancouver, BC"
          subtitle={`Crews dispatch from our Vancouver base to ${location.name}.`}
        />
      </section>
    </div>
  );
};
