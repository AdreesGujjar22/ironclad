import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { areas, categories, navLinks, services, servicesIn } from "@/lib/site";

const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });
const leaf = (path: string) => router().matchRoutes(path).at(-1)?.routeId;

describe("Site pages", () => {
  it.each(["/services", "/service-areas", "/contact", "/about"])("has a page at %s", (path) => {
    expect(leaf(path)).not.toBe(rootRouteId);
  });

  it("has no gallery page", () => {
    expect(leaf("/gallery")).toBe(rootRouteId);
    expect(navLinks.map((l) => l.to)).not.toContain("/gallery");
  });
});

describe("Services", () => {
  it("lists the 24 services in 4 groups of 6", () => {
    expect(services).toHaveLength(24);
    expect(categories.map((c) => c.name)).toEqual(["Concrete & Epoxy", "Resilient & Vinyl", "Tile & Carpet", "Sectors & Repairs"]);
    categories.forEach((c) => expect(servicesIn(c.key)).toHaveLength(6));
  });

  it("gives every service its own page and unique address", () => {
    expect(new Set(services.map((s) => s.slug)).size).toBe(24);
    services.forEach((s) => expect(leaf(`/services/${s.slug}`)).toBe("/services/$slug"));
  });
});

describe("Service areas", () => {
  it("covers the 11 Greater Vancouver areas with Vancouver as HQ", () => {
    expect(areas.map((a) => a.name)).toEqual([
      "Vancouver", "Burnaby", "New Westminster", "Coquitlam", "Port Coquitlam",
      "Downtown Vancouver", "Gastown", "Yaletown", "Mount Pleasant", "Metrotown", "Queensborough",
    ]);
    expect(areas.filter((a) => a.hq).map((a) => a.name)).toEqual(["Vancouver"]);
  });

  it("links each area only to real services and areas", () => {
    const slugs = new Set(services.map((s) => s.slug));
    const areaSlugs = new Set(areas.map((a) => a.slug));
    areas.forEach((a) => {
      a.featuredServices.forEach((s) => expect(slugs.has(s)).toBe(true));
      a.nearby.forEach((n) => expect(areaSlugs.has(n)).toBe(true));
      expect(leaf(`/service-areas/${a.slug}`)).toBe("/service-areas/$slug");
    });
  });
});
