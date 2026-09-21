import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BlogDetailPage } from "@/pages/BlogDetailPage";
import { BLOGS } from "@/data/testimonialsData";
import { articleSchema, breadcrumbSchema, buildHead } from "@/lib/seo";

const findPost = (slug: string) => BLOGS.find((b) => b.slug === slug);

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!findPost(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) return {};
    const path = `/blog/${post.slug}`;

    return buildHead({
      title: post.metaTitle,
      description: post.metaDescription,
      path,
      type: "article",
      schemas: [
        articleSchema({
          headline: post.title,
          description: post.metaDescription,
          path,
          datePublished: post.date,
          author: post.author,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blogs" },
          { name: post.title, path },
        ]),
      ],
    });
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();
  return (
    <SiteLayout page="blog-detail">
      {({ onNavigate, onOpenBooking }) => (
        <BlogDetailPage
          slug={slug}
          onNavigate={onNavigate}
          onOpenBooking={() => onOpenBooking()}
        />
      )}
    </SiteLayout>
  );
}
