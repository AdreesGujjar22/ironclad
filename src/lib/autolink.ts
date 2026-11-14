// Turns plain FAQ answer text into segments with internal links to the most
// relevant service, area or contact page. Keeps FAQ copy as plain strings.

export type Segment = { text: string; to?: string };

const S = (slug: string) => `/services/${slug}`;
const A = (slug: string) => `/service-areas/${slug}`;

// Order matters only for alternation priority: longer, more specific phrases first.
const rules: [pattern: string, to: string][] = [
  ["(?:commercial )?(?:flooring|floor) installation(?: in (?:Vancouver|Burnaby|Metrotown|Coquitlam|New Westminster|Port Coquitlam|Downtown Vancouver|Gastown|Yaletown|Mount Pleasant|Queensborough))?|installation in Vancouver", S("commercial-flooring-installation")],
  ["(?:commercial )?(?:flooring|floor) repair(?: in (?:Vancouver|Burnaby|Metrotown|Coquitlam|New Westminster|Port Coquitlam|Downtown Vancouver|Gastown|Yaletown|Mount Pleasant|Queensborough))?|repair in Vancouver", S("commercial-flooring-repair")],
  ["free estimates?|written estimates?|free quotes?|estimates?|quotes?", "/contact"],
  ["greater vancouver", "/service-areas"],
  ["downtown vancouver|downtown office towers?|downtown", A("downtown-vancouver")],
  ["port coquitlam", A("port-coquitlam")],
  ["port moody|tri-cities|coquitlam", A("coquitlam")],
  ["new westminster", A("new-westminster")],
  ["queensborough", A("queensborough")],
  ["metrotown", A("metrotown")],
  ["burnaby", A("burnaby")],
  ["gastown", A("gastown")],
  ["yaletown", A("yaletown")],
  ["mount pleasant", A("mount-pleasant")],
  ["south vancouver|vancouver", A("vancouver")],
  ["metallic epoxy|metallic|full-broadcast flake|flake epoxy|flake", S("metallic-flake-epoxy")],
  ["garage coatings?|parkade garages?|parkades?|garages?", S("garage-epoxy-flooring")],
  ["anti-slip|slip-resistance|textured top coat|traction", S("anti-slip-safety-coatings")],
  ["polished concrete|polish(?:ed|ing)?", S("concrete-floor-polishing")],
  ["penetrating sealers?|penetrating densifiers?|densifiers?|topical sealers?|sealers?|resealed|sealing", S("commercial-concrete-sealing")],
  ["commercial epoxy|epoxy", S("commercial-epoxy-flooring")],
  ["general contractors?|GCs|supply and install", S("commercial-flooring-installation")],
  ["luxury vinyl|LVT|LVP|vinyl tile|click systems", S("luxury-vinyl-lvt-lvp")],
  ["sheet vinyl|sheet flooring|welded", S("commercial-sheet-vinyl")],
  ["flash coving|coving", S("integral-flash-coving")],
  ["welded rubber base|cove base|baseboards?|moisture barriers?|moisture mitigation(?: systems)?|moisture-tolerant primer|moisture testing", S("baseboard-moisture-barriers")],
  ["infection[- ]control", S("integral-flash-coving")],
  ["healthcare facilities|clinics?|medical", S("commercial-sheet-vinyl")],
  ["weight rooms?|gyms?", S("commercial-rubber-flooring")],
  ["shopping-centre|malls?", A("metrotown")],
  ["strata councils|stratas?", S("acoustic-subfloor-systems")],
  ["slab moisture|RH probes", S("baseboard-moisture-barriers")],
  ["acoustic underlays?|acoustic|impact noise|underlayments?", S("acoustic-subfloor-systems")],
  ["rubber(?: flooring| rolls| tiles)?", S("commercial-rubber-flooring")],
  ["broadloom", S("broadloom-carpet-installation")],
  ["carpet tiles?|carpet", S("commercial-carpet-tile")],
  ["quarry tile", S("commercial-quarry-tile")],
  ["walk-off|entrance mats?|entry mats?", S("entryway-walk-off-systems")],
  ["porcelain|ceramic|tile", S("ceramic-porcelain-tile")],
  ["line striping|forklift lanes|forklifts?|warehouses?|densified concrete|fleet maintenance bays", S("warehouse-logistics-floors")],
  ["urethane cement|kitchens?|restaurants?|brewery|breweries|hot washdowns", S("restaurant-kitchen-flooring")],
  ["self-levell?ing(?: underlayments?)?|grinding|demolition|remove failed material|asbestos|abatement|adhesives?|substrate wasn't flat|flat base", S("demolition-self-leveling")],
  ["cracked|spalled|cracks?|spalls?|joints?", S("joint-spall-crack-stitching")],
  ["fast-cure repair materials|repairs?|repairing|patch areas", S("commercial-flooring-repair")],
  ["replace(?:ment)?", S("commercial-floor-replacement")],
  ["WorkSafeBC|certificates of insurance|insured", "/about"],
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
