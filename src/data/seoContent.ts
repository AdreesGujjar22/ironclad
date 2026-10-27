import type { FAQItem } from "../types";

export const BUSINESS = "Ironclad Commercial Floors";

/** Title ladder: "keyword in Area | business" kept to 60 characters or fewer. */
export function buildTitle(keyword: string, shortArea: string): string {
  const city = shortArea.replace(/, BC$/, "");
  const options = [
    `${keyword} in ${shortArea} | ${BUSINESS}`,
    `${keyword} in ${shortArea} | Ironclad Floors`,
    `${keyword} in ${shortArea} | Ironclad`,
    `${keyword} in ${city} | Ironclad`,
    `${keyword.replace(" Contractor", "")} in ${city} | Ironclad`,
  ];
  return options.find((o) => o.length <= 60) ?? options[options.length - 1];
}

export interface PageSeo {
  slug: string;
  /** Keyword used in title and H1 (without area) */
  keyword: string;
  /** Area label for the H1, e.g. "Gastown, Vancouver, BC" */
  area: string;
  /** Short area label for the title, e.g. "Gastown, BC" */
  shortArea: string;
  metaDescription: string;
  heroDescription: string;
  sectionHeading: string;
  paragraphs: string[];
  faqHeading: string;
  faqs: FAQItem[];
}

export const pageTitle = (p: PageSeo) => buildTitle(p.keyword, p.shortArea);
export const pageH1 = (p: PageSeo) => `${p.keyword} in ${p.area}`;

const V = "Vancouver, BC";

