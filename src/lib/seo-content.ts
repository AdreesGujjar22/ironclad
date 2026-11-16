// Extra, page-unique SEO copy: a local section and keyword-rich FAQs for every service and area page.
// Merged with the base data in services.ts / areas.ts by the routes, so nothing is duplicated.

type Faq = { q: string; a: string };
type Extra = { local: string; faqs: Faq[] };

export const serviceExtra: Record<string, Extra> = {
  "commercial-epoxy-flooring": {
    local: "Commercial epoxy flooring in Vancouver has to cope with wet winters, tracked-in grit and tight production schedules. We coat food-processing rooms along Marine Drive, brewery floors in Mount Pleasant and lab suites near UBC, choosing broadcast, self-levelling or mortar systems by load and washdown routine. Every Vancouver epoxy job starts with moisture testing, because a coating is only as sound as the slab beneath it.",
    faqs: [
      { q: "How much does commercial epoxy flooring cost in Vancouver?", a: "Price depends on slab condition, system thickness and area, so we quote after a free site visit. Vancouver epoxy quotes are itemized by prep, repairs, coats and any coving or anti-slip work." },
      { q: "How soon can my Vancouver facility reopen after epoxy is applied?", a: "Foot traffic is usually possible within 24 hours and light wheeled traffic within 48 to 72, with full chemical cure near seven days. We phase work by zone so you can keep operating." },
    ],
  },
  "garage-epoxy-flooring": {
    local: "Garage epoxy flooring in Vancouver faces road salt, hot tires and rain carried in from the street. We coat strata parkades, dealership service bays and private fleet garages across Vancouver with systems that resist tire pick-up and clean easily. Parkade slabs often sit above heated space, so we test moisture and choose primers that stay bonded through our damp coastal seasons.",
    faqs: [
      { q: "Can you epoxy a strata parkade in Vancouver while residents still park?", a: "Yes. We section the parkade into bays, coat one section at a time and open it back up between stages so residents keep access to their stalls." },
      { q: "Will garage epoxy peel from hot tires?", a: "Not when the system is built for it. We grind the slab, use a primer matched to the concrete and top-coat with a hot-tire-resistant finish suited to Vancouver garages." },
    ],
  },
  "concrete-floor-polishing": {
    local: "Concrete floor polishing in Vancouver suits showrooms in Mount Pleasant, warehouse offices in Marpole and ground-floor retail in Kitsilano. We grind through progressively finer diamond tooling, densify the slab and burnish it to the sheen you choose. In Vancouver's wet climate a polished slab also means no wax, no stripping and a floor that wipes clean after rainy days.",
    faqs: [
      { q: "Is polished concrete in Vancouver slippery when wet?", a: "A polished floor can be slick if left glossy, so for entrances and wet zones we specify a lower sheen or add a slip-resistant treatment. We discuss this during your Vancouver site visit." },
      { q: "Can you polish my existing Vancouver slab or does it need a topping?", a: "Many existing slabs polish well after grinding. If the concrete is badly patched or uneven, we may suggest a thin overlay first and will explain why in your written quote." },
    ],
  },
  "commercial-concrete-sealing": {
    local: "Commercial concrete sealing in Vancouver protects slabs from road salt, oil, spilled liquids and the steady moisture of our coastal climate. We apply penetrating densifiers and topical sealers to warehouse floors, loading docks and parking structures to stop dusting and staining. Sealing is the lowest-cost way to extend the life of a Vancouver slab before it needs repair.",
    faqs: [
      { q: "How often should commercial concrete be resealed in Vancouver?", a: "Topical sealers on busy floors usually need refreshing every two to five years depending on traffic. Penetrating densifiers last far longer because they work inside the slab." },
      { q: "Will sealing stop my Vancouver warehouse floor from dusting?", a: "Yes. A densifier hardens the surface so it stops shedding fine powder, which also keeps racking, stock and equipment cleaner." },
    ],
  },
  "metallic-flake-epoxy": {
    local: "Metallic and flake epoxy floors in Vancouver give lobbies, showrooms and restaurants a one-of-a-kind finish that is still tough enough for daily trade. Designers in Yaletown and Gastown choose metallic pigments for flowing, marble-like depth, while full-broadcast flake suits busy retail and service areas. Each floor is hand-worked, so the pattern you see is unique to your space.",
    faqs: [
      { q: "Can I choose the colour of my metallic epoxy floor in Vancouver?", a: "Yes. We provide sample boards in your Vancouver space and test sections on request so you can approve colour and movement before the full floor is poured." },
      { q: "Is flake epoxy easier to maintain than metallic?", a: "Both clean with a damp mop. Flake adds light texture and hides scuffs well, while metallic finishes show more of their gloss and benefit from a periodic polish." },
    ],
  },
  "anti-slip-safety-coatings": {
    local: "Anti-slip safety coatings in Vancouver matter most where rain, grease and cleaning chemicals meet foot traffic. We texture loading docks, ramps, stairs, commercial kitchens and washrooms with grit systems chosen for your hazard level. Many Vancouver insurers and WorkSafeBC inspections look for documented slip control, so we can provide product data for your records.",
    faqs: [
      { q: "How do you pick the right anti-slip texture for a Vancouver kitchen or dock?", a: "We match grit size to the contaminants on the floor. Greasy kitchens and wet docks get a coarser profile, while lobbies and offices use finer textures that still clean easily." },
      { q: "Can anti-slip coatings go over my existing epoxy floor?", a: "Usually yes, after the surface is abraded and cleaned. We test adhesion first so the safety layer bonds to your Vancouver floor." },
    ],
  },
  "commercial-flooring-installation": {
    local: "Commercial flooring installation in Vancouver is our core business. We install vinyl, luxury vinyl, carpet tile, broadloom, rubber and ceramic tile in office suites, clinics, schools, retail units and strata common areas from Downtown to South Vancouver. One crew coordinates substrate prep, transitions and base so your general contractor deals with one schedule and one warranty.",
    faqs: [
      { q: "How long does commercial flooring installation in Vancouver take?", a: "A typical office suite takes a few nights to two weeks depending on area, flooring type and prep. Material lead times and building access rules also affect the schedule, so your quote includes a clear timeline." },
      { q: "Do you handle flooring installation in occupied Vancouver buildings?", a: "Yes. We install in phases, after hours and over weekends, with dust control, floor protection and daily clean-up so tenants and staff can keep working." },
    ],
  },
  "luxury-vinyl-lvt-lvp": {
    local: "Luxury vinyl installation in Vancouver is popular for restaurants in Yaletown, corporate offices in Metrotown and amenity rooms in new towers. We specify the wear layer for your traffic, test slab moisture and install glue-down, loose-lay or click LVT and LVP with clean transitions. Patterns such as herringbone and chevron are set out by hand for a true, even look.",
    faqs: [
      { q: "Is luxury vinyl flooring durable enough for a busy Vancouver restaurant?", a: "Yes, when you choose a commercial wear layer and install it over a flat, dry slab. We recommend products rated for foot and cart traffic and detail the edges against spills." },
      { q: "What is the difference between LVT and LVP?", a: "LVT is tile-format luxury vinyl, often stone or concrete in look, and LVP is plank-format vinyl that mimics wood. Both are installed the same way and suit commercial spaces." },
    ],
  },
  "commercial-sheet-vinyl": {
    local: "Commercial sheet vinyl in Vancouver is the standard for clinics, labs, schools and care homes that need a seamless, hygienic floor. Heat-welded seams and flash-coved edges leave no joint lines for dirt or moisture to enter. We install sheet vinyl in Vancouver healthcare buildings overnight so exam rooms and classrooms are ready for the next day.",
    faqs: [
      { q: "Why choose sheet vinyl over tile for a Vancouver clinic?", a: "Sheet vinyl has far fewer seams than tile, and those seams are heat-welded. That makes it easier to disinfect and better at keeping liquids out of the substrate." },
      { q: "How long does commercial sheet vinyl last?", a: "With proper maintenance, a commercial grade often lasts fifteen to twenty years. Slab moisture and the quality of the installation matter as much as the product." },
    ],
  },
  "commercial-rubber-flooring": {
    local: "Commercial rubber flooring in Vancouver is chosen for gyms, studios, labs, transit areas and healthcare corridors where comfort, noise control and grip all matter. We install rubber rolls and tiles over properly levelled slabs, weld or tightly butt seams and finish with matching rubber base. Rubber also copes well with Vancouver's rainy weather in busy entrances.",
    faqs: [
      { q: "Is rubber flooring good for a Vancouver gym or fitness studio?", a: "Yes. It absorbs impact, reduces noise to the floor below and grips well when dry or damp. We select thickness and density for free weights, cardio or studio classes." },
      { q: "Does rubber flooring smell or stain?", a: "Quality commercial rubber has little odour after installation airs out. Use pH-neutral cleaners and it stays looking new without special coatings." },
    ],
  },
  "integral-flash-coving": {
    local: "Integral flash coving in Vancouver creates a continuous curve from floor to wall, which removes the hidden crevice where dirt, bacteria and moisture collect. We install flash cove with sheet vinyl and resinous floors in clinics, dental offices, labs and commercial kitchens. In Vancouver healthcare spaces, a flash-coved wall base is often part of infection-control specifications.",
    faqs: [
      { q: "What is flash coving in a commercial floor?", a: "Flash coving carries the floor material up the wall in a smooth radius, typically four to six inches, so there is no joint between floor and base." },
      { q: "Can flash coving be added to an existing Vancouver floor?", a: "Often yes with sheet vinyl or resinous floors, though the wall surface must be clean and sound. We confirm feasibility on your free site visit." },
    ],
  },
  "baseboard-moisture-barriers": {
    local: "Baseboard and moisture barrier work in Vancouver protects new floors from the damp slabs common in our coastal climate. We test slab moisture with RH probes, apply epoxy or urethane moisture mitigation where readings demand it and finish with rubber, vinyl or tile base. Skipping this step is the most frequent reason floors lift or bubble in Vancouver buildings.",
    faqs: [
      { q: "Why does my Vancouver slab need a moisture barrier?", a: "Concrete releases moisture vapour for months or years. Without a barrier, that vapour can break adhesives and make vinyl, carpet or wood bubble and lift." },
      { q: "How do you test slab moisture before flooring installation?", a: "We use in-slab RH probes and surface tests to measure moisture, then follow the flooring manufacturer's limits. If readings are too high, we recommend a mitigation system before installation." },
    ],
  },
  "commercial-carpet-tile": {
    local: "Commercial carpet tile installation in Vancouver suits open-plan offices, schools, call centres and co-working floors where noise control and easy replacement count. Tiles are laid in quarter-turn, ashlar or monolithic patterns and individual squares can be swapped after a spill or furniture move. We install carpet tile in Downtown and Metrotown towers during evening and weekend shifts.",
    faqs: [
      { q: "Is carpet tile a good choice for a Vancouver office?", a: "Yes. It reduces noise, adds comfort and lets you replace damaged tiles instead of a whole floor, which keeps long-term costs down." },
      { q: "Can carpet tile go over a raised access floor?", a: "Yes, with the right backing and adhesive system for raised panels. We coordinate with your GC so floor boxes and panel lines are respected." },
    ],
  },
  "broadloom-carpet-installation": {
    local: "Broadloom carpet installation in Vancouver brings warmth and a quiet, upscale finish to boardrooms, hotels, care homes and event spaces. We stretch carpet over cushion, or glue it down where rolling loads demand, and seam it so patterns line up. Careful measuring keeps roll waste low, which helps Vancouver clients with tight fit-out budgets.",
    faqs: [
      { q: "What is the difference between stretch-in and glue-down broadloom?", a: "Stretch-in carpet is tensioned over padding for a soft feel. Glue-down carpet is bonded directly to the slab, which suits wheeled traffic and rolling carts." },
      { q: "Can you install broadloom in a Vancouver care home or hotel while it stays open?", a: "Yes. We work wing by wing or floor by floor, with low-odour adhesives and tidy daily clean-up to keep guests and residents comfortable." },
    ],
  },
  "ceramic-porcelain-tile": {
    local: "Ceramic and porcelain tile installation in Vancouver is a good fit for lobbies, washrooms, restaurants and retail floors that must handle rain, cleaning and heavy foot traffic. We set large-format porcelain over flat, crack-isolated substrates with full mortar coverage, keeping grout lines straight and lippage low. Many Vancouver towers choose porcelain for entrances because it shrugs off salt and grit.",
    faqs: [
      { q: "How do you prevent lippage in large-format tile?", a: "We level the substrate first, use full-coverage mortar and a mechanical levelling system so neighbouring tiles finish flush." },
      { q: "Is porcelain better than ceramic for commercial floors?", a: "Porcelain is denser and absorbs less water, so it is usually the better choice for high-traffic or wet areas. Ceramic is fine for lighter-duty walls and low-traffic floors." },
    ],
  },
  "commercial-quarry-tile": {
    local: "Commercial quarry tile in Vancouver has long been the workhorse floor for restaurant kitchens, bakeries and food-prep rooms. Its dense, unglazed surface grips well even when greasy and stands up to hot washdowns. We set quarry tile over sloped, waterproofed beds with epoxy or urethane grout so Vancouver health inspectors see a floor that drains and cleans properly.",
    faqs: [
      { q: "Why use quarry tile in a Vancouver commercial kitchen?", a: "It resists heat, grease and constant cleaning, and its natural texture provides traction. That is why it is still a go-to for foodservice floors." },
      { q: "Do I need special grout with quarry tile?", a: "Yes. Standard cement grout stains and wears quickly in kitchens, so we use epoxy or urethane grout that resists chemicals and cleans easily." },
    ],
  },
  "entryway-walk-off-systems": {
    local: "Entryway walk-off systems in Vancouver stop rain, mud, road salt and grit at the door before they reach your finished floors. We recess aluminum-framed matting and heavy-duty mats into the slab or install low-profile systems where depth is limited. In a city this wet, a good walk-off mat cuts slip risk, cleaning time and wear on the carpet or vinyl behind it.",
    faqs: [
      { q: "How big should an entrance walk-off mat be?", a: "Ideally long enough for people to take at least four to six steps on it. We size the system to your entrance layout and traffic during your Vancouver site visit." },
      { q: "Can walk-off matting be recessed into an existing floor?", a: "Yes, by cutting a well into the existing floor or setting the system in a new build-up. We confirm depth and drainage before ordering." },
    ],
  },
  "acoustic-subfloor-systems": {
    local: "Acoustic subfloor systems in Vancouver tackle the footfall noise that causes complaints in condos, mixed-use towers, offices and clinics. We install resilient underlays and sound-reducing mats beneath LVT, tile, wood and carpet so the finished floor meets the building's impact-insulation requirement. Strata councils across Vancouver often require proof of sound ratings before approving a flooring change.",
    faqs: [
      { q: "Do Vancouver strata bylaws require acoustic underlay?", a: "Many do, especially for hard-surface floors above occupied suites. We supply product data and ratings so you can submit them with your strata application." },
      { q: "How much noise reduction can I expect?", a: "It varies by system and the slab below, but a properly chosen underlay can cut impact noise by many decibels. We recommend a product against your target rating." },
    ],
  },
  "warehouse-logistics-floors": {
    local: "Warehouse and logistics floors in Vancouver take forklift traffic, pallet jacks and constant movement around the port, Marine Drive and the industrial parks of South Vancouver. We harden slabs with densifiers, coat them with epoxy or polyaspartic, rebuild joints and stripe aisles, docks and pedestrian lanes. Most work is done in sections so the operation keeps shipping.",
    faqs: [
      { q: "How do you coat a working Vancouver warehouse without stopping shipping?", a: "We work in zones, often overnight or on weekends, and re-open cured areas for traffic as we move on. Racking can be shifted in stages to keep operations moving." },
      { q: "Can you add line striping to my warehouse floor?", a: "Yes. We stripe forklift lanes, pedestrian walkways, docks and hazard zones with durable coatings that hold up under wheeled traffic." },
    ],
  },
  "restaurant-kitchen-flooring": {
    local: "Restaurant and kitchen flooring in Vancouver has to survive grease, spills and hot washdowns every day. We install quarry tile, urethane cement and non-slip epoxy in kitchens from Gastown bistros to Metrotown food courts, with sloped drains and coved edges that satisfy health inspectors. Dining rooms get matching LVT, tile or carpet so the whole venue is finished by one team.",
    faqs: [
      { q: "What is the best flooring for a Vancouver restaurant kitchen?", a: "Quarry tile and urethane cement are the usual choices for heat, grease and washdowns. Which one fits depends on your budget, downtime and the existing slab." },
      { q: "Can you renovate a restaurant floor in a weekend?", a: "Many installs are done overnight or during a one- or two-day closure, especially with fast-cure systems. We plan the sequence so you reopen on schedule." },
    ],
  },
  "commercial-flooring-repair": {
    local: "Commercial flooring repair in Vancouver keeps small problems from turning into full replacements. We re-weld failed seams, reset lifting vinyl, replace cracked tile, patch carpet and recoat worn epoxy, always diagnosing the cause first, whether moisture, movement or failed adhesive. Property managers and strata councils across Vancouver call us for priority repairs when a trip hazard needs fixing fast.",
    faqs: [
      { q: "How quickly can you start commercial flooring repair in Vancouver?", a: "Hazards get priority scheduling, often within days. We assess the damage on site, give you a written quote and book the repair around your operating hours." },
      { q: "Is it cheaper to repair my floor or replace it?", a: "Repair usually costs far less when damage is local and the substrate is sound. If failure is widespread, we will tell you honestly and quote a replacement instead." },
    ],
  },
  "commercial-floor-replacement": {
    local: "Commercial floor replacement in Vancouver covers the full job: removal, disposal, substrate testing and the new floor. Replacing carpet, VCT, sheet vinyl or tile in an occupied building takes planning, so we phase the work by zone and use dust control and floor protection throughout. Older Vancouver buildings may hide asbestos in old tile and adhesive, which we coordinate with licensed abatement firms.",
    faqs: [
      { q: "Can you replace flooring in a Vancouver office while we keep working?", a: "Yes. We move the work in phases, often at night or weekends, so each area is ready for staff on schedule." },
      { q: "Should I upgrade materials when replacing my floor?", a: "Replacement is the right time to improve durability. We can compare luxury vinyl, carpet tile, rubber or epoxy against your traffic and maintenance budget." },
    ],
  },
  "joint-spall-crack-stitching": {
    local: "Joint, spall and crack stitching repair in Vancouver keeps industrial slabs working under constant forklift and pallet traffic. We rout and fill cracks, stitch structural cracks with steel staples set in epoxy, rebuild broken joint edges with rapid-set mortars and refill joints with semi-rigid filler. Fast-cure materials let most Vancouver warehouses return to service within hours.",
    faqs: [
      { q: "When should I repair a spalled joint in my Vancouver warehouse?", a: "As soon as edges start to chip. Wheels hammer a spalled edge and make it worse, damaging forklifts and increasing trip hazards." },
      { q: "Will a crack repair stop the crack from coming back?", a: "A properly stitched crack is much less likely to move again, because the slab is tied together. If the substrate is still moving, we will explain what to expect." },
    ],
  },
  "demolition-self-leveling": {
    local: "Demolition and self-leveling work in Vancouver creates the flat, clean base every new floor needs. Older towers and heritage buildings in Gastown and Mount Pleasant often have dips, old adhesive and failed toppings that must go before LVT, sheet vinyl or tile. We use dust-shrouded grinders with HEPA extraction, then prime and pour a self-levelling underlayment sized to your tolerance.",
    faqs: [
      { q: "How flat does a floor need to be before flooring installation?", a: "Most manufacturers ask for about 3/16 inch over 10 feet. We check flatness before we start and level the slab where it falls outside that limit." },
      { q: "How long before I can walk on self-leveling underlayment?", a: "Many products are walkable in two to four hours, though flooring installation often waits longer for the underlayment to dry fully." },
    ],
  },
};

