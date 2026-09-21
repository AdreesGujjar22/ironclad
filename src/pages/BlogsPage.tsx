import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOGS } from '../data/testimonialsData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface BlogsPageProps {
  onNavigate: (page: string, param?: string) => void;
}

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead
        title="Commercial Flooring Guides & Insights | Ironclad Floors"
        description="Commercial flooring guides for facility managers and contractors in Vancouver. Expert insights on subfloor moisture, polished concrete and epoxy floor systems."
        canonicalPath="/blogs"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Technical Articles', path: '/blogs' }
        ]}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Technical Flooring Guides & Engineering Articles', current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16">
        {/* Hero Header - Split Editorial Layout */}
      <section className="relative bg-[#1A2530] text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          
          {/* Left Editorial Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7 bg-[#3B4D5D] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#88D2A8] text-xs font-mono font-bold uppercase tracking-wider border border-white/20 w-fit">
              <BookOpen className="w-3.5 h-3.5 text-[#88D2A8]" />
              <span>Engineering Insights & Articles</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Commercial Flooring Guides & Technical Insights
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Essential knowledge for Vancouver facility managers, general contractors, and architects planning commercial flooring projects.
            </p>
          </motion.div>

          {/* Right Visual / Editorial Badge Block */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-[#1A2530] p-8 sm:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 space-y-4"
          >
            <div className="p-6 bg-white/5 border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-[#88D2A8] tracking-wider block">
                ASTM & ICRI STANDARDS
              </span>
              <h3 className="text-xl font-bold text-white">
                Field-Tested Best Practices
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Authored by Red Seal certified installers and commercial estimators with 20+ years in Pacific Northwest concrete moisture and epoxy environments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BLOGS.map(blog => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -4 }}
              onClick={() => onNavigate('blog-detail', blog.slug)}
              className="bg-white border border-slate-300 hover:border-[#3B4D5D] cursor-pointer group transition-colors flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="h-52 overflow-hidden relative border-b border-slate-200">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A2530] text-white border border-white/20 px-2.5 py-1 text-[10px] font-mono font-bold uppercase">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#3B945E]" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#3B945E]" /> {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#3B4D5D] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] text-slate-500 font-mono">{blog.author.split(',')[0]}</span>
                <span className="font-bold flex items-center gap-1 text-[#3B4D5D] group-hover:text-[#7D9A87] uppercase tracking-wider text-[11px]">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      </div>
    </div>
  );
};
