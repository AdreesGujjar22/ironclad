import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  HardHat, 
  Clock, 

  Sparkles,
  Mail,
  Award
} from 'lucide-react';

import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { flooringImages } from '../assets/flooringImages';

interface AboutPageProps {
  onNavigate: (page: string, param?: string) => void;

}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="About Ironclad Commercial Floors | Commercial Flooring Contractor"
        description="Ironclad Commercial Floors is Canada's trusted commercial flooring contractor. Learn about our team, experience & nationwide service capabilities."
        canonicalPath="/about"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Ironclad Commercial Floors', path: '/about' }
        ]}
        serviceData={{
          name: 'About Ironclad Commercial Floors',
          description: 'Ironclad Commercial Floors is a leading commercial flooring contractor serving facilities nationwide. Learn about our team, experience & service scope.',
          category: 'Commercial Flooring Contractor',
          priceRange: 'Custom Commercial Estimates / Free Site Consultations',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.png'
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
      <section className="ic-about-hero relative bg-[#1A2530] text-white">
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
              <span>Commercial floors across Metro Vancouver</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Commercial flooring for Metro Vancouver businesses
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              From installation and repairs to full replacements, we help local businesses plan flooring work around their day-to-day operations.
            </p>

            {/* CTAs matching reference design */}
            <div className="pt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-2xl border border-white/20 shrink-0 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Contact us</span>
              </button>


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
              loading="lazy"
              decoding="async"
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
                <span>Local team, practical approach</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">A local team for active workplaces</h2>
              <p className="text-slate-600 text-base leading-relaxed">We work with businesses throughout Metro Vancouver to select flooring systems that suit their spaces, schedules and daily use.</p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative border border-slate-300 overflow-hidden shadow-md">
                <img
                  loading="lazy"
                  decoding="async"
                  src={flooringImages.vinylPlankKneeling}
                  alt="Commercial Flooring Installation Craftsman Vancouver, BC"
                  className="w-full h-72 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
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
              A thoughtful approach to every project
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We plan around your space, schedule and operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F8F9FA] border border-slate-300 space-y-3">
              <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Off-hours scheduling</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Night and phased work can help limit disruption.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] border border-slate-300 space-y-3">
              <div className="w-10 h-10 bg-[#7D9A87] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Installation warranty</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Ask us which warranty terms apply to your flooring system and project.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] border border-slate-300 space-y-3">
              <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Prepared surfaces</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Surface and moisture conditions are assessed before installation.
              </p>
            </div>
          </div>
        </div>
      </motion.section>



      </div>
    </div>
  );
};
