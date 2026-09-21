import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BlogsPage } from "@/pages/BlogsPage";
import { breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/blogs/")({
  head: () =>
    buildHead({
      title: "Flooring Notes from the Job Site | Ironclad Commercial Floors",
      description:
        "Field write-ups from our installers: moisture testing in a wet coastal climate, choosing between polished concrete and epoxy, and running overnight installs.",
      path: "/blogs",
      schemas: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blogs" },
        ]),
      ],
    }),
  component: Blogs,
});

function Blogs() {
  return (
    <SiteLayout page="blogs">
      {({ onNavigate, onOpenBooking }) => (
        <BlogsPage onNavigate={onNavigate} />
      )}
    </SiteLayout>
  );
}
