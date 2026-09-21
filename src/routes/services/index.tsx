import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "../../pages/ServicesPage";
import { SiteLayout } from "../../components/SiteLayout";
import { buildHead } from "../../lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    buildHead({
      title: "Commercial Flooring Services in Vancouver, BC",
      description:
        "Epoxy coatings, polished concrete, carpet tile, luxury vinyl, repairs and full replacements for Vancouver businesses, scheduled around your operating hours.",
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
