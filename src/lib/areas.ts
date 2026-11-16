import skylineImg from "@/assets/vancouver-skyline.jpg";
import towncentreImg from "@/assets/area-towncentre.jpg";
import heritageImg from "@/assets/area-heritage.jpg";
import porcelainImg from "@/assets/service-porcelain-tile.jpg";
import hospImg from "@/assets/gallery-hospitality.jpg";
import polishedImg from "@/assets/service-polished-concrete.jpg";
import retailImg from "@/assets/gallery-retail.jpg";
import eduImg from "@/assets/gallery-education.jpg";
import warehouseImg from "@/assets/service-warehouse.jpg";
import crewImg from "@/assets/about-crew.jpg";
import epoxyImg from "@/assets/service-epoxy.jpg";

export type Area = {
  slug: string;
  name: string;
  region: string;
  hq?: boolean;
  image: string;
  short: string;
  intro: string;
  buildingTypes: string[];
  highlights: { title: string; text: string }[];
  featuredServices: string[];
  nearby: string[];
  faqs: { q: string; a: string }[];
};

export const areas: Area[] = [
  {
    slug: "vancouver",
    name: "Vancouver",
    region: "City of Vancouver",
    hq: true,
    image: skylineImg,
    short: "Our head office on E 60th Ave — serving towers, schools, clinics and industrial sites across the city.",
    intro: "Vancouver is home base. From our shop at 783 E 60th Ave in South Vancouver, crews reach downtown towers, Kitsilano retail, Marpole industrial and Hastings-Sunrise schools in minutes — which means faster site visits, quicker repairs and easier night-shift scheduling for Vancouver customers.",
    buildingTypes: ["Office towers", "Hospitals & clinics", "Schools & universities", "Retail & restaurants", "Industrial & warehouses"],
    highlights: [
      { title: "Fastest response", text: "Our crews and equipment are based in South Vancouver. We serve all of Greater Vancouver from there." },
      { title: "City permits & strata rules", text: "Experienced with Vancouver building, strata and noise requirements." },
      { title: "Every flooring type", text: "Epoxy, vinyl, carpet, tile and repairs from one local team." },
    ],
    featuredServices: ["commercial-flooring-installation", "luxury-vinyl-lvt-lvp", "commercial-epoxy-flooring", "commercial-carpet-tile", "commercial-sheet-vinyl", "commercial-flooring-repair"],
    nearby: ["downtown-vancouver", "mount-pleasant", "burnaby"],
    faqs: [
      { q: "Where is Ironclad based?", a: "Our head office is at 783 E 60th Ave, Vancouver, BC V5X 2A5, in South Vancouver. We serve all of Greater Vancouver from there." },
      { q: "Do you charge extra for Vancouver site visits?", a: "No — on-site measurements and estimates are free across Vancouver." },
    ],
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    region: "Burnaby",
    image: towncentreImg,
    short: "Brentwood and Metrotown towers, Lake City business parks, SFU and BCIT-area institutions.",
    intro: "Burnaby combines high-density town centres with some of the region's busiest business parks. We install and repair floors in Brentwood and Metrotown towers, Lake City and Glenlyon offices and warehouses, and education and healthcare buildings across the city.",
    buildingTypes: ["Business parks", "Office towers", "Warehouses", "Education campuses", "Healthcare"],
    highlights: [
      { title: "Business park expertise", text: "Office-warehouse combos with vinyl up front and epoxy in back." },
      { title: "Tower fit-outs", text: "Carpet tile, LVT and base for new suites." },
      { title: "Close to HQ", text: "A short drive from our Vancouver shop." },
    ],
    featuredServices: ["warehouse-logistics-floors", "commercial-carpet-tile", "commercial-epoxy-flooring", "luxury-vinyl-lvt-lvp", "commercial-sheet-vinyl", "joint-spall-crack-stitching"],
    nearby: ["metrotown", "new-westminster", "vancouver"],
    faqs: [
      { q: "Do you handle both the office and warehouse floor in one project?", a: "Yes — we commonly install LVT or carpet in the office and epoxy or densified concrete in the warehouse." },
      { q: "Do you serve the Lake City and Glenlyon business parks?", a: "Yes, they're among our most frequent Burnaby work areas. We also work across Metrotown." },
    ],
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    region: "New Westminster",
    image: crewImg,
    short: "Heritage conversions, Columbia Street storefronts, civic buildings and riverside industrial sites.",
    intro: "New Westminster's mix of heritage downtown buildings, civic and healthcare facilities and riverfront industrial land calls for versatile crews. We level aging substrates on Columbia Street, install hygienic floors in healthcare spaces and coat and repair slabs along the Fraser.",
    buildingTypes: ["Heritage storefronts", "Civic & municipal buildings", "Healthcare", "Schools", "Riverside industrial"],
    highlights: [
      { title: "Heritage-friendly prep", text: "Careful levelling of older floors and subfloors." },
      { title: "Public-sector experience", text: "Civic, school and healthcare project requirements." },
      { title: "Industrial coatings", text: "Epoxy and sealing for riverside facilities." },
    ],
    featuredServices: ["demolition-self-leveling", "commercial-sheet-vinyl", "integral-flash-coving", "commercial-flooring-installation", "commercial-concrete-sealing", "commercial-flooring-repair"],
    nearby: ["queensborough", "burnaby", "coquitlam"],
    faqs: [
      { q: "Do you work on civic and school buildings?", a: "Yes. We're familiar with public-sector documentation, safety and scheduling requirements. We often work in nearby Queensborough as well." },
      { q: "How quickly can you get to New Westminster?", a: "It's a short drive from our Vancouver base, so site visits are usually booked within days." },
    ],
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    region: "Tri-Cities",
    image: eduImg,
    short: "Schools, medical buildings, Coquitlam Centre retail and Lougheed corridor offices.",
    intro: "Coquitlam's growth has brought new schools, medical buildings, towers and retail along the Lougheed corridor and around Coquitlam Centre. We provide durable, easy-to-maintain floors for education and healthcare, plus fast, phased installs for retail and office tenants.",
    buildingTypes: ["Schools", "Medical buildings", "Retail centres", "Office suites", "Recreation facilities"],
    highlights: [
      { title: "Education floors", text: "Sheet vinyl, rubber and carpet tile for schools." },
      { title: "Summer-break scheduling", text: "Large school projects completed before September." },
      { title: "Tri-Cities coverage", text: "Coquitlam, Port Coquitlam and Port Moody." },
    ],
    featuredServices: ["commercial-sheet-vinyl", "commercial-rubber-flooring", "commercial-carpet-tile", "luxury-vinyl-lvt-lvp", "entryway-walk-off-systems", "commercial-floor-replacement"],
    nearby: ["port-coquitlam", "new-westminster", "burnaby"],
    faqs: [
      { q: "Can you complete school flooring over summer break?", a: "Yes. We plan and staff school projects so classrooms and corridors are ready before students return. Carpet tile and sheet vinyl are the most common school floors we install." },
      { q: "Do you serve Port Moody too?", a: "Yes — we cover the whole Tri-Cities area. That includes Port Coquitlam." },
    ],
  },
  {
    slug: "port-coquitlam",
    name: "Port Coquitlam",
    region: "Tri-Cities",
    image: warehouseImg,
    short: "Dayton and Mary Hill industrial parks, warehouses, fleet garages and commercial plazas.",
    intro: "Port Coquitlam's industrial parks are full of warehouses, manufacturers and fleet operations that rely on floors that work as hard as they do. We repair joints and cracks, coat and stripe warehouse slabs, and install office and break-room floors in the same project.",
    buildingTypes: ["Industrial parks", "Warehouses", "Manufacturing", "Fleet garages", "Commercial plazas"],
    highlights: [
      { title: "Industrial-strength", text: "Epoxy, urethane cement and densified slabs." },
      { title: "Repair first", text: "Crack stitching and joint rebuilding before coating." },
      { title: "Minimal downtime", text: "Zone-phased work around shifts." },
    ],
    featuredServices: ["warehouse-logistics-floors", "joint-spall-crack-stitching", "commercial-epoxy-flooring", "garage-epoxy-flooring", "commercial-concrete-sealing", "anti-slip-safety-coatings"],
    nearby: ["coquitlam", "new-westminster", "queensborough"],
    faqs: [
      { q: "Can you repair our warehouse floor without stopping operations?", a: "Yes. We section off zones and use fast-cure repair materials so the rest of the floor keeps running." },
      { q: "Do you coat fleet maintenance bays?", a: "Yes — with hot-tire- and chemical-resistant systems and optional anti-slip texture." },
    ],
  },
  {
    slug: "downtown-vancouver",
    name: "Downtown Vancouver",
    region: "City of Vancouver",
    image: porcelainImg,
    short: "Office towers, lobbies, hotels and retail in the downtown core — installed after hours to keep buildings running.",
    intro: "Downtown Vancouver projects mean loading-dock bookings, freight elevators, building-manager approvals and work that happens while tenants sleep. We handle tower fit-outs, lobby upgrades, hotel corridors and retail along Robson and Granville with the after-hours crews and paperwork the core demands.",
    buildingTypes: ["Class A office towers", "Hotel lobbies & corridors", "Retail flagships", "Restaurants", "Medical offices"],
    highlights: [
      { title: "After-hours specialists", text: "Night and weekend crews for occupied towers." },
      { title: "Building-manager ready", text: "COIs, WorkSafeBC docs and method statements supplied." },
      { title: "Lobby statement floors", text: "Large-format porcelain, LVT and walk-off systems." },
    ],
    featuredServices: ["commercial-carpet-tile", "ceramic-porcelain-tile", "luxury-vinyl-lvt-lvp", "entryway-walk-off-systems", "broadloom-carpet-installation", "acoustic-subfloor-systems"],
    nearby: ["yaletown", "gastown", "vancouver"],
    faqs: [
      { q: "Can you work in occupied downtown office towers?", a: "Yes. We schedule overnight and weekend shifts and coordinate loading docks and elevators with building management. Free estimates are booked around your building's schedule." },
      { q: "Do you provide documents building managers ask for?", a: "We supply certificates of insurance, WorkSafeBC clearance letters and safety plans before work begins." },
    ],
  },
  {
    slug: "gastown",
    name: "Gastown",
    region: "City of Vancouver",
    image: heritageImg,
    short: "Heritage buildings, restaurants and creative offices — floors that respect old structures and modern use.",
    intro: "Gastown's heritage brick-and-timber buildings bring uneven floors, old adhesives and tight access. We level and prepare aging substrates carefully, then install floors that suit the neighbourhood's restaurants, boutiques and creative studios — from polished concrete to wide-plank LVP.",
    buildingTypes: ["Heritage conversions", "Restaurants & bars", "Boutique retail", "Creative offices", "Galleries"],
    highlights: [
      { title: "Old-building know-how", text: "Levelling and moisture control for heritage substrates." },
      { title: "Restaurant-ready", text: "Kitchen and dining-room floors with minimal closure." },
      { title: "Character finishes", text: "Wood-look LVP, polished concrete and porcelain." },
    ],
    featuredServices: ["restaurant-kitchen-flooring", "demolition-self-leveling", "luxury-vinyl-lvt-lvp", "concrete-floor-polishing", "commercial-quarry-tile", "commercial-flooring-repair"],
    nearby: ["downtown-vancouver", "yaletown", "mount-pleasant"],
    faqs: [
      { q: "Can you install new flooring over old, uneven heritage floors?", a: "Yes. We assess the structure, remove failed material and use self-levelling underlayments to create a flat base." },
      { q: "Do you work on restaurants in Gastown?", a: "Yes — kitchens and dining rooms, often overnight or on closed days." },
    ],
  },
  {
    slug: "yaletown",
    name: "Yaletown",
    region: "City of Vancouver",
    image: hospImg,
    short: "Loft offices, restaurants, salons and strata amenity spaces in Yaletown's converted warehouses and towers.",
    intro: "Yaletown blends converted brick warehouses with glass residential towers. We floor loft offices, patio-front restaurants, fitness studios and strata amenity rooms — paying close attention to acoustics, because so many of these spaces sit above or below homes.",
    buildingTypes: ["Loft offices", "Restaurants & lounges", "Fitness studios", "Strata amenity rooms", "Salons & spas"],
    highlights: [
      { title: "Acoustic focus", text: "Underlays that meet strata impact-noise requirements." },
      { title: "Design-led finishes", text: "Herringbone LVT, metallic epoxy and porcelain." },
      { title: "Mixed-use experience", text: "Work planned around residents above and below." },
    ],
    featuredServices: ["acoustic-subfloor-systems", "luxury-vinyl-lvt-lvp", "metallic-flake-epoxy", "commercial-rubber-flooring", "ceramic-porcelain-tile", "restaurant-kitchen-flooring"],
    nearby: ["downtown-vancouver", "gastown", "mount-pleasant"],
    faqs: [
      { q: "Can you reduce noise for suites below a gym or studio?", a: "Yes — we install acoustic underlays and thick rubber flooring rated to reduce impact noise." },
      { q: "Do you work in strata buildings?", a: "Regularly. We coordinate with strata councils and property managers on scheduling and access." },
    ],
  },
  {
    slug: "mount-pleasant",
    name: "Mount Pleasant",
    region: "City of Vancouver",
    image: polishedImg,
    short: "Breweries, tech studios, light industrial and retail along Main St and the False Creek Flats.",
    intro: "Mount Pleasant mixes Main Street retail with breweries, tech offices and light industrial spaces in the Flats. That means everything from polished concrete in a new studio to quarry tile in a brewhouse and anti-slip coatings in a production area — all within a few blocks.",
    buildingTypes: ["Breweries & distilleries", "Tech & creative studios", "Light industrial", "Main St retail", "Cafés & restaurants"],
    highlights: [
      { title: "Brewery floors", text: "Chemical- and heat-resistant systems sloped to drain." },
      { title: "Studio concrete", text: "Polished and sealed slabs for modern workspaces." },
      { title: "Local crews", text: "Minutes from our South Vancouver shop." },
    ],
    featuredServices: ["concrete-floor-polishing", "commercial-epoxy-flooring", "anti-slip-safety-coatings", "commercial-quarry-tile", "commercial-concrete-sealing", "luxury-vinyl-lvt-lvp"],
    nearby: ["vancouver", "yaletown", "gastown"],
    faqs: [
      { q: "What's the best floor for a brewery?", a: "Urethane cement or quarry tile with good slope to drains handles hot washdowns and chemicals best." },
      { q: "Can you polish the existing concrete in our studio?", a: "Most sound slabs can be polished; we test hardness and condition first." },
    ],
  },
  {
    slug: "metrotown",
    name: "Metrotown",
    region: "Burnaby",
    image: retailImg,
    short: "Retail, restaurants, medical offices and high-rise amenity spaces in and around the Metrotown town centre.",
    intro: "Metrotown is one of the busiest retail and residential hubs in BC. Retailers, restaurants, medical and dental offices and tower amenity spaces here need durable floors installed fast — often overnight before stores open — and walk-off systems that handle heavy, rainy foot traffic.",
    buildingTypes: ["Shopping-centre retail", "Restaurants & food courts", "Medical & dental offices", "Tower amenity spaces", "Fitness centres"],
    highlights: [
      { title: "Overnight retail installs", text: "Stores open on time the next morning." },
      { title: "High-traffic durability", text: "Porcelain, LVT and walk-off for heavy footfall." },
      { title: "Healthcare-grade options", text: "Sheet vinyl and coving for clinics." },
    ],
    featuredServices: ["luxury-vinyl-lvt-lvp", "ceramic-porcelain-tile", "entryway-walk-off-systems", "commercial-sheet-vinyl", "commercial-rubber-flooring", "commercial-floor-replacement"],
    nearby: ["burnaby", "new-westminster", "vancouver"],
    faqs: [
      { q: "Can you install in a shopping-centre unit overnight?", a: "Yes. We regularly work overnight within mall rules for deliveries, noise and dust. Luxury vinyl and porcelain tile are popular in retail units." },
      { q: "Do you floor medical and dental offices?", a: "Yes — sheet vinyl with flash coving, LVT and rubber are common choices we install." },
    ],
  },
  {
    slug: "queensborough",
    name: "Queensborough",
    region: "New Westminster",
    image: epoxyImg,
    short: "Industrial, logistics and new commercial developments on Lulu Island's eastern tip.",
    intro: "Queensborough's growing industrial and logistics base, plus new mixed-use developments, need floors that handle heavy equipment and constant traffic. We deliver warehouse coatings, joint repair, line striping and commercial interiors for the area's businesses and new builds.",
    buildingTypes: ["Warehouses & logistics", "Light industrial", "New commercial builds", "Retail plazas", "Fleet garages"],
    highlights: [
      { title: "Industrial floors", text: "Epoxy, densifiers and joint repair for working slabs." },
      { title: "New-build experience", text: "Moisture testing and mitigation for fresh slabs." },
      { title: "Fleet & garage coatings", text: "Hot-tire-resistant systems for service bays." },
    ],
    featuredServices: ["warehouse-logistics-floors", "commercial-epoxy-flooring", "garage-epoxy-flooring", "joint-spall-crack-stitching", "anti-slip-safety-coatings", "baseboard-moisture-barriers"],
    nearby: ["new-westminster", "burnaby", "port-coquitlam"],
    faqs: [
      { q: "Can you coat a brand-new slab?", a: "Yes, after it has cured and passed moisture testing — or with a moisture-tolerant primer when schedules are tight." },
      { q: "Do you do line striping?", a: "Yes — forklift lanes, pedestrian walkways, parking stalls and hazard markings." },
    ],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
