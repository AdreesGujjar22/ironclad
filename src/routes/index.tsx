import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { ArrowUpRight, Phone, Star, Quote } from "lucide-react";
import heroVideo from "@/assets/videos/hero_floor_glide.mp4.asset.json";
import heroPoster from "@/assets/hero-lobby.jpg";
import crewImg from "@/assets/about-crew.jpg";
import healthImg from "@/assets/gallery-healthcare.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TiltCard } from "@/components/site/TiltCard";
import { Counter } from "@/components/site/Counter";
import { CtaBand } from "@/components/site/CtaBand";
import { business, categories, services, servicesIn, whyChoose, reviews, stats } from "@/lib/site";
import { faqLd, pageHead } from "@/lib/seo";
import { homeMeta } from "@/lib/seo-meta";
import { homeFaqs as faqs } from "@/lib/seo-content";
import { HeroQuoteForm } from "@/components/site/HeroQuoteForm";
import { LinkedText } from "@/components/site/LinkedText";
import { serviceSlug } from "@/lib/urls";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      title: homeMeta.title,
      description: homeMeta.description,
      path: "/",
      jsonLd: [faqLd(faqs)],
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <ServicesSection />
      <LocalCopy />
      <WhyChoose />
      <Reviews />
      <Faqs />
      <CtaBand />
    </>
  );
}

