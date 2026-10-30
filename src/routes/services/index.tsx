import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "../../pages/ServicesPage";
import { SiteLayout } from "../../components/SiteLayout";
import { STATIC_SEO, staticDescription, staticTitle } from "../../data/seoContent";
import { buildHead } from "../../lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.services),
      description: staticDescription(STATIC_SEO.services),
      path: "/services",
      breadcrumbs: [{ name: "Services", path: "/services" }],
    }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <SiteLayout>
      {({ onNavigate }) => (
        <ServicesPage onNavigate={onNavigate} />
      )}
    </SiteLayout>
  );
}