export const areaExtra: Record<string, Extra> = {
  vancouver: {
    local: "Our shop on E 60th Ave places crews minutes from Marine Drive, Marpole and the Fraser River industrial strip as well as Oakridge, Kerrisdale and the airport corridor. South Vancouver customers often need commercial flooring installation in new tenant suites, quick repair for lifting vinyl or cracked tile, and coatings for light-industrial units. Because our trucks load here, we can book site visits quickly and respond to urgent repair calls the same week.",
    faqs: [
      { q: "Do you offer commercial flooring installation in Vancouver after hours?", a: "Yes. Our Vancouver crews install at night and on weekends so offices, schools and clinics stay open during the day." },
      { q: "Do you handle commercial flooring repair in Vancouver for small jobs?", a: "Yes. We take single-room repairs as well as large projects, including lifting vinyl, damaged carpet, cracked tile and worn coatings." },
      { q: "Who is the right contact for flooring in South Vancouver?", a: "Call (604) 540-3999 or use our contact page. Your estimator is based locally at our E 60th Ave office and can usually visit within a few days." },
    ],
  },
  burnaby: {
    local: "Burnaby's fast growth means constant fit-outs in the Brentwood and Metrotown towers and steady upgrades in Lake City, Glenlyon and Big Bend business parks. We install commercial flooring in Burnaby offices, clinics and schools, and repair worn floors in warehouses and light-industrial units along Willingdon and Boundary. SFU and BCIT-area institutions also call us for hygienic vinyl, durable carpet tile and tough epoxy.",
    faqs: [
      { q: "Do you offer commercial flooring installation in Burnaby for new tower suites?", a: "Yes. We install LVT, carpet tile, rubber and base in new Brentwood and Metrotown suites, working with your GC's schedule and building rules." },
      { q: "Can you repair damaged floors in a Burnaby business park?", a: "Yes. We repair cracked slabs, failed epoxy, lifting vinyl and worn carpet in Burnaby business parks, usually with minimal downtime." },
      { q: "Do you provide free estimates in Burnaby?", a: "Yes. Site measurements and written estimates are free anywhere in Burnaby." },
    ],
  },
  "new-westminster": {
    local: "New Westminster blends century-old Columbia Street storefronts, Royal Columbian-area healthcare, schools and riverfront industrial land. Older buildings often have uneven wood or concrete substrates that need levelling before new vinyl or tile, and riverside slabs need moisture testing before coatings. We handle both, plus commercial flooring repair for property managers across the city.",
    faqs: [
      { q: "Can you install new flooring in heritage buildings in New Westminster?", a: "Yes. We assess the substrate first, level it carefully and select materials that suit the building and any heritage requirements." },
      { q: "Do you do flooring installation for healthcare spaces in New Westminster?", a: "Yes. Sheet vinyl with flash coving, LVT and rubber are common choices, installed overnight so clinics keep operating." },
      { q: "Can you coat floors in riverfront warehouses?", a: "Yes. We test moisture and use primers suited to damp slabs before applying epoxy or sealers in riverside industrial buildings." },
    ],
  },
  coquitlam: {
    local: "Coquitlam covers Coquitlam Centre and Lougheed office towers, growing Burquitlam and Maillardville storefronts and new-build schools and clinics on the Burke Mountain side. Our crews serve Coquitlam and the wider Tri-Cities with carpet tile, LVT, tile and epoxy, and take repair calls for lifting floors and cracked slabs. New builds benefit from our moisture testing before any finish goes down.",
    faqs: [
      { q: "Do you serve Port Moody and the rest of the Tri-Cities from Coquitlam?", a: "Yes. We serve Port Moody, Coquitlam and Port Coquitlam, with the same free estimates and scheduling across the Tri-Cities." },
      { q: "Do you do commercial flooring installation in new Coquitlam buildings?", a: "Yes. We install vinyl, carpet tile, tile and epoxy in new offices, clinics and schools, with slab moisture testing before work starts." },
      { q: "Can you repair a lifting floor in a Coquitlam office?", a: "Yes. We diagnose the cause, repair or replace the affected area and match the existing floor as closely as possible." },
    ],
  },
  "port-coquitlam": {
    local: "Port Coquitlam is a major industrial hub, with Mary Hill and Dominion Triangle logistics sites, light manufacturing and fleet yards. Warehouses here need joint and spall repair, densified or epoxy-coated slabs and clear line striping for forklift lanes. We also install commercial interiors for the city's offices, clinics and retail, always scheduled around your shifts.",
    faqs: [
      { q: "Can you repair spalled joints in a Port Coquitlam warehouse?", a: "Yes. We rebuild spalled edges with rapid-set mortars and refill joints, and most areas return to service within hours." },
      { q: "Do you coat warehouse floors in Port Coquitlam?", a: "Yes. Epoxy, polyaspartic and densifier systems are all available, installed in sections so your warehouse keeps running." },
      { q: "Do you also install office flooring in Port Coquitlam?", a: "Yes. Many industrial clients use us for both the warehouse slab and the office carpet tile or LVT at the front of the building." },
    ],
  },
  "downtown-vancouver": {
    local: "Downtown Vancouver office towers, Coal Harbour hotels, Robson Street retail and Granville restaurants each have strict access rules. We work nights and weekends, book freight elevators and loading docks in advance and protect common areas as we go. Typical downtown jobs include carpet tile in tower suites, LVT in retail and hospitality, tile in lobbies and commercial flooring repair for busy property managers.",
    faqs: [
      { q: "Can you install flooring in a Downtown Vancouver tower suite overnight?", a: "Yes. We schedule after-hours work, follow your building's freight and noise rules and have the suite ready by morning." },
      { q: "Do you provide a certificate of insurance for Downtown Vancouver buildings?", a: "Yes. We carry commercial liability and WorkSafeBC coverage and can supply certificates to your property manager." },
      { q: "Do you handle flooring repair in Downtown Vancouver retail?", a: "Yes. We repair lifting vinyl, damaged tile and worn carpet in retail units, often in a single overnight visit." },
    ],
  },
  gastown: {
    local: "Gastown's brick-and-beam buildings along Water Street and Alexander Street have uneven slabs, old adhesives and historic fabric that deserves care. We prepare floors gently, level them where needed and install LVT, sheet vinyl, tile or polished concrete in creative offices, galleries, boutiques and restaurants. Metallic epoxy and polished concrete are popular for a modern look inside the heritage shell.",
    faqs: [
      { q: "Can you level an old Gastown floor before new flooring?", a: "Yes. We grind and apply self-levelling underlayment sized to the dips in older heritage slabs and timber floors." },
      { q: "Do you install restaurant flooring in Gastown?", a: "Yes. We install quarry tile, urethane cement and LVT in Gastown kitchens and dining rooms, with after-hours scheduling." },
      { q: "Do I need heritage approval for new flooring in Gastown?", a: "Interior floors often do not, though some buildings have conditions. Check with your landlord or the City of Vancouver; we can supply product details." },
    ],
  },
  yaletown: {
    local: "Yaletown's converted warehouses, Hamilton Street offices and Mainland Street restaurants combine loft-style concrete with strong design expectations. We install LVT, porcelain tile and metallic epoxy to match, and handle commercial flooring repair for hospitality and strata common areas. Concrete floors in older loft buildings often need moisture testing and levelling first.",
    faqs: [
      { q: "Do you install restaurant floors in Yaletown?", a: "Yes. We work around service hours, installing LVT, tile or epoxy in dining rooms and hygienic quarry or urethane cement in kitchens." },
      { q: "Can you work with strata rules in a Yaletown building?", a: "Yes. We follow strata noise, elevator and access rules and submit insurance and product data when required." },
      { q: "Can you polish or coat the concrete floors in a Yaletown loft office?", a: "Often yes. After testing the slab, we can grind and polish it or apply a decorative epoxy finish." },
    ],
  },
  "mount-pleasant": {
    local: "Mount Pleasant mixes craft breweries, tech studios, galleries and Main Street retail, many in older industrial buildings with sturdy slabs. Brewery and food-production rooms need chemical-resistant epoxy and sloped drains, while studios and showrooms prefer polished concrete or LVT. We handle commercial flooring installation and repair across the area, from Great Northern Way to Cambie.",
    faqs: [
      { q: "Do you install brewery floors in Mount Pleasant?", a: "Yes. We install epoxy and urethane cement systems that resist hot washdowns, acids and caustic cleaners, with drains and coving." },
      { q: "Can you polish a concrete floor in a Mount Pleasant studio?", a: "Yes. Many studios here are built on solid slabs that polish well, giving a durable, low-maintenance floor." },
      { q: "Do you do flooring repair for Main Street retailers?", a: "Yes. We repair lifting vinyl, damaged tile and worn coatings quickly, usually after the shop closes." },
    ],
  },
  metrotown: {
    local: "Metrotown is Burnaby's densest commercial district, with Metropolis, Crystal Mall, Bonsor-area retail, SkyTrain-side towers and clinics. Mall units must follow tight delivery and noise rules, so we install overnight and keep dust down. LVT, porcelain tile and carpet tile are the most common requests, along with commercial flooring repair for lifting seams and cracked tiles.",
    faqs: [
      { q: "Can you install flooring in a Metrotown mall unit overnight?", a: "Yes. We follow mall rules for deliveries, noise and dust and finish before opening." },
      { q: "Do you floor medical and dental offices in Metrotown?", a: "Yes. Sheet vinyl with flash coving, LVT and rubber are typical choices for Metrotown clinics." },
      { q: "Do you do commercial flooring installation in Metrotown condo towers?", a: "Yes. We install acoustic underlay and finish flooring in amenity rooms, lobbies and commercial podiums." },
    ],
  },
  queensborough: {
    local: "Queensborough sits on Lulu Island's eastern end, where distribution centres, fleet yards and new commercial buildings share the area with Port Royal and Boundary Road shopping. Heavy equipment makes industrial floors hard-working, so we deliver warehouse epoxy, hot-tire-resistant garage coatings and joint repair, along with commercial interiors for local offices and retail.",
    faqs: [
      { q: "Do you coat new slabs in Queensborough?", a: "Yes, after moisture testing and cure time. Where schedules are tight, we use moisture-tolerant primers and report readings." },
      { q: "Can you repair damaged joints in a Queensborough warehouse?", a: "Yes. We rebuild spalled joints and fill cracks with fast-cure repair materials to return the slab to service quickly." },
      { q: "Do you stripe forklift lanes in Queensborough warehouses?", a: "Yes. We stripe forklift lanes, parking stalls, pedestrian paths and hazard markings." },
    ],
  },
};