export const SERVICE_SEO: PageSeo[] = [
  {
    slug: "flooring-installation",
    keyword: "Commercial Flooring Installation",
    area: V,
    shortArea: V,
    metaDescription:
      "Commercial flooring installation in Vancouver, BC by Ironclad Commercial Floors. Night crews, moisture-tested slabs and a 10-year warranty. Get a free quote.",
    heroDescription:
      "Ironclad Commercial Floors installs new floors for offices, clinics, shops and warehouses across Vancouver, BC, on nights and weekends so your business stays open.",
    sectionHeading: "Commercial Flooring Installation for Vancouver Businesses",
    paragraphs: [
      "Most managers worry less about the floor and more about the days their space is out of action. Our commercial flooring installation crews in Vancouver, BC work after hours, so your team returns to a finished floor and a clean site. Vinyl plank, carpet tile, epoxy and polished concrete are all installed by our own Red Seal floorcovering installers.",
      "Before anything is glued down, we test the slab for moisture. That single step separates a floor that lasts a decade from one that lifts within a year. Every installation is backed by our 10-year workmanship warranty, with a written scope and schedule agreed before work starts.",
    ],
    faqHeading: "Commercial Flooring Installation FAQs in Vancouver, BC",
    faqs: [
      {
        question: "How long does commercial flooring installation take in Vancouver?",
        answer:
          "Most offices, shops and clinics are completed over a few nights or a weekend. Timelines depend on square footage, slab condition and the flooring system, and we confirm the schedule in writing before work begins.",
      },
      {
        question: "Why do you test the concrete slab for moisture first?",
        answer:
          "Moisture rising through a slab is a leading cause of lifting vinyl and failed adhesive. Testing before installation lets us choose the right primer or moisture barrier so the floor performs as promised.",
      },
      {
        question: "Can installation happen while my business stays open?",
        answer:
          "Yes. We schedule work in phases, overnight or on weekends, so part of the building stays in use and staff return to a clean, finished space.",
      },
    ],
  },
  {
    slug: "flooring-repair",
    keyword: "Commercial Flooring Repair",
    area: V,
    shortArea: V,
    metaDescription:
      "Commercial flooring repair in Vancouver, BC from Ironclad Commercial Floors. Cracked slabs, lifting tile and failed coatings fixed fast, often the same shift.",
    heroDescription:
      "Cracked slabs, lifting tile or a failed coating? Our commercial flooring repair crews in Vancouver, BC get your floor safe and back in service quickly.",
    sectionHeading: "Fast Commercial Flooring Repair Across Vancouver, BC",
    paragraphs: [
      "A damaged floor is rarely just cosmetic. It is a trip hazard and a forklift route nobody wants to use. Our commercial flooring repair work in Vancouver, BC covers spalled joints, cracked concrete, delaminated epoxy and lifting tile, usually completed overnight.",
      "Fast-setting repair materials mean traffic can often return within the hour. When something fails, call us and we will tell you honestly whether it needs a patch or a full replacement, so you only pay for the fix you need.",
    ],
    faqHeading: "Commercial Flooring Repair FAQs in Vancouver, BC",
    faqs: [
      {
        question: "How quickly can a damaged commercial floor be repaired?",
        answer:
          "Many repairs finish in a single shift. Fast-setting polymers let forklifts and foot traffic return within hours, depending on the size of the damage and the repair material used.",
      },
      {
        question: "Is it better to repair or replace a failing floor?",
        answer:
          "Localized cracks, spalls and joint damage are usually worth repairing. If the floor has failed across most of the area, replacement is the cheaper answer over several years, and we will say so plainly.",
      },
      {
        question: "Can you repair cracks without shutting down my warehouse?",
        answer:
          "Yes. We work aisle by aisle or after hours, using dust-controlled methods, so shipping and receiving can continue around the repair zones.",
      },
    ],
  },
  {
    slug: "flooring-replacement",
    keyword: "Commercial Flooring Replacement",
    area: V,
    shortArea: V,
    metaDescription:
      "Commercial flooring replacement in Vancouver, BC by Ironclad Commercial Floors. Demolition, slab prep and new floors in planned phases. Free estimate.",
    heroDescription:
      "Old floor out, new floor in. Ironclad handles demolition, slab preparation and installation for commercial flooring replacement in Vancouver, BC, in planned phases.",
    sectionHeading: "Commercial Flooring Replacement With One Crew and One Schedule",
    paragraphs: [
      "There comes a point where patching stops paying. When a floor has failed across the board, commercial flooring replacement is the better investment. We strip the old surface, grind the slab back to a sound profile, level it and install the new system.",
      "Work for commercial flooring replacement in Vancouver, BC runs in phases so part of your building stays open throughout. You get one crew, one schedule and one point of contact, and the finished floor carries our 10-year warranty.",
    ],
    faqHeading: "Commercial Flooring Replacement FAQs in Vancouver, BC",
    faqs: [
      {
        question: "What does commercial flooring replacement include?",
        answer:
          "Removal of the old flooring, slab grinding and crack repair, leveling where needed, installation of the new floor system and haul-away of all debris, handled by a single crew.",
      },
      {
        question: "Can my business keep operating during replacement?",
        answer:
          "Yes. We phase the work by area, often overnight, so part of the space remains usable while another section is stripped and rebuilt.",
      },
      {
        question: "How do I know the old floor needs replacing and not repair?",
        answer:
          "If damage is widespread, such as bubbling coatings, failed adhesive or recurring cracks, replacement usually costs less over time. We inspect the slab and give you a straight recommendation.",
      },
    ],
  },
  {
    slug: "commercial-epoxy-flooring",
    keyword: "Commercial Epoxy Flooring",
    area: V,
    shortArea: V,
    metaDescription:
      "Commercial epoxy flooring in Vancouver, BC by Ironclad Commercial Floors. Seamless, chemical-resistant floors for plants, kitchens and warehouses. Get a quote.",
    heroDescription:
      "Seamless, chemical-resistant commercial epoxy flooring in Vancouver, BC for plants, kitchens and warehouses that get washed, driven on and spilled in every day.",
    sectionHeading: "Seamless Commercial Epoxy Flooring Built for Hard Use",
    paragraphs: [
      "Epoxy earns its keep in rooms that are washed down, driven on or spilled in daily. Our commercial epoxy flooring in Vancouver, BC is 100% solids and mechanically ground into the slab, so it bonds instead of peeling, and it is finished seamless so grime has nowhere to hide.",
      "It resists oils, acids, sanitizers and hot-tire traffic. We walk your space, talk through the finish and slip rating you actually need, and quote it plainly, with the finished system covered by our 10-year warranty.",
    ],
    faqHeading: "Commercial Epoxy Flooring FAQs in Vancouver, BC",
    faqs: [
      {
        question: "Where does commercial epoxy flooring work best?",
        answer:
          "Warehouses, food and beverage areas, commercial kitchens, automotive bays and manufacturing floors, anywhere the surface faces washdowns, chemicals or vehicle traffic.",
      },
      {
        question: "How long before an epoxy floor can be used?",
        answer:
          "Light foot traffic is usually possible within 12 to 24 hours, with forklift traffic after about 48 hours, depending on the system and temperature.",
      },
      {
        question: "Can epoxy floors be made slip resistant?",
        answer:
          "Yes. We add anti-slip aggregate to match the rating your space needs, from light texture for retail areas to heavier grip for wet production zones.",
      },
    ],
  },
  {
    slug: "garage-epoxy-flooring",
    keyword: "Garage Epoxy Flooring",
    area: V,
    shortArea: V,
    metaDescription:
      "Garage epoxy flooring in Vancouver, BC by Ironclad Commercial Floors. Tough, hot-tire resistant coatings for service bays, dealerships and fleet garages.",
    heroDescription:
      "Hot-tire resistant garage epoxy flooring in Vancouver, BC for service bays, dealerships, parkades and fleet garages that need a floor that stays clean.",
    sectionHeading: "Garage Epoxy Flooring That Handles Oil, Salt and Tires",
    paragraphs: [
      "A bare concrete garage floor stains, dusts and cracks under daily use. Garage epoxy flooring in Vancouver, BC seals the slab with a durable coating that resists oil, road salt, brake fluid and hot tires, and wipes clean in minutes.",
      "We grind the concrete, repair cracks, then apply the coating system and an optional anti-slip finish. Commercial and fleet garages get the same professional preparation as our industrial work, backed by our 10-year warranty.",
    ],
    faqHeading: "Garage Epoxy Flooring FAQs in Vancouver, BC",
    faqs: [
      {
        question: "Will a garage epoxy floor peel from hot tires?",
        answer:
          "Peeling usually comes from poor preparation. We mechanically grind the slab and use a system rated for hot-tire traffic, so the coating stays bonded.",
      },
      {
        question: "How long does garage epoxy flooring take to install?",
        answer:
          "Most garages are completed in one to two days, with light traffic after about a day and vehicles after the full cure time we confirm on site.",
      },
      {
        question: "Do you do commercial garages and service bays?",
        answer:
          "Yes. We coat dealership floors, fleet garages, parkade sections and auto service bays, with anti-slip options and line striping if needed.",
      },
    ],
  },
  {
    slug: "concrete-floor-polishing",
    keyword: "Concrete Floor Polishing",
    area: V,
    shortArea: V,
    metaDescription:
      "Concrete floor polishing in Vancouver, BC by Ironclad Commercial Floors. Dust-controlled grinding, densifier and high-gloss finishes for retail and warehouses.",
    heroDescription:
      "Turn an existing slab into a durable, low-maintenance floor with concrete floor polishing in Vancouver, BC, using dust-controlled diamond grinding and densifier.",
    sectionHeading: "Concrete Floor Polishing for Retail, Studios and Warehouses",
    paragraphs: [
      "Polished concrete uses the slab you already have, so there is no coating to peel and no new material to replace. Our concrete floor polishing in Vancouver, BC grinds through progressively finer diamond tooling, then hardens the surface with a densifier for a clean, reflective finish.",
      "It suits showrooms, offices, studios and distribution space, and it is easy to maintain. Older slabs in converted buildings often polish up beautifully with the right grinding sequence, and we check the concrete first so you know what to expect.",
    ],
    faqHeading: "Concrete Floor Polishing FAQs in Vancouver, BC",
    faqs: [
      {
        question: "Can any concrete slab be polished?",
        answer:
          "Most sound slabs can. We inspect the concrete for cracks, patches and aggregate exposure first, then explain what finish level is realistic for your floor.",
      },
      {
        question: "How shiny will my polished concrete floor be?",
        answer:
          "Gloss ranges from a soft satin to a high shine, depending on how many grinding and polishing steps are used. We show samples so you can choose the look.",
      },
      {
        question: "Is polished concrete slippery?",
        answer:
          "Polished floors can be finished to meet traffic needs. We can adjust the finish or add an anti-slip treatment for areas that see moisture.",
      },
    ],
  },
  {
    slug: "commercial-luxury-vinyl-flooring",
    keyword: "Commercial Luxury Vinyl Flooring",
    area: V,
    shortArea: V,
    metaDescription:
      "Commercial luxury vinyl flooring in Vancouver, BC by Ironclad Commercial Floors. LVT and LVP for offices, retail and clinics, installed overnight. Get a quote.",
    heroDescription:
      "Wood-look and stone-look LVT and LVP for offices, retail and clinics. Ironclad provides commercial luxury vinyl flooring in Vancouver, BC, installed overnight.",
    sectionHeading: "Commercial Luxury Vinyl Flooring That Handles Heavy Traffic",
    paragraphs: [
      "Luxury vinyl tile and plank give you the look of wood or stone with a tough commercial wear layer. Our commercial luxury vinyl flooring in Vancouver, BC suits offices, shops, clinics and restaurants that need a floor that looks good and cleans easily.",
      "Installation quality depends on the slab, so we test moisture and flatten the substrate before laying a single plank. Work is scheduled after hours, and the finished floor is covered by our 10-year workmanship warranty.",
    ],
    faqHeading: "Commercial Luxury Vinyl Flooring FAQs in Vancouver, BC",
    faqs: [
      {
        question: "What is the difference between LVT and LVP?",
        answer:
          "LVT comes in tile formats, often stone or concrete looks, while LVP comes in long planks that imitate hardwood. Both are available in commercial wear-layer grades.",
      },
      {
        question: "Is luxury vinyl suitable for high-traffic commercial spaces?",
        answer:
          "Yes, when you choose a commercial-grade wear layer and prepare the slab properly. We help select a product matched to your traffic and cleaning routine.",
      },
      {
        question: "Can vinyl be installed over my existing floor?",
        answer:
          "Sometimes. Old flooring and adhesive often need to be removed and the slab leveled first, and we confirm what is needed during the site visit.",
      },
    ],
  },
  {
    slug: "carpet-tile-installation",
    keyword: "Commercial Carpet Tile Installation",
    area: V,
    shortArea: V,
    metaDescription:
      "Commercial carpet tile installation in Vancouver, BC by Ironclad Commercial Floors. Durable modular tiles for offices and retail, fitted after hours.",
    heroDescription:
      "Modular carpet tile that is durable, quieter underfoot and easy to replace. Ironclad provides commercial carpet tile installation in Vancouver, BC for busy workplaces.",
    sectionHeading: "Commercial Carpet Tile Installation for Offices and Retail",
    paragraphs: [
      "Carpet tile lets you replace a stained or worn square without ripping up the whole room. Our commercial carpet tile installation in Vancouver, BC suits offices, schools, clinics and retail, with patterns that hide wear and tiles that dampen noise.",
      "We prepare the slab, plan the layout so cuts fall in sensible places and install after hours so your team arrives to a finished floor. It is a practical choice for tenant improvements and phased refits.",
    ],
    faqHeading: "Commercial Carpet Tile Installation FAQs in Vancouver, BC",
    faqs: [
      {
        question: "Why choose carpet tile over broadloom carpet?",
        answer:
          "Individual tiles can be replaced when damaged, waste is lower on installation and access to underfloor services is easier, which suits offices and changing layouts.",
      },
      {
        question: "How long does carpet tile installation take?",
        answer:
          "Most offices are completed over a few nights or a weekend. We confirm timing once we have measured the space and checked the slab.",
      },
      {
        question: "Does carpet tile reduce noise in an open-plan office?",
        answer:
          "Yes. Carpet tile absorbs sound and reduces foot noise, which helps in open offices, meeting areas and classrooms.",
      },
    ],
  },
  {
    slug: "commercial-sheet-vinyl-flooring",
    keyword: "Commercial Sheet Vinyl Flooring",
    area: V,
    shortArea: V,
    metaDescription:
      "Commercial sheet vinyl flooring in Vancouver, BC by Ironclad Commercial Floors. Seamless, easy-to-sanitize floors for clinics, labs and schools. Free estimate.",
    heroDescription:
      "Seamless, hygienic commercial sheet vinyl flooring in Vancouver, BC for clinics, laboratories, schools and care facilities that need a floor that cleans easily.",
    sectionHeading: "Seamless Sheet Vinyl for Clinics, Labs and Schools",
    paragraphs: [
      "Sheet vinyl comes in wide rolls with very few seams, which makes it a strong choice where hygiene matters. Our commercial sheet vinyl flooring in Vancouver, BC uses heat-welded seams and integral coving where needed, so liquids and dirt stay on the surface.",
      "It is common in clinics, laboratories, schools and care homes. We test the slab, level it and install after hours so your facility keeps running, and the finished floor comes with our 10-year workmanship warranty.",
    ],
    faqHeading: "Commercial Sheet Vinyl Flooring FAQs in Vancouver, BC",
    faqs: [
      {
        question: "Why is sheet vinyl used in healthcare and labs?",
        answer:
          "Few seams and heat-welded joints reduce places for bacteria and moisture to collect, and the surface withstands frequent cleaning and disinfectants.",
      },
      {
        question: "What is coved sheet vinyl?",
        answer:
          "Coving carries the vinyl a few inches up the wall, removing the corner joint between floor and wall so spills cannot get behind the base.",
      },
      {
        question: "Can sheet vinyl be installed in an occupied building?",
        answer:
          "Yes. We work in phases or overnight and manage noise and odour, so patients, staff and students can keep using unaffected areas.",
      },
    ],
  },
  {
    slug: "restaurant-flooring-installation",
    keyword: "Restaurant Flooring Installation",
    area: V,
    shortArea: V,
    metaDescription:
      "Restaurant flooring installation in Vancouver, BC by Ironclad Commercial Floors. Slip-resistant kitchen floors and durable dining floors installed after hours.",
    heroDescription:
      "Slip-resistant kitchens and durable dining rooms. Ironclad handles restaurant flooring installation in Vancouver, BC after hours, so you lose as little service as possible.",
    sectionHeading: "Restaurant Flooring Installation for Kitchens and Dining Rooms",
    paragraphs: [
      "A restaurant floor has two jobs: stay safe in a wet kitchen and look right in the dining room. Our restaurant flooring installation in Vancouver, BC uses seamless, slip-resistant systems in back-of-house areas and durable, good-looking finishes out front.",
      "Downtime costs a restaurant money, so we schedule work after closing and phase it to match your service calendar. Kitchens that face grease, hot water and washdowns are finished with cove bases that keep liquids off the walls.",
    ],
    faqHeading: "Restaurant Flooring Installation FAQs in Vancouver, BC",
    faqs: [
      {
        question: "What flooring is best for a commercial kitchen?",
        answer:
          "A seamless, slip-resistant system such as epoxy or urethane with an integral cove base handles grease, hot water and frequent washdowns better than tile with grout lines.",
      },
      {
        question: "How long will my restaurant be closed for new flooring?",
        answer:
          "We plan around your hours and often work overnight. Closure depends on the system and area, and we agree the timeline with you before starting.",
      },
      {
        question: "Can the dining room and kitchen use different floors?",
        answer:
          "Yes, and they usually should. We install a comfortable, attractive finish in the dining area and a hard-wearing, slip-resistant floor in the kitchen.",
      },
    ],
  },
  {
    slug: "warehouse-flooring-installation",
    keyword: "Warehouse Flooring Installation",
    area: V,
    shortArea: V,
    metaDescription:
      "Warehouse flooring installation in Vancouver, BC by Ironclad Commercial Floors. Forklift-rated epoxy, polished concrete and joint repair, phased by aisle.",
    heroDescription:
      "Forklift-rated epoxy, polished concrete and armoured joints. Ironclad delivers warehouse flooring installation in Vancouver, BC, phased by aisle so shipping keeps moving.",
    sectionHeading: "Warehouse and Industrial Flooring Built for Forklift Traffic",
    paragraphs: [
      "Warehouse floors fail at the joints and at the surface. Our warehouse flooring installation in Vancouver, BC combines joint armouring, slab repair and a hard-wearing finish, such as polished concrete or heavy epoxy, so forklifts roll smoothly and the floor resists dusting.",
      "We phase the work aisle by aisle so your shipping schedule holds, and we finish with safety line striping where traffic lanes need to be visible. The result is a floor that is easier to clean and safer to drive on.",
    ],
    faqHeading: "Warehouse Flooring Installation FAQs in Vancouver, BC",
    faqs: [
      {
        question: "Can you install warehouse flooring without stopping operations?",
        answer:
          "Yes. We phase work by aisle or bay, often overnight, so receiving and shipping can continue around the areas being worked on.",
      },
      {
        question: "What is the best floor for forklift traffic?",
        answer:
          "Properly prepared concrete with armoured joints, finished with polishing or a high-build epoxy, handles repeated forklift loads and resists surface wear.",
      },
      {
        question: "Do you repair damaged control joints?",
        answer:
          "Yes. We rebuild spalled joints with fast-setting polymer and armour them so wheels cross smoothly and edges stop breaking down.",
      },
    ],
  },
  {
    slug: "commercial-concrete-floor-sealing",
    keyword: "Commercial Concrete Floor Sealing",
    area: V,
    shortArea: V,
    metaDescription:
      "Commercial concrete floor sealing in Vancouver, BC by Ironclad Commercial Floors. Stop dusting, staining and freeze-thaw damage on parkades and slabs.",
    heroDescription:
      "Stop dusting, staining and freeze-thaw damage with commercial concrete floor sealing in Vancouver, BC for parkades, loading docks, shop floors and mechanical rooms.",
    sectionHeading: "Commercial Concrete Floor Sealing for Parkades and Slabs",
    paragraphs: [
      "If your slab leaves fine grey dust on everything, the surface is breaking down. Commercial concrete floor sealing in Vancouver, BC soaks into the pores and blocks water, salt and oil before they get in, and it is one of the least expensive ways to extend a slab's life.",
      "It suits parkades, loading docks, mechanical rooms and shop floors. Sealing can usually be done over a weekend with no demolition, and the penetrating formulas stay breathable so moisture does not get trapped underneath.",
    ],
    faqHeading: "Commercial Concrete Floor Sealing FAQs in Vancouver, BC",
    faqs: [
      {
        question: "What does a concrete sealer do?",
        answer:
          "A penetrating sealer reduces water and oil absorption, helps control surface dusting and protects against de-icing salts and freeze-thaw cycles.",
      },
      {
        question: "How long does sealed concrete last before it needs re-sealing?",
        answer:
          "Re-application is typically needed every few years, depending on traffic and exposure. We can advise on a maintenance interval for your slab.",
      },
      {
        question: "Can sealing be done without closing the whole facility?",
        answer:
          "Yes. Sealers dry quickly, so we can treat the slab in sections over a weekend or off-hours and return areas to service promptly.",
      },
    ],
  },
];

