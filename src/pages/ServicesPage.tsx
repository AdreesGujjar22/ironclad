import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Layers, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServicesPageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Concrete & Epoxy', 'Resilient & Vinyl', 'Tile & Carpet', 'Sector Specific', 'Repair & Restoration'];

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Commercial Flooring Services Vancouver | Ironclad Floors"
        description="Explore commercial flooring services in Vancouver, BC. Concrete polishing, industrial epoxy, luxury vinyl & carpet tiles by Ironclad Commercial Floors."
        canonicalPath="/services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Commercial Flooring Services', path: '/services' }
        ]}
      />

      {/* Visual Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: 'Commercial Flooring Services', current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16">
        {/* Header Banner - Architectural Slate Header */}
      <section className="relative bg-[#3B4D5D] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#2E3C48]">
        {/* Subtle blueprint grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
            <Layers className="w-3.5 h-3.5 text-[#88D2A8]" />
            <span>Commercial Flooring Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Commercial Flooring Services in Vancouver, BC
          </h1>
          <p className="text-slate-200 text-xs sm:text-base leading-relaxed max-w-3xl mx-auto">
            Engineered for extreme durability, architectural aesthetics, and seamless maintenance across corporate, industrial, healthcare, and retail properties.
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search commercial flooring services (e.g. epoxy, polished concrete, carpet tile, repair)..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-white text-slate-900 border border-slate-300 pl-11 pr-4 py-3 text-xs sm:text-sm focus:ring-2 focus:ring-[#7D9A87] focus:outline-none placeholder:text-slate-400 shadow-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-[#7D9A87] text-white border-white/30 shadow-md'
                      : 'bg-black/20 text-slate-200 hover:text-white hover:bg-black/40 border-white/10'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${SERVICES.length})` : `(${SERVICES.filter(s => s.category === cat).length})`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-6 text-xs font-mono text-slate-600 flex flex-wrap items-center justify-between gap-2 border-b border-slate-300 pb-3">
          <span>Showing {filteredServices.length} of {SERVICES.length} Commercial Systems</span>
          <span className="text-[#2A6E44] font-bold">10-Year Ironclad Warranty on All Installations</span>
        </div>

        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-300 space-y-3 shadow-sm">
            <p className="text-slate-600 font-semibold">No commercial services found matching "{searchTerm}".</p>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="text-xs text-[#3B945E] hover:underline font-bold cursor-pointer uppercase tracking-wider"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <motion.div 
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map(service => (
              <motion.div
                key={service.id}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-300 hover:border-[#7D9A87] overflow-hidden flex flex-col justify-between group transition-all shadow-md hover:shadow-xl"
              >
                <div>
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img
                      src={service.heroImage}
                      alt={`${service.name} Vancouver - Ironclad Commercial Floors`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#1A2530]/90 backdrop-blur-sm border border-slate-600 px-2.5 py-1 text-[10px] font-mono font-bold text-white uppercase">
                      {service.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 text-[#2A6E44] border border-slate-300 px-2.5 py-1 text-[11px] font-mono font-bold shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#3B945E]" />
                      <span>Free Site Survey</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#3B4D5D] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7D9A87] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('service-detail', service.slug)}
                    className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#3B945E] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Technical Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#7D9A87]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenBooking({ serviceId: service.id })}
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:text-white hover:bg-[#3B4D5D] px-2.5 py-1 bg-slate-100 border border-slate-300 cursor-pointer transition-colors"
                  >
                    Book Survey
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
      </div>
    </div>
  );
};
