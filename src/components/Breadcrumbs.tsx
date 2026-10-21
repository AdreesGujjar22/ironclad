import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  page?: string;
  param?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (page: string, param?: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate, className = '' }) => {
  return (
    <nav 
      aria-label="Breadcrumbs" 
      className={`w-full bg-[#F8FAFC] border-b border-slate-200/90 text-slate-600 py-3 px-4 sm:px-6 shadow-xs ${className}`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center flex-wrap gap-1.5 sm:gap-2.5 text-xs font-medium">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#276749] hover:border-[#3B945E]/50 hover:bg-emerald-50/40 transition-all cursor-pointer shrink-0 shadow-xs group"
          title="Home"
        >
          <Home className="w-3.5 h-3.5 text-[#3B945E] group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-slate-800">Home</span>
        </button>

        {items.map((item, index) => {
          const isLast = index === items.length - 1 || item.current;

          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast ? (
                <span 
                  className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 text-[#1E5638] font-bold border border-emerald-200/80 truncate max-w-[240px] sm:max-w-[400px] md:max-w-none text-xs"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => item.page && onNavigate(item.page, item.param)}
                  className="px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 hover:bg-white hover:border hover:border-slate-200/80 hover:shadow-xs transition-all cursor-pointer truncate max-w-[200px] sm:max-w-none"
                >
                  {item.name}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
