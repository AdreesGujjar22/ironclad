import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="px-6 py-24">
      <Reveal dir="zoom" className="noise relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-primary/30 bg-surface px-8 py-16 md:px-16 md:py-20">
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-primary-glow/10 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Free on-site estimate</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Ready for a floor that <span className="text-gradient">outlasts the lease?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Tell us about your space — we'll measure, test the substrate and send a clear, itemized quote.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Request a Free Flooring Quote <ArrowUpRight /></Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={business.phoneHref}><Phone /> {business.phone}</a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
