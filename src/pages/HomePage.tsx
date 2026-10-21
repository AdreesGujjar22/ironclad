import React, { useState } from 'react';
import { Calendar, Phone, ChevronDown, ChevronUp, ArrowRight, MapPin } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { LOCATIONS } from '../data/locationsData';
import { flooringImages } from '../assets/flooringImages';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

export const HOME_FAQS = [
  {
    question: 'What does a commercial flooring contractor in Vancouver, BC do?',
    answer:
      'A commercial flooring contractor prepares the slab and installs, repairs or replaces floors in businesses. Ironclad Commercial Floors handles epoxy, polished concrete, luxury vinyl, sheet vinyl and carpet tile for offices, warehouses, restaurants and retail.',
  },
  {
    question: 'Can you install commercial flooring without closing my business?',
    answer:
      'Yes. We schedule night, weekend and phased installations, so part of your space stays in use. Fast-curing systems let foot traffic return quickly, and we confirm the timeline in writing before work begins.',
  },
  {
    question: 'Why do you test concrete for moisture before installing?',
    answer:
      'Moisture rising through a slab is a leading cause of lifting vinyl and failed coatings. Testing first lets us choose the right primer or barrier so the floor lasts, and it is part of every installation.',
  },
  {
    question: 'Which cities do you serve besides Vancouver?',
    answer:
      'We serve Burnaby, Richmond, Surrey, Coquitlam, Port Coquitlam, New Westminster, Delta, Langley and North Vancouver, with crews dispatched from our base at 783 E 60th Ave, Vancouver.',
  },
  {
    question: 'How do I get a free commercial flooring estimate?',
    answer:
      'Call (604) 540-3999 or book online. We visit your site, inspect the slab and send a written quote, and our installations carry a 10-year workmanship warranty.',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const cityIds = [
    'vancouver', 'burnaby', 'richmond', 'surrey', 'coquitlam', 'port-coquitlam',
    'new-westminster', 'delta', 'langley', 'north-vancouver',
  ];
  const cities = cityIds
    .map((id) => LOCATIONS.find((l) => l.slug === id))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <div className="bg-[#F8F9FA] text-slate-800 selection:bg-[#3B945E] selection:text-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#0A1118] text-white min-h-[560px] lg:min-h-[640px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={flooringImages.flooringHandsInstallation}
            alt="Commercial flooring contractor in Vancouver, BC - Ironclad Commercial Floors"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1520]/90 via-[#0B1520]/65 to-[#0B1520]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 w-full">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
              Commercial Flooring Contractor in Vancouver, BC
            </h1>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              Ironclad Commercial Floors is a commercial flooring contractor in Vancouver, BC. We handle
              commercial flooring installation, repair and replacement, commercial epoxy flooring, concrete floor
              polishing, luxury vinyl and carpet tile for offices, warehouses, restaurants and retail across Metro
              Vancouver, with night crews and a 10-year workmanship warranty.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider shadow-2xl cursor-pointer border border-white/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Get a Free Estimate</span>
              </button>
              <a
                href="tel:6045403999"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A2530] hover:bg-[#243342] text-white border border-slate-600 shadow-2xl font-mono font-bold text-xs uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#88D2A8]" />
                <span>Call (604) 540-3999</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Commercial Flooring Services in Vancouver, BC
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          From new installations to epoxy, polished concrete, vinyl and carpet tile, every service is delivered by
          our own crews and backed by a written warranty.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => onNavigate('service-detail', service.slug)}
              className="text-left bg-white border border-slate-200 hover:border-[#3B945E] p-5 transition-colors cursor-pointer group"
            >
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#3B945E]">
                {service.name} in Vancouver, BC
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.shortDesc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#3B945E]">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Commercial Flooring Contractor Service Areas in Metro Vancouver, BC
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Our crews work from 783 E 60th Ave in Vancouver and serve businesses across the Lower Mainland. Choose
            your city for local details.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <button
                key={city.slug}
                type="button"
                onClick={() => onNavigate('location-detail', city.slug)}
                className="flex items-center gap-2 px-4 py-3 bg-[#F8F9FA] border border-slate-200 hover:border-[#3B945E] text-sm font-bold text-slate-800 text-left cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#3B945E] shrink-0" />
                <span>{city.name}, BC</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
          Commercial Flooring Contractor FAQs in Vancouver, BC
        </h2>
        <div className="space-y-2.5">
          {HOME_FAQS.map((faq, idx) => {
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-[#1A2530] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold">Book Your Commercial Flooring Estimate</h2>
            <p className="text-slate-300 text-sm mt-1">783 E 60th Ave, Vancouver, BC V5X 2A5 · (604) 540-3999</p>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="shrink-0 px-6 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider cursor-pointer"
          >
            Request Estimate
          </button>
        </div>
      </section>
    </div>
  );
};
