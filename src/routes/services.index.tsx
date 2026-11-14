import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import epoxyImg from "@/assets/service-epoxy.jpg";
import { categories, services, servicesIn } from "@/lib/site";
import { faqLd, pageHead } from "@/lib/seo";
import { pageMeta } from "@/lib/seo-meta";
import { servicesIndexFaqs } from "@/lib/seo-content";
import { FaqBlock } from "@/components/site/FaqBlock";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      title: pageMeta.services.title,
      description: pageMeta.services.description,
      path: "/services",
      jsonLd: [faqLd(servicesIndexFaqs)],
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Commercial Flooring Services in <span className="text-gradient">Vancouver, BC</span></>}
        text="24 specialized services across concrete and epoxy, resilient and vinyl, tile and carpet, and sector work and repairs — each installed over a properly prepared substrate."
        image={epoxyImg}
        crumb={[{ label: "Services" }]}
      />

      <nav aria-label="Service categories" className="sticky top-[68px] z-30 border-y border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3">
          {categories.map((c) => (
            <a
              key={c.key}
              href={`#${c.key}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary-glow"
            >
              <span className="font-mono text-xs text-primary-glow">{c.letter}</span> {c.name}
            </a>
          ))}
        </div>
      </nav>

      {categories.map((c, ci) => (
        <section key={c.key} id={c.key} className={ci % 2 ? "scroll-mt-36 bg-surface px-6 py-24" : "scroll-mt-36 px-6 py-24"}>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="flex items-start gap-6">
                <span className="font-display text-7xl font-semibold leading-none text-gradient md:text-8xl" aria-hidden="true">{c.letter}</span>
                <SectionHeading eyebrow={`${servicesIn(c.key).length} services`} title={c.name} text={c.blurb} />
              </div>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesIn(c.key).map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
                  <ServiceCard service={s} index={services.indexOf(s)} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold leading-[1.1] md:text-4xl">Every floor type, <span className="text-gradient">one Vancouver contractor</span></h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Choose from concrete and epoxy systems, resilient vinyl and rubber, tile and carpet, and sector floors for warehouses and kitchens. Our <Link to="/services/$slug" params={{ slug: "commercial-flooring-installation" }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring installation in Vancouver</Link> bundles several finishes into one schedule, while our <Link to="/services/$slug" params={{ slug: "commercial-flooring-repair" }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring repair in Vancouver</Link> fixes damaged areas without replacing the whole floor.
          </p>
        </div>
      </section>

      <section className="px-6 pt-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-muted-foreground">
            Not sure which system fits your space?{" "}
            <Link to="/contact" className="inline-flex items-center gap-1 font-semibold text-primary-glow hover:underline">
              Book a free site assessment <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>
      <FaqBlock faqs={servicesIndexFaqs} title={<>Flooring services in Vancouver <span className="text-gradient">FAQs</span></>} tone="surface" exclude="/services" />
      <CtaBand />
    </>
  );
}
