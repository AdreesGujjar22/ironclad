import React, { type ReactNode } from 'react';

interface ImageHeroProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description?: string;
  proof?: ReactNode;
  details?: ReactNode;
  actions?: ReactNode;
  aside: ReactNode;
}

export const ImageHero: React.FC<ImageHeroProps> = ({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  proof,
  details,
  actions,
  aside,
}) => (
  <section className="ic-pf-hero" aria-label={title}>
    <img className="ic-pf-hero-image" src={image} alt={imageAlt} fetchPriority="high" decoding="async" />
    <div className="ic-pf-hero-overlay" />
    <div className="ic-pf-hero-inner">
      <div className="ic-pf-hero-copy">
        <p className="ic-pf-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="ic-pf-lead">{description}</p>}
        {details}
        {proof && <p className="ic-pf-hero-proof">{proof}</p>}
        {actions && <div className="ic-pf-actions">{actions}</div>}
      </div>
      {aside}
    </div>
  </section>
);
