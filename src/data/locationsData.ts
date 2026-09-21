import { LocationArea } from '../types';
import { flooringImages } from '../assets/flooringImages';

export const LOCATIONS: LocationArea[] = [
  // 1. Regional City Hubs
  {
    id: 'vancouver',
    slug: 'vancouver',
    name: 'Vancouver',
    headline: 'Commercial Flooring Contractor in Vancouver, BC (HQ)',
    metaTitle: 'Commercial Flooring Contractor Vancouver BC | Ironclad',
    metaDescription: 'Commercial flooring contractor in Vancouver, BC. Our crews run epoxy, polished concrete and vinyl installs around the clock from our East 60th Ave yard.',
    address: '783 E 60th Ave, Vancouver, BC V5X 2A5, Canada',
    phone: '(604) 540-3999',
    coverageZones: ['Downtown Vancouver', 'Yaletown', 'Gastown', 'Mount Pleasant', 'False Creek', 'Kitsilano', 'South Vancouver / Marine Gateway', 'Grandview-Woodland'],
    highlights: [
      'Headquarters & Main Equipment Yard at 783 E 60th Ave, Vancouver, BC, Canada',
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
    description: 'We are based here, at 783 E 60th Ave, which means a Vancouver job usually gets a site visit within a day or two. We handle everything from Gastown restaurant kitchens to South Vancouver shop floors and Downtown office towers. Older buildings in this city hide a lot of surprises under the old flooring, so we test and inspect before quoting rather than after. Commercial flooring in Vancouver is what we do every week, not a sideline.',
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
    description: 'Burnaby splits neatly in two for us: the manufacturing plants around Big Bend, and the office and retail towers at Metrotown and Brentwood. Those need very different floors. Plants get forklift-rated epoxy and armoured joints. Offices get vinyl plank or carpet tile installed overnight so nobody loses a working day. We are twenty minutes away, which matters when something fails and you need somebody on site today.',
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
    description: 'New West throws a bit of everything at us — heritage retail downtown, medical space in the Brewery District, and logistics buildings out in Queensborough. The heritage work is the interesting part, because those subfloors are rarely flat and almost never dry. We check for moisture first, level properly, then install. Straight answers on timeline and cost, and we hit the dates we give you.',
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
    description: 'Coquitlam work tends to come from developers finishing new commercial space and from owners refreshing a tired storefront. Auto showrooms on Lougheed, plants in Mayfair Industrial, retail around Coquitlam Centre — all of it done by our own crews, not subcontracted out. If you are fitting out a new unit, get us in early; the flooring decision affects your slab prep budget more than most people expect.',
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
    description: 'PoCo is industrial country, and the floors here take genuine punishment. Heavy epoxy mortar, polished concrete and seamless sanitary systems are the bulk of what we install around the industrial parks off Kingsway and Broadway. We plan around production schedules, because we know shutting a line down for a floor is not an option. Ten-year warranty on the workmanship, same as everywhere else we work.',
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
      'Dispatched directly from Vancouver HQ at 783 E 60th Ave, Vancouver, BC, Canada'
    ],
    popularServices: [
      'Carpet Tile Installation',
      'Commercial Luxury Vinyl Flooring Installation',
      'Office Flooring Installation',
      'Commercial Resilient Flooring Installation',
      'Concrete Floor Polishing'
    ],
    description: 'Downtown jobs live or die on access and noise. Loading bay windows, elevator bookings, building management rules — we deal with all of it, and most of the work happens after hours so daytime tenants never notice. Law offices, banks and flagship retail make up most of our downtown projects. Our shop is fifteen minutes south, so night crews are dispatched easily.',
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
      'Fast 24/7 emergency repair dispatch from 783 E 60th Ave, Vancouver, BC, Canada'
    ],
    popularServices: [
      'Restaurant Flooring Installation',
      'Concrete Floor Polishing',
      'Commercial Anti-Slip Floor Coating',
      'Commercial Concrete Resurfacing',
      'Commercial Floor Restoration'
    ],
    description: 'Gastown buildings are old, beautiful and structurally opinionated. Uneven timber subfloors, brick walls out of square, and heritage rules on what you can change. We have installed in enough of these restaurants and studios to know where the trouble is. Expect us to spend real time on levelling before anything goes down — that is what makes the finished floor look right in a room where nothing is straight.',
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
      'Maintained & dispatched from our Vancouver hub at 783 E 60th Ave, Vancouver, BC, Canada'
    ],
    popularServices: [
      'Commercial Luxury Vinyl Flooring Installation',
      'Concrete Floor Polishing',
      'Retail Flooring Installation',
      'Office Flooring Installation',
      'Commercial Floor Refinishing'
    ],
    description: 'Yaletown clients are usually after a look as much as a floor: polished concrete in a showroom, wide plank vinyl in a design studio, something quiet in a converted warehouse office. We work in narrow loading conditions and tight timelines here, which is standard for the neighbourhood. Come to us with the design intent and we will tell you what will actually survive the traffic.',
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
    metaDescription: 'Commercial flooring in Mount Pleasant, Vancouver: brewery urethane cement, studio polished concrete and retail vinyl installed by Ironclad crews.',
    phone: '(604) 540-3999',
    coverageZones: ['Main Street Corridor', 'Brewery District (5th & 6th Ave)', 'Broadway Tech Corridor', 'Olympic Village Perimeter', 'Kingsway Hub'],
    highlights: [
      'Brewery & distillery thermal-shock resistant urethane mortar floors',
      'Industrial-chic polished concrete for creative digital agencies',
      'Heavy-duty slurry leveling for vintage commercial industrial buildings',
      'Under 15-minute dispatch from 783 E 60th Ave, Vancouver, BC, Canada'
    ],
    popularServices: [
      'Concrete Floor Polishing',
      'Restaurant Flooring Installation',
      'Commercial Floor Leveling and Preparation',
      'Industrial Flooring Installation',
      'Commercial Luxury Vinyl Flooring Installation'
    ],
    description: 'Mount Pleasant is full of converted industrial space now hosting tech offices, breweries and studios. Those slabs were poured for machinery, not for laptops, so they often polish up beautifully with the right grinding sequence. We also do plenty of vinyl and carpet tile for office fit-outs along Main and 2nd. Quick to reach, quick to quote.',
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
    description: 'Retail floors around Metrotown have to be installed between closing and opening, with hoarding up and nothing left behind. That is the job we bid for. Mall units, medical offices and tower lobbies make up most of our work in this pocket of Burnaby. We handle the mall paperwork and after-hours access arrangements so you are not chasing building management.',
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
    metaTitle: 'Industrial Flooring Queensborough | Ironclad Floors',
    metaDescription: 'Industrial Warehouse Flooring in Queensborough New Westminster, BC. Forklift-rated epoxy, joint stabilization, heavy polished concrete by Ironclad Floors.',
    phone: '(604) 540-3999',
    coverageZones: ['Queensborough Industrial Park', 'Boyd Street Logistics Corridor', 'Queensborough Landing Retail', 'Ewen Avenue Light Industrial'],
    highlights: [
      'Heavy forklift-rated 100% solids epoxy mortar coatings',
      'Polyurea control joint rebuilding & spalled concrete repair',
      'Dust-proof high-reflective polished concrete for distribution bays',
      'Full equipment yard dispatch from 783 E 60th Ave, Vancouver, BC, Canada'
    ],
    popularServices: [
      'Warehouse Flooring Installation',
      'Industrial Flooring Installation',
      'Commercial Concrete Floor Repair',
      'Concrete Floor Polishing',
      'Commercial Anti-Slip Floor Coating'
    ],
    description: 'Queensborough is warehouses and distribution space, and the floor issue is nearly always joints and slab surface. We armour joints, harden and seal slabs, and re-stripe traffic lanes so the yard crew can see where to drive. Work is phased by aisle so your shipping schedule holds. If forklifts are bouncing at the joints, that is worth fixing before the spalling spreads.',
    image: flooringImages.industrialEpoxyWarehouse,
    mapEmbedUrl: 'https://maps.google.com/maps?q=Queensborough,+New+Westminster,+BC,+Canada&t=&z=14&ie=UTF8&iwloc=&output=embed',
    completedProjectsCount: 110,
    averageResponseTime: 'Under 35 Minutes'
  }
];
