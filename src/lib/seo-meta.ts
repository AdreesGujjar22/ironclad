// Per-page SEO: meta title (<= 58 chars), meta description (<= 155 chars) and H1.
// Pattern  title: "<service/area kw> Vancouver | Ironclad Commercial Floors"
//          description: "<kw + area sentence> | IRONCLAD COMMERCIAL FLOORS"
// Primary keyword (home): Commercial Flooring Experts in Vancouver, BC Across Metro Vancouver.
// Every page targets its own service + area phrase, so pages do not compete (no cannibalization).

export const BRAND = "Ironclad Commercial Floors";
export const BRAND_CAPS = "IRONCLAD COMMERCIAL FLOORS";
export const PRIMARY_KW = "Commercial Flooring Experts in Vancouver, BC";

type Meta = { title: string; description: string; h1: string };

// Full brand when the title fits in 55 characters, otherwise the short brand.
const title = (kw: string) => {
  const full = `${kw} | ${BRAND}`;
  return full.length <= 55 ? full : `${kw} | Ironclad Floors`;
};
const desc = (lead: string) => `${lead} | ${BRAND_CAPS}`;

export const homeMeta: Meta = {
  title: title("Commercial Flooring Vancouver"),
  description: desc("Commercial Flooring Experts in Vancouver, BC across Metro Vancouver: epoxy, vinyl, carpet, tile, installation and repair."),
  h1: "Commercial Flooring Experts in Vancouver, BC Across Metro Vancouver",
};

export const pageMeta = {
  about: {
    title: title("Vancouver Flooring Company"),
    description: desc("About our commercial flooring company in Vancouver, BC: subfloor-first installation and repair crews serving Metro Vancouver."),
    h1: "About Our Commercial Flooring Company in Vancouver, BC",
  },
  contact: {
    title: title("Free Flooring Quote Vancouver"),
    description: desc("Contact commercial flooring contractors in Vancouver, BC for a free on-site estimate. Call (604) 540-3999 — open 24 hours."),
    h1: "Contact Commercial Flooring Contractors in Vancouver, BC",
  },
  services: {
    title: title("Flooring Services Vancouver"),
    description: desc("24 commercial flooring services in Vancouver, BC: epoxy, vinyl, carpet, tile, installation and repair across Metro Vancouver."),
    h1: "Commercial Flooring Services in Vancouver, BC",
  },
  areas: {
    title: title("Flooring Metro Vancouver"),
    description: desc("Commercial flooring across Metro Vancouver, BC: crews in Vancouver, Burnaby, New Westminster, Coquitlam and Port Coquitlam."),
    h1: "Commercial Flooring Across Metro Vancouver, BC",
  },
} satisfies Record<string, Meta>;

