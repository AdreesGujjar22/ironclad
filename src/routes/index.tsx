import { createFileRoute } from "@tanstack/react-router";

import { HomePage, HOME_FAQS } from "../pages/HomePage";
import { SiteLayout } from "../components/SiteLayout";
import { STATIC_SEO, staticTitle } from "../data/seoContent";
import { buildHead, faqSchema, ORGANIZATION_SCHEMA } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: staticTitle(STATIC_SEO.home),
      description: STATIC_SEO.home.description,
      path: "/",
      schemas: [ORGANIZATION_SCHEMA, faqSchema(HOME_FAQS)],
    }),
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <SiteLayout>
      {({ onNavigate }) => (
        <HomePage onNavigate={onNavigate} />
      )}
    </SiteLayout>
  );
}
