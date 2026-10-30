import { createFileRoute } from "@tanstack/react-router";

import { LocationsPage } from "../../pages/LocationsPage";
import { SiteLayout } from "../../components/SiteLayout";
import { STATIC_SEO, staticDescription, staticTitle } from "../../data/seoContent";
import { buildHead } from "../../lib/seo";

export const Route = createFileRoute("/locations/")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.locations),
      description: staticDescription(STATIC_SEO.locations),
      path: "/locations",
      breadcrumbs: [{ name: "Service Areas", path: "/locations" }],
    }),
  component: LocationsRoute,
});

function LocationsRoute() {
  return (
    <SiteLayout>
      {({ onNavigate }) => (
        <LocationsPage onNavigate={onNavigate} />
      )}
    </SiteLayout>
  );
}
