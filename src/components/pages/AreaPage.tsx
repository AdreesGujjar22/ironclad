import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, CheckCircle2, MapPin, Phone } from "lucide-react";
import { business, categories, getArea, getService, services, servicesIn, type Area, type Service } from "@/lib/site";
import { areaHero, areaSeo } from "@/lib/seo-meta";
import { areaSlug, areaUrl, serviceSlug } from "@/lib/urls";
import { areaExtra, areaFaqs } from "@/lib/seo-content";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand } from "@/components/site/CtaBand";
import { LinkedText } from "@/components/site/LinkedText";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function AreaPage({ a }: { a: Area }) {
  const featured = a.featuredServices.map(getService).filter((s): s is Service => Boolean(s));
  const nearby = a.nearby.map(getArea).filter((n) => n !== undefined);
  const place = a.slug === "vancouver" ? "South Vancouver" : a.name;
  const seo = areaSeo(a.slug);
  const extra = areaExtra[a.slug];
  const faqs = areaFaqs(a.slug, a.faqs);
  return (
    <>
      <PageHero
        eyebrow={a.hq ? `${a.region} · Head Office` : a.region}
        title={seo?.h1 ?? `Commercial Flooring in ${a.name}, BC`}
        text={areaHero(place, a.short)}
        image={a.image}
        imageAlt={`Commercial flooring in ${place}, BC by Ironclad Commercial Floors`}
        crumb={[{ label: "Service Areas", to: "/service-areas" }, { label: a.name }]}
      />

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={`Flooring contractor · ${a.name}`} title={<>Flooring crews in <span className="text-gradient">{place}</span></>} text={a.intro} />
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {a.highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 90}>
                  <div className="card-luxe h-full rounded-2xl p-6">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-semibold">{h.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {extra && (
              <Reveal className="mt-14">
                <h2 className="text-2xl font-semibold md:text-3xl">Flooring installation &amp; repair <span className="text-gradient">in {place}</span></h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{extra.local}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Planning a project? See our{" "}
                  <Link to="/$slug" params={{ slug: serviceSlug("commercial-flooring-installation") }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring installation in {place}</Link>{" "}
                  or{" "}
                  <Link to="/$slug" params={{ slug: serviceSlug("commercial-flooring-repair") }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring repair in {place}</Link>.
                </p>
              </Reveal>
            )}
          </div>
          <Reveal dir="right" className="lg:col-span-5">
            <aside className="glass sticky top-28 rounded-3xl p-8" aria-label={`Working in ${a.name}`}>
              <p className="eyebrow flex items-center gap-2"><Building2 className="h-4 w-4" /> Buildings we floor</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {a.buildingTypes.map((t) => <li key={t} className="rounded-full border border-primary/30 px-3 py-1 text-xs">{t}</li>)}
              </ul>
              <p className="eyebrow mt-8 flex items-center gap-2"><MapPin className="h-4 w-4" /> Dispatched from</p>
              <p className="mt-3 text-sm text-muted-foreground">{business.address}</p>
              <div className="mt-8 flex flex-col gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Free flooring estimate in {place} <ArrowUpRight /></Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <a href={business.phoneHref}><Phone /> {business.phone}</a>
                </Button>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Popular Here" title={<>Top services in <span className="text-gradient">{a.name}</span></>} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
                <ServiceCard service={s} index={services.indexOf(s)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Full Service List" title={<>Everything we offer in <span className="text-gradient">{a.name}</span></>} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.key} className="card-luxe flex flex-col rounded-3xl p-6">
                <p className="flex items-center gap-3">
                  <span className="font-display text-3xl text-gradient">{c.letter}</span>
                  <span className="font-semibold">{c.name}</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                <Link to="/services" hash={c.key} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:underline">
                  View {servicesIn(c.key).length} {c.name} services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="FAQ" title={<>Flooring in {a.name} <span className="text-gradient">FAQs</span></>} />
            <Accordion type="single" collapsible defaultValue="faq-0" className="mt-10 space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="card-luxe rounded-2xl border px-6">
                  <AccordionTrigger className="py-5 text-left font-display text-base hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground"><LinkedText text={f.a} exclude={areaUrl(a.slug)} cta={{ label: `Request a free commercial flooring estimate in ${place}`, to: "/contact" }} /></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <SectionHeading eyebrow="Nearby" title={<>Commercial flooring near <span className="text-gradient">{place}</span></>} />
            <div className="mt-10 grid gap-4">
              {nearby.map((n) => (
                <TiltCard key={n.slug} className="group rounded-2xl" max={4}>
                  <Link to="/$slug" params={{ slug: areaSlug(n.slug) }} className="card-luxe flex items-center gap-5 overflow-hidden rounded-2xl p-3 pr-6 transition-colors hover:border-primary/50">
                    <img src={n.image} alt={`Commercial flooring in ${n.name}, BC`} loading="lazy" decoding="async" width={160} height={110} className="h-20 w-28 rounded-xl object-cover" />
                    <span className="flex-1">
                      <span className="block font-semibold transition-colors group-hover:text-primary-glow">{n.name}</span>
                      <span className="line-clamp-1 text-xs text-muted-foreground">{n.short}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </Link>
                </TiltCard>
              ))}
              <Link to="/service-areas" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:underline">
                All Metro Vancouver service areas <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={<>Need commercial flooring <span className="text-gradient">in {place}?</span></>} text={`Tell us about your ${place} project — we will measure, test the substrate and send a clear, itemized quote for installation or repair.`} />
    </>
  );
}
