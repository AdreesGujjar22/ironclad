import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatBlogDate } from "@/components/pages/BlogListing";
import { getBlogPosts } from "@/lib/blog";
import { faqLd, pageHead, providerLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: false },
  loader: ({ params }) => {
    const posts = getBlogPosts();
    const index = posts.findIndex((post) => post.slug === params.slug);
    if (index === -1) throw notFound();
    return { post: posts[index], previous: posts[index + 1], next: posts[index - 1] };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return pageHead({ title: "Page not found | Ironclad Commercial Floors", description: "This page could not be found.", path: `/blog/${params.slug}` });
    const { post } = loaderData;
    const path = `/blog/${post.slug}`;
    const head = pageHead({
      title: post.metaTitle,
      description: post.description,
      path,
      type: "article",
      crumbs: [{ name: "Blogs", path: "/blog" }, { name: post.title, path }],
      jsonLd: [
        { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, ...(post.publishedAt ? { datePublished: post.publishedAt } : {}), ...(post.updatedAt ? { dateModified: post.updatedAt } : {}), mainEntityOfPage: `${SITE_URL}${path}`, publisher: providerLd },
        ...(post.faqs?.length ? [faqLd(post.faqs.map(({ question, answer }) => ({ q: question, a: answer })))] : []),
      ],
    });
    if (post.publishedAt) head.meta.push({ property: "article:published_time", content: post.publishedAt });
    if (post.updatedAt) head.meta.push({ property: "article:modified_time", content: post.updatedAt });
    return head;
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, previous, next } = Route.useLoaderData();
  return (
    <article>
      <header className="noise relative overflow-hidden border-b border-border bg-surface px-6 pb-20 pt-40 md:pt-48">
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <Link to="/" className="hover:text-primary-glow">Home</Link><span aria-hidden="true">/</span><Link to="/blog" className="hover:text-primary-glow">Blogs</Link><span aria-hidden="true">/</span><span className="text-primary-glow">{post.title}</span>
          </nav>
          {post.publishedAt && <time dateTime={post.publishedAt} className="eyebrow">{formatBlogDate(post.publishedAt)}</time>}
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] md:text-6xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{post.description}</p>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {post.introduction.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {post.sections.map((section, index) => <section key={index} className="pt-8"><h2 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">{section.heading}</h2>{section.paragraphs.map((paragraph, i) => <p key={i} className="mt-5 whitespace-pre-line">{paragraph}</p>)}</section>)}
          {post.faqs && post.faqs.length > 0 && <section className="pt-10"><h2 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">FAQs</h2>{post.faqs.map((faq, index) => <div key={index} className="mt-7"><h3 className="text-lg font-semibold text-foreground">{faq.question}</h3><p className="mt-3">{faq.answer}</p></div>)}</section>}
        </div>
        <nav aria-label="Article navigation" className="mt-20 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {previous ? <Link to="/blog/$slug" params={{ slug: previous.slug }} className="card-luxe rounded-2xl p-6 transition-colors hover:border-primary/50"><span className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary-glow"><ArrowLeft className="h-4 w-4" />Previous article</span><span className="mt-3 block font-semibold">{previous.title}</span></Link> : <span />}
          {next && <Link to="/blog/$slug" params={{ slug: next.slug }} className="card-luxe rounded-2xl p-6 text-right transition-colors hover:border-primary/50"><span className="flex items-center justify-end gap-2 text-xs uppercase tracking-wider text-primary-glow">Next article<ArrowRight className="h-4 w-4" /></span><span className="mt-3 block font-semibold">{next.title}</span></Link>}
        </nav>
        <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:underline"><ArrowLeft className="h-4 w-4" />All articles</Link>
      </div>
    </article>
  );
}