function loc(
  slug: string,
  area: string,
  shortArea: string,
  metaDescription: string,
  heroDescription: string,
  sectionHeading: string,
  paragraphs: string[],
  faqs: FAQItem[],
): PageSeo {
  return {
    slug,
    // /locations/vancouver must not share its title/H1 with the home page
    keyword: slug === "vancouver" ? "Commercial Floor Installers" : "Commercial Flooring Contractor",
    area,
    shortArea,
    metaDescription,
    heroDescription,
    sectionHeading,
    paragraphs,
    faqHeading: `Commercial Flooring FAQs in ${area}`,
    faqs,
  };
}

export const LOCATION_SEO: PageSeo[] = [
  loc(
    "vancouver",
    V,
    V,
    "Commercial floor installers in Vancouver, BC. Ironclad Commercial Floors installs epoxy, polished concrete and vinyl from our E 60th Ave base. Get a quote.",
    "Ironclad Commercial Floors is a commercial flooring contractor based at 783 E 60th Ave in Vancouver, BC, installing epoxy, polished concrete, vinyl and carpet tile.",
    "Your Local Commercial Flooring Contractor in Vancouver, BC",
    [
      "We are based in Vancouver, so a job here usually gets a site visit within a day or two. We handle everything from Gastown restaurant kitchens and Yaletown studios to South Vancouver shop floors and Downtown office towers.",
      "Older buildings hide surprises under the old flooring, so we test moisture and inspect the slab before quoting rather than after. Commercial flooring in Vancouver is what we do every week, not a sideline.",
    ],
    [
      {
        question: "Where is Ironclad Commercial Floors located in Vancouver?",
        answer:
          "Our base is at 783 E 60th Ave, Vancouver, BC V5X 2A5. Crews and equipment are dispatched from this yard to commercial sites across the city.",
      },
      {
        question: "Which Vancouver neighbourhoods do you work in?",
        answer:
          "Downtown, Yaletown, Gastown, Mount Pleasant, False Creek, Kitsilano, Marine Gateway and Grandview-Woodland, plus industrial areas in South Vancouver.",
      },
      {
        question: "How soon can you visit my Vancouver property for an estimate?",
        answer:
          "Because we are based in the city, a site visit is often possible within a day or two of your call. Call (604) 540-3999 to book.",
      },
    ],
  ),
  loc(
    "burnaby",
    "Burnaby, BC",
    "Burnaby, BC",
    "Commercial flooring contractor in Burnaby, BC. Ironclad Commercial Floors installs epoxy, polished concrete and carpet tile in Big Bend and Metrotown.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Burnaby, BC, serving Big Bend plants, Metrotown towers and Brentwood offices and retail.",
    "Commercial Flooring Contractor for Burnaby Plants, Offices and Retail",
    [
      "Burnaby splits neatly in two for us: the manufacturing plants around Big Bend, and the office and retail towers at Metrotown and Brentwood. Those need very different floors.",
      "Plants get forklift-rated epoxy and armoured joints. Offices get vinyl plank or carpet tile installed overnight so nobody loses a working day. We are close by, which matters when something fails and you need somebody on site today.",
    ],
    [
      {
        question: "What flooring do you install in Burnaby industrial areas?",
        answer:
          "In Big Bend, Lake City and Willingdon we install forklift-rated epoxy, polished concrete and joint repairs for plants and warehouses.",
      },
      {
        question: "Can you work in Metrotown and Brentwood buildings after hours?",
        answer:
          "Yes. Tower and mall work is scheduled between closing and opening, and we coordinate with building management on loading and elevator access.",
      },
      {
        question: "How far is your crew from Burnaby?",
        answer:
          "Our Vancouver yard is about twenty minutes from most Burnaby sites, so emergency repairs and site visits are quick to arrange.",
      },
    ],
  ),
  loc(
    "new-westminster",
    "New Westminster, BC",
    "New Westminster, BC",
    "Commercial flooring contractor in New Westminster, BC. Ironclad Commercial Floors handles heritage retail, medical and Queensborough warehouse floors.",
    "Ironclad Commercial Floors is a commercial flooring contractor in New Westminster, BC, covering heritage retail, Brewery District clinics and Queensborough warehouses.",
    "Commercial Flooring Contractor Serving New Westminster, BC",
    [
      "New Westminster throws a bit of everything at us: heritage retail downtown, medical space in the Brewery District and logistics buildings out in Queensborough.",
      "The heritage work is the interesting part, because those subfloors are rarely flat and almost never dry. We check for moisture first, level properly, then install, and give you straight answers on timeline and cost.",
    ],
    [
      {
        question: "Do you work on heritage buildings in New Westminster?",
        answer:
          "Yes. Older buildings often have uneven, damp subfloors, so we test moisture and level the slab or substrate before installing new flooring.",
      },
      {
        question: "Which parts of New Westminster do you cover?",
        answer:
          "Downtown, Uptown, Sapperton and the Brewery District, Quayside and the Queensborough industrial area.",
      },
      {
        question: "Do you install flooring in medical and dental offices?",
        answer:
          "Yes. We install seamless sheet vinyl and other easy-to-clean systems for clinics, scheduled after hours to avoid disrupting patients.",
      },
    ],
  ),
  loc(
    "coquitlam",
    "Coquitlam, BC",
    "Coquitlam, BC",
    "Commercial flooring contractor in Coquitlam, BC. Ironclad Commercial Floors installs epoxy, polished concrete and retail flooring in Mayfair and Town Centre.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Coquitlam, BC, serving Mayfair Industrial, United Boulevard, retail centres and new tenant spaces.",
    "Commercial Flooring Contractor for Coquitlam Businesses",
    [
      "Coquitlam work tends to come from developers finishing new commercial space and from owners refreshing a tired storefront. Auto showrooms along Lougheed, plants in Mayfair Industrial and retail around Coquitlam Centre are all done by our own crews.",
      "If you are fitting out a new unit, get us in early. The flooring decision affects your slab preparation budget more than most people expect.",
    ],
    [
      {
        question: "Do you install floors in new Coquitlam commercial units?",
        answer:
          "Yes. We work with developers and tenants on new units, and recommend involving us early so slab preparation can be planned into the budget.",
      },
      {
        question: "What areas of Coquitlam do you serve?",
        answer:
          "Town Centre, Maillardville, Mayfair Industrial Park, Burquitlam and commercial hubs around Westwood Plateau.",
      },
      {
        question: "Do you work with auto dealerships in Coquitlam?",
        answer:
          "Yes. We install epoxy and polished concrete for showrooms and service bays, finished with slip-resistant options where needed.",
      },
    ],
  ),
  loc(
    "port-coquitlam",
    "Port Coquitlam, BC",
    "Port Coquitlam, BC",
    "Commercial flooring contractor in Port Coquitlam, BC. Ironclad Commercial Floors installs heavy epoxy and polished concrete in Kingsway and Broadway parks.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Port Coquitlam, BC, installing heavy epoxy, polished concrete and seamless systems for industrial parks.",
    "Commercial Flooring Contractor in Port Coquitlam's Industrial Parks",
    [
      "PoCo is industrial country, and the floors here take genuine punishment. Heavy epoxy mortar, polished concrete and seamless sanitary systems make up most of what we install around the industrial parks off Kingsway and Broadway.",
      "We phase work around your production schedule, repair joints before they spall further and leave surfaces ready for traffic as quickly as the materials allow.",
    ],
    [
      {
        question: "What floors do you install in Port Coquitlam industrial parks?",
        answer:
          "Heavy epoxy mortar, polished concrete and seamless sanitary systems for production, storage and food-related spaces.",
      },
      {
        question: "Can you work around my production schedule?",
        answer:
          "Yes. We phase installation by bay or line, working overnight or on weekends where possible, to keep production running.",
      },
      {
        question: "Which Port Coquitlam areas do you cover?",
        answer:
          "The Broadway Industrial Corridor, Kingsway Business Park, Mary Hill, Downtown PoCo and Fremont Village.",
      },
    ],
  ),
  loc(
    "downtown-vancouver",
    "Downtown Vancouver, BC",
    "Downtown Vancouver, BC",
    "Commercial flooring contractor in Downtown Vancouver, BC. Ironclad Commercial Floors installs office and retail floors after hours around tower access rules.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Downtown Vancouver, BC, installing office, bank and retail floors after hours with minimal disruption.",
    "After-Hours Commercial Flooring in Downtown Vancouver",
    [
      "Downtown jobs live or die on access and noise. Loading bay windows, elevator bookings and building management rules all shape the schedule, and we handle them as part of the job.",
      "Most work happens after hours so daytime tenants never notice. Law offices, banks, retail floors on Robson and tower lobbies along Georgia and Burrard are all part of our regular work.",
    ],
    [
      {
        question: "Can you install flooring in Downtown towers without disturbing tenants?",
        answer:
          "Yes. We work after hours, protect shared corridors and elevators and follow building management rules for access and noise.",
      },
      {
        question: "Do you handle loading dock and elevator bookings?",
        answer:
          "We coordinate bookings and delivery windows with property management so materials arrive and leave without delays.",
      },
      {
        question: "Which Downtown areas do you serve?",
        answer:
          "The Financial District, Burrard Corridor, Robson Street retail, Georgia Street towers and the Waterfront area.",
      },
    ],
  ),
  loc(
    "gastown",
    "Gastown, Vancouver, BC",
    "Gastown, BC",
    "Commercial flooring contractor in Gastown, Vancouver, BC. Ironclad Commercial Floors installs restaurant and heritage floors over uneven timber subfloors.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Gastown, Vancouver, BC, handling restaurants, studios and heritage buildings with uneven subfloors.",
    "Restaurant and Heritage Commercial Flooring in Gastown",
    [
      "Gastown buildings are old, beautiful and structurally opinionated. Uneven timber subfloors, brick walls out of square and heritage rules on what you can change all affect how a floor is installed.",
      "We have installed in enough restaurants and studios here to know what to expect. We check the substrate, level it where needed and choose a system that works with the building rather than against it.",
    ],
    [
      {
        question: "Can you install a new floor over an uneven Gastown timber subfloor?",
        answer:
          "Yes. We assess the subfloor, level it with suitable underlayment and select a flooring system that suits the building's structure.",
      },
      {
        question: "Do you install restaurant flooring in Gastown?",
        answer:
          "Yes. We install slip-resistant kitchen floors and durable dining finishes, scheduled after closing to protect your service hours.",
      },
      {
        question: "Which Gastown streets do you serve?",
        answer:
          "Water Street, Cordova, the Alexander corridor, Carrall Street and Blood Alley.",
      },
    ],
  ),
  loc(
    "yaletown",
    "Yaletown, Vancouver, BC",
    "Yaletown, BC",
    "Commercial flooring contractor in Yaletown, Vancouver, BC. Ironclad Commercial Floors installs polished concrete and vinyl for showrooms and tech offices.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Yaletown, Vancouver, BC, installing polished concrete and wide-plank vinyl for showrooms and studios.",
    "Boutique and Tech Office Commercial Flooring in Yaletown",
    [
      "Yaletown clients are usually after a look as much as a floor: polished concrete in a showroom, wide plank vinyl in a design studio, something quiet in a converted warehouse office.",
      "We work within narrow loading conditions and tight tenant schedules, and we show samples early so the finish is agreed before any grinding or installation begins.",
    ],
    [
      {
        question: "What floors suit a Yaletown showroom or design studio?",
        answer:
          "Polished concrete and wide-plank luxury vinyl are popular choices. We show samples so you can approve the finish before work begins.",
      },
      {
        question: "Can you work in converted warehouse offices in Yaletown?",
        answer:
          "Yes. Many converted slabs polish well, and where they do not, we level and install vinyl or carpet tile.",
      },
      {
        question: "Which Yaletown streets do you cover?",
        answer:
          "Mainland and Hamilton Streets, Pacific Boulevard, Marinaside Crescent and the Roundhouse area.",
      },
    ],
  ),
  loc(
    "mount-pleasant",
    "Mount Pleasant, Vancouver, BC",
    "Mount Pleasant, BC",
    "Commercial flooring contractor in Mount Pleasant, Vancouver, BC. Ironclad Commercial Floors polishes slabs and installs floors for studios and breweries.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Mount Pleasant, Vancouver, BC, serving tech offices, breweries and creative studios.",
    "Studio and Brewery Commercial Flooring in Mount Pleasant",
    [
      "Mount Pleasant is full of converted industrial space now hosting tech offices, breweries and studios. Those slabs were poured for machinery, not laptops, so they often polish up well with the right grinding sequence.",
      "For breweries and production spaces we install seamless, washdown-ready floors, and for offices and studios we choose quieter finishes. Either way we inspect the slab first.",
    ],
    [
      {
        question: "What flooring do breweries in Mount Pleasant need?",
        answer:
          "Seamless, chemical-resistant and slip-resistant systems with cove bases, which handle washdowns, spills and cleaning chemicals.",
      },
      {
        question: "Can an old industrial slab be polished for an office?",
        answer:
          "Often yes. We inspect cracks and patches, then explain what finish is realistic before any grinding begins.",
      },
      {
        question: "Which Mount Pleasant areas do you serve?",
        answer:
          "The Main Street corridor, the Brewery District around 5th and 6th Avenue, the Broadway tech corridor, Olympic Village and Kingsway.",
      },
    ],
  ),
  loc(
    "metrotown",
    "Metrotown, Burnaby, BC",
    "Metrotown, BC",
    "Commercial flooring contractor in Metrotown, Burnaby, BC. Ironclad Commercial Floors installs retail, medical and tower office floors between close and open.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Metrotown, Burnaby, BC, installing mall unit, medical office and tower lobby floors after hours.",
    "Retail and Office Commercial Flooring in Metrotown, Burnaby",
    [
      "Retail floors around Metrotown have to be installed between closing and opening, with hoarding up and nothing left behind. That is the job we bid for.",
      "Mall units, medical offices and tower lobbies make up most of our work here. We confirm access rules with building management first so deliveries, noise and clean-up stay within the agreed windows.",
    ],
    [
      {
        question: "Can you install flooring in Metrotown retail units after closing?",
        answer:
          "Yes. We work between closing and opening, keep hoarding in place and clean up before staff return.",
      },
      {
        question: "Do you install tower lobby and medical office floors?",
        answer:
          "Yes. We install durable lobby finishes and easy-to-clean medical flooring, coordinating access with building management.",
      },
      {
        question: "Which Metrotown areas do you serve?",
        answer:
          "Mall units, the Kingsway commercial strip, Central Boulevard towers, Station Square and Willingdon South.",
      },
    ],
  ),
  loc(
    "queensborough",
    "Queensborough, New Westminster, BC",
    "Queensborough, BC",
    "Commercial flooring contractor in Queensborough, New Westminster, BC. Ironclad Commercial Floors armours joints and installs forklift-rated warehouse floors.",
    "Ironclad Commercial Floors is a commercial flooring contractor in Queensborough, New Westminster, BC, serving warehouses and logistics yards with forklift-rated floors.",
    "Warehouse and Logistics Flooring in Queensborough",
    [
      "Queensborough is warehouses and distribution space, and the floor issue is nearly always joints and slab surface. We armour joints, harden and seal slabs and re-stripe traffic lanes so the yard crew can see where to drive.",
      "Work is phased by aisle so your shipping schedule holds. If forklifts are bouncing at the joints, that is worth fixing before the spalling spreads.",
    ],
    [
      {
        question: "Can you repair joints in a Queensborough distribution centre?",
        answer:
          "Yes. We rebuild spalled joints with fast-setting polymer and armour them so forklift wheels cross smoothly.",
      },
      {
        question: "Do you do line striping for traffic lanes?",
        answer:
          "Yes. We re-stripe aisles and traffic lanes after floor work so forklift routes and pedestrian zones are clearly marked.",
      },
      {
        question: "Which Queensborough areas do you serve?",
        answer:
          "Queensborough Industrial Park, the Boyd Street logistics corridor, Queensborough Landing and Ewen Avenue.",
      },
    ],
  ),
  loc(
    "richmond",
    "Richmond, BC",
    "Richmond, BC",
    "Commercial flooring contractor in Richmond, BC. Ironclad Commercial Floors installs epoxy, polished concrete and vinyl for airport logistics and retail.",
    "Ironclad Commercial Floors is a commercial flooring contractor serving Richmond, BC, from airport logistics and warehouses to retail centres and commercial offices.",
    "Commercial Flooring Contractor Serving Richmond, BC",
    [
      "Richmond's mix of airport logistics, warehouses, food production and busy retail means no single flooring system fits every job. We match the floor to the use, whether that is epoxy for a production bay or luxury vinyl for a retail unit.",
      "Our crews travel from our Vancouver yard, so site visits and estimates are quick to arrange. Work can run overnight or on weekends so your operation keeps moving.",
    ],
    [
      {
        question: "Do you work near the airport and in Richmond logistics areas?",
        answer:
          "Yes. We install and repair warehouse and logistics floors in Richmond, scheduled around your shipping and receiving.",
      },
      {
        question: "How do you get to Richmond jobs?",
        answer:
          "Crews dispatch from our Vancouver base at 783 E 60th Ave, which is close to Richmond, so estimates and site visits are easy to schedule.",
      },
      {
        question: "What flooring do Richmond retail and office spaces use?",
        answer:
          "Luxury vinyl, carpet tile and polished concrete are common, chosen for traffic and look, and installed after hours.",
      },
    ],
  ),
  loc(
    "surrey",
    "Surrey, BC",
    "Surrey, BC",
    "Commercial flooring contractor in Surrey, BC. Ironclad Commercial Floors installs industrial epoxy, polished concrete and repairs for Surrey facilities.",
    "Ironclad Commercial Floors is a commercial flooring contractor serving Surrey, BC, with industrial epoxy, polished concrete, repair and replacement for local facilities.",
    "Commercial Flooring Contractor Serving Surrey, BC",
    [
      "Surrey has some of the region's largest industrial and commercial buildings, and the floors in them work hard. We install epoxy and polished concrete, repair damaged joints and replace failed floors for warehouses, plants and retail centres.",
      "Crews dispatch from our Vancouver yard, and we phase larger Surrey projects by area so your operation keeps running while the work is completed.",
    ],
    [
      {
        question: "Do you take on large industrial floors in Surrey?",
        answer:
          "Yes. We phase large warehouse and plant projects by bay or aisle, so operations continue while floors are installed or repaired.",
      },
      {
        question: "Can you handle emergency floor repairs in Surrey?",
        answer:
          "Call (604) 540-3999 and we will arrange an assessment. Many repairs use fast-setting materials that return areas to traffic quickly.",
      },
      {
        question: "What services do you offer in Surrey?",
        answer:
          "Installation, repair, replacement, epoxy, polished concrete, vinyl and carpet tile for commercial and industrial properties.",
      },
    ],
  ),
  loc(
    "delta",
    "Delta, BC",
    "Delta, BC",
    "Commercial flooring contractor in Delta, BC. Ironclad Commercial Floors installs forklift-rated epoxy and concrete floors for Delta warehouses and plants.",
    "Ironclad Commercial Floors is a commercial flooring contractor serving Delta, BC, installing forklift-rated epoxy and concrete floors for warehouses and plants.",
    "Commercial Flooring Contractor Serving Delta, BC",
    [
      "Delta's warehouses, distribution centres and light manufacturing spaces need floors that handle forklifts, loading and constant washdowns. We install epoxy, polished concrete and joint repairs matched to how the space is actually used.",
      "We travel from our Vancouver base and plan the work in phases so your Delta operation can keep shipping while floors are completed.",
    ],
    [
      {
        question: "What floors do you install for Delta warehouses?",
        answer:
          "Forklift-rated epoxy, polished concrete and armoured joints, chosen for your loads, traffic and cleaning routine.",
      },
      {
        question: "Can work be phased so my Delta facility stays open?",
        answer:
          "Yes. We work bay by bay or after hours, so shipping and receiving can continue in unaffected areas.",
      },
      {
        question: "How do I book an estimate in Delta?",
        answer:
          "Call (604) 540-3999 or use the contact form. We visit the site, inspect the slab and provide a written quote.",
      },
    ],
  ),
  loc(
    "langley",
    "Langley, BC",
    "Langley, BC",
    "Commercial flooring contractor in Langley, BC. Ironclad Commercial Floors installs epoxy, vinyl and carpet tile for Langley industrial and retail properties.",
    "Ironclad Commercial Floors is a commercial flooring contractor serving Langley, BC, installing epoxy, luxury vinyl and carpet tile for industrial and retail properties.",
    "Commercial Flooring Contractor Serving Langley, BC",
    [
      "Langley's industrial parks, retail centres and growing business districts call for different floors. We install epoxy and sealed concrete for plants and warehouses, and luxury vinyl or carpet tile for offices and shops.",
      "Crews work from our Vancouver base and schedule Langley projects after hours or in phases so your business keeps operating.",
    ],
    [
      {
        question: "Do you serve Langley industrial parks?",
        answer:
          "Yes. We install and repair epoxy and concrete floors for Langley plants, warehouses and workshops.",
      },
      {
        question: "What flooring suits Langley retail and offices?",
        answer:
          "Luxury vinyl and carpet tile are popular, installed after hours so your doors stay open for business.",
      },
      {
        question: "Can I get a free estimate in Langley?",
        answer:
          "Yes. Call (604) 540-3999 to book a free on-site estimate with a written quote.",
      },
    ],
  ),
  loc(
    "north-vancouver",
    "North Vancouver, BC",
    "North Vancouver, BC",
    "Commercial flooring contractor in North Vancouver, BC. Ironclad Commercial Floors installs epoxy, vinyl and polished concrete for North Shore businesses.",
    "Ironclad Commercial Floors is a commercial flooring contractor serving North Vancouver, BC, installing epoxy, vinyl and polished concrete for North Shore businesses.",
    "Commercial Flooring Contractor Serving North Vancouver, BC",
    [
      "North Shore businesses range from marine and industrial yards to restaurants, clinics and offices. We install the floor that fits: epoxy or sealed concrete for hard-use areas, and vinyl or carpet tile where comfort and appearance matter.",
      "We travel from our Vancouver yard and schedule work after hours or in phases, so your North Vancouver operation can stay open.",
    ],
    [
      {
        question: "Do you work on North Shore industrial and marine sites?",
        answer:
          "Yes. We install durable epoxy and sealed concrete floors for yards, workshops and warehouses that face heavy use.",
      },
      {
        question: "Can you install flooring in North Vancouver restaurants and clinics?",
        answer:
          "Yes. We install slip-resistant restaurant floors and easy-to-clean clinic flooring, scheduled after hours.",
      },
      {
        question: "How do I request a quote in North Vancouver?",
        answer:
          "Call (604) 540-3999 or use the contact form. We visit, inspect the slab and send a written quote.",
      },
    ],
  ),
];

