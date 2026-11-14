import { createFileRoute } from "@tanstack/react-router";
import type { GoogleProfile } from "@/lib/google-profile";

// One fixed lookup for this business only (no visitor input), cached so Google is
// called at most a few times a day per server instance.
const QUERY = "Ironclad Commercial Floors, 783 E 60th Ave, Vancouver, BC V5X 2A5";
const TTL_MS = 6 * 60 * 60 * 1000;
let cache: { at: number; data: GoogleProfile } | null = null;

type PlacesResponse = {
  places?: {
    displayName?: { text?: string };
    formattedAddress?: string;
    rating?: number;
    userRatingCount?: number;
    googleMapsUri?: string;
    nationalPhoneNumber?: string;
    currentOpeningHours?: { openNow?: boolean };
  }[];
};

export const Route = createFileRoute("/api/public/google-profile")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const headers = { "Content-Type": "application/json", "Cache-Control": "public, max-age=1800, s-maxage=21600" };
        if (cache && Date.now() - cache.at < TTL_MS) return new Response(JSON.stringify(cache.data), { headers });

        const lovableKey = process.env["LOVABLE_API_KEY"];
        const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
        if (!lovableKey || !mapsKey) {
          return new Response(JSON.stringify({ error: "Google listing not connected" }), { status: 503, headers: { "Cache-Control": "no-store" } });
        }

        const res = await fetch("https://connector-gateway.lovable.dev/google_maps/places/v1/places:searchText", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": mapsKey,
            "Content-Type": "application/json",
            "X-Goog-FieldMask":
              "places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.googleMapsUri,places.nationalPhoneNumber,places.currentOpeningHours.openNow",
          },
          body: JSON.stringify({ textQuery: QUERY, maxResultCount: 1 }),
        });
        if (!res.ok) {
          console.error(`Google listing lookup failed [${res.status}]: ${await res.text()}`);
          return new Response(JSON.stringify({ error: "Lookup failed" }), { status: 502, headers: { "Cache-Control": "no-store" } });
        }
        const place = ((await res.json()) as PlacesResponse).places?.[0];
        // Never show another business's rating if Google returns a different listing.
        if (!place?.displayName?.text?.toLowerCase().includes("ironclad")) {
          return new Response(JSON.stringify({ error: "Listing not found" }), { status: 404, headers: { "Cache-Control": "no-store" } });
        }
        const data: GoogleProfile = {
          name: place.displayName.text,
          address: place.formattedAddress ?? "",
          rating: place.rating ?? null,
          reviewCount: place.userRatingCount ?? null,
          mapsUri: place.googleMapsUri ?? null,
          openNow: place.currentOpeningHours?.openNow ?? null,
          phone: place.nationalPhoneNumber ?? null,
        };
        cache = { at: Date.now(), data };
        return new Response(JSON.stringify(data), { headers });
      },
    },
  },
});
