import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "../pages/ProjectsPage";
import { SiteLayout } from "../components/SiteLayout";
import { STATIC_SEO, staticTitle } from "../data/seoContent";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.projects),
      description: STATIC_SEO.projects.description,
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
