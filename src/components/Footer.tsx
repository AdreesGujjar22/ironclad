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
              Canada’s premier heavy-duty commercial, institutional, and industrial flooring contractor. We deliver precision subfloor preparation, diamond polished concrete, chemical-resistant epoxy mortars, and high-performance architectural floor systems across Canada.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-4 border-t border-slate-700">
              <address 
                className="not-italic flex items-start gap-3"
                itemScope 
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="w-4 h-4 text-[#88D2A8] shrink-0 mt-0.5" />
                <span>
                  <span itemProp="streetAddress">783 E 60th Ave</span>,{' '}
                  <span itemProp="addressLocality">Vancouver</span>,{' '}
                  <span itemProp="addressRegion">BC</span>{' '}
                  <span itemProp="postalCode">V5X 2A5</span>,{' '}
                  <span itemProp="addressCountry">Canada</span>
                </span>
              </address>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#88D2A8] shrink-0" />
                <a href="tel:6045403999" className="hover:text-white font-black text-sm sm:text-base text-white transition-colors" itemProp="telephone">
                  (604) 540-3999
                </a>
                <span className="text-[10px] font-mono bg-white/10 text-[#88D2A8] px-2 py-0.5 border border-white/20 font-bold uppercase">Direct Line</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#88D2A8] shrink-0" />
                <a href="mailto:info@ironcladcommercialfloors.ca" className="hover:text-white transition-colors" itemProp="email">
                  info@ironcladcommercialfloors.ca
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#88D2A8] shrink-0" />
                <span>Overnight & Weekend Shifts Available</span>
              </div>

              {/* Google Business Profile Verified Link */}
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800/90 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-600 transition-all shadow-xs group"
                  title="Ironclad Commercial Floors Google Business Profile & Google Maps"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5c1.58 0 3 .55 4.13 1.62l3.07-3.07C17.34 1.8 14.86 1 12 1 7.73 1 4.09 3.47 2.34 7.07l3.66 2.84C6.88 7.35 9.24 5 12 5z"/>
                    <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.71 2.88c2.16-1.99 3.71-4.93 3.71-8.7z"/>
                    <path fill="#FBBC05" d="M5.99 14.09c-.24-.72-.37-1.49-.37-2.29s.13-1.57.37-2.29L2.34 6.67C1.49 8.35 1 10.22 1 12.2s.49 3.85 1.34 5.53l3.65-2.84z"/>
                    <path fill="#34A853" d="M12 23.4c3.24 0 5.95-1.08 7.93-2.91l-3.71-2.88c-1.07.72-2.45 1.16-4.22 1.16-2.76 0-5.12-2.35-6-4.91L2.34 16.7C4.09 20.33 7.73 23.4 12 23.4z"/>
                  </svg>
                  <span className="group-hover:text-[#88D2A8] transition-colors">Google Business Profile Verified</span>
                </a>
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
                  onClick={() => onNavigate('garage-epoxy-flooring')} 
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
            © {new Date().getFullYear()} <strong className="text-white font-bold">IRONCLAD COMMERCIAL FLOORS</strong>. All rights reserved. 783 E 60th Ave, Vancouver, BC V5X 2A5, Canada.
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
