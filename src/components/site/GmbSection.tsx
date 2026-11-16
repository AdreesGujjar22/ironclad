import { business } from "@/lib/site";
import { Reveal } from "./Reveal";

export function GmbSection() {
  return (
    <section className="px-6 pb-24" aria-label="Google Business Profile location">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border shadow-deep">
        <iframe
          title="Google Maps: IRONCLAD COMMERCIAL FLOORS, 783 E 60th Ave, Vancouver, BC"
          src={business.mapEmbed}
          className="block h-[520px] w-full border-0 md:h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Reveal>
    </section>
  );
}
