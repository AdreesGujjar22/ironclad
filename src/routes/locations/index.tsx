import { createFileRoute } from "@tanstack/react-router";

import { LocationsPage } from "../../pages/LocationsPage";
import { SiteLayout } from "../../components/SiteLayout";
import { buildHead } from "../../lib/seo";

export const Route = createFileRoute("/locations/")({
  head: () =>
    buildHead({
      title: "Service Areas | Commercial Flooring Metro Vancouver",
      description:
        "From Gastown offices to Port Coquitlam warehouses, see every Metro Vancouver neighbourhood and city Ironclad Commercial Floors crews cover, plus response times.",
      path: "/locations",
      breadcrumbs: [{ name: "Service Areas", path: "/locations" }],
    }),
  component: LocationsRoute,
});

function LocationsRoute() {
  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => (
        <LocationsPage onNavigate={onNavigate} onOpenBooking={() => onOpenBooking()} />
      )}
    </SiteLayout>
  );
}
