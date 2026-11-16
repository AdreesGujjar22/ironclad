import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { areas, getCategory, getService, services, servicesIn } from "@/lib/site";
import { faqLd, pageHead, serviceLd } from "@/lib/seo";
import { serviceHero, serviceSeo } from "@/lib/seo-meta";
import { serviceExtra, serviceFaqs } from "@/lib/seo-content";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand } from "@/components/site/CtaBand";
import { LinkedText } from "@/components/site/LinkedText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    if (!s) {
      return pageHead({ title: "Service not found | Ironclad Commercial Floors", description: "This service page could not be found.", path: `/services/${params.slug}` });
    }
    const seo = serviceSeo(s.slug);
    return pageHead({
      title: seo?.title ?? `${s.name} Vancouver | Ironclad Commercial Floors`,
      description: seo?.description ?? s.short,
      path: `/services/${s.slug}`,
      crumbs: [{ name: "Services", path: "/services" }, { name: s.name, path: `/services/${s.slug}` }],
      jsonLd: [
        serviceLd(s.name, s.short, areas.map((a) => `${a.name}, BC`), `/services/${s.slug}`),
        faqLd(serviceFaqs(s.slug, s.faqs)),
      ],
    });
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const cat = getCategory(s.category);
  const related = servicesIn(s.category).filter((o) => o.slug !== s.slug).slice(0, 3);
  const seo = serviceSeo(s.slug);
  const extra = serviceExtra[s.slug];
  const faqs = serviceFaqs(s.slug, s.faqs);
  const isInstall = s.slug === "commercial-flooring-installation";
  const isRepair = s.slug === "commercial-flooring-repair";
  return (
    <>
      <PageHero
        eyebrow={cat.name}
        title={seo?.h1 ?? `${s.name} in Vancouver, BC`}
        text={serviceHero(s.name, s.short)}
        image={s.image}
        imageAlt={`${s.name} in Vancouver, BC by Ironclad Commercial Floors`}
        crumb={[{ label: "Services", to: "/services" }, { label: s.name }]}
      />
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={s.headline} text={s.intro} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {s.benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 90}>
                  <TiltCard className="h-full rounded-2xl">
                    <div className="card-luxe h-full rounded-2xl p-6">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                      <h3 className="mt-4 font-semibold">{b.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
            {extra && (
              <Reveal className="mt-14">
                <h2 className="text-2xl font-semibold md:text-3xl">{s.name} <span className="text-gradient">in Vancouver, BC</span></h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{extra.local}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {isInstall ? (
                    <>Floors already failing? See our <Link to="/services/$slug" params={{ slug: "commercial-flooring-repair" }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring repair in Vancouver</Link>.</>
                  ) : isRepair ? (
                    <>Floor beyond repair? See our <Link to="/services/$slug" params={{ slug: "commercial-flooring-installation" }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring installation in Vancouver</Link>.</>
                  ) : (
                    <>Need the whole floor package? See our <Link to="/services/$slug" params={{ slug: "commercial-flooring-installation" }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring installation in Vancouver</Link> or our <Link to="/services/$slug" params={{ slug: "commercial-flooring-repair" }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring repair in Vancouver</Link>.</>
                  )}
                </p>
              </Reveal>
            )}
          </div>
          <Reveal dir="right" className="lg:col-span-5">
            <aside className="glass sticky top-28 rounded-3xl p-8" aria-label={`${s.name} specifications`}>
              <p className="eyebrow">Specifications</p>
              <dl className="mt-6 divide-y divide-border">
                {s.specs.map((sp) => (
                  <div key={sp.label} className="flex justify-between gap-4 py-4 text-sm">
                    <dt className="text-muted-foreground">{sp.label}</dt>
                    <dd className="text-right font-medium">{sp.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="eyebrow mt-8">Ideal For</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.idealFor.map((t) => <li key={t} className="rounded-full border border-primary/30 px-3 py-1 text-xs">{t}</li>)}
              </ul>
              <Link to="/contact" className="bg-gradient-primary mt-8 flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold text-primary-foreground shadow-glow">
                Get a free flooring quote in Vancouver <ArrowUpRight className="h-4 w-4" />
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Process" title={<>From slab to <span className="text-gradient">sign-off</span></>} />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {cat.process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100}>
                <div className="card-luxe h-full rounded-3xl p-7">
                  <p className="font-display text-4xl font-semibold text-gradient">0{i + 1}</p>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="FAQ" title={<>{s.name} in Vancouver <span className="text-gradient">FAQs</span></>} />
            <Accordion type="single" collapsible defaultValue="faq-0" className="mt-10 space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="card-luxe rounded-2xl border px-6">
                  <AccordionTrigger className="py-5 text-left font-display text-base hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground"><LinkedText text={f.a} exclude={`/services/${s.slug}`} /></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <SectionHeading eyebrow="Service Areas" title={<>Available across <span className="text-gradient">Greater Vancouver</span></>} />
            <ul className="mt-10 flex flex-wrap gap-3">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    to="/service-areas/$slug"
                    params={{ slug: a.slug }}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary-glow"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary" /> {s.name} in {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow={cat.name} title="Related services" />
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:underline">
              All commercial flooring services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((o) => (
              <Reveal key={o.slug} className="h-full"><ServiceCard service={o} index={services.indexOf(o)} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
