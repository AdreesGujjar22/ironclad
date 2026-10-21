import { createFileRoute, notFound } from "@tanstack/react-router";

import { LOCATIONS } from "../../data/locationsData";
import { getLocationSeo, pageH1, pageTitle } from "../../data/seoContent";
import { LocationDetailPage } from "../../pages/LocationDetailPage";
import { SiteLayout } from "../../components/SiteLayout";
import { buildHead, faqSchema } from "../../lib/seo";
import { SITE_URL } from "../../lib/routes";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    if (!location) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const seo = getLocationSeo(params.slug);
    if (!seo) {
      return buildHead({
        title: "Commercial Flooring Service Areas in Vancouver | Ironclad",
        description:
          "Commercial flooring service areas in Vancouver, BC. Ironclad Commercial Floors also serves Burnaby, Richmond, Surrey, Coquitlam, Delta and Langley.",
        path: "/locations",
      });
    }
    const path = `/locations/${seo.slug}`;
    return buildHead({
      title: pageTitle(seo),
      description: seo.metaDescription,
      path,
      breadcrumbs: [
        { name: "Service Areas", path: "/locations" },
        { name: seo.shortArea, path },
      ],
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}${path}#localbusiness`,
          name: `Ironclad Commercial Floors - ${seo.shortArea}`,
          description: seo.metaDescription,
          url: `${SITE_URL}${path}`,
          telephone: "+1-604-540-3999",
          priceRange: "$$",
          parentOrganization: { "@id": `${SITE_URL}/#organization` },
          address: {
            "@type": "PostalAddress",
            streetAddress: "783 E 60th Ave",
            addressLocality: "Vancouver",
            addressRegion: "BC",
            postalCode: "V5X 2A5",
            addressCountry: "CA",
          },
          areaServed: { "@type": "Place", name: seo.area },
          knowsAbout: pageH1(seo),
        },
        faqSchema(seo.faqs),
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
