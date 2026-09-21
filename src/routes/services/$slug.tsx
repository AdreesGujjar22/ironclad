import { createFileRoute, notFound } from "@tanstack/react-router";

import { SERVICES } from "../../data/servicesData";
import { SiteLayout } from "../../components/SiteLayout";
import { buildHead } from "../../lib/seo";
import { ServiceDetailPage } from "../../pages/ServiceDetailPage";
import { FlooringInstallationPage } from "../../pages/FlooringInstallationPage";
import { FlooringRepairPage } from "../../pages/FlooringRepairPage";
import { FlooringReplacementPage } from "../../pages/FlooringReplacementPage";
import { CommercialEpoxyFlooringPage } from "../../pages/CommercialEpoxyFlooringPage";
import { GarageEpoxyFlooringPage } from "../../pages/GarageEpoxyFlooringPage";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) {
      return buildHead({
        title: "Commercial Flooring Services in Vancouver, BC",
        description:
          "Epoxy coatings, polished concrete, carpet tile, luxury vinyl and repairs for Vancouver businesses.",
        path: "/services",
      });
    }
    const path = `/services/${service.slug}`;
    return buildHead({
      title: service.metaTitle || `${service.name} Vancouver | Ironclad Floors`,
      description:
        service.metaDescription ||
        `${service.name} for Vancouver businesses, installed by Ironclad Commercial Floors with night crews and a written warranty.`,
      path,
      breadcrumbs: [
        { name: "Services", path: "/services" },
        { name: service.name, path },
      ],
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription || service.name,
          url: `https://ironcladcommercialfloors.ca${path}`,
          areaServed: {
            "@type": "City",
            name: "Vancouver",
            address: {
              "@type": "PostalAddress",
              addressRegion: "BC",
              addressCountry: "CA",
            },
          },
          provider: {
            "@type": "LocalBusiness",
            name: "Ironclad Commercial Floors",
            telephone: "+1-604-540-3999",
            address: {
              "@type": "PostalAddress",
              streetAddress: "783 E 60th Ave",
              addressLocality: "Vancouver",
              addressRegion: "BC",
              postalCode: "V5X 2A5",
              addressCountry: "CA",
            },
          },
        },
      ],
    });
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useParams();

  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => {
        const props = { onNavigate, onOpenBooking };
        switch (slug) {
          case "flooring-installation":
            return <FlooringInstallationPage {...props} />;
          case "flooring-repair":
            return <FlooringRepairPage {...props} />;
          case "flooring-replacement":
            return <FlooringReplacementPage {...props} />;
          case "commercial-epoxy-flooring":
            return <CommercialEpoxyFlooringPage {...props} />;
          case "garage-epoxy-flooring":
            return <GarageEpoxyFlooringPage {...props} />;
          default:
            return <ServiceDetailPage slug={slug} {...props} />;
        }
      }}
    </SiteLayout>
  );
}
