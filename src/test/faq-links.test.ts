import { describe, expect, it } from "vitest";
import { autolink } from "@/lib/autolink";
import { areas, faqs, services } from "@/lib/site";
import { areaUrl, serviceUrl } from "@/lib/urls";

const all = [
  ...services.flatMap((s) => s.faqs.map((f) => ({ page: serviceUrl(s.slug), a: f.a }))),
  ...areas.flatMap((a) => a.faqs.map((f) => ({ page: areaUrl(a.slug), a: f.a }))),
  ...faqs.map((f) => ({ page: "/", a: f.a })),
];

describe("FAQ internal links", () => {
  it("uses descriptive anchors only (no bare generic words)", () => {
    const generic = new Set(["estimate", "estimates", "quote", "quotes", "repair", "repairs", "tile", "kitchen", "kitchens", "clinic", "clinics", "joint", "joints", "vancouver", "downtown"]);
    for (const { page, a } of all) {
      for (const seg of autolink(a, { exclude: page }).filter((s) => s.to)) expect(generic.has(seg.text.toLowerCase())).toBe(false);
    }
  });
  it("links a good share of answers by keyword (the rest get the page quote link)", () => {
    const linked = all.filter(({ page, a }) => autolink(a, { exclude: page }).some((s) => s.to));
    expect(linked.length / all.length).toBeGreaterThan(0.3);
  });
  it("never links an answer back to its own page and keeps at most 2 links", () => {
    for (const { page, a } of all) {
      const links = autolink(a, { exclude: page }).filter((s) => s.to);
      expect(links.length).toBeLessThanOrEqual(2);
      expect(links.map((l) => l.to)).not.toContain(page);
    }
  });
  it("keeps the answer text unchanged", () => {
    for (const { page, a } of all) expect(autolink(a, { exclude: page }).map((s) => s.text).join("")).toBe(a);
  });
});
