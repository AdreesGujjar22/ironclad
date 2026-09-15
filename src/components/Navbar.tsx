import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ChevronDown, 
  ChevronRight,
  Menu, 
  X, 
  Calendar,
  Layers,
  ArrowRight,
  Home,
  Info,
  FolderKanban,
  BookOpen,
  MapPinned,
  Star
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { LOCATIONS } from '../data/locationsData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  
  // Mobile drawer expandable accordions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setLocationsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (page: string, param?: string) => {
    onNavigate(page, param);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setLocationsDropdownOpen(false);
  };

  const isTransparent = !isScrolled && currentPage === 'home';

  return (
    <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${
      isTransparent 
        ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white border-b border-white/10 shadow-none' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm'
    }`}>
      {/* Top Info Bar */}
      <div className={`text-xs py-2 px-4 sm:px-6 w-full max-w-full overflow-hidden transition-colors duration-300 ${
        isTransparent
          ? 'bg-black/40 backdrop-blur-xs text-[#DCF2E4] border-b border-white/10'
          : 'bg-[#0B2416] text-[#DCF2E4] border-b border-[#1B412B]'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center flex-wrap gap-3 sm:gap-6 text-emerald-100/80 min-w-0">
            <a 
              href="tel:6045403999" 
              className="flex items-center gap-1.5 text-white font-bold hover:text-[#88D2A8] transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#57BC83]" />
              <span>(604) 540-3999</span>
            </a>

            <address 
              className="not-italic hidden lg:flex items-center gap-1.5 text-emerald-100/90"
              itemScope 
              itemType="https://schema.org/PostalAddress"
            >
              <MapPin className="w-3.5 h-3.5 text-[#57BC83] shrink-0" />
              <span>
                <span itemProp="streetAddress">783 E 60th Ave</span>,{' '}
                <span itemProp="addressLocality">Vancouver</span>,{' '}
                <span itemProp="addressRegion">BC</span>{' '}
                <span itemProp="postalCode">V5X 2A5</span>,{' '}
                <span itemProp="addressCountry">Canada</span>
              </span>
            </address>

            <div className="hidden sm:flex items-center gap-1.5 text-emerald-100/80">
              <Clock className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Overnight & Weekend Shifts Available</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-emerald-100/80 min-w-0">
            <a 
              href="https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#88D2A8] hover:text-white font-medium transition-colors"
              title="Google Business Profile & Reviews"
            >
              <span className="bg-white/10 px-2 py-0.5 rounded border border-white/20 text-[10px] font-bold text-white flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>Google Business Profile</span>
              </span>
            </a>

            <a 
              href="mailto:info@ironcladcommercialfloors.ca" 
              className="flex items-center gap-1.5 hover:text-white transition-colors truncate text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#88D2A8] shrink-0" />
              <span className="truncate">info@ironcladcommercialfloors.ca</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Brand Logo with Image */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer shrink-0"
          aria-label="Ironclad Commercial Floors Home"
        >
          <div className={`relative h-11 sm:h-12 w-auto flex items-center justify-center overflow-hidden rounded-lg p-0.5 shadow-sm transition-all ${
            isTransparent
              ? 'border border-white/30 bg-white/95'
              : 'border border-slate-200/80 bg-white group-hover:border-[#3B945E]'
          }`}>
            <img 
              src="/IRONCLAD-COMMERCIAL-FLOORS.jpg" 
              alt="Ironclad Commercial Floors Logo" 
              className="h-10 sm:h-11 w-auto object-contain max-w-[130px] sm:max-w-[150px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className={`text-base sm:text-lg font-black tracking-tight block uppercase font-mono leading-tight transition-colors ${
              isTransparent ? 'text-white drop-shadow-sm' : 'text-slate-900'
            }`}>
              IRONCLAD
            </span>
            <span className={`text-[9px] sm:text-[11px] font-extrabold tracking-widest uppercase block transition-colors ${
              isTransparent ? 'text-[#88D2A8]' : 'text-[#3B945E]'
            }`}>
              COMMERCIAL FLOORS
            </span>
          </div>
        </motion.button>

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-8 gap-6 xl:gap-8 text-sm font-semibold">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-all py-1 cursor-pointer relative ${
              currentPage === 'home' 
                ? isTransparent ? 'text-[#88D2A8] font-bold' : 'text-[#3B945E] font-bold' 
                : isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Home</span>
            {currentPage === 'home' && (
              <motion.div layoutId="navIndicator" className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isTransparent ? 'bg-[#88D2A8]' : 'bg-[#3B945E]'}`} />
            )}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-all py-1 cursor-pointer relative ${
              currentPage === 'about' || currentPage.startsWith('about-') 
                ? isTransparent ? 'text-[#88D2A8] font-bold' : 'text-[#3B945E] font-bold' 
                : isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>About Us</span>
            {(currentPage === 'about' || currentPage.startsWith('about-')) && (
              <motion.div layoutId="navIndicator" className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isTransparent ? 'bg-[#88D2A8]' : 'bg-[#3B945E]'}`} />
            )}
          </button>

          {/* Services Mega-Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`flex items-center gap-1.5 transition-all py-1 cursor-pointer relative ${
                currentPage.startsWith('service') || currentPage.includes('flooring') 
                  ? isTransparent ? 'text-[#88D2A8] font-bold' : 'text-[#3B945E] font-bold' 
                  : isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 ${isTransparent ? 'text-white/70' : 'text-slate-400'}`} />
              {(currentPage.startsWith('service') || currentPage.includes('flooring')) && (
                <motion.div layoutId="navIndicator" className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isTransparent ? 'bg-[#88D2A8]' : 'bg-[#3B945E]'}`} />
              )}
            </button>

            {/* Services Dropdown Drawer */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[940px] xl:w-[980px] max-w-[95vw] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-1.5 z-50 text-slate-800"
                >
                  {/* Category Columns Grid */}
                  <div className="grid grid-cols-4 gap-6">
                    {/* Category 1: Concrete & Epoxy */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#3B945E] font-bold font-mono text-xs flex items-center justify-center border border-emerald-200/80">
                            C
                          </span>
                          <span className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide">
                            Concrete & Epoxy
                          </span>
                        </div>
                        <div className="h-0.5 w-10 bg-[#3B945E] rounded-full mt-2" />
                      </div>

                      <div className="space-y-1">
                        {[
                          { name: 'Commercial Epoxy Flooring', slug: 'commercial-epoxy-flooring' },
                          { name: 'Garage Epoxy Flooring', slug: 'garage-epoxy-flooring' },
                          { name: 'Concrete Floor Polishing', slug: 'concrete-floor-polishing' },
                          { name: 'Commercial Concrete Sealing', slug: 'commercial-concrete-floor-sealing' },
                          { name: 'Metallic & Flake Epoxy', slug: 'commercial-epoxy-flooring' },
                          { name: 'Anti-Slip Safety Coatings', slug: 'commercial-epoxy-flooring' }
                        ].map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavClick('service-detail', item.slug)}
                            className="group w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all text-left cursor-pointer"
                          >
                            <span className="text-xs font-medium group-hover:text-[#3B945E] transition-colors truncate pr-1">
                              {item.name}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#3B945E] group-hover:translate-x-1 transition-all shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category 2: Resilient & Vinyl */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#3B945E] font-bold font-mono text-xs flex items-center justify-center border border-emerald-200/80">
                            R
                          </span>
                          <span className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide">
                            Resilient & Vinyl
                          </span>
                        </div>
                        <div className="h-0.5 w-10 bg-[#3B945E] rounded-full mt-2" />
                      </div>

                      <div className="space-y-1">
                        {[
                          { name: 'Commercial Flooring Installation', slug: 'flooring-installation' },
                          { name: 'Luxury Vinyl (LVT / LVP)', slug: 'commercial-luxury-vinyl-flooring' },
                          { name: 'Commercial Sheet Vinyl', slug: 'commercial-sheet-vinyl-flooring' },
                          { name: 'Commercial Rubber Flooring', slug: 'flooring-installation' },
                          { name: 'Integral Flash Coving', slug: 'commercial-sheet-vinyl-flooring' },
                          { name: 'Baseboard & Moisture Barriers', slug: 'flooring-installation' }
                        ].map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavClick('service-detail', item.slug)}
                            className="group w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all text-left cursor-pointer"
                          >
                            <span className="text-xs font-medium group-hover:text-[#3B945E] transition-colors truncate pr-1">
                              {item.name}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#3B945E] group-hover:translate-x-1 transition-all shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category 3: Tile & Carpet */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#3B945E] font-bold font-mono text-xs flex items-center justify-center border border-emerald-200/80">
                            T
                          </span>
                          <span className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide">
                            Tile & Carpet
                          </span>
                        </div>
                        <div className="h-0.5 w-10 bg-[#3B945E] rounded-full mt-2" />
                      </div>

                      <div className="space-y-1">
                        {[
                          { name: 'Commercial Carpet Tile', slug: 'carpet-tile-installation' },
                          { name: 'Broadloom Carpet Installation', slug: 'carpet-tile-installation' },
                          { name: 'Ceramic & Porcelain Tile', slug: 'flooring-installation' },
                          { name: 'Commercial Quarry Tile', slug: 'restaurant-flooring-installation' },
                          { name: 'Entryway Walk-Off Systems', slug: 'carpet-tile-installation' },
                          { name: 'Acoustic Subfloor Systems', slug: 'commercial-luxury-vinyl-flooring' }
                        ].map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavClick('service-detail', item.slug)}
                            className="group w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all text-left cursor-pointer"
                          >
                            <span className="text-xs font-medium group-hover:text-[#3B945E] transition-colors truncate pr-1">
                              {item.name}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#3B945E] group-hover:translate-x-1 transition-all shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category 4: Sector Specific & Repairs */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#3B945E] font-bold font-mono text-xs flex items-center justify-center border border-emerald-200/80">
                            S
                          </span>
                          <span className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide">
                            Sectors & Repairs
                          </span>
                        </div>
                        <div className="h-0.5 w-10 bg-[#3B945E] rounded-full mt-2" />
                      </div>

                      <div className="space-y-1">
                        {[
                          { name: 'Warehouse & Logistics Floors', slug: 'warehouse-flooring-installation' },
                          { name: 'Restaurant & Kitchen Flooring', slug: 'restaurant-flooring-installation' },
                          { name: 'Commercial Flooring Repair', slug: 'flooring-repair' },
                          { name: 'Commercial Floor Replacement', slug: 'flooring-replacement' },
                          { name: 'Joint Spall & Crack Stitching', slug: 'flooring-repair' },
                          { name: 'Demolition & Self-Leveling', slug: 'flooring-replacement' }
                        ].map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavClick('service-detail', item.slug)}
                            className="group w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all text-left cursor-pointer"
                          >
                            <span className="text-xs font-medium group-hover:text-[#3B945E] transition-colors truncate pr-1">
                              {item.name}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#3B945E] group-hover:translate-x-1 transition-all shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mega-Menu Bottom Bar */}
                  <div className="border-t border-slate-100 mt-5 pt-4 flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="font-bold text-[#3B945E] hover:text-[#2A6E44] flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span>Explore All 40+ Commercial Flooring Services Catalogue</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-4 text-slate-500">
                      <span className="flex items-center gap-1 text-[11px] font-mono">
                        <span className="w-2 h-2 rounded-full bg-[#3B945E]" />
                        10-Year Ironclad Warranty
                      </span>
                      <button
                        onClick={onOpenBooking}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-[#3B945E] text-white rounded-lg font-bold font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Book Site Survey
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleNavClick('projects')}
            className={`transition-all py-1 cursor-pointer relative ${
              currentPage === 'projects' 
                ? isTransparent ? 'text-[#88D2A8] font-bold' : 'text-[#3B945E] font-bold' 
                : isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Projects</span>
            {currentPage === 'projects' && (
              <motion.div layoutId="navIndicator" className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isTransparent ? 'bg-[#88D2A8]' : 'bg-[#3B945E]'}`} />
            )}
          </button>

          <button
            onClick={() => handleNavClick('blogs')}
            className={`transition-all py-1 cursor-pointer relative ${
              currentPage.startsWith('blog') 
                ? isTransparent ? 'text-[#88D2A8] font-bold' : 'text-[#3B945E] font-bold' 
                : isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Blogs</span>
            {currentPage.startsWith('blog') && (
              <motion.div layoutId="navIndicator" className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isTransparent ? 'bg-[#88D2A8]' : 'bg-[#3B945E]'}`} />
            )}
          </button>

          {/* Locations Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setLocationsDropdownOpen(true)}
            onMouseLeave={() => setLocationsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('locations')}
              className={`flex items-center gap-1.5 transition-all py-1 cursor-pointer relative ${
                currentPage.startsWith('location') 
                  ? isTransparent ? 'text-[#88D2A8] font-bold' : 'text-[#3B945E] font-bold' 
                  : isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Service Areas</span>
              <ChevronDown className={`w-4 h-4 ${isTransparent ? 'text-white/70' : 'text-slate-400'}`} />
              {currentPage.startsWith('location') && (
                <motion.div layoutId="navIndicator" className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isTransparent ? 'bg-[#88D2A8]' : 'bg-[#3B945E]'}`} />
              )}
            </button>

            <AnimatePresence>
              {locationsDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl p-3 mt-1 space-y-1 text-xs z-50"
                >
                  <div className="px-2 py-1 text-[10px] font-mono uppercase text-slate-500 font-bold border-b border-slate-100">
                    Greater Vancouver Coverage
                  </div>
                  {LOCATIONS.map(loc => (
                    <button
                      key={loc.slug}
                      onClick={() => handleNavClick('location-detail', loc.slug)}
                      className="w-full text-left px-3 py-2 rounded-lg text-slate-700 hover:text-[#3B945E] hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{loc.name}</span>
                      {loc.id === 'vancouver' && (
                        <span className="text-[9px] px-1.5 py-0.5 bg-[#3B945E] text-white rounded font-bold">HQ</span>
                      )}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavClick('locations')}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-[#3B945E] hover:text-[#2A6E44] border-t border-slate-100 mt-1 pt-2 flex items-center gap-1 cursor-pointer"
                  >
                    View All Service Areas <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-all py-1 cursor-pointer relative ${
              currentPage.startsWith('contact') 
                ? isTransparent ? 'text-[#88D2A8] font-bold' : 'text-[#3B945E] font-bold' 
                : isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Contact Us</span>
            {currentPage.startsWith('contact') && (
              <motion.div layoutId="navIndicator" className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isTransparent ? 'bg-[#88D2A8]' : 'bg-[#3B945E]'}`} />
            )}
          </button>
        </nav>

        {/* Mobile Drawer Hamburger Trigger */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className={`p-2 transition-all cursor-pointer flex items-center justify-center rounded-sm active:scale-95 ${
              isTransparent 
                ? 'bg-black/40 text-white border border-white/30 hover:bg-black/60' 
                : 'bg-[#1A2530] text-white border border-slate-600 hover:bg-[#243342]'
            }`}
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER: CLEAN MODERN LIGHT SIDEBAR */}
      {mounted && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-[9999]" aria-modal="true" role="dialog">
              {/* Dark Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
                aria-hidden="true"
              />

              {/* Right-to-Left Slide-In Drawer Container in Clean Light Theme */}
              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 320 }}
                className="fixed top-0 right-0 bottom-0 w-[90vw] max-w-sm sm:max-w-md h-[100dvh] max-h-[100dvh] bg-[#F8F9FA] text-slate-800 shadow-2xl flex flex-col z-[10000] border-l border-slate-200"
              >
                {/* Drawer Top Header - Logo remains as is */}
                <div className="shrink-0 p-4 sm:p-5 border-b border-slate-200 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-auto rounded-lg border border-slate-200/90 bg-white p-0.5 shadow-xs overflow-hidden flex items-center justify-center">
                      <img 
                        src="/IRONCLAD-COMMERCIAL-FLOORS.jpg" 
                        alt="Ironclad Commercial Floors Logo" 
                        className="h-full w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-black tracking-tight text-slate-900 uppercase font-mono block leading-none">
                        IRONCLAD
                      </span>
                      <span className="text-[9px] font-bold tracking-wider text-[#3B945E] uppercase block mt-0.5">
                        COMMERCIAL FLOORS
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Drawer Scrollable Body */}
                <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3 text-sm">
                  {/* Main Navigation Links */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 px-2 block pb-1">
                      Main Navigation
                    </span>

                    {/* Home */}
                    <button
                      onClick={() => handleNavClick('home')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold uppercase font-mono transition-colors cursor-pointer border-l-2 ${
                        currentPage === 'home' 
                          ? 'text-[#3B945E] border-[#3B945E] font-bold' 
                          : 'text-slate-700 hover:text-[#3B945E] border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Home className={`w-4 h-4 ${currentPage === 'home' ? 'text-[#3B945E]' : 'text-slate-500'}`} />
                        <span>Home Overview</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </button>

                    {/* About Us */}
                    <button
                      onClick={() => handleNavClick('about')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold uppercase font-mono transition-colors cursor-pointer border-l-2 ${
                        currentPage === 'about' || currentPage.startsWith('about-')
                          ? 'text-[#3B945E] border-[#3B945E] font-bold' 
                          : 'text-slate-700 hover:text-[#3B945E] border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Info className={`w-4 h-4 ${currentPage === 'about' || currentPage.startsWith('about-') ? 'text-[#3B945E]' : 'text-slate-500'}`} />
                        <span>About Us & Equipment</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </button>

                    {/* Services Accordion */}
                    <div className="transition-all">
                      <div className={`flex items-center justify-between px-3 py-2.5 border-l-2 ${
                        currentPage.startsWith('service') || currentPage.includes('flooring')
                          ? 'border-[#3B945E]' 
                          : 'border-transparent'
                      }`}>
                        <button
                          onClick={() => handleNavClick('services')}
                          className={`flex items-center gap-2.5 text-xs font-bold uppercase font-mono cursor-pointer ${
                            currentPage.startsWith('service') || currentPage.includes('flooring') ? 'text-[#3B945E]' : 'text-slate-700'
                          }`}
                        >
                          <Layers className={`w-4 h-4 ${currentPage.startsWith('service') || currentPage.includes('flooring') ? 'text-[#3B945E]' : 'text-slate-500'}`} />
                          <span>Services (40 Solutions)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
                          aria-label="Toggle services list"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#3B945E]' : ''}`} />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="pl-6 pr-2 pb-2 pt-1 space-y-2 text-xs">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1.5 px-2 font-bold text-[#3B945E] flex items-center justify-between text-xs cursor-pointer border-l-2 border-[#3B945E]"
                          >
                            <span>Explore All 40 Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <div className="space-y-1 pt-1">
                            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block px-2">Concrete & Epoxy</span>
                            {[
                              { slug: 'commercial-epoxy-flooring', name: 'Commercial Epoxy Flooring' },
                              { slug: 'garage-epoxy-flooring', name: 'Garage Epoxy Flooring' },
                              { slug: 'concrete-floor-polishing', name: 'Concrete Floor Polishing' },
                              { slug: 'commercial-concrete-floor-sealing', name: 'Concrete Floor Sealing' }
                            ].map(s => (
                              <button
                                key={s.slug}
                                onClick={() => handleNavClick('service-detail', s.slug)}
                                className="w-full text-left py-1 px-2 text-slate-600 hover:text-[#3B945E] truncate cursor-pointer block text-xs border-l-2 border-slate-200 hover:border-[#3B945E] transition-all"
                              >
                                {s.name}
                              </button>
                            ))}
                          </div>

                          <div className="space-y-1 pt-1">
                            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block px-2">Resilient & Carpet</span>
                            {[
                              { slug: 'flooring-installation', name: 'Commercial Flooring Installation' },
                              { slug: 'carpet-tile-installation', name: 'Carpet Tile Installation' },
                              { slug: 'commercial-luxury-vinyl-flooring', name: 'Luxury Vinyl Plank (LVP)' },
                              { slug: 'commercial-sheet-vinyl-flooring', name: 'Medical Sheet Vinyl' }
                            ].map(s => (
                              <button
                                key={s.slug}
                                onClick={() => handleNavClick('service-detail', s.slug)}
                                className="w-full text-left py-1 px-2 text-slate-600 hover:text-[#3B945E] truncate cursor-pointer block text-xs border-l-2 border-slate-200 hover:border-[#3B945E] transition-all"
                              >
                                {s.name}
                              </button>
                            ))}
                          </div>

                          <div className="space-y-1 pt-1">
                            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block px-2">Repairs & Replacement</span>
                            {[
                              { slug: 'flooring-repair', name: 'Flooring Repair' },
                              { slug: 'flooring-replacement', name: 'Flooring Replacement' },
                              { slug: 'warehouse-flooring-installation', name: 'Warehouse Flooring' }
                            ].map(s => (
                              <button
                                key={s.slug}
                                onClick={() => handleNavClick('service-detail', s.slug)}
                                className="w-full text-left py-1 px-2 text-slate-600 hover:text-[#3B945E] truncate cursor-pointer block text-xs border-l-2 border-slate-200 hover:border-[#3B945E] transition-all"
                              >
                                {s.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Projects */}
                    <button
                      onClick={() => handleNavClick('projects')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold uppercase font-mono transition-colors cursor-pointer border-l-2 ${
                        currentPage === 'projects' 
                          ? 'text-[#3B945E] border-[#3B945E] font-bold' 
                          : 'text-slate-700 hover:text-[#3B945E] border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <FolderKanban className={`w-4 h-4 ${currentPage === 'projects' ? 'text-[#3B945E]' : 'text-slate-500'}`} />
                        <span>Case Studies & Projects</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </button>

                    {/* Service Areas (Locations) Accordion */}
                    <div className="transition-all">
                      <div className={`flex items-center justify-between px-3 py-2.5 border-l-2 ${
                        currentPage.startsWith('location')
                          ? 'border-[#3B945E]' 
                          : 'border-transparent'
                      }`}>
                        <button
                          onClick={() => handleNavClick('locations')}
                          className={`flex items-center gap-2.5 text-xs font-bold uppercase font-mono cursor-pointer ${
                            currentPage.startsWith('location') ? 'text-[#3B945E]' : 'text-slate-700'
                          }`}
                        >
                          <MapPinned className={`w-4 h-4 ${currentPage.startsWith('location') ? 'text-[#3B945E]' : 'text-slate-500'}`} />
                          <span>Service Areas (11 Hubs)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
                          aria-label="Toggle locations list"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileLocationsOpen ? 'rotate-180 text-[#3B945E]' : ''}`} />
                        </button>
                      </div>

                      {mobileLocationsOpen && (
                        <div className="pl-6 pr-2 pb-2 pt-1 space-y-1 text-xs">
                          <button
                            onClick={() => handleNavClick('locations')}
                            className="w-full text-left py-1.5 px-2 font-bold text-[#3B945E] flex items-center justify-between text-xs cursor-pointer border-l-2 border-[#3B945E] mb-1"
                          >
                            <span>View All Regional Hubs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          {LOCATIONS.map(loc => (
                            <button
                              key={loc.slug}
                              onClick={() => handleNavClick('location-detail', loc.slug)}
                              className="w-full text-left py-1 px-2 text-slate-600 hover:text-[#3B945E] flex items-center justify-between border-l-2 border-slate-200 hover:border-[#3B945E] transition-all cursor-pointer"
                            >
                              <span>{loc.name}, BC</span>
                              {loc.id === 'vancouver' && (
                                <span className="text-[9px] px-1.5 py-0.5 bg-[#3B945E] text-white rounded font-mono font-bold">HQ</span>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Blogs */}
                    <button
                      onClick={() => handleNavClick('blogs')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold uppercase font-mono transition-colors cursor-pointer border-l-2 ${
                        currentPage.startsWith('blog') 
                          ? 'text-[#3B945E] border-[#3B945E] font-bold' 
                          : 'text-slate-700 hover:text-[#3B945E] border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <BookOpen className={`w-4 h-4 ${currentPage.startsWith('blog') ? 'text-[#3B945E]' : 'text-slate-500'}`} />
                        <span>Technical Flooring Guides</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </button>

                    {/* Contact Us */}
                    <button
                      onClick={() => handleNavClick('contact')}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold uppercase font-mono transition-colors cursor-pointer border-l-2 ${
                        currentPage.startsWith('contact') 
                          ? 'text-[#3B945E] border-[#3B945E] font-bold' 
                          : 'text-slate-700 hover:text-[#3B945E] border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Mail className={`w-4 h-4 ${currentPage.startsWith('contact') ? 'text-[#3B945E]' : 'text-slate-500'}`} />
                        <span>Contact & Commercial Dispatch</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  </div>
                </div>

                {/* Drawer Bottom Profile Card */}
                <div className="shrink-0 p-4 bg-white border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-emerald-50 text-[#3B945E] border border-emerald-200 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                      IC
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 text-xs block leading-tight">Ironclad Headquarters</span>
                      <span className="text-[11px] text-slate-500 leading-tight block">
                        783 E 60th Ave, Vancouver, BC V5X 2A5, Canada
                      </span>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
};
