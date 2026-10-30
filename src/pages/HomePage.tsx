import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronUp, ArrowRight, MapPin, Star, ExternalLink } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { LOCATIONS } from '../data/locationsData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { MapEmbed } from '../components/MapEmbed';
import { flooringImages } from '../assets/flooringImages';
import { ImageHero } from '../components/ImageHero';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const HOME_FAQS = [
  { question: 'Can you work around our business hours in Vancouver?', answer: 'Yes. Most of our commercial jobs run at night or on weekends, and bigger floors are split into sections, which keeps part of the space usable. We agree the schedule with you before the first day on site.' },
  { question: 'Which commercial floors do you install?', answer: 'Epoxy, polished concrete, luxury vinyl, sheet vinyl and carpet tile, plus concrete sealing for warehouses, restaurants, offices and retail units.' },
  { question: 'Do you repair floors, or only install new ones?', answer: 'Both. We fix cracks, lifted joints and worn areas, and we handle full tear-out and replacement when a floor is past saving.' },
  { question: 'How do I get a commercial flooring quote?', answer: 'Ring (604) 540-3999, or message us with your address, the size of the floor and the finish you have in mind. We will talk through the space and arrange a site visit when it helps.' },
];

const FEATURED_SERVICE_SLUGS = ['commercial-epoxy-flooring', 'flooring-installation', 'flooring-repair', 'flooring-replacement'];
const SERVICE_IMAGES: Record<string, string> = {
  'commercial-epoxy-flooring': flooringImages.heroCommercialEpoxy,
  'flooring-installation': flooringImages.flooringInstallationLvt,
  'flooring-repair': flooringImages.glovedHandsFlooring,
  'flooring-replacement': flooringImages.laminateMalletInstall,
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const cityIds = ['vancouver', 'burnaby', 'richmond', 'surrey'];
  const cities = cityIds.map((id) => LOCATIONS.find((location) => location.slug === id)).filter((location): location is NonNullable<typeof location> => Boolean(location));
  const featuredServices = FEATURED_SERVICE_SLUGS.map((slug) => SERVICES.find((service) => service.slug === slug)).filter((service): service is (typeof SERVICES)[number] => Boolean(service));

  return (
    <div className="ic-home ic-pf-home">
      <ImageHero
        image={flooringImages.heroCommercialEpoxy}
        imageAlt="Commercial epoxy flooring installation by Ironclad Commercial Floors"
        eyebrow="Ironclad Commercial Floors · Metro Vancouver"
        title="Commercial Flooring Contractor in Vancouver, BC"
        description="We install, repair and replace epoxy, polished concrete, vinyl and carpet tile for offices, shops, restaurants and warehouses, working nights and weekends so your doors can stay open."
        proof={<>10-year workmanship warranty <span /> Flexible scheduling <span /> Metro Vancouver</>}
        actions={
          <>
            <button type="button" onClick={() => onNavigate('services')} className="ic-pf-button ic-pf-button-primary">Explore services <ArrowRight /></button>
            <a href="tel:6045403999" className="ic-pf-button ic-pf-button-outline"><Phone /> Call our team</a>
          </>
        }
        aside={
          <aside className="ic-pf-quote-card">
            <p className="ic-pf-card-kicker">Free quote</p>
            <h2>Tell us about your floor</h2>
            <p>Share the size, the surface and your deadline, and we will come back with next steps.</p>
            <button type="button" onClick={() => onNavigate('contact')} className="ic-pf-button ic-pf-button-primary">Contact us <ArrowRight /></button>
          </aside>
        }
      />

      <section className="ic-pf-review-band" aria-label="Google reviews">
        <div className="ic-pf-review-inner">
          <div className="ic-pf-review-mark"><Star fill="currentColor" /></div>
          <div className="ic-pf-review-copy"><p className="ic-pf-eyebrow">What clients say</p><h2>100+ Google Reviews</h2><p>See how Metro Vancouver businesses describe working with Ironclad Commercial Floors.</p></div>
          <a href="https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5" target="_blank" rel="noopener noreferrer" className="ic-pf-text-link">Read Google Reviews <ExternalLink /></a>
        </div>
      </section>

      <section className="ic-pf-section ic-pf-services">
        <div className="ic-pf-container">
          <p className="ic-pf-eyebrow">Commercial flooring services</p>
          <div className="ic-pf-section-heading"><h2>Commercial Flooring Services Across Vancouver, BC</h2><p>Epoxy, new installations, repairs and full replacements for commercial spaces across Metro Vancouver.</p></div>
          <div className="ic-pf-service-grid">
            {featuredServices.map((service, index) => (
              <button key={service.slug} type="button" onClick={() => onNavigate('service-detail', service.slug)} className="ic-pf-service-card">
                <div className="ic-pf-service-image"><img src={SERVICE_IMAGES[service.slug] || service.heroImage || flooringImages.flooringHandsInstallation} alt={`${service.name} by Ironclad Commercial Floors`} loading="lazy" /><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="ic-pf-service-body"><h3>{service.name}</h3></div>
              </button>
            ))}
          </div>
          <div className="ic-pf-centered"><button type="button" onClick={() => onNavigate('services')} className="ic-pf-button ic-pf-button-primary">View All Services <ArrowRight /></button></div>
        </div>
      </section>

      <section className="ic-pf-intro-section">
        <div className="ic-pf-container">
          <p className="ic-pf-eyebrow">Why Ironclad</p>
          <h2>Why Vancouver Businesses Choose Ironclad</h2>
          <p className="ic-pf-intro-text">A floor that fails costs more than the floor itself: lost trading days, blocked aisles, unhappy customers. Our commercial flooring crews plan each job around how your space actually runs, so the work gets done without turning your week upside down.</p>
          <div className="ic-pf-benefit-grid">
            <article><span>01</span><h3>We check the slab first</h3><p>Moisture, cracks and old coatings decide what will last, so we look at the surface before we recommend a system.</p></article>
            <article><span>02</span><h3>Work that fits your day</h3><p>Night, weekend and phased installs keep staff and customers moving while we work.</p></article>
            <article><span>03</span><h3>Backed for ten years</h3><p>Each install is covered by a 10-year workmanship warranty, so you are not left chasing problems later.</p></article>
          </div>
        </div>
      </section>

      <section className="ic-pf-featured-project">
        <div className="ic-pf-featured-project-image"><img src={flooringImages.garageEpoxyCoating} alt="Finished commercial epoxy flooring in a Metro Vancouver facility" loading="lazy" /></div>
        <div className="ic-pf-featured-project-copy">
          <p className="ic-pf-eyebrow">Our work</p>
          <h2>Commercial Epoxy Flooring That Handles Daily Wear</h2>
          <p>A good coating starts with the concrete underneath. We grind, repair and prime the slab, then apply a system chosen for your traffic, whether that means forklifts in a warehouse or foot traffic in a showroom.</p>
          <button type="button" onClick={() => onNavigate('projects')} className="ic-pf-text-link">See our work <ArrowRight /></button>
        </div>
      </section>

      <section className="ic-pf-testimonial-section">
        <div className="ic-pf-testimonial-image"><img src={flooringImages.concretePolishingFloor} alt="Finished commercial flooring project" loading="lazy" /></div>
        <blockquote className="ic-pf-testimonial-card">
          <p className="ic-pf-eyebrow">From a local client</p>
          <div className="ic-pf-testimonial-stars" aria-label="5 out of 5 stars">{Array.from({ length: TESTIMONIALS[0].rating }, (_, index) => <Star key={index} fill="currentColor" />)}</div>
          <p className="ic-pf-testimonial-quote">“{TESTIMONIALS[0].review.split('. ').slice(0, 2).join('. ')}”</p>
          <div className="ic-pf-testimonial-attribution"><strong>{TESTIMONIALS[0].name}</strong><span>{TESTIMONIALS[0].role} · {TESTIMONIALS[0].location}</span></div>
        </blockquote>
      </section>

      <section className="ic-pf-service-area">
        <div className="ic-pf-service-area-copy">
          <p className="ic-pf-eyebrow">Where we work</p>
          <h2>Commercial Flooring in Vancouver, Burnaby, Richmond and Surrey</h2>
          <p>Our shop is on East 60th Avenue in Vancouver, so crews reach sites across Metro Vancouver quickly. Pick your city to see how we work there.</p>
          <div className="ic-pf-city-grid">{cities.map((city) => <button key={city.slug} type="button" onClick={() => onNavigate('location-detail', city.slug)}><MapPin /><span>{city.name}</span><ArrowRight /></button>)}</div>
          <button type="button" onClick={() => onNavigate('locations')} className="ic-pf-text-link ic-pf-all-locations">View all service areas <ArrowRight /></button>
        </div>
        <MapEmbed title="Ironclad Commercial Floors service area" subtitle="Metro Vancouver and nearby cities." className="ic-pf-home-map" />
      </section>

      <section className="ic-pf-faq-section">
        <div className="ic-pf-container ic-pf-faq-layout"><div className="ic-pf-faq-intro"><p className="ic-pf-eyebrow">Before you call</p><h2>Commercial Flooring in Vancouver: Common Questions</h2><p>Straight answers to what business owners and property managers ask us most.</p><a href="tel:6045403999" className="ic-pf-text-link">Call our team <Phone /></a></div>
          <div className="ic-pf-faq-list">{HOME_FAQS.map((faq, index) => { const isOpen = openFaq === index; return <article key={faq.question} className={`ic-pf-faq-item ${isOpen ? 'is-open' : ''}`}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span className="ic-pf-faq-number">{String(index + 1).padStart(2, '0')}</span><h3>{faq.question}</h3><span className="ic-pf-faq-toggle">{isOpen ? <ChevronUp /> : <ChevronDown />}</span></button>{isOpen && <p>{faq.answer}</p>}</article>; })}</div>
        </div>
      </section>

      <section className="ic-pf-final-cta"><img src={flooringImages.concretePolishingFloor} alt="Polished commercial concrete floor installed by Ironclad" loading="lazy" /><div className="ic-pf-final-overlay" /><div className="ic-pf-final-content"><p className="ic-pf-eyebrow">Get started</p><h2>Planning a Floor Project in Metro Vancouver?</h2><p>Call Ironclad Commercial Floors and describe the site, the timeline and how much downtime you can afford.</p><div className="ic-pf-actions"><a href="tel:6045403999" className="ic-pf-button ic-pf-button-primary"><Phone /> Call now · (604) 540-3999</a></div></div></section>
    </div>
  );
};
