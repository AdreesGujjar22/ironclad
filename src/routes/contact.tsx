import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactPage } from "@/pages/ContactPage";
import { LOCAL_BUSINESS_SCHEMA, breadcrumbSchema, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: "Book a Site Visit | Ironclad Commercial Floors Vancouver",
      description:
        "Call (604) 540-3999 or send the details of your space. We measure on site, quote in writing and can start after hours so your doors stay open.",
      path: "/contact",
      schemas: [
        LOCAL_BUSINESS_SCHEMA,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout page="contact">
      {({ onNavigate, onOpenBooking }) => (
        <ContactPage onNavigate={onNavigate} />
      )}
    </SiteLayout>
  );
}
