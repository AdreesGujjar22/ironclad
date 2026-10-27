import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone } from 'lucide-react';
import { BLOGS } from '../data/testimonialsData';
import { MapEmbed } from '../components/MapEmbed';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ImageHero } from '../components/ImageHero';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;

}


export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onNavigate
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

      <div className="ic-blog-detail-page space-y-12 md:space-y-16">
        <ImageHero
          image={blog.image}
          imageAlt=""
          eyebrow={blog.category}
          title={blog.title}
          details={
            <div className="ic-blog-detail-meta">
              <span><User /> {blog.author}</span>
              <span><Calendar /> {blog.date}</span>
              <span><Clock /> {blog.readTime}</span>
            </div>
          }
          aside={
            <aside className="ic-pf-quote-card">
              <p className="ic-pf-card-kicker">Project enquiry</p>
              <h2>Need flooring guidance?</h2>
              <p>Talk with our team about your commercial space.</p>
              <a href="tel:6045403999" className="ic-pf-button ic-pf-button-primary"><Phone /> Call now</a>
            </aside>
          }
        />
        {/* Article Content */}
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8"
      >
        <div className="ic-blog-detail-body bg-white border border-slate-200 p-7 sm:p-10 shadow-lg space-y-6">
          {/* Text Paragraphs */}
          <div className="space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans pt-2">
            {blog.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>


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
