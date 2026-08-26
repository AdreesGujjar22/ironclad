import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, Mail, CheckCircle2, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    serviceId?: string;
    sqft?: string;
    facility?: string;
    location?: string;
  };
  initialServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialData,
  initialServiceId
}) => {
  const defaultService = initialData?.serviceId || initialServiceId || 'commercial-flooring-installation';

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceId: defaultService,
    facilityType: initialData?.facility || 'Commercial Facility',
    approxSqFt: initialData?.sqft || '5,000 sq ft',
    timeline: 'Within 2-4 Weeks',
    location: initialData?.location || 'Vancouver, BC',
    projectDetails: '',
    preferredContact: 'phone',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const sId = initialData?.serviceId || initialServiceId;
    if (sId || initialData) {
      setFormData(prev => ({
        ...prev,
        serviceId: sId || prev.serviceId,
        approxSqFt: initialData?.sqft || prev.approxSqFt,
        facilityType: initialData?.facility || prev.facilityType,
        location: initialData?.location || prev.location
      }));
    }
  }, [initialData, initialServiceId]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const selectedService = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-appointment-title"
        >
          {/* Backdrop click dismiss */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 cursor-pointer"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-white border border-slate-300 shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[92dvh] sm:max-h-[90vh] z-10 my-auto rounded-none"
          >
            {/* Architectural Slate Header */}
            <div className="shrink-0 px-4 py-3.5 sm:px-6 sm:py-4 bg-[#3B4D5D] text-white flex items-center justify-between gap-3 border-b border-[#2E3C48]">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 sm:p-2 bg-white/10 border border-white/20 text-[#88D2A8] shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h2 id="modal-appointment-title" className="text-sm sm:text-base font-black tracking-tight text-white uppercase font-mono truncate">
                    Book Site Survey & Free Estimate
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-200 truncate font-normal">
                    Ironclad Commercial Floors • Metro Vancouver
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0 touch-manipulation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto overscroll-contain flex-1 space-y-4 sm:space-y-5 bg-[#FDFDFD]">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-8 space-y-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#7D9A87]/15 text-[#3B945E] border-2 border-[#7D9A87] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#3B945E]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Site Survey Request Received!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName || 'Valued Client'}</strong>. Our commercial project team is reviewing your specifications and will contact you promptly at <strong className="text-slate-900">{formData.phone || formData.email}</strong>.
                  </p>
                  
                  <div className="p-4 bg-[#F8F9FA] border border-slate-300 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto mt-4 text-slate-700">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-slate-900 text-right truncate max-w-[180px] sm:max-w-[220px]">
                        {selectedService?.name || formData.serviceId}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-500">Project Area:</span>
                      <span className="text-slate-900 font-medium">{formData.approxSqFt || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-500">Location:</span>
                      <span className="text-slate-900 font-medium">{formData.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Direct Office Line:</span>
                      <a href="tel:6045403999" className="text-[#3B945E] font-bold hover:underline">
                        (604) 540-3999
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-center">
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="px-6 py-3 bg-[#3B4D5D] hover:bg-[#2E3C48] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer border border-white/20 touch-manipulation"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Trust Tag */}
                  <div className="p-2.5 sm:p-3 bg-[#E9EEF2] border border-slate-300 flex items-center justify-between text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#7D9A87] shrink-0" />
                      <span className="font-semibold">Free On-Site Moisture & Slab Assessment</span>
                    </div>
                    <span className="text-[#3B945E] font-bold uppercase tracking-wider text-[11px] hidden sm:inline">No Obligation</span>
                  </div>

                  {/* Personal & Company Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Miller"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 px-3.5 text-base sm:text-sm text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pacific Logistics"
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 px-3.5 text-base sm:text-sm text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#7D9A87] absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="(604) 555-0199"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-11 bg-white border border-slate-300 pl-10 pr-3.5 text-base sm:text-sm text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#7D9A87] absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="name@company.ca"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-11 bg-white border border-slate-300 pl-10 pr-3.5 text-base sm:text-sm text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Flooring Solution *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.serviceId}
                          onChange={e => setFormData({ ...formData, serviceId: e.target.value })}
                          className="w-full h-11 bg-white border border-slate-300 pl-3.5 pr-10 text-base sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none appearance-none truncate shadow-xs cursor-pointer hover:border-slate-400 transition-colors"
                        >
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.id}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        City / Location *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.location}
                          onChange={e => setFormData({ ...formData, location: e.target.value })}
                          className="w-full h-11 bg-white border border-slate-300 pl-3.5 pr-10 text-base sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none appearance-none truncate shadow-xs cursor-pointer hover:border-slate-400 transition-colors"
                        >
                          <option value="Vancouver, BC">Vancouver, BC</option>
                          <option value="Burnaby, BC">Burnaby, BC</option>
                          <option value="Richmond, BC">Richmond, BC</option>
                          <option value="Surrey, BC">Surrey, BC</option>
                          <option value="New Westminster, BC">New Westminster, BC</option>
                          <option value="Coquitlam, BC">Coquitlam, BC</option>
                          <option value="Port Coquitlam, BC">Port Coquitlam, BC</option>
                          <option value="North Vancouver, BC">North Vancouver, BC</option>
                          <option value="West Vancouver, BC">West Vancouver, BC</option>
                          <option value="Delta, BC">Delta, BC</option>
                          <option value="Langley, BC">Langley, BC</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Area & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Approximate Area (Sq Ft)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5,000 sq ft"
                        value={formData.approxSqFt}
                        onChange={e => setFormData({ ...formData, approxSqFt: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 px-3.5 text-base sm:text-sm text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Desired Timeline
                      </label>
                      <div className="relative">
                        <select
                          value={formData.timeline}
                          onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full h-11 bg-white border border-slate-300 pl-3.5 pr-10 text-base sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none appearance-none truncate shadow-xs cursor-pointer hover:border-slate-400 transition-colors"
                        >
                          <option value="Urgent (Within 48 Hours)">Urgent (Within 48 Hours)</option>
                          <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                          <option value="Within 2-4 Weeks">Within 2-4 Weeks</option>
                          <option value="Next Month / Flexible">Next Month / Flexible</option>
                          <option value="Budgeting & Planning Phase">Budgeting & Planning Phase</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Project Notes */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Facility type, existing flooring, night shift requirements, or specific slab conditions..."
                      value={formData.projectDetails}
                      onChange={e => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-white border border-slate-300 p-3 text-base sm:text-sm text-slate-900 focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 px-6 bg-[#1A2530] hover:bg-[#243342] text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 border border-[#3B945E]/80 group touch-manipulation min-h-[48px] rounded-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#57BC83] border-t-transparent rounded-full animate-spin" />
                          Submitting Site Survey Request...
                        </span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-[#57BC83]" />
                          <span>Confirm & Book Free Site Survey</span>
                          <ArrowRight className="w-4 h-4 text-[#88D2A8] group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 font-mono">
                      Need Immediate 24/7 Dispatch?{' '}
                      <a href="tel:6045403999" className="text-[#3B945E] font-bold hover:underline">(604) 540-3999</a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
