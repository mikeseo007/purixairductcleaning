export const SITE_URL = 'https://purixairductcleaning.com';

export const site = {
  name: 'Purix Air Duct & Dryer Vent Cleaning',
  shortName: 'Purix',
  tagline: 'Air Duct & Dryer Vent Cleaning Specialists',
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
  mapsUrl: 'https://maps.app.goo.gl/avWn1kiFfo1b6v2aA',
  google: {
    profileUrl: 'https://www.google.com/maps?cid=15042423643415340158',
    reviewsUrl: 'https://maps.app.goo.gl/avWn1kiFfo1b6v2aA',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.358026683085!2d-80.1822319!3d25.9657381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning!5e1!3m2!1sen!2sus!4v1791927742995!5m2!1sen!2sus',
    rating: 5.0,
    reviewCount: 4,
  },
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

export type RegionId = 'miami-dade' | 'broward' | 'beyond';

export const regions: { id: RegionId; name: string; short: string }[] = [
  { id: 'miami-dade', name: 'Miami-Dade County', short: 'Miami-Dade County' },
  { id: 'broward', name: 'Broward County', short: 'Broward County' },
  { id: 'beyond', name: 'Palm Beach & Southwest Florida', short: 'Palm Beach & SW Florida' },
];

export interface Location {
  slug: string;
  path: string;
  city: string;
  county: string;
  region: RegionId;
  lat: number;
  lng: number;
  neighborhoods: string[];
  nearby: string[];
}

const office = { lat: 25.9657381, lng: -80.1822319 };

export const locations: Location[] = [
  // Miami-Dade
  {
    slug: 'miami',
    path: '/',
    city: 'Miami',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.7617,
    lng: -80.1918,
    neighborhoods: ['Brickell', 'Downtown Miami', 'Edgewater', 'Midtown', 'Wynwood', 'Upper East Side', 'Little Havana', 'Coconut Grove', 'Little River', 'Allapattah'],
    nearby: ['Sunny Isles Beach', 'North Miami', 'Miami Shores', 'Hallandale Beach', 'Miami Lakes'],
  },
  {
    slug: 'north-miami-beach',
    path: '/north-miami-beach/',
    city: 'North Miami Beach',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9331,
    lng: -80.1625,
    neighborhoods: ['Fulford-by-the-Sea', 'Eastern Shores', 'Uleta', 'Ojus', 'Highland Village'],
    nearby: ['North Miami', 'Miami Gardens', 'Aventura'],
  },
  {
    slug: 'aventura',
    path: '/aventura/',
    city: 'Aventura',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9565,
    lng: -80.1392,
    neighborhoods: ['Country Club Drive', 'Williams Island', 'Yacht Club', 'Golden Shores', 'Turnberry'],
    nearby: ['Sunny Isles Beach', 'Golden Beach', 'Hallandale Beach'],
  },
  {
    slug: 'miami-gardens',
    path: '/miami-gardens/',
    city: 'Miami Gardens',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.942,
    lng: -80.2456,
    neighborhoods: ['Carol City', 'Andover', 'Norwood', 'Scott Lake', 'Rolling Oaks', 'Lake Lucerne'],
    nearby: ['Opa-locka', 'Miami Lakes', 'Golden Glades'],
  },
  {
    slug: 'hialeah',
    path: '/hialeah/',
    city: 'Hialeah',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.8576,
    lng: -80.2781,
    neighborhoods: ['East Hialeah', 'West Hialeah', 'Palm Springs North', 'Hialeah Gardens'],
    nearby: ['Miami Lakes', 'Miami Springs', 'Medley'],
  },
  {
    slug: 'miami-beach',
    path: '/miami-beach/',
    city: 'Miami Beach',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.7907,
    lng: -80.13,
    neighborhoods: ['South Beach', 'Mid-Beach', 'North Beach', 'Normandy Isles', 'Sunset Islands', 'La Gorce'],
    nearby: ['Surfside', 'Bal Harbour', 'North Bay Village'],
  },
  {
    slug: 'doral',
    path: '/doral/',
    city: 'Doral',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.8195,
    lng: -80.3553,
    neighborhoods: ['Downtown Doral', 'Doral Isles', 'Doral Estates', 'Doral Park'],
    nearby: ['Medley', 'Sweetwater', 'Miami Springs'],
  },
  {
    slug: 'coral-gables',
    path: '/coral-gables/',
    city: 'Coral Gables',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.7215,
    lng: -80.2684,
    neighborhoods: ['Biltmore', 'Granada', 'Riviera', 'Cocoplum', 'Gables Estates', 'Coral Way'],
    nearby: ['South Miami', 'Coconut Grove', 'Westchester'],
  },
  // Broward
  {
    slug: 'hollywood',
    path: '/hollywood/',
    city: 'Hollywood',
    county: 'Broward County',
    region: 'broward',
    lat: 26.0112,
    lng: -80.1495,
    neighborhoods: ['Hollywood Beach', 'Downtown Hollywood', 'Hollywood Lakes', 'Hollywood Hills', 'Emerald Hills', 'Park East'],
    nearby: ['Dania Beach', 'Hallandale Beach', 'Pembroke Park', 'West Park'],
  },
  {
    slug: 'miramar',
    path: '/miramar/',
    city: 'Miramar',
    county: 'Broward County',
    region: 'broward',
    lat: 25.986,
    lng: -80.27,
    neighborhoods: ['Silver Shores', 'Monarch Lakes', 'Sunset Lakes', 'Riviera Isles', 'Miramar Isles', 'East Miramar'],
    nearby: ['Pembroke Pines', 'West Park', 'Miami Gardens'],
  },
  {
    slug: 'pembroke-pines',
    path: '/pembroke-pines/',
    city: 'Pembroke Pines',
    county: 'Broward County',
    region: 'broward',
    lat: 26.0128,
    lng: -80.2964,
    neighborhoods: ['Silver Lakes', 'Pembroke Falls', 'Chapel Trail', 'Pembroke Lakes', 'Grand Palms', 'Century Village'],
    nearby: ['Cooper City', 'Southwest Ranches', 'Weston'],
  },
  {
    slug: 'davie',
    path: '/davie/',
    city: 'Davie',
    county: 'Broward County',
    region: 'broward',
    lat: 26.0765,
    lng: -80.2521,
    neighborhoods: ['Long Lake Ranches', 'Shenandoah', 'Pine Island Ridge', 'Forest Ridge', 'Eastern Davie'],
    nearby: ['Cooper City', 'Southwest Ranches', 'Plantation'],
  },
  {
    slug: 'fort-lauderdale',
    path: '/fort-lauderdale/',
    city: 'Fort Lauderdale',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1224,
    lng: -80.1373,
    neighborhoods: ['Las Olas', 'Victoria Park', 'Coral Ridge', 'Rio Vista', 'Harbor Beach', 'Flagler Village', 'Imperial Point', 'Galt Ocean Mile'],
    nearby: ['Wilton Manors', 'Oakland Park', 'Lauderdale-by-the-Sea', 'Dania Beach'],
  },
  {
    slug: 'plantation',
    path: '/plantation/',
    city: 'Plantation',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1276,
    lng: -80.2331,
    neighborhoods: ['Plantation Isles', 'Jacaranda', 'Plantation Acres', 'Plantation Midtown', 'Lauderdale West'],
    nearby: ['Sunrise', 'Lauderhill', 'Davie'],
  },
  // Palm Beach & Southwest Florida
  {
    slug: 'boca-raton',
    path: '/boca-raton/',
    city: 'Boca Raton',
    county: 'Palm Beach County',
    region: 'beyond',
    lat: 26.3683,
    lng: -80.1289,
    neighborhoods: ['Downtown Boca', 'Boca West', 'Royal Palm Yacht & Country Club', 'Town Center', 'Woodfield', 'Camino Gardens', 'West Boca'],
    nearby: ['Delray Beach', 'Deerfield Beach', 'Highland Beach', 'Parkland'],
  },
  {
    slug: 'naples',
    path: '/naples/',
    city: 'Naples',
    county: 'Collier County',
    region: 'beyond',
    lat: 26.142,
    lng: -81.7948,
    neighborhoods: ['North Naples', 'Old Naples', 'Pelican Bay', 'Park Shore', 'Vanderbilt Beach', 'Golden Gate', 'Port Royal', 'East Naples'],
    nearby: ['Bonita Springs', 'Estero', 'Marco Island'],
  },
  {
    slug: 'cape-coral',
    path: '/cape-coral/',
    city: 'Cape Coral',
    county: 'Lee County',
    region: 'beyond',
    lat: 26.5629,
    lng: -81.9495,
    neighborhoods: ['Southeast Cape', 'Southwest Cape', 'Northeast Cape', 'Northwest Cape', 'Cape Harbour', 'Yacht Club', 'Pelican'],
    nearby: ['Fort Myers', 'North Fort Myers', 'Pine Island'],
  },
];

export const mainLocation = locations[0];

export const locationsByRegion = (region: RegionId) => locations.filter((l) => l.region === region);

/** Straight-line distance from the office, rounded to the nearest mile. */
export const milesFromOffice = (loc: Location) => {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(loc.lat - office.lat);
  const dLng = toRad(loc.lng - office.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(office.lat)) * Math.cos(toRad(loc.lat)) * Math.sin(dLng / 2) ** 2;
  return Math.round(3958.8 * 2 * Math.asin(Math.sqrt(h)));
};

export const getLocation = (slug: string) => {
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) throw new Error(`Unknown location: ${slug}`);
  return loc;
};

