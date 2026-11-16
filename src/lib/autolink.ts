// Turns plain FAQ answer text into segments with internal links to the most
// relevant service, area or contact page. Keeps FAQ copy as plain strings.

export type Segment = { text: string; to?: string };

import { areaUrl, serviceUrl } from "./urls";

const S = (slug: string) => serviceUrl(slug);
const A = (slug: string) => areaUrl(slug);

// Order matters only for alternation priority: longer, more specific phrases first.
const rules: [pattern: string, to: string][] = [
  // Secondary keywords first (installation / repair, with or without the city).
  ["(?:commercial )?(?:flooring|floor) installation(?: in (?:Vancouver|Burnaby|Metrotown|Coquitlam|New Westminster|Port Coquitlam|Downtown Vancouver|Gastown|Yaletown|Mount Pleasant|Queensborough))?|installation in Vancouver", S("commercial-flooring-installation")],
  ["(?:commercial )?(?:flooring|floor) repair(?: in (?:Vancouver|Burnaby|Metrotown|Coquitlam|New Westminster|Port Coquitlam|Downtown Vancouver|Gastown|Yaletown|Mount Pleasant|Queensborough))?|repair in Vancouver", S("commercial-flooring-repair")],
  ["(?:commercial )?(?:flooring|floor) replacement", S("commercial-floor-replacement")],
  ["free estimates?|free quotes?|written estimates?|written quotes?", "/contact"],
  // Areas: descriptive place names only.
  ["downtown vancouver", A("downtown-vancouver")],
  ["port coquitlam", A("port-coquitlam")],
  ["coquitlam|tri-cities", A("coquitlam")],
  ["new westminster", A("new-westminster")],
  ["queensborough", A("queensborough")],
  ["metrotown", A("metrotown")],
  ["burnaby", A("burnaby")],
  ["gastown", A("gastown")],
  ["yaletown", A("yaletown")],
  ["mount pleasant", A("mount-pleasant")],
  ["south vancouver", A("vancouver")],
  ["greater vancouver|metro vancouver", "/service-areas"],
  // Services: keyword-rich anchors only (no bare generic words).
  ["metallic epoxy|flake epoxy|metallic and flake epoxy", S("metallic-flake-epoxy")],
  ["garage epoxy|garage coatings?|parkade coatings?", S("garage-epoxy-flooring")],
  ["anti-slip coatings?|anti-slip safety coatings?|anti-slip", S("anti-slip-safety-coatings")],
  ["polished concrete|concrete polishing", S("concrete-floor-polishing")],
  ["concrete sealing|concrete sealers?|penetrating densifiers?|densifiers?", S("commercial-concrete-sealing")],
  ["commercial epoxy flooring|commercial epoxy|epoxy flooring|epoxy coatings?", S("commercial-epoxy-flooring")],
  ["luxury vinyl|LVT|LVP", S("luxury-vinyl-lvt-lvp")],
  ["sheet vinyl", S("commercial-sheet-vinyl")],
  ["flash coving|flash cove", S("integral-flash-coving")],
  ["moisture barriers?|moisture mitigation(?: systems)?|moisture testing|slab moisture|RH probes", S("baseboard-moisture-barriers")],
  ["acoustic underlays?|acoustic subfloors?|acoustic underlayment|impact noise", S("acoustic-subfloor-systems")],
  ["rubber flooring", S("commercial-rubber-flooring")],
  ["broadloom carpet|broadloom", S("broadloom-carpet-installation")],
  ["carpet tiles?", S("commercial-carpet-tile")],
  ["quarry tile", S("commercial-quarry-tile")],
  ["walk-off mats?|walk-off systems?|walk-off matting", S("entryway-walk-off-systems")],
  ["porcelain tile|ceramic tile|large-format tile|large-format porcelain", S("ceramic-porcelain-tile")],
  ["warehouse floors?|line striping|forklift lanes", S("warehouse-logistics-floors")],
  ["urethane cement|restaurant kitchens?|kitchen floors?|restaurant floors?", S("restaurant-kitchen-flooring")],
  ["self-levell?ing underlayment|self-levell?ing|flooring demolition", S("demolition-self-leveling")],
  ["spalled joints?|crack stitching|crack repair|joint repair", S("joint-spall-crack-stitching")],
  ["WorkSafeBC", "/about"],
];

const compiled = rules.map(([p, to]) => ({ re: new RegExp(`^(?:${p})$`, "i"), to }));
const master = new RegExp(`\\b(?:${rules.map(([p]) => p).join("|")})\\b`, "gi");

export function autolink(text: string, opts: { exclude?: string | undefined; max?: number | undefined } = {}): Segment[] {
  const max = opts.max ?? 2;
  const used = new Set<string>();
  const out: Segment[] = [];
  let last = 0;
  for (const m of text.matchAll(master)) {
    if (used.size >= max) break;
    const rule = compiled.find((r) => r.re.test(m[0]));
    if (!rule || rule.to === opts.exclude || used.has(rule.to)) continue;
    const i = m.index ?? 0;
    if (i > last) out.push({ text: text.slice(last, i) });
    out.push({ text: m[0], to: rule.to });
    used.add(rule.to);
    last = i + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last) });
  return out;
}
