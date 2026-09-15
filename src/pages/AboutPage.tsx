import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  HardHat, 
  Clock, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Phone,
  CheckCircle2,
  Building2,
  Users,
  Award
} from 'lucide-react';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { flooringImages } from '../assets/flooringImages';

interface AboutPageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: () => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="About Ironclad Commercial Floors | Commercial Flooring Contractor"
        description="Ironclad Commercial Floors is Canada's trusted commercial flooring contractor. Learn about our team, experience & nationwide service capabilities."
        canonicalPath="/about"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Ironclad Commercial Floors', path: '/about' }
        ]}
        serviceData={{
          name: 'About Ironclad Commercial Floors',
          description: 'Ironclad Commercial Floors is a leading commercial flooring contractor serving facilities nationwide. Learn about our team, experience & service scope.',
          category: 'Commercial Flooring Contractor',
          priceRange: 'Custom Commercial Estimates / Free Site Consultations',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg'
        }}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'About Ironclad Commercial Floors', current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16">
        {/* Hero Header - Split Editorial Layout */}
      <section className="relative bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 bg-[#3B4D5D] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <HardHat className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Commercial Flooring Contractor in Vancouver, BC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              About Ironclad Commercial Floors
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Headquartered at 783 E 60th Ave, Vancouver, BC V5X 2A5, Canada, delivering heavy-duty commercial flooring installation, repair, replacement, and epoxy coatings across the Pacific Northwest.
            </p>

            {/* CTAs matching reference design */}
            <div className="pt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
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
                <span className="text-xs font-bold text-white block">100%</span>
                <span className="text-[10px] text-slate-300">In-House Fleet</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">$5,000,000</span>
                <span className="text-[10px] text-slate-300">Liability / WCB</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#88D2A8] block">10-Year</span>
                <span className="text-[10px] text-slate-300">Bond Warranty</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative min-h-[350px] lg:min-h-full overflow-hidden"
          >
            <img
              src={flooringImages.luxuryWoodFloorInterior}
              alt="Commercial Flooring Contractor in Vancouver, BC - Ironclad Commercial Floors"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* H2: Our Story & Mission */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white border border-slate-300 p-8 sm:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7D9A87]/15 text-[#2A6E44] text-xs font-mono font-bold uppercase tracking-wider border border-[#7D9A87]/30">
                <Award className="w-3.5 h-3.5 text-[#3B945E]" />
                <span>Our Heritage & Standards</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Story & Mission
              </h2>
              <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  We started Ironclad Commercial Floors because too many Vancouver businesses were waiting weeks for flooring work that should have taken days.
                </p>
                <p>
                  We have installed patched and replaced nearly every kind of commercial floor there is including offices warehouses retail spaces and parking garages.
                </p>
                <p>
                  Epoxy flooring is our specialty and we build it tough enough to handle oil tires and heavy daily traffic without a second thought.
                </p>
                <div className="p-4 bg-[#F8F9FA] border-l-4 border-[#3B945E] text-slate-800 font-semibold text-xs leading-relaxed">
                  Our goal is simple. We want every client to call us once and never need another flooring contractor again.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 bg-[#F8F9FA] border border-slate-300">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">In-House Fleet & Crew</div>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-slate-300">
                  <div className="text-xl sm:text-2xl font-black text-[#2A6E44] font-mono">$5,000,000</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Commercial Liability & WCB</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative border border-slate-300 overflow-hidden shadow-md">
                <img
                  src={flooringImages.vinylPlankKneeling}
                  alt="Commercial Flooring Installation Craftsman Vancouver, BC"
                  className="w-full h-72 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 p-3 bg-[#3B4D5D] text-white border border-[#2E3C48] text-[11px] font-mono">
                HQ: 783 E 60th Ave, Vancouver • (604) 540-3999
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* H2: Our Commitment to Vancouver, BC Businesses */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white border border-slate-300 p-8 sm:p-12 shadow-lg space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7D9A87]/15 text-[#2A6E44] text-xs font-mono font-bold uppercase tracking-wider border border-[#7D9A87]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3B945E]" />
              <span>Reliability First</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Commitment to Vancouver, BC Businesses
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Licensed, insured, and experienced with commercial-grade materials — Ironclad Commercial Floors is committed to minimal downtime and lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F8F9FA] border border-slate-300 space-y-3">
              <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Zero-Downtime Scheduling</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We perform phased installations, night shifts, and holiday closures so your business never misses a day of revenue or operations.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] border border-slate-300 space-y-3">
              <div className="w-10 h-10 bg-[#7D9A87] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">10-Year Workmanship Bond</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Every square foot of epoxy, concrete polishing, and resilient flooring is protected by our 10-year structural bond and adhesion warranty.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] border border-slate-300 space-y-3">
              <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">ASTM Scientific Testing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                In-situ relative humidity testing (ASTM F2170) and ICRI surface profiling on every substrate ensure uncompromising longevity.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Internal Links to All 5 Core Services */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#3B4D5D] text-white p-8 sm:p-10 border border-[#2E3C48] space-y-6 shadow-xl">
          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase font-bold text-[#88D2A8] tracking-wider block">
              OUR SERVICE PORTFOLIO
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Commercial Flooring Services in Vancouver, BC
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl">
              Explore our core commercial flooring divisions engineered for durability, safety, and performance:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {[
              { path: 'flooring-installation', title: 'Flooring Installation', desc: 'Vinyl, concrete & carpet tile install.' },
              { path: 'flooring-repair', title: 'Flooring Repair', desc: 'Fast crack, spall & epoxy patching.' },
              { path: 'flooring-replacement', title: 'Flooring Replacement', desc: 'Demolition, prep & new surface.' },
              { path: 'commercial-epoxy-flooring', title: 'Commercial Epoxy', desc: 'Chemical & impact resistant.' },
              { path: 'garage-epoxy-flooring', title: 'Garage Epoxy', desc: 'Fleet & parking structure epoxy.' }
            ].map(item => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className="p-4 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
              >
                <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs uppercase tracking-wider flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
                </h4>
                <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* H2: Contact Our Vancouver, BC Team */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#1A2530] text-white border border-slate-700 p-8 sm:p-12 shadow-xl text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Our Vancouver, BC Team
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Call (604) 540-3999 to speak with Ironclad Commercial Floors about your next flooring project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:6045403999"
              className="px-6 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider shadow-md transition-all inline-flex items-center gap-2 border border-white/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call (604) 540-3999</span>
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all border border-white/20 cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#88D2A8]" />
              <span>Request In-Person Site Survey</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Visit Our Vancouver Headquarters"
          subtitle="Located at 783 E 60th Ave, Vancouver, BC V5X 2A5, Canada. Schedule a material sample review or project diagnostic."
        />
      </section>
      </div>
    </div>
  );
};
