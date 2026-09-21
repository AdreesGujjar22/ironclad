import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  HardHat,
  ChevronDown,
  Lock
} from 'lucide-react';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ContactPageProps {
  onNavigate?: (page: string, param?: string) => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    service: 'Commercial Flooring Installation',
    sqft: '2500',
    timeframe: 'Immediately (Emergency / Tight Deadline)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Contact Ironclad Commercial Floors | Commercial Flooring Estimates"
        description="Contact Ironclad Commercial Floors for a free quote on commercial flooring installation, repair & epoxy flooring services across Canada."
        canonicalPath="/contact"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Ironclad Commercial Floors', path: '/contact' }
        ]}
        serviceData={{
          name: 'Contact Ironclad Commercial Floors',
          description: 'Contact Ironclad Commercial Floors for a free quote on commercial flooring installation, repair & epoxy flooring services across Canada.',
          category: 'Commercial Flooring Contractor',
          priceRange: 'Free On-Site Diagnostic & Guaranteed Fixed Quotes',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.jpg'
        }}
      />

      {/* Visual Breadcrumbs */}
      {onNavigate && (
        <Breadcrumbs
          items={[
            { name: 'Contact & Commercial Dispatch', current: true }
          ]}
          onNavigate={onNavigate}
        />
      )}

      <div className="space-y-12 md:space-y-16">
        {/* Hero Header - Split Editorial Layout */}
      <section className="relative bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          
          {/* Left Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:col-span-7 bg-[#3B4D5D] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <Phone className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Commercial Dispatch & Estimating</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Contact Ironclad Commercial Floors
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Get an in-person site survey, subfloor moisture evaluation, and guaranteed fixed-price estimate anywhere in Greater Vancouver.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-slate-300 block">DIRECT PHONE LINE</span>
                <a href="tel:6045403999" className="font-bold text-white hover:text-[#88D2A8]">(604) 540-3999</a>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-slate-300 block">HQ LOCATION</span>
                <span className="font-bold text-white">783 E 60th Ave, Vancouver, BC, Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual / Badge Block */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-[#1A2530] p-8 sm:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 space-y-4"
          >
            <div className="p-6 bg-white/5 border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-[#88D2A8] tracking-wider block">
                GUARANTEED RESPONSE TIME
              </span>
              <h3 className="text-xl font-bold text-white">
                Under 15-Minute Turnaround
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct route to our on-call commercial estimation team. All site audits include laser flatness verification and ICRI profiling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Info Card */}
          <div className="lg:col-span-5 bg-white border border-slate-300 p-8 space-y-6 shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3B4D5D] text-white flex items-center justify-center font-bold">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-base font-black text-slate-900 uppercase font-mono block">
                    IRONCLAD
                  </span>
                  <span className="text-xs font-semibold text-[#2A6E44] uppercase tracking-widest block -mt-1">
                    COMMERCIAL FLOORS
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commercial Flooring Contractor in Vancouver, BC. Fully equipped with planetary grinders, shot blasters, and flexible night installation crews.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-slate-300">
                <MapPin className="w-4 h-4 text-[#3B945E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block">
                    Facility & Headquarters
                  </span>
                  <address 
                    className="not-italic font-bold text-slate-900 mt-0.5"
                    itemScope 
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">783 E 60th Ave</span>,{' '}
                    <span itemProp="addressLocality">Vancouver</span>,{' '}
                    <span itemProp="addressRegion">BC</span>{' '}
                    <span itemProp="postalCode">V5X 2A5</span>,{' '}
                    <span itemProp="addressCountry">Canada</span>
                  </address>
                  <a
                    href="https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#2A6E44] hover:underline font-bold mt-2"
                  >
                    <span>View on Google Business Profile & Maps →</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-slate-300">
                <Phone className="w-4 h-4 text-[#3B945E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block">
                    Direct Line & Dispatch
                  </span>
                  <a href="tel:6045403999" className="text-sm font-bold text-slate-900 hover:text-[#3B945E] hover:underline mt-0.5 block">
                    (604) 540-3999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-slate-300">
                <Mail className="w-4 h-4 text-[#3B945E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block">
                    Estimating & Proposals Email
                  </span>
                  <a href="mailto:info@ironcladcommercialfloors.ca" className="font-bold text-slate-700 hover:text-[#3B945E] mt-0.5 block">
                    info@ironcladcommercialfloors.ca
                  </a>
                </div>
              </div>

              {/* H2: Business Hours */}
              <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-slate-300">
                <Clock className="w-4 h-4 text-[#3B945E] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-[11px] font-mono uppercase font-bold text-slate-500 block">
                    Business Hours
                  </h2>
                  <p className="font-semibold text-slate-900 mt-0.5">
                    Monday–Friday: 7:00 AM – 6:00 PM | 24/7 Emergency Flooring Repair Available
                  </p>
                </div>
              </div>
            </div>

            {/* H2: Service Area */}
            <div className="pt-2 border-t border-slate-200 space-y-1.5">
              <h2 className="text-xs font-mono uppercase font-bold text-slate-500 block">
                Service Area
              </h2>
              <p className="text-slate-700 text-xs font-semibold leading-relaxed">
                Vancouver, Burnaby, Surrey, Richmond, Coquitlam, New Westminster, BC
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white border border-slate-300 p-8 shadow-lg">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 bg-[#3B4D5D] text-white flex items-center justify-center mx-auto font-bold">
                  <CheckCircle2 className="w-7 h-7 text-[#88D2A8]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Commercial Proposal Dispatched!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you {formData.name}. An Ironclad commercial estimating engineer has received your specifications and will contact you within 15 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Submit Another Project Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Request a Free Commercial Flooring Estimate
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Call (604) 540-3999 or fill out our online form to get a free quote from Vancouver, BC's trusted commercial flooring contractor.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John MacDonald"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-300 text-slate-900 text-xs focus:border-[#3B4D5D] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pacific Logistics Corp"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-300 text-slate-900 text-xs focus:border-[#3B4D5D] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="j.macdonald@pacificlogistics.ca"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-300 text-slate-900 text-xs focus:border-[#3B4D5D] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(604) 555-0199"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-300 text-slate-900 text-xs focus:border-[#3B4D5D] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                      Flooring Service Required
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-300 text-slate-900 text-xs appearance-none focus:border-[#3B4D5D] focus:bg-white focus:outline-none cursor-pointer"
                      >
                        <option value="Commercial Flooring Installation">Commercial Flooring Installation</option>
                        <option value="Commercial Flooring Repair">Commercial Flooring Repair (Emergency/Scheduled)</option>
                        <option value="Commercial Flooring Replacement">Commercial Flooring Replacement & Tear-Out</option>
                        <option value="Commercial Epoxy Flooring">Commercial Epoxy Flooring (Industrial/Warehouses)</option>
                        <option value="Garage Epoxy Flooring">Garage Epoxy Flooring (Fleet & Parking Structures)</option>
                        <option value="Polished Concrete Systems">Polished Concrete Systems</option>
                        <option value="Luxury Vinyl Plank (LVP)">Luxury Vinyl Plank (LVP) / Carpet Tile</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                      Approximate Area (Sq Ft)
                    </label>
                    <div className="relative">
                      <select
                        value={formData.sqft}
                        onChange={e => setFormData({ ...formData, sqft: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-300 text-slate-900 text-xs appearance-none focus:border-[#3B4D5D] focus:bg-white focus:outline-none cursor-pointer"
                      >
                        <option value="500 - 1,500">500 – 1,500 sq ft (Retail / Small Bay)</option>
                        <option value="1,500 - 5,000">1,500 – 5,000 sq ft (Office / Clinic / Auto Bay)</option>
                        <option value="5,000 - 15,000">5,000 – 15,000 sq ft (Warehouse / Multi-Unit)</option>
                        <option value="15,000 - 50,000">15,000 – 50,000 sq ft (Industrial Distribution)</option>
                        <option value="50,000+">50,000+ sq ft (Enterprise Facility / High-Rise)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                    Facility Address / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1200 Marine Way, Burnaby, BC"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-300 text-slate-900 text-xs focus:border-[#3B4D5D] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                    Project Details, Substrate Conditions & Deadlines
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project: current floor type, cracked concrete, moisture issues, required work hours (e.g., night shift), or target completion date..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-300 text-slate-900 text-xs focus:border-[#3B4D5D] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request for Free Estimate</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-500 mt-2 font-mono flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-[#3B945E]" />
                    <span>Guaranteed privacy. Average response time: &lt; 15 minutes.</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Direct Commercial Dispatch Facility"
          subtitle="Located at 783 E 60th Ave, Vancouver, BC V5X 2A5, Canada. Call (604) 540-3999 for immediate dispatch."
        />
      </section>
      </div>
    </div>
  );
};
