import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import crewImg from "@/assets/about-crew.jpg";
import lobbyImg from "@/assets/hero-lobby.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { CtaBand } from "@/components/site/CtaBand";
import { faqLd, pageHead } from "@/lib/seo";
import { pageMeta } from "@/lib/seo-meta";
import { aboutFaqs } from "@/lib/seo-content";
import { FaqBlock } from "@/components/site/FaqBlock";
import { serviceSlug } from "@/lib/urls";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      title: pageMeta.about.title,
      description: pageMeta.about.description,
      path: "/about",
      jsonLd: [faqLd(aboutFaqs)],
      crumbs: [{ name: "About Us", path: "/about" }],
    }),
  component: About,
});

const values = [
  { title: "Below the surface first", text: "Every floor begins with moisture, flatness and bond testing — the work most people never see." },
  { title: "Respect for operations", text: "We plan around your hours, tenants and patients so the building keeps working." },
  { title: "Craft that shows", text: "Tight seams, true lines and clean corners are our signature on every job." },
  { title: "Straight talk", text: "Honest assessments, itemized quotes and no surprise extras." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>About Our Commercial Flooring Company in <span className="text-gradient">Vancouver, BC</span></>}
        text="Ironclad Commercial Floors is a Vancouver commercial flooring company specializing in installation and repair for offices, schools, clinics, retail and industrial spaces across Metro Vancouver."
        image={lobbyImg}
        imageAlt="Commercial lobby floor installed by Ironclad Commercial Floors in Vancouver, BC"
        crumb={[{ label: "About Us" }]}
      />
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={<>Floors that carry <span className="text-gradient">real weight</span></>}
              text="Ironclad started with a crew of installers who were tired of seeing beautiful floors fail within a year because the slab underneath was never properly prepared. Today we bring that same discipline to schools, clinics, offices, retail and industrial facilities across Greater Vancouver."
            />
            <Reveal delay={120}>
              <ul className="mt-8 space-y-4">
                {["Commercial, institutional & industrial specialists", "Epoxy, concrete, vinyl, rubber, carpet & tile", "Night, weekend and phased scheduling", "Fully licensed, insured and WorkSafeBC covered"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" /> {t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal dir="right">
            <TiltCard className="rounded-3xl" max={6}>
              <img src={crewImg} alt="Ironclad Commercial Floors crew installing commercial flooring in Vancouver, BC" loading="lazy" decoding="async" width={1600} height={1072} className="w-full rounded-3xl object-cover shadow-deep" />
            </TiltCard>
          </Reveal>
        </div>
      </section>
      <section className="bg-surface px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="What We Stand For" title={<>Our <span className="text-gradient">values</span></>} />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <TiltCard className="h-full rounded-3xl">
                  <div className="card-luxe h-full rounded-3xl p-8">
                    <p className="font-mono text-xs tracking-[0.3em] text-primary-glow">0{i + 1}</p>
                    <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <Reveal dir="left">
            <h2 className="text-3xl font-semibold leading-[1.1] md:text-4xl">Built from the <span className="text-gradient">subfloor up</span></h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Ironclad Commercial Floors is a Vancouver flooring company working from 783 E 60th Ave. Our estimators and installers know Vancouver buildings: strata rules in the West End, freight elevator bookings in Downtown towers, and heritage floors in Gastown.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Because we install and repair floors every week, we see what actually fails in Metro Vancouver's damp climate, and we build moisture testing and levelling into every proposal.
            </p>
          </Reveal>
          <Reveal dir="right">
            <h2 className="text-3xl font-semibold leading-[1.1] md:text-4xl">One team for installation <span className="text-gradient">and repair</span></h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Whether you need <Link to="/$slug" params={{ slug: serviceSlug("commercial-flooring-installation") }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">commercial flooring installation in Vancouver</Link> for a new suite or <Link to="/$slug" params={{ slug: serviceSlug("commercial-flooring-repair") }} className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">flooring repair</Link> for an existing one, the same crews handle both.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We serve <Link to="/service-areas" className="font-medium text-primary-glow underline decoration-primary/40 underline-offset-4">Vancouver and communities across Metro Vancouver</Link> and answer calls day and night.
            </p>
          </Reveal>
        </div>
      </section>
      <FaqBlock faqs={aboutFaqs} title={<>Vancouver flooring company <span className="text-gradient">FAQs</span></>} tone="surface" exclude="/about" />
      <CtaBand title={<>Work with a Vancouver flooring team <span className="text-gradient">that stays accountable</span></>} text="Book a free site visit and meet the crew who will install or repair your commercial floor." />
    </>
  );
}