export const serviceFaqs = (slug: string, base: Faq[]) => [...base, ...(serviceExtra[slug]?.faqs ?? [])];
export const areaFaqs = (slug: string, base: Faq[]) => [...base, ...(areaExtra[slug]?.faqs ?? [])];

// Page-level copy for the static pages (kept unique so no page duplicates another).
export const homeFaqs: Faq[] = [
  { q: "Who are the commercial flooring experts in Vancouver, BC?", a: "Ironclad Commercial Floors is a Vancouver commercial flooring contractor based at 783 E 60th Ave, serving offices, schools, clinics, retail and industrial sites across Metro Vancouver." },
  { q: "Do you handle commercial flooring installation in Vancouver?", a: "Yes. Commercial flooring installation in Vancouver is our core service: vinyl, luxury vinyl, carpet tile, rubber, tile and epoxy, installed by one crew after hours or on weekends." },
  { q: "Do you offer commercial flooring repair in Vancouver?", a: "Yes. We repair lifting vinyl, failed seams, cracked tile, damaged carpet and worn coatings, and diagnose the cause first so the repair lasts." },
  { q: "Do you work after hours or on weekends?", a: "Yes. Our crews run day, night and weekend shifts so your business, school or clinic can stay open while we work." },
  { q: "Which flooring is best for my facility?", a: "It depends on traffic, chemicals, moisture, acoustics, maintenance budget and look. We walk your space and recommend the right system: epoxy, polished concrete, luxury vinyl, sheet vinyl, rubber, carpet or tile." },
  { q: "Do you prepare the subfloor?", a: "Always. Moisture testing, grinding, patching and self-levelling are part of every proposal, because a floor is only as good as what is underneath it." },
  { q: "Which areas of Metro Vancouver do you serve?", a: "We cover Vancouver, Downtown, Gastown, Yaletown, Mount Pleasant, Burnaby, Metrotown, New Westminster, Queensborough, Coquitlam and Port Coquitlam." },
  { q: "Are estimates free?", a: "Yes. On-site measurements and written estimates are free, with no obligation." },
];

