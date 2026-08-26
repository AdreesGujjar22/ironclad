import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { FlooringInstallationPage } from './pages/FlooringInstallationPage';
import { FlooringRepairPage } from './pages/FlooringRepairPage';
import { FlooringReplacementPage } from './pages/FlooringReplacementPage';
import { CommercialEpoxyFlooringPage } from './pages/CommercialEpoxyFlooringPage';
import { GarageEpoxyFlooringPage } from './pages/GarageEpoxyFlooringPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar, ArrowUp } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageParam, setPageParam] = useState<string | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingInitialData, setBookingInitialData] = useState<any>({});
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Handle browser back/forward and scroll to top
  const handleNavigate = (page: string, param?: string) => {
    setCurrentPage(page);
    setPageParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update hash for basic bookmarking/history
    if (param) {
      window.location.hash = `${page}/${param}`;
    } else {
      window.location.hash = page;
    }
  };

  // Sync hash on initial load & popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace(/^\//, '');
      if (hash) {
        const parts = hash.split('/');
        if (parts.length === 2) {
          setCurrentPage(parts[0]);
          setPageParam(parts[1]);
        } else if (parts.length === 1 && parts[0]) {
          setCurrentPage(parts[0]);
          setPageParam(undefined);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openBookingModal = (initialData: any = {}) => {
    setBookingInitialData(initialData);
    setBookingModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
      case '':
        return <HomePage onNavigate={handleNavigate} onOpenBooking={openBookingModal} />;
      case 'about':
      case 'about-ironclad-commercial-floors-vancouver-bc':
        return <AboutPage onNavigate={handleNavigate} onOpenBooking={() => openBookingModal()} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenBooking={openBookingModal} />;
      case 'flooring-installation-vancouver-bc':
      case 'flooring-installation':
        return <FlooringInstallationPage onNavigate={handleNavigate} onOpenBooking={openBookingModal} />;
      case 'flooring-repair-vancouver-bc':
      case 'flooring-repair':
        return <FlooringRepairPage onNavigate={handleNavigate} onOpenBooking={openBookingModal} />;
      case 'flooring-replacement-vancouver-bc':
      case 'flooring-replacement':
        return <FlooringReplacementPage onNavigate={handleNavigate} onOpenBooking={openBookingModal} />;
      case 'commercial-epoxy-flooring-vancouver-bc':
      case 'commercial-epoxy-flooring':
        return <CommercialEpoxyFlooringPage onNavigate={handleNavigate} onOpenBooking={openBookingModal} />;
      case 'garage-epoxy-flooring-vancouver-bc':
      case 'garage-epoxy-flooring':
      case 'concrete-floor-polishing':
      case 'concrete-floor-polishing-vancouver-bc':
        return <GarageEpoxyFlooringPage onNavigate={handleNavigate} onOpenBooking={openBookingModal} />;
      case 'service-detail':
        return (
          <ServiceDetailPage 
            slug={pageParam || 'concrete-epoxy-floor-installation'} 
            onNavigate={handleNavigate} 
            onOpenBooking={openBookingModal} 
          />
        );
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} onOpenBooking={() => openBookingModal()} />;
      case 'blogs':
        return <BlogsPage onNavigate={handleNavigate} />;
      case 'blog-detail':
        return (
          <BlogDetailPage 
            slug={pageParam || 'commercial-flooring-vancouver-guide'} 
            onNavigate={handleNavigate} 
            onOpenBooking={() => openBookingModal()} 
          />
        );
      case 'locations':
        return <LocationsPage onNavigate={handleNavigate} onOpenBooking={() => openBookingModal()} />;
      case 'location-detail':
        return (
          <LocationDetailPage 
            slug={pageParam || 'vancouver'} 
            onNavigate={handleNavigate} 
            onOpenBooking={openBookingModal} 
          />
        );
      case 'contact':
      case 'contact-ironclad-commercial-floors-vancouver-bc':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenBooking={openBookingModal} />;
    }
  };

  const pageKey = currentPage + (pageParam ? `/${pageParam}` : '');

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-slate-900 flex flex-col font-sans selection:bg-[#3B945E] selection:text-white w-full max-w-full overflow-x-hidden relative">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => openBookingModal()}
      />

      {/* Main Routed Page Content with smooth animation */}
      <main className={`flex-grow w-full max-w-full overflow-x-hidden ${
        currentPage === 'home' ? 'pt-0' : 'pt-[88px] sm:pt-[96px] lg:pt-[104px]'
      }`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pageKey}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Matrix */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => openBookingModal()}
      />

      {/* Global Booking & Estimate Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={bookingInitialData?.serviceId}
      />

      {/* Floating Action Architectural Dispatch Bar - Matching Hero Section UI Standard & Fully Responsive */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
        className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 z-30 flex items-center gap-1.5 sm:gap-2 max-w-[calc(100vw-1.5rem)]"
      >
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              className="p-2.5 sm:p-3 bg-[#1A2530] text-slate-200 hover:text-white hover:bg-[#243342] border border-slate-600 shadow-2xl transition-all cursor-pointer shrink-0"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D2A8]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Solid Green Primary Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openBookingModal()}
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-[11px] sm:text-xs uppercase font-mono tracking-wider transition-all shadow-2xl cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
        >
          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-100" />
          <span>
            <span className="hidden sm:inline">Make Appointment</span>
            <span className="sm:hidden">Appointment</span>
          </span>
        </motion.button>

        {/* Transparent Call Button */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="tel:6045403999"
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2.5 sm:py-3 bg-[#1A2530] hover:bg-[#243342] text-white border border-slate-600 shadow-2xl transition-all font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider shrink-0 whitespace-nowrap"
        >
          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#88D2A8]" />
          <span className="hidden md:inline">(604) 540-3999</span>
          <span className="md:hidden">Call</span>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default App;
