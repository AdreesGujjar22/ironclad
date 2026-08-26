import { LocationArea } from '../types';
import { flooringImages } from '../assets/flooringImages';

export const LOCATIONS: LocationArea[] = [
  // 1. Regional City Hubs
  {
    id: 'vancouver',
    slug: 'vancouver',
    name: 'Vancouver',
    headline: 'Commercial Flooring Contractor in Vancouver, BC (HQ)',
    metaTitle: 'Commercial Flooring Contractor Vancouver BC | Ironclad Floors',
    metaDescription: 'Commercial Flooring Contractor in Vancouver, BC. Headquarters at 783 E 60th Ave. 24/7 industrial epoxy, polished concrete & commercial flooring installation.',
    address: '783 E 60th Ave, Vancouver, BC V5X 2A5 Canada',
    phone: '(604) 540-3999',
    coverageZones: ['Downtown Vancouver', 'Yaletown', 'Gastown', 'Mount Pleasant', 'False Creek', 'Kitsilano', 'South Vancouver / Marine Gateway', 'Grandview-Woodland'],
    highlights: [
      'Headquarters & Main Equipment Yard at 783 E 60th Ave',
      'Rapid 30-minute emergency dispatch across Vancouver',
      'Over 650+ corporate, retail & industrial projects delivered',
      '24/7 overnight installation crews for zero business downtime'
    ],
    popularServices: [
      'Concrete Floor Polishing',
      'Commercial Luxury Vinyl Flooring Installation',
      'Epoxy Floor Coating',
      'Office Flooring Installation',
      'Restaurant Flooring Installation',
      'Warehouse Flooring Installation'
    ],
    description: 'Ironclad Commercial Floors is proud to be Vancouver’s premier heavy-duty commercial flooring contractor. Operating from our central facility at 783 E 60th Ave, we provide comprehensive industrial concrete polishing, chemical-resistant epoxy coatings, luxury vinyl planks, and modular carpet tiles to Downtown corporate towers, Gastown restaurants, Mount Pleasant tech offices, and South Vancouver industrial facilities.',
    image: flooringImages.flooringHandsInstallation,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.2224186218696!2d-123.088378!3d49.2158341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486751bef21a57d%3A0x41cd6e337360bab!2sIRONCLAD%20COMMERCIAL%20FLOORS!5e1!3m2!1sen!2sca!4v1787440209608!5m2!1sen!2sca',
    completedProjectsCount: 650,
    averageResponseTime: 'Under 30 Minutes'
  },
  {
    id: 'burnaby',
    slug: 'burnaby',
    name: 'Burnaby',
    headline: 'Commercial Flooring Contractor in Burnaby, BC',
    metaTitle: 'Commercial Flooring Contractor Burnaby BC | Ironclad Floors',
    metaDescription: 'Commercial Flooring Contractor in Burnaby, BC. Expert epoxy, polished concrete, carpet tile & industrial floor installations by Ironclad Commercial Floors.',
    phone: '(604) 540-3999',
    coverageZones: ['Metrotown', 'Brentwood', 'Big Bend Industrial Park', 'Production Way / Lake City', 'SFU UniverCity', 'Willingdon Business Park'],
    highlights: [
      'Extensive industrial experience in Big Bend & Lake City industrial sectors',
      'High-capacity corporate office installations around Metrotown & Brentwood',
      'Over 320+ commercial projects completed in Burnaby',
      'Dedicated 24/7 crew response for manufacturing and commercial facilities'
    ],
    popularServices: [
      'Industrial Flooring Installation',
      'Warehouse Flooring Installation',
      'Commercial Epoxy Floor Repair',
      'Carpet Tile Installation',
      'Concrete Floor Polishing',
      'Commercial Floor Leveling and Preparation'
    ],
    description: 'From heavy manufacturing plants in the Big Bend industrial park to high-tech corporate offices around Metrotown and Brentwood, Ironclad Commercial Floors delivers high-performance flooring systems across Burnaby. Our certified crews engineer durable, forklift-rated epoxy, seamless vinyl, and high-gloss polished concrete tailored to Burnaby businesses.',
    image: flooringImages.industrialEpoxyWarehouse,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Burnaby,+BC,+Canada&t=&z=13&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 320,
    averageResponseTime: 'Under 45 Minutes'
  },
  {
    id: 'new-westminster',
    slug: 'new-westminster',
    name: 'New Westminster',
    headline: 'Commercial Flooring Contractor in New Westminster, BC',
    metaTitle: 'Commercial Flooring New Westminster | Ironclad Floors',
    metaDescription: 'Commercial Flooring Contractor in New Westminster, BC. Concrete polishing, commercial vinyl, retail & heritage floor restoration by Ironclad Commercial Floors.',
    phone: '(604) 540-3999',
    coverageZones: ['Downtown New Westminster', 'Queensborough Industrial', 'Uptown', 'Sapperton / Brewery District', 'Quayside'],
    highlights: [
      'Specialists in Queensborough distribution centers and retail complexes',
      'Heritage commercial restoration along historic Columbia Street',
      'Healthcare and medical clinic flooring near Royal Columbian Hospital',
      'Over 180+ commercial projects delivered in New Westminster'
    ],
    popularServices: [
      'Commercial Floor Restoration',
      'Commercial Luxury Vinyl Flooring Installation',
      'Healthcare Flooring Installation',
      'Commercial Concrete Floor Repair',
      'Concrete Epoxy Floor Installation',
      'Retail Flooring Installation'
    ],
    description: 'Ironclad Commercial Floors serves New Westminster with reliable, high-end commercial flooring installation and restoration. We handle logistics facilities in Queensborough, heritage building commercial retrofits in Downtown New West, and medical clinics in the Brewery District, delivering durable, moisture-resistant flooring on time and on budget.',
    image: flooringImages.luxuryWoodFloorInterior,
    mapEmbedUrl: 'https://maps.google.com/maps?q=New+Westminster,+BC,+Canada&t=&z=13&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 180,
    averageResponseTime: 'Under 45 Minutes'
  },
  {
    id: 'coquitlam',
    slug: 'coquitlam',
    name: 'Coquitlam',
    headline: 'Commercial Flooring Contractor in Coquitlam, BC',
    metaTitle: 'Commercial Flooring Contractor Coquitlam | Ironclad Floors',
    metaDescription: 'Commercial Flooring Contractor in Coquitlam, BC. Heavy epoxy coatings, polished concrete, retail & gym flooring installation by Ironclad Commercial Floors.',
    phone: '(604) 540-3999',
    coverageZones: ['Coquitlam Town Centre', 'Maillardville', 'Mayfair Industrial Park', 'Burquitlam', 'Westwood Plateau Commercial Hubs'],
    highlights: [
      'Large portfolio in Mayfair Industrial and United Boulevard commercial corridors',
      'Turnkey commercial flooring for retail centers and automotive dealerships',
      'Over 210+ commercial installations completed in Coquitlam',
      '24/7 night shift capabilities for busy retail and fitness chains'
    ],
    popularServices: [
      'Concrete Epoxy Floor Installation',
      'Gym Flooring Installation',
      'Retail Flooring Installation',
      'Commercial Rubber Flooring Installation',
      'Concrete Floor Polishing',
      'Commercial Anti-Slip Floor Coating'
    ],
    description: 'Ironclad Commercial Floors is the trusted flooring partner for commercial developers, store owners, and industrial facility managers in Coquitlam. Whether outfitting auto showrooms on Lougheed Highway, manufacturing plants in Mayfair Industrial, or retail outlets at Coquitlam Centre, our team provides heavy-duty, beautiful surfaces that stand the test of time.',
    image: flooringImages.vinylPlankKneeling,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Coquitlam,+BC,+Canada&t=&z=13&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 210,
    averageResponseTime: 'Under 50 Minutes'
  },
  {
    id: 'port-coquitlam',
    slug: 'port-coquitlam',
    name: 'Port Coquitlam',
    headline: 'Commercial Flooring Contractor in Port Coquitlam, BC',
    metaTitle: 'Commercial Flooring Port Coquitlam | Ironclad Floors',
    metaDescription: 'Commercial Flooring Contractor in Port Coquitlam, BC. Warehouse epoxy, concrete polishing, industrial floor coatings by Ironclad Commercial Floors.',
    phone: '(604) 540-3999',
    coverageZones: ['Broadway Industrial Corridor', 'Downtown PoCo', 'Kingsway Business Park', 'Mary Hill Commercial', 'Fremont Village'],
    highlights: [
      'Deep roots in Broadway Industrial & Kingsway commercial centers',
      'Heavy-duty floor solutions for logistics, fabrication, and breweries',
      'Over 140+ completed industrial and commercial projects',
      'Rapid emergency repair and crack-stitching services'
    ],
    popularServices: [
      'Warehouse Flooring Installation',
      'Commercial Concrete Resurfacing',
      'Industrial Flooring Installation',
      'Commercial Concrete Floor Sealing',
      'Restaurant Flooring Installation',
      'Commercial Floor Coating'
    ],
    description: 'In Port Coquitlam, industrial strength and dependable timelines are essential. Ironclad Commercial Floors delivers heavy-build epoxy mortars, polished concrete, and seamless sanitary systems across Port Coquitlam’s industrial parks and vibrant commercial plazas, providing 10-year warranted solutions built for extreme duty.',
    image: flooringImages.heroCommercialEpoxy,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Port+Coquitlam,+BC,+Canada&t=&z=13&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 140,
    averageResponseTime: 'Under 50 Minutes'
  },

  // 2. High-Intent Neighborhood-Specific Landing Pages (Crawlable by LLMs and Search Engines)
  {
    id: 'downtown-vancouver',
    slug: 'downtown-vancouver',
    name: 'Downtown Vancouver',
    headline: 'Commercial Flooring Contractor Downtown Vancouver, BC',
    metaTitle: 'Commercial Flooring Downtown Vancouver BC | Ironclad Floors',
    metaDescription: 'Commercial Flooring Contractor in Downtown Vancouver, BC. Office carpet tile, luxury vinyl plank, hotel lobby & retail flooring with zero business downtime.',
    phone: '(604) 540-3999',
    coverageZones: ['Financial District', 'Burrard Corridor', 'Robson Street Retail', 'Georgia Street Towers', 'Waterfront Plaza'],
    highlights: [
      'Overnight & weekend elevator-compliant mobilization for high-rise towers',
      'Specialized low-VOC carpet tile and luxury vinyl plank installations',
      'Acoustic sound dampening flooring systems for commercial tenants',
      'Dispatched directly from Vancouver HQ at 783 E 60th Ave'
    ],
    popularServices: [
      'Carpet Tile Installation',
      'Commercial Luxury Vinyl Flooring Installation',
      'Office Flooring Installation',
      'Commercial Resilient Flooring Installation',
      'Concrete Floor Polishing'
    ],
    description: 'For corporate law firms, financial institutions, and high-end retail stores in Downtown Vancouver, Ironclad Commercial Floors provides whisper-quiet overnight flooring installations with zero disruption to daytime tenants. Dispatched rapidly from our main Vancouver headquarters at 783 E 60th Ave, our Red Seal teams execute precision subfloor leveling, high-traffic carpet tile, and luxury vinyl planks.',
    image: flooringImages.flooringHandsInstallation,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Downtown+Vancouver,+BC,+Canada&t=&z=14&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 290,
    averageResponseTime: 'Under 20 Minutes'
  },
  {
    id: 'gastown',
    slug: 'gastown',
    name: 'Gastown',
    headline: 'Restaurant & Heritage Commercial Flooring in Gastown, Vancouver',
    metaTitle: 'Commercial Flooring Gastown Vancouver | Ironclad Floors',
    metaDescription: 'Commercial Flooring Contractor in Gastown, Vancouver BC. Restaurant kitchen epoxy, polyurethane cement, polished concrete & heritage timber preservation.',
    phone: '(604) 540-3999',
    coverageZones: ['Water Street', 'Cordova Street', 'Alexander Corridor', 'Carrall Street', 'Blood Alley'],
    highlights: [
      'Food-safe slip-resistant urethane cement for busy restaurant kitchens',
      'Heritage building timber & concrete subfloor stabilization',
      'Custom rustic metallic epoxy & high-gloss polished concrete',
      'Fast 24/7 emergency repair dispatch from 783 E 60th Ave'
    ],
    popularServices: [
      'Restaurant Flooring Installation',
      'Concrete Floor Polishing',
      'Commercial Anti-Slip Floor Coating',
      'Commercial Concrete Resurfacing',
      'Commercial Floor Restoration'
    ],
    description: 'Gastown is Vancouver’s culinary and historic heart. Ironclad Commercial Floors equips Gastown restaurants, boutique studios, and heritage lofts with seamless urethane kitchen floors, anti-microbial coving, and polished architectural concrete designed to handle heavy foot traffic while respecting historic brick and timber architecture.',
    image: flooringImages.laminateMalletInstall,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Gastown,+Vancouver,+BC,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 145,
    averageResponseTime: 'Under 25 Minutes'
  },
  {
    id: 'yaletown',
    slug: 'yaletown',
    name: 'Yaletown',
    headline: 'Boutique & Tech Office Commercial Flooring in Yaletown, Vancouver',
    metaTitle: 'Commercial Flooring Yaletown Vancouver | Ironclad Floors',
    metaDescription: 'Commercial Flooring in Yaletown Vancouver, BC. High-end retail luxury vinyl, tech studio polished concrete & aesthetic epoxy floors by Ironclad Commercial.',
    phone: '(604) 540-3999',
    coverageZones: ['Mainland Street', 'Hamilton Street', 'Pacific Boulevard', 'Marinaside Crescent', 'Yaletown Roundhouse'],
    highlights: [
      'Modern open-concept polished concrete & micro-cement finishes',
      'Commercial waterproof luxury vinyl plank for bustling boutiques',
      'Low-decibel acoustic subfloor prep for mixed-use residential buildings',
      'Maintained & dispatched from our Vancouver hub at 783 E 60th Ave'
    ],
    popularServices: [
      'Commercial Luxury Vinyl Flooring Installation',
      'Concrete Floor Polishing',
      'Retail Flooring Installation',
      'Office Flooring Installation',
      'Commercial Floor Refinishing'
    ],
    description: 'In Yaletown, modern design meets heavy pedestrian traffic. Ironclad Commercial Floors delivers high-aesthetic, ultra-durable commercial floors for software studios, aesthetic clinics, fitness lofts, and boutique retailers. We handle subfloor leveling over heritage joists and install contemporary wide-plank vinyl and mirror-finish polished concrete.',
    image: flooringImages.luxuryWoodFloorInterior,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Yaletown,+Vancouver,+BC,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 160,
    averageResponseTime: 'Under 25 Minutes'
  },
  {
    id: 'mount-pleasant',
    slug: 'mount-pleasant',
    name: 'Mount Pleasant',
    headline: 'Creative Studio & Brewery Commercial Flooring in Mount Pleasant, Vancouver',
    metaTitle: 'Commercial Flooring Mount Pleasant Vancouver | Ironclad',
    metaDescription: 'Commercial Flooring in Mount Pleasant, Vancouver BC. Brewery urethane cement, creative studio polished concrete, retail LVP floors by Ironclad Commercial Floors.',
    phone: '(604) 540-3999',
    coverageZones: ['Main Street Corridor', 'Brewery District (5th & 6th Ave)', 'Broadway Tech Corridor', 'Olympic Village Perimeter', 'Kingsway Hub'],
    highlights: [
      'Brewery & distillery thermal-shock resistant urethane mortar floors',
      'Industrial-chic polished concrete for creative digital agencies',
      'Heavy-duty slurry leveling for vintage commercial industrial buildings',
      'Under 15-minute dispatch from 783 E 60th Ave Vancouver'
    ],
    popularServices: [
      'Concrete Floor Polishing',
      'Restaurant Flooring Installation',
      'Commercial Floor Leveling and Preparation',
      'Industrial Flooring Installation',
      'Commercial Luxury Vinyl Flooring Installation'
    ],
    description: 'Mount Pleasant’s thriving mix of craft breweries, technology hubs, and retail spaces requires specialized flooring engineering. Ironclad Commercial Floors installs thermal-shock resistant urethane cement capable of handling steam washdowns and keg impacts, alongside dustless polished concrete that elevates tech creative workspaces.',
    image: flooringImages.glovedHandsFlooring,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Mount+Pleasant,+Vancouver,+BC,+Canada&t=&z=14&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 175,
    averageResponseTime: 'Under 15 Minutes'
  },
  {
    id: 'metrotown',
    slug: 'metrotown',
    name: 'Metrotown',
    headline: 'Corporate Office & Retail Commercial Flooring in Metrotown, Burnaby',
    metaTitle: 'Commercial Flooring Metrotown Burnaby | Ironclad Floors',
    metaDescription: 'Commercial Flooring in Metrotown Burnaby, BC. High-capacity retail tile, corporate carpet tile, medical vinyl & epoxy systems by Ironclad Commercial Floors.',
    phone: '(604) 540-3999',
    coverageZones: ['Metrotown Mall Environs', 'Kingsway Commercial Strip', 'Central Boulevard Towers', 'Station Square Hub', 'Willingdon South'],
    highlights: [
      'High-traffic commercial carpet tile for enterprise office towers',
      'Extreme wear 30mil luxury vinyl tile for national retail brands',
      '24/7 night-shift modular workstation jacking for zero desk relocation',
      'Fast mobilization from our Vancouver operations center'
    ],
    popularServices: [
      'Office Flooring Installation',
      'Carpet Tile Installation',
      'Retail Flooring Installation',
      'Commercial Luxury Vinyl Flooring Installation',
      'Commercial Floor Maintenance'
    ],
    description: 'Serving Burnaby’s primary urban center, Ironclad Commercial Floors delivers high-throughput commercial flooring solutions for Metrotown office towers, dental clinics, financial institutions, and retail stores. Our Red Seal teams work off-peak hours to replace worn flooring seamlessly with minimal operational downtime.',
    image: flooringImages.flooringInstallationLvt,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Metrotown,+Burnaby,+BC,+Canada&t=&z=14&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 195,
    averageResponseTime: 'Under 30 Minutes'
  },
  {
    id: 'queensborough',
    slug: 'queensborough',
    name: 'Queensborough',
    headline: 'Industrial Warehouse & Logistics Flooring in Queensborough, New Westminster',
    metaTitle: 'Industrial Flooring Queensborough New Westminster | Ironclad',
    metaDescription: 'Industrial Warehouse Flooring in Queensborough New Westminster, BC. Forklift-rated epoxy, joint stabilization, heavy polished concrete by Ironclad Floors.',
    phone: '(604) 540-3999',
    coverageZones: ['Queensborough Industrial Park', 'Boyd Street Logistics Corridor', 'Queensborough Landing Retail', 'Ewen Avenue Light Industrial'],
    highlights: [
      'Heavy forklift-rated 100% solids epoxy mortar coatings',
      'Polyurea control joint rebuilding & spalled concrete repair',
      'Dust-proof high-reflective polished concrete for distribution bays',
      'Full equipment yard dispatch from 783 E 60th Ave'
    ],
    popularServices: [
      'Warehouse Flooring Installation',
      'Industrial Flooring Installation',
      'Commercial Concrete Floor Repair',
      'Concrete Floor Polishing',
      'Commercial Anti-Slip Floor Coating'
    ],
    description: 'Queensborough is a critical transportation and warehousing node in the Lower Mainland. Ironclad Commercial Floors equips Queensborough logistics centers, manufacturing facilities, and retail outlets with durable forklift-resistant coatings, polyurea joint restoration, and dustless concrete densification.',
    image: flooringImages.industrialEpoxyWarehouse,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Queensborough,+New+Westminster,+BC,+Canada&t=&z=14&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 110,
    averageResponseTime: 'Under 35 Minutes'
  }
];
