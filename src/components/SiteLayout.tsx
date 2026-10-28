import React, { Suspense, lazy, type ReactNode } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContactMenu } from "./FloatingContactMenu";
import { getPathForRoute, pageKeyFromPath } from "../lib/routes";

export interface PageHelpers {
  onNavigate: (page: string, param?: string) => void;
}

interface SiteLayoutProps {
  children: (helpers: PageHelpers) => ReactNode;
}

/**
 * Shared site shell with navigation, footer, and call controls.
 * Page content is rendered by the individual file routes so that every URL
 * returns unique, fully formed HTML on first response.
 */
export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const currentPage = pageKeyFromPath(pathname);

  const onNavigate = (page: string, param?: string) => {
    const to = getPathForRoute(page, param);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    navigate({ to });
  };

  const helpers: PageHelpers = { onNavigate };

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-slate-900 flex flex-col font-sans selection:bg-[#3B945E] selection:text-white w-full max-w-full overflow-x-hidden relative">
      <Navbar
        currentPage={currentPage}
        onNavigate={onNavigate}
      />

      <main
        className={`flex-grow w-full max-w-full overflow-x-hidden ${
          currentPage === "home" ? "pt-0" : "pt-[96px]"
        }`}
      >
        {children(helpers)}
      </main>

      <Footer onNavigate={onNavigate} />

      <a
        href="https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read 100+ Google reviews"
        className="fixed bottom-5 left-3 sm:bottom-7 sm:left-7 z-[110] inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 shadow-[0_6px_18px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4285F4]"
      >
        <span className="whitespace-nowrap text-xs font-medium text-slate-900">100+ reviews on</span>
        <span aria-hidden="true" className="whitespace-nowrap text-[15px] font-bold tracking-tight">
          <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
        </span>
      </a>
      <FloatingContactMenu />
    </div>
  );
};
