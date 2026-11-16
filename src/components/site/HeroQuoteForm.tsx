import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { business, categories, servicesIn } from "@/lib/site";
import { buildQuoteMailto, quickQuoteSchema, quickQuoteToContact } from "@/lib/contact";

const fieldCls = "h-12 rounded-full border-black/15 bg-white px-5 text-paper-foreground placeholder:text-paper-muted focus-visible:ring-emerald-600";
const labelCls = "mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800";

/** Compact free-quote form shown in the home page hero. */
export function HeroQuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = quickQuoteSchema.safeParse({ service: "", ...Object.fromEntries(new FormData(e.currentTarget)) });
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
    window.location.href = buildQuoteMailto(business.email, quickQuoteToContact(parsed.data));
    toast.success("Opening your email app with the request filled in.");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="card-luxe relative overflow-hidden rounded-3xl p-6 before:absolute before:inset-x-10 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-emerald-500/80 before:to-transparent sm:p-8" aria-labelledby="hero-quote-title">
      <h2 id="hero-quote-title" className="text-xl font-semibold text-paper-foreground sm:text-2xl">Reach out for a <span className="text-emerald-700">free quote!</span></h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="hq-name" className={labelCls}>Name</label>
          <Input id="hq-name" name="name" autoComplete="name" placeholder="Your name" maxLength={100} className={fieldCls} />
          {errors["name"] && <p className="mt-1.5 text-xs text-destructive">{errors["name"]}</p>}
        </div>
        <div>
          <label htmlFor="hq-phone" className={labelCls}>Phone</label>
          <Input id="hq-phone" name="phone" type="tel" autoComplete="tel" placeholder="(604) 555-0123" maxLength={30} className={fieldCls} />
          {errors["phone"] && <p className="mt-1.5 text-xs text-destructive">{errors["phone"]}</p>}
        </div>
        <div>
          <label htmlFor="hq-email" className={labelCls}>Email</label>
          <Input id="hq-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={255} className={fieldCls} />
          {errors["email"] && <p className="mt-1.5 text-xs text-destructive">{errors["email"]}</p>}
        </div>
        <div>
          <label htmlFor="hq-service" className={labelCls}>Service type</label>
          <select
            id="hq-service"
            name="service"
            defaultValue=""
            className="h-12 w-full cursor-pointer rounded-full border border-black/15 bg-white px-5 text-sm text-paper-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-600"
          >
            <option value="" disabled>Select service type</option>
            {categories.map((c) => (
              <optgroup key={c.key} label={c.name}>
                {servicesIn(c.key).map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
              </optgroup>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {errors["service"] && <p className="mt-1.5 text-xs text-destructive">{errors["service"]}</p>}
        </div>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-paper-muted">
        By submitting this form you agree that {business.name} may contact you by phone, text or email about your request.
      </p>
      <Button type="submit" variant="hero" size="xl" className="mt-5 w-full">
        Get my free quote <ArrowUpRight />
      </Button>
    </form>
  );
}
