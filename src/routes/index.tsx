import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "../pages/HomePage";
import { SiteLayout } from "../components/SiteLayout";
import { buildHead, ORGANIZATION_SCHEMA } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "Commercial Flooring Contractor Vancouver | Ironclad",
      description:
        "Ironclad Commercial Floors installs epoxy, polished concrete, vinyl and carpet tile for Vancouver businesses. Night crews, 10-year warranty. (604) 540-3999.",
      path: "/",
      schemas: [ORGANIZATION_SCHEMA],
    }),
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => (
        <HomePage onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      )}
    </SiteLayout>
  );
}
