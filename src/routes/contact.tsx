import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "../pages/ContactPage";
import { SiteLayout } from "../components/SiteLayout";
import { buildHead } from "../lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: "Contact Ironclad Commercial Floors Vancouver BC",
      description:
        "Get a site visit, moisture scan and fixed quote for your Vancouver facility. Call (604) 540-3999 or send project details and we reply the same working day.",
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
