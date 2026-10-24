import { SITE_URL, site, locations } from './site';
import type { Service } from './services';

const abs = (path: string) => new URL(path, SITE_URL).toString();

// Stable @id for the single business entity. It lives on the homepage
// (LocalBusiness) and is referenced by name from Service.provider on service
// pages, so the reference always resolves to a real, defined entity.
export const businessId = `${SITE_URL}/#business`;

export function businessSchema() {
  return {
    '@type': 'HVACBusiness',
    '@id': businessId,
    name: site.name,
    url: SITE_URL,
    logo: abs('/favicon.png'),
    telephone: '+1-305-449-9881',
    email: site.email,
    image: abs('/og-image.jpg'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-305-449-9881',
      email: site.email,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    hasMap: site.google.profileUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: site.hours.days,
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: locations.map((l) => ({ '@type': 'City', name: `${l.city}, FL` })),
    knowsAbout: ['Air duct cleaning', 'AC ductwork', 'HVAC cleaning', 'AC coil cleaning', 'Air handler cleaning', 'Dryer vent cleaning'],
    sameAs: [site.google.profileUrl, ...Object.values(site.social)],
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
    provider: { '@id': businessId },
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
