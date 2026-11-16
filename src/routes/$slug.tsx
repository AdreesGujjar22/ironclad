import { createFileRoute, notFound } from "@tanstack/react-router";
import { areas } from "@/lib/site";
import { faqLd, pageHead, providerLd, serviceLd } from "@/lib/seo";
import { areaSeo, serviceSeo } from "@/lib/seo-meta";
import { areaFaqs, serviceFaqs } from "@/lib/seo-content";
import { areaUrl, resolvePage, serviceUrl } from "@/lib/urls";
import { ServicePage } from "@/components/pages/ServicePage";
import { AreaPage } from "@/components/pages/AreaPage";

// Root-level pages: /commercial-epoxy-flooring-vancouver, /commercial-flooring-contractor-burnaby, ...
export const Route = createFileRoute("/$slug")({
  // The sitemap lists these pages explicitly (see sitemap.xml route), not this dynamic route.
  staticData: { sitemap: false },
  loader: ({ params }) => {
    const page = resolvePage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return pageHead({ title: "Page not found | Ironclad Commercial Floors", description: "This page could not be found.", path: `/${params.slug}` });
    }
    if (loaderData.kind === "service") {
      const s = loaderData.service;
      const seo = serviceSeo(s.slug);
      const path = serviceUrl(s.slug);
      return pageHead({
        title: seo?.title ?? `${s.name} Vancouver | Ironclad Commercial Floors`,
        description: seo?.description ?? s.short,
        path,
        crumbs: [{ name: "Services", path: "/services" }, { name: s.name, path }],
        jsonLd: [serviceLd(s.name, s.short, areas.map((a) => `${a.name}, BC`), path), faqLd(serviceFaqs(s.slug, s.faqs))],
      });
    }
    const a = loaderData.area;
    const seo = areaSeo(a.slug);
    const path = areaUrl(a.slug);
    return pageHead({
      title: seo?.title ?? `Flooring ${a.name} | Ironclad Commercial Floors`,
      description: seo?.description ?? a.short,
      path,
      crumbs: [{ name: "Service Areas", path: "/service-areas" }, { name: a.name, path }],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Commercial flooring",
          name: `Commercial flooring in ${a.name}`,
          url: `${path}`,
          provider: providerLd,
          areaServed: { "@type": "Place", name: `${a.name}, BC` },
        },
        faqLd(areaFaqs(a.slug, a.faqs)),
      ],
    });
  },
  component: Page,
});

function Page() {
  const data = Route.useLoaderData();
  return data.kind === "service" ? <ServicePage s={data.service} /> : <AreaPage a={data.area} />;
}
