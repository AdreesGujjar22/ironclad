import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ProjectsPageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenBooking: () => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Warehouse & Logistics', 'Food & Beverage / Restaurant', 'Office & Corporate', 'Automotive & Showroom', 'Healthcare & Institutional', 'Fitness & Sports'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(selectedCategory));

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Commercial Flooring Projects Vancouver | Ironclad Floors"
        description="Case studies of commercial flooring projects in Vancouver, BC. High-gloss polished concrete, food-grade epoxy, office carpet tiles & medical sheet vinyl floors."
        canonicalPath="/projects"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Commercial Projects', path: '/projects' }
        ]}
      />

      {/* Visual Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: 'Commercial Projects Showcase', current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16">
        {/* Header Banner - TFS Architectural Slate Split/Editorial Block */}
      <section className="relative bg-[#3B4D5D] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#2E3C48]">
        {/* Subtle blueprint grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
            <Building2 className="w-3.5 h-3.5 text-[#88D2A8]" />
            <span>Commercial Project Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Our Latest Commercial Flooring Projects
          </h1>
          <p className="text-slate-200 text-xs sm:text-base leading-relaxed max-w-3xl mx-auto">
            Real case studies from high-throughput facilities, corporate headquarters, craft breweries, and hospital cleanrooms across Greater Vancouver.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#7D9A87] text-white border-white/30 shadow-md'
                    : 'bg-black/20 text-slate-200 hover:text-white hover:bg-black/40 border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white border border-slate-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-8 relative"
            >
              {/* Visual Side with Offset Decorative Frame (TFS Style) */}
              <div className="lg:col-span-6 relative">
                <div className="hidden sm:block absolute -top-3 -left-3 w-full h-full bg-[#7D9A87]/30 border border-slate-300 -z-0" />
                <div className="relative z-10 h-72 sm:h-96 overflow-hidden border border-slate-300 shadow-md bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A2530]/90 backdrop-blur-sm border border-slate-600 px-3 py-1 text-xs font-mono font-bold text-white uppercase">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 text-slate-900 border border-slate-300 px-3 py-1.5 text-xs font-mono shadow-sm">
                    📍 {project.location}
                  </div>
                </div>
              </div>

              {/* Data & Challenge/Solution Side */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#7D9A87] mb-1.5 font-bold uppercase tracking-wider">
                    <span>{project.clientType}</span>
                    <span>•</span>
                    <span>Completed {project.year}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#F8F9FA] border border-slate-200">
                    <span className="text-slate-500 block font-mono uppercase text-[10px]">Square Footage</span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base font-mono">{project.sqft}</span>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] border border-slate-200">
                    <span className="text-slate-500 block font-mono uppercase text-[10px]">Turnaround Duration</span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base font-mono">{project.duration}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                  <div className="p-3 bg-[#FFF9F2] border border-amber-200/80">
                    <span className="font-bold text-amber-900 block mb-0.5 uppercase tracking-wide text-[11px]">The Facility Challenge:</span>
                    <p className="text-amber-900 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="p-3 bg-[#F2F7F4] border border-[#7D9A87]/40">
                    <span className="font-bold text-[#2A6E44] block mb-0.5 uppercase tracking-wide text-[11px]">The Ironclad Solution:</span>
                    <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-600">
                    System: <strong className="text-slate-900">{project.serviceUsed}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 bg-[#3B4D5D] hover:bg-[#2E3C48] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer border border-white/20"
                  >
                    Request Similar Fitout
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Embed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Vancouver Project Coordination Center"
          subtitle="All projects managed through our headquarters at 783 E 60th Ave, Vancouver, BC V5X 2A5 Canada."
        />
      </section>
      </div>
    </div>
  );
};
