import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronRight, Star } from 'lucide-react';
import { LOCATIONS } from '../data/locationsData';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LocationsPageProps {
  onNavigate: (page: string, param?: string) => void;

}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'cities' | 'neighborhoods'>('all');

  const cityIds = ['vancouver', 'burnaby', 'new-westminster', 'coquitlam', 'port-coquitlam', 'richmond', 'surrey', 'delta', 'langley', 'north-vancouver'];
  
  const displayedLocations = LOCATIONS.filter(loc => {
    if (filter === 'cities') return cityIds.includes(loc.id);
    if (filter === 'neighborhoods') return !cityIds.includes(loc.id);
    return true;
  });

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Commercial Flooring Service Areas BC | Ironclad Floors"
        description="Commercial flooring contractor in Vancouver, Burnaby, New Westminster, Coquitlam & neighborhoods. 24/7 installations from 783 E 60th Ave, Vancouver, BC, Canada."
        canonicalPath="/locations"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/locations' }
        ]}
      />

      {/* Visual Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: 'Service Areas & Neighborhoods', current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-7 md:space-y-9">
        {/* Hero Header - Split Editorial Layout */}
      <section className="ic-locations-hero relative bg-[#1A2530] text-white">
        <div className="ic-locations-hero-inner max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          
          {/* Left Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7 bg-[#3B4D5D] p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <MapPin className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Local service across Metro Vancouver</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Commercial flooring across Metro Vancouver
            </h1>

            <p className="text-slate-200 text-base leading-relaxed">See the cities and neighbourhoods where we take on commercial flooring projects.</p>
            <a href="tel:6045403999" className="rounded-full bg-[#3B945E] px-5 py-3 text-sm font-bold text-white">Call now · (604) 540-3999</a>


          </motion.div>
          <div className="ic-locations-hero-image lg:col-span-5 relative min-h-[240px]">
            <img src={LOCATIONS[0].image} alt="Commercial flooring service area in Metro Vancouver" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-300 pb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Find your service area
            </h2>
            <p className="text-xs text-slate-600">
              Browse cities and neighbourhoods across Metro Vancouver.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                filter === 'all'
                  ? 'bg-[#3B4D5D] text-white border-[#2E3C48] shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
              }`}
            >
              All Areas ({LOCATIONS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('cities')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                filter === 'cities'
                  ? 'bg-[#3B4D5D] text-white border-[#2E3C48] shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
              }`}
            >
              Cities ({cityIds.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('neighborhoods')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                filter === 'neighborhoods'
                  ? 'bg-[#3B4D5D] text-white border-[#2E3C48] shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
              }`}
            >
              Neighborhoods ({LOCATIONS.length - cityIds.length})
            </button>
          </div>
        </div>
      </section>

      {/* Locations Matrix */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedLocations.map(loc => (
            <motion.div
              key={loc.id}
              whileHover={{ y: -4 }}
              onClick={() => onNavigate('location-detail', loc.slug)}
              className="bg-white border border-slate-300 hover:border-[#3B4D5D] cursor-pointer group transition-colors flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="h-48 overflow-hidden relative border-b border-slate-200">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={loc.image}
                    alt={`${loc.name} Commercial Flooring`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {loc.id === 'vancouver' && (
                    <div className="absolute top-3 left-3 bg-[#1A2530] text-white font-bold text-[10px] px-2.5 py-1 font-mono uppercase tracking-wider border border-white/20 flex items-center gap-1.5">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>Main HQ Dispatch</span>
                    </div>
                  )}

                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#3B4D5D] transition-colors">
                    {loc.name}, BC
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {loc.description}
                  </p>


                </div>
              </div>

              <div className="p-5 pt-0 text-sm font-semibold text-[#3B4D5D] group-hover:text-[#7D9A87] flex items-center gap-1">
                View service area <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed title="Metro Vancouver service area" subtitle="Explore where we work across the region." className="ic-locations-map" />
      </section>
      </div>
    </div>
  );
};
