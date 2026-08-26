import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { BLOGS } from '../data/testimonialsData';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface BlogDetailPageProps {
  slug: string;
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

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking
}) => {
  const blog = BLOGS.find(b => b.slug === slug) || BLOGS[0];

  return (
    <div className="bg-[#F8F9FA] text-slate-800 min-h-screen pb-16">
      <SEOHead 
        title={blog.metaTitle} 
        description={blog.metaDescription}
        canonicalPath={`/blog/${blog.slug}`}
        ogImage={blog.image}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Technical Articles', path: '/blogs' },
          { name: blog.title, path: `/blog/${blog.slug}` }
        ]}
        articleData={{
          title: blog.title,
          description: blog.metaDescription,
          image: blog.image,
          authorName: blog.author,
          datePublished: '2026-08-01',
          dateModified: '2026-08-23'
        }}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Technical Articles', page: 'blogs' },
          { name: blog.title, current: true }
        ]}
        onNavigate={onNavigate}
      />

      <div className="space-y-12 md:space-y-16 pt-6 sm:pt-8">
        {/* Article Content */}
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8"
      >
        <div className="bg-white border border-slate-300 p-8 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#2A6E44] px-3 py-1 bg-[#7D9A87]/15 border border-[#7D9A87]/30 inline-block">
              {blog.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 py-3 border-y border-slate-200">
              <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                <User className="w-4 h-4 text-[#3B945E]" /> {blog.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#3B945E]" /> {blog.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#3B945E]" /> {blog.readTime}
              </span>
            </div>
          </div>

          <div className="border border-slate-300 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-72 sm:h-[420px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Text Paragraphs */}
          <div className="space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans pt-2">
            {blog.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* CTA Banner inside Blog */}
        <motion.div 
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="p-8 bg-[#3B4D5D] text-white border border-[#2E3C48] space-y-4 text-center shadow-xl"
        >
          <h3 className="text-xl font-bold text-white">
            Have Questions About Commercial Flooring for Your BC Facility?
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Speak with an Ironclad master flooring engineer at 783 E 60th Ave, Vancouver, or book an on-site moisture test.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#3B945E] hover:bg-[#318051] text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-md cursor-pointer border border-white/20"
            >
              Book Site Survey / Consultation
            </button>
            <a
              href="tel:6045403999"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all border border-white/20 flex items-center gap-2"
            >
              Call (604) 540-3999
            </a>
          </div>
        </motion.div>
      </motion.article>

      {/* Map Embed */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <MapEmbed
          title="Vancouver Engineering Headquarters"
          subtitle="783 E 60th Ave, Vancouver, BC V5X 2A5 Canada. Dispatching technical teams across Greater Vancouver."
        />
      </section>
      </div>
    </div>
  );
};
