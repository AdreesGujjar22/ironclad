import { ServiceItem } from '../types';
import { flooringImages } from '../assets/flooringImages';

export const SERVICES: ServiceItem[] = [
  {
    id: 'commercial-flooring-installation',
    slug: 'flooring-installation',
    name: 'Commercial Flooring Installation',
    category: 'Resilient & Vinyl',
    shortDesc: 'New commercial floors installed on your schedule — offices, clinics, shops and warehouses across Metro Vancouver.',
    longDesc: 'Most managers do not lose sleep over the floor itself. They lose sleep over the two weeks their space is out of action. Our commercial flooring installation crews work nights and weekends so your team walks in Monday to a finished floor and no mess. We test the slab for moisture before anything is glued down, because that single step is what separates a floor that lasts a decade from one that lifts in a year. Vinyl plank, carpet tile, epoxy, polished concrete — we install it, warranty it for ten years, and clean up after ourselves.',
    priceRange: '$5.50 - $14.00 / sq ft',
    durabilityRating: 'Heavy Commercial / Industrial',
    cureTime: '12 - 24 Hours (Fast-Track Available)',
    maintenanceLevel: 'Low Maintenance',
    applications: ['Corporate Offices', 'Retail Centers', 'Medical Clinics', 'Hospitality & Restaurants', 'Educational Facilities'],
    idealFor: ['Corporate Offices', 'Retail Centers', 'Medical Clinics', 'Hospitality & Restaurants', 'Educational Facilities'],
    features: [
      'Red Seal Journeyman Floorcovering Installers',
      'ICRI-Certified Moisture Testing (ASTM F2170 / F1869)',
      'Overnight & Weekend Shifts to Avoid Business Downtime',
      '10-Year Ironclad Commercial Workmanship Warranty'
    ],
    keyFeatures: [
      'Red Seal Journeyman Floorcovering Installers',
      'ICRI-Certified Moisture Testing (ASTM F2170 / F1869)',
      'Overnight & Weekend Shifts to Avoid Business Downtime',
      '10-Year Ironclad Commercial Workmanship Warranty'
    ],
    specs: [
      { label: 'Surface Standard', value: 'ICRI CSP 1 - CSP 4' },
      { label: 'Moisture Tolerance', value: 'Up to 95% RH (ASTM F2170)' },
      { label: 'Installation Fleet', value: 'Dust-Free Planetary Grinders & HEPA Extractors' },
      { label: 'Warranty', value: '10-Year Commercial Installation Warranty' }
    ],
    heroImage: flooringImages.flooringHandsInstallation,
    metaTitle: 'Commercial Flooring Installation Vancouver | Ironclad',
    metaDescription: 'Commercial flooring installation across Canada. Epoxy, vinyl, tile & concrete flooring. Free on-site estimates & 10-year warranty.'
  },
  {
    id: 'commercial-flooring-repair',
    slug: 'flooring-repair',
    name: 'Commercial Flooring Repair',
    category: 'Repair & Restoration',
    shortDesc: 'Cracked slabs, lifting tile and failed coatings fixed fast — often back in service the same shift.',
    longDesc: 'A broken floor is rarely just cosmetic. It is a trip claim waiting to happen and a forklift route nobody wants to use. Our commercial flooring repair crews patch spalled joints, stitch cracks and re-bond delaminated epoxy, usually overnight. Fast-set materials mean traffic can roll again within the hour in most cases. Call us when something fails and we will tell you honestly whether it needs a patch or a proper replacement.',
    priceRange: '$3.50 - $9.00 / linear ft or sq ft',
    durabilityRating: 'Structural Heavy Industrial',
    cureTime: '15 Minutes - 2 Hours Rapid Return to Traffic',
    maintenanceLevel: 'Ultra Low Maintenance',
    applications: ['Active Logistics Hubs', 'Forklift Transit Corridors', 'Commercial Kitchens', 'Automotive Service Bays', 'Manufacturing Plants'],
    idealFor: ['Active Logistics Hubs', 'Forklift Transit Corridors', 'Commercial Kitchens', 'Automotive Service Bays', 'Manufacturing Plants'],
    features: [
      '24/7 Rapid Emergency Response Crews',
      'Polyurea & High-Modulus Structural Epoxy Stitching',
      'Forklift-Ready in 60 Minutes with Fast-Set Polymers',
      'Zero-Dust Containment Protocols'
    ],
    keyFeatures: [
      '24/7 Rapid Emergency Response Crews',
      'Polyurea & High-Modulus Structural Epoxy Stitching',
      'Forklift-Ready in 60 Minutes with Fast-Set Polymers',
      'Zero-Dust Containment Protocols'
    ],
    specs: [
      { label: 'Tensile Bond Strength', value: '> 3,200 PSI (ASTM D4541)' },
      { label: 'Compressive Strength', value: '> 10,500 PSI (ASTM C579)' },
      { label: 'Shore D Hardness', value: '78 - 85' },
      { label: 'Return to Traffic', value: 'Forklifts in 60 Minutes' }
    ],
    heroImage: flooringImages.glovedHandsFlooring,
    metaTitle: 'Commercial Flooring Repair Vancouver BC | Ironclad',
    metaDescription: 'Fast commercial flooring repair across Canada. Cracked concrete, epoxy damage & joint restoration with 24/7 emergency dispatch.'
  },
  {
    id: 'commercial-flooring-replacement',
    slug: 'flooring-replacement',
    name: 'Commercial Flooring Replacement',
    category: 'Repair & Restoration',
    shortDesc: 'Old floor out, new floor in — demolition, subfloor prep and installation handled in planned phases.',
    longDesc: 'There comes a point where patching stops paying. When a floor has failed across the board, commercial flooring replacement is the cheaper answer over five years. We strip the old surface, grind the slab back to a sound profile, level it properly and lay the new system. Work runs in phases so part of your building stays open the whole time. You get one crew, one schedule and one point of contact.',
    priceRange: '$7.00 - $16.00 / sq ft (Includes Demo & Prep)',
    durabilityRating: 'Maximum Heavy Commercial',
    cureTime: 'Turnkey Phased Overnight Handover',
    maintenanceLevel: 'Low Maintenance',
    applications: ['Office Renovations', 'Retail Rebrands', 'Warehouse Conversions', 'Hospitality Modernizations', 'Multi-Tenant Commercial Towers'],
    idealFor: ['Office Renovations', 'Retail Rebrands', 'Warehouse Conversions', 'Hospitality Modernizations', 'Multi-Tenant Commercial Towers'],
    features: [
      'Ride-On Hydraulic Floor Strippers for Rapid Demo',
      'Deep Diamond Profiling & Crack Remediation',
      'Self-Leveling Cementitious Underlayments',
      'Complete Debris Haul-Away & Clean Air Handover'
    ],
    keyFeatures: [
      'Ride-On Hydraulic Floor Strippers for Rapid Demo',
      'Deep Diamond Profiling & Crack Remediation',
      'Self-Leveling Cementitious Underlayments',
      'Complete Debris Haul-Away & Clean Air Handover'
    ],
    specs: [
      { label: 'Demolition Capability', value: 'Up to 15,000 sq ft / 24h shift' },
      { label: 'Dust Control', value: 'HEPA Negative-Air Scrubbers (OSHA Compliant)' },
      { label: 'Subfloor Leveling', value: 'FF/FL Flatness Tolerance Guaranteed' },
      { label: 'Warranty', value: '10-Year Comprehensive System Warranty' }
    ],
    heroImage: flooringImages.laminateMalletInstall,
    metaTitle: 'Commercial Flooring Replacement Vancouver | Ironclad',
    metaDescription: 'Commercial flooring replacement across Canada. Complete demolition, subfloor leveling, and new durable floor installation.'
  },
  {
    id: 'concrete-epoxy-floor-installation',
    slug: 'commercial-epoxy-flooring',
    name: 'Commercial Epoxy Flooring',
    category: 'Concrete & Epoxy',
    shortDesc: 'Seamless, chemical-resistant epoxy floors built for plants, kitchens and warehouses that take a beating.',
    longDesc: 'Epoxy earns its keep in rooms that get washed down, driven on, or spilled in daily. Our commercial epoxy flooring is 100% solids, mechanically ground into the slab so it bonds instead of peeling, and finished seamless so there is nowhere for grime to hide. It shrugs off oils, acids, sanitizers and hot-tire traffic. We will walk your space, talk through the finish and slip rating you actually need, and quote it plainly.',
    priceRange: '$6.00 - $12.00 / sq ft',
    durabilityRating: 'Extreme Heavy Industrial',
    cureTime: '12 - 24 Hours Light Foot Traffic / 48h Forklifts',
    maintenanceLevel: 'Ultra-Low (Seamless Non-Porous)',
    applications: ['Warehouses & Distribution Hubs', 'Food & Beverage Processing', 'Pharmaceutical & Cleanrooms', 'Automotive Dealerships', 'Manufacturing Plants'],
    idealFor: ['Warehouses & Distribution Hubs', 'Food & Beverage Processing', 'Pharmaceutical & Cleanrooms', 'Automotive Dealerships', 'Manufacturing Plants'],
    features: [
      '100% Solids High-Build Industrial Epoxy Formulations',
      'Impermeable to Hydraulic Fluids, Oils & Commercial Solvents',
      'Antimicrobial Additives & Seamless Integral Cove Base Options',
      'Custom Anti-Slip Aggregates from R9 to R13 Coefficient'
    ],
    keyFeatures: [
      '100% Solids High-Build Industrial Epoxy Formulations',
      'Impermeable to Hydraulic Fluids, Oils & Commercial Solvents',
      'Antimicrobial Additives & Seamless Integral Cove Base Options',
      'Custom Anti-Slip Aggregates from R9 to R13 Coefficient'
    ],
    specs: [
      { label: 'System Build', value: '30 mil to 125 mil Multi-Coat' },
      { label: 'Compressive Strength', value: '12,000+ PSI' },
      { label: 'Adhesion to Concrete', value: '> 400 PSI (Concrete Fails First)' },
      { label: 'VOC Content', value: '< 10 g/L (LEED Compliant)' }
    ],
    heroImage: flooringImages.heroCommercialEpoxy,
    metaTitle: 'Commercial Epoxy Flooring Vancouver BC | Ironclad',
    metaDescription: 'Commercial epoxy flooring across Canada. Chemical-resistant, seamless 100% solids epoxy coatings for industrial & commercial facilities.'
  },
  {
    id: 'garage-epoxy-flooring',
    slug: 'garage-epoxy-flooring',
    name: 'Garage Epoxy Flooring',
    category: 'Concrete & Epoxy',
    shortDesc: 'Garage and parkade coatings that survive hot tires, road salt and oil without peeling.',
    longDesc: 'Fleet bays and parkades destroy ordinary paint within a season. Our garage epoxy flooring pairs a ground-in epoxy base with a rapid-cure polyaspartic topcoat, so hot tires, winter salt and dripping oil do not lift it. Most single-bay jobs are back in use the next day. Flake, solid colour or a light-reflective finish for dim parkades — your call, and we will show you samples on site.',
    priceRange: '$6.50 - $11.00 / sq ft',
    durabilityRating: 'High-Impact Vehicle Grade',
    cureTime: '1-Day Rapid Return to Service (Polyaspartic)',
    maintenanceLevel: 'Power-Washable & Chemical Resistant',
    applications: ['Fleet Maintenance Garages', 'Underground Commercial Parkades', 'Auto Dealership Service Drives', 'Fire Stations & EMS Bays', 'Aircraft Hangars'],
    idealFor: ['Fleet Maintenance Garages', 'Underground Commercial Parkades', 'Auto Dealership Service Drives', 'Fire Stations & EMS Bays', 'Aircraft Hangars'],
    features: [
      'Guaranteed Zero Hot-Tire Pickup & Salt Staining',
      'UV-Stable Polyaspartic Clear Topcoat (No Yellowing)',
      'Heavy Full-Broadcast Vinyl Flake or Quartz Systems',
      'Slip-Resistant Aluminum Oxide Texture Options'
    ],
    keyFeatures: [
      'Guaranteed Zero Hot-Tire Pickup & Salt Staining',
      'UV-Stable Polyaspartic Clear Topcoat (No Yellowing)',
      'Heavy Full-Broadcast Vinyl Flake or Quartz Systems',
      'Slip-Resistant Aluminum Oxide Texture Options'
    ],
    specs: [
      { label: 'Abrasion Resistance', value: 'Taber CS-17: < 20 mg loss / 1000 cycles' },
      { label: 'Thermal Resistance', value: '-30°C to +110°C' },
      { label: 'Elongation', value: '150% Elastic Memory' },
      { label: 'UV Resistance', value: '100% Aliphatic UV Stable' }
    ],
    heroImage: flooringImages.garageEpoxyCoating,
    metaTitle: 'Garage Epoxy Flooring Canada | Ironclad Commercial Floors',
    metaDescription: 'Garage epoxy flooring across Canada for fleet garages & parking facilities. Hot-tire resistant, easy-clean coatings with fast cure times.'
  },
  {
    id: 'concrete-floor-polishing',
    slug: 'concrete-floor-polishing',
    name: 'Concrete Floor Polishing',
    category: 'Concrete & Epoxy',
    shortDesc: 'Dull grey slabs turned into bright, hard-wearing polished concrete with almost no upkeep.',
    longDesc: 'If you already have a decent slab, concrete floor polishing is usually the best value in the building. We grind through progressive diamond steps, harden the surface with a lithium densifier and seal it against stains. The result reflects light, so retail and office spaces feel brighter, and maintenance drops to a dust mop and the occasional scrub. No coating to re-apply every few years.',
    priceRange: '$4.50 - $9.00 / sq ft',
    durabilityRating: 'Maximum Long-Term Durability (50+ Year Life)',
    cureTime: 'Immediate Use (No Odor, Zero VOC)',
    maintenanceLevel: 'Extremely Low (Daily Dust Mop / Water Clean)',
    applications: ['Modern Tech Offices', 'Retail Showrooms', 'Schools & Universities', 'Convention Centers', 'Logistics Facilities'],
    idealFor: ['Modern Tech Offices', 'Retail Showrooms', 'Schools & Universities', 'Convention Centers', 'Logistics Facilities'],
    features: [
      'Up to 3000-Grit High-Reflective Gloss Finish',
      'Penetrating Colloidal Lithium Densification',
      'Reflects 30% More Ambient Light (Lowers Energy Bills)',
      'LEED Gold & Platinum Environmental Certification Contributor'
    ],
    keyFeatures: [
      'Up to 3000-Grit High-Reflective Gloss Finish',
      'Penetrating Colloidal Lithium Densification',
      'Reflects 30% More Ambient Light (Lowers Energy Bills)',
      'LEED Gold & Platinum Environmental Certification Contributor'
    ],
    specs: [
      { label: 'Gloss Level', value: 'Level 1 (Honed) to Level 4 (High Reflective Gloss)' },
      { label: 'Surface Hardness', value: 'Mohs Scale 7 - 8 Hardness' },
      { label: 'Light Reflectivity', value: '+30% Ambient Illuminance' },
      { label: 'VOC Content', value: '0 g/L (100% Natural Mechanical Polish)' }
    ],
    heroImage: flooringImages.concretePolishingFloor,
    metaTitle: 'Concrete Floor Polishing Vancouver BC | Ironclad',
    metaDescription: 'Architectural diamond concrete polishing across Canada. High-gloss, lithium-densified, low-maintenance commercial flooring.'
  },
  {
    id: 'commercial-luxury-vinyl-flooring-installation',
    slug: 'commercial-luxury-vinyl-flooring',
    name: 'Commercial Luxury Vinyl Flooring (LVT / LVP)',
    category: 'Resilient & Vinyl',
    shortDesc: 'Commercial-grade LVT and plank that looks like timber or stone and takes real traffic.',
    longDesc: 'Clients want the look of wood in the lobby and something that survives rolling carts in the corridor. Commercial luxury vinyl flooring does both, provided you use a 20 to 30 mil wear layer and the right adhesive — which is where most budget jobs go wrong. It is fully waterproof, quieter underfoot than tile, and a damaged plank can be swapped without redoing the room. Popular in clinics, hotels and offices for exactly those reasons.',
    priceRange: '$5.50 - $9.50 / sq ft',
    durabilityRating: 'Heavy Commercial (20–30 mil Wear Layer)',
    cureTime: '12 - 24 Hours Traffic Ready',
    maintenanceLevel: 'No Wax / Easy Neutral pH Cleaner',
    applications: ['Corporate Boardrooms & Offices', 'Medical & Dental Clinics', 'Boutique Retail & Hospitality', 'Multi-Family Residential Corridors', 'Senior Living Centers'],
    idealFor: ['Corporate Boardrooms & Offices', 'Medical & Dental Clinics', 'Boutique Retail & Hospitality', 'Multi-Family Residential Corridors', 'Senior Living Centers'],
    features: [
      'Commercial 28 mil Ceramic Bead Infused Wear Layer',
      '100% Waterproof Rigid Core (SPC / WPC Construction)',
      'IIC 72 Sound Transmission Acoustic Underlayment',
      'Red Seal Precision Seam & Perimeter Alignment'
    ],
    keyFeatures: [
      'Commercial 28 mil Ceramic Bead Infused Wear Layer',
      '100% Waterproof Rigid Core (SPC / WPC Construction)',
      'IIC 72 Sound Transmission Acoustic Underlayment',
      'Red Seal Precision Seam & Perimeter Alignment'
    ],
    specs: [
      { label: 'Wear Layer', value: '20 - 30 mil (0.5 - 0.76 mm) Polyurethane/Ceramic' },
      { label: 'Total Thickness', value: '5.0 mm - 8.0 mm' },
      { label: 'Acoustic Rating', value: 'STC 65 / IIC 72 with Integrated Pad' },
      { label: 'Warranty', value: '15-Year Commercial Heavy Duty Warranty' }
    ],
    heroImage: flooringImages.luxuryWoodFloorInterior,
    metaTitle: 'Commercial Luxury Vinyl Flooring Canada | Ironclad Floors',
    metaDescription: 'Commercial LVT & LVP installation across Canada. 100% waterproof, 28-mil wear layers, acoustic dampening for offices and retail.'
  },
  {
    id: 'carpet-tile-installation',
    slug: 'carpet-tile-installation',
    name: 'Commercial Carpet Tile Installation',
    category: 'Tile & Carpet',
    shortDesc: 'Modular carpet tile for offices and schools — quiet, stain-resistant and replaceable one tile at a time.',
    longDesc: 'Open-plan offices get loud, and broadloom makes every coffee spill a full-room problem. Carpet tile installation solves both. Tiles soak up sound, resist staining and lift out individually when one gets ruined. We work around access floors, lift and re-set furniture overnight, and lay out patterns so the room reads as designed rather than patched together.',
    priceRange: '$4.50 - $8.50 / sq ft',
    durabilityRating: 'High Foot Traffic Corporate Grade',
    cureTime: 'Immediate Foot Traffic Upon Placement',
    maintenanceLevel: 'Vacuum & Spot Tile Replacement',
    applications: ['Corporate Office Floors', 'Call Centers & Open Workspaces', 'Law Firms & Financial Suites', 'Conference Centers', 'Higher Education Campuses'],
    idealFor: ['Corporate Office Floors', 'Call Centers & Open Workspaces', 'Law Firms & Financial Suites', 'Conference Centers', 'Higher Education Campuses'],
    features: [
      'Solution-Dyed Type 6,6 Stain-Resistant Nylon Fibers',
      'Cushion-Backed Ergonomic Underfoot Acoustic Support',
      'Leverage-Lift System for Zero-Disassembly Office Furniture Installation',
      'CRI Green Label Plus Certified Indoor Air Quality'
    ],
    keyFeatures: [
      'Solution-Dyed Type 6,6 Stain-Resistant Nylon Fibers',
      'Cushion-Backed Ergonomic Underfoot Acoustic Support',
      'Leverage-Lift System for Zero-Disassembly Office Furniture Installation',
      'CRI Green Label Plus Certified Indoor Air Quality'
    ],
    specs: [
      { label: 'Fiber Type', value: '100% Solution Dyed Type 6,6 Nylon' },
      { label: 'Tile Dimensions', value: '50cm x 50cm, 25cm x 100cm Planks' },
      { label: 'Sound Absorption (NRC)', value: '0.25 - 0.35 NRC' },
      { label: 'Static Resistance', value: '< 3.0 kV (AATCC 134)' }
    ],
    heroImage: flooringImages.flooringInstallationLvt,
    metaTitle: 'Carpet Tile Installation Vancouver BC | Ironclad',
    metaDescription: 'Modular commercial carpet tile installation across Canada. Acoustic dampening, stain-resistant nylon tiles for corporate offices.'
  },
  {
    id: 'commercial-sheet-vinyl-flooring-installation',
    slug: 'commercial-sheet-vinyl-flooring',
    name: 'Commercial Sheet Vinyl Flooring',
    category: 'Resilient & Vinyl',
    shortDesc: 'Heat-welded sheet vinyl with coved base for clinics, labs and other spaces that must stay sterile.',
    longDesc: 'In a treatment room or lab there is no room for a seam that traps fluid. Commercial sheet vinyl flooring is heat-welded into one continuous surface and coved up the wall, so there is no joint at the floor line to scrub. It cleans fast, meets infection-control expectations and holds up to constant disinfectant. We have done clinics, dental suites, veterinary rooms and research facilities around the Lower Mainland.',
    priceRange: '$8.00 - $14.00 / sq ft',
    durabilityRating: 'Medical / Critical Hygiene Grade',
    cureTime: '24 Hours Post-Welding',
    maintenanceLevel: 'Non-Porous / Disinfectant Resistant',
    applications: ['Operating Theaters & Surgical Suites', 'Cleanrooms & Biopharma Labs', 'Assisted Living Care Rooms', 'Commercial Laundries', 'Veterinary Clinics'],
    idealFor: ['Operating Theaters & Surgical Suites', 'Cleanrooms & Biopharma Labs', 'Assisted Living Care Rooms', 'Commercial Laundries', 'Veterinary Clinics'],
    features: [
      'Precision Heat-Welded Seams with Matching Vinyl Rod',
      'Seamless 6" Integral Flash Coving with Capping Strip',
      'Resistant to Betadine, Iodine, Quaternary Cleaners & Acids',
      'Red Seal Certified Installation Master Craftsmen'
    ],
    keyFeatures: [
      'Precision Heat-Welded Seams with Matching Vinyl Rod',
      'Seamless 6" Integral Flash Coving with Capping Strip',
      'Resistant to Betadine, Iodine, Quaternary Cleaners & Acids',
      'Red Seal Certified Installation Master Craftsmen'
    ],
    specs: [
      { label: 'Composition', value: 'Homogeneous Vinyl Binder Group T' },
      { label: 'Slip Resistance', value: 'R10 / DIN 51130' },
      { label: 'Bacterial Resistance', value: 'ISO 846 (Does Not Harbor Growth)' },
      { label: 'Fire Rating', value: 'Class 1 / CAN/ULC S102.2' }
    ],
    heroImage: flooringImages.vinylPlankKneeling,
    metaTitle: 'Commercial Sheet Vinyl Flooring Canada | Ironclad Floors',
    metaDescription: 'Hygienic heat-welded commercial sheet vinyl across Canada. Integral flash coving for hospitals, labs, and sterile clinics.'
  },
  {
    id: 'restaurant-flooring-installation',
    slug: 'restaurant-flooring-installation',
    name: 'Restaurant & Kitchen Flooring',
    category: 'Sector Specific',
    shortDesc: 'Kitchen and dining floors that handle boiling washdowns, grease and constant foot traffic.',
    longDesc: 'A commercial kitchen is the hardest floor environment there is: hot oil, steam cleaning, animal fat and staff moving at speed. Restaurant flooring installation here means urethane cement or quarry tile set in epoxy grout, not something that peels after a summer. We build in slope to drains, keep the surface grippy when wet, and schedule around service so you lose as few covers as possible.',
    priceRange: '$9.00 - $16.00 / sq ft',
    durabilityRating: 'Extreme Thermal & Chemical Shock Grade',
    cureTime: '8 - 12 Hours Fast Cure Overnight Handover',
    maintenanceLevel: 'Steam-Cleanable & Pressure-Washable',
    applications: ['Commercial Kitchens & Bakeries', 'Breweries & Distilleries', 'Front-of-House Dining Rooms', 'Bar Lines & Dishwashing Stations', 'Food Distribution Plants'],
    idealFor: ['Commercial Kitchens & Bakeries', 'Breweries & Distilleries', 'Front-of-House Dining Rooms', 'Bar Lines & Dishwashing Stations', 'Food Distribution Plants'],
    features: [
      'Withstands Thermal Shock from -40°C to +120°C',
      'Monolithic Integral Cove Base (CFIA / Canadian Health Code Compliant)',
      'Aggressive Anti-Slip Textures with Wet Traction Certifications',
      'Overnight Installation with Zero Loss of Breakfast Service'
    ],
    keyFeatures: [
      'Withstands Thermal Shock from -40°C to +120°C',
      'Monolithic Integral Cove Base (CFIA / Canadian Health Code Compliant)',
      'Aggressive Anti-Slip Textures with Wet Traction Certifications',
      'Overnight Installation with Zero Loss of Breakfast Service'
    ],
    specs: [
      { label: 'Thickness', value: '3/16" to 1/4" (4.5mm - 6.0mm) Urethane Cement' },
      { label: 'Thermal Range', value: '-40°F to +250°F (-40°C to +120°C)' },
      { label: 'Health Approval', value: 'CFIA & Canadian Food Inspection Agency Compliant' },
      { label: 'Compressive Strength', value: '9,000 PSI (ASTM C579)' }
    ],
    heroImage: flooringImages.industrialEpoxyWarehouse,
    metaTitle: 'Restaurant & Kitchen Flooring Canada | Ironclad Floors',
    metaDescription: 'Commercial kitchen & restaurant flooring across Canada. Thermal-shock urethane cement, CFIA compliant, 24/7 overnight installation.'
  },
  {
    id: 'warehouse-flooring-installation',
    slug: 'warehouse-flooring-installation',
    name: 'Warehouse & Industrial Flooring',
    category: 'Sector Specific',
    shortDesc: 'Slabs, joint armour and line striping built for reach trucks and non-stop pallet movement.',
    longDesc: 'Joints are where warehouse floors die. Reach trucks hammer the edges, the edges spall, and then the whole aisle needs attention. Our warehouse flooring installation work armours those joints with semi-rigid polyurea, hardens the slab surface and lays clear safety striping for traffic and pick zones. We phase the work aisle by aisle so shipping never stops.',
    priceRange: '$3.50 - $8.50 / sq ft',
    durabilityRating: 'Heavy Industrial Freight Load Grade',
    cureTime: 'Fast-Track Phased Execution',
    maintenanceLevel: 'Extremely Low Maintenance',
    applications: ['Distribution Centers', 'Freight Terminals', 'Manufacturing Facilities', 'Cold Storage Warehouses', 'Aircraft Maintenance Bays'],
    idealFor: ['Distribution Centers', 'Freight Terminals', 'Manufacturing Facilities', 'Cold Storage Warehouses', 'Aircraft Maintenance Bays'],
    features: [
      'High-Load Forklift Wheel Abrasion Resistance',
      'Provincial Safety & CCOHS Safety Walkways & Aisle Striping',
      'Armored Joint Spall Repair & Polyurea Filling',
      'Phased Bay-by-Bay Handover with Zero Facility Shutoff'
    ],
    keyFeatures: [
      'High-Load Forklift Wheel Abrasion Resistance',
      'Provincial Safety & CCOHS Safety Walkways & Aisle Striping',
      'Armored Joint Spall Repair & Polyurea Filling',
      'Phased Bay-by-Bay Handover with Zero Facility Shutoff'
    ],
    specs: [
      { label: 'Tire Load Rating', value: 'Up to 25,000 lbs Point Load' },
      { label: 'Joint Protection', value: '100% Solid Polyurea Hardness Shore D 85' },
      { label: 'Surface Profile', value: 'CSP 3 Mechanical Diamond Profile' },
      { label: 'Safety Compliance', value: 'Canadian Safety Standards & High-Visibility Line Standards' }
    ],
    heroImage: flooringImages.commercialLuxuryVinyl,
    metaTitle: 'Warehouse Flooring Vancouver BC | Ironclad Floors',
    metaDescription: 'Industrial warehouse flooring across Canada. Heavy forklift-grade polished concrete, joint armor & safety line striping.'
  },
  {
    id: 'commercial-concrete-floor-sealing',
    slug: 'commercial-concrete-floor-sealing',
    name: 'Commercial Concrete Sealing',
    category: 'Concrete & Epoxy',
    shortDesc: 'Penetrating sealers that stop dusting, staining and freeze-thaw damage on concrete slabs and parkades.',
    longDesc: 'If your slab leaves a fine grey dust on everything, it is breaking down at the surface. Commercial concrete floor sealing soaks into the pores and blocks water, salt and oil before they get in. It is the least expensive thing you can do to add years to a parkade deck or shop floor, and it can usually be applied over a weekend with no demolition at all.',
    priceRange: '$1.75 - $3.75 / sq ft',
    durabilityRating: 'High-Penetration Protective Seal',
    cureTime: '4 - 8 Hours Rapid Dry',
    maintenanceLevel: 'Easy Washable',
    applications: ['Commercial Parkades', 'Loading Docks', 'Mechanical Rooms', 'Exterior Plaza Slabs', 'Service Basements'],
    idealFor: ['Commercial Parkades', 'Loading Docks', 'Mechanical Rooms', 'Exterior Plaza Slabs', 'Service Basements'],
    features: [
      '100% Breathable Penetrating Silane-Siloxane Formulations',
      'Eliminates Concrete Dusting in Active Storage Areas',
      'Resistant to De-Icing Salts, Chlorides & Canadian Freeze-Thaw Cycles',
      'Zero Peeling or Delamination Guarantee'
    ],
    keyFeatures: [
      '100% Breathable Penetrating Silane-Siloxane Formulations',
      'Eliminates Concrete Dusting in Active Storage Areas',
      'Resistant to De-Icing Salts, Chlorides & Canadian Freeze-Thaw Cycles',
      'Zero Peeling or Delamination Guarantee'
    ],
    specs: [
      { label: 'Penetration Depth', value: 'Up to 3/8" (9.5mm) into Concrete Matrix' },
      { label: 'Water Repellency', value: '98% Reduction in Water Permeability' },
      { label: 'VOC Compliance', value: '< 50 g/L (Ultra Low VOC)' },
      { label: 'Lifespan', value: '5 - 10 Year Re-application Cycle' }
    ],
    heroImage: flooringImages.flooringHandsInstallation,
    metaTitle: 'Commercial Concrete Sealing Canada | Ironclad Floors',
    metaDescription: 'Commercial concrete floor sealing across Canada. Silane-siloxane & lithium penetrating sealers for parkades and slabs.'
  }
];
