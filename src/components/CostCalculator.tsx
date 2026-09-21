import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ShieldCheck, ArrowRight, CheckCircle2, Building, Layers, ChevronDown, Wrench, Clock, FileText } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

interface CostCalculatorProps {
  onOpenBooking?: (details?: { serviceId: string; sqft: string; facility: string }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenBooking }) => {
  const [sqft, setSqft] = useState<number>(5000);
  const [selectedService, setSelectedService] = useState<string>('concrete-epoxy-floor-installation');
  const [subfloorState, setSubfloorState] = useState<'clean' | 'minor-crack' | 'damaged'>('minor-crack');
  const [urgency, setUrgency] = useState<'standard' | 'overnight' | 'emergency'>('standard');

  const selectedServiceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[4]!;

  const getSubfloorLabel = (state: string) => {
    switch (state) {
      case 'clean': return 'Mechanical Diamond Grinding (CSP 2-3)';
      case 'minor-crack': return 'Crack Stitching & Precision Leveling';
      case 'damaged': return 'Deep Patch Resurfacing & Heavy Moisture Barrier';
      default: return 'Diamond Grind Prep';
    }
  };

  const getShiftLabel = (u: string) => {
    switch (u) {
      case 'standard': return 'Standard Daytime Shift (Minimal Disruption)';
      case 'overnight': return 'Night & Weekend Shift (Zero Daytime Downtime)';
      case 'emergency': return 'Priority Emergency Mobilization';
      default: return 'Standard Shift';
    }
  };

  const handleTransferToQuote = () => {
    if (onOpenBooking) {
      onOpenBooking({
        serviceId: selectedService,
        sqft: `${sqft.toLocaleString()} sq ft`,
        facility: `${selectedServiceObj.name} (${subfloorState === 'clean' ? 'Level Subfloor' : 'Subfloor Prep Required'})`
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-slate-300 text-slate-900 shadow-xl relative overflow-hidden"
    >
      {/* Top Header Strip with architectural styling */}
      <div className="bg-[#3B4D5D] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/15">
            <Calculator className="w-3.5 h-3.5 text-[#88D2A8]" />
            <span>Vancouver Project Scope Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Instant Commercial Flooring Scope & Project Estimator
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm font-normal">
            Configure your facility specifications below for an immediate technical scope assessment and free on-site survey.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-emerald-100 bg-[#7D9A87]/30 px-3.5 py-2 border border-white/20">
          <ShieldCheck className="w-4 h-4 text-[#88D2A8]" />
          <span>10-Year Ironclad Warranty Included</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 relative">
        {/* Subtle blueprint grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1A2530 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Square Footage Slider */}
            <div className="p-5 bg-[#F8F9FA] border border-slate-200 space-y-3">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#7D9A87]" />
                  <span>Estimated Area (Square Footage)</span>
                </label>
                <span className="text-sm sm:text-base font-mono font-bold text-slate-900 bg-white px-3 py-1 border border-slate-300 shadow-sm">
                  {sqft.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-300 appearance-none cursor-pointer accent-[#7D9A87] hover:accent-[#3B945E] transition-all"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>500 sq ft</span>
                <span>25,000 sq ft</span>
                <span>50,000+ sq ft</span>
              </div>
            </div>

            {/* Flooring Type Selector */}
            <div className="p-5 bg-[#F8F9FA] border border-slate-200 space-y-2">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#7D9A87]" />
                <span>Select Flooring System</span>
              </label>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white border border-slate-300 pl-4 pr-10 py-3 text-slate-900 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#7D9A87] focus:border-[#7D9A87] focus:outline-none appearance-none truncate shadow-sm cursor-pointer hover:border-slate-400 transition-colors"
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Subfloor Prep Condition */}
            <div className="p-5 bg-[#F8F9FA] border border-slate-200 space-y-2">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 block">
                Current Subfloor Condition
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'clean', label: 'Clean / Level', desc: 'Standard Diamond Grind' },
                  { id: 'minor-crack', label: 'Minor Cracks', desc: 'Joint Fill & Level' },
                  { id: 'damaged', label: 'Spalled / Pitted', desc: 'Full Deep Resurfacing' }
                ].map(cond => (
                  <button
                    key={cond.id}
                    type="button"
                    onClick={() => setSubfloorState(cond.id as any)}
                    className={`p-3 border text-left transition-all cursor-pointer ${
                      subfloorState === cond.id
                        ? 'bg-[#3B4D5D] border-[#3B4D5D] text-white shadow-md'
                        : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <p className="text-xs font-bold leading-tight uppercase tracking-wide">{cond.label}</p>
                    <p className={`text-[11px] mt-0.5 ${subfloorState === cond.id ? 'text-slate-200' : 'text-slate-500'}`}>{cond.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Scheduling & Urgency */}
            <div className="p-5 bg-[#F8F9FA] border border-slate-200 space-y-2">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 block">
                Scheduling Requirement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard Weekday', tag: 'Standard Window' },
                  { id: 'overnight', label: 'Night / Weekend', tag: 'Zero Downtime' },
                  { id: 'emergency', label: 'Rapid Priority', tag: 'Fast-Track Mobilization' }
                ].map(urg => (
                  <button
                    key={urg.id}
                    type="button"
                    onClick={() => setUrgency(urg.id as any)}
                    className={`p-3 border text-left transition-all cursor-pointer ${
                      urgency === urg.id
                        ? 'bg-[#7D9A87] border-[#7D9A87] text-white shadow-md'
                        : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <p className="text-xs font-bold leading-tight uppercase tracking-wide">{urg.label}</p>
                    <p className={`text-[11px] mt-0.5 ${urgency === urg.id ? 'text-emerald-100' : 'text-slate-500'}`}>{urg.tag}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box - Project Specification Assessment */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#3B4D5D] text-white border border-[#2E3C48] p-6 sm:p-7 shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-300 pb-3 border-b border-white/20 font-mono uppercase tracking-wider">
                <span>PROJECT SPECIFICATION REPORT</span>
                <span className="text-[#88D2A8] font-bold">READY</span>
              </div>

              {/* Scope Card */}
              <div className="my-5 p-5 bg-[#2E3C48] border border-white/15 shadow-inner space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#88D2A8] font-mono font-bold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Calculated Area</span>
                  </span>
                  <span className="font-mono font-bold text-white text-base">{sqft.toLocaleString()} sq ft</span>
                </div>
                <div className="text-xs text-slate-200 flex items-start gap-2 pt-2 border-t border-white/10">
                  <Wrench className="w-3.5 h-3.5 text-[#88D2A8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Subfloor Prep:</span>{' '}
                    <span className="text-slate-300">{getSubfloorLabel(subfloorState)}</span>
                  </div>
                </div>
                <div className="text-xs text-slate-200 flex items-start gap-2 pt-2 border-t border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#88D2A8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Work Shift:</span>{' '}
                    <span className="text-slate-300">{getShiftLabel(urgency)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Selected System:</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">{selectedServiceObj.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Durability Class:</span>
                  <span className="text-white font-medium">{selectedServiceObj.durabilityRating}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Return to Traffic:</span>
                  <span className="text-white font-medium">{selectedServiceObj.cureTime}</span>
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-black/20 text-slate-200 text-xs leading-relaxed border border-white/10">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#88D2A8] shrink-0 mt-0.5" />
                  <span>Free on-site laser measurement, moisture probe testing, and itemized commercial proposal with guaranteed turnaround times.</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 space-y-2.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleTransferToQuote}
                className="w-full py-3.5 px-4 bg-[#7D9A87] hover:bg-[#6A8874] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer border border-white/20"
              >
                <span>Request Free On-Site Measurement & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <p className="text-xs text-center text-slate-300">
                Call Direct: <a href="tel:6045403999" className="text-white font-bold underline hover:text-[#88D2A8]">(604) 540-3999</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
