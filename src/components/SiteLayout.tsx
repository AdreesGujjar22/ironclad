import React, { Suspense, lazy, useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Phone, Calendar, ArrowUp } from "lucide-react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SiteDirectory } from "./SiteDirectory";
import { getPathForRoute, pageKeyFromPath } from "../lib/routes";

const AppointmentModal = lazy(() =>
  import("./AppointmentModal").then((m) => ({ default: m.AppointmentModal })),
);

export interface PageHelpers {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: (initial?: any) => void;
}

interface SiteLayoutProps {
  children: (helpers: PageHelpers) => ReactNode;
}

/**
 * Server-rendered shell: navbar, footer, floating CTAs and booking modal.
 * Page content is rendered by the individual file routes so that every URL
 * returns unique, fully formed HTML on first response.
 */
export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const currentPage = pageKeyFromPath(pathname);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState<any>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onNavigate = (page: string, param?: string) => {
    const to = getPathForRoute(page, param);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    navigate({ to });
  };

  const onOpenBooking = (initial: any = {}) => {
    setBookingInitialData(initial);
    setBookingModalOpen(true);
  };

  const helpers: PageHelpers = { onNavigate, onOpenBooking };

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-slate-900 flex flex-col font-sans selection:bg-[#3B945E] selection:text-white w-full max-w-full overflow-x-hidden relative">
      <Navbar
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenBooking={() => onOpenBooking()}
      />

      <main
        className={`flex-grow w-full max-w-full overflow-x-hidden ${
          currentPage === "home" ? "pt-0" : "pt-[88px] sm:pt-[96px] lg:pt-[104px]"
        }`}
      >
        {children(helpers)}
      </main>

      <SiteDirectory />

      <Footer onNavigate={onNavigate} onOpenBooking={() => onOpenBooking()} />

      {bookingModalOpen && (
        <Suspense fallback={null}>
          <AppointmentModal
            isOpen={bookingModalOpen}
            onClose={() => setBookingModalOpen(false)}
            initialServiceId={bookingInitialData?.serviceId}
          />
        </Suspense>
      )}

      <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 z-30 flex items-center gap-1.5 sm:gap-2 max-w-[calc(100vw-1.5rem)]">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="p-2.5 sm:p-3 bg-[#1A2530] text-slate-200 hover:text-white hover:bg-[#243342] border border-slate-600 shadow-2xl transition-all cursor-pointer shrink-0"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D2A8]" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => onOpenBooking()}
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-[11px] sm:text-xs uppercase font-mono tracking-wider transition-all shadow-2xl cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          <span>MAKE APPOINTMENT</span>
        </button>

        <a
          href="tel:6045403999"
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1A2530] hover:bg-[#243342] text-white border border-slate-600 shadow-2xl transition-all font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider shrink-0 whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D2A8]" />
          <span className="text-white">Call (604) 540-3999</span>
        </a>
      </div>
    </div>
  );
};
