import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap
} from 'lucide-react';
import { LOCATIONS } from '../data/locationsData';
import { SERVICES } from '../data/servicesData';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LocationDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking
}) => {
  const location = LOCATIONS.find(l => l.slug === slug) || LOCATIONS[0]!;

  const locationFaqs = [
    {
      question: `What commercial flooring services are available in ${location.name}, BC?`,
      answer: `We provide full-service concrete polishing, industrial epoxy coatings, commercial carpet tiles, luxury vinyl planks, and fast repairs in ${location.name} with flexible 24/7 day and night crews.`
    },
    {
      question: `What is the average response time for projects in ${location.name}?`,
      answer: `Our dedicated crews provide ${location.averageResponseTime} dispatch for on-site diagnostic moisture scans and next-day project quotes across ${location.name}.`
    },
    {
      question: `Where are crews and materials dispatched from?`,
      answer: `All commercial projects in ${location.name} are managed and mobilized directly from our central headquarters at 783 E 60th Ave, Vancouver, BC V5X 2A5 Canada.`
    },
    {
      question: `Which commercial zones do you service in ${location.name}?`,
      answer: `We service all key business, retail, institutional, and industrial zones including ${location.coverageZones.join(', ')}.`
    }
  ];

  // Resolve popular service items
  const popularServiceItems = SERVICES.filter(s => 
    location.popularServices.some(ps => s.name.toLowerCase().includes(ps.toLowerCase()) || ps.toLowerCase().includes(s.name.toLowerCase()))
  ).slice(0, 4);

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead 
        title={location.metaTitle} 
        description={location.metaDescription}
        canonicalPath={`/location/${location.slug}`}
        ogImage={location.image}
        locationName={location.name}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/locations' },
          { name: `${location.name}, BC`, path: `/location/${location.slug}` }
        ]}
        faqs={locationFaqs}
      />

      {/* Visual Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: 'Service Areas & Neighborhoods', page: 'locations' },
          { name: `${location.name}, BC`, current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16">
        {/* Location Hero - Split Editorial Layout */}
      <section className="relative bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          
          {/* Left Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:col-span-7 bg-[#3B4D5D] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <MapPin className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>{location.name}, British Columbia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              {location.headline}
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
              {location.description}
            </p>

            <div className="p-3.5 bg-black/20 border border-white/10 text-xs font-mono text-slate-200 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#88D2A8] shrink-0" />
                <span><strong className="text-white">Physical Dispatch HQ:</strong> 783 E 60th Ave, Vancouver, BC V5X 2A5, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#88D2A8] shrink-0" />
                <span><strong className="text-white">Average Mobilization Time:</strong> {location.averageResponseTime}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking({ location: `${location.name}, BC` })}
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-2xl cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>MAKE APPOINTMENT</span>
              </button>

              <a
                href="tel:6045403999"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#1A2530] hover:bg-[#243342] text-white border border-slate-600 shadow-2xl transition-all font-mono font-bold text-xs uppercase tracking-wider shrink-0 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#88D2A8]" />
                <span className="text-white tracking-wider">Call (604) 540-3999</span>
              </a>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/15">
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">{location.completedProjectsCount}+ Floors</span>
                <span className="text-[10px] text-slate-300">Installed</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#88D2A8] block">{location.averageResponseTime}</span>
                <span className="text-[10px] text-slate-300">Response Time</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">Night Shifts</span>
                <span className="text-[10px] text-slate-300">Zero Downtime</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative min-h-[350px] lg:min-h-full overflow-hidden bg-slate-900"
          >
            <img
              src={location.image}
              alt={`Commercial Flooring Contractor in ${location.name}, BC`}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Highlights & Zones */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6 bg-white border border-slate-300 p-6 md:p-8 space-y-4 shadow-md">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
              Why Property Owners in {location.name} Choose Ironclad
            </h3>
            <div className="space-y-3 pt-2">
              {location.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#3B945E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-300 p-6 md:p-8 space-y-4 shadow-md">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
              Active Coverage Zones in {location.name}
            </h3>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {location.coverageZones.map((zone, idx) => (
                <div key={idx} className="p-3 bg-[#F8F9FA] border border-slate-300 text-xs font-mono text-slate-700 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#3B945E] shrink-0" />
                  <span className="truncate">{zone}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Popular Flooring Systems in this Area */}
      {popularServiceItems.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-300 pb-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
                Popular Commercial Flooring Solutions in {location.name}
              </h3>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#3B945E] hover:underline uppercase tracking-wider cursor-pointer"
              >
                All 40 Systems →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularServiceItems.map(serv => (
                <div
                  key={serv.id}
                  onClick={() => onNavigate('service-detail', serv.slug)}
                  className="bg-white border border-slate-300 hover:border-[#7D9A87] p-4 cursor-pointer group transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-[#3B945E] font-bold uppercase">{serv.category}</span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#3B4D5D] transition-colors leading-snug">
                      {serv.name}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {serv.shortDesc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{serv.priceRange.split(' ')[0]}</span>
                    <span className="text-[#3B945E] font-bold group-hover:underline flex items-center gap-0.5">
                      Specs <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map Embed for this specific city/neighborhood */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title={`Ironclad Commercial Dispatch for ${location.name}, BC`}
          subtitle={`Dispatched from 783 E 60th Ave, Vancouver, BC V5X 2A5, Canada. Average emergency arrival time in ${location.name}: ${location.averageResponseTime}.`}
          embedUrl={location.mapEmbedUrl}
        />
      </section>
      </div>
    </div>
  );
};
