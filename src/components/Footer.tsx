import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ArrowRight, 
  Calendar,
  ChevronRight,
  Sparkles,
  Building2,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer id="footer-section" className="bg-[#1A2530] text-slate-200 border-t border-slate-700">
      {/* High-Impact Architectural Callout Banner (Matching TFS Theme) */}
      <div className="relative overflow-hidden bg-[#3B4D5D] border-b border-slate-600/60 py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        {/* Blueprint pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#88D2A8] animate-pulse" />
              <span>Rapid Dispatch & Off-Hours Flooring</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Ready to Upgrade or Restore Your Commercial Facility?
            </h3>
            <p className="text-slate-200 text-xs sm:text-base leading-relaxed">
              Schedule an in-person 3D subfloor moisture diagnostic, engineering proposal, and customized fixed-quote with Vancouver’s premier commercial flooring specialists.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <a
              href="tel:6045403999"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-black/30 hover:bg-black/50 text-white font-bold text-xs uppercase tracking-wider border border-white/30 transition-all"
            >
              <Phone className="w-4 h-4 text-[#88D2A8]" />
              <span>(604) 540-3999</span>
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7D9A87] hover:bg-[#688371] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer border border-white/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="h-13 w-auto bg-white p-1.5 border border-white/30 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                <img 
                  src="/IRONCLAD-COMMERCIAL-FLOORS.jpg" 
                  alt="Ironclad Commercial Floors Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block uppercase font-mono leading-tight">
                  IRONCLAD
                </span>
                <span className="text-[11px] font-bold tracking-widest text-[#88D2A8] uppercase block mt-0.5">
                  COMMERCIAL FLOORS
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Vancouver’s heavy-duty commercial, institutional, and industrial flooring contractor. We deliver precision subfloor preparation, diamond polished concrete, chemical-resistant epoxy mortars, and high-performance architectural floor systems.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-4 border-t border-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#88D2A8] shrink-0 mt-0.5" />
                <span>783 E 60th Ave, Vancouver, BC V5X 2A5 Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#88D2A8] shrink-0" />
                <a href="tel:6045403999" className="hover:text-white font-black text-sm sm:text-base text-white transition-colors">
                  (604) 540-3999
                </a>
                <span className="text-[10px] font-mono bg-white/10 text-[#88D2A8] px-2 py-0.5 border border-white/20 font-bold uppercase">Direct Line</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#88D2A8] shrink-0" />
                <a href="mailto:info@ironcladcommercialfloors.ca" className="hover:text-white transition-colors">
                  info@ironcladcommercialfloors.ca
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#88D2A8] shrink-0" />
                <span>Overnight & Weekend Shifts Available</span>
              </div>
            </div>
          </div>

          {/* Column 2: Commercial Systems (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono border-b border-slate-700 pb-2">
              Flooring Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('garage-epoxy-flooring-vancouver-bc')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer group text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Garage Epoxy Flooring</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('service-detail', 'industrial-epoxy-flooring')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer group text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Industrial Epoxy Coatings</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('service-detail', 'commercial-carpet-tile-installation')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer group text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Commercial Carpet Tile</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('service-detail', 'luxury-vinyl-tile-installation')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer group text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Luxury Vinyl Plank & Tile (LVT)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('service-detail', 'commercial-sheet-vinyl-flooring')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer group text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Hygienic Sheet Vinyl</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('service-detail', 'concrete-moisture-barrier-installation')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer group text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#88D2A8] group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Subfloor Moisture Barriers</span>
                </button>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => onNavigate('services')} 
                  className="text-[#88D2A8] hover:text-white font-bold transition-colors flex items-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#88D2A8]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas / Coverage (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono border-b border-slate-700 pb-2">
              Metro Vancouver Coverage
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {[
                { name: 'Vancouver (HQ)', slug: 'vancouver' },
                { name: 'Burnaby', slug: 'burnaby' },
                { name: 'Richmond', slug: 'richmond' },
                { name: 'Surrey', slug: 'surrey' },
                { name: 'Coquitlam', slug: 'coquitlam' },
                { name: 'Delta', slug: 'delta' },
                { name: 'Langley', slug: 'langley' },
                { name: 'North Vancouver', slug: 'north-vancouver' },
                { name: 'New Westminster', slug: 'new-westminster' },
                { name: 'Port Coquitlam', slug: 'port-coquitlam' },
              ].map((city) => (
                <button
                  key={city.slug}
                  onClick={() => onNavigate('location-detail', city.slug)}
                  className="text-left text-xs text-slate-300 hover:text-white transition-colors py-1 flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-[#7D9A87]" />
                  <span className="truncate">{city.name}</span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('locations')}
                className="text-xs font-bold text-[#88D2A8] hover:text-white inline-flex items-center gap-1 cursor-pointer uppercase tracking-wider"
              >
                <span>View Full Coverage Map</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 4: Company & Dispatch (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono border-b border-slate-700 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group"
                >
                  <ArrowRight className="w-3 h-3 text-[#88D2A8] group-hover:translate-x-0.5 transition-transform" />
                  <span>About Us & Fleet</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group"
                >
                  <ArrowRight className="w-3 h-3 text-[#88D2A8] group-hover:translate-x-0.5 transition-transform" />
                  <span>Project Gallery</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('blogs')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group"
                >
                  <ArrowRight className="w-3 h-3 text-[#88D2A8] group-hover:translate-x-0.5 transition-transform" />
                  <span>Technical Specs</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group"
                >
                  <ArrowRight className="w-3 h-3 text-[#88D2A8] group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact & Dispatch</span>
                </button>
              </li>
              <li className="pt-3">
                <button 
                  onClick={onOpenBooking} 
                  className="w-full py-2.5 px-3 bg-[#7D9A87] hover:bg-[#688371] text-white text-xs font-bold uppercase tracking-wider transition-all shadow text-center cursor-pointer border border-white/20"
                >
                  Request Site Survey
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Meta */}
        <div className="mt-14 pt-6 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-white font-bold">IRONCLAD COMMERCIAL FLOORS</strong>. All rights reserved. 783 E 60th Ave, Vancouver, BC V5X 2A5.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span>Commercial Flooring Contractor in Vancouver, BC</span>
            <span>•</span>
            <a href="tel:6045403999" className="hover:text-white font-bold text-white transition-colors">
              Dispatch: (604) 540-3999
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
