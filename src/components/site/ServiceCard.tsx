import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getCategory, type Service } from "@/lib/site";
import { TiltCard } from "./TiltCard";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <TiltCard className="group h-full rounded-3xl">
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="card-luxe flex h-full flex-col overflow-hidden rounded-3xl transition-colors hover:border-primary/50"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={service.image}
            alt={`${service.name} in a commercial building`}
            loading="lazy"
            width={1600}
            height={1072}
            className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] tracking-[0.25em] text-primary-glow">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(40px)" }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{getCategory(service.category).name}</p>
          <h3 className="mt-2 text-xl font-semibold">{service.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
          <span className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary-glow">
            Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
