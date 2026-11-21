import { createFileRoute } from "@tanstack/react-router";
import { BlogListing } from "@/components/pages/BlogListing";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  head: () => pageHead({
    title: "Commercial Flooring Blogs | Ironclad Commercial Floors",
    description: "The commercial flooring blogs from Ironclad Commercial Floors in Vancouver, BC.",
    path: "/blog",
    crumbs: [{ name: "Blogs", path: "/blog" }],
  }),
  component: () => <BlogListing page={1} />,
});
