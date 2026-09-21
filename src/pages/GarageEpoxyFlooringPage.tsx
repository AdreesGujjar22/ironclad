import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Car, 
  Truck, 
  Layers, 
  MapPin, 
  Wrench, 
  HardHat
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapEmbed } from '../components/MapEmbed';
import { flooringImages } from '../assets/flooringImages';

interface GarageEpoxyFlooringPageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export const GarageEpoxyFlooringPage: React.FC<GarageEpoxyFlooringPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const garageFaqs = [
    {
      question: 'Does garage epoxy flooring prevent hot tire pickup and oil staining?',
      answer: 'Yes. Our commercial garage epoxy and polyaspartic topcoats are formulated to permanently resist hot-tire plasticizer migration, battery acid spills, glycol, and automotive oils.'
    },
    {
      question: 'Can you install garage epoxy in cold or rainy Vancouver weather?',
      answer: 'Yes. We utilize fast-cure low-temperature polyaspartic and moisture-tolerant epoxy primers engineered specifically for Pacific Northwest seasonal moisture levels.'
    },
    {
      question: 'How long before vehicles can drive on the new garage epoxy floor?',
      answer: 'Foot traffic is typically permitted within 12–24 hours, and heavy vehicle traffic can resume in 48–72 hours depending on system formulation.'
    }
  ];

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Garage Epoxy Flooring | Ironclad Floors"
        description="Ironclad Commercial Floors installs garage epoxy flooring across Canada for fleet & parking facilities. Durable, easy-clean coatings. Free quotes."
        canonicalPath="/services/garage-epoxy-flooring"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.webp"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Garage Epoxy Flooring', path: '/services/garage-epoxy-flooring' }
        ]}
        serviceData={{
          name: 'Garage Epoxy Flooring',
          description: 'Ironclad Commercial Floors installs durable garage epoxy flooring for fleet garages, parking structures, and vehicle service facilities across Canada. Our epoxy coatings withstand tire traffic, oil, and heavy equipment.',
          category: 'Garage Epoxy Flooring',
          priceRange: 'Custom Garage Epoxy Estimate / Free Site Survey',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.webp'
        }}
        faqs={garageFaqs}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Services', page: 'services' },
          { name: 'Garage Epoxy Flooring', current: true }
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
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-6 bg-[#3B4D5D] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <HardHat className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Fleet & Auto Flooring Contractor</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Garage Epoxy Flooring in Vancouver, BC
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Ironclad Commercial Floors installs durable garage epoxy flooring for fleet garages, parking structures, and vehicle service facilities across Vancouver, BC. Our epoxy coatings withstand tire traffic, oil, and heavy equipment.
            </p>

            {/* CTAs matching reference design */}
            <div className="pt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking({ serviceType: 'Garage Epoxy Flooring' })}
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
                <span className="text-xs font-bold text-white block">Hot Tire</span>
                <span className="text-[10px] text-slate-300">Proof Bond</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white block">Oil & Chemical</span>
                <span className="text-[10px] text-slate-300">Immunity</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-[#88D2A8] block">Anti-Slip</span>
                <span className="text-[10px] text-slate-300">Safety Grit</span>
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
              loading="eager"
              fetchPriority="high"
              decoding="async"
              src={flooringImages.garageEpoxyCoating}
              alt="Garage Epoxy Flooring in Vancouver, BC"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* H2: Garage Epoxy Flooring Services */}
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
              <span>Specialized Garage Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Garage Epoxy Flooring Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Engineered to protect concrete from de-icing salts, heavy vehicles, fluids, and abrasive tire friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fleet & Commercial Garage Epoxy */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Fleet & Commercial Garage Epoxy
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Heavy-duty epoxy flooring for delivery, transit, and service fleet garages in Vancouver, BC.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Heavy Axle-Load Formulations</span>
              </div>
            </div>

            {/* Parking Structure Epoxy Coatings */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#7D9A87] text-white flex items-center justify-center font-bold">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Parking Structure Epoxy Coatings
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Durable, low-maintenance epoxy flooring for multi-level commercial parking garages.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Waterproof Elastomeric Formulations</span>
              </div>
            </div>

            {/* Auto Shop & Service Bay Epoxy */}
            <div className="bg-[#F8F9FA] border border-slate-300 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Auto Shop & Service Bay Epoxy
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Chemical- and oil-resistant epoxy flooring for auto repair and service facilities throughout Vancouver, BC.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2A6E44] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B945E]" />
                <span>Solvent & Hydraulic Fluid Proof</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* H2: Why Choose Epoxy for Your Garage Floor */}
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
              Why Choose Epoxy for Your Garage Floor
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-4xl">
              Garage epoxy flooring resists stains, cracking, and heavy vehicle traffic while making cleanup faster — a durable solution for Vancouver, BC commercial garages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-5 bg-[#F8F9FA] border border-slate-300 space-y-1">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Hot Tire & Chemical Immunity</span>
              <p className="text-xs text-slate-600">Hot tires will not lift or soften the resin. Motor oil and fluids wipe away without leaving dark stains.</p>
            </div>
            <div className="p-5 bg-[#F8F9FA] border border-slate-300 space-y-1">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Enhanced Facility Brightness</span>
              <p className="text-xs text-slate-600">High light reflectivity increases garage and bay visibility up to 300%, cutting lighting energy costs.</p>
            </div>
            <div className="p-5 bg-[#F8F9FA] border border-slate-300 space-y-1">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Extreme Longevity & Safety</span>
              <p className="text-xs text-slate-600">Anti-slip texturing prevents slips in rainy Vancouver weather, backed by our 10-year commercial warranty.</p>
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
              EXPANDED COMMERCIAL SERVICES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Related Commercial Flooring Systems
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl">
              Cross-link with our broad commercial epoxy, repair, and installation divisions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <button
              onClick={() => onNavigate('commercial-epoxy-flooring')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Epoxy Flooring</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Heavy industrial epoxy coatings, anti-slip and metallic finishes for warehouses and production plants.
              </p>
            </button>

            <button
              onClick={() => onNavigate('flooring-installation')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Installation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                New construction flooring installation for concrete, vinyl plank, carpet tile, and epoxy across Canada.
              </p>
            </button>

            <button
              onClick={() => onNavigate('flooring-repair')}
              className="p-5 bg-black/20 hover:bg-black/35 border border-white/20 text-left transition-colors group cursor-pointer"
            >
              <h4 className="font-bold text-white group-hover:text-[#88D2A8] text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Commercial Flooring Repair</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Rapid emergency repair for concrete spalls, expansion joints, and peeling floor coatings.
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
            Garage epoxy flooring in Vancouver, Burnaby, Surrey, and Richmond, BC.
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

      {/* H2: Get a Free Garage Epoxy Flooring Quote */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#1A2530] text-white border border-slate-700 p-8 sm:p-12 shadow-xl text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get a Free Garage Epoxy Flooring Quote
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Call (604) 540-3999 to schedule your garage epoxy flooring estimate in Vancouver, BC.
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
              onClick={() => onOpenBooking({ serviceType: 'Garage Epoxy Flooring' })}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-[#88D2A8]" />
              <span>Request Fleet Site Diagnostic</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Vancouver Garage Epoxy Flooring Dispatch Facility"
          subtitle="Stationed at 783 E 60th Ave, Vancouver, BC V5X 2A5. Rapid mobilization for fleet facilities and commercial parking garages."
        />
      </section>
      </div>
    </div>
  );
};
