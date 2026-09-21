import { createFileRoute, notFound } from "@tanstack/react-router";

import { BLOGS } from "../../data/testimonialsData";
import { BlogDetailPage } from "../../pages/BlogDetailPage";
import { SiteLayout } from "../../components/SiteLayout";
import { buildHead } from "../../lib/seo";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const blog = BLOGS.find((b) => b.slug === params.slug);
    if (!blog) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const blog = BLOGS.find((b) => b.slug === params.slug);
    if (!blog) {
      return buildHead({
        title: "Commercial Flooring Guides & Articles | Ironclad",
        description: "Commercial flooring articles from Ironclad Commercial Floors, Vancouver.",
        path: "/blogs",
      });
    }
    const path = `/blogs/${blog.slug}`;
    return buildHead({
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      path,
      ogType: "article",
      breadcrumbs: [
        { name: "Articles", path: "/blogs" },
        { name: blog.title, path },
      ],
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: blog.title,
          description: blog.excerpt,
          datePublished: blog.date,
          author: { "@type": "Organization", name: "Ironclad Commercial Floors" },
          publisher: { "@type": "Organization", name: "Ironclad Commercial Floors" },
          mainEntityOfPage: `https://ironcladcommercialfloors.ca${path}`,
        },
      ],
    });
  },
  component: BlogRoute,
});

function BlogRoute() {
  const { slug } = Route.useParams();
  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => (
        <BlogDetailPage slug={slug} onNavigate={onNavigate} onOpenBooking={() => onOpenBooking()} />
      )}
    </SiteLayout>
  );
}
