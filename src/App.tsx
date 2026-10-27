import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Phone, ArrowUp } from 'lucide-react';
import { FloatingContactMenu } from './components/FloatingContactMenu';

// Code split secondary pages for mobile performance and bundle size.
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const LocationsPage = lazy(() => import('./pages/LocationsPage').then(m => ({ default: m.LocationsPage })));
const LocationDetailPage = lazy(() => import('./pages/LocationDetailPage').then(m => ({ default: m.LocationDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F8F9FA]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-[#3B945E]/30 border-t-[#3B945E] rounded-full animate-spin" />
        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Loading...</span>
      </div>
    </div>
  );
}

function cleanServiceSlug(slug: string): string {
  return slug.replace(/-vancouver-bc$/, '');
}

function getPathForRoute(page: string, param?: string): string {
  switch (page) {
    case 'home':
    case '':
      return '/';
    case 'about':
    case 'about-ironclad-commercial-floors-vancouver-bc':
      return '/about';
    case 'services':
      return '/services';
    case 'flooring-installation-vancouver-bc':
    case 'flooring-installation':
      return '/services/flooring-installation';
    case 'flooring-repair-vancouver-bc':
    case 'flooring-repair':
      return '/services/flooring-repair';
    case 'flooring-replacement-vancouver-bc':
    case 'flooring-replacement':
      return '/services/flooring-replacement';
    case 'commercial-epoxy-flooring-vancouver-bc':
    case 'commercial-epoxy-flooring':
      return '/services/commercial-epoxy-flooring';
    case 'garage-epoxy-flooring-vancouver-bc':
    case 'garage-epoxy-flooring':
      return '/services/garage-epoxy-flooring';
    case 'service-detail':
      return param ? `/services/${cleanServiceSlug(param)}` : '/services';
    case 'projects':
      return '/projects';
    case 'blogs':
      return '/blogs';
    case 'blog-detail':
      return param ? `/blogs/${param}` : '/blogs';
    case 'locations':
      return '/locations';
    case 'location-detail':
      return param ? `/locations/${param}` : '/locations';
    case 'contact':
    case 'contact-ironclad-commercial-floors-vancouver-bc':
      return '/contact';
    default:
      return page.startsWith('/') ? page : `/${page}`;
  }
}

function parseCurrentRoute(): { page: string; param?: string } {
  // Check if hash exists from old URLs (e.g. #about) and migrate cleanly
  const hash = window.location.hash.replace(/^#\/?/, '');
  const path = (window.location.pathname || '/').replace(/^\/+/, '').replace(/\/+$/, '');
  
  const rawTarget = hash || path;
  
  if (!rawTarget) {
    return { page: 'home', param: undefined };
  }

  const segments = rawTarget.split('/');

  if (segments.length >= 2) {
    const root = segments[0].toLowerCase();
    const rawParam = segments.slice(1).join('/');
    const param = rawParam.replace(/-vancouver-bc$/, '');
    if (root === 'services' || root === 'service') return { page: 'service-detail', param };
    if (root === 'locations' || root === 'location') return { page: 'location-detail', param: rawParam };
    if (root === 'blogs' || root === 'blog') return { page: 'blog-detail', param: rawParam };
    return { page: root, param };
  }

  const single = segments[0].toLowerCase().replace(/-vancouver-bc$/, '');
  if (single === 'about') {
    return { page: 'about', param: undefined };
  }
  if (single === 'contact') {
    return { page: 'contact', param: undefined };
  }
  if (single === 'services') {
    return { page: 'services', param: undefined };
  }
  if (single === 'projects') {
    return { page: 'projects', param: undefined };
  }
  if (single === 'blogs') {
    return { page: 'blogs', param: undefined };
  }
  if (single === 'locations') {
    return { page: 'locations', param: undefined };
  }
  if (
    single === 'flooring-installation' ||
    single === 'flooring-repair' ||
    single === 'flooring-replacement' ||
    single === 'commercial-epoxy-flooring' ||
    single === 'garage-epoxy-flooring' ||
    single === 'concrete-floor-polishing' ||
    single === 'commercial-luxury-vinyl-flooring' ||
    single === 'carpet-tile-installation' ||
    single === 'commercial-sheet-vinyl-flooring' ||
    single === 'restaurant-flooring-installation' ||
    single === 'warehouse-flooring-installation' ||
    single === 'commercial-concrete-floor-sealing'
  ) {
    return { page: 'service-detail', param: single };
  }

  return { page: single, param: undefined };
}

export function App() {
  const initialRoute = parseCurrentRoute();
  const [currentPage, setCurrentPage] = useState<string>(initialRoute.page);
  const [pageParam, setPageParam] = useState<string | undefined>(initialRoute.param);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Handle browser navigation with clean URL pathnames
  const handleNavigate = (page: string, param?: string) => {
    setCurrentPage(page);
    setPageParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const targetPath = getPathForRoute(page, param);
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState({ page, param }, '', targetPath);
    }
  };

  // Sync state on popstate (browser back/forward) & initial hash cleanup
  useEffect(() => {
    const syncRoute = () => {
      const { page, param } = parseCurrentRoute();
      setCurrentPage(page);
      setPageParam(param);

      // Clean up hash if an older link or anchor was used
      if (window.location.hash) {
        const cleanPath = getPathForRoute(page, param);
        window.history.replaceState({ page, param }, '', cleanPath);
      }
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);

    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
      case '':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
      case 'about-ironclad-commercial-floors-vancouver-bc':
        return <AboutPage onNavigate={handleNavigate}  />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate}  />;
      case 'flooring-installation-vancouver-bc':
      case 'flooring-installation':
        return <ServiceDetailPage slug="flooring-installation" onNavigate={handleNavigate}  />;
      case 'flooring-repair-vancouver-bc':
      case 'flooring-repair':
        return <ServiceDetailPage slug="flooring-repair" onNavigate={handleNavigate}  />;
      case 'flooring-replacement-vancouver-bc':
      case 'flooring-replacement':
        return <ServiceDetailPage slug="flooring-replacement" onNavigate={handleNavigate}  />;
      case 'commercial-epoxy-flooring-vancouver-bc':
      case 'commercial-epoxy-flooring':
        return <ServiceDetailPage slug="commercial-epoxy-flooring" onNavigate={handleNavigate}  />;
      case 'garage-epoxy-flooring-vancouver-bc':
      case 'garage-epoxy-flooring':
      case 'concrete-floor-polishing':
      case 'concrete-floor-polishing-vancouver-bc':
        return <ServiceDetailPage slug="garage-epoxy-flooring" onNavigate={handleNavigate}  />;
      case 'service-detail': {
        const cleanSlug = cleanServiceSlug(pageParam || '');
        if (cleanSlug === 'flooring-installation') {
          return <ServiceDetailPage slug="flooring-installation" onNavigate={handleNavigate}  />;
        }
        if (cleanSlug === 'flooring-repair') {
          return <ServiceDetailPage slug="flooring-repair" onNavigate={handleNavigate}  />;
        }
        if (cleanSlug === 'flooring-replacement') {
          return <ServiceDetailPage slug="flooring-replacement" onNavigate={handleNavigate}  />;
        }
        if (cleanSlug === 'commercial-epoxy-flooring') {
          return <ServiceDetailPage slug="commercial-epoxy-flooring" onNavigate={handleNavigate}  />;
        }
        if (cleanSlug === 'garage-epoxy-flooring') {
          return <ServiceDetailPage slug="garage-epoxy-flooring" onNavigate={handleNavigate}  />;
        }
        return (
          <ServiceDetailPage 
            slug={cleanSlug || 'commercial-epoxy-flooring'} 
            onNavigate={handleNavigate} 
             
          />
        );
      }
      case 'projects':
        return <ProjectsPage />;
      case 'blogs':
        return <BlogsPage onNavigate={handleNavigate} />;
      case 'blog-detail':
        return (
          <BlogDetailPage 
            slug={pageParam || 'commercial-flooring-vancouver-guide'} 
            onNavigate={handleNavigate} 
             
          />
        );
      case 'locations':
        return <LocationsPage onNavigate={handleNavigate}  />;
      case 'location-detail':
        return (
          <LocationDetailPage 
            slug={pageParam || 'vancouver'} 
            onNavigate={handleNavigate} 
             
          />
        );
      case 'contact':
      case 'contact-ironclad-commercial-floors-vancouver-bc':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const pageKey = currentPage + (pageParam ? `/${pageParam}` : '');

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-slate-900 flex flex-col font-sans selection:bg-[#3B945E] selection:text-white w-full max-w-full overflow-x-hidden relative">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        
      />

      {/* Main Routed Page Content with smooth animation */}
      <main className={`flex-grow w-full max-w-full overflow-x-hidden ${
        currentPage === 'home' ? 'pt-0' : 'pt-[94px]'
      }`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pageKey}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="w-full"
          >
            <Suspense fallback={<PageLoadingFallback />}>
              {renderPage()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        onNavigate={handleNavigate}
        
      />

      <div className="fixed bottom-5 left-4 sm:bottom-7 sm:left-7 z-[100] flex items-center gap-2">
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
              className="p-3 rounded-full bg-[#1A2530] text-white border border-slate-600 shadow-xl transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 text-[#88D2A8]" />
            </motion.button>
          )}
        </AnimatePresence>
        <a href="tel:6045403999" className="flex items-center justify-center gap-2 rounded-full px-4 sm:px-5 py-3 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-xl border border-white/20 whitespace-nowrap">
          <Phone className="w-4 h-4" />
          <span>Call now · (604) 540-3999</span>
        </a>
      </div>
      <FloatingContactMenu />
    </div>
  );
}

export default App;
