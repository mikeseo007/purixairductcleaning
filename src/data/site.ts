export const SITE_URL = 'https://purixairductcleaning.com';

export const site = {
  name: 'Purix Air Duct & Dryer Vent Cleaning',
  shortName: 'Purix',
  tagline: 'Air Duct, AC Ductwork & HVAC Cleaning Specialists',
  url: SITE_URL,
  phone: '(305) 449-9881',
  phoneHref: 'tel:+13054499881',
  email: 'Info@purixairsolution.com',
  address: {
    street: '1021 Ives Dairy Rd Ste 212',
    city: 'Miami',
    region: 'FL',
    zip: '33179',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Purix+Air+Duct+%26+Dryer+Vent+Cleaning+1021+Ives+Dairy+Rd+Ste+212+Miami+FL+33179',
  hours: {
    short: 'Open 24 hours, Sun–Fri',
    long: 'Open 24 hours Sunday through Friday. Closed Saturday.',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  social: {
    facebook: 'https://www.facebook.com/purixairductcleaningcapecoral/',
    instagram: 'https://www.instagram.com/purixairductcleaningcapecoral/',
    youtube: 'https://www.youtube.com/@PurixAirDuctCleaningCapeCoral',
    tiktok: 'https://www.tiktok.com/@purixairductcleaning',
    pinterest: 'https://www.pinterest.com/purixairductcleaningcapecoral/',
    x: 'https://x.com/PurixAirDuct',
  },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;

export interface Location {
  slug: string;
  path: string;
  city: string;
  county: string;
  neighborhoods: string[];
  nearby: string[];
}

export const locations: Location[] = [
  {
    slug: 'miami',
    path: '/',
    city: 'Miami',
    county: 'Miami-Dade County',
    neighborhoods: [
      'North Miami Beach',
      'Aventura',
      'Ojus',
      'Sunny Isles Beach',
      'North Miami',
      'Miami Gardens',
      'Miami Beach',
      'Brickell',
      'Downtown Miami',
      'Coral Gables',
    ],
    nearby: ['Hallandale Beach', 'Hollywood', 'Miami Lakes', 'Doral'],
  },
  {
    slug: 'fort-lauderdale',
    path: '/fort-lauderdale/',
    city: 'Fort Lauderdale',
    county: 'Broward County',
    neighborhoods: ['Las Olas', 'Victoria Park', 'Coral Ridge', 'Rio Vista', 'Harbor Beach', 'Flagler Village', 'Imperial Point', 'Galt Ocean Mile'],
    nearby: ['Wilton Manors', 'Oakland Park', 'Lauderdale-by-the-Sea', 'Dania Beach'],
  },
  {
    slug: 'boca-raton',
    path: '/boca-raton/',
    city: 'Boca Raton',
    county: 'Palm Beach County',
    neighborhoods: ['Downtown Boca', 'Boca West', 'Royal Palm Yacht & Country Club', 'Town Center', 'Woodfield', 'Camino Gardens', 'West Boca'],
    nearby: ['Delray Beach', 'Deerfield Beach', 'Highland Beach', 'Parkland'],
  },
  {
    slug: 'naples',
    path: '/naples/',
    city: 'Naples',
    county: 'Collier County',
    neighborhoods: ['North Naples', 'Old Naples', 'Pelican Bay', 'Park Shore', 'Vanderbilt Beach', 'Golden Gate', 'Port Royal', 'East Naples'],
    nearby: ['Bonita Springs', 'Estero', 'Marco Island'],
  },
  {
    slug: 'cape-coral',
    path: '/cape-coral/',
    city: 'Cape Coral',
    county: 'Lee County',
    neighborhoods: ['Southeast Cape', 'Southwest Cape', 'Northeast Cape', 'Northwest Cape', 'Cape Harbour', 'Yacht Club', 'Pelican'],
    nearby: ['Fort Myers', 'North Fort Myers', 'Pine Island'],
  },
];

export const mainLocation = locations[0];

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
    name: 'Aja D.',
    text: 'For months something just felt off in the house and I couldn’t really explain it, but after the air duct cleaning it finally clicked, because the air feels lighter!',
    service: 'Air Duct Cleaning',
  },
  {
    name: 'Trishelle L.',
    text: 'Crazy enough, after the air duct deep cleaning, rooms that felt stuffy now feel normal again.',
    service: 'Air Duct Deep Cleaning',
  },
];
