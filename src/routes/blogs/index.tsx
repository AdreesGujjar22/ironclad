import { createFileRoute } from "@tanstack/react-router";

import { BlogsPage } from "../../pages/BlogsPage";
import { SiteLayout } from "../../components/SiteLayout";
import { STATIC_SEO, staticTitle } from "../../data/seoContent";
import { buildHead } from "../../lib/seo";

export const Route = createFileRoute("/blogs/")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.blogs),
      description: STATIC_SEO.blogs.description,
      path: "/blogs",
      breadcrumbs: [{ name: "Articles", path: "/blogs" }],
    }),
  component: BlogsRoute,
});

function BlogsRoute() {
  return (
    <SiteLayout>{({ onNavigate }) => <BlogsPage onNavigate={onNavigate} />}</SiteLayout>
  );
}