function Hero() {
  const layer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (layer.current) layer.current.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0)`;
    };
    const onScroll = () => {
      if (layer.current) layer.current.style.opacity = String(Math.max(0, 1 - window.scrollY / 700));
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="noise relative flex min-h-screen items-center overflow-hidden pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="bg-overlay-side absolute inset-0" />
      <div className="bg-overlay absolute inset-0" />
      <div className="grid-lines absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-24 lg:grid-cols-12">
        <div ref={layer} className="lg:col-span-7" style={{ transition: "transform 0.4s ease-out" }}>
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" /> Vancouver · Burnaby · New Westminster · Tri-Cities
            </p>
            <h1 className="text-[2.2rem] font-semibold leading-[1.05] sm:text-5xl xl:text-6xl">
              Commercial Flooring Experts in <span className="text-gradient">Vancouver, BC</span> Across Metro Vancouver
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Floors forged for the heaviest days. Ironclad Commercial Floors is Metro Vancouver's heavy-duty commercial, institutional and industrial flooring specialist — from subfloor prep and epoxy to luxury vinyl, sheet vinyl, carpet and tile, with commercial flooring installation and repair in Vancouver on your schedule.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">Explore Commercial Flooring Services <ArrowUpRight /></Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">Get a Free Flooring Estimate</Link>
              </Button>
            </div>
            <a href={business.phoneHref} className="mt-8 inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary-glow">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40"><Phone className="h-4 w-4 text-primary" /></span>
              24/7 dispatch · <span className="font-semibold text-foreground">{business.phone}</span>
            </a>
          </Reveal>
        </div>

        <Reveal dir="right" delay={150} className="lg:col-span-5">
          <HeroQuoteForm />
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-muted-foreground">
        SCROLL
        <span className="h-12 w-px overflow-hidden bg-border">
          <span className="block h-1/2 w-full animate-[scan_1.8s_ease-in-out_infinite] bg-primary" />
        </span>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Commercial Epoxy", "Polished Concrete", "Luxury Vinyl", "Sheet Vinyl", "Rubber Flooring", "Carpet Tile", "Porcelain Tile", "Quarry Tile", "Self-Levelling", "Crack Stitching", "Warehouses", "Restaurants", "Healthcare", "Education"];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-xl text-foreground/85 md:text-2xl">
            {t}
            <span className="h-2 w-2 rotate-45 bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function AboutPreview() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal dir="left" className="relative">
          <TiltCard className="rounded-3xl" max={6}>
            <img src={crewImg} alt="Ironclad Commercial Floors crew installing plank flooring in Vancouver, BC" loading="lazy" decoding="async" width={1600} height={1072} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-deep" />
          </TiltCard>
          <div className="glass absolute -bottom-8 -right-4 w-56 rounded-2xl p-5 md:-right-10">
            <p className="font-display text-4xl font-semibold text-primary-glow">24/7</p>
            <p className="mt-1 text-sm text-muted-foreground">Crews scheduled around your operating hours</p>
          </div>
          <img src={healthImg} alt="Healthcare flooring installed by Ironclad in a Vancouver clinic" loading="lazy" decoding="async" width={400} height={300} className="absolute -left-6 -top-8 hidden w-40 rotate-[-6deg] rounded-2xl border border-border object-cover shadow-deep md:block" />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About Ironclad"
            title={<>Craft you can stand on. <span className="text-gradient">Every square foot.</span></>}
            text="Ironclad was founded on one simple belief: commercial floors fail from the bottom up. That's why every project starts below the surface — testing, grinding and levelling — before our installers lay a single tile, plank or base."
          />
          <Reveal delay={150}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Institutional & industrial focus", "Certified, insured installers", "Phased, after-hours installs", "Clear itemized proposals"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm"><Icons.CheckCircle2 className="h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-10">
              <Link to="/about">About Ironclad Commercial Floors <ArrowUpRight /></Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative px-6 py-28">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title={<>{services.length} commercial flooring services <span className="text-gradient">in Vancouver</span></>}
            text="Four specialties, each delivered by crews with the right tools, materials and prep for commercial-grade performance."
          />
          <Reveal>
            <Button asChild variant="glass" size="xl"><Link to="/services">All Commercial Flooring Services <ArrowUpRight /></Link></Button>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.key} delay={i * 120} className="h-full">
              <TiltCard className="group h-full rounded-3xl">
                <article className="card-luxe flex h-full flex-col overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={c.image} alt={`${c.name} commercial flooring in Vancouver, BC`} loading="lazy" decoding="async" width={1600} height={1072} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                    <span className="glass absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full font-display text-lg text-primary-glow">{c.letter}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold">{c.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                    <Link to="/services" hash={c.key} className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary-glow hover:underline">
                      View {servicesIn(c.key).length} {c.name} flooring services <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-28">
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading align="center" eyebrow="Why Choose Us" title={<>The Ironclad <span className="text-gradient">difference</span></>} text="What facility managers, contractors and owners count on when they call us." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[w.icon] ?? Icons.Check;
            return (
              <Reveal key={w.title} delay={i * 90}>
                <TiltCard className="h-full rounded-3xl">
                  <div className="card-luxe group h-full rounded-3xl p-8 transition-colors hover:border-primary/40">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary-glow transition-transform group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-border p-8 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gradient md:text-5xl"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Customer Reviews" title={<>Trusted on the <span className="text-gradient">toughest sites</span></>} />
          <Reveal>
            <a href={business.gmb} target="_blank" rel="noreferrer" className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-colors hover:border-primary/50">
              <div className="flex text-primary-glow">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <span className="text-sm">Read our Google reviews <ArrowUpRight className="ml-1 inline h-4 w-4" /></span>
            </a>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 100} dir={i % 2 ? "right" : "left"}>
              <TiltCard className="h-full rounded-3xl">
                <figure className="card-luxe relative h-full rounded-3xl p-8">
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
                  <div className="flex text-primary-glow">{Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
                  <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground/90">"{r.text}"</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-primary-foreground">
                      {r.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{r.name}</span>
                      <span className="block text-xs text-muted-foreground">{r.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="relative bg-surface px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="FAQs" title={<>Commercial flooring in Vancouver: <span className="text-gradient">your questions</span></>} text="Still curious? Our estimators are a phone call away, day or night." />
          <Reveal delay={100}>
            <Button asChild variant="hero" size="xl" className="mt-8"><a href={business.phoneHref}><Phone /> Call {business.phone}</a></Button>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" dir="right">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="card-luxe rounded-2xl border px-6">
                <AccordionTrigger className="py-5 text-left font-display text-base hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground"><LinkedText text={f.a} exclude="/" cta={{ label: "Request a free commercial flooring quote in Vancouver", to: "/contact" }} /></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function LocalCopy() {
  const link = "font-medium text-primary-glow underline decoration-primary/40 underline-offset-4";
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <Reveal dir="left">
          <p className="eyebrow mb-5 flex items-center gap-3"><span className="h-px w-10 bg-primary" />Installation in Vancouver</p>
          <h2 className="text-3xl font-semibold leading-[1.1] md:text-4xl">Commercial flooring installation <span className="text-gradient">in Vancouver</span></h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            From a single tenant suite to a multi-floor fit-out, our crews handle <Link to="/$slug" params={{ slug: serviceSlug("commercial-flooring-installation") }} className={link}>commercial flooring installation in Vancouver</Link> from slab to handover. We test moisture, grind and level the substrate, then install luxury vinyl, sheet vinyl, carpet tile, rubber, porcelain tile or epoxy with clean transitions and tight seams.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Night, weekend and phased schedules keep offices, clinics, schools and restaurants open while we work, and one crew lead means one schedule and one warranty for the whole floor package.
          </p>
        </Reveal>
        <Reveal dir="right">
          <p className="eyebrow mb-5 flex items-center gap-3"><span className="h-px w-10 bg-primary" />Repair in Vancouver</p>
          <h2 className="text-3xl font-semibold leading-[1.1] md:text-4xl">Commercial flooring repair <span className="text-gradient">in Vancouver</span></h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Lifting vinyl, failed seams, cracked tile, spalled joints and worn coatings do not always mean a new floor. Our <Link to="/$slug" params={{ slug: serviceSlug("commercial-flooring-repair") }} className={link}>commercial flooring repair in Vancouver</Link> finds the root cause first, whether moisture, movement or adhesive, so the fix lasts.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            When a floor is truly finished, we manage <Link to="/$slug" params={{ slug: serviceSlug("commercial-floor-replacement") }} className={link}>full floor replacement</Link> in phases. We serve <Link to="/service-areas" className={link}>Vancouver, Burnaby, New Westminster, Coquitlam and Port Coquitlam</Link> with free on-site estimates.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
