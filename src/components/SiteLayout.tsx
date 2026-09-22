import React, {
  Suspense,
  lazy,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Calendar, ArrowUp } from "lucide-react";
import { Navbar } from "./Navbar";
import { getPathForRoute } from "@/lib/site-navigation";

const Footer = lazy(() =>
  import("./Footer").then((module) => ({ default: module.Footer })),
);

const AppointmentModal = lazy(() =>
  import("./AppointmentModal").then((m) => ({ default: m.AppointmentModal })),
);

interface BookingInitialData {
  serviceId?: string;
  sqft?: string;
  facility?: string;
  location?: string;
}

export interface SiteNavigation {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initialData?: BookingInitialData) => void;
}

interface SiteLayoutProps {
  /** Logical page name, used by the Navbar for active-link highlighting. */
  page: string;
  children: (nav: SiteNavigation) => ReactNode;
}

function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F8F9FA]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-[#3B945E]/30 border-t-[#3B945E] rounded-full animate-spin" />
        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
          Loading...
        </span>
      </div>
    </div>
  );
}

export function SiteLayout({ page, children }: SiteLayoutProps) {
  const router = useRouter();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] =
    useState<BookingInitialData>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 350);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onNavigate = (targetPage: string, param?: string) => {
    const targetPath = getPathForRoute(targetPage, param);
    if (router.state.location.pathname !== targetPath) {
      router.history.push(targetPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openBookingModal = (initialData: BookingInitialData = {}) => {
    setBookingInitialData(initialData);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-slate-900 flex flex-col font-sans selection:bg-[#3B945E] selection:text-white w-full max-w-full overflow-x-hidden relative">
      {/* Top Navigation */}
      <Navbar
        currentPage={page}
        onNavigate={onNavigate}
        onOpenBooking={() => openBookingModal()}
      />

      {/* Main Routed Page Content */}
      <main
        className={`flex-grow w-full max-w-full overflow-x-hidden ${
          page === "home" ? "pt-0" : "pt-[88px] sm:pt-[96px] lg:pt-[104px]"
        }`}
      >
        <Suspense fallback={<PageLoadingFallback />}>
          {children({ onNavigate, onOpenBooking: openBookingModal })}
        </Suspense>
      </main>

      {/* Footer Matrix */}
      <Suspense fallback={null}>
        <Footer
          onNavigate={onNavigate}
          onOpenBooking={() => openBookingModal()}
        />
      </Suspense>

      {/* Floating Action Dispatch Bar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="p-2.5 sm:p-3 bg-[#1A2530] text-slate-200 hover:text-white hover:bg-[#243342] border border-slate-600 shadow-2xl transition-all cursor-pointer shrink-0"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D2A8]" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openBookingModal()}
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-[11px] sm:text-xs uppercase font-mono tracking-wider transition-all shadow-2xl cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          <span>MAKE APPOINTMENT</span>
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="tel:6045403999"
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1A2530] hover:bg-[#243342] text-white border border-slate-600 shadow-2xl transition-all font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider shrink-0 whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D2A8]" />
          <span className="text-white">Call (604) 540-3999</span>
        </motion.a>
      </motion.div>

      {/* Appointment Booking Modal */}
      {bookingModalOpen && (
        <Suspense fallback={null}>
          <AppointmentModal
            isOpen={bookingModalOpen}
            onClose={() => setBookingModalOpen(false)}
            initialData={bookingInitialData}
          />
        </Suspense>
      )}
    </div>
  );
}
