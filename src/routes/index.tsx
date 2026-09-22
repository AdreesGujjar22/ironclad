import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HomePage } from "@/pages/HomePage";
import { flooringImages } from "@/assets/flooringImages";
import {
  LOCAL_BUSINESS_SCHEMA,
  WEBSITE_SCHEMA,
  buildHead,
} from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const head = buildHead({
      title: "Commercial Flooring Contractor Vancouver BC | Ironclad Floors",
      description:
        "Ironclad crews polish concrete, pour industrial epoxy and lay carpet tile or vinyl for Vancouver businesses — overnight shifts, free site visits, (604) 540-3999.",
      path: "/",
      schemas: [LOCAL_BUSINESS_SCHEMA, WEBSITE_SCHEMA],
    });

    return {
      ...head,
      links: [
        ...head.links,
        {
          rel: "preload",
          href: flooringImages.flooringHandsInstallation,
          as: "image",
          type: "image/webp",
          fetchpriority: "high",
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <SiteLayout page="home">
      {({ onNavigate, onOpenBooking }) => (
        <HomePage onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      )}
    </SiteLayout>
  );
}
