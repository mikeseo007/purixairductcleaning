import type { ImageMetadata } from 'astro';
import ceilingVentBrush from '../assets/images/ceiling-vent-brush-cleaning.webp';
import negativeAirMachine from '../assets/images/negative-air-machine-duct-cleaning.jpg';
import residentialDuct from '../assets/images/residential-air-duct-cleaning.webp';
import technicianAttic from '../assets/images/technician-cleaning-attic-duct.jpg';
import dryerBeforeAfter from '../assets/images/dryer-duct-before-after.webp';
import rooftopDryer from '../assets/images/rooftop-dryer-vent-cleaning.jpg';
import dryerLint from '../assets/images/dryer-vent-lint-removal.webp';
import dryerService from '../assets/images/dryer-vent-cleaning-service.webp';
import sanitizing from '../assets/images/air-duct-sanitizing.webp';
import ventTechnician from '../assets/images/air-vent-cleaning-technician.webp';
import dustRemoval from '../assets/images/air-duct-dust-removal.webp';
import grilleCleaning from '../assets/images/vent-grille-cleaning.webp';
import hvacDeepClean from '../assets/images/hvac-system-deep-cleaning.webp';
import hvacMaintenance from '../assets/images/hvac-air-duct-maintenance.webp';
import commercialHvac from '../assets/images/commercial-hvac-duct-cleaning.webp';
import commercialDuct from '../assets/images/commercial-air-duct-cleaning.webp';
import professionalDuct from '../assets/images/professional-air-duct-cleaning.webp';

export type IconName = 'duct' | 'dryer' | 'sanitize' | 'hvac' | 'building';

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
  image?: ImageMetadata;
  imageAlt?: string;
}

