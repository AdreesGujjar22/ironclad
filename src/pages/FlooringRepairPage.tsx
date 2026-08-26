import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Building2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapEmbed } from '../components/MapEmbed';
import { flooringImages } from '../assets/flooringImages';

interface FlooringRepairPageProps {
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

export const FlooringRepairPage: React.FC<FlooringRepairPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const repairFaqs = [
    {
      question: 'How quickly can your commercial flooring repair team mobilize in Vancouver?',
      answer: 'We provide 24/7 rapid emergency dispatch across Vancouver, Burnaby, Surrey, and Richmond, BC, with same-day assessments for urgent tripping hazards, spalls, and joint failures.'
    },
    {
      question: 'Can you repair damaged epoxy or tile without replacing the entire floor?',
      answer: 'Yes. We perform targeted diamond-cut keyway stitching, localized high-solid epoxy mortaring, and single-module tile or plank replacements to restore safety with minimal cost.'
    },
    {
      question: 'When is commercial flooring repair better than full replacement?',
      answer: 'If the subfloor structure is sound and damage is localized to under 20-30% of total surface area, commercial flooring repair delivers significant cost and time savings.'
    }
  ];

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Commercial Flooring Repair Vancouver, BC | Ironclad Commercial Floors"
        description="Ironclad Commercial Floors provides fast commercial flooring repair in Vancouver, BC. We fix cracked concrete, epoxy damage & worn tile. 24/7 service."
        canonicalPath="/flooring-repair-vancouver-bc"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Commercial Flooring Repair Vancouver, BC', path: '/flooring-repair-vancouver-bc' }
        ]}
        serviceData={{
          name: 'Commercial Flooring Repair in Vancouver, BC',
          description: 'Damaged commercial flooring is a liability. Ironclad Commercial Floors provides fast, reliable flooring repair throughout Vancouver, BC — restoring safety and appearance without long business closures.',
          category: 'Commercial Flooring Repair',
          priceRange: 'Custom Commercial Repair Estimate / 24/7 Emergency Dispatch',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg'
        }}
        faqs={repairFaqs}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Services', page: 'services' },
          { name: 'Commercial Flooring Repair Vancouver, BC', current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16">
        {/* Hero Header - Split Editorial Layout */}
      <section className="relative bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left Editorial Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 bg-[#3B4D5D] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-200 text-xs font-mono font-bold uppercase tracking-wider border border-amber-500/30 w-fit">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>24/7 Rapid Response Repair</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Commercial Flooring Repair in Vancouver, BC
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Damaged commercial flooring is a liability. Ironclad Commercial Floors provides fast, reliable flooring repair throughout Vancouver, BC — restoring safety and appearance without long business closures.
            </p>

            {/* CTAs matching Book Site Survey UI standard */}
            <div className="pt-2 flex flex-wrap gap-3.5">
              <button
                type="button"
                onClick={() => onOpenBooking({ serviceType: 'Commercial Flooring Repair' })}
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
                <span className="text-xs font-bold text-white block">Same-Week</span>
                <span className="text-[10px] text-slate-300">Scheduling</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">Dustless</span>
                <span className="text-[10px] text-slate-300">HEPA Grinding</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#88D2A8] block">Structural</span>
                <span className="text-[10px] text-slate-300">Long-Term Bond</span>
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
              src={flooringImages.laminateMalletInstall}
              alt="Commercial Flooring Repair in Vancouver, BC"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* H2: Commercial Flooring Repair Services */}
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
              <Wrench className="w-3.5 h-3.5 text-[#3B945E]" />
              <span>Targeted Repair Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Flooring Repair Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              We diagnose root-cause subfloor issues and deploy high-strength commercial patching compounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Concrete Crack & Spall Repair */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Concrete Crack & Spall Repair
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  We repair cracked, spalled, or pitted concrete floors in warehouses and industrial buildings across Vancouver, BC.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Epoxy Injection & Stitching</span>
              </div>
            </div>

            {/* Epoxy Floor Repair */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#7D9A87] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Epoxy Floor Repair
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Peeling, bubbling, or chipped epoxy coatings are patched and resealed to extend the life of your commercial floor.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Seamless Color Matching</span>
              </div>
            </div>

            {/* Vinyl, Tile & Carpet Repair */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Vinyl, Tile & Carpet Repair
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Localized flooring repair for damaged vinyl plank, carpet tile, and commercial tile sections without replacing the entire floor.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Modular Non-Destructive Repair</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* H2: Emergency Flooring Repair in Vancouver, BC */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#3B4D5D] text-white p-8 sm:p-12 border border-[#2E3C48] space-y-6 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider border border-amber-500/40">
            <Clock className="w-3.5 h-3.5" />
            <span>Rapid Response</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Emergency Flooring Repair in Vancouver, BC
          </h2>
          <p className="text-slate-200 text-xs sm:text-base leading-relaxed max-w-4xl">
            Ironclad Commercial Floors offers 24/7 emergency flooring repair for businesses in Vancouver, BC that can't afford downtime.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="tel:6045403999"
              className="px-6 py-3.5 bg-[#7D9A87] hover:bg-[#688371] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all inline-flex items-center gap-2 border border-white/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency Line: (604) 540-3999</span>
            </a>
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
        <div className="bg-white border border-slate-300 p-8 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase font-bold text-[#2A6E44] tracking-wider block">
              REPAIR VS. REPLACEMENT GUIDANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Explore Additional Commercial Flooring Options
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl">
              If your facility floor has structural substrate failure or requires an all-new surface, review our complete solutions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            <button
              onClick={() => onNavigate('flooring-replacement-vancouver-bc')}
              className="p-6 bg-[#F8F9FA] hover:bg-slate-100 border border-slate-300 hover:border-[#7D9A87] text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-slate-900 group-hover:text-[#3B4D5D] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Replacement</span>
                <ArrowRight className="w-4 h-4 text-[#7D9A87] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                When repairs aren't enough, our commercial flooring replacement service provides full tear-out, subfloor prep, and new flooring installation.
              </p>
            </button>

            <button
              onClick={() => onNavigate('commercial-epoxy-flooring-vancouver-bc')}
              className="p-6 bg-[#F8F9FA] hover:bg-slate-100 border border-slate-300 hover:border-[#7D9A87] text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-slate-900 group-hover:text-[#3B4D5D] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Epoxy Flooring</span>
                <ArrowRight className="w-4 h-4 text-[#7D9A87] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Install chemical-resistant, seamless commercial epoxy flooring for warehouses, manufacturing, and industrial plants.
              </p>
            </button>

            <button
              onClick={() => onNavigate('flooring-installation-vancouver-bc')}
              className="p-6 bg-[#F8F9FA] hover:bg-slate-100 border border-slate-300 hover:border-[#7D9A87] text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-slate-900 group-hover:text-[#3B4D5D] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Installation</span>
                <ArrowRight className="w-4 h-4 text-[#7D9A87] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                New construction and tenant improvement flooring installation for vinyl, carpet tile, concrete, and epoxy across Vancouver, BC.
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
            <span>Service Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Areas We Serve
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Flooring repair services throughout Vancouver, Burnaby, Surrey, and Richmond, BC.
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

      {/* H2: Request a Flooring Repair Quote */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#1A2530] text-white border border-slate-700 p-8 sm:p-12 shadow-xl text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Request a Flooring Repair Quote
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Call (604) 540-3999 for same-week commercial flooring repair in Vancouver, BC.
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
              onClick={() => onOpenBooking({ serviceType: 'Commercial Flooring Repair' })}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-[#88D2A8]" />
              <span>Schedule On-Site Assessment</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Vancouver Flooring Repair Central Dispatch"
          subtitle="Stationed at 783 E 60th Ave, Vancouver, BC V5X 2A5. Rapid emergency and scheduled repair deployment."
        />
      </section>
      </div>
    </div>
  );
};