/** Services: kw = short service phrase for the title (brand supplies "Commercial"); lead = description sentence. */
export const serviceMeta: Record<string, { kw: string; h1: string; lead: string }> = {
  "commercial-epoxy-flooring": { kw: "Epoxy Flooring Vancouver", h1: "Commercial Epoxy Flooring in Vancouver, BC", lead: "Commercial epoxy flooring in Vancouver, BC: seamless, chemical-resistant floors for plants, labs and shops. Free quotes." },
  "garage-epoxy-flooring": { kw: "Garage Epoxy Vancouver", h1: "Garage Epoxy Flooring in Vancouver, BC", lead: "Garage epoxy flooring in Vancouver, BC for parkades, fleet bays and shops: hot-tire-resistant coatings. Free estimates." },
  "concrete-floor-polishing": { kw: "Concrete Polishing Vancouver", h1: "Concrete Floor Polishing in Vancouver, BC", lead: "Concrete floor polishing in Vancouver, BC: low-maintenance, glossy polished concrete for retail and offices. Free quotes." },
  "commercial-concrete-sealing": { kw: "Concrete Sealing Vancouver", h1: "Commercial Concrete Sealing in Vancouver, BC", lead: "Commercial concrete sealing in Vancouver, BC: densifiers and sealers that stop dusting, stains and moisture. Free quotes." },
  "metallic-flake-epoxy": { kw: "Metallic Epoxy Vancouver", h1: "Metallic & Flake Epoxy Floors in Vancouver, BC", lead: "Metallic and flake epoxy floors in Vancouver, BC: striking decorative coatings for showrooms, lobbies and restaurants." },
  "anti-slip-safety-coatings": { kw: "Anti-Slip Coatings Vancouver", h1: "Anti-Slip Safety Coatings in Vancouver, BC", lead: "Anti-slip safety coatings in Vancouver, BC for kitchens, ramps, loading docks and wet areas: safer floors. Free quotes." },
  "commercial-flooring-installation": { kw: "Floor Installation Vancouver", h1: "Commercial Flooring Installation in Vancouver, BC", lead: "Commercial flooring installation in Vancouver, BC: vinyl, carpet, tile and epoxy by one crew, after hours. Free quotes." },
  "luxury-vinyl-lvt-lvp": { kw: "Luxury Vinyl Vancouver", h1: "Luxury Vinyl (LVT / LVP) Flooring in Vancouver, BC", lead: "Luxury vinyl LVT and LVP flooring installation in Vancouver, BC: waterproof, durable commercial plank and tile. Free quotes." },
  "commercial-sheet-vinyl": { kw: "Sheet Vinyl Vancouver", h1: "Commercial Sheet Vinyl Flooring in Vancouver, BC", lead: "Commercial sheet vinyl in Vancouver, BC: seamless, heat-welded floors for clinics, schools and labs. Free estimates." },
  "commercial-rubber-flooring": { kw: "Rubber Flooring Vancouver", h1: "Commercial Rubber Flooring in Vancouver, BC", lead: "Commercial rubber flooring in Vancouver, BC for gyms, labs and healthcare: durable, slip-resistant floors. Free estimates." },
  "integral-flash-coving": { kw: "Flash Coving Vancouver", h1: "Integral Flash Coving in Vancouver, BC", lead: "Integral flash coving in Vancouver, BC: seamless, hygienic floor-to-wall transitions for clinics and kitchens. Free quotes." },
  "baseboard-moisture-barriers": { kw: "Moisture Barriers Vancouver", h1: "Baseboard & Moisture Barriers in Vancouver, BC", lead: "Baseboard and moisture barrier installation in Vancouver, BC: protect new floors from slab moisture. Free commercial quotes." },
  "commercial-carpet-tile": { kw: "Carpet Tile Vancouver", h1: "Commercial Carpet Tile Installation in Vancouver, BC", lead: "Commercial carpet tile installation in Vancouver, BC: durable, quiet, replaceable tiles for offices and schools. Free quotes." },
  "broadloom-carpet-installation": { kw: "Broadloom Carpet Vancouver", h1: "Broadloom Carpet Installation in Vancouver, BC", lead: "Broadloom carpet installation in Vancouver, BC for offices, hotels and care homes: stretched or glue-down. Free estimates." },
  "ceramic-porcelain-tile": { kw: "Porcelain Tile Vancouver", h1: "Ceramic & Porcelain Tile Installation in Vancouver, BC", lead: "Ceramic and porcelain tile installation in Vancouver, BC for lobbies, washrooms and retail: precise, durable. Free quotes." },
  "commercial-quarry-tile": { kw: "Quarry Tile Vancouver", h1: "Commercial Quarry Tile in Vancouver, BC", lead: "Commercial quarry tile in Vancouver, BC: heavy-duty, slip-resistant floors for kitchens and food service. Free estimates." },
  "entryway-walk-off-systems": { kw: "Walk-Off Mats Vancouver", h1: "Entryway Walk-Off Systems in Vancouver, BC", lead: "Entryway walk-off systems in Vancouver, BC: recessed mats that trap rain, grit and salt at the door. Free commercial quotes." },
  "acoustic-subfloor-systems": { kw: "Acoustic Subfloors Vancouver", h1: "Acoustic Subfloor Systems in Vancouver, BC", lead: "Acoustic subfloor systems in Vancouver, BC: cut impact noise in condos, offices and clinics under any finish. Free quotes." },
  "warehouse-logistics-floors": { kw: "Warehouse Floors Vancouver", h1: "Warehouse & Logistics Floors in Vancouver, BC", lead: "Warehouse and logistics floors in Vancouver, BC: forklift-ready epoxy, densified concrete and line striping. Free quotes." },
  "restaurant-kitchen-flooring": { kw: "Restaurant Flooring Vancouver", h1: "Restaurant & Kitchen Flooring in Vancouver, BC", lead: "Restaurant and kitchen flooring in Vancouver, BC: quarry tile and urethane cement that survive hot washdowns. Free quotes." },
  "commercial-flooring-repair": { kw: "Floor Repair Vancouver", h1: "Commercial Flooring Repair in Vancouver, BC", lead: "Commercial flooring repair in Vancouver, BC: fix lifting vinyl, failed seams, cracked tile and worn coatings. Free quotes." },
  "commercial-floor-replacement": { kw: "Floor Replacement Vancouver", h1: "Commercial Floor Replacement in Vancouver, BC", lead: "Commercial floor replacement in Vancouver, BC: tear-out, prep and new floors phased around your operations. Free quotes." },
  "joint-spall-crack-stitching": { kw: "Crack Repair Vancouver", h1: "Joint, Spall & Crack Stitching Repair in Vancouver, BC", lead: "Joint, spall and crack stitching repair in Vancouver, BC: restore concrete slabs and stop further breakdown. Free estimates." },
  "demolition-self-leveling": { kw: "Self-Leveling Vancouver", h1: "Demolition & Self-Leveling Floors in Vancouver, BC", lead: "Flooring demolition and self-leveling in Vancouver, BC: clean removal and a flat slab ready for any new floor. Free quotes." },
};