export const aboutFaqs: Faq[] = [
  { q: "How long has your Vancouver flooring company been operating?", a: "Ironclad Commercial Floors was built by installers who wanted floors that last. Our Vancouver crews bring that subfloor-first approach to every commercial project." },
  { q: "Are your Vancouver flooring installers insured?", a: "Yes. We carry commercial liability and WorkSafeBC coverage, and certificates are available on request for your property manager or general contractor." },
  { q: "What types of buildings do you serve in Vancouver?", a: "We work in offices, schools, clinics, restaurants, retail units, warehouses and strata common areas across Vancouver and Metro Vancouver." },
  { q: "Do you offer both commercial flooring installation and repair in Vancouver?", a: "Yes. Our crews handle new installation, repair and full replacement under one team." },
];

export const contactFaqs: Faq[] = [
  { q: "How do I get a free flooring quote in Vancouver?", a: "Call (604) 540-3999 or send the form on this page with your building type, approximate size and timeline. We book a free site visit and send an itemized quote." },
  { q: "How fast can you visit my Vancouver site?", a: "Most site visits are booked within a few days. Urgent repair calls are prioritized." },
  { q: "Where is your Vancouver office?", a: "We are at 783 E 60th Ave, Vancouver, BC V5X 2A5. The map below shows our location, and we are open 24 hours." },
];

