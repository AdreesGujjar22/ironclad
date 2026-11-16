import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Truck, Clock, Building2 } from "lucide-react";
import skylineImg from "@/assets/vancouver-skyline.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { CtaBand } from "@/components/site/CtaBand";
import { areas, business, categories, servicesIn } from "@/lib/site";
import { faqLd, pageHead } from "@/lib/seo";
import { pageMeta } from "@/lib/seo-meta";
import { areasIndexFaqs } from "@/lib/seo-content";
import { FaqBlock } from "@/components/site/FaqBlock";
import { areaSlug } from "@/lib/urls";

export const Route = createFileRoute("/service-areas/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      title: pageMeta.areas.title,
      description: pageMeta.areas.description,
      path: "/service-areas",
      jsonLd: [faqLd(areasIndexFaqs)],
      crumbs: [{ name: "Service Areas", path: "/service-areas" }],
    }),
  component: ServiceAreas,
});

const reach = [
  { icon: Truck, title: "Crews that travel", text: "Fully equipped trucks dispatched from our South Vancouver shop." },
  { icon: Clock, title: "Around-the-clock", text: "Night, weekend and phased installs scheduled around your building's hours." },
  { icon: Building2, title: "Multi-site projects", text: "Retail, healthcare and institutional roll-outs handled by one team." },
];

function ServiceAreas() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title={<>Commercial Flooring Across <span className="text-gradient">Metro Vancouver, BC</span></>}
        text="Commercial flooring across Metro Vancouver, BC: from Gastown heritage buildings to Port Coquitlam industrial parks, Ironclad Commercial Floors crews work every day from our South Vancouver head office."
        image={skylineImg}
        imageAlt="Vancouver skyline — Ironclad Commercial Floors serves commercial buildings across Metro Vancouver"
        crumb={[{ label: "Service Areas" }]}
      />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Where We Work"
            title={<>{areas.length} communities, <span className="text-gradient">one standard</span></>}
            text="Choose your area to see the buildings we work in, popular services and local details."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 90} className="h-full">
                <TiltCard className="group h-full rounded-3xl">
                  <Link
                    to="/$slug"
                    params={{ slug: areaSlug(a.slug) }}
                    className="card-luxe flex h-full flex-col overflow-hidden rounded-3xl transition-colors hover:border-primary/50"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={a.image} alt={`Commercial flooring in ${a.name}, BC — Ironclad Commercial Floors`} loading="lazy" decoding="async" width={1600} height={1072} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      {a.hq && <span className="bg-gradient-primary absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-primary-foreground">HQ</span>}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        <MapPin className="h-3 w-3 text-primary" /> {a.region}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">{a.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.short}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow">
                        Commercial flooring in {a.name} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Beyond the Map"
              title={<>Outside these areas? <span className="text-gradient">Just ask.</span></>}
              text={`Based at ${business.addressLines[0]} in Vancouver, we also take on projects elsewhere in the Lower Mainland and BC. Call us with your site location and timeline.`}
            />
            <div className="mt-10 space-y-5">
              {reach.map((r, i) => (
                <Reveal key={r.title} delay={i * 100}>
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                      <r.icon className="h-5 w-5 text-primary-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal dir="right">
            <div className="card-luxe rounded-3xl p-8">
              <p className="eyebrow">Services in every area</p>
              <ul className="mt-6 divide-y divide-border">
                {categories.map((c) => (
                  <li key={c.key}>
                    <Link to="/services" hash={c.key} className="group flex items-center gap-4 py-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 font-display text-xl text-primary-glow">{c.letter}</span>
                      <span className="flex-1">
                        <span className="block font-semibold transition-colors group-hover:text-primary-glow">{c.name}</span>
                        <span className="text-xs text-muted-foreground">{servicesIn(c.key).length} services</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary-glow" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqBlock faqs={areasIndexFaqs} title={<>Metro Vancouver flooring <span className="text-gradient">FAQs</span></>} exclude="/service-areas" />
      <CtaBand title={<>Flooring project anywhere in <span className="text-gradient">Metro Vancouver?</span></>} text="Tell us the address and timeline and we will book a free on-site estimate in your part of Metro Vancouver." />
    </>
  );
}
