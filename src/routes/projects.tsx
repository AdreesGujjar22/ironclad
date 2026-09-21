import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildHead({
      title: "Finished Floors: Recent Projects | Ironclad Commercial Floors",
      description:
        "Warehouse slabs, clinic vinyl, restaurant kitchens and office carpet tile — see the scope, square footage and turnaround on jobs we have completed in BC.",
      path: "/projects",
      schemas: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]),
      ],
    }),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout page="projects">
      {({ onNavigate, onOpenBooking }) => (
        <ProjectsPage
          onNavigate={onNavigate}
          onOpenBooking={() => onOpenBooking()}
        />
      )}
    </SiteLayout>
  );
}
