export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  introduction: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs?: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "epoxy-flooring-mistakes-white-rock-bc",
    title: "Avoid These Epoxy Flooring Mistakes in White Rock, BC",
    metaTitle: "Avoid These Epoxy Flooring Mistakes in White Rock, BC",
    description: "Planning epoxy flooring in White Rock, BC? Learn the most common mistakes, from poor prep to the wrong coating, and how to get a floor that lasts.",
    introduction: [
      "Epoxy flooring in White Rock, BC has to handle more than most people expect. Salt air, damp coastal weather, and heavy daily traffic all put stress on a coating. When the job is done right, epoxy gives you a seamless, durable surface that is easy to clean. When it is done wrong, you get peeling, bubbling, and expensive repairs within months. Most failures come from a few avoidable errors. This guide covers the most common ones so you can protect your investment from day one.",
    ],
    sections: [
      {
        heading: "Mistake 1: Skipping Proper Concrete Floor Preparation in White Rock, BC",
        paragraphs: [
          "Epoxy is only as strong as the concrete underneath it. The most common mistake is coating a dirty, smooth, or damaged slab. Oil, old sealers, dust, and weak surface layers all stop the resin from bonding.",
          "Good concrete floor preparation in White Rock, BC means grinding or shot blasting the slab to open its pores, then vacuuming thoroughly. Cracks, pits, and chipped joints need repair before any resin goes down, and uneven areas should be levelled so the coating cures flat. Skipping these steps may save a day, but it usually costs far more later.",
        ],
      },
      {
        heading: "Mistake 2: Ignoring Moisture Before Epoxy Flooring in White Rock, BC",
        paragraphs: [
          "Coastal areas deal with high groundwater and humidity, which makes moisture one of the biggest threats to epoxy flooring in White Rock, BC. Concrete releases moisture vapour over time. If a coating seals that vapour in, pressure builds underneath and causes blisters and delamination.",
          "Always test the slab for moisture vapour transmission and relative humidity before choosing a system. If readings are high, you may need a moisture-mitigating primer or a vapour barrier. Never assume a slab is dry because it looks dry. This matters most in older buildings or slabs poured without a vapour barrier.",
        ],
      },
      {
        heading: "Mistake 3: Choosing the Wrong Epoxy Floor Coating in White Rock, BC",
        paragraphs: [
          "Not all epoxy is the same. A thin water-based product might work in a light-use storage room but fail quickly in a busy workshop. The right epoxy floor coating in White Rock, BC should match how the space is actually used: vehicle traffic, chemicals, temperature swings, sunlight, and your cleaning routine.",
          "A high-build, 100% solids system is made for chemical exposure, forklift traffic, and frequent washdowns, which is why commercial epoxy flooring in White Rock, BC often uses this type of formula. If appearance matters as much as strength, metallic and flake finishes add a decorative look without losing durability. For parking areas and garages, choose a system that resists hot tire pickup and winter de-icing salts.",
        ],
      },
      {
        heading: "Mistake 4: Overlooking Slip Resistance in Commercial Epoxy Flooring",
        paragraphs: [
          "A glossy epoxy finish looks great, but it can turn dangerous when wet. Rain tracked in through entrances, kitchen grease, and washdown water can all create a slip hazard. Many owners only think about this after an incident.",
          "Adding quartz, aggregate, or a textured topcoat solves the problem without hurting appearance. Anti-slip safety coatings are worth planning into the design from the start, especially in restaurants, warehouses, and entrances where floors get wet often.",
        ],
      },
      {
        heading: "Mistake 5: Rushing Cure Times and Ignoring Weather",
        paragraphs: [
          "Epoxy needs the right temperature, humidity, and time to cure properly. Applying it in cold, damp conditions, which are common through a Lower Mainland winter, slows curing and can leave a cloudy or uneven finish. Opening the floor to traffic too early leaves dents, scratches, and tire marks in a surface that isn't fully hard.",
          "Follow the manufacturer's recoat windows and full cure times, and plan the project around your operating schedule rather than forcing the floor back into use. A well-planned epoxy floor installation in White Rock, BC can be phased or done after hours so your business keeps running. Patience here directly affects how well the floor performs over the next decade.",
        ],
      },
      {
        heading: "Mistake 6: Hiring the Wrong Contractor for Epoxy Flooring in White Rock, BC",
        paragraphs: [
          "Price alone is a poor way to choose. A low quote often hides missing prep, thin coats, or no moisture testing. When comparing providers, ask direct questions:",
          "What is your surface preparation process?\nWhich products and coating thickness will you use?\nDo you carry liability insurance and WorkSafeBC coverage?\nWhat warranty do you offer, and can you share references from similar projects?",
          "A reliable epoxy flooring contractor in White Rock, BC will inspect your slab, explain the system they recommend, and give you a clear, itemized quote. If your existing floor has already failed, ask about commercial flooring repair before committing to a full replacement. A targeted fix sometimes solves the problem at a fraction of the cost.",
        ],
      },
      {
        heading: "Final Thoughts",
        paragraphs: [
          "Most problems with epoxy flooring in White Rock, BC come from rushed preparation, skipped moisture testing, and the wrong product for the job. Get those three things right and your floor will stay strong, safe, and good-looking for years.",
          "If you are planning a new floor or dealing with a failing one, IRONCLAD COMMERCIAL FLOORS can inspect your slab, test for moisture, and recommend a system that fits your space and budget. Request a free estimate today.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does epoxy flooring in White Rock, BC last?",
        answer: "With proper preparation and the right system, a commercial epoxy floor can last 10 years or more. Lifespan depends on traffic, chemical exposure, and maintenance, and most early failures trace back to poor prep or moisture issues.",
      },
      {
        question: "Can epoxy floor installation in White Rock, BC be done without shutting down my business?",
        answer: "Yes. Many projects are completed in phases, at night, or on weekends. Ask your contractor to plan the schedule around your operating hours and the required cure times.",
      },
    ],
  },
];

export const BLOG_PAGE_SIZE = 6;

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

export function blogPageCount() {
  return Math.max(1, Math.ceil(blogPosts.length / BLOG_PAGE_SIZE));
}
