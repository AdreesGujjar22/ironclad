import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "../pages/AboutPage";
import { SiteLayout } from "../components/SiteLayout";
import { STATIC_SEO, staticDescription, staticTitle } from "../data/seoContent";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.about),
      description: staticDescription(STATIC_SEO.about),
      path: "/about",
      breadcrumbs: [{ name: "About", path: "/about" }],
    }),
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <SiteLayout>
      {({ onNavigate }) => (
        <AboutPage onNavigate={onNavigate} />
      )}
    </SiteLayout>
  );
}
