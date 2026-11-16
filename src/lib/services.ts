import epoxyImg from "@/assets/service-epoxy.jpg";
import metallicImg from "@/assets/service-metallic-epoxy.jpg";
import polishedImg from "@/assets/service-polished-concrete.jpg";
import warehouseImg from "@/assets/service-warehouse.jpg";
import lobbyImg from "@/assets/hero-lobby.jpg";
import lvpImg from "@/assets/service-lvp.jpg";
import healthImg from "@/assets/gallery-healthcare.jpg";
import rubberImg from "@/assets/service-rubber-sheet.jpg";
import coveImg from "@/assets/service-cove-base.jpg";
import vinylImg from "@/assets/service-vinyl-tile.jpg";
import carpetImg from "@/assets/service-carpet-tile.jpg";
import eduImg from "@/assets/gallery-education.jpg";
import porcelainImg from "@/assets/service-porcelain-tile.jpg";
import quarryImg from "@/assets/service-quarry-tile.jpg";
import retailImg from "@/assets/gallery-retail.jpg";
import hospImg from "@/assets/gallery-hospitality.jpg";
import crewImg from "@/assets/about-crew.jpg";
import levelImg from "@/assets/service-self-leveling.jpg";

export type CategoryKey = "concrete-epoxy" | "resilient-vinyl" | "tile-carpet" | "sectors-repairs";

export type Category = {
  key: CategoryKey;
  letter: string;
  name: string;
  blurb: string;
  image: string;
  process: { title: string; text: string }[];
};

