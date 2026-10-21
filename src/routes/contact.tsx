import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "../pages/ContactPage";
import { SiteLayout } from "../components/SiteLayout";
import { STATIC_SEO, staticTitle } from "../data/seoContent";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.contact),
      description: STATIC_SEO.contact.description,
      path: "/contact",
      breadcrumbs: [{ name: "Contact", path: "/contact" }],
    }),
  component: ContactRoute,
});

function ContactRoute() {
  return (
    <SiteLayout>{({ onNavigate }) => <ContactPage onNavigate={onNavigate} />}</SiteLayout>
  );
}
