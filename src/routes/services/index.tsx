import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "../../pages/ServicesPage";
import { SiteLayout } from "../../components/SiteLayout";
import { STATIC_SEO, staticTitle } from "../../data/seoContent";
import { buildHead } from "../../lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.services),
      description: STATIC_SEO.services.description,
      path: "/services",
      breadcrumbs: [{ name: "Services", path: "/services" }],
    }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => (
        <ServicesPage onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      )}
    </SiteLayout>
  );
}