export const getServiceSeo = (slug: string) => SERVICE_SEO.find((s) => s.slug === slug);
export const getLocationSeo = (slug: string) => LOCATION_SEO.find((s) => s.slug === slug);

export interface StaticSeo {
  path: string;
  keyword: string;
  area: string;
  description: string;
}

export const STATIC_SEO: Record<string, StaticSeo> = {
  home: {
    path: "/",
    keyword: "Commercial Flooring Contractor",
    area: "Vancouver, BC",
    description:
      "Commercial flooring contractor in Vancouver, BC. Ironclad Commercial Floors installs epoxy, polished concrete, vinyl and carpet tile at night. Free quote.",
  },
  services: {
    path: "/services",
    keyword: "Commercial Flooring Services",
    area: "Vancouver, BC",
    description:
      "Commercial flooring services in Vancouver, BC from Ironclad Commercial Floors: installation, repair, replacement, epoxy, polished concrete and vinyl.",
  },
  locations: {
    path: "/locations",
    keyword: "Commercial Flooring Service Areas",
    area: "Vancouver, BC",
    description:
      "Commercial flooring service areas in Vancouver, BC. Ironclad Commercial Floors also serves Burnaby, Richmond, Surrey, Coquitlam, Delta and Langley.",
  },
  about: {
    path: "/about",
    keyword: "About Our Flooring Contractor",
    area: "Vancouver, BC",
    description:
      "About Ironclad Commercial Floors, a commercial flooring contractor in Vancouver, BC with Red Seal installers, moisture-tested slabs and a 10-year warranty.",
  },
  contact: {
    path: "/contact",
    keyword: "Contact Our Flooring Contractor",
    area: "Vancouver, BC",
    description:
      "Contact Ironclad Commercial Floors, your commercial flooring contractor in Vancouver, BC. Call (604) 540-3999 or book a free on-site estimate online.",
  },
  projects: {
    path: "/projects",
    keyword: "Commercial Flooring Projects",
    area: "Vancouver, BC",
    description:
      "Commercial flooring projects in Vancouver, BC by Ironclad Commercial Floors: epoxy, polished concrete, vinyl and carpet tile for offices, plants and retail.",
  },
  blogs: {
    path: "/blogs",
    keyword: "Commercial Flooring Guides",
    area: "Vancouver, BC",
    description:
      "Commercial flooring guides from Ironclad Commercial Floors in Vancouver, BC: epoxy, polished concrete, vinyl and carpet tile advice for building owners.",
  },
};

export const staticTitle = (s: StaticSeo) => buildTitle(s.keyword, s.area);
