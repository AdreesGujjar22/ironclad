import { queryOptions } from "@tanstack/react-query";

/** Live public details for the business's Google listing (rating, reviews count, open status). */
export type GoogleProfile = {
  name: string;
  address: string;
  rating: number | null;
  reviewCount: number | null;
  mapsUri: string | null;
  openNow: boolean | null;
  phone: string | null;
};

export const googleProfileQuery = queryOptions({
  queryKey: ["google-profile"],
  queryFn: async (): Promise<GoogleProfile | null> => {
    const res = await fetch("/api/public/google-profile");
    if (!res.ok) return null;
    return (await res.json()) as GoogleProfile;
  },
  staleTime: 60 * 60 * 1000,
  retry: false,
});
