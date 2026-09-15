import { ServiceItem } from '../types';
import { flooringImages } from '../assets/flooringImages';

export const SERVICES: ServiceItem[] = [
  {
    id: 'commercial-flooring-installation',
    slug: 'flooring-installation',
    name: 'Commercial Flooring Installation',
    category: 'Resilient & Vinyl',
    shortDesc: 'Turnkey commercial flooring installation for corporate offices, retail spaces, healthcare facilities, and warehouses across Canada.',
    longDesc: 'Ironclad Commercial Floors delivers commercial flooring installation engineered for heavy foot traffic, mechanical loads, and architectural aesthetics across Canada. From commercial luxury vinyl plank (LVP) and modular carpet tiles to industrial epoxy and polished concrete, our Red Seal installers manage every phase from precision moisture testing to flawless handover.',
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
    metaTitle: 'Commercial Flooring Installation Canada | Ironclad Commercial Floors',
    metaDescription: 'Commercial flooring installation across Canada. Epoxy, vinyl, tile & concrete flooring. Free on-site estimates & 10-year warranty.'
  },
  {
    id: 'commercial-flooring-repair',
    slug: 'flooring-repair',
    name: 'Commercial Flooring Repair',
    category: 'Repair & Restoration',
    shortDesc: '24/7 commercial flooring repair across Canada. Spalled joint patching, epoxy delamination repair, cracked concrete stitching & tile replacement.',
    longDesc: 'Damaged commercial floors represent liability, trip hazards, and operational disruption. Ironclad provides rapid-response commercial floor repair across Canadian commercial and industrial facilities. Using polyurea rapid-cure elastomers, structural epoxy injections, and precision diamond grinding, we restore floor integrity overnight without halting your workflow.',
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
    metaTitle: 'Commercial Flooring Repair Canada | Ironclad Commercial Floors',
    metaDescription: 'Fast commercial flooring repair across Canada. Cracked concrete, epoxy damage & joint restoration with 24/7 emergency dispatch.'
  },
  {
    id: 'commercial-flooring-replacement',
    slug: 'flooring-replacement',
    name: 'Commercial Flooring Replacement',
    category: 'Repair & Restoration',
    shortDesc: 'Full tear-out, subfloor reconstruction, and turnkey replacement of aged or failed commercial floors across Canada.',
    longDesc: 'When existing floors reach end-of-life or suffer widespread moisture failure, Ironclad executes comprehensive flooring replacement. We handle mechanical demolition with ride-on tile strippers, dustless diamond profiling, self-leveling underlayments, and new high-performance floor installation in organized phases nationwide.',
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
    metaTitle: 'Commercial Flooring Replacement Canada | Ironclad Commercial Floors',
    metaDescription: 'Commercial flooring replacement across Canada. Complete demolition, subfloor leveling, and new durable floor installation.'
  },
  {
    id: 'concrete-epoxy-floor-installation',
    slug: 'commercial-epoxy-flooring',
    name: 'Commercial Epoxy Flooring',
    category: 'Concrete & Epoxy',
    shortDesc: 'Industrial & commercial 100% solids epoxy flooring systems across Canada. Chemical-resistant, seamless, and high-impact durable.',
    longDesc: 'Ironclad’s commercial epoxy flooring systems combine 100% solids high-build epoxy with diamond-ground mechanical keying to produce an impermeable, chemical-resistant, monolithic surface. Engineered for Canadian commercial facilities to resist heavy forklift traffic, oils, acids, sanitizers, and thermal shock.',
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
    metaTitle: 'Commercial Epoxy Flooring Canada | Ironclad Commercial Floors',
    metaDescription: 'Commercial epoxy flooring across Canada. Chemical-resistant, seamless 100% solids epoxy coatings for industrial & commercial facilities.'
  },
  {
    id: 'garage-epoxy-flooring',
    slug: 'garage-epoxy-flooring',
    name: 'Garage Epoxy Flooring',
    category: 'Concrete & Epoxy',
    shortDesc: 'Heavy-duty polyaspartic & epoxy garage floor coatings for fleet facilities, parking structures, and automotive bays across Canada.',
    longDesc: 'Engineered specifically for hot-tire pickup resistance, road salts, oil leaks, and abrasive vehicle friction. Ironclad installs commercial garage epoxy and rapid-cure polyaspartic topcoats for fleet maintenance depots, commercial parkades, automotive showrooms, and detail shops across Canada.',
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
    shortDesc: 'Architectural diamond-polished concrete floors with lithium densifiers for retail, offices, and modern public facilities across Canada.',
    longDesc: 'Transform dull concrete into a gleaming, rock-hard architectural floor. Ironclad uses 8-step diamond planetary grinding, penetrating colloidal lithium densifiers, and stain-resistant penetrating guards to create a low-maintenance, light-reflective polished floor nationwide.',
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
    metaTitle: 'Concrete Floor Polishing Canada | Ironclad Commercial Floors',
    metaDescription: 'Architectural diamond concrete polishing across Canada. High-gloss, lithium-densified, low-maintenance commercial flooring.'
  },
  {
    id: 'commercial-luxury-vinyl-flooring-installation',
    slug: 'commercial-luxury-vinyl-flooring',
    name: 'Commercial Luxury Vinyl Flooring (LVT / LVP)',
    category: 'Resilient & Vinyl',
    shortDesc: 'Architectural luxury vinyl tile and plank installation with commercial 20-30 mil wear layers for offices, clinics, and hotels across Canada.',
    longDesc: 'Commercial Luxury Vinyl Tile (LVT) and Plank (LVP) deliver realistic timber, stone, and architectural concrete aesthetics combined with 100% waterproof performance and acoustic dampening. Installed with moisture-cured commercial adhesives or loose-lay interlocking systems for commercial clients nationwide.',
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
    shortDesc: 'Modular commercial carpet tiles with stain-resistant nylon fibers and acoustic backing for corporate offices and institutions across Canada.',
    longDesc: 'Modular carpet tiles offer unmatched acoustic comfort, easy tile-by-tile replacement, and endless design patterns. Ironclad provides full adhesive pressure-sensitive installations, raised access floor compatibility, and overnight furniture lift systems for facilities across Canada.',
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
    metaTitle: 'Commercial Carpet Tile Installation Canada | Ironclad Commercial Floors',
    metaDescription: 'Modular commercial carpet tile installation across Canada. Acoustic dampening, stain-resistant nylon tiles for corporate offices.'
  },
  {
    id: 'commercial-sheet-vinyl-flooring-installation',
    slug: 'commercial-sheet-vinyl-flooring',
    name: 'Commercial Sheet Vinyl Flooring',
    category: 'Resilient & Vinyl',
    shortDesc: 'Homogeneous heat-welded sheet vinyl with 6-inch integral flash coving for hospitals, labs, and cleanroom facilities across Canada.',
    longDesc: 'Engineered for sterile clinical environments requiring seamless, monolithic hygiene. Ironclad specializes in heat-welded grooved seam technology, hygienic cove base forming, and polyurethane anti-staining surface treatments for Canadian healthcare and research facilities.',
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
    shortDesc: 'Thermal-shock resistant urethane cement, quarry tile, and anti-slip epoxy systems for commercial kitchens and dining rooms across Canada.',
    longDesc: 'Commercial kitchens subject floors to extreme thermal shock (hot oil and 80°C steam washdowns), organic animal fats, continuous water, and heavy impact. Ironclad installs high-performance urethane concrete mortar systems and heavy quarry tile with 100% epoxy grout nationwide.',
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
    shortDesc: 'Heavy-tonnage polished concrete, high-traffic line striping, and chemical-resistant coatings for logistics hubs across Canada.',
    longDesc: 'Built to withstand 10,000 lb reach trucks, hard urethane wheel abrasion, and continuous pallet drag. Ironclad provides high-flatness (FF/FL) joint armor, armored polyurea edge filler, safety zone striping, and penetrating lithium hardeners across Canadian distribution networks.',
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
    metaTitle: 'Warehouse & Industrial Flooring Canada | Ironclad Commercial Floors',
    metaDescription: 'Industrial warehouse flooring across Canada. Heavy forklift-grade polished concrete, joint armor & safety line striping.'
  },
  {
    id: 'commercial-concrete-floor-sealing',
    slug: 'commercial-concrete-floor-sealing',
    name: 'Commercial Concrete Sealing',
    category: 'Concrete & Epoxy',
    shortDesc: 'Penetrating silane-siloxane, lithium, and acrylic concrete sealers for commercial slabs and parkades across Canada.',
    longDesc: 'Prevent concrete dusting, water intrusion, freeze-thaw spalling, and chemical staining with Ironclad’s penetrating commercial concrete sealers. Deep molecular penetration creates a hydrophobic barrier inside the concrete pore network, engineered for harsh Canadian freeze-thaw climates.',
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
