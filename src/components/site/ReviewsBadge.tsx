import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { business } from "@/lib/site";
import { googleProfileQuery } from "@/lib/google-profile";
import { GoogleWordmark } from "./GoogleWordmark";

/** Floating bottom-left badge linking to the Google reviews. */
export function ReviewsBadge() {
  const { data } = useQuery(googleProfileQuery);
  const count = data?.reviewCount ?? null;
  const rating = data?.rating ?? null;
  return (
    <a
      href={data?.mapsUri ?? business.gmb}
      target="_blank"
      rel="noreferrer"
      aria-label="Read our reviews on Google"
      className="fixed bottom-5 left-4 z-40 flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 text-paper-foreground shadow-deep transition-transform hover:-translate-y-0.5 sm:left-6 sm:px-5"
    >
      {rating !== null && (
        <span className="hidden items-center gap-1 border-r border-paper-muted/20 pr-3 text-sm font-semibold sm:flex">
          {rating.toFixed(1)} <Star className="h-4 w-4 fill-g-yellow text-g-yellow" />
        </span>
      )}
      <span className="text-sm">
        {count !== null ? `${count} review${count === 1 ? "" : "s"} on` : "Read our reviews on"}
      </span>
      <GoogleWordmark className="text-xl" />
    </a>
  );
}
