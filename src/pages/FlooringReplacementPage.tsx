import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Trash2, 
  Layers, 
  Sparkles, 
  Building2, 
  MapPin, 
  HardHat
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapEmbed } from '../components/MapEmbed';
import { flooringImages } from '../assets/flooringImages';

interface FlooringReplacementPageProps {
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

export const FlooringReplacementPage: React.FC<FlooringReplacementPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const replacementFaqs = [
    {
      question: 'How do you handle old flooring demolition and dust in active commercial buildings?',
      answer: 'We utilize ride-on hydraulic floor scrapers and 3-phase planetary diamond grinders connected to continuous HEPA air scrubbers, isolating construction dust and exceeding WorkSafeBC silica standards.'
    },
    {
      question: 'How long does a commercial flooring replacement project take?',
      answer: 'Turnaround depends on square footage and subfloor remediation requirements. Typical tenant improvements (2,000–10,000 sq ft) take 2–5 days, and we offer phased weekend work to avoid business interruption.'
    },
    {
      question: 'Do you level uneven subfloors before installing the replacement surface?',
      answer: 'Yes. We shoot elevation lasers and pour continuous high-strength self-leveling cementitious underlayments to eliminate dips, waves, and moisture vapor issues before installing the final floor.'
    }
  ];

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Commercial Flooring Replacement Vancouver, BC | Ironclad Commercial Floors"
        description="Ironclad Commercial Floors handles commercial flooring replacement in Vancouver, BC. We remove old flooring and install durable new surfaces. Free estimates."
        canonicalPath="/flooring-replacement-vancouver-bc"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Commercial Flooring Replacement Vancouver, BC', path: '/flooring-replacement-vancouver-bc' }
        ]}
        serviceData={{
          name: 'Commercial Flooring Replacement in Vancouver, BC',
          description: 'When your commercial floor is beyond repair, Ironclad Commercial Floors provides full flooring replacement services in Vancouver, BC — from demolition and subfloor prep to installation of a new, durable surface.',
          category: 'Commercial Flooring Replacement',
          priceRange: 'Custom Replacement Estimate / Free Site Survey',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg'
        }}
        faqs={replacementFaqs}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Services', page: 'services' },
          { name: 'Commercial Flooring Replacement Vancouver, BC', current: true }
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
              <span>Full Tear-Out & Reconstruction</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Commercial Flooring Replacement in Vancouver, BC
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              When your commercial floor is beyond repair, Ironclad Commercial Floors provides full flooring replacement services in Vancouver, BC — from demolition and subfloor prep to installation of a new, durable surface.
            </p>

            {/* CTAs matching Book Site Survey UI standard */}
            <div className="pt-2 flex flex-wrap gap-3.5">
              <button
                type="button"
                onClick={() => onOpenBooking({ serviceType: 'Commercial Flooring Replacement' })}
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
                <span className="text-xs font-bold text-white block">Complete</span>
                <span className="text-[10px] text-slate-300">Demolition</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">Remediation</span>
                <span className="text-[10px] text-slate-300">Self-Leveling</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#88D2A8] block">10-Yr Bond</span>
                <span className="text-[10px] text-slate-300">Protection</span>
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
              src={flooringImages.glovedHandsFlooring}
              alt="Commercial Flooring Replacement in Vancouver, BC"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* H2: Our Flooring Replacement Process */}
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
              <span>Step-by-Step Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Flooring Replacement Process
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              We eliminate failures by stripping aged adhesives, repairing degraded substrates, and installing architectural surfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Old Flooring Removal & Demolition */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Trash2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Old Flooring Removal & Demolition
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  We safely remove worn carpet, tile, vinyl, or damaged epoxy and prepare the subfloor for new commercial flooring.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>HEPA Dust Containment</span>
              </div>
            </div>

            {/* Subfloor Repair & Leveling */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#7D9A87] text-white flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Subfloor Repair & Leveling
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Proper subfloor preparation ensures your new commercial flooring installation lasts for years, not months.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Laser Flatness & Mitigation</span>
              </div>
            </div>

            {/* New Flooring Installation */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  New Flooring Installation
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  We replace old flooring with epoxy, polished concrete, vinyl plank, or carpet tile suited to your facility's traffic and use.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Engineered for Maximum Traffic</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* H2: Ideal for Aging Commercial Properties */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white border border-slate-300 p-8 sm:p-10 shadow-lg space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7D9A87]/15 text-[#2A6E44] text-xs font-mono font-bold uppercase tracking-wider border border-[#7D9A87]/30">
            <Building2 className="w-3.5 h-3.5 text-[#3B945E]" />
            <span>Facility Modernization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ideal for Aging Commercial Properties
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-4xl">
            Flooring replacement is ideal for older office buildings, retail spaces, and warehouses in Vancouver, BC needing a full floor upgrade.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 bg-[#F8F9FA] border border-slate-300">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Corporate & Medical Offices</span>
              <p className="text-xs text-slate-600">Replacing stained carpet and worn vinyl with acoustic luxury vinyl plank or modular carpet tile.</p>
            </div>
            <div className="p-5 bg-[#F8F9FA] border border-slate-300">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Retail Stores & Showrooms</span>
              <p className="text-xs text-slate-600">Transforming cracked linoleum into high-sheen polished concrete or custom metallic epoxy.</p>
            </div>
            <div className="p-5 bg-[#F8F9FA] border border-slate-300">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Industrial & Warehouses</span>
              <p className="text-xs text-slate-600">Stripping failed paint for seamless 100% solids epoxy mortar engineered for heavy machinery.</p>
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
              COMPLETE FLOOR MANAGEMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Related Commercial Flooring Services in Vancouver, BC
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl">
              Compare our replacement services with maintenance, targeted patching, or specialized coatings:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <button
              onClick={() => onNavigate('flooring-repair-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Repair</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Need targeted concrete crack patching or epoxy fix without full replacement? Explore our repair options.
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
                New construction and architectural floor installation for vinyl plank, tile, and concrete across BC.
              </p>
            </button>

            <button
              onClick={() => onNavigate('commercial-epoxy-flooring-vancouver-bc')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Epoxy Flooring</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Replace aging subfloors with seamless, chemical-resistant industrial epoxy floor coatings.
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
            <span>Regional Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Areas We Serve
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Commercial flooring replacement throughout Vancouver, Burnaby, Surrey, and Richmond, BC.
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

      {/* H2: Get a Flooring Replacement Estimate */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#1A2530] text-white border border-slate-700 p-8 sm:p-12 shadow-xl text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get a Flooring Replacement Estimate
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Call (604) 540-3999 for a free flooring replacement quote in Vancouver, BC.
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
              onClick={() => onOpenBooking({ serviceType: 'Commercial Flooring Replacement' })}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-[#88D2A8]" />
              <span>Request In-Person Site Diagnostic</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Vancouver Commercial Flooring Replacement Headquarters"
          subtitle="Located at 783 E 60th Ave, Vancouver, BC V5X 2A5. Full-scale equipment fleet and dedicated demo crews."
        />
      </section>
      </div>
    </div>
  );
};
