import { describe, expect, it } from "vitest";
import { quickQuoteSchema, quickQuoteToContact } from "@/lib/contact";

const ok = { name: "Sam", phone: "604 555 0123", email: "sam@example.com", service: "Commercial Epoxy Flooring" };

describe("home page quick quote form", () => {
  it("accepts name, phone, email and service", () => {
    expect(quickQuoteSchema.safeParse(ok).success).toBe(true);
  });
  it("requires a phone number", () => {
    expect(quickQuoteSchema.safeParse({ ...ok, phone: "" }).success).toBe(false);
  });
  it("requires a service type", () => {
    expect(quickQuoteSchema.safeParse({ ...ok, service: "" }).success).toBe(false);
  });
  it("rejects an invalid email", () => {
    expect(quickQuoteSchema.safeParse({ ...ok, email: "nope" }).success).toBe(false);
  });
  it("puts the chosen service in the emailed message", () => {
    expect(quickQuoteToContact(ok).message).toContain("Commercial Epoxy Flooring");
  });
});
