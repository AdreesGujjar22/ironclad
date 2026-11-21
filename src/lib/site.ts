export { services, categories, getService, getCategory, servicesIn } from "./services";
export type { Service, Category, CategoryKey } from "./services";
export { areas, getArea } from "./areas";
export type { Area } from "./areas";

/** Public site origin used for canonical, og:url, sitemap and schema. Change here when the custom domain goes live. */
export const SITE_URL = "https://ironclad-surface-studio.lovable.app";

export const business = {
  name: "Ironclad Commercial Floors",
  phone: "(604) 540-3999",
  phoneHref: "tel:+16045403999",
  whatsapp: "https://wa.me/16045403999",
  email: "info@ironcladcommercialfloors.ca",
  address: "783 E 60th Ave, Vancouver, BC V5X 2A5, Canada",
  addressLines: ["783 E 60th Ave", "Vancouver, BC V5X 2A5", "Canada"],
  hours: "Open 24 Hours",
  hoursDetail: "Day, night & weekend crews available",
  gmb: "https://maps.app.goo.gl/RvWaqdfoddTgzFLZA",
  /** Google Place ID / CID of the Business Profile. Paste it here to add it to the schema as the profile identifier. */
  googlePlaceId: "",
  mapEmbed:
    "https://www.google.com/maps?q=Ironclad+Commercial+Floors,+783+E+60th+Ave,+Vancouver,+BC+V5X+2A5,+Canada&hl=en&z=15&output=embed",
  tagline:
    "Heavy-duty commercial, institutional and industrial flooring, engineered from the subfloor up.",
};

export const reviews = [
  { name: "Priya Sandhu", role: "Facilities Manager, Healthcare Group", text: "They phased the vinyl tile in our clinic overnight so we never closed a single exam room. Corners and cove base are flawless.", rating: 5 },
  { name: "Tom Lefebvre", role: "General Contractor, Burnaby", text: "Ironclad is our go-to flooring sub. Slab moisture was a problem on our last job — they caught it early and solved it before we lost a day.", rating: 5 },
  { name: "Grace Wong", role: "Office Lead, Tech Studio", text: "6,000 sq ft of carpet tile installed over a weekend. Monday morning the team walked into a brand-new, quiet office.", rating: 5 },
  { name: "Daniel Okafor", role: "Owner, Restaurant Group", text: "Our herringbone LVP looks like real walnut and survives a full dinner service every night. Clean crew, clear quote.", rating: 5 },
  { name: "Melissa Hart", role: "Property Manager, Strata", text: "Responsive, on time and tidy. The amenity room and hallways look premium now — residents keep commenting on it.", rating: 5 },
  { name: "Ravi Bains", role: "Operations, Distribution Centre", text: "They handled our office and break-room floors around a 24-hour warehouse schedule without a single disruption.", rating: 5 },
];

export const faqs = [
  { q: "Do you work after hours or on weekends?", a: "Yes. Our crews run day, night and weekend shifts so your business, school or clinic can stay open while we work." },
  { q: "Which flooring is best for my facility?", a: "It depends on traffic, chemicals, moisture, acoustics, maintenance budget and look. We walk your space and recommend the right system — epoxy, polished concrete, luxury vinyl, sheet vinyl, rubber, carpet or tile." },
  { q: "Do you prepare the subfloor?", a: "Always. Moisture testing, grinding, patching and self-levelling are part of every proposal, because a floor is only as good as what is underneath it." },
  { q: "How quickly can you start?", a: "Most site visits are booked within a few days. Start dates depend on material lead times and your schedule — we will give you a clear timeline with your quote." },
  { q: "Which areas do you serve?", a: "We are based in Vancouver and cover Greater Vancouver — including Downtown, Gastown, Yaletown, Mount Pleasant, Burnaby, Metrotown, New Westminster, Queensborough, Coquitlam and Port Coquitlam." },
  { q: "Are estimates free?", a: "Yes. On-site measurements and written estimates are free, with no obligation." },
];

export const whyChoose = [
  { icon: "ShieldCheck", title: "Fully licensed & insured", text: "Commercial liability and WorkSafeBC coverage on every crew, every site." },
  { icon: "Clock", title: "Around-the-clock scheduling", text: "Night, weekend and phased installs that keep your doors open." },
  { icon: "Layers", title: "Subfloor-first approach", text: "We test, grind and level before we lay — so floors stay flat and bonded." },
  { icon: "Ruler", title: "Precision craftsmanship", text: "Tight seams, true patterns and hand-formed corners you can see." },
  { icon: "BadgeDollarSign", title: "Clear, honest quotes", text: "Itemized pricing with no surprises once the work begins." },
  { icon: "Sparkles", title: "Spotless handover", text: "We clean up, protect your new floor and walk the site with you." },
];

export const stats = [
  { value: 24, suffix: "/7", label: "Crew availability" },
  { value: 24, suffix: "", label: "Flooring services" },
  { value: 11, suffix: "", label: "Communities served" },
  { value: 100, suffix: "%", label: "Prepared subfloors" },
];


export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
] as const;