export const servicesIndexFaqs: Faq[] = [
  { q: "What commercial flooring services do you offer in Vancouver?", a: "We offer 24 services: epoxy and concrete systems, luxury vinyl, sheet vinyl, rubber, carpet, tile, warehouse and kitchen floors, plus repair, replacement and levelling." },
  { q: "Do you handle both commercial flooring installation and repair in Vancouver?", a: "Yes. We install new floors and repair existing ones, and we can recommend replacement when repair no longer makes sense." },
  { q: "Can one crew supply several flooring types for the same project?", a: "Yes. Our installation team coordinates vinyl, carpet, tile and epoxy so transitions are clean and the schedule stays simple." },
];

export const areasIndexFaqs: Faq[] = [
  { q: "Which areas of Metro Vancouver do you serve?", a: "We serve Vancouver, Downtown Vancouver, Gastown, Yaletown, Mount Pleasant, Burnaby, Metrotown, New Westminster, Queensborough, Coquitlam and Port Coquitlam." },
  { q: "Do you take projects outside Metro Vancouver?", a: "Yes. Call us with your site location and timeline and we will confirm whether we can take the project." },
  { q: "Is there a travel fee for commercial flooring installation in Metro Vancouver?", a: "Site visits and estimates are free across our listed service areas. Any travel allowance for distant projects is explained in your written quote." },
];

