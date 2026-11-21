import { createFileRoute } from "@tanstack/react-router";
import { BlogListing } from "@/components/pages/BlogListing";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  head: () => pageHead({
    title: "Commercial Flooring Blog | Ironclad Commercial Floors",
    description: "The commercial flooring blog from Ironclad Commercial Floors in Vancouver, BC.",
    path: "/blog",
    crumbs: [{ name: "Blog", path: "/blog" }],
  }),
  component: () => <BlogListing page={1} />,
});
