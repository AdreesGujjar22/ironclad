import { TestimonialItem, BlogPost } from '../types';
import { flooringImages } from '../assets/flooringImages';

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Vice President of Construction',
    company: 'Pacific Rim Commercial Developments',
    location: 'Vancouver, BC',
    rating: 5,
    date: 'February 2025',
    projectType: 'Commercial Flooring Installation (75,000 sq ft)',
    review: 'Ironclad Commercial Floors is in a league of their own. They took on a 75,000 sq ft office high-rise fitout with an impossible 12-day deadline. Their Red Seal crews ran around-the-clock shifts without a single safety incident. The subfloor prep, moisture testing, and carpet tile placement were textbook perfect. They are our permanent commercial flooring contractor across Greater Vancouver.',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Director of Facilities & Real Estate',
    company: 'Cascadia Cold Chain Logistics',
    location: 'Burnaby, BC',
    rating: 5,
    date: 'January 2025',
    projectType: 'Warehouse Polished Concrete & Polyurea Joint Repair',
    review: 'Our distribution facility in Burnaby handles heavy reach trucks 24/7. Other contractors told us we had to shut down for 3 weeks to repair our spalled joints and coat the slab. Ironclad brought their dustless diamond grinders and completed the job in phased overnight shifts with ZERO downtime to our freight lines. The floor looks mirror-smooth and has held up flawlessly.',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Chef David Lin',
    role: 'Managing Partner',
    company: 'Harbourview Culinary Group',
    location: 'Gastown, Vancouver, BC',
    rating: 5,
    date: 'November 2024',
    projectType: 'Restaurant Urethane Cement Kitchen Flooring',
    review: 'When our old commercial kitchen tile grout failed and created a health inspector concern, we called Ironclad’s 24/7 emergency line. By 10 PM that night, their crew was grinding out the failed tile, and by 8 AM Sunday morning, we had a seamless, slip-resistant urethane cement floor with 6-inch coving. They saved our opening weekend.',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Sarah Tremblay',
    role: 'Property Operations Manager',
    company: 'West Coast Medical Properties',
    location: 'New Westminster, BC',
    rating: 5,
    date: 'October 2024',
    projectType: 'Healthcare Homogeneous Sheet Vinyl Installation',
    review: 'Healthcare flooring has zero margin for error. Ironclad installed heat-welded medical sheet vinyl across 18 surgical recovery rooms. The seam welds are invisible, the flash coving is razor-sharp, and the hospital infection control officer passed the installation on the first walkthrough with flying colors.',
    verified: true
  },
  {
    id: 'test-5',
    name: 'Liam MacIntyre',
    role: 'Head of Facilities',
    company: 'Apex Fitness & Performance Centers',
    location: 'Coquitlam, BC',
    rating: 5,
    date: 'August 2024',
    projectType: 'Gym Flooring Installation & Rubber Rolls',
    review: 'We drop 150-pound dumbbells all day long, and the acoustic floor system Ironclad installed in our Coquitlam club completely eliminated vibration complaints from the business next door. Top-notch craftsmanship, honest communication, and fair pricing.',
    verified: true
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'polished-concrete-vs-epoxy-vancouver-warehouses',
    title: 'Polished Concrete vs. Epoxy Coating: Which is Best for Vancouver Warehouses?',
    metaTitle: 'Polished Concrete vs Epoxy Warehouses | Ironclad Floors',
    metaDescription: 'Comparing polished concrete and industrial epoxy for Vancouver warehouses. Durability, forklift ratings, and lifecycle cost breakdown by Ironclad Commercial.',
    excerpt: 'A comprehensive guide for facility directors evaluating initial capital cost, forklift tire wear, light reflectivity, and chemical resistance in BC commercial spaces.',
    category: 'Industrial Flooring',
    readTime: '6 min read',
    date: 'February 12, 2025',
    author: 'Derek Campbell, Lead Technical Specialist',
    image: flooringImages.industrialEpoxyWarehouse,
    content: [
      'When managing a high-throughput commercial warehouse or distribution center in Greater Vancouver, selecting the correct floor surface impacts operational efficiency, energy bills, and long-term facility maintenance.',
      'Polished concrete utilizes mechanical diamond grinding and penetrating lithium silicate densifiers to transform the existing concrete slab into an ultra-dense, dust-proof surface. With zero topcoat to chip or delaminate, it offers unmatched lifecycle longevity (20+ years) and high light reflectivity that reduces lighting electricity costs by up to 30%.',
      'Industrial epoxy coatings, on the other hand, create an impervious, chemical-resistant resin barrier over the slab. For facilities with chemical storage, battery charging bays, or strict sanitation mandates, a 100% solids epoxy mortar is essential to protect the subfloor from corrosive degradation.',
      'Our recommendation: Use polished concrete in general staging and high-traffic aisleways, and specify heavy-build epoxy coatings in battery charging stations, chemical containment zones, and mechanical service bays.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'subfloor-moisture-testing-bc-climate',
    title: 'Why Subfloor Moisture Testing is Critical in the Pacific Northwest Climate',
    metaTitle: 'Subfloor Moisture Testing BC Climate | Ironclad Floors',
    metaDescription: 'How Vancouver’s coastal rain and high water tables cause commercial flooring adhesive failures, and how ASTM F2170 RH testing prevents costly callbacks.',
    excerpt: 'Discover why high moisture vapor emission rates (MVER) destroy vinyl adhesives and epoxy coatings, and how our pre-installation diagnostics protect your warranty.',
    category: 'Subfloor Preparation',
    readTime: '5 min read',
    date: 'January 28, 2025',
    author: 'Markus Henderson, Master Level Installer',
    image: flooringImages.flooringHandsInstallation,
    content: [
      'Vancouver’s coastal climate, abundant rainfall, and high water tables create substantial hydrostatic pressure beneath commercial concrete slabs. Without proper vapor barriers, moisture vapor travels upward through the porous concrete capillaries, carrying alkaline salts.',
      'When moisture vapor hits impermeable flooring like luxury vinyl tile or standard epoxy, osmotic pressure builds until the adhesive breaks down, leading to unsightly bubbling, delamination, and microbial growth.',
      'At Ironclad Commercial Floors, every commercial project starts with ASTM F2170 in-situ relative humidity testing and ASTM F1869 calcium chloride testing. If relative humidity exceeds 85%, we apply 100% solid epoxy moisture mitigation primers capable of suppressing up to 25 lbs / 1000 sq ft MVER.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'overnight-commercial-flooring-zero-downtime',
    title: 'Zero Business Downtime: How Overnight & Phased Flooring Works',
    metaTitle: 'Overnight Commercial Flooring Vancouver | Ironclad Floors',
    metaDescription: 'Learn how Ironclad Commercial Floors executes night-shift and weekend commercial floor replacements for retail and corporate spaces with zero downtime.',
    excerpt: 'Explore our phased installation protocols, modular furniture lifters, and rapid-curing polyaspartics designed to keep your revenue flowing during renovations.',
    category: 'Project Management',
    readTime: '4 min read',
    date: 'December 18, 2024',
    author: 'Elena Scott, Project Director',
    image: flooringImages.vinylPlankKneeling,
    content: [
      'For retail stores, bustling restaurants, and enterprise corporate offices, closing for even a few days to replace flooring can cost tens of thousands of dollars in lost revenue and employee disruption.',
      'Ironclad Commercial Floors solves this with 24/7 off-hours installation methodology. Our teams clock in at 8:00 PM after your staff or customers leave, seal work areas with HEPA air scrubbers, remove old flooring, prepare substrates, and install rapid-curing systems before 6:00 AM.',
      'For corporate offices, we use specialized hydraulic workstation lifters that elevate modular cubicles without unplugging computers or desktop hardware, allowing carpet tile replacement over a single weekend.'
    ]
  }
];
