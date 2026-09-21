import { createFileRoute } from "@tanstack/react-router";

import { BlogsPage } from "../../pages/BlogsPage";
import { SiteLayout } from "../../components/SiteLayout";
import { buildHead } from "../../lib/seo";

export const Route = createFileRoute("/blogs/")({
  head: () =>
    buildHead({
      title: "Commercial Flooring Guides & Articles | Ironclad",
      description:
        "Practical reading for facility managers: choosing coatings, moisture testing, downtime planning and budgeting commercial floor work in Vancouver, BC.",
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
