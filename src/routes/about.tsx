import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "../pages/AboutPage";
import { SiteLayout } from "../components/SiteLayout";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: "About Ironclad Commercial Floors | Vancouver, BC",
      description:
        "Meet the Vancouver crew behind Ironclad Commercial Floors: certified installers, overnight scheduling and 650+ finished commercial floors across Metro Vancouver.",
      path: "/about",
      breadcrumbs: [{ name: "About", path: "/about" }],
    }),
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => (
        <AboutPage onNavigate={onNavigate} onOpenBooking={() => onOpenBooking()} />
      )}
    </SiteLayout>
  );
}