export const areaMeta: Record<string, { kw: string; h1: string; lead: string }> = {
  vancouver: { kw: "Flooring South Vancouver", h1: "Commercial Flooring Contractor in South Vancouver, BC", lead: "Commercial flooring contractor in South Vancouver, BC: epoxy, vinyl, carpet, tile, installation and repair, E 60th Ave." },
  burnaby: { kw: "Flooring Burnaby", h1: "Commercial Flooring in Burnaby, BC", lead: "Commercial flooring in Burnaby, BC: epoxy, vinyl, carpet tile and warehouse floors for Brentwood and Lake City. Free quotes." },
  "new-westminster": { kw: "Flooring New Westminster", h1: "Commercial Flooring in New Westminster, BC", lead: "Commercial flooring in New Westminster, BC: heritage prep, healthcare vinyl and riverside industrial epoxy. Free quotes." },
  coquitlam: { kw: "Flooring Coquitlam", h1: "Commercial Flooring in Coquitlam, BC", lead: "Commercial flooring in Coquitlam, BC: LVT, carpet tile and epoxy for Tri-Cities offices, clinics and schools. Free quotes." },
  "port-coquitlam": { kw: "Flooring Port Coquitlam", h1: "Commercial Flooring in Port Coquitlam, BC", lead: "Commercial flooring in Port Coquitlam, BC: epoxy, joint repair and warehouse floors for Mary Hill and nearby industrial parks." },
  "downtown-vancouver": { kw: "Flooring Downtown Vancouver", h1: "Commercial Flooring in Downtown Vancouver, BC", lead: "Commercial flooring in Downtown Vancouver, BC: night-shift carpet tile, LVT and tile for office towers, retail and hotels." },
  gastown: { kw: "Flooring Gastown", h1: "Commercial Flooring in Gastown, Vancouver, BC", lead: "Commercial flooring in Gastown, Vancouver, BC: careful prep for heritage buildings, restaurants and creative offices." },
  yaletown: { kw: "Flooring Yaletown", h1: "Commercial Flooring in Yaletown, Vancouver, BC", lead: "Commercial flooring in Yaletown, Vancouver, BC: restaurant, retail and loft-office floors installed after hours. Free quotes." },
  "mount-pleasant": { kw: "Flooring Mount Pleasant", h1: "Commercial Flooring in Mount Pleasant, Vancouver, BC", lead: "Commercial flooring in Mount Pleasant, Vancouver, BC: epoxy and polished concrete for breweries and studios. Free quotes." },
  metrotown: { kw: "Flooring Metrotown", h1: "Commercial Flooring in Metrotown, Burnaby, BC", lead: "Commercial flooring in Metrotown, Burnaby, BC: overnight LVT, tile and carpet for mall units, towers and clinics. Free quotes." },
  queensborough: { kw: "Flooring Queensborough", h1: "Commercial Flooring in Queensborough, New Westminster, BC", lead: "Commercial flooring in Queensborough, New Westminster, BC: industrial epoxy, line striping and joint repair. Free quotes." },
};

export const serviceSeo = (slug: string) => {
  const m = serviceMeta[slug];
  return m && { title: title(m.kw), description: desc(m.lead), h1: m.h1 };
};
export const areaSeo = (slug: string) => {
  const m = areaMeta[slug];
  return m && { title: title(m.kw), description: desc(m.lead), h1: m.h1 };
};
