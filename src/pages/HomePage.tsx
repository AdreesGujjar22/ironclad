import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Building2, 
  MapPin, 
  Star, 
  HelpCircle, 
  ChevronDown,
  HardHat,
  Users,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Check,
  Eye,
  Sliders,
  ArrowUpRight,
  Hammer,
  Wrench
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { CostCalculator } from '../components/CostCalculator';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { flooringImages } from '../assets/flooringImages';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeLocation, setActiveLocation] = useState<number>(0);

  const homeFaqs = [
    {
      question: 'What commercial flooring services does Ironclad provide in Vancouver, BC?',
      answer: 'Ironclad Commercial Floors provides commercial flooring installation, commercial flooring repair, commercial flooring replacement, industrial epoxy flooring, garage epoxy flooring, concrete polishing, luxury vinyl plank (LVP), and carpet tile installation across Vancouver, BC and the Lower Mainland.'
    },
    {
      question: 'How do you minimize downtime for operating commercial businesses in Vancouver?',
      answer: 'We provide overnight, weekend, and phased off-hours flooring installations and repairs. Our rapid-cure polyaspartic and high-early-strength epoxy formulations allow foot traffic within 12 hours and vehicle traffic within 48 hours.'
    },
    {
      question: 'Are Ironclad Commercial Floors crews licensed, insured, and certified in BC?',
      answer: 'Yes. Ironclad Commercial Floors carries $5,000,000 in commercial general liability insurance, full WorkSafeBC coverage, and Red Seal certified installers trained in ICRI concrete surface preparation and ASTM moisture testing.'
    },
    {
      question: 'How do I get a free commercial flooring estimate in Vancouver, BC?',
      answer: 'You can call us directly at (604) 540-3999 or book an on-site consultation online. Our estimating engineers perform laser square footage measurement, substrate inspection, and deliver a detailed, guaranteed fixed-quote.'
    }
  ];

  const locationsList = [
    {
      city: 'Vancouver, BC',
      phone: '(604) 540-3999',
      address: '783 E 60th Ave, Vancouver, BC V5X 2A5, Canada',
      slug: 'vancouver',
      type: 'Headquarters & Main Dispatch'
    },
    {
      city: 'Burnaby, BC',
      phone: '(604) 540-3999',
      address: 'Serving Burnaby & Brentwood Commercial Districts',
      slug: 'burnaby',
      type: 'Rapid Response Crew'
    },
    {
      city: 'Surrey, BC',
      phone: '(604) 540-3999',
      address: 'Serving Surrey & Fraser Valley Facilities',
      slug: 'surrey',
      type: 'Industrial Fleet Dispatch'
    },
    {
      city: 'Richmond, BC',
      phone: '(604) 540-3999',
      address: 'Serving Richmond Commercial & Airport Logistics',
      slug: 'richmond',
      type: 'Commercial Surface Division'
    },
    {
      city: 'Coquitlam, BC',
      phone: '(604) 540-3999',
      address: 'Serving Tri-Cities & Lougheed Commercial Sector',
      slug: 'coquitlam',
      type: 'Specialty Flooring Crew'
    },
    {
      city: 'New Westminster, BC',
      phone: '(604) 540-3999',
      address: 'Serving Historic & Modern Commercial Properties',
      slug: 'new-westminster',
      type: 'Tenant Improvement Unit'
    }
  ];

  return (
    <div className="bg-[#F8F9FA] text-slate-800 selection:bg-[#3B945E] selection:text-white">
      {/* Dynamic SEO Meta & JSON-LD Structured Data */}
      <SEOHead
        title="Flooring Contractor Vancouver | Ironclad Commercial Floors"
        description="Ironclad Commercial Floors is Vancouver, BC's trusted commercial flooring contractor. Epoxy, installation, repair & replacement. Free on-site estimates."
        canonicalPath="/"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.webp"
        breadcrumbs={[
          { name: 'Home', path: '/' }
        ]}
        serviceData={{
          name: 'Commercial Flooring Contractor in Vancouver, BC',
          description: 'Ironclad Commercial Floors is Vancouver, BC’s trusted commercial flooring contractor, serving businesses, warehouses, retail stores, and industrial facilities across the Lower Mainland. Epoxy, installation, repair & replacement.',
          category: 'Commercial Flooring Contractor',
          priceRange: 'Custom Commercial Estimates / Free On-Site Estimates',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.webp'
        }}
        faqs={homeFaqs}
      />

      {/* =========================================================================
          1. HERO SECTION (Full Architectural Flooring Background with Clear Visibility)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#0A1118] text-white min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] flex items-center">
        {/* Full Background Flooring Image with High Clarity & Balanced Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={flooringImages.flooringHandsInstallation}
            alt="Commercial Flooring Contractor in Vancouver, BC - Ironclad Commercial Floors"
            className="w-full h-full object-cover object-center scale-100"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          {/* Subtle directional gradient overlay ensuring text readability while keeping the photo clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1520]/85 via-[#0B1520]/60 to-[#0B1520]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/70 via-transparent to-[#0A1118]/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="max-w-3xl space-y-6 sm:space-y-8"
          >
            {/* Exactly ONE H1 per page */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
              Commercial Flooring Contractor in Vancouver, BC
            </h1>

            {/* Exact SEO Intro Paragraph with highlighted links */}
            <p className="text-slate-100 text-sm sm:text-base sm:leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Ironclad Commercial Floors is Vancouver, BC's trusted commercial flooring contractor. We handle <button onClick={() => onNavigate('flooring-installation')} className="text-[#88D2A8] font-bold underline hover:text-white transition-colors cursor-pointer">flooring installation</button>, <button onClick={() => onNavigate('flooring-repair')} className="text-[#88D2A8] font-bold underline hover:text-white transition-colors cursor-pointer">repair</button>, <button onClick={() => onNavigate('flooring-replacement')} className="text-[#88D2A8] font-bold underline hover:text-white transition-colors cursor-pointer">replacement</button>, and <button onClick={() => onNavigate('commercial-epoxy-flooring')} className="text-[#88D2A8] font-bold underline hover:text-white transition-colors cursor-pointer">epoxy flooring</button> including <button onClick={() => onNavigate('garage-epoxy-flooring')} className="text-[#88D2A8] font-bold underline hover:text-white transition-colors cursor-pointer">garage epoxy flooring</button>. Serving Vancouver, Burnaby, Surrey, Richmond, and nearby BC communities call for a free on-site estimate.
            </p>

            {/* CTA Buttons matching reference design and floating buttons style */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => onOpenBooking()}
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-2xl cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-emerald-100" />
                <span>MAKE APPOINTMENT</span>
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:6045403999"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#1A2530] hover:bg-[#243342] text-white border border-slate-600 shadow-2xl transition-all font-mono font-bold text-xs uppercase tracking-wider shrink-0 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#88D2A8]" />
                <span className="text-white tracking-wider">Call (604) 540-3999</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. CORE VALUES RIBBON (Directly from TFS reference: 4 icons + labels)
          Integrity, Quality, Service, Sharing -> Certified, Insured, Service, Warranty
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-slate-700">
            <ShieldCheck className="w-5 h-5 text-[#C49A58]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">Red Seal Certified</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-slate-700">
            <Award className="w-5 h-5 text-[#C49A58]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">$5M WCB Insured</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-slate-700">
            <Clock className="w-5 h-5 text-[#C49A58]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">24/7 Rapid Service</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-slate-700">
            <Sparkles className="w-5 h-5 text-[#C49A58]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">10-Yr Bonded Warranty</span>
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          3. DUAL HIGHLIGHT CARDS (Blueprint Background + Sage & Slate Cards from TFS)
          "Design Gallery" & "Our Team" -> "About Us" & "Our Certified Team"
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        id="about-us-section"
        className="relative py-14 px-4 sm:px-6 lg:px-8 bg-[#E9EEF2] overflow-hidden"
      >
        {/* Subtle Blueprint Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1A2530 1px, transparent 1px), radial-gradient(#1A2530 1px, #E9EEF2 1px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px'
          }}
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          
          {/* Card 1: Sage / Muted Green Card (like TFS "Design Gallery") */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden shadow-lg flex flex-col"
          >
            <div className="h-60 sm:h-72 overflow-hidden bg-slate-200">
              <img
                src={flooringImages.luxuryWoodFloorInterior}
                alt="About Ironclad Commercial Floors - Finished Wood and Laminate Flooring"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-[#7D9A87] text-white p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {/* Exact H2 */}
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  About Us
                </h2>
                <div className="space-y-2.5 text-xs sm:text-sm text-emerald-50 leading-relaxed font-normal">
                  <p>
                    We started Ironclad Commercial Floors because too many Vancouver businesses were waiting weeks for flooring work that should have taken days.
                  </p>
                  <p>
                    We have installed patched and replaced nearly every kind of commercial floor there is including offices warehouses retail spaces and parking garages.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-2.5 border border-white/80 hover:bg-white hover:text-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Slate / Blue Card (like TFS "Our Team") */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden shadow-lg flex flex-col"
          >
            <div className="h-60 sm:h-72 overflow-hidden bg-slate-200">
              <img
                src={flooringImages.vinylPlankKneeling}
                alt="Ironclad Red Seal Certified Flooring Installation Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-[#6B8599] text-white p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Our Certified Team
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                  <p>
                    Epoxy flooring is our specialty and we build it tough enough to handle oil tires and heavy daily traffic without a second thought.
                  </p>
                  <p>
                    Our goal is simple. We want every client to call us once and never need another flooring contractor again.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-2.5 border border-white/80 hover:bg-white hover:text-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Get A Quote Now
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* =========================================================================
          4. SERVICES SECTION HEADER (Directly matching TFS "Our Products")
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="services-section" 
        className="pt-16 pb-10 px-4 sm:px-6 text-center max-w-4xl mx-auto space-y-3"
      >
        {/* Exact H2 */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Our Commercial Flooring Services in Vancouver, BC
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Ironclad Commercial Floors offers a full range of commercial flooring solutions designed for durability, safety, and long-term performance.
        </p>
      </motion.section>

      {/* =========================================================================
          5. ALTERNATING OFFSET-FRAMED SERVICE SECTIONS (Directly from TFS Reference!)
          Texture / Dark Wood / Light Marble alternating rows with offset background box
          ========================================================================= */}
      
      {/* 5A. Commercial Flooring Installation (Dark Textured / Wood style like TFS "Flooring Services") */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#4A4B4D] text-white"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(40,40,40,0.92), rgba(60,60,60,0.95))'
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Commercial Flooring Installation
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              New construction and renovation projects need a flooring installation partner who understands commercial-grade materials, subfloor prep, and tight project timelines. We install polished concrete, vinyl plank, carpet tile, and epoxy systems for offices, retail spaces, and warehouses throughout Vancouver, BC.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('flooring-installation')}
                className="px-6 py-2.5 border border-white/70 hover:bg-white hover:text-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image with subtle offset box (like TFS) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 shadow-2xl overflow-hidden border-2 border-white/20">
              <img
                src={flooringImages.flooringInstallationLvt}
                alt="Commercial Flooring Installation Vancouver BC"
                className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Offset Decorative Box Behind */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-full h-full bg-[#7D9A87]/30 border border-white/20 -z-0" />
          </div>
        </div>
      </motion.section>

      {/* 5B. Commercial & Garage Epoxy Flooring (Light Background with Terracotta/Peach offset box like TFS "IBS Lighting") */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#EFEFEF] text-slate-900"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Framed Image with Offset Peach/Terracotta Box */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            {/* Offset Decorative Box */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full bg-[#DCA47C] -z-0" />
            <div className="relative z-10 shadow-xl overflow-hidden bg-white">
              <img
                src={flooringImages.heroCommercialEpoxy}
                alt="Commercial & Garage Epoxy Flooring Vancouver BC"
                className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Commercial & Garage Epoxy Flooring
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We install seamless, chemical-resistant epoxy flooring for warehouses, manufacturing plants, and garage epoxy flooring for fleet and parking facilities across Vancouver, BC. Epoxy coatings resist stains, impact, and heavy equipment traffic.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('commercial-epoxy-flooring')}
                className="px-6 py-2.5 border border-slate-800 hover:bg-slate-900 hover:text-white text-slate-900 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Commercial Epoxy
              </button>
              <button
                onClick={() => onNavigate('garage-epoxy-flooring')}
                className="px-6 py-2.5 border border-slate-400 hover:border-slate-800 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Garage Epoxy
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5C. Commercial Flooring Repair (Dark Slate Background with Slate Blue Offset Box like TFS "Stone Resources") */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#33373B] text-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Commercial Flooring Repair
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Cracked concrete, peeling epoxy, or damaged tile can create safety hazards and disrupt operations. Our flooring repair team responds quickly to restore your commercial floor without shutting down your business for long.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('flooring-repair')}
                className="px-6 py-2.5 border border-white/70 hover:bg-white hover:text-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image with Offset Slate Blue Box */}
          <div className="lg:col-span-6 relative">
            <div className="hidden sm:block absolute -top-4 -right-4 w-full h-full bg-[#526B7E] -z-0" />
            <div className="relative z-10 shadow-2xl overflow-hidden">
              <img
                src={flooringImages.laminateMalletInstall}
                alt="Commercial Flooring Repair Vancouver BC"
                className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5D. Commercial Flooring Replacement (Light Background with Steel Blue offset box like TFS "FS Blinds") */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F2F4] text-slate-900"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Framed Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full bg-[#647C90] -z-0" />
            <div className="relative z-10 shadow-xl overflow-hidden">
              <img
                src={flooringImages.glovedHandsFlooring}
                alt="Commercial Flooring Replacement Vancouver BC"
                className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Commercial Flooring Replacement
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              When repairs aren't enough, our flooring replacement service removes old, worn, or damaged flooring and installs a new, long-lasting surface — matched to your facility's traffic and durability needs.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('flooring-replacement')}
                className="px-6 py-2.5 border border-slate-800 hover:bg-slate-900 hover:text-white text-slate-900 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          6. H2: WHY VANCOUVER, BC BUSINESSES CHOOSE IRONCLAD COMMERCIAL FLOORS
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1F2C37] text-white"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            {/* Exact H2 */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Vancouver, BC Businesses Choose Ironclad Commercial Floors
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Engineered specifically for the mechanical demands and moisture levels of commercial real estate in British Columbia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Licensed and insured commercial flooring contractor serving Vancouver, BC and the Lower Mainland',
              'Free on-site estimates and transparent, upfront pricing',
              'Fast-turnaround flooring installation, repair, and replacement to minimize downtime',
              'Industrial-grade epoxy flooring and garage epoxy flooring systems built to last',
              '24/7 availability for emergency commercial flooring repair'
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -3 }}
                className={`p-6 bg-[#2C3B49] border border-slate-600/50 flex items-start gap-3.5 ${idx === 4 ? 'lg:col-span-2' : ''}`}
              >
                <CheckCircle2 className="w-5 h-5 text-[#88D2A8] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-100">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          7. AFFILIATIONS & MEMBERSHIPS (Directly matching TFS reference!)
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 bg-white border-b border-slate-200 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            Affiliations and Memberships
          </h2>

          {/* Logo Carousel Row with Left/Right Arrow UI from TFS */}
          <div className="flex items-center justify-between gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-700 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-items-center opacity-80 grayscale hover:grayscale-0 transition-all">
              <div className="font-serif font-black text-slate-800 text-lg sm:text-xl tracking-tighter border-2 border-slate-800 px-3 py-1">
                BBB A+
              </div>
              <div className="font-mono font-bold text-slate-700 text-xs sm:text-sm tracking-widest uppercase">
                Red Seal Canada
              </div>
              <div className="font-sans font-black text-slate-800 text-xs sm:text-sm tracking-wider uppercase border border-slate-400 p-2">
                WorkSafeBC
              </div>
              <div className="font-serif font-bold text-slate-700 text-xs sm:text-sm tracking-tight">
                BC Construction Assoc.
              </div>
              <div className="font-mono font-extrabold text-slate-800 text-xs sm:text-sm tracking-wider">
                ICRI CSP Certified
              </div>
            </div>

            <button className="p-2 text-slate-400 hover:text-slate-700 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          8. PARTNER LOGOS (Directly matching TFS "Take a look at a few of our partners")
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 bg-[#F8F9FA] border-b border-slate-200 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Take a look at a few of our partners below
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
            In order to continually deliver quality and superior service to our customers, we pride ourselves on working exclusively with the most trustworthy and established brands in the industry.
          </p>

          <div className="pt-6 flex items-center justify-between gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-700 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center opacity-75">
              <span className="font-black text-slate-800 text-sm tracking-widest">SIKA COMMERCIAL</span>
              <span className="font-serif font-bold text-slate-700 text-sm tracking-wider">MAPEI CANADA</span>
              <span className="font-mono font-bold text-slate-800 text-sm">ARDEX AMERICAS</span>
              <span className="font-sans font-black text-slate-700 text-sm tracking-tight">SHAW CONTRACT</span>
            </div>

            <button className="p-2 text-slate-400 hover:text-slate-700 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          9. LOCATIONS SECTION (Directly matching TFS Split Locations Layout!)
          Left: Dark list with highlighted green active box
          Right: Stylized Map Graphic with Custom Location Pins
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        id="service-areas" 
        className="bg-[#2E3C48] text-white"
      >
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left Column: Location List with Sage Green Active Highlight */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              {/* Exact H2 */}
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Areas We Serve Near Vancouver, BC
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Ironclad Commercial Floors provides commercial flooring contractor services throughout Vancouver, Burnaby, Surrey, Richmond, Coquitlam, and New Westminster, BC.
              </p>
            </div>

            <div className="space-y-1.5 pt-2">
              {locationsList.map((loc, idx) => {
                const isActive = activeLocation === idx;
                return (
                  <button
                    key={loc.city}
                    onClick={() => {
                      setActiveLocation(idx);
                      onNavigate('location-detail', loc.slug);
                    }}
                    className={`w-full text-left p-3.5 transition-colors cursor-pointer flex flex-col ${
                      isActive 
                        ? 'bg-[#7D9A87] text-white font-bold shadow-md' 
                        : 'bg-transparent text-slate-300 hover:bg-[#3B4D5D] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider">
                      <span>{loc.city}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    {isActive && (
                      <div className="mt-1 text-[11px] font-normal text-emerald-100 space-y-0.5">
                        <p>{loc.phone}</p>
                        <p>{loc.address}</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stylized Map Graphic with Custom Pin Markers */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full bg-[#DCE4E8] flex items-center justify-center p-6 overflow-hidden">
            {/* Background Map Graphic Illustration */}
            <div 
              className="absolute inset-0 opacity-40 mix-blend-multiply bg-cover bg-center"
              style={{
                backgroundImage: 'radial-gradient(#9AAAB7 1.5px, transparent 1.5px)',
                backgroundSize: '20px 20px'
              }}
            />

            {/* Simulated Region Map Card */}
            <div className="relative z-10 w-full max-w-lg bg-white/90 backdrop-blur-md p-6 shadow-xl border border-slate-300 text-slate-900 text-center space-y-4">
              <div className="w-12 h-12 bg-[#7D9A87] text-white flex items-center justify-center mx-auto shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">
                  {locationsList[activeLocation].city}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  {locationsList[activeLocation].address}
                </p>
                <p className="text-xs font-mono font-bold text-[#3B945E] mt-1">
                  Direct Line: {locationsList[activeLocation].phone}
                </p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => onNavigate('location-detail', locationsList[activeLocation].slug)}
                  className="px-4 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View City Profile
                </button>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-4 py-2 bg-[#7D9A87] hover:bg-[#688371] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book In {locationsList[activeLocation].city.split(',')[0]}
                </button>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          10. COMMERCIAL ESTIMATOR CALCULATOR
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        id="calculator-section" 
        className="max-w-6xl mx-auto px-4 sm:px-6 py-14"
      >
        <CostCalculator onOpenBooking={onOpenBooking} />
      </motion.section>

      {/* =========================================================================
          11. CLIENT TESTIMONIALS (TFS Clean Structured Review Cards)
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        id="testimonials" 
        className="py-14 bg-white border-t border-b border-slate-200 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            {/* Exact H2 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Verified Commercial Flooring Reviews
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Feedback from general contractors, facility managers, and business owners across Vancouver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map(t => (
              <div
                key={t.id}
                className="bg-[#F8F9FA] border border-slate-200 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed italic">
                    "{t.review}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-slate-500">{t.role} • {t.company}</p>
                  <p className="text-[#3B945E] font-medium mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          12. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        id="faq-section" 
        className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-8"
      >
        <div className="text-center space-y-2">
          {/* Exact H2 */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Expert answers regarding project timelines, substrate prep, moisture testing, and commercial warranties.
          </p>
        </div>

        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
                className="bg-white border border-slate-200 transition-all shadow-sm rounded-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#3B945E] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold" itemProp="name">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#3B945E] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                  className={isOpen ? 'block' : 'hidden'}
                >
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50" itemProp="text">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* =========================================================================
          13. H2: GET A FREE COMMERCIAL FLOORING ESTIMATE IN VANCOUVER, BC
          ========================================================================= */}
      <motion.section 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="bg-[#1A2530] text-white py-16 px-4 sm:px-6 text-center"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Exact H2 */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get a Free Commercial Flooring Estimate in Vancouver, BC
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Call Ironclad Commercial Floors at <a href="tel:6045403999" className="font-bold underline text-white hover:text-[#88D2A8]">(604) 540-3999</a> or request a quote online to schedule your free consultation with Vancouver, BC's trusted commercial flooring contractor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="tel:6045403999"
              className="px-8 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (604) 540-3999</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 border border-white/60 hover:bg-white hover:text-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#88D2A8]" />
              <span>Request Free Consultation</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Map Embed */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <MapEmbed 
          title="Vancouver Central Headquarters & Estimating Hub" 
          subtitle="783 E 60th Ave, Vancouver, BC V5X 2A5, Canada • Serving All Lower Mainland Municipalities"
        />
      </section>
    </div>
  );
};
