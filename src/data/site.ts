export const SITE_URL = 'https://purixairductcleaning.com';

export interface Location {
  slug: string;
  path: string;
  city: string;
  county: string;
  businessName: string;
  phone: string;
  phoneHref: string;
  email: string;
  street: string;
  zip: string;
  mapsUrl: string;
  website?: string;
  neighborhoods: string[];
  nearby: string[];
}

export const locations: Location[] = [
  {
    slug: 'cape-coral',
    path: '/',
    city: 'Cape Coral',
    county: 'Lee County',
    businessName: 'Purix Air Duct Cleaning Cape Coral',
    phone: '(239) 441-3477',
    phoneHref: 'tel:+12394413477',
    email: 'service@purixairductcleaningcapecoral.com',
    street: '1425 Viscaya Pkwy #212',
    zip: '33990',
    mapsUrl: 'https://maps.app.goo.gl/fcSdGbQpZAiv9yfm8',
    neighborhoods: [
      'Southeast Cape',
      'Southwest Cape',
      'Northeast Cape',
      'Northwest Cape',
      'Cape Harbour',
      'Yacht Club',
      'Pelican',
      'Burnt Store',
    ],
    nearby: ['Fort Myers', 'North Fort Myers', 'Matlacha', 'Pine Island'],
  },
  {
    slug: 'naples',
    path: '/naples/',
    city: 'Naples',
    county: 'Collier County',
    businessName: 'Purix Air Duct Cleaning Naples',
    phone: '(239) 441-3221',
    phoneHref: 'tel:+12394413221',
    email: 'service@purixairductcleaningnaples.site',
    street: '6610 Willow Park Dr #205',
    zip: '34109',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Purix+Air+Duct+Cleaning+Naples+6610+Willow+Park+Dr+Naples+FL+34109',
    neighborhoods: [
      'North Naples',
      'Old Naples',
      'Pelican Bay',
      'Park Shore',
      'Vanderbilt Beach',
      'Golden Gate',
      'Port Royal',
      'East Naples',
    ],
    nearby: ['Bonita Springs', 'Estero', 'Marco Island', 'Ave Maria'],
  },
  {
    slug: 'fort-lauderdale',
    path: '/fort-lauderdale/',
    city: 'Fort Lauderdale',
    county: 'Broward County',
    businessName: 'Purix Air Duct Cleaning Fort Lauderdale',
    phone: '(305) 770-6810',
    phoneHref: 'tel:+13057706810',
    email: 'admin@purixairductcleaningfortlauderdale.com',
    street: '1 E Broward Blvd #620',
    zip: '33301',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Purix+Air+Duct+Cleaning+Fort+Lauderdale+1+E+Broward+Blvd+Fort+Lauderdale+FL+33301',
    website: 'https://purixairductcleaningfortlauderdale.com/',
    neighborhoods: [
      'Las Olas',
      'Victoria Park',
      'Coral Ridge',
      'Rio Vista',
      'Harbor Beach',
      'Flagler Village',
      'Imperial Point',
      'Galt Ocean Mile',
    ],
    nearby: ['Wilton Manors', 'Oakland Park', 'Lauderdale-by-the-Sea', 'Dania Beach'],
  },
  {
    slug: 'boca-raton',
    path: '/boca-raton/',
    city: 'Boca Raton',
    county: 'Palm Beach County',
    businessName: 'Purix Air Duct Cleaning Boca Raton',
    phone: '(561) 763-7133',
    phoneHref: 'tel:+15617637133',
    email: 'admin@purixairductcleaningbocaraton.com',
    street: '2000 Glades Rd Suite 214',
    zip: '33431',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Purix+Air+Duct+Cleaning+Boca+Raton+2000+Glades+Rd+Boca+Raton+FL+33431',
    neighborhoods: [
      'Downtown Boca',
      'Boca West',
      'Royal Palm Yacht & Country Club',
      'Boca Square',
      'Town Center',
      'Woodfield',
      'Camino Gardens',
      'West Boca',
    ],
    nearby: ['Delray Beach', 'Deerfield Beach', 'Highland Beach', 'Parkland'],
  },
];

export const mainLocation = locations[0];

export const site = {
  name: 'Purix Air Duct Cleaning',
  tagline: 'Air Duct & Dryer Vent Cleaning Specialists',
  url: SITE_URL,
  phone: mainLocation.phone,
  phoneHref: mainLocation.phoneHref,
  email: mainLocation.email,
  cities: locations.map((l) => l.city),
  social: {
    facebook: 'https://www.facebook.com/purixairductcleaningcapecoral/',
    instagram: 'https://www.instagram.com/purixairductcleaningcapecoral/',
    youtube: 'https://www.youtube.com/@PurixAirDuctCleaningCapeCoral',
    tiktok: 'https://www.tiktok.com/@purixairductcleaning',
    pinterest: 'https://www.pinterest.com/purixairductcleaningcapecoral/',
    x: 'https://x.com/PurixAirDuct',
  },
};

export const citiesList = (() => {
  const c = site.cities;
  return `${c.slice(0, -1).join(', ')} and ${c[c.length - 1]}`;
})();

export const getLocation = (slug: string) => {
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) throw new Error(`Unknown location: ${slug}`);
  return loc;
};

export const reviews = [
  {
    name: 'Camilla G.',
    text: 'After running the AC all day the house still felt stuffy, so thank you for handling the air duct deep cleaning. It actually made a noticeable difference.',
    service: 'Air Duct Deep Cleaning',
  },
  {
    name: 'Moy Z.',
    text: 'We decided to go with your air duct deep cleaning, and I didn’t expect a big change, but now the airflow feels more even in every room.',
    service: 'Air Duct Deep Cleaning',
  },
  {
    name: 'Peter L.',
    text: 'Respect how your crew handled the air duct inspection, since it gave us a clear picture of what needed to be done.',
    service: 'Air Duct Inspection',
  },
  {
    name: 'Cody M.',
    text: 'I want to say thank you for the air duct cleaning because the air in my house feels so much cleaner now and the bad smell from the vents is totally gone.',
    service: 'Air Duct Cleaning',
  },
  {
    name: 'Carlota W.',
    text: 'There was a strange smell that kept coming back and we couldn’t figure it out. Dealing with the mold in the air ducts completely removed it and improved the air quality right away.',
    service: 'Mold in Air Ducts',
  },
  {
    name: 'Trishelle L.',
    text: 'Crazy enough, after the air duct deep cleaning, rooms that felt stuffy now feel normal again.',
    service: 'Air Duct Deep Cleaning',
  },
  {
    name: 'Aja D.',
    text: 'For months something just felt off in the house and I couldn’t really explain it, but after the air duct cleaning it finally clicked, because the air feels lighter!',
    service: 'Air Duct Cleaning',
  },
  {
    name: 'Rxider',
    text: 'The air duct inspection helped explain why certain rooms never felt comfortable before.',
    service: 'Air Duct Inspection',
  },
];
