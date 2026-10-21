import { createFileRoute, notFound } from "@tanstack/react-router";

import { SERVICES } from "../../data/servicesData";
import { getServiceSeo, pageH1, pageTitle } from "../../data/seoContent";
import { SiteLayout } from "../../components/SiteLayout";
import { buildHead, faqSchema } from "../../lib/seo";
import { SITE_URL } from "../../lib/routes";
import { ServiceDetailPage } from "../../pages/ServiceDetailPage";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const seo = getServiceSeo(params.slug);
    if (!seo) {
      return buildHead({
        title: "Commercial Flooring Services in Vancouver, BC | Ironclad",
        description:
          "Commercial flooring services in Vancouver, BC from Ironclad Commercial Floors: installation, repair, replacement, epoxy, polished concrete and vinyl.",
        path: "/services",
      });
    }
    const path = `/services/${seo.slug}`;
    const service = SERVICES.find((s) => s.slug === seo.slug);
    return buildHead({
      title: pageTitle(seo),
      description: seo.metaDescription,
      path,
      breadcrumbs: [
        { name: "Services", path: "/services" },
        { name: seo.keyword, path },
      ],
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}${path}#service`,
          name: pageH1(seo),
          serviceType: service?.name ?? seo.keyword,
          description: seo.metaDescription,
          url: `${SITE_URL}${path}`,
          areaServed: { "@type": "City", name: "Vancouver", address: { "@type": "PostalAddress", addressRegion: "BC", addressCountry: "CA" } },
          provider: { "@id": `${SITE_URL}/#organization` },
        },
        faqSchema(seo.faqs),
      ],
    });
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useParams();
  return (
    <SiteLayout>
      {({ onNavigate, onOpenBooking }) => (
        <ServiceDetailPage slug={slug} onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      )}
    </SiteLayout>
  );
}