export type Service = {
  slug: string;
  name: string;
  category: CategoryKey;
  image: string;
  short: string;
  headline: string;
  intro: string;
  benefits: { title: string; text: string }[];
  idealFor: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

export const categories: Category[] = [
  {
    key: "concrete-epoxy",
    letter: "C",
    name: "Concrete & Epoxy",
    blurb: "Seamless resinous coatings, polished and sealed concrete for floors that take forklifts, chemicals and constant washdowns.",
    image: epoxyImg,
    process: [
      { title: "Slab assessment", text: "Moisture, hardness and contamination testing to choose the right primer and system." },
      { title: "Diamond grinding", text: "Mechanical profiling removes laitance, old coatings and oils for a full-strength bond." },
      { title: "Repair & prime", text: "Cracks, joints and spalls are filled before a penetrating primer locks into the slab." },
      { title: "Coat & cure", text: "Body and top coats are applied to spec, then cured and inspected before return to service." },
    ],
  },
  {
    key: "resilient-vinyl",
    letter: "R",
    name: "Resilient & Vinyl",
    blurb: "Luxury vinyl, sheet vinyl and rubber installed over flat, dry substrates — with coving and moisture control that keeps them bonded.",
    image: lvpImg,
    process: [
      { title: "Moisture testing", text: "RH probes and pH readings decide whether a moisture barrier is needed first." },
      { title: "Level & smooth", text: "Patching and self-levelling bring the substrate inside manufacturer tolerance." },
      { title: "Install", text: "Approved adhesives, rolled for full transfer, with heat-welded or tight-butted seams." },
      { title: "Detail & protect", text: "Base, transitions and floor protection in place until your space opens." },
    ],
  },
  {
    key: "tile-carpet",
    letter: "T",
    name: "Tile & Carpet",
    blurb: "Carpet, broadloom, porcelain and quarry tile plus walk-off and acoustic systems for comfort, durability and quiet.",
    image: carpetImg,
    process: [
      { title: "Plan & layout", text: "Pattern, grout-line and seam planning with furniture moves scheduled ahead." },
      { title: "Prepare", text: "Remove old flooring, flatten and prime the substrate, and add underlays where specified." },
      { title: "Set & install", text: "Tile set in full mortar coverage; carpet stretched or adhered to manufacturer spec." },
      { title: "Clean & hand over", text: "Grout sealing, vacuuming and a final walk-through with your team." },
    ],
  },
  {
    key: "sectors-repairs",
    letter: "S",
    name: "Sectors & Repairs",
    blurb: "Sector-specific floors for warehouses and kitchens, plus repair, replacement, crack stitching and full tear-out and levelling.",
    image: warehouseImg,
    process: [
      { title: "Site walk", text: "We map damage, traffic patterns and operating hours to plan the least disruptive approach." },
      { title: "Make safe & remove", text: "Containment, dust control and removal of failed material down to a sound base." },
      { title: "Repair & rebuild", text: "Structural repairs, crack stitching and levelling to restore a flat, stable substrate." },
      { title: "Finish & reopen", text: "New finish installed, cured and inspected so you can reopen on schedule." },
    ],
  },
];

export const services: Service[] = [
  // ---------- Concrete & Epoxy ----------
  {
    slug: "commercial-epoxy-flooring",
    name: "Commercial Epoxy Flooring",
    category: "concrete-epoxy",
    image: epoxyImg,
    short: "Seamless, chemical-resistant epoxy systems for plants, labs, shops and back-of-house areas that need a tough, easy-clean floor.",
    headline: "Seamless epoxy floors engineered for commercial punishment",
    intro: "Commercial epoxy creates a monolithic, non-porous surface that resists oil, chemicals and impact while staying easy to clean. We diamond-grind every slab, repair cracks and joints, then build the system to the thickness your traffic demands — from thin-film coatings to trowelled mortar systems.",
    benefits: [
      { title: "Chemical resistance", text: "Stands up to oils, cleaners, mild acids and constant washdowns." },
      { title: "Seamless & hygienic", text: "No grout lines or seams for dirt and bacteria to collect in." },
      { title: "High impact strength", text: "Handles carts, pallet jacks and dropped tools without chipping." },
      { title: "Brighter spaces", text: "High-gloss finishes reflect light and make facilities feel cleaner." },
    ],
    idealFor: ["Manufacturing plants", "Laboratories", "Auto service shops", "Commercial kitchens", "Mechanical rooms"],
    specs: [
      { label: "System types", value: "Thin-film, self-levelling, mortar" },
      { label: "Thickness", value: "10 mil – 1/4\" depending on use" },
      { label: "Return to service", value: "Typically 24–72 hours" },
      { label: "Finish options", value: "Gloss, satin, anti-slip broadcast" },
    ],
    faqs: [
      { q: "How long does a commercial epoxy floor last?", a: "With proper grinding and the right system thickness, commercial epoxy commonly lasts 10+ years; a fresh top coat can extend it further." },
      { q: "Can you install epoxy while we stay open?", a: "Yes. We phase areas and work nights or weekends, and can use low-odour or fast-cure systems where needed. Where traction matters, we can add an anti-slip finish in the same visit." },
    ],
  },
  {
    slug: "garage-epoxy-flooring",
    name: "Garage Epoxy Flooring",
    category: "concrete-epoxy",
    image: metallicImg,
    short: "Hot-tire-resistant epoxy and polyaspartic coatings for parkades, dealership service bays, fleet garages and residential garages.",
    headline: "Garage floors that shrug off hot tires, salt and oil",
    intro: "Garage slabs face road salt, hot tire pickup and fluid spills. Our garage epoxy systems combine a moisture-tolerant primer with a high-build body coat and UV-stable polyaspartic or urethane top coat, so the floor stays bonded, cleanable and good-looking through every Vancouver winter.",
    benefits: [
      { title: "No hot-tire lifting", text: "Properly ground and primed slabs keep coatings bonded under hot tires." },
      { title: "Salt & fluid resistant", text: "Repels road salt, antifreeze, oil and brake fluid." },
      { title: "Easy clean", text: "Squeegee and mop instead of pressure washing stained concrete." },
      { title: "Showroom look", text: "Solid colour, flake or metallic finishes with optional line striping." },
    ],
    idealFor: ["Dealership service bays", "Fleet & municipal garages", "Parkades", "Strata garages", "Residential garages"],
    specs: [
      { label: "System", value: "Epoxy base + polyaspartic top coat" },
      { label: "Typical install", value: "1–2 days per bay" },
      { label: "Traction", value: "Optional aggregate for wet areas" },
      { label: "Add-ons", value: "Line striping, stall numbers, curbs" },
    ],
    faqs: [
      { q: "Why do DIY garage coatings peel?", a: "Most peel because the slab was acid-etched instead of diamond-ground, so the coating never mechanically bonds. We grind every floor. For a decorative look, ask about metallic and flake epoxy." },
      { q: "Do you coat strata and parkade garages?", a: "Yes — we coat drive aisles, stalls and ramps in phases so residents keep access. Cracked or spalled parkade slabs are repaired before coating." },
    ],
  },
  {
    slug: "concrete-floor-polishing",
    name: "Concrete Floor Polishing",
    category: "concrete-epoxy",
    image: polishedImg,
    short: "Mechanically ground, densified and polished concrete — a low-maintenance, high-gloss floor for retail, offices and warehouses.",
    headline: "Polished concrete with a gloss that lasts for decades",
    intro: "Polished concrete turns the slab you already have into the finished floor. We grind through progressive diamond grits, apply a lithium densifier to harden the surface, and polish to the sheen you choose — from satin cream to exposed aggregate high-gloss. No coatings to peel, and minimal upkeep.",
    benefits: [
      { title: "Lowest upkeep", text: "No waxing or stripping — just dust mop and auto-scrub." },
      { title: "Extremely durable", text: "Densified surfaces resist abrasion from heavy foot and forklift traffic." },
      { title: "Sustainable", text: "Uses the existing slab with no added material layers." },
      { title: "Light reflective", text: "Gloss levels can reduce lighting needs in large spaces." },
    ],
    idealFor: ["Retail stores", "Showrooms", "Office lofts", "Warehouses", "Breweries & restaurants"],
    specs: [
      { label: "Finish levels", value: "Cream, salt & pepper, full aggregate" },
      { label: "Gloss", value: "Satin, semi-gloss or high-gloss" },
      { label: "Densifier", value: "Lithium silicate" },
      { label: "Guard", value: "Optional stain-resistant guard coat" },
    ],
    faqs: [
      { q: "Can any concrete floor be polished?", a: "Most sound slabs can. We test hardness and check for damage, old adhesive and patch areas before recommending a finish level." },
      { q: "Is polished concrete slippery?", a: "Polished concrete typically meets or exceeds slip-resistance standards when dry and kept clean; we can add treatments for wet areas." },
    ],
  },
  {
    slug: "commercial-concrete-sealing",
    name: "Commercial Concrete Sealing",
    category: "concrete-epoxy",
    image: warehouseImg,
    short: "Penetrating sealers and densifiers that dust-proof, harden and protect commercial and industrial slabs without changing their look.",
    headline: "Sealed concrete that stops dusting, staining and wear",
    intro: "Unsealed concrete dusts, absorbs spills and wears quickly under traffic. We clean and prepare the slab, then apply penetrating silicate densifiers, siloxane water repellents or acrylic and urethane sealers — chosen for your use, exposure and appearance goals.",
    benefits: [
      { title: "Dust-proofing", text: "Hardens the surface so concrete stops shedding dust onto stock and equipment." },
      { title: "Stain protection", text: "Reduces oil and liquid absorption for easier cleanup." },
      { title: "Freeze-thaw defence", text: "Repels water and de-icing salts on exterior slabs and parkades." },
      { title: "Fast turnaround", text: "Many systems allow foot traffic the same day." },
    ],
    idealFor: ["Warehouses", "Parkades", "Loading docks", "Retail back-of-house", "Exterior walkways"],
    specs: [
      { label: "Sealer types", value: "Silicate, siloxane, acrylic, urethane" },
      { label: "Appearance", value: "Natural, satin or wet-look" },
      { label: "Re-seal cycle", value: "2–10 years depending on system" },
      { label: "Pairs well with", value: "Crack & joint repair" },
    ],
    faqs: [
      { q: "What's the difference between sealing and coating?", a: "Penetrating sealers soak into the concrete and don't form a film, so they won't peel. Coatings like epoxy build a protective layer on top." },
      { q: "How often should commercial concrete be resealed?", a: "Penetrating densifiers can last 10 years; topical sealers in heavy traffic typically need refreshing every 2–3 years. For a higher-gloss finish, the same slab can often be polished instead." },
    ],
  },
  {
    slug: "metallic-flake-epoxy",
    name: "Metallic & Flake Epoxy",
    category: "concrete-epoxy",
    image: metallicImg,
    short: "Decorative metallic marble and full-broadcast flake epoxy floors that combine showroom style with commercial durability.",
    headline: "Decorative epoxy that turns floors into a statement",
    intro: "Metallic epoxy uses pearlescent pigments manipulated by hand to create one-of-a-kind marbled depth, while flake systems broadcast vinyl chips into the base coat for texture and camouflage. Both are sealed with a clear top coat for scratch and stain resistance.",
    benefits: [
      { title: "One-of-a-kind look", text: "No two metallic floors are the same — every pour is custom." },
      { title: "Hides wear", text: "Flake systems disguise dirt, scuffs and minor imperfections." },
      { title: "Textured traction", text: "Flake broadcasts add slip resistance without extra grit." },
      { title: "Durable top coats", text: "Polyaspartic or urethane clears protect the design." },
    ],
    idealFor: ["Showrooms", "Restaurants & bars", "Salons & retail", "Garages", "Office lobbies"],
    specs: [
      { label: "Styles", value: "Metallic marble, partial or full flake" },
      { label: "Colours", value: "Custom blends to brand palettes" },
      { label: "Top coat", value: "Polyaspartic or aliphatic urethane" },
      { label: "Install time", value: "2–4 days typical" },
    ],
    faqs: [
      { q: "Can metallic epoxy match our brand colours?", a: "Yes. We blend pigments and test sample boards so you can approve the look before install. Sample boards and an on-site estimate are free." },
      { q: "Is flake epoxy good for commercial use?", a: "Full-broadcast flake is one of the most durable decorative systems and is common in garages, change rooms and retail." },
    ],
  },
  {
    slug: "anti-slip-safety-coatings",
    name: "Anti-Slip Safety Coatings",
    category: "concrete-epoxy",
    image: epoxyImg,
    short: "Textured anti-slip coatings, safety lines and hazard markings for ramps, kitchens, loading docks and wet production areas.",
    headline: "Safer floors with traction exactly where you need it",
    intro: "Slips are one of the most common workplace injuries. We apply aggregate-broadcast epoxy, urethane cement and textured coatings tuned to your environment — light texture for walkways, aggressive grit for ramps and wet zones — plus durable line striping and hazard markings.",
    benefits: [
      { title: "Tuned traction", text: "Texture profile matched to water, grease and footwear in each area." },
      { title: "Clear wayfinding", text: "Pedestrian lanes, forklift paths and hazard zones marked to last." },
      { title: "Still cleanable", text: "Textures chosen so floors remain easy to scrub." },
      { title: "Reduced risk", text: "Supports workplace safety programs and insurance requirements." },
    ],
    idealFor: ["Loading docks & ramps", "Commercial kitchens", "Food processing", "Stairs & landings", "Pool decks & change rooms"],
    specs: [
      { label: "Aggregates", value: "Quartz, aluminium oxide, polymer beads" },
      { label: "Markings", value: "Safety yellow, red, custom stencils" },
      { label: "Systems", value: "Epoxy, urethane cement, MMA" },
      { label: "Pairs well with", value: "Commercial epoxy flooring" },
    ],
    faqs: [
      { q: "Can anti-slip be added to an existing epoxy floor?", a: "Often yes — we lightly abrade the existing coating and apply a textured top coat if the base is still well bonded. Badly worn floors may need a fresh commercial epoxy system first." },
      { q: "Will an anti-slip floor be hard to clean?", a: "We balance grit size against cleaning needs; finer textures clean easily while still adding traction. Kitchens and food plants usually get a coarser profile than offices or garages." },
    ],
  },

  // ---------- Resilient & Vinyl ----------
  {
    slug: "commercial-flooring-installation",
    name: "Commercial Flooring Installation",
    category: "resilient-vinyl",
    image: lobbyImg,
    short: "Turnkey commercial flooring installs — VCT, vinyl, carpet, tile and base — managed by one crew from substrate prep to handover.",
    headline: "One crew for your entire commercial floor package",
    intro: "Tenant improvements and new builds often need several flooring types in one schedule. We handle the full package — vinyl tile, LVT, sheet goods, carpet, tile and base — coordinating prep, transitions and trades so every room is finished to the same standard and on time.",
    benefits: [
      { title: "Single point of contact", text: "One schedule, one crew lead and one warranty for all floor finishes." },
      { title: "Clean transitions", text: "Flush, well-detailed transitions between every flooring type." },
      { title: "Spec compliance", text: "Installed to manufacturer and architect specifications." },
      { title: "Schedule-driven", text: "Night, weekend and phased crews to hit occupancy dates." },
    ],
    idealFor: ["Tenant improvements", "New construction", "Office fit-outs", "Schools & clinics", "Retail roll-outs"],
    specs: [
      { label: "Materials", value: "VCT, LVT/LVP, sheet, carpet, tile, base" },
      { label: "Scope", value: "Single suites to multi-floor projects" },
      { label: "Coordination", value: "GC, designer and facility teams" },
      { label: "Documentation", value: "Moisture reports & close-out packages" },
    ],
    faqs: [
      { q: "Do you work directly for general contractors?", a: "Yes — much of our work is as the flooring subcontractor for GCs, as well as direct for owners and property managers. We send a written quote for every package we bid." },
      { q: "Can you supply materials too?", a: "We can supply and install, or install owner-supplied materials that meet commercial specifications. That includes luxury vinyl, sheet vinyl, carpet tile and rubber." },
    ],
  },
  {
    slug: "luxury-vinyl-lvt-lvp",
    name: "Luxury Vinyl (LVT / LVP)",
    category: "resilient-vinyl",
    image: lvpImg,
    short: "Luxury vinyl tile and plank with realistic wood and stone visuals and commercial wear layers — waterproof, quiet and refined.",
    headline: "Luxury vinyl with real-wood presence and commercial muscle",
    intro: "LVT and LVP deliver the warmth of hardwood or the look of stone without the upkeep. We specify the right wear layer for your traffic, mitigate slab moisture where readings demand it and install glue-down, loose-lay or click systems with clean transitions throughout.",
    benefits: [
      { title: "Premium visuals", text: "Oak, walnut, concrete and stone looks with embossed textures." },
      { title: "Waterproof", text: "Handles spills, mopping and humid Vancouver seasons." },
      { title: "Acoustic comfort", text: "Optional underlays cut impact noise in multi-storey buildings." },
      { title: "Pattern freedom", text: "Herringbone, chevron and mixed-width layouts." },
    ],
    idealFor: ["Corporate offices", "Restaurants & hospitality", "Retail showrooms", "Multi-family amenity spaces", "Senior living"],
    specs: [
      { label: "Wear layer", value: "20 – 40 mil commercial grade" },
      { label: "Install method", value: "Glue-down, loose-lay or click-lock" },
      { label: "Patterns", value: "Straight, herringbone, chevron" },
      { label: "Pairs well with", value: "Rubber base & coordinated trims" },
    ],
    faqs: [
      { q: "Is glue-down or click LVP better for commercial use?", a: "Glue-down is usually preferred for heavy rolling loads and large open areas; click systems suit lighter commercial spaces and fast turnovers. Either way, we do moisture testing first." },
      { q: "Can LVP go over concrete with moisture?", a: "Yes, after testing. We install moisture mitigation systems when slab RH exceeds the manufacturer's limit." },
    ],
  },
  {
    slug: "commercial-sheet-vinyl",
    name: "Commercial Sheet Vinyl",
    category: "resilient-vinyl",
    image: healthImg,
    short: "Heat-welded homogeneous and heterogeneous sheet vinyl for healthcare, labs and schools that need a seamless, hygienic floor.",
    headline: "Heat-welded sheet vinyl for spaces where hygiene matters",
    intro: "Sheet vinyl gives large areas a continuous, watertight surface with heat-welded seams that block moisture and bacteria. We install homogeneous and heterogeneous sheet goods with flash coving where required, meeting the demands of clinics, operating rooms, labs and washrooms.",
    benefits: [
      { title: "Watertight seams", text: "Heat-welded or chemically welded seams create one continuous surface." },
      { title: "Infection control", text: "Non-porous and easy to disinfect — ideal for healthcare." },
      { title: "Rolling-load ready", text: "Handles beds, carts and equipment without denting." },
      { title: "Low maintenance", text: "Many products need no wax or polish." },
    ],
    idealFor: ["Hospitals & clinics", "Laboratories", "Dental offices", "Schools", "Washrooms & change rooms"],
    specs: [
      { label: "Types", value: "Homogeneous & heterogeneous" },
      { label: "Seams", value: "Heat-welded or cold-welded" },
      { label: "Edge detail", value: "Integral flash coving available" },
      { label: "Thickness", value: "2.0 – 3.0 mm typical" },
    ],
    faqs: [
      { q: "Why choose sheet vinyl over vinyl tile?", a: "Sheet vinyl has far fewer seams, and those seams are welded, making it better for wet areas and infection control." },
      { q: "Do you install sheet vinyl in occupied hospitals?", a: "Yes. We follow infection-control protocols, containment and after-hours schedules required by healthcare facilities." },
    ],
  },
  {
    slug: "commercial-rubber-flooring",
    name: "Commercial Rubber Flooring",
    category: "resilient-vinyl",
    image: rubberImg,
    short: "Rubber tile, sheet and stair treads for gyms, schools, healthcare and transit areas that need resilience, grip and sound control.",
    headline: "Rubber floors that cushion, grip and outlast",
    intro: "Commercial rubber flooring is resilient underfoot, slip-resistant and extremely hard-wearing. We install smooth and textured rubber tile and sheet, gym rolls and matching stair treads — properly adhered over a flat substrate so seams stay tight under heavy use.",
    benefits: [
      { title: "Shock absorbing", text: "Reduces fatigue and protects floors from dropped weights." },
      { title: "Slip resistant", text: "Good traction even when wet or sweaty." },
      { title: "Sound control", text: "Dampens impact noise in gyms and corridors." },
      { title: "Very long life", text: "Dense rubber resists cuts, burns and heavy traffic." },
    ],
    idealFor: ["Fitness centres", "School gyms & corridors", "Healthcare facilities", "Stairwells", "Transit & airports"],
    specs: [
      { label: "Formats", value: "Tile, sheet, gym rolls, stair treads" },
      { label: "Thickness", value: "3 mm – 12 mm+" },
      { label: "Surface", value: "Smooth, hammered or raised disc" },
      { label: "Pairs well with", value: "Rubber cove base" },
    ],
    faqs: [
      { q: "Is rubber flooring good for weight rooms?", a: "Yes — thicker rubber rolls or tiles absorb impact and protect the slab; we size thickness to the equipment and drop heights. For extra noise control, rubber can sit over an acoustic underlay." },
      { q: "Does rubber flooring smell?", a: "Commercial-grade rubber has low emissions; any initial odour typically fades within days with ventilation. It's also a quieter, warmer alternative to epoxy in fitness areas." },
    ],
  },
  {
    slug: "integral-flash-coving",
    name: "Integral Flash Coving",
    category: "resilient-vinyl",
    image: coveImg,
    short: "Sheet flooring run up the wall over a cove former and capped — a seamless floor-to-wall seal for healthcare, labs and kitchens.",
    headline: "Seamless floor-to-wall coving with no joint to trap dirt",
    intro: "Integral flash coving turns sheet vinyl or rubber up the wall over a radius cove stick and finishes it with a cap strip. The result is a continuous, cleanable seal with no 90° corner for water, dirt or bacteria to collect — a standard requirement in many healthcare and food spaces.",
    benefits: [
      { title: "Hygienic seal", text: "No floor-wall joint for moisture or bacteria to penetrate." },
      { title: "Code friendly", text: "Meets common healthcare and food-service sanitation requirements." },
      { title: "Crisp corners", text: "Hand-formed inside and outside corners, heat-welded tight." },
      { title: "Wall protection", text: "Shields drywall from mops, scrubbers and carts." },
    ],
    idealFor: ["Operating & exam rooms", "Laboratories", "Commercial kitchens", "Washrooms", "Clean rooms"],
    specs: [
      { label: "Heights", value: "4\" and 6\" typical" },
      { label: "Materials", value: "Sheet vinyl or sheet rubber" },
      { label: "Components", value: "Cove former, cap strip, welded seams" },
      { label: "Pairs well with", value: "Commercial sheet vinyl" },
    ],
    faqs: [
      { q: "What's the difference between flash coving and cove base?", a: "Cove base is a separate strip glued to the wall. Flash coving is the floor itself turned up the wall, so there's no seam at the floor line." },
      { q: "Can flash coving be added to an existing floor?", a: "It is installed with new sheet flooring; for existing floors we can replace the perimeter or recommend welded rubber base." },
    ],
  },
  {
    slug: "baseboard-moisture-barriers",
    name: "Baseboard & Moisture Barriers",
    category: "resilient-vinyl",
    image: vinylImg,
    short: "Rubber and vinyl wall base plus slab moisture mitigation systems that protect walls and keep new floors bonded.",
    headline: "Finished edges and dry slabs — the details that protect your floor",
    intro: "Two of the most overlooked parts of a flooring project are the edges and what's coming up through the slab. We install rubber, vinyl and profile wall base with tight corners, and apply moisture mitigation and vapour-control systems when RH testing shows the slab is too wet for adhesives.",
    benefits: [
      { title: "Prevents failures", text: "Moisture barriers stop adhesive breakdown, bubbling and mould." },
      { title: "Protects walls", text: "Base absorbs bumps from carts, chairs and cleaning equipment." },
      { title: "Sharp finish", text: "Hand-formed corners and continuous runs with minimal seams." },
      { title: "Warranty protection", text: "Testing and mitigation keep manufacturer warranties valid." },
    ],
    idealFor: ["New slabs on grade", "Basement & below-grade suites", "Offices", "Schools & healthcare", "Retail"],
    specs: [
      { label: "Base heights", value: "2.5\", 4\" and 6\" profiles" },
      { label: "Base materials", value: "Thermoset rubber, thermoplastic, vinyl" },
      { label: "Moisture systems", value: "Epoxy vapour barriers, primers" },
      { label: "Testing", value: "In-situ RH probes (ASTM F2170)" },
    ],
    faqs: [
      { q: "How do I know if my slab needs a moisture barrier?", a: "We drill and set RH probes per ASTM F2170. If readings exceed the flooring manufacturer's limit, a barrier is recommended. Results are included in your free estimate, before any LVT or sheet vinyl goes down." },
      { q: "Rubber or vinyl base?", a: "Thermoset rubber is more flexible and durable for heavy-use areas; vinyl base is economical for light commercial spaces." },
    ],
  },

  // ---------- Tile & Carpet ----------
  {
    slug: "commercial-carpet-tile",
    name: "Commercial Carpet Tile",
    category: "tile-carpet",
    image: carpetImg,
    short: "Modular carpet tile for offices, libraries and boardrooms — comfortable, quiet and replaceable one tile at a time.",
    headline: "Modular carpet tile for workplaces that need comfort and calm",
    intro: "Carpet tile brings softness, sound control and design freedom to workspaces. We lay ashlar, quarter-turn, brick and monolithic patterns with releasable or full-spread adhesive, so a damaged tile can be swapped in minutes instead of replacing a whole room.",
    benefits: [
      { title: "Sound absorption", text: "Noticeably quieter open-plan offices and classrooms." },
      { title: "Swap a single tile", text: "Replace one stained tile, not the entire floor." },
      { title: "Design freedom", text: "Mix colours and textures to zone spaces and reflect your brand." },
      { title: "Overnight installs", text: "Furniture lifts and phased installs keep your team working." },
    ],
    idealFor: ["Office towers", "Libraries & study commons", "Boardrooms", "Call centres", "Education facilities"],
    specs: [
      { label: "Formats", value: "24\" × 24\", 9\" × 36\", 18\" × 36\"" },
      { label: "Backing", value: "Hard-back or cushion-back" },
      { label: "Adhesive", value: "Releasable tackifier or full-spread" },
      { label: "Pairs well with", value: "Rubber base & LVT transitions" },
    ],
    faqs: [
      { q: "Can you install carpet tile without moving our furniture out?", a: "Yes — we use furniture lifts and work section by section, often overnight, so desks and systems furniture stay in place. Entrance walk-off mats help the new carpet last longer." },
      { q: "How long does commercial carpet tile last?", a: "Quality commercial carpet tile typically lasts 10–15 years, and individual tiles can be replaced as needed. Broadloom is an option where a seamless look matters more." },
    ],
  },
  {
    slug: "broadloom-carpet-installation",
    name: "Broadloom Carpet Installation",
    category: "tile-carpet",
    image: eduImg,
    short: "Wall-to-wall broadloom for hotels, corridors, theatres and executive suites — stretched or glued down with invisible seams.",
    headline: "Wall-to-wall broadloom with seams you'll never find",
    intro: "Broadloom offers a luxurious, continuous look that carpet tile can't match. Our installers plan seam placement, match patterns across rooms and corridors, and either power-stretch over cushion or direct-glue for heavy rolling traffic — finishing stairs and transitions cleanly.",
    benefits: [
      { title: "Seamless luxury", text: "Continuous colour and pattern across large rooms and corridors." },
      { title: "Pattern matching", text: "Careful layout keeps patterns aligned through doorways." },
      { title: "Underfoot comfort", text: "Cushion options for hospitality and executive spaces." },
      { title: "Stair expertise", text: "Waterfall and cap-and-band stair finishes." },
    ],
    idealFor: ["Hotels & hospitality", "Multi-family corridors", "Theatres & venues", "Executive offices", "Places of worship"],
    specs: [
      { label: "Methods", value: "Power-stretch or direct glue-down" },
      { label: "Widths", value: "12' and 15' rolls" },
      { label: "Seaming", value: "Hot-melt tape, sealed edges" },
      { label: "Stairs", value: "Waterfall or cap-and-band" },
    ],
    faqs: [
      { q: "Broadloom or carpet tile for a hotel corridor?", a: "Broadloom gives the most upscale, continuous look in corridors; carpet tile is easier to replace in high-wear zones. We often combine both." },
      { q: "Do you replace carpet in occupied strata buildings?", a: "Yes. We phase corridors floor by floor and keep suites accessible throughout. Many buildings also add entrance walk-off zones at the same time." },
    ],
  },
  {
    slug: "ceramic-porcelain-tile",
    name: "Ceramic & Porcelain Tile",
    category: "tile-carpet",
    image: porcelainImg,
    short: "Large-format porcelain and ceramic tile for lobbies, washrooms and retail — set flat, crack-isolated and built to last.",
    headline: "Porcelain and ceramic tile, set flat and built for traffic",
    intro: "Porcelain and ceramic tile deliver unmatched durability and design range. We handle large-format and gauged porcelain with proper flattening, crack-isolation and waterproofing membranes, full mortar coverage and lippage control so every tile sits perfectly flat.",
    benefits: [
      { title: "Extremely durable", text: "Dense porcelain resists scratches, stains and heavy foot traffic." },
      { title: "Large-format expertise", text: "Flattening and levelling systems for 24\" × 48\" and larger." },
      { title: "Waterproof assemblies", text: "Membranes for washrooms, showers and wet areas." },
      { title: "Timeless design", text: "Stone, concrete and wood looks in endless sizes." },
    ],
    idealFor: ["Building lobbies", "Washrooms & change rooms", "Retail stores", "Restaurants", "Elevator cabs"],
    specs: [
      { label: "Formats", value: "Mosaic to 48\" × 48\" and larger" },
      { label: "Membranes", value: "Crack-isolation & waterproofing" },
      { label: "Setting", value: "Polymer-modified thinset, full coverage" },
      { label: "Grout", value: "Cementitious or epoxy" },
    ],
    faqs: [
      { q: "Why do large tiles crack or sound hollow?", a: "Usually because the substrate wasn't flat or mortar coverage was poor. We flatten the floor and back-butter for full coverage." },
      { q: "Is epoxy grout worth it?", a: "In washrooms, kitchens and high-traffic areas, epoxy grout resists stains and doesn't need sealing — it's often worth the upgrade." },
    ],
  },
  {
    slug: "commercial-quarry-tile",
    name: "Commercial Quarry Tile",
    category: "tile-carpet",
    image: quarryImg,
    short: "Dense, slip-resistant quarry tile with epoxy grout and cove for commercial kitchens, food processing and wet areas.",
    headline: "Quarry tile built for the heat and grease of commercial kitchens",
    intro: "Quarry tile is the proven choice for commercial kitchens: dense, slip-resistant and unaffected by heat and grease. We install over sloped mortar beds to drains, with waterproofing membranes, epoxy grout and matching quarry cove base for a sanitary, health-inspector-ready floor.",
    benefits: [
      { title: "Grease & heat proof", text: "Unaffected by hot oil, steam and harsh degreasers." },
      { title: "Slip resistant", text: "Abrasive and textured options for wet, greasy floors." },
      { title: "Sloped to drain", text: "Mortar beds pitched so water runs to floor drains." },
      { title: "Sanitary detailing", text: "Epoxy grout and coved base for easy washdowns." },
    ],
    idealFor: ["Restaurant kitchens", "Food processing", "Breweries", "Cafeterias", "Walk-in coolers"],
    specs: [
      { label: "Sizes", value: "6\" × 6\", 8\" × 8\"" },
      { label: "Grout", value: "Chemical-resistant epoxy" },
      { label: "Base", value: "Matching quarry cove base" },
      { label: "Substrate", value: "Sloped mortar bed with membrane" },
    ],
    faqs: [
      { q: "Can you replace a kitchen floor without closing for weeks?", a: "We plan around your service schedule with phased work and fast-setting materials to minimise closure time. Quarry tile is common in restaurant and commercial kitchens." },
      { q: "Quarry tile or epoxy for a kitchen?", a: "Both work. Quarry tile excels with heavy heat and grease; urethane cement or epoxy suits seamless washdown areas. We'll recommend based on your kitchen." },
    ],
  },
  {
    slug: "entryway-walk-off-systems",
    name: "Entryway Walk-Off Systems",
    category: "tile-carpet",
    image: retailImg,
    short: "Recessed entrance grilles, walk-off carpet tile and matting that stop rain, grit and salt at the door.",
    headline: "Stop Vancouver's rain and grit at the front door",
    intro: "Up to 80% of the dirt in a building is tracked in on shoes. A properly sized walk-off system — aluminium grilles, scraper mats and absorbent walk-off carpet tile — captures it at the entrance, protecting interior floors and reducing slip hazards on rainy days.",
    benefits: [
      { title: "Protects interior floors", text: "Captures grit before it scratches LVT, tile and polished concrete." },
      { title: "Reduces slips", text: "Absorbs water from shoes and umbrellas at the door." },
      { title: "Lower cleaning costs", text: "Less dirt tracked through the building." },
      { title: "Clean look", text: "Recessed systems sit flush with surrounding floors." },
    ],
    idealFor: ["Office lobbies", "Retail entrances", "Schools", "Hospitals", "Strata lobbies"],
    specs: [
      { label: "Zones", value: "Scrape, wipe and dry" },
      { label: "Products", value: "Recessed grilles, mats, walk-off tile" },
      { label: "Recommended length", value: "15–30 ft of walk-off" },
      { label: "Pairs well with", value: "Porcelain tile & LVT lobbies" },
    ],
    faqs: [
      { q: "How much walk-off matting do we need?", a: "For high-traffic entrances, 15–30 feet of combined walk-off is commonly recommended to capture most dirt and moisture. It's a simple way to protect the carpet or tile beyond the door." },
      { q: "Can you retrofit a recessed grille into an existing lobby?", a: "Yes — we saw-cut and recess the slab so the new grille sits flush with your existing floor. Any slab cracks found during the cut are repaired first." },
    ],
  },
  {
    slug: "acoustic-subfloor-systems",
    name: "Acoustic Subfloor Systems",
    category: "tile-carpet",
    image: hospImg,
    short: "Acoustic underlayments and isolation systems that cut impact noise under LVT, tile, wood and carpet in multi-storey buildings.",
    headline: "Quieter buildings start beneath the finished floor",
    intro: "In offices, hotels and multi-family buildings, footfall noise travels through the slab to the space below. We install acoustic underlayments and isolation mats rated for impact (IIC) and airborne (STC) sound, matched to the finish flooring and your building's acoustic requirements.",
    benefits: [
      { title: "Less impact noise", text: "Reduces footsteps and rolling-chair noise to suites below." },
      { title: "Meets strata bylaws", text: "Systems selected to satisfy common IIC requirements." },
      { title: "Works with any finish", text: "Under LVT, tile, engineered wood and carpet." },
      { title: "Thermal comfort", text: "Many underlays add warmth underfoot." },
    ],
    idealFor: ["Multi-family & strata", "Hotels", "Office towers", "Mixed-use buildings", "Fitness studios above suites"],
    specs: [
      { label: "Ratings", value: "Tested IIC / STC assemblies" },
      { label: "Materials", value: "Rubber, cork, foam & composite" },
      { label: "Thickness", value: "2 mm – 12 mm" },
      { label: "Pairs well with", value: "LVT, porcelain, carpet" },
    ],
    faqs: [
      { q: "What IIC rating do we need?", a: "Requirements vary by building and bylaw; many stratas require IIC 50 or higher. We'll match an assembly to your requirement. This is common under LVT and tile in Yaletown and Downtown towers." },
      { q: "Can acoustic underlay go under tile?", a: "Yes, using rigid acoustic membranes designed for tile so grout lines don't crack." },
    ],
  },

  // ---------- Sectors & Repairs ----------
  {
    slug: "warehouse-logistics-floors",
    name: "Warehouse & Logistics Floors",
    category: "sectors-repairs",
    image: warehouseImg,
    short: "Densified, coated and striped floors for distribution centres and logistics hubs — built for forklifts and 24/7 operations.",
    headline: "Warehouse floors that keep forklifts and fulfilment moving",
    intro: "Warehouse floors take constant forklift traffic, pallet drops and point loads from racking. We combine joint repair, crack stitching, densifying or epoxy coatings and durable line striping — scheduled around your shifts so pick-and-pack never stops.",
    benefits: [
      { title: "Joint protection", text: "Semi-rigid joint fill stops edge spalling under hard wheels." },
      { title: "Dust-free slabs", text: "Densifiers and coatings protect stock and equipment." },
      { title: "Clear traffic plans", text: "Forklift lanes, pedestrian walkways and rack layouts marked." },
      { title: "Zero-downtime plans", text: "Zone-by-zone work around 24-hour operations." },
    ],
    idealFor: ["Distribution centres", "3PL facilities", "Cold storage", "Manufacturing", "Cross-dock terminals"],
    specs: [
      { label: "Systems", value: "Densifier, epoxy, urethane cement" },
      { label: "Joint fill", value: "Polyurea / semi-rigid epoxy" },
      { label: "Striping", value: "Epoxy or tape line marking" },
      { label: "Scheduling", value: "Zone-phased, 24/7 crews" },
    ],
    faqs: [
      { q: "Can you work in a live warehouse?", a: "Yes. We isolate zones, use fast-cure materials and coordinate with your operations team to keep the rest of the floor working. Joint and crack repairs are often done the same way." },
      { q: "What causes joints to break down?", a: "Hard forklift wheels hitting unfilled or soft-filled joints. Semi-rigid joint fillers support the edges and stop spalling." },
    ],
  },
  {
    slug: "restaurant-kitchen-flooring",
    name: "Restaurant & Kitchen Flooring",
    category: "sectors-repairs",
    image: hospImg,
    short: "Front-of-house style and back-of-house toughness — LVT, tile, quarry and urethane cement floors for restaurants and kitchens.",
    headline: "Restaurant floors for both the dining room and the line",
    intro: "Restaurants need two very different floors: a dining room that sets the mood and a kitchen that survives heat, grease and washdowns. We deliver both — LVT, porcelain or polished concrete out front, and quarry tile or urethane cement behind the line — with minimal closure time.",
    benefits: [
      { title: "Health-code ready", text: "Seamless, coved and sanitary kitchen floors." },
      { title: "Slip resistant", text: "Textured surfaces for wet, greasy prep areas." },
      { title: "Stylish dining rooms", text: "Wood-look, stone-look and herringbone designs." },
      { title: "Minimal closure", text: "Overnight and fast-cure systems to keep you serving." },
    ],
    idealFor: ["Restaurants", "Cafés & bakeries", "Bars & breweries", "Food courts", "Commercial kitchens"],
    specs: [
      { label: "Back of house", value: "Quarry tile or urethane cement" },
      { label: "Front of house", value: "LVT, porcelain, polished concrete" },
      { label: "Detailing", value: "Integral cove & drains" },
      { label: "Downtime", value: "Overnight & weekend installs" },
    ],
    faqs: [
      { q: "What's the most durable kitchen floor?", a: "Urethane cement and quarry tile are the most common long-life choices; both handle thermal shock, grease and daily washdowns." },
      { q: "Can you work after closing?", a: "Yes — many restaurant installs are done overnight or over a closed day or two. Quarry tile and urethane cement are the most common kitchen floors we install." },
    ],
  },
  {
    slug: "commercial-flooring-repair",
    name: "Commercial Flooring Repair",
    category: "sectors-repairs",
    image: crewImg,
    short: "Targeted repairs for lifting vinyl, failed seams, cracked tile, damaged carpet and worn coatings — without replacing the whole floor.",
    headline: "Fix the problem area, not the entire floor",
    intro: "Not every damaged floor needs replacing. We diagnose why it failed — moisture, substrate movement, adhesive or wear — then repair lifting tiles, re-weld seams, replace cracked tile, patch carpet and recoat worn areas, matching materials as closely as possible.",
    benefits: [
      { title: "Root-cause diagnosis", text: "We find why it failed so the repair lasts." },
      { title: "Cost-effective", text: "Extends floor life at a fraction of replacement cost." },
      { title: "Fast response", text: "Quick turnarounds for trip hazards and urgent damage." },
      { title: "Material matching", text: "Attic stock and close matches to blend repairs." },
    ],
    idealFor: ["Property managers", "Strata corporations", "Retail chains", "Schools & healthcare", "Office buildings"],
    specs: [
      { label: "Floor types", value: "Vinyl, LVT, sheet, carpet, tile, epoxy" },
      { label: "Common fixes", value: "Lifting, seams, cracks, bubbles" },
      { label: "Response", value: "Priority scheduling for hazards" },
      { label: "Reporting", value: "Photo documentation available" },
    ],
    faqs: [
      { q: "Why is our vinyl floor lifting?", a: "The most common causes are slab moisture, failed adhesive or substrate movement. We test before repairing so it doesn't recur." },
      { q: "Can you match our existing flooring?", a: "We use attic stock where available and source the closest current match when products are discontinued. If the floor is past repair, we'll quote a replacement instead." },
    ],
  },
  {
    slug: "commercial-floor-replacement",
    name: "Commercial Floor Replacement",
    category: "sectors-repairs",
    image: lobbyImg,
    short: "Complete tear-out and replacement of worn commercial floors — planned, phased and finished around your operations.",
    headline: "Full floor replacement without disrupting your business",
    intro: "When a floor is past repair, we manage the complete replacement: removal and disposal, substrate testing and preparation, then new flooring installed to spec. Projects are planned in phases, after hours or over weekends so tenants, staff and customers are barely affected.",
    benefits: [
      { title: "Turnkey process", text: "Removal, disposal, prep and installation by one team." },
      { title: "Phased schedules", text: "Work in zones to keep the building operating." },
      { title: "Upgrade options", text: "Move to longer-lasting, lower-maintenance materials." },
      { title: "Clean sites", text: "Dust control and daily clean-up in occupied spaces." },
    ],
    idealFor: ["Office renovations", "Schools", "Healthcare facilities", "Retail refreshes", "Strata common areas"],
    specs: [
      { label: "Removal", value: "Carpet, VCT, sheet, tile, adhesives" },
      { label: "Prep", value: "Grinding, patching, levelling" },
      { label: "Hazardous materials", value: "Coordinated with abatement firms" },
      { label: "Scheduling", value: "Nights, weekends, phased" },
    ],
    faqs: [
      { q: "What if old flooring contains asbestos?", a: "Older VCT and adhesives may contain asbestos. We coordinate testing and licensed abatement before removal." },
      { q: "How long does a replacement take?", a: "It depends on area and materials; a typical office floor may take a few nights to a couple of weeks when phased. Old flooring removal and levelling are included in the quote." },
    ],
  },
  {
    slug: "joint-spall-crack-stitching",
    name: "Joint Spall & Crack Stitching",
    category: "sectors-repairs",
    image: polishedImg,
    short: "Structural crack stitching, spall repair and joint rebuilding that restore damaged concrete slabs and stop further breakdown.",
    headline: "Stop cracks and spalled joints before they spread",
    intro: "Cracks and broken joint edges grow under traffic, damaging wheels and creating trip hazards. We rout and fill cracks, stitch structural cracks with steel staples and epoxy, rebuild spalled joint edges with rapid-set repair mortars and refill joints with semi-rigid fillers.",
    benefits: [
      { title: "Structural strength", text: "Stitching ties cracked sections back together." },
      { title: "Safer floors", text: "Eliminates trip hazards and wheel damage." },
      { title: "Rapid return", text: "Fast-cure mortars return areas to service in hours." },
      { title: "Protects coatings", text: "Proper repair stops cracks telegraphing through new floors." },
    ],
    idealFor: ["Warehouses", "Parkades", "Manufacturing", "Retail stores", "Loading docks"],
    specs: [
      { label: "Crack repair", value: "Epoxy injection, rout & fill, stitching" },
      { label: "Spall repair", value: "Rapid-set polymer mortars" },
      { label: "Joint fill", value: "Polyurea / semi-rigid epoxy" },
      { label: "Cure time", value: "As little as 1–2 hours" },
    ],
    faqs: [
      { q: "What is crack stitching?", a: "Slots are cut across the crack and steel stitching staples are set in epoxy, tying the slab back together so it moves as one piece." },
      { q: "Do repairs show on polished concrete?", a: "Repairs will be visible to some degree; we colour-match fillers to blend them as closely as possible." },
    ],
  },
  {
    slug: "demolition-self-leveling",
    name: "Demolition & Self-Leveling",
    category: "sectors-repairs",
    image: levelImg,
    short: "Flooring demolition, adhesive removal, grinding and self-levelling underlayments that create the flat base every new floor needs.",
    headline: "A flat, clean substrate — the foundation of every great floor",
    intro: "Most flooring failures start with what's underneath. We remove old flooring and adhesives, grind the slab, prime it and pour self-levelling underlayment to bring the floor within tolerance — essential for large-format tile, LVT and sheet goods that show every dip.",
    benefits: [
      { title: "Clean removal", text: "Dust-controlled demolition and adhesive removal." },
      { title: "Perfectly flat", text: "Self-levellers correct dips, humps and slopes." },
      { title: "Faster installs", text: "Flat substrates mean quicker, better-looking finishes." },
      { title: "Fewer failures", text: "Prevents lippage, telegraphing and adhesive breakdown." },
    ],
    idealFor: ["Renovations", "Tenant improvements", "Older buildings", "Large-format tile prep", "LVT & sheet installs"],
    specs: [
      { label: "Removal", value: "Carpet, tile, vinyl, adhesives, coatings" },
      { label: "Grinding", value: "Dust-shrouded with HEPA extraction" },
      { label: "Underlayment", value: "Self-levelling, 1/8\" – 1\"+" },
      { label: "Walkable", value: "Within 2–4 hours typical" },
    ],
    faqs: [
      { q: "Why does my floor need self-leveling?", a: "Many finishes require flatness within 3/16\" over 10 ft. Self-levellers correct the slab so tile doesn't lip and LVT doesn't telegraph." },
      { q: "Can you remove old adhesive completely?", a: "Yes — we mechanically grind or scrape adhesives to a clean, sound surface ready for new flooring. Then the slab is levelled for LVT, carpet tile or tile." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getCategory = (key: CategoryKey) => categories.find((c) => c.key === key)!;
export const servicesIn = (key: CategoryKey) => services.filter((s) => s.category === key);
