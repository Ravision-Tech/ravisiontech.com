import type { LocalBusiness, Organization, Service, WithContext } from "schema-dts";

import { Branding } from "./branding";
import { DomainURL, GitHubURL, InstagramURL, LinkedInURL } from "./links";

const JsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: Branding.Name,
  url: DomainURL,
  logo: `${DomainURL}/branding/logomarks/ravision-tech-logomark.svg`,
  sameAs: [InstagramURL, LinkedInURL, GitHubURL],
};

const LocalBusiness: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: Branding.Name,
  description: `${Branding.Name} builds high-performance websites that rank in search and keep people staring. Custom web development, design, e-commerce, and SEO.`,
  url: DomainURL,
  email: Branding.Email,
  areaServed: "Worldwide",
  priceRange: "$$",
};

const Services: WithContext<Service>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: { "@type": "Organization", name: Branding.Name },
    description: "Fast, modern, and built to scale. Clean code with the latest tech stack.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Design",
    provider: { "@type": "Organization", name: Branding.Name },
    description: "Pixel-perfect, brand-led designs built for real users.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "E-Commerce",
    provider: { "@type": "Organization", name: Branding.Name },
    description: "Online stores built to sell, optimized from first click to confirmation.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO & Performance",
    provider: { "@type": "Organization", name: Branding.Name },
    description: "Core Web Vitals and on-page SEO baked in from day one.",
  },
];

export const StructuredData = {
  JsonLd,
  LocalBusiness,
  Services,
};
