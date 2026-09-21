import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronRight, Building, CheckCircle2, Star } from 'lucide-react';
import { LOCATIONS } from '../data/locationsData';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LocationsPageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: () => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'cities' | 'neighborhoods'>('all');

  const cityIds = ['vancouver', 'burnaby', 'new-westminster', 'coquitlam', 'port-coquitlam'];
  
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

      <div className="space-y-12 md:space-y-16">
        {/* Hero Header - Split Editorial Layout */}
      <section className="relative bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          
          {/* Left Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:col-span-7 bg-[#3B4D5D] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <MapPin className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Service Areas & Regional Coverage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Commercial Flooring Across Greater Vancouver
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Fast 24/7 crew dispatch and dedicated regional coverage for commercial and industrial properties across Metro Vancouver and the Lower Mainland. Dispatched from our central operations yard at 783 E 60th Ave, Vancouver, BC, Canada.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-slate-300 block">REGIONAL COVERAGE</span>
                <span className="font-bold text-white">{LOCATIONS.length} Dedicated Hubs</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-slate-300 block">HQ PHYSICAL ADDRESS</span>
                <span className="font-bold text-white">783 E 60th Ave, Vancouver, BC, Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual / Map Graphic Block */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-[#1A2530] p-8 sm:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 space-y-4"
          >
            <div className="p-6 bg-white/5 border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-[#88D2A8] tracking-wider block">
                METRO VANCOUVER DISPATCH
              </span>
              <h3 className="text-xl font-bold text-white">
                Under 30-Minute Travel Times
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our heavy equipment fleet is permanently staged in Vancouver for rapid mobilization to Downtown, Gastown, Yaletown, Mount Pleasant, Metrotown, Brentwood, and Queensborough.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-300 pb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Service Areas & Specific Neighborhood Landing Hubs
            </h2>
            <p className="text-xs text-slate-600">
              Select a city hub or specific commercial neighborhood for local project histories and dispatch timelines.
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
              All Hubs ({LOCATIONS.length})
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
              Regional Cities (5)
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
              Neighborhoods ({LOCATIONS.length - 5})
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
                  <div className="absolute bottom-3 right-3 bg-[#3B4D5D] text-[#88D2A8] text-[11px] font-mono font-bold px-2 py-0.5 border border-white/20">
                    {loc.completedProjectsCount}+ Projects
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#3B4D5D] transition-colors">
                    {loc.name}, BC
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {loc.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block mb-1">
                      Key Coverage Neighborhoods:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {loc.coverageZones.slice(0, 3).map((zone, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#F8F9FA] text-slate-700 font-mono border border-slate-300">
                          {zone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[11px]">Response: {loc.averageResponseTime}</span>
                <span className="font-bold text-[#3B4D5D] group-hover:text-[#7D9A87] flex items-center gap-1 uppercase tracking-wider text-[11px]">
                  View Area Page <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Regional Operations & Dispatch Hub"
          subtitle="All Greater Vancouver service areas and neighborhoods dispatched from 783 E 60th Ave, Vancouver, BC V5X 2A5, Canada. 24/7 Hotline: (604) 540-3999."
        />
      </section>
      </div>
    </div>
  );
};
