import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { flooringImages } from '../assets/flooringImages';

interface ContactPageProps {
  onNavigate?: (page: string, param?: string) => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Commercial Flooring Installation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="ic-contact-page bg-[#F8F9FA] text-slate-800 min-h-screen pb-12">
      <SEOHead
        title="Contact Ironclad Commercial Floors | Commercial Flooring Estimates"
        description="Contact Ironclad Commercial Floors for a free quote on commercial flooring installation, repair & epoxy flooring services across Canada."
        canonicalPath="/contact"
        ogImage="https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Ironclad Commercial Floors', path: '/contact' }
        ]}
        serviceData={{
          name: 'Contact Ironclad Commercial Floors',
          description: 'Contact Ironclad Commercial Floors for a free quote on commercial flooring installation, repair & epoxy flooring services across Canada.',
          category: 'Commercial Flooring Contractor',
          priceRange: 'Free On-Site Diagnostic & Guaranteed Fixed Quotes',
          image: 'https://ironcladcommercialfloors.ca/IRONCLAD-COMMERCIAL-FLOORS.png'
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

      <div className="ic-contact-sections space-y-7 md:space-y-9">
        {/* Hero Header - Split Editorial Layout */}
      <section className="ic-contact-hero relative bg-[#1A2530] text-white">
        <div className="ic-contact-hero-inner max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          
          {/* Left Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7 bg-[#3B4D5D] p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <Phone className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Metro Vancouver project enquiries</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Tell us about your flooring project
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Share a little about your commercial space, the flooring work you need and your preferred timing.
            </p>


          </motion.div>
          <div className="ic-contact-hero-image lg:col-span-5 relative min-h-[240px]">
            <img src={flooringImages.flooringHandsInstallation} alt="Commercial flooring installation" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="ic-contact-grid grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Info Card */}
          <div className="ic-contact-details lg:col-span-4 bg-white border border-slate-300 p-6 space-y-5 shadow-lg">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#3B945E]">Contact details</p>
              <h2 className="mt-1 text-xl font-bold text-slate-900">Vancouver office</h2>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-slate-300">
                <MapPin className="w-4 h-4 text-[#3B945E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block">
                    Office address
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
                    <span>Directions</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-slate-300">
                <Phone className="w-4 h-4 text-[#3B945E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block">
                    Phone
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
                    Email
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
                    Monday–Friday, 7 AM–6 PM
                  </p>
                </div>
              </div>
            </div>

            {/* H2: Service Area */}
            <div className="pt-2 border-t border-slate-200 space-y-1.5">
              <h2 className="text-xs font-mono uppercase font-bold text-slate-500 block">
                Where we work
              </h2>
              <p className="text-slate-700 text-xs font-semibold leading-relaxed">
                Commercial flooring service across Metro Vancouver.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="ic-contact-form lg:col-span-8 bg-white border border-slate-300 p-6 sm:p-8 shadow-lg">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 bg-[#3B4D5D] text-white flex items-center justify-center mx-auto font-bold">
                  <CheckCircle2 className="w-7 h-7 text-[#88D2A8]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thanks, {formData.name}. We’ll be in touch soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">A few details about your project</h2>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">Tell us what the space needs and when you’d like the work done.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
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

                <div className="ic-contact-service-row grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                      Flooring service
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


                </div>



                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono">
                    Project details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the space, flooring work and preferred timing."
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
                    <span>Send message</span>
                  </button>

                </div>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed title="Vancouver office" subtitle="Serving Metro Vancouver." className="ic-contact-map" />
      </section>
      </div>
    </div>
  );
};
