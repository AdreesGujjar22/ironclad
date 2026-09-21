import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "../pages/ProjectsPage";
import { SiteLayout } from "../components/SiteLayout";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildHead({
      title: "Commercial Flooring Projects | Vancouver Case Studies",
      description:
        "Warehouses, clinics, restaurants and offices across Metro Vancouver: see the floors Ironclad has installed, the timelines we hit and the finishes we used.",
      path: "/projects",
      breadcrumbs: [{ name: "Projects", path: "/projects" }],
    }),
  component: ProjectsRoute,
});

function ProjectsRoute() {
  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => (
        <ProjectsPage onNavigate={onNavigate} onOpenBooking={() => onOpenBooking()} />
      )}
    </SiteLayout>
  );
}