type Step = { title: string; text: string };

/** Unique, service-specific "Our process" steps (4 per service) so no step text repeats across pages. */
export const processSteps: Record<string, Step[]> = {
  "commercial-epoxy-flooring": [
    { title: "Slab testing", text: "We test moisture, hardness and contamination so your commercial epoxy flooring in Vancouver starts on a slab that will hold the coating." },
    { title: "Shot-blast or grind", text: "Diamond grinding or shot-blasting opens the pores of the concrete and removes sealers, oils and laitance for a deep mechanical bond." },
    { title: "Fill and prime", text: "Cracks and joints are repaired, then a penetrating epoxy primer locks into the slab before any body coat goes down." },
    { title: "Build and cure", text: "Body and top coats are applied to specification, then cured and inspected so your facility can return to service on schedule." },
  ],
  "garage-epoxy-flooring": [
    { title: "Garage slab check", text: "We inspect the parkade or shop slab for oil, salt contamination and moisture before choosing a garage epoxy system for Vancouver conditions." },
    { title: "Degrease and grind", text: "Oil and tire residue are removed, then the slab is ground so the coating bonds firmly under heavy vehicle traffic." },
    { title: "Patch and prime", text: "Pits, cracks and expansion joints are patched, and a moisture-tolerant primer protects the bond through our wet winters." },
    { title: "Hot-tire topcoat", text: "A hot-tire-resistant topcoat with optional grit is applied in bays, so garages stay open to residents or fleets between stages." },
  ],
  "concrete-floor-polishing": [
    { title: "Slab evaluation", text: "We assess hardness, flatness and past coatings to decide how much grinding your polished concrete floor in Vancouver needs." },
    { title: "Coarse grinding", text: "Metal-bond diamond tooling removes the surface layer and exposes aggregate to the level of finish you selected." },
    { title: "Densify and refine", text: "A lithium densifier hardens the slab, then progressively finer resin diamonds refine it toward your target sheen." },
    { title: "Guard and burnish", text: "A stain guard is burnished into the floor so spills wipe clean and the shine holds up under daily retail or office traffic." },
  ],
  "commercial-concrete-sealing": [
    { title: "Surface survey", text: "We check porosity, dusting and existing stains to match a penetrating densifier or topical sealer to your Vancouver slab." },
    { title: "Clean and open", text: "Degreasing and light grinding remove contaminants so the commercial concrete sealer can absorb or bond evenly." },
    { title: "Fill and treat", text: "Hairline cracks and joints are filled, then densifier is applied so the slab stops shedding dust and resists moisture." },
    { title: "Seal and protect", text: "The sealer is applied in controlled coats and cured, giving warehouses and parkades a floor that is easier to clean." },
  ],
  "metallic-flake-epoxy": [
    { title: "Colour approval", text: "We mock up metallic pigments or flake blends on sample boards so you approve the look before your Vancouver floor is poured." },
    { title: "Ground and primed", text: "The slab is ground flat and primed, because decorative epoxy shows every flaw in the surface beneath it." },
    { title: "Pour and work", text: "Metallic epoxy is poured and hand-worked for movement, while flake is broadcast to refusal for a textured, uniform finish." },
    { title: "Clear coat finish", text: "Urethane clear coats lock in colour and add scratch resistance, so lobbies and showrooms keep their depth for years." },
  ],
  "anti-slip-safety-coatings": [
    { title: "Hazard review", text: "We walk the dock, ramp or kitchen to identify water, grease and traffic so the anti-slip texture in Vancouver matches the real risk." },
    { title: "Clean and etch", text: "Contaminants are removed and the surface is abraded so the safety coating bonds to existing epoxy, tile or concrete." },
    { title: "Coat and broadcast", text: "A base coat is applied and graded aggregate is broadcast to the grit level chosen for your slip-resistance target." },
    { title: "Seal and document", text: "A sealing top coat locks in the texture, and we provide product data to support your WorkSafeBC and insurance records." },
  ],
  "commercial-flooring-installation": [
    { title: "Site measure", text: "We measure the space, review finishes and confirm access rules so your commercial flooring installation in Vancouver is planned before work starts." },
    { title: "Prep the subfloor", text: "Moisture testing, grinding, patching and levelling prepare the substrate so every finish goes down flat and stays bonded." },
    { title: "Install by zone", text: "One crew installs vinyl, carpet, tile or epoxy in phases, after hours if needed, so offices and clinics stay in operation." },
    { title: "Details and handover", text: "Base, transitions and clean-up are completed, followed by a walk-through and written care notes for your facility team." },
  ],
  "luxury-vinyl-lvt-lvp": [
    { title: "Moisture readings", text: "RH probes and pH tests confirm the slab is dry enough for luxury vinyl, or whether a barrier is needed first." },
    { title: "Level the slab", text: "Patching and self-levelling bring the surface within tolerance, because LVT and LVP telegraph dips and ridges." },
    { title: "Lay out and bond", text: "Planks and tiles are laid out from the centre, then glued down, loose-laid or clicked together to the product specification." },
    { title: "Roll and trim", text: "The floor is rolled for full adhesive transfer, then base and transitions are fitted for a clean, commercial finish." },
  ],
  "commercial-sheet-vinyl": [
    { title: "Infection-control plan", text: "We review cleaning protocols and traffic in your clinic, lab or school so the sheet vinyl system suits Vancouver healthcare standards." },
    { title: "Smooth substrate", text: "The slab is patched, skim-coated and primed, since sheet vinyl needs a perfectly smooth surface to avoid show-through." },
    { title: "Fit and adhere", text: "Rolls are cut to fit, relaxed, then adhered with full-spread adhesive and rolled to remove trapped air." },
    { title: "Weld and cove", text: "Seams are routed and heat-welded, and the vinyl is coved up the wall, leaving no joints where moisture can enter." },
  ],
  "commercial-rubber-flooring": [
    { title: "Use-case review", text: "We match rubber thickness and density to your gym, lab or corridor, covering impact, noise and slip-resistance needs." },
    { title: "Flatten the base", text: "Slabs are levelled and primed so rubber tiles or rolls lie flat, with moisture tested before adhesive is chosen." },
    { title: "Adhere and seam", text: "Rubber is bonded with approved adhesive, then seams are welded or tightly butted so dirt and liquid stay out." },
    { title: "Base and cure", text: "Matching rubber base is applied and the floor is protected while adhesives cure, ready for commercial traffic." },
  ],
  "integral-flash-coving": [
    { title: "Wall and floor check", text: "We confirm walls are sound and the floor system is compatible before planning flash coving in your Vancouver clinic or kitchen." },
    { title: "Form the cove", text: "A cove strip or fillet is fixed at the wall base to create the radius that the flooring will follow." },
    { title: "Run the floor up", text: "Sheet vinyl or resinous material is carried up the wall, typically four to six inches, in one continuous piece." },
    { title: "Cap and seal", text: "A cap strip or sealant finishes the top edge so the floor-to-wall transition has no crevice for bacteria or moisture." },
  ],
  "baseboard-moisture-barriers": [
    { title: "RH probe testing", text: "In-slab relative humidity probes measure vapour emission so your moisture barrier decision in Vancouver is based on data." },
    { title: "Profile the slab", text: "The concrete is shot-blasted or ground to create the profile a moisture mitigation coating needs to adhere." },
    { title: "Apply the barrier", text: "A two-coat epoxy or urethane moisture barrier is applied at the rate required to bring emissions within limits." },
    { title: "Fit the baseboard", text: "Rubber, vinyl or tile base is installed against the finished floor, closing the edge and protecting walls." },
  ],
  "commercial-carpet-tile": [
    { title: "Layout and pattern", text: "We plan quarter-turn, ashlar or monolithic layouts and schedule furniture moves so carpet tile installation in Vancouver causes little disruption." },
    { title: "Prepare the floor", text: "Old flooring is removed, the slab is flattened and primed, and raised-floor panels are checked where present." },
    { title: "Glue and set", text: "Tiles are set with releasable adhesive from a centre line, keeping seams tight so damaged squares can be replaced later." },
    { title: "Clean and inspect", text: "The floor is vacuumed, spare tiles are labelled and stored, and we complete a walk-through with your team." },
  ],
  "broadloom-carpet-installation": [
    { title: "Measure and seam plan", text: "Rolls are measured to minimize waste and plan seams away from traffic lines for broadloom carpet installation in Vancouver." },
    { title: "Prepare and pad", text: "Old carpet is lifted, tack strips and cushion are fitted, or the slab is smoothed for a glue-down installation." },
    { title: "Stretch or bond", text: "Carpet is power-stretched over padding or adhered to the slab, depending on whether comfort or rolling loads come first." },
    { title: "Seam and trim", text: "Seams are heat-bonded, edges trimmed and transitions fitted so patterns line up from room to room." },
  ],
  "ceramic-porcelain-tile": [
    { title: "Layout and grout lines", text: "We set out tile from the centre of the space, planning cuts, grout width and movement joints before any mortar is mixed." },
    { title: "Flatten and isolate", text: "The substrate is levelled and crack-isolation membranes are added where needed to protect ceramic and porcelain tile." },
    { title: "Set with full coverage", text: "Tiles are bedded in mortar with full coverage and a levelling system, so large-format porcelain finishes flush." },
    { title: "Grout and seal", text: "Joints are grouted and sealed, then the floor is cleaned and protected until it is ready for foot traffic." },
  ],
  "commercial-quarry-tile": [
    { title: "Drain and slope plan", text: "We map drains and falls so quarry tile in your Vancouver kitchen sheds water instead of pooling at the edges." },
    { title: "Waterproof the bed", text: "A mortar bed or membrane is installed to create a waterproof layer under the tile in wet kitchen areas." },
    { title: "Set the quarry tile", text: "Dense quarry tiles are set in epoxy or cement mortar with tight joints and cove base returns at the walls." },
    { title: "Epoxy grout", text: "Chemical-resistant grout is packed into joints, cleaned and cured so the floor handles grease and hot washdowns." },
  ],
  "entryway-walk-off-systems": [
    { title: "Traffic and depth survey", text: "We measure entrance traffic and available depth, so the walk-off system in Vancouver is long enough to capture rain and grit." },
    { title: "Cut the recess", text: "A recess is cut or formed in the slab, with drainage considered so water has a place to go." },
    { title: "Fit the frame", text: "Aluminum frames or edging are set level with the surrounding floor to remove trip hazards at the door." },
    { title: "Insert the matting", text: "Walk-off mats or grilles are fitted into the frame and can be lifted later for cleaning underneath." },
  ],
  "acoustic-subfloor-systems": [
    { title: "Target rating", text: "We confirm your strata or tenant impact-noise requirement so the acoustic subfloor in Vancouver is chosen to meet it." },
    { title: "Prepare the slab", text: "The slab is cleaned and flattened, and perimeter isolation strips are placed to stop sound travelling through the walls." },
    { title: "Lay the underlay", text: "Resilient mats or underlayments are rolled out with taped seams to form a continuous sound-reducing layer." },
    { title: "Install the finish", text: "Tile, vinyl, wood or carpet is installed over the underlay, and ratings are documented for your approval file." },
  ],
  "warehouse-logistics-floors": [
    { title: "Operations walk-through", text: "We map forklift routes, racking and shipping hours so the warehouse floor in Vancouver can be treated in sections." },
    { title: "Grind and densify", text: "Surfaces are ground and densified, and pits, cracks and joints are repaired to give forklifts a smooth path." },
    { title: "Coat by zone", text: "Epoxy or polyaspartic coatings are applied zone by zone, with cured areas reopened while we move on." },
    { title: "Stripe and mark", text: "Aisles, docks and pedestrian lanes are striped with durable line markings that improve safety and flow." },
  ],
  "restaurant-kitchen-flooring": [
    { title: "Health code review", text: "We check drainage, cove and slip-resistance requirements so your restaurant kitchen floor in Vancouver is ready for inspection." },
    { title: "Demo and slope", text: "Old tile and failed topping are removed, and the substrate is sloped to drains for reliable washdowns." },
    { title: "Install the system", text: "Quarry tile, urethane cement or non-slip epoxy is installed, with coved edges where walls meet the floor." },
    { title: "Cure and reopen", text: "Fast-cure materials let you reopen quickly, and we schedule the dining room finish to match in the same project." },
  ],
  "commercial-flooring-repair": [
    { title: "Find the cause", text: "We inspect lifting vinyl, failed seams or cracked tile to identify moisture, movement or adhesive failure before quoting repair." },
    { title: "Isolate and protect", text: "The repair area is isolated with dust control so your Vancouver business can keep operating around the work." },
    { title: "Remove and rebuild", text: "Damaged material is removed down to a sound base, and the substrate is patched or levelled to hold the new floor." },
    { title: "Match and blend", text: "New material is installed and blended with the existing floor, then inspected so the repair lasts." },
  ],
  "commercial-floor-replacement": [
    { title: "Phasing plan", text: "We schedule commercial floor replacement in Vancouver by zone, with move-outs, noise limits and access rules agreed ahead." },
    { title: "Tear out safely", text: "Old flooring is removed and disposed of, with licensed abatement coordinated where asbestos is suspected." },
    { title: "Grind and level", text: "Adhesive residue is ground off and the slab is tested, patched and levelled for the new floor." },
    { title: "Install and reopen", text: "The new floor is installed zone by zone, then inspected and handed back so staff can return on schedule." },
  ],
  "joint-spall-crack-stitching": [
    { title: "Map the damage", text: "We survey cracks, spalls and failing joints in your slab to decide where stitching or edge rebuilding is required." },
    { title: "Rout and clean", text: "Cracks and joints are routed and vacuumed so repair materials reach clean, sound concrete on both sides." },
    { title: "Stitch and fill", text: "Steel staples are bonded across structural cracks, and spalled edges are rebuilt with rapid-set repair mortar." },
    { title: "Refill the joints", text: "Joints are filled with semi-rigid filler and trimmed flush, so wheels cross smoothly and edges stop breaking down." },
  ],
  "demolition-self-leveling": [
    { title: "Scope and test", text: "We check floor flatness, old adhesives and possible asbestos so flooring demolition in Vancouver is planned safely." },
    { title: "Dust-controlled removal", text: "Grinders with HEPA extraction remove old flooring, adhesive and failed toppings while keeping dust out of your space." },
    { title: "Prime and dam", text: "The slab is primed and drains and doorways are dammed so self-levelling underlayment flows only where it should." },
    { title: "Pour and flatten", text: "Self-levelling underlayment is pumped and finished to your tolerance, giving a flat base ready for any new floor." },
  ],
};
