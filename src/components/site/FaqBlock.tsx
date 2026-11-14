import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LinkedText } from "./LinkedText";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Standalone FAQ section (heading + accordion). Pair with faqLd() in the route head. */
export function FaqBlock({
  faqs,
  title,
  exclude,
  tone = "plain",
}: {
  faqs: { q: string; a: string }[];
  title: React.ReactNode;
  exclude?: string;
  tone?: "plain" | "surface";
}) {
  return (
    <section className={tone === "surface" ? "bg-surface px-6 py-28" : "px-6 py-28"}>
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="FAQs" title={title} />
        </div>
        <Reveal className="lg:col-span-7" dir="right">
          <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="card-luxe rounded-2xl border px-6">
                <AccordionTrigger className="py-5 text-left font-display text-base hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  <LinkedText text={f.a} exclude={exclude} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
