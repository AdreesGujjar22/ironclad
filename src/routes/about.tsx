import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";
import { LOCAL_BUSINESS_SCHEMA, breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: "About Our Vancouver Flooring Crew | Ironclad Commercial Floors",
      description:
        "Red Seal installers working out of 783 E 60th Ave since day one. Meet the team behind 650+ finished floors in offices, warehouses and restaurants across Metro Vancouver.",
      path: "/about",
      schemas: [
        LOCAL_BUSINESS_SCHEMA,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
    }),
  component: About,
});

function About() {
  return (
    <SiteLayout page="about">
      {({ onNavigate, onOpenBooking }) => (
        <AboutPage
          onNavigate={onNavigate}
          onOpenBooking={() => onOpenBooking()}
        />
      )}
    </SiteLayout>
  );
}
