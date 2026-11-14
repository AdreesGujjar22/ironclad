import { useQuery } from "@tanstack/react-query";
import { Clock, ExternalLink, Navigation, Phone, Star } from "lucide-react";
import { business } from "@/lib/site";
import { googleProfileQuery } from "@/lib/google-profile";
import { GoogleWordmark } from "./GoogleWordmark";
import { Reveal } from "./Reveal";

const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.address)}`;

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? "fill-g-yellow text-g-yellow" : "text-paper-muted/40"}`} />
      ))}
    </span>
  );
}

/** Google Business Profile card over the map, filled with live listing data when available. */
export function GmbSection() {
  const { data } = useQuery(googleProfileQuery);
  const mapsHref = data?.mapsUri ?? business.gmb;
  const phone = data?.phone ?? business.phone;

  return (
    <section className="px-6 pb-24" aria-labelledby="gmb-heading">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border shadow-deep">
        <iframe
          title="Ironclad Commercial Floors on Google Maps"
          src={business.mapEmbed}
          className="block h-[520px] w-full grayscale-[0.6] invert-[0.9] hue-rotate-180 md:h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-x-4 top-4 rounded-2xl bg-paper p-5 text-paper-foreground shadow-deep sm:right-auto sm:w-[22rem] md:left-6 md:top-6">
          <p className="flex items-center gap-2 text-xs text-paper-muted">
            <GoogleWordmark className="text-sm" /> Business Profile
          </p>
          <h2 id="gmb-heading" className="mt-2 font-sans text-lg font-bold uppercase leading-tight tracking-wide">
            {data?.name ?? business.name}
          </h2>
          <p className="mt-1 text-sm text-paper-muted">{data?.address || business.address}</p>

          {data?.rating != null && (
            <a href={mapsHref} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm hover:underline">
              <span className="font-semibold">{data.rating.toFixed(1)}</span>
              <Stars rating={data.rating} />
              {data.reviewCount != null && <span className="text-g-blue">({data.reviewCount})</span>}
              <span className="sr-only">stars on Google</span>
            </a>
          )}

          <ul className="mt-3 space-y-1.5 text-sm">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-paper-muted" />
              {data?.openNow != null ? (
                <span className={data.openNow ? "font-semibold text-g-green" : "font-semibold text-g-red"}>{data.openNow ? "Open now" : "Closed now"}</span>
              ) : (
                <span>{business.hours}</span>
              )}
              <span className="text-paper-muted">· {business.hoursDetail}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-paper-muted" />
              <a href={business.phoneHref} className="hover:underline">{phone}</a>
            </li>
          </ul>

          <div className="mt-4 flex items-center gap-3">
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-g-blue px-5 text-sm font-semibold text-paper transition-[filter] hover:brightness-110"
            >
              <ExternalLink className="h-4 w-4" /> Open in Maps
            </a>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Get directions"
              title="Directions"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-paper-muted/10 text-g-blue transition-colors hover:bg-paper-muted/20"
            >
              <Navigation className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
