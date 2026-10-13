import { SITE_URL, site, locations, type Location } from './site';
import type { Service } from './services';

const abs = (path: string) => new URL(path, SITE_URL).toString();

export const orgId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;
const locationId = (loc: Location) => `${abs(loc.path)}#localbusiness`;

const serviceTypes = [
  'Air Duct Cleaning',
  'Dryer Vent Cleaning',
  'Air Duct Sanitizing',
  'HVAC System Cleaning',
  'Commercial Air Duct Cleaning',
];

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    url: SITE_URL,
    logo: abs('/favicon.png'),
    image: abs('/og-image.jpg'),
    telephone: site.phone,
    email: site.email,
    sameAs: Object.values(site.social),
    department: locations.map((l) => ({ '@id': locationId(l) })),
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: site.name,
    publisher: { '@id': orgId },
    inLanguage: 'en-US',
  };
}

export function localBusinessSchema(loc: Location) {
  return {
    '@type': 'HVACBusiness',
    '@id': locationId(loc),
    name: loc.businessName,
    url: abs(loc.path),
    image: abs('/og-image.jpg'),
    logo: abs('/favicon.png'),
    telephone: loc.phone,
    email: loc.email,
    priceRange: '$$',
    parentOrganization: { '@id': orgId },
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: 'FL',
      postalCode: loc.zip,
      addressCountry: 'US',
    },
    hasMap: loc.mapsUrl,
    areaServed: [loc.city, ...loc.nearby].map((name) => ({
      '@type': 'City',
      name: `${name}, FL`,
    })),
    knowsAbout: serviceTypes,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Air duct cleaning services in ${loc.city}`,
      itemListElement: serviceTypes.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `${name} in ${loc.city}, FL` },
      })),
    },
    ...(loc.slug === 'cape-coral' ? { sameAs: Object.values(site.social) } : {}),
    ...(loc.website ? { sameAs: [loc.website] } : {}),
  };
}

export function serviceSchema(service: Service) {
  return {
    '@type': 'Service',
    '@id': `${abs(service.path)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: abs(service.path),
    provider: { '@id': orgId },
    areaServed: locations.map((l) => ({ '@type': 'City', name: `${l.city}, FL` })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function articleSchema(a: { title: string; description: string; path: string; datePublished: string; image: string }) {
  return {
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    url: abs(a.path),
    mainEntityOfPage: abs(a.path),
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    image: a.image,
    author: { '@id': orgId },
    publisher: { '@id': orgId },
  };
}
