import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Clock, ExternalLink } from 'lucide-react';

interface MapEmbedProps {
  title?: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  hours?: string;
  className?: string;
  embedUrl?: string;
}

export const MapEmbed: React.FC<MapEmbedProps> = ({
  title = "Our Vancouver Headquarters & Equipment Yard",
  subtitle = "Strategically located in South Vancouver for rapid dispatch across Greater Vancouver.",
  address = "783 E 60th Ave, Vancouver, BC V5X 2A5, Canada",
  phone = "(604) 540-3999",
  hours = "Rapid Response Dispatch & Flexible Night Shifts",
  className = "",
  embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.2224186218696!2d-123.088378!3d49.2158341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486751bef21a57d%3A0x41cd6e337360bab!2sIRONCLAD%20COMMERCIAL%20FLOORS!5e1!3m2!1sen!2sca!4v1787440209608!5m2!1sen!2sca"
}) => {
  const mapSrc = embedUrl || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.2224186218696!2d-123.088378!3d49.2158341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486751bef21a57d%3A0x41cd6e337360bab!2sIRONCLAD%20COMMERCIAL%20FLOORS!5e1!3m2!1sen!2sca!4v1787440209608!5m2!1sen!2sca`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=IRONCLAD+COMMERCIAL+FLOORS+783+E+60th+Ave+Vancouver+BC`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      id="location-map-section" 
      className={`bg-white text-slate-900 rounded-3xl overflow-hidden border border-slate-200 shadow-xl ${className}`}
    >
      <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3B945E]/10 text-[#2A6E44] border border-[#3B945E]/30">
              <span className="w-2 h-2 rounded-full bg-[#3B945E] animate-pulse"></span>
              <span>Central Dispatch Facility</span>
            </span>
            <h3 className="text-2xl md:text-3xl font-black mt-3 text-slate-900 tracking-tight">
              {title}
            </h3>
            <p className="text-slate-600 mt-2 text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="space-y-4 pt-2 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#3B945E]/10 text-[#3B945E] border border-[#3B945E]/20 shrink-0">
                <MapPin className="w-5 h-5 text-[#3B945E]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Address</p>
                <p className="text-sm md:text-base font-bold text-slate-900">{address}</p>
                <p className="text-xs text-slate-500 mt-0.5">Vancouver, British Columbia</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#3B945E]/10 text-[#3B945E] border border-[#3B945E]/20 shrink-0">
                <Phone className="w-5 h-5 text-[#3B945E]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Direct Dispatch Phone</p>
                <a href="tel:6045403999" className="text-sm md:text-base font-bold text-slate-900 hover:text-[#3B945E] transition-colors">
                  {phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#3B945E]/10 text-[#3B945E] border border-[#3B945E]/20 shrink-0">
                <Clock className="w-5 h-5 text-[#3B945E]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Hours of Operation</p>
                <p className="text-sm md:text-base font-medium text-slate-900">{hours}</p>
                <p className="text-xs text-slate-500 mt-0.5">Day & Night Shifts Available Mon-Sun</p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-md cursor-pointer border border-white/20"
            >
              <Navigation className="w-4 h-4 text-emerald-100" />
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:6045403999"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A2530] hover:bg-[#243342] text-white border border-slate-600 font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#88D2A8]" />
              <span>Call Dispatch: (604) 540-3999</span>
            </motion.a>
          </div>
        </div>

        {/* Embedded Map Column */}
        <div className="lg:col-span-7 h-[340px] md:h-[420px] rounded-2xl overflow-hidden border border-slate-200 relative shadow-inner bg-slate-100">
          <iframe
            id="google-maps-iframe"
            title="Ironclad Commercial Floors Vancouver Headquarters"
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full min-h-[350px] md:min-h-[420px]"
          ></iframe>
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-800 shadow-sm pointer-events-none">
            IRONCLAD HQ • 783 E 60th Ave, Vancouver, BC, Canada
          </div>
        </div>
      </div>
    </motion.div>
  );
};
