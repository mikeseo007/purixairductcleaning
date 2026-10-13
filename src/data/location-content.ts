import type { ImageMetadata } from 'astro';
import van from '../assets/images/purix-service-van-cape-coral.jpg';
import technicianAttic from '../assets/images/technician-cleaning-attic-duct.jpg';
import negativeAir from '../assets/images/negative-air-machine-duct-cleaning.jpg';
import rooftop from '../assets/images/rooftop-dryer-vent-cleaning.jpg';
import livingRoom from '../assets/images/technicians-living-room-duct-cleaning.png';
import ceilingBrush from '../assets/images/ceiling-vent-brush-cleaning.webp';
import homeVentilation from '../assets/images/home-ventilation-cleaning.webp';
import flexBeforeAfter from '../assets/images/flex-duct-before-after.webp';
import residentialBoca from '../assets/images/residential-duct-cleaning-boca.webp';
import dryerBeforeAfter from '../assets/images/dryer-duct-before-after.webp';
import hvacMaintenance from '../assets/images/hvac-air-duct-maintenance.webp';
import grille from '../assets/images/vent-grille-cleaning.webp';

export interface LocationContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  heroImage: ImageMetadata;
  heroImageAlt: string;
  introHeading: string;
  intro: string[];
  introImage: ImageMetadata;
  introImageAlt: string;
  localHeading: string;
  local: string[];
  localImage: ImageMetadata;
  localImageAlt: string;
  faqs: { q: string; a: string }[];
}

const sharedFaqs = (city: string, county: string) => [
  {
    q: `How often should air ducts be cleaned in ${city}?`,
    a: `Most homes benefit from professional air duct cleaning every 3 to 5 years. Because AC systems in ${city} run most of the year, homes with pets, allergies, recent renovations or musty odors often benefit from cleaning sooner.`,
  },
  {
    q: 'What are the signs that my dryer vent needs cleaning?',
    a: 'Long drying times, a hot dryer or laundry room, burning smells, and lint around the dryer are common signs. Most dryer vents should be cleaned at least once a year.',
  },
  {
    q: `How much does air duct cleaning cost in ${city}?`,
    a: 'The price depends on the size of your home, the number of vents and AC systems, and the condition of the ductwork. Call us or send a service request for a free, no-obligation quote.',
  },
  {
    q: `Do you offer residential and commercial service in ${city}?`,
    a: `Yes. We clean ductwork, dryer vents and HVAC systems for homes, condos, offices, restaurants and other commercial properties throughout ${city} and surrounding communities in ${county}.`,
  },
  {
    q: `Do you offer same-day air duct cleaning in ${city}?`,
    a: `Same-day service is often available in ${city}, depending on the schedule. Call our ${city} team to check today’s availability.`,
  },
];

