import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Sparkles, 
  Building,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  ChevronDown,
  ChevronUp,
  FileText,
  Clock,
  Zap
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking
}) => {
  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic SEO Title and Description
  const pageTitle = service.metaTitle || `${service.name} Vancouver | Ironclad Floors`;
  const pageDescription = service.metaDescription || `Commercial Flooring Contractor in Vancouver, BC for ${service.name.toLowerCase()}. 24/7 installation & 10-year warranty by Ironclad Commercial Floors.`;

  // Specific service FAQs for structured data and interactive UI
  const serviceFaqs = [
    {
      question: `What is the durability and cure timeline of ${service.name}?`,
      answer: `${service.name} is engineered for ${service.durabilityRating} commercial traffic. Return to light pedestrian traffic is typically ${service.cureTime}, with full chemical or heavy equipment load ready within 24 to 72 hours depending on ambient temperature.`
    },
    {
      question: `What subfloor preparation is required before installing ${service.name}?`,
      answer: `All concrete substrates undergo ASTM F2170 relative humidity moisture testing and dustless planetary diamond grinding or shot blasting (ICRI CSP 2–3). Cracks and spalls are stitched with rapid-cure polyurea prior to primer and system application.`
    },
    {
      question: `Can ${service.name} be installed overnight to prevent business downtime?`,
      answer: `Yes. Ironclad Commercial Floors runs dedicated 24/7 night-shift and weekend crews across Metro Vancouver. We mobilize at 8:00 PM and clear the workspace before 6:00 AM so your business experiences zero daytime operational disruption.`
    },
    {
      question: `What warranty is provided on this commercial installation?`,
      answer: `All commercial installations of ${service.name} are backed by our Ironclad 10-Year Commercial Warranty covering bond integrity, delamination resistance, and certified Red Seal installation workmanship.`
    }
  ];

  // Related services in the same category
  const relatedServices = SERVICES.filter(s => s.category === service.category && s.id !== service.id).slice(0, 3);

  // Fallback related services if empty
  const displayRelated = relatedServices.length > 0 
    ? relatedServices 
    : SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead 
        title={pageTitle} 
        description={pageDescription}
        canonicalPath={`/service/${service.slug}`}
        ogImage={service.heroImage}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Commercial Flooring Services', path: '/services' },
          { name: service.name, path: `/service/${service.slug}` }
        ]}
        serviceData={{
          name: service.name,
          description: service.longDesc,
          category: service.category,
          priceRange: service.priceRange,
          image: service.heroImage
        }}
        faqs={serviceFaqs}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Commercial Services', page: 'services' },
          { name: service.category, page: 'services' },
          { name: service.name, current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16">
        {/* Hero Header - Split Editorial Layout (Matching Home & About Page Design) */}
      <section className="relative bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          
          {/* Left Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#3B4D5D] p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-6"
          >
            {/* Category & Region Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
                <Layers className="w-3.5 h-3.5 text-[#88D2A8]" />
                <span>{service.category}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#7D9A87]/30 text-emerald-100 text-xs font-mono font-bold uppercase tracking-wider border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-[#88D2A8]" />
                <span>10-Year Warranty</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {service.name} in Vancouver, BC
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
              {service.longDesc}
            </p>

            {/* Quick Specs Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-slate-300 block font-mono">Durability</span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block truncate">{service.durabilityRating}</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-slate-300 block font-mono">Cure Time</span>
                <span className="text-xs sm:text-sm font-bold text-[#88D2A8] mt-0.5 block truncate">{service.cureTime}</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-slate-300 block font-mono">Maintenance</span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">{service.maintenanceLevel}</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-slate-300 block font-mono">Est. Pricing</span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block truncate font-mono">{service.priceRange.split(' ')[0]}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking({ serviceId: service.id })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-white/20"
              >
                <Calendar className="w-4 h-4 text-emerald-100" />
                <span>Book Site Survey & Free Estimate</span>
              </button>

              <a
                href="tel:6045403999"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 border border-white/40 hover:bg-white/10 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#88D2A8]" />
                <span>(604) 540-3999</span>
              </a>
            </div>

            {/* Footer Assurance Strip */}
            <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-300 gap-2">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#88D2A8]" />
                Red Seal Journeyman Floorcovering Installers
              </span>
              <span>24/7 Overnight Availability</span>
            </div>
          </motion.div>

          {/* Right Visual Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden bg-slate-900"
          >
            <img
              src={service.heroImage}
              alt={`${service.name} Vancouver - Ironclad Commercial Floors`}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Price & Diagnostic Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#1A2530]/95 backdrop-blur-sm border border-slate-600 p-4 text-white flex items-center justify-between shadow-xl">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Turnkey Installation Rate</span>
                <span className="text-sm sm:text-base font-bold text-[#88D2A8] font-mono">{service.priceRange}</span>
              </div>
              <span className="text-[11px] font-mono uppercase font-bold text-slate-200 bg-white/10 px-2.5 py-1 border border-white/20">
                Moisture Scan Included
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits & Commercial Applications */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Features Card */}
          <div className="lg:col-span-7 bg-white border border-slate-300 p-6 sm:p-8 space-y-5 shadow-md">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
              <Sparkles className="w-5 h-5 text-[#3B945E]" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
                Engineering Benefits & System Advantages
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every {service.name.toLowerCase()} project is executed according to stringent British Columbia commercial building codes and ASTM international specifications for superior longevity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {service.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 bg-[#F8F9FA] border border-slate-200 flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#3B945E] shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-semibold leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications Card */}
          <div className="lg:col-span-5 bg-white border border-slate-300 p-6 sm:p-8 space-y-5 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <Building className="w-5 h-5 text-[#3B945E]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
                  Target Commercial Facilities
                </h2>
              </div>
              
              <p className="text-xs text-slate-600 leading-relaxed">
                Recommended by property managers and architects across Metro Vancouver for the following environments:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {service.applications.map((app, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F9FA] text-slate-800 text-xs border border-slate-300 font-medium font-mono"
                  >
                    <Building className="w-3.5 h-3.5 text-[#3B945E]" />
                    <span>{app}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#3B4D5D] text-white border border-[#2E3C48] space-y-2">
              <span className="text-[10px] font-mono text-[#88D2A8] uppercase tracking-wider block font-bold">
                Commercial Estimating
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                Need a certified square footage estimate or specification breakdown for your facility?
              </p>
              <button
                type="button"
                onClick={() => onOpenBooking({ serviceId: service.id })}
                className="text-xs font-bold text-white hover:text-[#88D2A8] underline uppercase tracking-wider cursor-pointer"
              >
                Schedule On-Site Consultation →
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Step-by-Step Installation Protocol */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="bg-white border border-slate-300 p-6 sm:p-8 lg:p-10 shadow-md space-y-6"
        >
          <div className="space-y-2 pb-4 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-[#3B945E] uppercase tracking-wider">
              Installation Methodology
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Our 4-Step Technical Installation Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              How Ironclad delivers guaranteed structural bond and flawless architectural execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#F8F9FA] border border-slate-200 space-y-2 relative">
              <div className="w-7 h-7 bg-[#3B4D5D] text-white font-mono font-bold text-xs flex items-center justify-center">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">Diagnostic Moisture & Slab Scan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ASTM F2170 in-situ relative humidity testing, laser flatness measurements (FF/FL), and core slab assessment.
              </p>
            </div>

            <div className="p-4 bg-[#F8F9FA] border border-slate-200 space-y-2 relative">
              <div className="w-7 h-7 bg-[#3B4D5D] text-white font-mono font-bold text-xs flex items-center justify-center">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">Dustless Mechanical Surface Prep</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Planetary diamond grinding with HEPA extraction to achieve the exact ICRI concrete surface profile (CSP 2–3).
              </p>
            </div>

            <div className="p-4 bg-[#F8F9FA] border border-slate-200 space-y-2 relative">
              <div className="w-7 h-7 bg-[#3B4D5D] text-white font-mono font-bold text-xs flex items-center justify-center">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">Precision System Application</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Red Seal certified installation with laser-straight alignment, 100% solid primers, and high-wear finishes.
              </p>
            </div>

            <div className="p-4 bg-[#F8F9FA] border border-slate-200 space-y-2 relative">
              <div className="w-7 h-7 bg-[#3B4D5D] text-white font-mono font-bold text-xs flex items-center justify-center">
                04
              </div>
              <h3 className="text-sm font-bold text-slate-900">Final QC & 10-Year Warranty</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mil-thickness verification, bond pull-off testing, and formal handoff of the Ironclad 10-Year Commercial Warranty.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Showcase */}
      {service.galleryImages && service.galleryImages.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
              {service.name} Project Showcase & Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.galleryImages.map((img, idx) => (
                <div key={idx} className="h-52 bg-white border border-slate-300 overflow-hidden shadow-sm">
                  <img
                    src={img}
                    alt={`${service.name} installation photo ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Accordion */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="bg-white border border-slate-300 p-6 sm:p-8 lg:p-10 shadow-md space-y-6"
        >
          <div className="space-y-1 pb-3 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-[#3B945E] uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {service.name} Technical Questions
            </h2>
          </div>

          <div className="space-y-3">
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 bg-[#F8F9FA] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#3B4D5D] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#3B945E] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 bg-white"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      {displayRelated.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-300 pb-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
                Related Commercial Systems ({service.category})
              </h2>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#3B945E] hover:underline uppercase tracking-wider cursor-pointer"
              >
                View Full Catalogue →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayRelated.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate('service-detail', rel.slug)}
                  className="bg-white border border-slate-300 hover:border-[#7D9A87] p-5 cursor-pointer group transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                      {rel.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#3B4D5D] transition-colors leading-snug">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {rel.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="text-slate-900 font-semibold">{rel.priceRange.split(' ')[0]}</span>
                    <span className="flex items-center gap-1 font-bold group-hover:underline text-[#3B945E]">
                      <span>Specs</span> <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map Embed for this Service Page */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title={`${service.name} Mobilization & Dispatch Facility`}
          subtitle={`Dispatched from 783 E 60th Ave, Vancouver, BC V5X 2A5, Canada. Complete commercial coverage across Greater Vancouver & Lower Mainland.`}
        />
      </section>
      </div>
    </div>
  );
};
