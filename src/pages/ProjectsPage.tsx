import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, MapPin } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { SEOHead } from '../components/SEOHead';

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export const ProjectsPage: React.FC = () => {
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

      <div className="ic-projects-page">
        {/* Header Banner - TFS Architectural Slate Split/Editorial Block */}
      <section className="ic-projects-hero relative text-white px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `linear-gradient(90deg, rgba(10, 27, 18, .96), rgba(17, 43, 29, .84) 58%, rgba(14, 35, 24, .44)), url(${PROJECTS[0].image})` }}>
        {/* Subtle blueprint grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-6xl mx-auto text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
            <Building2 className="w-3.5 h-3.5 text-[#88D2A8]" />
            <span>Selected Projects</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Commercial Flooring Projects in Vancouver, BC
          </h1>
          <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            Commercial flooring projects across Metro Vancouver.
          </p>

          {/* Filter Pills */}
          <div className="pt-3 flex flex-wrap gap-2 justify-start">
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
      <section className="ic-projects-list max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="ic-project-card bg-white grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch relative overflow-hidden"
            >
              {/* Visual Side with Offset Decorative Frame (TFS Style) */}
              <div className="ic-project-visual lg:col-span-5 relative">
                <div className="relative z-10 h-64 sm:h-[390px] lg:h-full min-h-[300px] overflow-hidden bg-slate-100">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A2530]/90 backdrop-blur-sm border border-slate-600 px-3 py-1 text-xs font-mono font-bold text-white uppercase">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 text-slate-900 border border-slate-300 px-3 py-1.5 text-xs font-mono shadow-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#3B945E]" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Data & Challenge/Solution Side */}
              <div className="ic-project-details lg:col-span-7 space-y-4">
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

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-600">
                    System: <strong className="text-slate-900">{project.serviceUsed}</strong>
                  </span>
                  <a href="tel:6045403999" className="ic-project-cta px-5 py-3 bg-[#3B945E] hover:bg-[#2d784a] text-white font-bold text-xs uppercase tracking-wider transition-all">
                    Call now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      </div>
    </div>
  );
};
