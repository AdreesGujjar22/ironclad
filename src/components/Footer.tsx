import { Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer id="footer-section" className="ic-site-footer">
    <div className="ic-footer-main">
      <div className="ic-footer-brand">
        <button type="button" onClick={() => onNavigate('home')} aria-label="Ironclad Commercial Floors home">
          <img src="/IRONCLAD-COMMERCIAL-FLOORS.png" alt="Ironclad Commercial Floors" loading="lazy" />
        </button>
        <a href="tel:6045403999"><Phone /> (604) 540-3999</a>
        <a href="mailto:info@ironcladcommercialfloors.ca"><Mail /> info@ironcladcommercialfloors.ca</a>
        <address itemScope itemType="https://schema.org/PostalAddress">
          <MapPin />
          <span><span itemProp="streetAddress">783 E 60th Ave</span>, <span itemProp="addressLocality">Vancouver</span>, <span itemProp="addressRegion">BC</span> <span itemProp="postalCode">V5X 2A5</span></span>
        </address>
      </div>

      <nav className="ic-footer-column" aria-label="About">
        <h2>About</h2>
        <button onClick={() => onNavigate('about')}>About us</button>
        <button onClick={() => onNavigate('locations')}>Service areas</button>
      </nav>

      <nav className="ic-footer-column" aria-label="Services">
        <h2>Services</h2>
        <button onClick={() => onNavigate('services')}>All services</button>
        <button onClick={() => onNavigate('service-detail', 'commercial-epoxy-flooring')}>Epoxy flooring</button>
        <button onClick={() => onNavigate('service-detail', 'flooring-repair')}>Floor repair</button>
        <button onClick={() => onNavigate('service-detail', 'flooring-installation')}>Floor installation</button>
      </nav>

      <nav className="ic-footer-column" aria-label="Resources">
        <h2>Resources</h2>
        <button onClick={() => onNavigate('blogs')}>Guides</button>
        <button onClick={() => onNavigate('projects')}>Projects</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
    </div>

    <div className="ic-footer-social">
      <span>Find us online</span>
      <a href="https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile">G</a>
    </div>

    <div className="ic-footer-bottom">
      <span>© {new Date().getFullYear()} Ironclad Commercial Floors</span>
      <button onClick={() => onNavigate('contact')}>Contact</button>
    </div>
  </footer>
);
