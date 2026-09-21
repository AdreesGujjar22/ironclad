import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LocationDetailPage } from "@/pages/LocationDetailPage";
import { LOCATIONS } from "@/data/locationsData";
import { breadcrumbSchema, buildHead, localBusinessForArea } from "@/lib/seo";

const findLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);

export const Route = createFileRoute("/location/$slug")({
  beforeLoad: ({ params }) => {
    if (!findLocation(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const location = findLocation(params.slug);
    if (!location) return {};
    const path = `/location/${location.slug}`;

    return buildHead({
      title: location.metaTitle,
      description: location.metaDescription,
      path,
      schemas: [
        localBusinessForArea(location.name, path),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
          { name: location.name, path },
        ]),
      ],
    });
  },
  component: LocationDetail,
});

function LocationDetail() {
  const { slug } = Route.useParams();
  return (
    <SiteLayout page={`location-${slug}`}>
      {({ onNavigate, onOpenBooking }) => (
        <LocationDetailPage
          slug={slug}
          onNavigate={onNavigate}
          onOpenBooking={onOpenBooking}
        />
      )}
    </SiteLayout>
  );
}
