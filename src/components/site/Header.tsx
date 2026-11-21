import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X, ArrowUpRight, MapPin } from "lucide-react";
import { areas, business, categories, servicesIn } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { serviceSlug, areaSlug } from "@/lib/urls";

const linkCls =
  "relative px-1 py-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full";
const activeCls = "text-primary-glow after:w-full";
const panelCls =
  "invisible absolute top-full z-50 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100";
const mobileLinkCls = "border-b border-border py-4 font-display text-xl";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<"services" | "areas" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const toggle = (s: "services" | "areas") => setSection((cur) => (cur === s ? null : s));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass py-3 shadow-deep" : "bg-transparent py-5",
        )}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
          <Link to="/" className="flex shrink-0 items-center" aria-label={`${business.name} — Home`}>
            <img
              src="/ironclad-logo.png"
              alt={`${business.name} logo`}
              width={1729}
              height={370}
              className={cn("w-auto transition-all duration-500", scrolled ? "h-10 md:h-11" : "h-11 md:h-14")}
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            <Link to="/" className={linkCls} activeProps={{ className: activeCls }} activeOptions={{ exact: true }}>Home</Link>
            <Link to="/about" className={linkCls} activeProps={{ className: activeCls }}>About Us</Link>

            {/* Services mega menu — positioned against the full-width header row */}
            <div className="group">
              <Link to="/services" className={cn(linkCls, "flex items-center gap-1")} activeProps={{ className: activeCls }}>
                Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className={cn(panelCls, "inset-x-6")}>
                <div className="rounded-2xl border border-black/10 bg-paper p-6 text-paper-foreground shadow-deep">
                  <div className="grid grid-cols-4 gap-6">
                    {categories.map((c) => (
                      <div key={c.key}>
                        <p className="flex items-center gap-2 border-b border-black/10 pb-3">
                          <span className="font-display text-2xl leading-none text-emerald-700">{c.letter}</span>
                          <span className="text-sm font-semibold">{c.name}</span>
                        </p>
                        <ul className="mt-3 space-y-1">
                          {servicesIn(c.key).map((s) => (
                            <li key={s.slug}>
                              <Link
                                to="/$slug"
                                params={{ slug: serviceSlug(s.slug) }}
                                className="block rounded-lg px-2 py-1.5 text-sm text-paper-muted transition-colors hover:bg-emerald-100 hover:text-emerald-800"
                                activeProps={{ className: "text-emerald-800" }}
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link to="/services" className="mt-5 flex items-center justify-between rounded-xl border border-emerald-700/30 px-4 py-3 text-sm font-medium text-emerald-800 hover:bg-emerald-100">
                    Explore all 24 commercial flooring services <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link to="/service-areas" className={cn(linkCls, "flex items-center gap-1")} activeProps={{ className: activeCls }}>
                Service Areas <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className={cn(panelCls, "left-1/2 w-[480px] -translate-x-1/2")}>
                <div className="rounded-2xl border border-black/10 bg-paper p-4 text-paper-foreground shadow-deep">
                  <p className="eyebrow px-2 pb-3 !text-emerald-800">Greater Vancouver Coverage</p>
                  <ul className="grid grid-cols-2 gap-1">
                    {areas.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to="/$slug"
                          params={{ slug: areaSlug(a.slug) }}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-paper-muted transition-colors hover:bg-emerald-100 hover:text-emerald-800"
                          activeProps={{ className: "text-emerald-800" }}
                        >
                          <MapPin className="h-3.5 w-3.5 text-emerald-700" /> {a.name}
                          {a.hq && <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800">HQ</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to="/service-areas" className="mt-3 flex items-center justify-between rounded-xl border border-emerald-700/30 px-4 py-3 text-sm font-medium text-emerald-800 hover:bg-emerald-100">
                    All Metro Vancouver service areas <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/blog" className={linkCls} activeProps={{ className: activeCls }}>Blogs</Link>
            <Link to="/contact" className={linkCls} activeProps={{ className: activeCls }}>Contact Us</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="hero" className="hidden h-11 px-5 md:inline-flex">
              <a href={business.phoneHref}><Phone /> {business.phone}</a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer: slides in from the right */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[86vw] max-w-sm flex-col overflow-y-auto border-l border-border bg-surface shadow-deep transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.1,1)] lg:hidden",
          open ? "visible translate-x-0" : "invisible translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <img src="/ironclad-logo.png" alt={`${business.name} logo`} className="h-10 w-auto" width={1729} height={370} />
          <button type="button" onClick={close} className="glass flex h-11 w-11 items-center justify-center rounded-full" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 pt-4" aria-label="Mobile">
          <Link to="/" onClick={close} className={mobileLinkCls}>Home</Link>
          <Link to="/about" onClick={close} className={mobileLinkCls}>About Us</Link>

          <button type="button" onClick={() => toggle("services")} aria-expanded={section === "services"} className={cn(mobileLinkCls, "flex items-center justify-between text-left")}>
            Services <ChevronDown className={cn("h-5 w-5 transition-transform", section === "services" && "rotate-180")} />
          </button>
          {section === "services" && (
            <div className="flex flex-col gap-4 border-b border-border py-4 pl-2">
              <Link to="/services" onClick={close} className="text-sm font-semibold text-primary-glow">All commercial flooring services</Link>
              {categories.map((c) => (
                <div key={c.key}>
                  <p className="eyebrow">{c.name}</p>
                  <ul className="mt-2 space-y-1">
                    {servicesIn(c.key).map((s) => (
                      <li key={s.slug}>
                        <Link to="/$slug" params={{ slug: serviceSlug(s.slug) }} onClick={close} className="block py-1.5 text-sm text-muted-foreground">{s.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <button type="button" onClick={() => toggle("areas")} aria-expanded={section === "areas"} className={cn(mobileLinkCls, "flex items-center justify-between text-left")}>
            Service Areas <ChevronDown className={cn("h-5 w-5 transition-transform", section === "areas" && "rotate-180")} />
          </button>
          {section === "areas" && (
            <div className="flex flex-col gap-1 border-b border-border py-4 pl-2">
              <Link to="/service-areas" onClick={close} className="py-1.5 text-sm font-semibold text-primary-glow">All Metro Vancouver service areas</Link>
              {areas.map((a) => (
                <Link key={a.slug} to="/$slug" params={{ slug: areaSlug(a.slug) }} onClick={close} className="py-1.5 text-sm text-muted-foreground">
                  {a.name}{a.hq ? " (HQ)" : ""}
                </Link>
              ))}
            </div>
          )}

          <Link to="/blog" onClick={close} className={mobileLinkCls}>Blogs</Link>
          <Link to="/contact" onClick={close} className={mobileLinkCls}>Contact Us</Link>
          <Button asChild variant="hero" size="xl" className="mb-8 mt-8">
            <a href={business.phoneHref}><Phone /> {business.phone}</a>
          </Button>
        </nav>
      </aside>
    </>
  );
}
