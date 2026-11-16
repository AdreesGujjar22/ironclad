import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/ironclad-logo.png.asset.json";
import { areas, business, categories, services } from "@/lib/site";
import { areaSlug } from "@/lib/urls";

const linkCls = "text-muted-foreground transition-colors hover:text-primary-glow";
const viewAllCls = "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:underline";

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden border-t border-border bg-surface">
      <div className="grid-lines absolute inset-0 opacity-50" />
      <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logo.url} alt={`${business.name} logo`} className="h-14 w-auto" width={1729} height={370} loading="lazy" decoding="async" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Ironclad Commercial Floors is a commercial flooring contractor in Vancouver, BC — epoxy and concrete, vinyl, tile and carpet, plus installation, repair and floor prep across Metro Vancouver.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span className="text-muted-foreground">{business.address}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={business.phoneHref} className={linkCls}>{business.phone}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`mailto:${business.email}`} className={`break-all ${linkCls}`}>{business.email}</a></li>
              <li className="flex gap-3"><ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={business.gmb} target="_blank" rel="noopener noreferrer" className={linkCls}>Google Business Profile</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span className="text-muted-foreground">{business.hours}</span></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Ironclad" },
                { to: "/services", label: "Flooring Services" },
                { to: "/service-areas", label: "Metro Vancouver Areas" },
                { to: "/contact", label: "Free Flooring Quote" },
              ].map((l) => (
                <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5">Commercial Flooring Services</p>
            <ul className="space-y-3 text-sm">
              {categories.map((c) => (
                <li key={c.key}><Link to="/services" hash={c.key} className={linkCls}>{c.name}</Link></li>
              ))}
            </ul>
            <Link to="/services" className={viewAllCls}>All {services.length} commercial flooring services <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5">Flooring Service Areas</p>
            <ul className="space-y-3 text-sm">
              {areas.slice(0, 5).map((a) => (
                <li key={a.slug}><Link to="/$slug" params={{ slug: areaSlug(a.slug) }} className={linkCls}>Flooring {a.slug === "vancouver" ? "South Vancouver" : a.name}</Link></li>
              ))}
            </ul>
            <Link to="/service-areas" className={viewAllCls}>All {areas.length} Metro Vancouver areas <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="font-mono tracking-[0.2em]">BUILT TO BEAR THE LOAD</p>
        </div>
      </div>
    </footer>
  );
}
