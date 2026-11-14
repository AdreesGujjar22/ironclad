import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
  crumb: { label: string; to?: string }[];
}) {
  return (
    <section className="noise relative flex min-h-[78vh] items-end overflow-hidden pb-20 pt-40">
      <img src={image} alt="" className="absolute inset-0 h-full w-full scale-105 object-cover" width={1920} height={1080} />
      <div className="bg-overlay-side absolute inset-0" />
      <div className="bg-overlay absolute inset-0" />
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/" className="hover:text-primary-glow">Home</Link>
            {crumb.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary-glow">{c.label}</Link>
                ) : (
                  <span className="text-primary-glow">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <p className="eyebrow mb-5 flex items-center gap-3"><span className="h-px w-10 bg-primary" />{eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
