import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import crewImg from "@/assets/about-crew.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { business, categories, servicesIn } from "@/lib/site";
import { faqLd, pageHead } from "@/lib/seo";
import { pageMeta } from "@/lib/seo-meta";
import { contactFaqs } from "@/lib/seo-content";
import { FaqBlock } from "@/components/site/FaqBlock";
import { buildQuoteMailto, contactSchema } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      title: pageMeta.contact.title,
      description: pageMeta.contact.description,
      path: "/contact",
      jsonLd: [faqLd(contactFaqs)],
    }),
  component: Contact,
});

const details = [
  { icon: Phone, label: "Call", value: business.phone, href: business.phoneHref },
  { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
  { icon: MapPin, label: "Visit", value: business.address, href: business.gmb },
  { icon: Clock, label: "Hours", value: `${business.hours} — ${business.hoursDetail}` },
];

const fieldCls = "h-12 rounded-xl bg-background/40";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = String(i.path[0]);
        if (!next[k]) next[k] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    window.location.href = buildQuoteMailto(business.email, parsed.data);
    toast.success("Opening your email app with the request filled in.");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Contact Commercial Flooring Contractors in <span className="text-gradient">Vancouver, BC</span></>}
        text="Let's talk about your floor. Tell us about the space and the schedule, and we'll book a free site visit, test the substrate and send a clear, itemized quote for installation or repair in Vancouver."
        image={crewImg}
        crumb={[{ label: "Contact Us" }]}
      />

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {details.map((d, i) => {
              const inner = (
                <div className="card-luxe flex items-start gap-5 rounded-3xl p-6 transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                    <d.icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="eyebrow">{d.label}</p>
                    <p className="mt-2 break-words font-semibold">{d.value}</p>
                  </div>
                  {d.href && <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />}
                </div>
              );
              return (
                <Reveal key={d.label} delay={i * 80}>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block hover:[&>div]:border-primary/50"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal dir="right" className="lg:col-span-7">
            <form onSubmit={onSubmit} noValidate className="card-luxe rounded-3xl p-8 md:p-10">
              <p className="eyebrow">Request a free estimate</p>
              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Project details</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field id="name" label="Name *" error={errors["name"]}>
                  <Input id="name" name="name" autoComplete="name" maxLength={100} className={fieldCls} />
                </Field>
                <Field id="company" label="Company">
                  <Input id="company" name="company" autoComplete="organization" maxLength={120} className={fieldCls} />
                </Field>
                <Field id="email" label="Email *" error={errors["email"]}>
                  <Input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={fieldCls} />
                </Field>
                <Field id="phone" label="Phone">
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} className={fieldCls} />
                </Field>
                <Field id="service" label="Service" className="md:col-span-2">
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="h-12 w-full rounded-xl border border-input bg-background/40 px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="">Not sure yet</option>
                    {categories.map((c) => (
                      <optgroup key={c.key} label={c.name}>
                        {servicesIn(c.key).map((s) => (
                          <option key={s.slug} value={s.name}>{s.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </Field>
                <Field id="message" label="About your project *" error={errors["message"]} className="md:col-span-2">
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    placeholder="Building type, approx. square footage, timeline…"
                    className="rounded-xl bg-background/40"
                  />
                </Field>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button type="submit" variant="hero" size="xl">
                  Send Request <ArrowUpRight />
                </Button>
                <p className="text-xs text-muted-foreground">Prefer to talk? Call {business.phone}.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
      <FaqBlock faqs={contactFaqs} title={<>Free flooring quote <span className="text-gradient">FAQs</span></>} tone="surface" exclude="/contact" />
    </>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-sm text-muted-foreground">{label}</Label>
      {children}
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
