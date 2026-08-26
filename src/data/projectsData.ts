import { ProjectItem } from '../types';
import { flooringImages } from '../assets/flooringImages';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Metro Vancouver Logistics Hub - High-Gloss Polished Concrete',
    client: 'Pacific Coast Distribution Corp',
    clientType: 'Industrial Logistics Facility',
    year: '2025',
    location: 'South Vancouver / Marine Gateway, BC',
    category: 'Warehouse & Logistics',
    sqft: '68,000 sq ft',
    serviceUsed: 'Concrete Floor Polishing',
    duration: '10 Days (Phased Overnight Execution)',
    description: 'High-traffic commercial distribution facility required complete subfloor rehabilitation, joint spall stabilization, and an 8-stage mechanical diamond polish while maintaining full 24/7 freight sorting operations.',
    challenge: 'Existing 30-year-old slab had deep oil stains, 140+ spalled control joints, and heavy dusting that was damaging automated packaging sensors.',
    solution: 'Deep mechanical planetary grinding with 8-stage resin diamond tooling, structural polyurea joint rebuilding, and dual application of lithium densifiers.',
    results: [
      'Zero facility shutdown — all work completed during off-peak logistics hours',
      'Increased ambient floor reflectivity by 32%, cutting warehouse lighting utility cost',
      'Eliminated 100% of concrete dusting and equipment sensor interference'
    ],
    image: flooringImages.heroCommercialEpoxy,
    rating: 5
  },
  {
    id: 'proj-2',
    title: 'Gastown Historic Brewery & Kitchen - Urethane Mortar System',
    client: 'Steamworks Culinary & Brewing Co.',
    clientType: 'Food & Beverage Facility',
    year: '2024',
    location: 'Gastown, Vancouver, BC',
    category: 'Food & Beverage / Restaurant',
    sqft: '8,500 sq ft',
    serviceUsed: 'Restaurant & Kitchen Flooring',
    duration: '4 Days (Continuous 24h Shift)',
    description: 'Turnkey removal of failing commercial quarry tiles and installation of a thermal-shock resistant urethane concrete mortar system with integral seamless cove base for heavy brewing washdowns.',
    challenge: 'Failing quarry tiles with deteriorated grout lines leaking moisture into sub-grade timber framing; required continuous 95°C hot-water washdown resistance.',
    solution: 'Complete tear-out of 45-year-old quarry tiles down to sub-slab, installation of 1/4" thermal-shock resistant urethane concrete mortar with 6" integral coving.',
    results: [
      '100% compliant with Vancouver Coastal Health & CFIA food safety standards',
      'Monolithic cove base eliminated all harbor points for bacteria and grease',
      'Completed in time for weekend brewing run without delayed product batch'
    ],
    image: flooringImages.industrialEpoxyWarehouse,
    rating: 5
  },
  {
    id: 'proj-3',
    title: 'Downtown Vancouver Tech Headquarters - Luxury Vinyl & Carpet Tiles',
    client: 'Cascadia Cloud Technologies',
    clientType: 'Corporate Technology Office',
    year: '2025',
    location: 'Downtown Vancouver, BC (Burrard St)',
    category: 'Office & Corporate',
    sqft: '34,000 sq ft',
    serviceUsed: 'Commercial Luxury Vinyl & Carpet Tile Installation',
    duration: '14 Days (Overnight Modular Installation)',
    description: 'Complete transformation of a 3-floor corporate office tower featuring 28-mil commercial acoustic LVT in open breakout areas and cushion-backed nylon carpet tiles in executive suites.',
    challenge: 'Active 400-person workspace requiring quiet overnight installation without dismantling complex Herman Miller workstation cabling systems.',
    solution: 'Used hydraulic furniture lift technology to slide modular carpet tiles and 28-mil commercial LVT beneath workstations without employee desk teardowns.',
    results: [
      'Achieved IIC 72 acoustic rating, dramatically reducing open-office chatter',
      'Completed 3 floors with zero disruption to daily software development teams',
      'Awarded 10-Year commercial warranty on wear layers and adhesive bond'
    ],
    image: flooringImages.luxuryWoodFloorInterior,
    rating: 5
  },
  {
    id: 'proj-4',
    title: 'Commercial Fleet Maintenance Bay - Heavy-Duty Epoxy Coating',
    client: 'Greater Vancouver Transit Fleet Depot',
    clientType: 'Municipal Fleet Maintenance',
    year: '2024',
    location: 'Burnaby, BC',
    category: 'Automotive & Showroom',
    sqft: '22,000 sq ft',
    serviceUsed: 'Garage Epoxy Flooring',
    duration: '6 Days',
    description: 'High-build chemical-resistant 100% solids epoxy flooring with heavy quartz aggregate broadcast and aliphatic polyaspartic finish designed for heavy transit bus maintenance.',
    challenge: 'Extreme hydraulic fluid, brake fluid, and battery acid exposure causing severe chemical degradation of raw concrete service bays.',
    solution: 'Heavy-duty 100% solids epoxy basecoat with full quartz broadcast and chemical-resistant polyaspartic aliphatic clear finish with aggressive R11 non-slip texture.',
    results: [
      'Impervious to all petrochemicals, brake solvents, and hot tires',
      'Bright safety yellow and red zone safety markings integrated into clear coat',
      'High-traction surface significantly reduced slip-and-fall hazards for mechanics'
    ],
    image: flooringImages.garageEpoxyCoating,
    rating: 5
  },
  {
    id: 'proj-5',
    title: 'Surgical Recovery & Specialty Clinic - Seamless Heat-Welded Sheet Vinyl',
    client: 'Pacific West Orthopedic Surgical Suites',
    clientType: 'Medical & Healthcare Center',
    year: '2024',
    location: 'New Westminster, BC',
    category: 'Healthcare & Institutional',
    sqft: '14,200 sq ft',
    serviceUsed: 'Commercial Sheet Vinyl Flooring',
    duration: '8 Days',
    description: 'Medical-grade homogeneous sheet vinyl with heat-welded joints, 6-inch integral flash coving, and antimicrobial polyurethane surface protection across 18 recovery suites.',
    challenge: 'Strict infection-control requirements mandating zero-seam permeability and heavy rolling hospital bed load resistance.',
    solution: 'Installation of medical-grade homogeneous vinyl sheet with grooved matching weld rod and 6" integral flash coving.',
    results: [
      'Passed hospital infection-control bacterial swabs on first inspection',
      'Resistant to aggressive hospital disinfectants including Betadine and bleach',
      'Under-bed dynamic load testing showed zero indentation or seam failure'
    ],
    image: flooringImages.vinylPlankKneeling,
    rating: 5
  },
  {
    id: 'proj-6',
    title: 'High-Performance Athletic Complex - Vulcanized Rubber Flooring',
    client: 'Summit Athletics & High Performance Center',
    clientType: 'Sports & Athletic Facility',
    year: '2024',
    location: 'Coquitlam, BC',
    category: 'Fitness & Sports',
    sqft: '18,500 sq ft',
    serviceUsed: 'Commercial Flooring Installation',
    duration: '5 Days',
    description: 'Heavy-gauge vulcanized dual-layer acoustic athletic rubber flooring engineered for Olympic weightlifting zones and intense sprint tracks.',
    challenge: 'Heavy free-weight drop zones (120+ lbs dumbbells) destroying under-floor concrete slabs and creating severe noise complaints from neighboring tenants.',
    solution: 'Dual-density vulcanized rubber flooring system with 12mm acoustic impact underlayment and seamless edge transitions.',
    results: [
      'Reduced structural impact noise transmission by 78%',
      'Protected subfloor concrete slab from point impact fracturing',
      'Antimicrobial surface allows rapid mop-and-disinfect maintenance'
    ],
    image: flooringImages.flooringHandsInstallation,
    rating: 5
  }
];
