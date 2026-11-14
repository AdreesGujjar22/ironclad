import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Tell us a little about your project").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Short homepage quote form: no message box, phone and service required. */
export const quickQuoteSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter your phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.string().trim().min(1, "Please choose a service").max(60),
});

export type QuickQuoteInput = z.infer<typeof quickQuoteSchema>;

export function quickQuoteToContact(d: QuickQuoteInput): ContactInput {
  return { ...d, company: "", message: `Free quote request for ${d.service}. Please call me back to book a site visit.` };
}

export function buildQuoteMailto(to: string, d: ContactInput) {
  const subject = `Quote request — ${d.company || d.name}`;
  const body = [
    `Name: ${d.name}`,
    d.company ? `Company: ${d.company}` : null,
    `Email: ${d.email}`,
    d.phone ? `Phone: ${d.phone}` : null,
    d.service ? `Service: ${d.service}` : null,
    "",
    d.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
