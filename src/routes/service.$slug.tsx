import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { cleanServiceSlug } from "@/lib/site-navigation";
import { SERVICES } from "@/data/servicesData";
import { breadcrumbSchema, buildHead, serviceSchema } from "@/lib/seo";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { FlooringInstallationPage } from "@/pages/FlooringInstallationPage";
import { FlooringRepairPage } from "@/pages/FlooringRepairPage";
import { FlooringReplacementPage } from "@/pages/FlooringReplacementPage";
import { CommercialEpoxyFlooringPage } from "@/pages/CommercialEpoxyFlooringPage";
import { GarageEpoxyFlooringPage } from "@/pages/GarageEpoxyFlooringPage";

const findService = (raw: string) =>
  SERVICES.find((s) => s.slug === cleanServiceSlug(raw));

export const Route = createFileRoute("/service/$slug")({
  // Unknown slugs return a real 404 instead of silently rendering the first
  // service, which would duplicate the same page across many URLs.
  beforeLoad: ({ params }) => {
    if (!findService(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = findService(params.slug);
    if (!service) return {};
    const path = `/service/${service.slug}`;

    return buildHead({
      title:
        service.metaTitle ?? `${service.name} in Vancouver BC | Ironclad Floors`,
      description: service.metaDescription ?? service.shortDesc,
      path,
      schemas: [
        serviceSchema({
          name: service.name,
          description: service.shortDesc,
          category: service.category,
          path,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]),
      ],
    });
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug: rawSlug } = Route.useParams();
  const slug = cleanServiceSlug(rawSlug);

  return (
    <SiteLayout page={`service-${slug}`}>
      {({ onNavigate, onOpenBooking }) => {
        switch (slug) {
          case "flooring-installation":
            return (
              <FlooringInstallationPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          case "flooring-repair":
            return (
              <FlooringRepairPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          case "flooring-replacement":
            return (
              <FlooringReplacementPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          case "commercial-epoxy-flooring":
            return (
              <CommercialEpoxyFlooringPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          case "garage-epoxy-flooring":
            return (
              <GarageEpoxyFlooringPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          default:
            return (
              <ServiceDetailPage
                slug={slug}
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
        }
      }}
    </SiteLayout>
  );
}