export interface Review {
  name: string;
  meta?: string;
  rating: number;
  date: string;
  text: string;
  services?: string;
  ownerReply?: string;
}

// Copied word for word from the Google Business Profile; don't edit the review text.
export const reviews: Review[] = [
  {
    name: 'Tanisha Ebanks',
    meta: 'Local Guide · 16 reviews',
    rating: 5,
    date: '2026-10',
    text: 'Had a wonderful experience with Zack. He was knowledgeable and pleasant. He explained everything to us and was able to clean and sanitize our system. We will definitely be recommending and using this company in the future.',
    services: 'HVAC system maintenance',
    ownerReply:
      'Tanisha Wow, thank you for such an awesome review! We’re so glad Zack and Mike could turn a stressful next day into a smooth, hassle-free experience. Honesty and fast service are top priorities for us, so hearing your feedback means the world to our team. Thanks for choosing Purix Air Duct & Dryer Vent Cleaning Team!',
  },
  {
    name: 'Mark olive',
    meta: '4 reviews',
    rating: 5,
    date: '2026-10',
    text: 'We had Mike as our mold buildup technician today, and he was informed and professional. We decided on Deep cleaning sanitation, and UV light therapy as a more permanent solution, and the fee was Great! . Happy with the work and would suggest it.Thnk you Purix Team',
    services: 'HVAC duct & vent cleaning',
    ownerReply:
      "Hello Mr Olive ,Thank you for taking the time to write this. We're glad Mike was able to help you out quickly and that King kept things smooth on the communication end. That kind of straightforward service is what we aim for every time.Purix Air Duct & Dryer vent cleaning Team :) .",
  },
  {
    name: 'Edgardo Flores',
    rating: 5,
    date: '2026-10',
    text: 'They did a great job! Amazing both of them\nThank you!!',
    services: 'HVAC duct & vent repair, HVAC duct & vent cleaning',
  },
  {
    name: 'ccabral725',
    meta: 'Local Guide · 24 reviews',
    rating: 5,
    date: '2026-10',
    text: 'Very good service',
    ownerReply:
      "Hi ccabra, thanks for the review. We're glad Purix Air Duct & Dryer Vent Cleaning could help you out. That's the kind of service we aim for every time, and we appreciate you choosing us.",
  },
];
