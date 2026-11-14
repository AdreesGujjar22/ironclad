import { describe, expect, it } from "vitest";
import { autolink } from "@/lib/autolink";
import { areas, faqs, services } from "@/lib/site";

const all = [
  ...services.flatMap((s) => s.faqs.map((f) => ({ page: `/services/${s.slug}`, a: f.a }))),
  ...areas.flatMap((a) => a.faqs.map((f) => ({ page: `/service-areas/${a.slug}`, a: f.a }))),
  ...faqs.map((f) => ({ page: "/", a: f.a })),
];

describe("FAQ internal links", () => {
  it("every FAQ answer links to at least one other page", () => {
    const missing = all.filter(({ page, a }) => !autolink(a, { exclude: page }).some((s) => s.to));
    expect(missing).toEqual([]);
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
