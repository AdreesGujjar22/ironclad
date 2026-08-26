import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Factory, 
  Layers, 
  MapPin, 
  HardHat
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapEmbed } from '../components/MapEmbed';
import { flooringImages } from '../assets/flooringImages';

interface CommercialEpoxyFlooringPageProps {
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

export const CommercialEpoxyFlooringPage: React.FC<CommercialEpoxyFlooringPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const epoxyFaqs = [
    {
      question: 'What is the durability and chemical resistance of commercial epoxy flooring in Vancouver?',
      answer: 'Our 100% solids commercial epoxy systems withstand forklift traffic, hydraulic oils, harsh sanitizing chemicals, and heavy abrasive wear, providing up to 20+ years of industrial lifespan.'
    },
    {
      question: 'How do you prepare the concrete prior to commercial epoxy application?',
      answer: 'We diamond grind all concrete to an International Concrete Repair Institute (ICRI) CSP 2-3 surface profile using planetary diamond grinders, repairing all substrate cracks and joints before applying the 100% solids epoxy primer.'
    },
    {
      question: 'Can you install anti-slip additives in commercial epoxy floors?',
      answer: 'Yes. We broadcast aluminum oxide, silica sand, or glass bead aggregates at customized slip-resistance ratings (R10 to R13 / ADA compliant) to ensure workplace safety in wet or oily environments.'
    }
  ];

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Epoxy Flooring Vancouver | Ironclad Commercial Floors"
        description="Ironclad Commercial Floors installs industrial & commercial epoxy flooring in Vancouver, BC. Chemical-resistant, seamless coatings. Free estimates."
        canonicalPath="/commercial-epoxy-flooring-vancouver-bc"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Commercial Epoxy Flooring Vancouver, BC', path: '/commercial-epoxy-flooring-vancouver-bc' }
        ]}
        serviceData={{
          name: 'Commercial Epoxy Flooring in Vancouver, BC',
          description: 'Ironclad Commercial Floors installs seamless, industrial-grade epoxy flooring for warehouses, manufacturing plants, and commercial facilities across Vancouver, BC. Our epoxy coatings resist chemicals, impact, and heavy foot or forklift traffic.',
          category: 'Commercial Epoxy Flooring',
          priceRange: 'Custom Commercial Epoxy Quote / Free Site Evaluation',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg'
        }}
        faqs={epoxyFaqs}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Services', page: 'services' },
          { name: 'Commercial Epoxy Flooring Vancouver, BC', current: true }
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
              <span>100% Solids Industrial Resins</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Commercial Epoxy Flooring in Vancouver, BC
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Ironclad Commercial Floors installs seamless, industrial-grade epoxy flooring for warehouses, manufacturing plants, and commercial facilities across Vancouver, BC. Our epoxy coatings resist chemicals, impact, and heavy foot or forklift traffic.
            </p>

            {/* CTAs matching Book Site Survey UI standard */}
            <div className="pt-2 flex flex-wrap gap-3.5">
              <button
                type="button"
                onClick={() => onOpenBooking({ serviceType: 'Commercial Epoxy Flooring' })}
                className="px-6 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-lg shadow-[#3B945E]/20 flex items-center justify-center gap-2 cursor-pointer border border-white/20"
              >
                <Calendar className="w-4 h-4 text-emerald-100" />
                <span>Book Site Survey / CAD Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:6045403999"
                className="px-6 py-3.5 border border-white/40 hover:bg-white/10 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#88D2A8]" />
                <span>(604) 540-3999</span>
              </a>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/15">
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">Chemical</span>
                <span className="text-[10px] text-slate-300">Resistant</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">Forklift Rated</span>
                <span className="text-[10px] text-slate-300">High PSI</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#88D2A8] block">10-Yr Bond</span>
                <span className="text-[10px] text-slate-300">Zero Peeling</span>
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
              src={flooringImages.industrialEpoxyWarehouse}
              alt="Commercial Epoxy Flooring in Vancouver, BC"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* H2: Commercial Epoxy Flooring Systems */}
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
              <span>Engineered Formulations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Epoxy Flooring Systems
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              We apply multi-layer high-build epoxy, urethane topcoats, and aggregate broadcasts tailored to facility operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Industrial Epoxy Coatings */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Industrial Epoxy Coatings
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Built for warehouses and manufacturing floors that face constant equipment and chemical exposure in Vancouver, BC facilities.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Heavy Machinery & Forklift Rated</span>
              </div>
            </div>

            {/* Anti-Slip Epoxy Flooring */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#7D9A87] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Anti-Slip Epoxy Flooring
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Safety-rated epoxy flooring for facilities requiring slip resistance in wet or high-traffic areas.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>WorkSafeBC & ADA Traction Compliance</span>
              </div>
            </div>

            {/* Decorative & Metallic Epoxy Flooring */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Decorative & Metallic Epoxy Flooring
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Custom epoxy finishes for showrooms, retail stores, and office lobbies throughout Vancouver, BC.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>High-Luster Architectural Aesthetics</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* H2: Benefits of Commercial Epoxy Flooring */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white border border-slate-300 p-8 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Benefits of Commercial Epoxy Flooring
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-4xl">
              Seamless, easy to clean, chemical and impact resistant, and built to outlast standard commercial flooring — a smart long-term investment for Vancouver, BC businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            <div className="p-4 bg-[#F8F9FA] border border-slate-300 space-y-1">
              <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">Seamless & Hygienic</span>
              <p className="text-xs text-slate-600">No grout lines or cracks to trap dirt, bacteria, or moisture.</p>
            </div>
            <div className="p-4 bg-[#F8F9FA] border border-slate-300 space-y-1">
              <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">Chemical Resistant</span>
              <p className="text-xs text-slate-600">Repels oils, brake fluids, grease, detergents, and industrial chemicals.</p>
            </div>
            <div className="p-4 bg-[#F8F9FA] border border-slate-300 space-y-1">
              <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">High Impact Strength</span>
              <p className="text-xs text-slate-600">Withstands dropped tools, pallets, and constant heavy machinery traffic.</p>
            </div>
            <div className="p-4 bg-[#F8F9FA] border border-slate-300 space-y-1">
              <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">Rapid Maintenance</span>
              <p className="text-xs text-slate-600">Cleans rapidly with standard auto-scrubbers and neutral cleaners.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Services Internal Cross-Linking */}
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
              COATING & FLOORING ECOSYSTEM
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Explore Related Commercial Flooring Solutions
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl">
              Discover dedicated vehicle coatings, complete installations, or precision repairs across Vancouver:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <button
              onClick={() => onNavigate('garage-epoxy-flooring-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Garage Epoxy Flooring</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Heavy-duty garage epoxy flooring for fleet garages, auto service bays, and parking structures.
              </p>
            </button>

            <button
              onClick={() => onNavigate('flooring-installation-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Installation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Full-scale flooring installation for polished concrete, luxury vinyl plank, carpet tile, and epoxy.
              </p>
            </button>

            <button
              onClick={() => onNavigate('flooring-repair-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Repair</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Fast 24/7 commercial flooring repair for cracked concrete, peeling coatings, and damaged tiles.
              </p>
            </button>
          </div>
        </div>
      </motion.section>

      {/* H2: Areas We Serve */}
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
            <span>Regional Service</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Areas We Serve
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Commercial epoxy flooring installation in Vancouver, Burnaby, Surrey, and Richmond, BC.
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

      {/* H2: Request an Epoxy Flooring Quote */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#1A2530] text-white border border-slate-700 p-8 sm:p-12 shadow-xl text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Request an Epoxy Flooring Quote
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Call (604) 540-3999 for a free commercial epoxy flooring estimate in Vancouver, BC.
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
              onClick={() => onOpenBooking({ serviceType: 'Commercial Epoxy Flooring' })}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-[#88D2A8]" />
              <span>Request Free Facility Survey</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Vancouver Commercial Epoxy Flooring Application Center"
          subtitle="Headquartered at 783 E 60th Ave, Vancouver, BC V5X 2A5. Industrial planetary grinding and epoxy mixing fleet."
        />
      </section>
      </div>
    </div>
  );
};
