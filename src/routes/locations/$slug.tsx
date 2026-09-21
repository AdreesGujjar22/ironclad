import { createFileRoute, notFound } from "@tanstack/react-router";

import { LOCATIONS } from "../../data/locationsData";
import { LocationDetailPage } from "../../pages/LocationDetailPage";
import { SiteLayout } from "../../components/SiteLayout";
import { buildHead } from "../../lib/seo";

const SITE = "https://ironcladcommercialfloors.ca";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    if (!location) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    if (!location) {
      return buildHead({
        title: "Service Areas | Commercial Flooring Metro Vancouver",
        description: "Metro Vancouver service areas covered by Ironclad Commercial Floors.",
        path: "/locations",
      });
    }
    const path = `/locations/${location.slug}`;
    return buildHead({
      title: location.metaTitle,
      description: location.metaDescription,
      path,
      breadcrumbs: [
        { name: "Service Areas", path: "/locations" },
        { name: location.name, path },
      ],
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Ironclad Commercial Floors — ${location.name}`,
          description: location.description,
          url: `${SITE}${path}`,
          telephone: "+1-604-540-3999",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "783 E 60th Ave",
            addressLocality: "Vancouver",
            addressRegion: "BC",
            postalCode: "V5X 2A5",
            addressCountry: "CA",
          },
          areaServed: {
            "@type": "Place",
            name: `${location.name}, British Columbia`,
          },
        },
      ],
    });
  },
  component: LocationRoute,
});

function LocationRoute() {
  const { slug } = Route.useParams();
  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => (
        <LocationDetailPage slug={slug} onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      )}
    </SiteLayout>
  );
}
