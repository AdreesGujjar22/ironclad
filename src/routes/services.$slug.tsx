import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { serviceSlugs } from "@/lib/urls";

// Legacy address /services/<old-slug>: permanent (301) redirect to the new root-level URL.
export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: false },
  beforeLoad: ({ params }) => {
    const to = serviceSlugs[params.slug];
    if (!to) throw notFound();
    throw redirect({ to: "/$slug", params: { slug: to }, statusCode: 301 });
  },
});
