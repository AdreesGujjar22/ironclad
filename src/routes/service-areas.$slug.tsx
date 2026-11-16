import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { areaSlugs } from "@/lib/urls";

// Legacy address /service-areas/<old-slug>: permanent (301) redirect to the new root-level URL.
export const Route = createFileRoute("/service-areas/$slug")({
  staticData: { sitemap: false },
  beforeLoad: ({ params }) => {
    const to = areaSlugs[params.slug];
    if (!to) throw notFound();
    throw redirect({ to: "/$slug", params: { slug: to }, statusCode: 301 });
  },
});
