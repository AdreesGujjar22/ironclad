import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogListing } from "@/components/pages/BlogListing";
import { blogPageCount } from "@/lib/blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/page/$page")({
  staticData: { sitemap: false },
  loader: ({ params }) => {
    const page = Number(params.page);
    if (!/^[1-9]\d*$/.test(params.page) || page < 2 || page > blogPageCount()) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => loaderData ? pageHead({
    title: `Commercial Flooring Blog — Page ${loaderData} | Ironclad Commercial Floors`,
    description: `Page ${loaderData} of the Ironclad Commercial Floors blog.`,
    path: `/blog/page/${loaderData}`,
    crumbs: [{ name: "Blog", path: "/blog" }, { name: `Page ${loaderData}`, path: `/blog/page/${loaderData}` }],
  }) : pageHead({ title: "Page not found | Ironclad Commercial Floors", description: "This page could not be found.", path: `/blog/page/${params.page}` }),
  component: BlogPage,
});

function BlogPage() {
  return <BlogListing page={Route.useLoaderData()} />;
}
