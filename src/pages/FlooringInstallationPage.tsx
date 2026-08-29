import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Hammer, 
  Building2, 
  Sparkles, 
  MapPin, 
  HardHat
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapEmbed } from '../components/MapEmbed';
import { flooringImages } from '../assets/flooringImages';

interface FlooringInstallationPageProps {
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

export const FlooringInstallationPage: React.FC<FlooringInstallationPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const installationFaqs = [
    {
      question: 'What materials do you install for commercial flooring in Vancouver, BC?',
      answer: 'We install polished concrete, luxury vinyl plank (LVP), commercial carpet tile, high-performance epoxy floor coatings, and heavy-duty rubber flooring tailored for commercial and industrial facilities across Vancouver, BC.'
    },
    {
      question: 'Do you offer overnight commercial flooring installation?',
      answer: 'Yes. We specialize in off-hours, weekend, and overnight phased flooring installations to ensure zero disruption and zero downtime for operating Vancouver businesses.'
    },
    {
      question: 'How do you prepare subfloors before commercial flooring installation?',
      answer: 'We perform laser-guided elevation profiling, ASTM F2170 moisture testing, diamond grinding, and self-leveling underlayment applications to guarantee long-term floor adhesion and warranty compliance.'
    }
  ];

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Flooring Installation Vancouver | Ironclad Commercial Floors"
        description="Ironclad Commercial Floors offers professional flooring installation in Vancouver, BC. Epoxy, vinyl, tile & concrete flooring. Free quotes available."
        canonicalPath="/flooring-installation-vancouver-bc"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Flooring Installation Vancouver, BC', path: '/flooring-installation-vancouver-bc' }
        ]}
        serviceData={{
          name: 'Commercial Flooring Installation in Vancouver, BC',
          description: 'Ironclad Commercial Floors delivers professional flooring installation for businesses across Vancouver, BC. As a leading commercial flooring contractor, we install durable, code-compliant flooring systems for offices, retail stores, warehouses, and industrial facilities — including epoxy, polished concrete, vinyl plank, and carpet tile.',
          category: 'Commercial Flooring Installation',
          priceRange: 'Custom Commercial Estimate / Free On-Site Quote',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg'
        }}
        faqs={installationFaqs}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Services', page: 'services' },
          { name: 'Flooring Installation Vancouver, BC', current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16">
        {/* Hero Header Section - Split Editorial (TFS Style) */}
      <section className="relative bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left Column: Slate Editorial */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 bg-[#3B4D5D] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <HardHat className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Licensed Commercial Flooring Contractor</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Commercial Flooring Installation in Vancouver, BC
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Ironclad Commercial Floors delivers professional flooring installation for businesses across Vancouver, BC. As a leading commercial flooring contractor, we install durable, code-compliant flooring systems for offices, retail stores, warehouses, and industrial facilities — including epoxy, polished concrete, vinyl plank, and carpet tile.
            </p>

            {/* CTAs matching reference design */}
            <div className="pt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking({ serviceType: 'Commercial Flooring Installation' })}
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

            {/* Key Value Props */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/15">
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">Red Seal</span>
                <span className="text-[10px] text-slate-300">Certified</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">Overnight</span>
                <span className="text-[10px] text-slate-300">Zero Downtime</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#88D2A8] block">10-Yr Bond</span>
                <span className="text-[10px] text-slate-300">Warranty</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative min-h-[350px] lg:min-h-full overflow-hidden"
          >
            <img
              src={flooringImages.flooringHandsInstallation}
              alt="Commercial Flooring Installation in Vancouver, BC"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* H2: Commercial Flooring Installation Services */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white border border-slate-300 p-8 sm:p-12 shadow-lg space-y-10">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7D9A87]/15 text-[#2A6E44] text-xs font-mono font-bold uppercase tracking-wider border border-[#7D9A87]/30">
              <Layers className="w-3.5 h-3.5 text-[#3B945E]" />
              <span>Full-Scope Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Flooring Installation Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              We engineer each flooring installation project from laser leveling and subfloor moisture diagnostics to precision execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* New Construction Flooring Installation */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  New Construction Flooring Installation
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  We work directly with general contractors and property managers on new commercial builds throughout Vancouver, BC, ensuring flooring installation aligns with your project timeline.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>GC Critical-Path Alignment</span>
              </div>
            </div>

            {/* Renovation & Tenant Improvement Flooring */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#7D9A87] text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Renovation & Tenant Improvement Flooring
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Upgrading an existing office or retail space? Our flooring installation team minimizes disruption while delivering a professional, long-lasting finish.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Dustless HEPA Containment</span>
              </div>
            </div>

            {/* Epoxy & Industrial Floor Installation */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Epoxy & Industrial Floor Installation
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  For warehouses and manufacturing facilities, we install seamless epoxy flooring engineered to withstand heavy traffic, chemicals, and equipment loads.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Forklift-Rated Durability</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* H2: Materials We Install */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white border border-slate-300 p-8 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Materials We Install
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-4xl">
              Polished concrete, luxury vinyl plank (LVP), carpet tile, epoxy coatings, and rubber flooring — matched to your Vancouver, BC facility's needs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {[
              { name: 'Polished Concrete', desc: 'Diamond-ground high-gloss durability' },
              { name: 'Luxury Vinyl Plank (LVP)', desc: 'Waterproof 20-30 mil wear layer' },
              { name: 'Commercial Carpet Tile', desc: 'Modular acoustic sound reduction' },
              { name: 'Epoxy Coatings', desc: 'Seamless industrial chemical barrier' },
              { name: 'Rubber Flooring', desc: 'High-impact athletic and healthcare grade' }
            ].map((mat, i) => (
              <div 
                key={i} 
                className="p-4 bg-[#F8F9FA] border border-slate-200 space-y-1"
              >
                <span className="text-xs font-bold text-slate-900 block">{mat.name}</span>
                <span className="text-[11px] text-slate-500 leading-snug block">{mat.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Related Services Internal Cross-Linking (TFS Style Dark Slate Box) */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#3B4D5D] text-white p-8 sm:p-10 border border-[#2E3C48] space-y-8 shadow-xl">
          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase font-bold text-[#88D2A8] tracking-wider block">
              COMPREHENSIVE COMMERCIAL SOLUTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Explore Related Commercial Flooring Services
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl">
              Connect with our specialized teams for repairs, replacements, and industrial epoxy systems across Vancouver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => onNavigate('flooring-repair-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Repair</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Fast crack, tile & epoxy patching in Vancouver, BC.
              </p>
            </button>

            <button
              onClick={() => onNavigate('flooring-replacement-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Replacement</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Full tear-out, subfloor prep & new surface install.
              </p>
            </button>

            <button
              onClick={() => onNavigate('commercial-epoxy-flooring-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Epoxy Flooring</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Industrial-grade chemical & forklift resistant systems.
              </p>
            </button>

            <button
              onClick={() => onNavigate('garage-epoxy-flooring-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs uppercase tracking-wider flex items-center justify-between">
                <span>Garage Epoxy Flooring</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Fleet, parking structure & auto shop epoxy coatings.
              </p>
            </button>
          </div>
        </div>
      </motion.section>

      {/* H2: Serving Vancouver, BC and Surrounding Areas */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white border border-slate-300 p-8 sm:p-10 shadow-lg space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7D9A87]/15 text-[#2A6E44] text-xs font-mono font-bold uppercase tracking-wider border border-[#7D9A87]/30">
            <MapPin className="w-3.5 h-3.5 text-[#3B945E]" />
            <span>Regional Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Serving Vancouver, BC and Surrounding Areas
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Ironclad Commercial Floors provides flooring installation in Vancouver, Burnaby, Surrey, and Richmond, BC.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {['Vancouver, BC', 'Burnaby, BC', 'Surrey, BC', 'Richmond, BC'].map((city, idx) => (
              <div key={idx} className="p-3.5 bg-[#F8F9FA] border border-slate-300 text-center font-bold text-slate-900 text-xs uppercase tracking-wider">
                {city}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* H2: Schedule Your Flooring Installation Quote */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#1A2530] text-white border border-slate-700 p-8 sm:p-12 shadow-xl text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule Your Flooring Installation Quote
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Call (604) 540-3999 to book a free flooring installation estimate in Vancouver, BC.
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
              onClick={() => onOpenBooking({ serviceType: 'Commercial Flooring Installation' })}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-[#88D2A8]" />
              <span>Request Online Proposal</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Vancouver Flooring Installation Headquarters & Dispatch"
          subtitle="Centrally located at 783 E 60th Ave, Vancouver, BC V5X 2A5. Rapid mobilization across Metro Vancouver."
        />
      </section>
      </div>
    </div>
  );
};
