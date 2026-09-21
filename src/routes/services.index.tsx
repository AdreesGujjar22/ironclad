import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicesPage } from "@/pages/ServicesPage";
import { breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    buildHead({
      title: "Flooring Services for Vancouver Businesses | Ironclad",
      description:
        "Installation, repair, replacement, polished concrete, epoxy coatings, carpet tile and luxury vinyl — one crew, one warranty, booked around your opening hours.",
      path: "/services",
      schemas: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout page="services">
      {({ onNavigate, onOpenBooking }) => (
        <ServicesPage onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      )}
    </SiteLayout>
  );
}
