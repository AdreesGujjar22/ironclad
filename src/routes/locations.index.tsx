import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LocationsPage } from "@/pages/LocationsPage";
import { breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/locations/")({
  head: () =>
    buildHead({
      title: "Where We Work: Metro Vancouver Service Areas | Ironclad",
      description:
        "From our Vancouver yard we reach Burnaby, New Westminster, Coquitlam, Port Coquitlam and every neighbourhood between — most sites within 30 minutes of a call.",
      path: "/locations",
      schemas: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
        ]),
      ],
    }),
  component: Locations,
});

function Locations() {
  return (
    <SiteLayout page="locations">
      {({ onNavigate, onOpenBooking }) => (
        <LocationsPage
          onNavigate={onNavigate}
          onOpenBooking={() => onOpenBooking()}
        />
      )}
    </SiteLayout>
  );
}
