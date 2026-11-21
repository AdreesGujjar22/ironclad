import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { BLOG_PAGE_SIZE, blogPageCount, getBlogPosts } from "@/lib/blog";

export function BlogListing({ page }: { page: number }) {
  const posts = getBlogPosts().slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);
  const pages = blogPageCount();

  return (
    <>
      <section className="noise relative overflow-hidden border-b border-border bg-surface px-6 pb-20 pt-40 md:pb-24 md:pt-48">
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/" className="hover:text-primary-glow">Home</Link><span aria-hidden="true">/</span><span className="text-primary-glow">Blogs</span>
          </nav>
          <p className="eyebrow mb-5 flex items-center gap-3"><span className="h-px w-10 bg-primary" />Ironclad Commercial Floors</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] md:text-7xl">Commercial Flooring <span className="text-gradient">Blogs</span></h1>
        </div>
      </section>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-7">
            <div><p className="eyebrow mb-3">Blogs</p><h2 className="text-2xl font-semibold md:text-4xl">Latest <span className="text-gradient">articles</span></h2></div>
            {posts.length > 0 && <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">Page {page} / {pages}</span>}
          </div>
          {posts.length === 0 ? (
            <div className="card-luxe mt-10 flex min-h-64 flex-col items-center justify-center rounded-3xl px-6 py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary-glow"><BookOpen className="h-6 w-6" /></span>
              <p className="mt-6 text-lg font-semibold">No articles published yet.</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="card-luxe flex h-full flex-col rounded-3xl p-8">
                  {post.publishedAt && <time dateTime={post.publishedAt} className="font-mono text-xs uppercase tracking-[0.15em] text-primary-glow">{formatBlogDate(post.publishedAt)}</time>}
                  <h3 className="mt-5 text-xl font-semibold leading-snug"><Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary-glow">{post.title}</Link></h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:underline">Read article <ArrowUpRight className="h-4 w-4" /></Link>
                </article>
              ))}
            </div>
          )}
          {pages > 1 && (
            <nav aria-label="Blogs pagination" className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
              {page > 1 ? <PageLink page={page - 1} label="Previous" direction="previous" /> : <span />}
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Page {page} of {pages}</span>
              {page < pages ? <PageLink page={page + 1} label="Next" direction="next" /> : <span />}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}

function PageLink({ page, label, direction }: { page: number; label: string; direction: "previous" | "next" }) {
  const className = "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary-glow";
  const content = <>{direction === "previous" && <ArrowLeft className="h-4 w-4" />}{label}{direction === "next" && <ArrowRight className="h-4 w-4" />}</>;
  return page === 1 ? <Link to="/blog" className={className}>{content}</Link> : <Link to="/blog/page/$page" params={{ page: String(page) }} className={className}>{content}</Link>;
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
