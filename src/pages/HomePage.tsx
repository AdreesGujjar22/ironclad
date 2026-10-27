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
  { question: 'Can you work without closing our business?', answer: 'Yes. Night, weekend and phased schedules help limit disruption while work is underway.' },
  { question: 'What commercial flooring do you install?', answer: 'We install and repair epoxy, polished concrete, vinyl plank and carpet tile for commercial spaces.' },
  { question: 'How do I start a project?', answer: 'Call our team to discuss your space, schedule and flooring needs.' },
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
        eyebrow="Commercial flooring contractor · Vancouver, BC"
        title="Commercial Flooring Built for Busy Workspaces"
        description="Installation, repair and replacement scheduled around your business."
        proof={<>10-year workmanship warranty <span /> Flexible scheduling <span /> Metro Vancouver</>}
        actions={
          <>
            <button type="button" onClick={() => onNavigate('services')} className="ic-pf-button ic-pf-button-primary">Explore services <ArrowRight /></button>
            <a href="tel:6045403999" className="ic-pf-button ic-pf-button-outline"><Phone /> Call our team</a>
          </>
        }
        aside={
          <aside className="ic-pf-quote-card">
            <p className="ic-pf-card-kicker">Project enquiry</p>
            <h2>Let’s plan your project.</h2>
            <p>Tell us about your space and schedule.</p>
            <button type="button" onClick={() => onNavigate('contact')} className="ic-pf-button ic-pf-button-primary">Contact us <ArrowRight /></button>
          </aside>
        }
      />

      <section className="ic-pf-review-band" aria-label="Google reviews">
        <div className="ic-pf-review-inner">
          <div className="ic-pf-review-mark"><Star fill="currentColor" /></div>
          <div className="ic-pf-review-copy"><p className="ic-pf-eyebrow">Client feedback</p><h2>100+ Google Reviews</h2><p>Read customer feedback about Ironclad Commercial Floors and our work across Metro Vancouver.</p></div>
          <a href="https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5" target="_blank" rel="noopener noreferrer" className="ic-pf-text-link">Read Google Reviews <ExternalLink /></a>
        </div>
      </section>

      <section className="ic-pf-section ic-pf-services">
        <div className="ic-pf-container">
          <p className="ic-pf-eyebrow">Flooring services</p>
          <div className="ic-pf-section-heading"><h2>What we do</h2><p>Practical flooring solutions for commercial spaces.</p></div>
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
          <p className="ic-pf-eyebrow">Built around your operation</p>
          <h2>Good floors. Less downtime.</h2>
          <div className="ic-pf-benefit-grid">
            <article><span>01</span><h3>Prepared properly</h3><p>We assess the surface before choosing the right system.</p></article>
            <article><span>02</span><h3>Scheduled for you</h3><p>Night, weekend and phased work available.</p></article>
            <article><span>03</span><h3>Made for commercial use</h3><p>Durable options for busy workspaces.</p></article>
          </div>
        </div>
      </section>

      <section className="ic-pf-featured-project">
        <div className="ic-pf-featured-project-image"><img src={flooringImages.garageEpoxyCoating} alt="Completed epoxy flooring project in a commercial facility" loading="lazy" /></div>
        <div className="ic-pf-featured-project-copy">
          <p className="ic-pf-eyebrow">Featured project</p>
          <h2>Floors that work as hard as your business.</h2>
          <p>From busy warehouses to customer-facing spaces, we install durable flooring with a schedule that respects your operation.</p>
          <button type="button" onClick={() => onNavigate('projects')} className="ic-pf-text-link">See our work <ArrowRight /></button>
        </div>
      </section>

      <section className="ic-pf-testimonial-section">
        <div className="ic-pf-testimonial-image"><img src={flooringImages.concretePolishingFloor} alt="Finished commercial flooring project" loading="lazy" /></div>
        <blockquote className="ic-pf-testimonial-card">
          <p className="ic-pf-eyebrow">Trusted by local businesses</p>
          <div className="ic-pf-testimonial-stars" aria-label="5 out of 5 stars">{Array.from({ length: TESTIMONIALS[0].rating }, (_, index) => <Star key={index} fill="currentColor" />)}</div>
          <p className="ic-pf-testimonial-quote">“{TESTIMONIALS[0].review.split('. ').slice(0, 2).join('. ')}”</p>
          <div className="ic-pf-testimonial-attribution"><strong>{TESTIMONIALS[0].name}</strong><span>{TESTIMONIALS[0].role} · {TESTIMONIALS[0].location}</span></div>
        </blockquote>
      </section>

      <section className="ic-pf-service-area">
        <div className="ic-pf-service-area-copy">
          <p className="ic-pf-eyebrow">Local team</p>
          <h2>Serving Metro Vancouver</h2>
          <p>Commercial flooring installation and repair, close to home.</p>
          <div className="ic-pf-city-grid">{cities.map((city) => <button key={city.slug} type="button" onClick={() => onNavigate('location-detail', city.slug)}><MapPin /><span>{city.name}</span><ArrowRight /></button>)}</div>
          <button type="button" onClick={() => onNavigate('locations')} className="ic-pf-text-link ic-pf-all-locations">View all service areas <ArrowRight /></button>
        </div>
        <MapEmbed title="Metro Vancouver Service Area" subtitle="Explore our local service area." className="ic-pf-home-map" />
      </section>

      <section className="ic-pf-faq-section">
        <div className="ic-pf-container ic-pf-faq-layout"><div className="ic-pf-faq-intro"><p className="ic-pf-eyebrow">Need to know</p><h2>Commercial Flooring FAQs</h2><p>Quick answers to common questions about planning a flooring project.</p><a href="tel:6045403999" className="ic-pf-text-link">Call our team <Phone /></a></div>
          <div className="ic-pf-faq-list">{HOME_FAQS.slice(0, 3).map((faq, index) => { const isOpen = openFaq === index; return <article key={faq.question} className={`ic-pf-faq-item ${isOpen ? 'is-open' : ''}`}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span className="ic-pf-faq-number">{String(index + 1).padStart(2, '0')}</span><h3>{faq.question}</h3><span className="ic-pf-faq-toggle">{isOpen ? <ChevronUp /> : <ChevronDown />}</span></button>{isOpen && <p>{faq.answer}</p>}</article>; })}</div>
        </div>
      </section>

      <section className="ic-pf-final-cta"><img src={flooringImages.concretePolishingFloor} alt="Finished commercial concrete floor" loading="lazy" /><div className="ic-pf-final-overlay" /><div className="ic-pf-final-content"><p className="ic-pf-eyebrow">Start your project</p><h2>Need a flooring partner you can plan around?</h2><p>Contact Ironclad Commercial Floors to discuss your site and schedule.</p><div className="ic-pf-actions"><a href="tel:6045403999" className="ic-pf-button ic-pf-button-primary"><Phone /> Call now · (604) 540-3999</a></div></div></section>
    </div>
  );
};