export const locationContent: Record<string, LocationContent> = {
  'cape-coral': {
    metaTitle: 'Air Duct Cleaning Cape Coral, FL | Purix Air Duct Cleaning',
    metaDescription:
      'Purix Air Duct Cleaning provides professional air duct, dryer vent and HVAC cleaning in Cape Coral, FL. Same-day service for homes and businesses. Call (239) 441-3477.',
    h1: 'Air Duct & Dryer Vent Cleaning in Cape Coral, FL',
    heroSubtitle:
      'Breathe cleaner air at home. Purix removes the dust, allergens and lint hiding in your ducts and dryer vents, with same-day service across Cape Coral.',
    heroImage: van,
    heroImageAlt: 'Purix Air Duct Cleaning Cape Coral service van parked outside a home',
    introHeading: 'Professional Air Duct & Dryer Vent Cleaning You Can Trust in Cape Coral',
    intro: [
      'The air inside your home should feel clean, fresh and safe for your family. Over time, dust, pet hair, pollen, mold spores and other contaminants build up inside your air ducts and keep circulating through your home. That buildup affects indoor air quality, can trigger allergies, and reduces the efficiency of your AC system.',
      'At Purix Air Duct Cleaning Cape Coral, we provide professional residential and commercial air duct cleaning designed to remove hidden debris, improve airflow and restore healthier indoor air. Our technicians use powerful negative-air equipment and proven cleaning methods to deliver a deep, thorough clean, then walk you through the results before we leave.',
    ],
    introImage: livingRoom,
    introImageAlt: 'Two Purix technicians cleaning air ducts in a Cape Coral living room',
    localHeading: 'Your Local Air Duct & Dryer Vent Experts in Cape Coral',
    local: [
      'Cape Coral is a growing waterfront city with more than 400 miles of canals, and that means warm, humid air for most of the year. When your AC runs nearly nonstop, the duct system pulls in more dust and moisture than homes in cooler climates, and attic ductwork in single-story block homes heats up and sweats during the summer months.',
      'Many Cape Coral homeowners are also seasonal residents. When a home sits closed up for months, ducts and air handlers can develop a stale, musty smell that shows up the first time the AC kicks back on. A professional duct cleaning, and sanitizing when it’s needed, is one of the best ways to get the house feeling fresh again.',
      'From the Yacht Club and Cape Harbour to the Northwest Cape and Burnt Store area, Purix serves homes and businesses across Cape Coral with dependable service and results you can see.',
    ],
    localImage: flexBeforeAfter,
    localImageAlt: 'Before and after flex duct cleaning in a Cape Coral attic',
    faqs: [
      ...sharedFaqs('Cape Coral', 'Lee County'),
      {
        q: 'Why does my AC smell musty after I return for the season?',
        a: 'When a home is closed up, humidity and dust can build up in the ductwork and air handler. A professional duct cleaning, followed by sanitizing if needed, removes the source of the odor instead of masking it.',
      },
    ],
  },
  naples: {
    metaTitle: 'Air Duct Cleaning Naples, FL | Purix Air Duct Cleaning',
    metaDescription:
      'Professional air duct cleaning, dryer vent cleaning and air duct sanitizing in Naples, FL. Local team, same-day service for homes, condos and businesses. Call (239) 441-3221.',
    h1: 'Air Duct & Dryer Vent Cleaning in Naples, FL',
    heroSubtitle:
      'Fresher air for Naples homes, condos and businesses. Professional duct, dryer vent and HVAC cleaning from a local Naples team.',
    heroImage: technicianAttic,
    heroImageAlt: 'Purix technician cleaning attic ductwork in a Naples home',
    introHeading: 'Reliable Air Duct & Dryer Vent Cleaning Services in Naples',
    intro: [
      'Naples homes depend on air conditioning almost year-round, and every hour the system runs, it recirculates whatever has settled inside the ducts: dust, pet dander, pollen, construction debris and, in humid conditions, mold particles. Over time that buildup lowers indoor air quality and makes the system work harder.',
      'Purix Air Duct Cleaning Naples provides thorough residential and commercial air duct cleaning, dryer vent cleaning, air duct sanitizing and HVAC system cleaning. Our technicians use professional negative-air equipment to pull debris out of your home, not push it around, and we always walk you through the results.',
    ],
    introImage: ceilingBrush,
    introImageAlt: 'Brush cleaning the inside of a ceiling supply vent in Naples',
    localHeading: 'Air Duct Cleaning for Naples Homes, Condos & Seasonal Residences',
    local: [
      'Naples has a large number of seasonal and second homes. When a residence sits closed for the summer, the ductwork and air handler can develop musty odors, and dust settles throughout the system. We recommend scheduling a duct cleaning before you return for the season or right after you arrive, so the house feels fresh from day one.',
      'Larger homes in communities like Pelican Bay, Port Royal and Park Shore often have multiple AC zones and long duct runs, and many condos vent dryers through long shared or vertical runs that collect lint quickly. Our team cleans each system and every dryer vent run thoroughly, regardless of size.',
      'From Old Naples and Vanderbilt Beach to Golden Gate and East Naples, Purix serves homes and businesses throughout Naples and surrounding Collier County communities.',
    ],
    localImage: homeVentilation,
    localImageAlt: 'Home ventilation cleaning service in a Naples residence',
    faqs: [
      ...sharedFaqs('Naples', 'Collier County'),
      {
        q: 'Can you clean my ducts before I return for the season?',
        a: 'Yes. Many seasonal homeowners schedule a cleaning ahead of their arrival. Call our Naples team to arrange access and timing.',
      },
    ],
  },
  'fort-lauderdale': {
    metaTitle: 'Air Duct Cleaning Fort Lauderdale, FL | Purix Air Duct Cleaning',
    metaDescription:
      'Air duct cleaning, dryer vent cleaning and HVAC cleaning in Fort Lauderdale, FL for homes, condos and businesses. Same-day service available. Call (305) 770-6810.',
    h1: 'Air Duct & Dryer Vent Cleaning in Fort Lauderdale, FL',
    heroSubtitle:
      'Professional air duct, dryer vent and HVAC cleaning for Fort Lauderdale homes, high-rise condos and businesses, with same-day service available.',
    heroImage: negativeAir,
    heroImageAlt: 'Negative air duct cleaning machine connected to a Fort Lauderdale home',
    introHeading: 'Professional Air Duct & Dryer Vent Cleaning You Can Trust in Fort Lauderdale',
    intro: [
      'Breathe cleaner, healthier air with Purix Air Duct Cleaning Fort Lauderdale. Dust, pet dander, allergens and debris build up inside your ducts over time, lowering indoor air quality and forcing your AC to work harder in a climate where it barely gets a break.',
      'Our trained technicians use powerful, modern negative-air equipment to remove deep-set buildup, restore proper airflow and help improve your home’s efficiency. From improving air circulation to reducing fire risks caused by clogged dryer vents, we focus on your safety, comfort and long-term savings.',
    ],
    introImage: residentialBoca,
    introImageAlt: 'Residential air duct cleaning in a Fort Lauderdale home',
    localHeading: 'Air Duct Cleaning for Fort Lauderdale Homes, Condos & Businesses',
    local: [
      'Fort Lauderdale’s salt air, heat and humidity are tough on HVAC systems. Air conditioners here run nearly all year, so dust and moisture accumulate in ductwork faster, and older homes in neighborhoods like Victoria Park, Rio Vista and Coral Ridge often have duct systems that haven’t been cleaned in years.',
      'High-rise and mid-rise condos along the beach and Galt Ocean Mile bring their own challenges: compact air handler closets, long dryer vent runs, and building rules about access and timing. Our technicians work with condo associations and property managers to get the job done cleanly and on schedule.',
      'We also clean commercial systems for offices, restaurants and retail spaces in Downtown Fort Lauderdale, Flagler Village and Las Olas, scheduled around your business hours.',
    ],
    localImage: dryerBeforeAfter,
    localImageAlt: 'Before and after dryer vent cleaning in a Fort Lauderdale condo',
    faqs: [
      ...sharedFaqs('Fort Lauderdale', 'Broward County'),
      {
        q: 'Do you clean dryer vents in high-rise condos?',
        a: 'Yes. We clean dryer vents and ductwork in condos and high-rise units, and we can coordinate with your building management on access and scheduling.',
      },
    ],
  },
  'boca-raton': {
    metaTitle: 'Air Duct Cleaning Boca Raton, FL | Purix Air Duct Cleaning',
    metaDescription:
      'Professional air duct cleaning, dryer vent cleaning and air duct sanitizing in Boca Raton, FL. Residential and commercial. Same-day service. Call (561) 763-7133.',
    h1: 'Air Duct & Dryer Vent Cleaning in Boca Raton, FL',
    heroSubtitle:
      'Cleaner air and safer dryer vents for Boca Raton homes and businesses. Professional equipment, experienced technicians and same-day service.',
    heroImage: rooftop,
    heroImageAlt: 'Purix technician cleaning a rooftop dryer vent in Boca Raton',
    introHeading: 'Reliable Air Duct & Dryer Vent Cleaning Services in Boca Raton',
    intro: [
      'The quality of the air inside your home plays a major role in your family’s comfort and well-being. Over time, dust, pet hair, pollen and allergens build up inside your air ducts and circulate whenever your HVAC system runs, creating odors, aggravating allergies and reducing system efficiency.',
      'At Purix Air Duct Cleaning Boca Raton, we provide detailed residential and commercial air duct cleaning designed to remove deep contaminants and restore cleaner, healthier airflow. Our experienced technicians use advanced equipment and professional cleaning methods, and we walk you through the results when we’re done.',
    ],
    introImage: hvacMaintenance,
    introImageAlt: 'HVAC air duct maintenance in a Boca Raton home',
    localHeading: 'Your Trusted Local Air Duct Cleaning Experts in Boca Raton',
    local: [
      'Boca Raton is a coastal city where many homes and businesses depend on their HVAC systems year-round. Larger homes in communities like Boca West, Royal Palm Yacht & Country Club and Woodfield often have multiple air handlers and extensive ductwork, and every system needs attention to keep the whole house comfortable.',
      'Many homes here also vent the dryer through the roof, which makes the vent hard to reach and quick to clog. Our technicians safely clean roof-terminated and long-run dryer vents, clear the vent cap, and confirm strong airflow before we leave.',
      'From Downtown Boca and Camino Gardens to West Boca and the offices around Town Center and Glades Road, Purix provides dependable residential and commercial service throughout Boca Raton.',
    ],
    localImage: grille,
    localImageAlt: 'Cleaning a return air vent grille in a Boca Raton home',
    faqs: [
      ...sharedFaqs('Boca Raton', 'Palm Beach County'),
      {
        q: 'Can you clean homes with more than one AC system?',
        a: 'Yes. We clean homes with multiple air handlers and zones, and we will quote each system so you know exactly what’s included.',
      },
    ],
  },
};