export interface Service {
  slug: string;
  path: string;
  name: string;
  icon: IconName;
  card: string;
  cardImage: ImageMetadata;
  cardImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  intro: string[];
  introImage: ImageMetadata;
  introImageAlt: string;
  signsHeading: string;
  signs: string[];
  benefitsHeading: string;
  benefits: { title: string; text: string }[];
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'air-duct-cleaning',
    path: '/air-duct-cleaning/',
    name: 'Air Duct Cleaning',
    icon: 'duct',
    card: 'Deep cleaning of supply and return ducts to remove dust, pet dander, pollen and debris that circulate every time your AC runs.',
    cardImage: residentialDuct,
    cardImageAlt: 'Technician performing residential air duct cleaning in a Florida home',
    metaTitle: 'Air Duct Cleaning in Cape Coral, Naples & South FL | Purix',
    metaDescription:
      'Professional residential and commercial air duct cleaning in Southwest and South Florida. Remove dust, allergens and odors and restore airflow. Same-day service. Call (239) 441-3477.',
    h1: 'Professional Air Duct Cleaning',
    heroSubtitle: 'Cleaner air, stronger airflow and a more efficient AC for homes and businesses across Florida.',
    intro: [
      'In Florida, your air conditioner runs almost all year. Every hour it runs, it pulls air from your living space through the return ducts, across the coil and back out through the supply vents. Over time, dust, pet dander, pollen, drywall debris, and even mold spores settle inside that ductwork and get blown back into the rooms you live in.',
      'Purix Air Duct Cleaning removes that buildup at the source. Our technicians put the duct system under negative air pressure, agitate the debris loose with rotating brushes and air whips, and pull it out through a high-powered collection unit, so the dirt leaves your home instead of landing on your furniture.',
      'The result is cleaner indoor air, more even airflow from room to room, fewer musty odors, and an AC system that doesn’t have to work as hard to keep you comfortable.',
    ],
    introImage: negativeAirMachine,
    introImageAlt: 'Negative air machine connected to a home duct system during air duct cleaning',
    signsHeading: 'Signs your air ducts need cleaning',
    signs: [
      'Dust settles on furniture again within a day or two of cleaning',
      'Visible dust or dark streaks around supply vents and return grilles',
      'A musty or stale smell when the AC kicks on',
      'Some rooms feel stuffy or get weaker airflow than others',
      'Allergy or sinus symptoms that get worse indoors',
      'You recently renovated, moved in, or haven’t had the ducts cleaned in 3–5 years',
    ],
    benefitsHeading: 'What a professional duct cleaning does for your home',
    benefits: [
      { title: 'Healthier indoor air', text: 'Removes dust, dander, pollen and debris that otherwise recirculate through every room.' },
      { title: 'Better airflow', text: 'Clears restrictions so cool air reaches every room more evenly.' },
      { title: 'Fewer odors', text: 'Eliminates trapped dust, pet hair and organic buildup that cause stale smells.' },
      { title: 'Less strain on your AC', text: 'A cleaner system moves air more easily, which supports efficiency and equipment life.' },
    ],
    sections: [
      {
        heading: 'Residential air duct cleaning',
        paragraphs: [
          'Your home’s air should feel clean and comfortable every day. Over time, dust, pet dander, pollen, mold particles and debris build up inside your air ducts and spread through your home whenever the HVAC system runs. That buildup affects indoor air quality, can aggravate allergies, creates unpleasant odors and forces the system to work harder than necessary.',
          'We clean every accessible supply and return line, the main trunk lines, the registers and grilles, and the return plenum. Before we start, we protect floors and furniture, and when we finish we walk you through the work so you can see exactly what came out of your system.',
        ],
        image: technicianAttic,
        imageAlt: 'Purix technician cleaning flexible attic ductwork through a ceiling opening',
      },
      {
        heading: 'Our air duct cleaning process',
        paragraphs: [
          'Inspection: we check the registers, returns and accessible ductwork, and note anything unusual such as disconnected runs, crushed flex duct, or signs of moisture.',
          'Negative air and agitation: we connect a powerful collection unit to the system, then work through each run with brushes and air whips to break buildup loose so it is pulled out of the home.',
          'Registers, grilles and returns: vent covers are removed and cleaned, and the return side, which collects the most debris, gets special attention.',
          'Final walkthrough: we show you the results and recommend any optional follow-up, such as air duct sanitizing for odor or microbial concerns.',
        ],
        image: ceilingVentBrush,
        imageAlt: 'Rotating brush cleaning the inside of a ceiling supply vent',
      },
      {
        heading: 'Commercial air duct cleaning',
        paragraphs: [
          'Offices, restaurants, retail stores, medical suites and other commercial spaces move a lot more air than a typical home, and their ductwork collects dust, debris and contaminants faster. Dirty commercial ducts lead to poor airflow, higher energy costs, odors, and an uncomfortable environment for employees and customers.',
          'We schedule commercial cleanings around your business hours to keep disruption to a minimum.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How often should air ducts be cleaned?',
        a: 'Most homes benefit from professional air duct cleaning every 3 to 5 years. Homes with pets, allergy sufferers, smokers, recent renovations, or heavy year-round AC use, which is common in Florida, may benefit from cleaning more often.',
      },
      {
        q: 'How long does an air duct cleaning take?',
        a: 'A typical single-family home takes a few hours, depending on the size of the home, the number of vents and how much buildup is in the system. We will give you a time estimate when you book.',
      },
      {
        q: 'Will air duct cleaning make a mess in my home?',
        a: 'No. The system is kept under negative pressure, so loosened debris is pulled into our collection unit instead of blowing into your rooms. We also protect floors and work areas before we start.',
      },
      {
        q: 'Does air duct cleaning help with allergies?',
        a: 'Removing dust, pet dander and pollen from the duct system reduces how much of it gets recirculated through your home. Many customers notice their home feels fresher and less dusty after a cleaning.',
      },
      {
        q: 'Do you offer same-day air duct cleaning?',
        a: 'Yes. Same-day service is often available depending on our schedule in your area. Call the location nearest you to check availability.',
      },
    ],
  },
  {
    slug: 'dryer-vent-cleaning',
    path: '/dryer-vent-cleaning/',
    name: 'Dryer Vent Cleaning',
    icon: 'dryer',
    card: 'Remove trapped lint from the full length of your dryer vent to cut drying times, lower energy use and reduce fire risk.',
    cardImage: dryerService,
    cardImageAlt: 'Technician cleaning a residential dryer vent line',
    metaTitle: 'Dryer Vent Cleaning in Cape Coral, Naples & South FL | Purix',
    metaDescription:
      'Professional dryer vent cleaning to remove lint buildup, shorten drying times and reduce fire risk. Serving Cape Coral, Naples, Fort Lauderdale and Boca Raton. Call (239) 441-3477.',
    h1: 'Professional Dryer Vent Cleaning',
    heroSubtitle: 'Faster drying, lower energy bills and a safer home, without the lint fire risk.',
    intro: [
      'Your dryer’s lint trap only catches part of the lint. The rest gets pushed into the vent line that runs through your walls, attic or roof. Over months of laundry it builds up, narrows the vent, and traps hot, moist air inside the dryer.',
      'The U.S. Fire Administration reports that failure to clean is the leading cause of home clothes dryer fires. A clogged vent also means longer cycles, damp clothes, higher electric bills and extra wear on the dryer’s heating element and motor.',
      'Purix Air Duct Cleaning clears the entire vent run, from the back of the dryer to the exterior termination on the wall or roof, so your dryer can breathe again.',
    ],
    introImage: dryerBeforeAfter,
    introImageAlt: 'Before and after dryer vent duct cleaning showing heavy lint removed',
    signsHeading: 'Signs your dryer vent is clogged',
    signs: [
      'Clothes need two or more cycles to dry',
      'The dryer or laundry room gets unusually hot',
      'A burning smell while the dryer runs',
      'Lint collecting around the dryer door or behind the dryer',
      'The exterior vent flap barely opens when the dryer is running',
      'It has been more than a year since the vent was last cleaned',
    ],
    benefitsHeading: 'Why regular dryer vent cleaning matters',
    benefits: [
      { title: 'Reduced fire risk', text: 'Lint is highly flammable. Removing it from the vent line is one of the simplest ways to protect your home.' },
      { title: 'Shorter drying times', text: 'A clear vent lets moist air escape, so clothes dry in one cycle again.' },
      { title: 'Lower energy bills', text: 'Your dryer runs fewer and shorter cycles, using less electricity or gas.' },
      { title: 'Longer dryer life', text: 'Less heat and strain on the heating element, thermostat and blower motor.' },
    ],
    sections: [
      {
        heading: 'How we clean your dryer vent',
        paragraphs: [
          'We disconnect the dryer and inspect the transition hose behind it. Then we run rotary brushes through the full length of the vent line while a vacuum pulls the loosened lint out. Long runs and attic or roof terminations get cleaned from both ends when needed.',
          'We clear the exterior vent hood or roof cap, check that the flap opens freely, reconnect everything, and run the dryer to confirm strong airflow at the exterior.',
        ],
        image: rooftopDryer,
        imageAlt: 'Purix technician removing lint from a rooftop dryer vent',
      },
      {
        heading: 'Roof and long-run dryer vents',
        paragraphs: [
          'Many Florida homes and condos vent the dryer up through the roof or through long runs in the attic. These vents clog faster because lint has farther to travel and gravity works against it. They are also the hardest for homeowners to reach, so they often go years without a cleaning.',
          'Our technicians are equipped to safely clean roof-terminated and long-run vents, and we will let you know if we find crushed sections, bird nests, or a damaged vent cap that needs attention.',
        ],
        image: dryerLint,
        imageAlt: 'Lint removed from a long dryer vent line',
      },
    ],
    faqs: [
      {
        q: 'How often should dryer vents be professionally cleaned?',
        a: 'Most dryer vents should be cleaned at least once a year. Large families, homes with pets, and long or roof-terminated vents may need cleaning more often.',
      },
      {
        q: 'What are the signs of a clogged dryer vent?',
        a: 'Long drying times, a hot dryer or laundry room, burning smells, excess lint around the dryer, and weak airflow at the exterior vent are all common signs.',
      },
      {
        q: 'Isn’t cleaning the lint trap enough?',
        a: 'No. The lint trap catches only part of the lint. The rest builds up inside the vent line, which can only be cleared by cleaning the duct itself.',
      },
      {
        q: 'Can dryer vent cleaning help my dryer last longer?',
        a: 'Yes. A clear vent reduces heat and strain on the dryer’s components, which helps extend the life of the appliance.',
      },
      {
        q: 'How long does dryer vent cleaning take?',
        a: 'Most dryer vent cleanings take about an hour. Long attic runs and roof vents can take a little longer.',
      },
    ],
  },
  {
    slug: 'air-duct-sanitizing',
    path: '/air-duct-sanitizing/',
    name: 'Air Duct Sanitizing',
    icon: 'sanitize',
    card: 'Professional-grade sanitizing treatment after cleaning to target odors, bacteria and mold particles inside your ductwork.',
    cardImage: sanitizing,
    cardImageAlt: 'Air duct sanitizing treatment being applied inside a home duct system',
    metaTitle: 'Air Duct Sanitizing in Cape Coral, Naples & South FL | Purix',
    metaDescription:
      'Air duct sanitizing to reduce odors, bacteria and mold particles in your HVAC system. Ideal after duct cleaning in humid Florida homes. Call Purix at (239) 441-3477.',
    h1: 'Air Duct Sanitizing',
    heroSubtitle: 'Target lingering odors and microbial growth in your duct system after a thorough cleaning.',
    intro: [
      'Florida’s heat and humidity create the conditions mold and bacteria love. When warm, moist air meets cold ductwork and AC components, condensation forms, and dust inside the ducts gives microbes something to feed on. The result can be a musty smell every time the AC turns on.',
      'Air duct sanitizing is a professional treatment applied to the duct system after it has been cleaned. It helps reduce bacteria, mold particles and odor-causing contaminants that remain on duct surfaces, leaving your system smelling fresher.',
      'Purix Air Duct Cleaning uses professional-grade products and application equipment, and we always clean the system first, because sanitizing over dust and debris doesn’t work.',
    ],
    introImage: dustRemoval,
    introImageAlt: 'Dust and debris being removed from an air duct before sanitizing',
    signsHeading: 'When to consider air duct sanitizing',
    signs: [
      'A musty or mildew smell from the vents when the AC runs',
      'Recent water leaks, flooding, or high indoor humidity',
      'Visible mold spots around supply vents or on register covers',
      'Pet, smoke or cooking odors that linger in the HVAC system',
      'Moving into a home that sat closed up for a long time',
      'Anyone in the household who is sensitive to indoor air quality',
    ],
    benefitsHeading: 'Benefits of air duct sanitizing',
    benefits: [
      { title: 'Fresher-smelling air', text: 'Targets odor-causing contaminants trapped on duct surfaces.' },
      { title: 'Reduced microbial growth', text: 'Helps reduce bacteria and mold particles inside the duct system.' },
      { title: 'Ideal after cleaning', text: 'Finishes a deep duct cleaning so your system starts as fresh as possible.' },
      { title: 'Residential & commercial', text: 'Available for homes, condos, offices, restaurants and retail spaces.' },
    ],
    sections: [
      {
        heading: 'Remove odors and airborne contaminants',
        paragraphs: [
          'Dust, moisture, pets, smoke and cooking can all leave odors trapped in your ductwork. After a complete duct cleaning, a sanitizing treatment targets the hidden particles that cleaning alone can leave behind and helps create a fresher indoor environment.',
          'Our technicians apply the treatment through the system with professional fogging equipment so it reaches the supply and return lines, not just the areas you can see.',
        ],
        image: ventTechnician,
        imageAlt: 'Technician treating an air vent during air duct sanitizing',
      },
      {
        heading: 'Mold in air ducts',
        paragraphs: [
          'If you notice a persistent musty smell or see dark spots around your vents, there may be moisture and microbial growth in the system. We will inspect the ductwork, clean it thoroughly, and recommend sanitizing where it makes sense.',
          'Ongoing mold usually has a moisture source, such as a clogged condensate line, poorly insulated ducts, or high indoor humidity. We will tell you what we see so the root cause can be addressed and the problem doesn’t come back.',
        ],
        image: grilleCleaning,
        imageAlt: 'Cleaning a dirty return air grille during an air duct service',
      },
    ],
    faqs: [
      {
        q: 'What is air duct sanitizing?',
        a: 'Air duct sanitizing is a professional treatment applied inside the HVAC duct system to help reduce bacteria, odors, mold particles and other contaminants on duct surfaces.',
      },
      {
        q: 'When should air duct sanitizing be done?',
        a: 'It is typically done right after a professional air duct cleaning, especially when there are concerns about odors, mold, moisture or indoor air quality.',
      },
      {
        q: 'Can air duct sanitizing help with odors?',
        a: 'Yes. Sanitizing helps reduce odors caused by dust, moisture, pets, smoke and other contaminants trapped inside the ductwork.',
      },
      {
        q: 'Is sanitizing a replacement for duct cleaning?',
        a: 'No. Sanitizing works best on a clean surface. We clean the duct system first, then apply the sanitizing treatment.',
      },
    ],
  },
  {
    slug: 'hvac-system-cleaning',
    path: '/hvac-system-cleaning/',
    name: 'HVAC System Cleaning',
    icon: 'hvac',
    card: 'Cleaning of the air handler, blower and return areas to improve airflow, comfort and system efficiency.',
    cardImage: hvacDeepClean,
    cardImageAlt: 'HVAC system deep cleaning by a Purix technician',
    metaTitle: 'HVAC System Cleaning in Cape Coral, Naples & South FL | Purix',
    metaDescription:
      'HVAC system cleaning to remove dust and buildup from your air handler and ductwork, improve airflow and support efficiency. Homes and businesses. Call (239) 441-3477.',
    h1: 'HVAC System Cleaning',
    heroSubtitle: 'Help your AC breathe easier with a deep clean of the components that move your air.',
    intro: [
      'Your ductwork is only part of the system. Dust and debris also build up on the blower, inside the air handler cabinet, around the return plenum and on the components that move air through your home. That buildup restricts airflow, makes the system work harder, and can reduce indoor air quality.',
      'Purix Air Duct Cleaning provides HVAC system cleaning for homes and businesses in Cape Coral, Naples, Fort Lauderdale and Boca Raton. We pair it with a full duct cleaning, so the whole air path from return to supply is clean.',
      'With Florida AC systems running most of the year, keeping the system clean is one of the easiest ways to support comfort and efficiency.',
    ],
    introImage: hvacMaintenance,
    introImageAlt: 'Technician performing HVAC air duct maintenance',
    signsHeading: 'Signs your HVAC system needs cleaning',
    signs: [
      'Weak airflow even with a new filter',
      'The system runs longer to reach the set temperature',
      'Dust blows out of the vents when the system starts',
      'Musty smells from the air handler closet',
      'Higher energy bills without a change in usage',
      'It has been several years since the system was cleaned',
    ],
    benefitsHeading: 'Benefits of HVAC system cleaning',
    benefits: [
      { title: 'Improved airflow', text: 'Removes buildup that restricts how much air your system can move.' },
      { title: 'Efficiency support', text: 'A clean system doesn’t have to work as hard to cool your home.' },
      { title: 'Cleaner indoor air', text: 'Less dust and debris for the system to recirculate.' },
      { title: 'Homes & businesses', text: 'Residential systems and commercial rooftop and split systems.' },
    ],
    sections: [
      {
        heading: 'Residential HVAC cleaning',
        paragraphs: [
          'A clean HVAC system helps maintain comfortable temperatures and healthier air throughout your home. We clean the return plenum, accessible air handler components, registers and duct system, and we’ll point out anything that may need attention from your HVAC contractor.',
        ],
        image: professionalDuct,
        imageAlt: 'Professional air duct and HVAC cleaning service in a home',
      },
      {
        heading: 'Commercial HVAC cleaning',
        paragraphs: [
          'Dust, bacteria and pollutants trapped in commercial systems spread through your workspace and affect employee comfort, customer experience and HVAC performance. We clean commercial systems for offices, shops, restaurants and commercial buildings, and schedule work to minimize disruption to your business.',
        ],
        image: commercialHvac,
        imageAlt: 'Commercial HVAC duct cleaning in a business property',
      },
    ],
    faqs: [
      {
        q: 'What is included in HVAC system cleaning?',
        a: 'HVAC system cleaning focuses on the components that move air, such as the return plenum, accessible air handler areas, registers and the duct system, to remove dust and debris that restrict airflow.',
      },
      {
        q: 'How often should my HVAC system be cleaned?',
        a: 'Most homes benefit from a full system and duct cleaning every 3 to 5 years, and sooner if you have pets, allergies, recent renovations or visible dust coming from the vents.',
      },
      {
        q: 'Does HVAC cleaning help with energy efficiency?',
        a: 'Removing dust and debris reduces airflow restrictions, which helps your system run with less strain.',
      },
      {
        q: 'Do you clean commercial HVAC systems?',
        a: 'Yes. We provide HVAC and air duct cleaning for offices, restaurants, retail stores and other commercial properties.',
      },
    ],
  },
  {
    slug: 'commercial-air-duct-cleaning',
    path: '/commercial-air-duct-cleaning/',
    name: 'Commercial Air Duct Cleaning',
    icon: 'building',
    card: 'Air duct and HVAC cleaning for offices, restaurants, retail stores and commercial buildings, scheduled around your hours.',
    cardImage: commercialDuct,
    cardImageAlt: 'Commercial air duct cleaning in an office building',
    metaTitle: 'Commercial Air Duct Cleaning in Southwest & South FL | Purix',
    metaDescription:
      'Commercial air duct cleaning for offices, restaurants, retail stores and commercial buildings in Cape Coral, Naples, Fort Lauderdale and Boca Raton. Call (239) 441-3477.',
    h1: 'Commercial Air Duct Cleaning',
    heroSubtitle: 'Cleaner air for your employees and customers, with scheduling that works around your business.',
    intro: [
      'Commercial HVAC systems move far more air than residential systems, and they collect dust, debris and contaminants faster. Dirty commercial ductwork leads to poor airflow, uneven temperatures, odors, higher energy costs and an uncomfortable space for employees and customers.',
      'Purix Air Duct Cleaning provides commercial air duct cleaning for offices, restaurants, retail stores, medical and professional suites, and other commercial properties across Cape Coral, Naples, Fort Lauderdale and Boca Raton.',
      'We remove heavy buildup, improve air circulation, and help your HVAC system run with less strain, with scheduling built around your business hours.',
    ],
    introImage: commercialHvac,
    introImageAlt: 'Commercial HVAC ductwork being cleaned',
    signsHeading: 'Signs your commercial ducts need cleaning',
    signs: [
      'Employees or customers complaining about stuffy or stale air',
      'Dust buildup on vents, ceiling tiles and surfaces',
      'Hot and cold spots across the space',
      'Persistent odors from the HVAC system',
      'Recent tenant build-out or renovation',
      'Rising energy costs without a change in usage',
    ],
    benefitsHeading: 'Why businesses choose Purix',
    benefits: [
      { title: 'Flexible scheduling', text: 'Early, late or off-day appointments to keep your business running.' },
      { title: 'Professional equipment', text: 'Commercial-grade negative air and agitation tools for larger systems.' },
      { title: 'Cleaner workplace', text: 'Less dust and fewer odors for staff and customers.' },
      { title: 'Multiple locations', text: 'Service across Southwest and South Florida from four local offices.' },
    ],
    sections: [
      {
        heading: 'Properties we serve',
        paragraphs: [
          'We clean ductwork and HVAC systems in offices, restaurants, retail stores, salons, medical and dental offices, gyms, warehouses, property-managed buildings, and short-term rentals. Whether you have a single suite or a multi-unit property, we’ll put together a plan that fits your space and schedule.',
        ],
        image: commercialDuct,
        imageAlt: 'Clean commercial air duct after professional cleaning',
      },
    ],
    faqs: [
      {
        q: 'Can you clean ducts outside of business hours?',
        a: 'Yes. We can schedule commercial air duct cleaning early in the morning, in the evening or on off days to minimize disruption.',
      },
      {
        q: 'How often should commercial air ducts be cleaned?',
        a: 'It depends on the type of business, occupancy and environment. Restaurants, gyms and high-traffic spaces generally need more frequent cleaning than standard offices.',
      },
      {
        q: 'Do you work with property managers?',
        a: 'Yes. We work with property managers and building owners on single units and multi-unit properties.',
      },
    ],
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};
