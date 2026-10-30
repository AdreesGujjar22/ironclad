import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "../pages/ProjectsPage";
import { SiteLayout } from "../components/SiteLayout";
import { STATIC_SEO, staticDescription, staticTitle } from "../data/seoContent";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.projects),
      description: staticDescription(STATIC_SEO.projects),
      path: "/projects",
      breadcrumbs: [{ name: "Projects", path: "/projects" }],
    }),
  component: ProjectsRoute,
});

function ProjectsRoute() {
  return (
    <SiteLayout>
      {() => <ProjectsPage />}
    </SiteLayout>
  );
}
