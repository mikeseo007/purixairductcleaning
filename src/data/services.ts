import type { ImageMetadata } from 'astro';
import ceilingVentHose from '../assets/images/ceiling-vent-hose.webp';
import serviceTrucks from '../assets/images/service-trucks.webp';
import ceilingInspection from '../assets/images/ceiling-inspection.webp';
import negativeAirLadder from '../assets/images/negative-air-ladder.webp';
import ductPlans from '../assets/images/duct-plans.webp';
import ductCamera from '../assets/images/duct-camera.webp';
import negativeAirHose from '../assets/images/negative-air-hose.webp';
import furnaceFilter from '../assets/images/furnace-filter.webp';
import hvacFilterService from '../assets/images/hvac-filter-service.webp';
import teamWithVan from '../assets/images/team-with-van.webp';
import dryerVentExterior from '../assets/images/dryer-vent-exterior.webp';
import vanDryerCrew from '../assets/images/van-dryer-crew.webp';
import brandedVan from '../assets/images/branded-van.webp';
import insulationRemoval from '../assets/images/insulation-removal.webp';
import insulationBlownIn from '../assets/images/insulation-blown-in.webp';
import insulationReplacement from '../assets/images/insulation-replacement.webp';
import hvacCoilCleaning from '../assets/images/hvac-coil-cleaning.webp';
import airHandlerCleaning from '../assets/images/air-handler-cleaning.webp';
import blowerCleaning from '../assets/images/blower-wheel-cleaning.webp';

export type GroupId = 'duct' | 'hvac' | 'dryer' | 'insulation';

export interface ServiceGroup {
  id: GroupId;
  name: string;
  intro: string;
  hub: string;
  image: ImageMetadata;
  imageAlt: string;
  secondary?: boolean;
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'duct',
    name: 'Air Duct & AC Ductwork Services',
    intro: 'Cleaning, inspection, sanitizing and replacement for the supply and return ducts that carry your conditioned air.',
    hub: '/ductwork-cleaning/',
    image: ceilingVentHose,
    imageAlt: 'Purix technician connecting a cleaning hose to a ceiling supply vent',
  },
  {
    id: 'hvac',
    name: 'HVAC & Mold Cleaning Services',
    intro: 'Cleaning for the components inside your AC system, including coils, air handlers and blower wheels, plus help with musty odors and suspected microbial buildup.',
    hub: '/hvac-cleaning/',
    image: furnaceFilter,
    imageAlt: 'Purix technician servicing a home air handler',
  },
  {
    id: 'dryer',
    name: 'Dryer Vent Services',
    intro: 'Lint removal, new vent installation and commercial dryer vent cleaning.',
    hub: '/dryer-vent-cleaning/',
    image: dryerVentExterior,
    imageAlt: 'Purix technician cleaning a dryer vent from the exterior wall',
    secondary: true,
  },
  {
    id: 'insulation',
    name: 'Attic Insulation Services',
    intro: 'Old insulation removal, blown-in insulation and full attic insulation replacement.',
    hub: '/insulation-replacement/',
    image: insulationBlownIn,
    imageAlt: 'Technician blowing new insulation between attic joists',
    secondary: true,
  },
];

export const primaryGroups = serviceGroups.filter((g) => !g.secondary);
export const secondaryGroups = serviceGroups.filter((g) => g.secondary);

export type IconName =
  | 'duct'
  | 'home'
  | 'building'
  | 'sanitize'
  | 'search'
  | 'wrench'
  | 'hvac'
  | 'droplet'
  | 'coil'
  | 'box'
  | 'fan'
  | 'dryer'
  | 'trash'
  | 'wind'
  | 'layers';

export interface Service {
  slug: string;
  path: string;
  name: string;
  group: GroupId;
  parent?: string;
  icon: IconName;
  card: string;
  image: ImageMetadata;
  imageAlt: string;
  secondImage: ImageMetadata;
  secondImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  introHeading: string;
  intro: string[];
  componentsHeading: string;
  components: { title: string; text: string }[];
  signsHeading: string;
  signs: string[];
  processHeading: string;
  process: { title: string; text: string }[];
  benefitsHeading: string;
  benefits: { title: string; text: string }[];
  note?: { heading: string; paragraphs: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
}

const a = (path: string, text: string) => `<a href="${path}">${text}</a>`;

export const services: Service[] = [
  // ───────────── Air Duct & AC Ductwork ─────────────
  {
    slug: 'ductwork-cleaning',
    path: '/ductwork-cleaning/',
    name: 'Ductwork Cleaning',
    group: 'duct',
    icon: 'duct',
    card: 'Cleaning for the supply and return duct runs, trunk lines and plenums that carry conditioned air through your property.',
    image: negativeAirHose,
    imageAlt: 'Purix technician running a negative-air hose up to a ceiling duct',
    secondImage: ceilingVentHose,
    secondImageAlt: 'Purix technician connecting a cleaning hose to a ceiling supply vent',
    metaTitle: 'Ductwork Cleaning Services in Miami, FL - Purix',
    metaDescription:
      'Ductwork cleaning in Miami by Purix: deep cleaning of supply and return duct runs, trunk lines and plenums under negative pressure. Book online today.',
    h1: 'Ductwork Cleaning Services',
    heroSubtitle:
      'Ductwork cleaning clears dust and debris from the supply and return duct runs, trunk lines and plenums that distribute cooled air through your property.',
    introHeading: 'What ductwork cleaning reaches inside your HVAC system',
    intro: [
      'Your ductwork is the network of supply and return runs, trunk lines and plenums hidden in your walls, ceilings and attic. Every time the AC runs it moves air through all of it, and over time dust, pet hair and debris settle along those runs and get pushed back into your rooms.',
      'Ductwork cleaning puts the system under negative pressure, loosens the buildup with rotary brushes and air whips, and pulls it out of the ducts so it leaves your property instead of landing on your floors.',
      `This page covers the duct runs themselves. For service planned around your property type, see ${a('/residential-air-duct-cleaning/', 'residential air duct cleaning')} and ${a('/commercial-air-duct-cleaning/', 'commercial air duct cleaning')}. If the problem is the equipment inside the AC, ${a('/hvac-cleaning/', 'HVAC cleaning')} covers the coil, air handler and blower.`,
    ],
    componentsHeading: 'The ductwork our cleaning service reaches',
    components: [
      { title: 'Supply duct runs', text: 'Every run that carries cooled air out to your rooms, from the plenum to each register.' },
      { title: 'Return ducts & plenums', text: 'The return side and the plenums that pull air back to the system and collect the heaviest buildup.' },
      { title: 'Trunk lines', text: 'The main sheet-metal trunks that feed the branch runs across your floor plan.' },
      { title: 'Flex duct runs', text: 'Flexible duct in attics, soffits and drop ceilings, cleaned carefully to protect the inner liner.' },
    ],
    signsHeading: 'Signs your ductwork may need professional cleaning',
    signs: [
      'Dust settles on furniture again soon after you clean',
      'Debris puffs out of the vents when the AC turns on',
      'Some rooms get noticeably weaker airflow than others',
      'A stale smell when the system starts up',
      'Visible dust or dark streaks around the supply registers',
      'You recently renovated, moved in, or have not had the ducts cleaned in 3–5 years',
    ],
    processHeading: 'Our negative-pressure ductwork cleaning process',
    process: [
      { title: 'Inspect', text: 'We check registers, returns and accessible ductwork and explain what we find before starting.' },
      { title: 'Protect & connect', text: 'Floors and work areas are covered, and our collection unit puts the duct system under negative pressure.' },
      { title: 'Agitate & extract', text: 'Each supply and return run is worked with brushes and air whips while loosened debris is pulled out.' },
      { title: 'Registers & grilles', text: 'Vent covers and return grilles are removed and cleaned before they go back on.' },
      { title: 'Walkthrough', text: 'We show you the results and point out anything that needs attention, such as damaged duct sections.' },
    ],
    benefitsHeading: 'What to expect after a full ductwork cleaning',
    benefits: [
      { title: 'Less recirculated dust', text: 'Clearing the buildup inside your duct runs means far less of it gets blown back into your rooms.' },
      { title: 'Clearer air paths', text: 'Debris that was restricting individual runs is removed, so airflow can reach every room again.' },
      { title: 'Fewer dust odors', text: 'Stale smells caused by dust and debris in the ductwork are often reduced once it is gone.' },
      { title: 'A clear duct picture', text: 'You learn the real condition of your ductwork, including any damaged or disconnected sections.' },
      { title: 'Whole-system service', text: 'Supply runs, returns, trunk lines and plenums are all cleaned in one organized visit.' },
      { title: 'Easier on filters', text: 'Cleaner ducts send less loose debris to your filters, so they keep doing their job for longer.' },
    ],
    note: {
      heading: 'How ductwork cleaning fits with our other services',
      paragraphs: [
        'Ductwork cleaning and air duct cleaning are two names for the same job: clearing dust and debris from the duct runs that distribute your conditioned air. It covers the ducts, not the equipment.',
        `If the coil, air handler or blower needs attention, that is ${a('/hvac-cleaning/', 'HVAC cleaning')}. For lingering odors after a cleaning, ${a('/air-duct-sanitizing/', 'air duct sanitizing')} adds an antimicrobial step, and for crushed or disconnected runs, start with an ${a('/air-duct-inspection/', 'air duct inspection')}.`,
      ],
    },
    faqs: [
      { q: 'Is ductwork cleaning the same as air duct cleaning?', a: 'Yes. Ductwork cleaning and air duct cleaning are two names for the same service: removing dust and debris from the supply and return duct runs, registers and plenums that carry your conditioned air.' },
      { q: 'How often should ductwork be cleaned?', a: 'Most homes benefit from duct cleaning every 3 to 5 years. Because AC systems in South Florida run nearly year-round, homes with pets, recent renovations or visible dust at the vents may need it sooner.' },
      { q: 'Does ductwork cleaning include the registers and grilles?', a: 'Yes. Vent covers and return grilles are removed and cleaned as part of the service, then reinstalled once the runs behind them are clean.' },
      { q: 'When should ductwork be cleaned, repaired, or replaced?', a: 'Cleaning handles dust and debris in intact ducts. Crushed, torn or disconnected runs are a repair or replacement job. If you are unsure, start with an air duct inspection.' },
      { q: 'Is ductwork cleaning available for residential and commercial properties?', a: 'Yes. We clean ductwork in houses, condos and townhomes as well as offices, retail and managed buildings, with the work planned around each property.' },
    ],
    related: ['residential-air-duct-cleaning', 'commercial-air-duct-cleaning', 'ac-vent-cleaning', 'air-duct-inspection', 'ac-duct-replacement'],
  },
  {
    slug: 'residential-air-duct-cleaning',
    path: '/residential-air-duct-cleaning/',
    name: 'Residential Air Duct Cleaning',
    group: 'duct',
    parent: 'ductwork-cleaning',
    icon: 'home',
    card: 'Duct cleaning planned around houses, condos and townhomes, with attic flex duct, closet air handlers and pets in mind.',
    image: ceilingVentHose,
    imageAlt: 'Purix technician connecting a cleaning hose to a ceiling supply vent',
    secondImage: ceilingInspection,
    secondImageAlt: 'Purix technician on a ladder at an open ceiling vent in a living room',
    metaTitle: 'Residential Air Duct Cleaning Services - Purix Air Duct',
    metaDescription:
      'Residential Air Duct Cleaning by Purix Air Duct & Dryer vent cleaning. In-home duct cleaning for Miami houses, condos and townhomes. Book online today.',
    h1: 'Residential Air Duct Cleaning Services',
    heroSubtitle: 'Careful residential air duct cleaning for single-family homes, condos and townhomes, done with your floors, furniture and pets in mind throughout.',
    introHeading: 'Residential air duct cleaning built around how you actually live',
    intro: [
      'Cleaning the ducts in a lived-in home is different from cleaning an empty building. There are pets to keep safe, floors and furniture to protect, and in many Miami condos, building rules about access, elevators and working hours.',
      'Our residential service adapts to the type of home you have. Single-family homes often have long flex duct runs in a hot attic. Condos and apartments usually have a closet air handler with short duct runs above the ceiling. Townhomes fall somewhere in between. We plan each visit around your layout.',
      `This page is for homeowners and renters. For an overview of how we clean ductwork, see our main ${a('/', 'air duct cleaning')} page.`,
    ],
    componentsHeading: 'What our residential air duct cleaning covers in your home',
    components: [
      { title: 'Supply runs & registers', text: 'Every supply run and register in the home, including the hard-to-reach high-ceiling vents.' },
      { title: 'Return & filter grille', text: 'The main return grille where pet hair and everyday household dust collect the fastest.' },
      { title: 'Attic flex duct', text: 'Flexible attic runs in single-family homes, cleaned with tools sized for delicate flex liner.' },
      { title: 'Condo ceiling ducts', text: 'Shorter duct runs tucked above the drop ceilings and soffits in condos and apartments.' },
      { title: 'Floor registers', text: 'Floor vents in older homes, which tend to collect debris and dust dropped from above.' },
    ],
    signsHeading: 'When homeowners usually book residential air duct cleaning',
    signs: [
      'Pet hair building up on return grilles',
      'Lingering dust after a remodel or flooring project',
      'You just bought or moved into a home and don’t know the duct history',
      'A household member is bothered by dust indoors',
      'A stale smell when the AC kicks on',
      'Uneven cooling between bedrooms',
    ],
    processHeading: 'How a home visit works',
    process: [
      { title: 'Walk the home', text: 'We go room by room with you to locate every supply and return and note any concerns.' },
      { title: 'Protect your space', text: 'Floors, furniture and work areas are covered, and pets are kept safely away from equipment.' },
      { title: 'Clean every run', text: 'Supplies and returns are cleaned under negative pressure, room by room.' },
      { title: 'Clean the vents', text: 'Registers and grilles are cleaned and reinstalled.' },
      { title: 'Final walkthrough', text: 'We show you the results and recommend a filter schedule that fits your household.' },
    ],
    benefitsHeading: 'What homeowners can expect once the ducts are clean',
    benefits: [
      { title: 'Less household dust', text: 'Clearing buildup from the ducts reduces how much dust gets blown back into your living areas.' },
      { title: 'Clean, respectful service', text: 'Covered floors, tidied work areas and no debris left behind anywhere in your home when we finish.' },
      { title: 'Pet-friendly scheduling', text: 'We plan the visit with you to keep pets calm, comfortable and safely away from the equipment.' },
      { title: 'Condo-ready', text: 'We coordinate with building management on access, parking and the work hours your building allows.' },
      { title: 'Whole-home service', text: 'We cover the supply and return runs throughout the entire house in a single, organized visit.' },
      { title: 'Tidy, protected work', text: 'We protect floors and furniture as we move, leaving each room as clean as we found it.' },
    ],
    faqs: [
      { q: 'Do I need to be home during the cleaning?', a: 'An adult should be home to let us in and do the walkthrough at the start and end. You don’t need to stay in the room while we work.' },
      { q: 'How do you protect my floors and furniture?', a: 'We cover floors and work areas, and the duct system stays under negative pressure so debris is pulled into our equipment instead of into your home.' },
      { q: 'Can you clean ducts in a condo or high-rise?', a: 'Yes. We regularly work in condos and coordinate with building management on elevator use, parking and allowed work hours.' },
      { q: 'Is duct cleaning safe with pets in the house?', a: 'Yes. We ask that pets be kept in a separate room while equipment is running so they stay calm and safe.' },
      { q: 'How long does it take to clean a typical home?', a: 'Most condos and average-size homes take a few hours. Larger homes with multiple AC systems take longer.' },
    ],
    related: ['ductwork-cleaning', 'air-duct-sanitizing', 'air-duct-inspection', 'hvac-cleaning', 'dryer-vent-cleaning'],
  },
  {
    slug: 'commercial-air-duct-cleaning',
    path: '/commercial-air-duct-cleaning/',
    name: 'Commercial Air Duct Cleaning',
    group: 'duct',
    parent: 'ductwork-cleaning',
    icon: 'building',
    card: 'Ductwork cleaning for offices, restaurants, retail and managed buildings, scheduled around your business hours.',
    image: negativeAirLadder,
    imageAlt: 'Purix technician on a ladder with a negative-air hose connected to a ceiling duct',
    secondImage: brandedVan,
    secondImageAlt: 'Purix Air Solution service van',
    metaTitle: 'Commercial Air Duct Cleaning Services - Purix Air Duct',
    metaDescription:
      'Commercial Air Duct Cleaning by Purix Air Duct & Dryer vent cleaning for Miami offices, retail and restaurants, after hours available. Book online today.',
    h1: 'Commercial Air Duct Cleaning Services',
    heroSubtitle: 'Commercial air duct cleaning for offices, restaurants, retail spaces and managed properties, scheduled around your hours to keep the business running.',
    introHeading: 'Commercial air duct cleaning built for larger, busier systems',
    intro: [
      'Commercial HVAC systems move far more air than residential systems, often for longer hours and with more people coming and going. Their ductwork is larger, includes long rectangular trunk lines and multiple zones, and is often connected to rooftop or packaged units.',
      'Purix cleans commercial ductwork with equipment sized for these systems, and we plan the work around your hours, whether that means early mornings, evenings or days you’re closed.',
      `For the commercial HVAC equipment itself, see ${a('/hvac-cleaning/', 'HVAC cleaning')}. If your property has laundry equipment, we also offer ${a('/commercial-dryer-vent-cleaning/', 'commercial dryer vent cleaning')}.`,
    ],
    componentsHeading: 'Commercial ductwork our air duct cleaning service covers',
    components: [
      { title: 'Rectangular trunk lines', text: 'Large sheet-metal mains that feed the branches and zones across your whole floor plan.' },
      { title: 'Diffusers & returns', text: 'Supply diffusers and return grilles set into drop ceilings and open-plan ceilings.' },
      { title: 'Exposed spiral duct', text: 'Round spiral duct common in restaurants, retail floors and open-plan office spaces.' },
      { title: 'Rooftop unit connections', text: 'Supply and return plenums that tie into your rooftop and packaged HVAC equipment.' },
      { title: 'Multi-zone systems', text: 'Larger floor plans served by several separate systems or independently controlled zones.' },
    ],
    signsHeading: 'Signs your building is due for commercial duct cleaning',
    signs: [
      'Staff or customers mention stale or stuffy air',
      'Dust on diffusers, ceiling tiles and surfaces near vents',
      'Hot and cold spots across the space',
      'Persistent odors when the system runs',
      'A recent tenant build-out or renovation',
      'No record of when the ducts were last cleaned',
    ],
    processHeading: 'How we handle commercial projects',
    process: [
      { title: 'Site walkthrough', text: 'We review the space, systems and access points, then provide a written quote.' },
      { title: 'Schedule around you', text: 'Work is planned for hours that keep disruption to a minimum.' },
      { title: 'Section-by-section cleaning', text: 'Ductwork is cleaned zone by zone under negative pressure, with work areas protected.' },
      { title: 'Diffusers & grilles', text: 'Diffusers and return grilles are cleaned and reinstalled.' },
      { title: 'Review with your team', text: 'We walk your manager through the results and any issues we found.' },
    ],
    benefitsHeading: 'Why local businesses rely on our commercial duct cleaning',
    benefits: [
      { title: 'Flexible scheduling', text: 'Early, late and off-day appointments keep your doors open while the duct cleaning gets done.' },
      { title: 'Built for big systems', text: 'Collection units and tools sized for the long commercial trunk lines in your building.' },
      { title: 'Cleaner-looking spaces', text: 'Less visible dust gathering on the diffusers, grilles and other surfaces near your vents.' },
      { title: 'Clear communication', text: 'A straightforward walkthrough of exactly what we cleaned and what we found on site.' },
      { title: 'Minimal disruption', text: 'Work is staged around your operating hours so your everyday business keeps right on moving.' },
      { title: 'Documented service', text: 'You get a clear written account of the areas we cleaned for your building and vendor records.' },
    ],
    faqs: [
      { q: 'Can you clean ducts outside business hours?', a: 'Yes. We can schedule work early in the morning, in the evening or on days you’re closed.' },
      { q: 'What types of businesses do you work with?', a: 'Offices, restaurants, retail stores, salons, medical and dental suites, gyms, warehouses and property-managed buildings.' },
      { q: 'How often should commercial ducts be cleaned?', a: 'It depends on occupancy and use. Restaurants, gyms and high-traffic spaces generally need cleaning more often than standard offices.' },
      { q: 'Do you work with property managers?', a: 'Yes. We work with property managers and owners on single suites and multi-unit buildings.' },
      {
        q: 'Will cleaning disrupt our daily operations?',
        a: 'We stage the work around your opening hours and clean zone by zone where needed, so most businesses keep running while we are on site.',
      },
    ],
    related: ['ductwork-cleaning', 'hvac-cleaning', 'air-duct-inspection', 'commercial-dryer-vent-cleaning'],
  },
  {
    slug: 'air-duct-sanitizing',
    path: '/air-duct-sanitizing/',
    name: 'Air Duct Sanitizing',
    group: 'duct',
    icon: 'sanitize',
    card: 'An antimicrobial treatment applied to duct surfaces after cleaning to help with lingering odors.',
    image: serviceTrucks,
    imageAlt: 'Purix technicians with service trucks at a South Florida home',
    secondImage: brandedVan,
    secondImageAlt: 'Purix Air Solution service van',
    metaTitle: 'Air Duct Sanitizing - Purix Air Duct & Dryer vent',
    metaDescription:
      'Air Duct Sanitizing in Miami by Purix Air Duct & Dryer vent cleaning. Antimicrobial duct treatment that cuts musty and stale odors. Book online today.',
    h1: 'Air Duct Sanitizing & Odor Treatment',
    heroSubtitle: 'Air duct sanitizing applies an antimicrobial treatment to your ductwork after cleaning, helping reduce lingering pet, smoke and musty odors at home.',
    introHeading: 'What air duct sanitizing is and when it helps',
    intro: [
      'Sometimes a home still has a smell after its ducts are cleaned, such as pet odor, old smoke, or the stale smell of a system that sat unused. Air duct sanitizing is an optional treatment that follows a full duct cleaning. We apply a professional antimicrobial product to the duct surfaces to help reduce odor-causing bacteria.',
      `Sanitizing is not a substitute for cleaning, because the product works on clean surfaces, not on top of dust. It also isn’t the same as cleaning the AC equipment. If the smell seems to come from the air handler, coil or drain pan, ${a('/hvac-mold-cleaning/', 'HVAC mold cleaning')} or ${a('/ac-coil-cleaning/', 'AC coil cleaning')} is the better fit.`,
    ],
    componentsHeading: 'Where we apply the air duct sanitizing treatment',
    components: [
      { title: 'Supply duct interiors', text: 'The supply runs that carry treated air out to each room throughout your home.' },
      { title: 'Return duct interiors', text: 'The return side, where odors from your living space get pulled back into the system.' },
      { title: 'Accessible plenums', text: 'The supply and return plenums connected to the air handler, wherever we can reach them.' },
      { title: 'Registers & grilles', text: 'Vent covers are cleaned and treated before they are reinstalled at each opening.' },
    ],
    signsHeading: 'When air duct sanitizing is worth considering for you',
    signs: [
      'Pet, smoke or cooking odors that linger after duct cleaning',
      'A stale smell from a home or unit that sat closed for months',
      'Moving into a home after previous owners with pets or smokers',
      'After a past water leak has been repaired and dried out',
      'You want an extra step after a deep duct cleaning',
    ],
    processHeading: 'How we sanitize your ductwork',
    process: [
      { title: 'Clean first', text: 'The duct system is fully cleaned so the treatment reaches clean surfaces.' },
      { title: 'Prepare the space', text: 'We explain the product and any time you should stay out of the treated area.' },
      { title: 'Apply through the system', text: 'The product is applied through the ductwork with fogging equipment, following the label directions.' },
      { title: 'Ventilate & review', text: 'The system is run to clear the space, and we review the results with you.' },
    ],
    benefitsHeading: 'What air duct sanitizing can and cannot do',
    benefits: [
      { title: 'Helps lingering odors', text: 'The treatment targets the odor-causing bacteria left on your duct surfaces after a thorough cleaning.' },
      { title: 'A fresher start', text: 'A useful step after move-ins, renovations or a system that has been sitting unused for a while.' },
      { title: 'Applied as directed', text: 'We use only professional-grade products, applied strictly according to their label directions and dwell times.' },
      { title: 'Paired with cleaning', text: 'Sanitizing is carried out in the same visit as your air duct cleaning service.' },
      { title: 'Reaches odor sources', text: 'The treatment coats the surfaces inside the ductwork where stale and pet odors tend to linger.' },
      { title: 'No separate trip', text: 'Sanitizing is applied right after the cleaning, so it never adds another appointment for you.' },
    ],
    faqs: [
      { q: 'Is sanitizing the same as duct cleaning?', a: 'No. Cleaning removes dust and debris. Sanitizing is an optional treatment applied after cleaning to help reduce odor-causing bacteria on duct surfaces.' },
      { q: 'Does air duct sanitizing remove mold?', a: 'Sanitizing isn’t mold removal. If you suspect microbial growth on AC components, see our HVAC mold cleaning service. Confirming whether mold is present requires testing by a qualified professional.' },
      { q: 'Is the product safe for kids and pets?', a: 'We use professional products according to label directions and will tell you how long to stay out of treated areas before we begin.' },
      { q: 'Will sanitizing permanently stop odors?', a: 'It helps with odors coming from the ductwork. If there’s an ongoing source, such as moisture or smoking indoors, odors can return.' },
      {
        q: 'Should sanitizing be done with duct cleaning or on its own?',
        a: 'It works best right after cleaning. Applied to dust-coated ducts it only treats the debris, so we pair sanitizing with a cleaning for lasting results.',
      },
    ],
    related: ['ductwork-cleaning', 'hvac-mold-cleaning', 'residential-air-duct-cleaning', 'ac-coil-cleaning'],
  },
  {
    slug: 'air-duct-inspection',
    path: '/air-duct-inspection/',
    name: 'Air Duct Inspection',
    group: 'duct',
    icon: 'search',
    card: 'A hands-on look at your ductwork and vents so you know whether you need cleaning, repair or replacement.',
    image: ductCamera,
    imageAlt: 'Camera view inside an air duct during a Purix inspection',
    secondImage: ceilingInspection,
    secondImageAlt: 'Purix technician inspecting an open ceiling vent from a ladder',
    metaTitle: 'Air Duct Inspection - Purix Air Duct & Dryer vent',
    metaDescription:
      'Air Duct Inspection in Miami by Purix Air Duct & Dryer vent cleaning. We check registers, returns and ductwork for buildup and damage. Book online today.',
    h1: 'Professional Air Duct Inspection Services',
    heroSubtitle: 'A thorough air duct inspection shows what is really happening inside your ductwork before you commit to cleaning, repair or full duct replacement.',
    introHeading: 'Know the real condition of your ducts before spending',
    intro: [
      'Not every airflow problem or dusty vent means you need the same fix. Some systems just need cleaning. Others have crushed, torn or disconnected duct runs that no amount of cleaning will solve. An inspection tells you which situation you’re in.',
      `We look at your registers, returns and the ductwork we can access, then explain what we found and what we’d recommend, whether that’s ${a('/', 'air duct cleaning')}, ${a('/ac-duct-replacement/', 'AC duct replacement')} or nothing at all.`,
    ],
    componentsHeading: 'What our air duct inspection checks and documents',
    components: [
      { title: 'Supply registers & returns', text: 'Buildup, airflow at each vent and the condition of the grilles and register boots.' },
      { title: 'Accessible duct runs', text: 'Attic, ceiling and soffit runs we can reach, checked for crushing, tears and sagging.' },
      { title: 'Connections & seals', text: 'Loose or disconnected joints that quietly leak cooled air into the attic or ceiling.' },
      { title: 'Insulation & condensation', text: 'Damaged duct insulation and any signs of sweating, staining or trapped moisture.' },
      { title: 'Air handler area', text: 'Visible buildup or moisture around the air handler cabinet and the return plenum.' },
    ],
    signsHeading: 'Good moments to schedule a professional air duct inspection',
    signs: [
      'One or more rooms get little or no airflow',
      'Water stains on the ceiling near a vent',
      'You’re buying or just bought a home',
      'After a renovation that touched walls or ceilings',
      'Before deciding between duct cleaning and duct replacement',
      'Recurring dust or odors you can’t explain',
    ],
    processHeading: 'How the inspection works',
    process: [
      { title: 'Talk through concerns', text: 'You tell us what you’ve noticed, such as dust, odors, hot rooms or noise.' },
      { title: 'Check every vent', text: 'We look at each supply and return and check airflow room by room.' },
      { title: 'Inspect accessible ductwork', text: 'We check the duct runs, connections and insulation we can safely reach.' },
      { title: 'Explain & recommend', text: 'You get a plain-language explanation of what we found and a quote for any work we recommend.' },
    ],
    benefitsHeading: 'How an air duct inspection saves money and guesswork',
    benefits: [
      { title: 'Right fix, first time', text: 'Avoid paying for cleaning when the real problem is damaged duct, or the other way around.' },
      { title: 'Clear priorities', text: 'You learn what genuinely needs attention now and what can safely wait until later.' },
      { title: 'Useful for buyers', text: 'Understand the true condition of the ductwork in a home you are thinking of buying.' },
      { title: 'No-pressure advice', text: 'We lay out your options clearly and then leave the decision entirely up to you.' },
      { title: 'Spend with confidence', text: 'You see the real condition of your ducts before committing to cleaning, repair or replacement.' },
      { title: 'Clear written findings', text: 'We share what we found in writing so you can plan the next step without any guesswork.' },
    ],
    faqs: [
      { q: 'What does an air duct inspection include?', a: 'We check supply registers, returns, accessible duct runs, connections and insulation, and look for visible buildup or moisture around the air handler.' },
      { q: 'Can you tell if I have mold during an inspection?', a: 'We can point out visible buildup, moisture and conditions where microbial growth is more likely, but mold can’t be confirmed by looking. Confirmation requires sampling and lab analysis by a qualified professional.' },
      { q: 'Do I need an inspection before duct cleaning?', a: 'We inspect as the first step of every cleaning. A stand-alone inspection is useful if you’re unsure what the problem is or are comparing cleaning against replacement.' },
      { q: 'Is an inspection useful when buying a home?', a: 'Yes. It helps you understand the condition of the ductwork and whether cleaning or repairs may be needed.' },
      {
        q: 'Will the inspection tell me if I need cleaning or replacement?',
        a: 'Yes. We check for buildup, damage and disconnected joints and explain whether a cleaning, a targeted repair or full replacement is the better next step.',
      },
    ],
    related: ['ductwork-cleaning', 'ac-duct-replacement', 'hvac-cleaning', 'hvac-mold-cleaning'],
  },
  {
    slug: 'ac-duct-replacement',
    path: '/ac-duct-replacement/',
    name: 'AC Duct Replacement',
    group: 'duct',
    icon: 'wrench',
    card: 'Replacement of crushed, torn, disconnected or deteriorated AC ductwork, from one damaged run to a full system.',
    image: ductPlans,
    imageAlt: 'Purix technician reviewing duct layout plans before replacement',
    secondImage: serviceTrucks,
    secondImageAlt: 'Purix technicians with service trucks at a South Florida home',
    metaTitle: 'AC Duct Replacement - Purix Air Duct & Dryer vent',
    metaDescription:
      'AC Duct Replacement in Miami by Purix Air Duct & Dryer vent cleaning for crushed, torn, disconnected, sweating or leaking ductwork. Request a quote online.',
    h1: 'AC Duct Replacement & Ductwork Repair',
    heroSubtitle: 'When ductwork is damaged beyond cleaning, our AC duct replacement swaps out the crushed or leaking sections that need it, or the whole system.',
    introHeading: 'When duct cleaning is not enough and replacement makes sense',
    intro: [
      'Ductwork doesn’t last forever. In South Florida attics and ceilings, flex duct can be crushed during other work, pulled loose from its connections, or have its insulation break down from heat and humidity. Damaged ducts can leak cooled air into the attic, sweat and drip onto ceilings, or leave rooms with little airflow.',
      `Purix replaces damaged AC ductwork, whether that’s one torn run or an entire system. If you’re not sure whether you need replacement or just ${a('/', 'cleaning')}, start with an ${a('/air-duct-inspection/', 'air duct inspection')}.`,
    ],
    componentsHeading: 'What our AC duct replacement service actually covers',
    components: [
      { title: 'Flex duct runs', text: 'Crushed, torn or deteriorated flexible duct running between the plenum and each room.' },
      { title: 'Connections & collars', text: 'Loose or failed connections at the plenum, the branch takeoffs and the register ends.' },
      { title: 'Register boots', text: 'The fittings where each duct run meets the ceiling, wall or floor register.' },
      { title: 'Duct insulation', text: 'Insulated duct where the outer jacket or insulation has broken down and started sweating.' },
      { title: 'Supports & straps', text: 'Proper strapping and support so the new runs do not sag or kink over time.' },
    ],
    signsHeading: 'Signs your AC ductwork may need full replacement',
    signs: [
      'Torn, crushed or collapsed duct visible in the attic or ceiling',
      'A room that gets almost no air, which can mean a disconnected run',
      'Water stains or dripping near ceiling vents from sweating ducts',
      'Duct insulation that is falling apart or missing',
      'Ductwork that was damaged by water or a roof leak',
      'An older duct system with repeated problems',
    ],
    processHeading: 'How duct replacement works',
    process: [
      { title: 'Inspect & measure', text: 'We inspect the existing ductwork and measure the runs that need replacing.' },
      { title: 'Written quote', text: 'You get a clear recommendation for partial or full replacement and a written quote.' },
      { title: 'Remove old duct', text: 'Damaged sections are removed and hauled away.' },
      { title: 'Install & seal', text: 'New duct is installed, connected, sealed and properly supported.' },
      { title: 'Test airflow', text: 'We check airflow at each register and walk you through the finished work.' },
    ],
    benefitsHeading: 'What new, properly sealed ductwork can do for you',
    benefits: [
      { title: 'Air reaches the rooms', text: 'Sealed, properly connected ducts deliver cooled air to your rooms instead of the attic.' },
      { title: 'Less sweating', text: 'Properly insulated duct cuts down on the condensation that leads to ceiling drips and stains.' },
      { title: 'Fewer weak rooms', text: 'Replacing crushed or disconnected runs restores proper airflow to the rooms that were starved.' },
      { title: 'A clean start', text: 'New ductwork begins completely clean, with none of the years of buildup inside the old runs.' },
      { title: 'Properly sealed joints', text: 'New connections are sealed so cooled air reaches your rooms instead of leaking into the attic.' },
      { title: 'Right-sized runs', text: 'Replacement ductwork is sized to match both your system and the rooms it actually serves.' },
    ],
    faqs: [
      { q: 'Should I repair or replace my ductwork?', a: 'If the damage is limited to one or two runs, replacing just those sections is often enough. If problems are widespread or the system is old and deteriorating, full replacement can make more sense. We’ll explain both options.' },
      { q: 'How long does duct replacement take?', a: 'Replacing a few runs can often be done in a day. Full-system replacement takes longer, depending on the size of the home and access to the ductwork.' },
      { q: 'Will new ducts lower my energy bill?', a: 'Sealed, properly connected ducts deliver more of your system’s air where it’s needed. Actual savings depend on your system, your home and how much leakage there was before.' },
      { q: 'Can you replace just one section?', a: 'Yes. We often replace individual crushed or disconnected runs without touching the rest of the system.' },
      {
        q: 'What makes ductwork a replacement job instead of a cleaning?',
        a: 'Crushed or torn flex duct, disconnected joints, ongoing sweating and heavy interior damage usually call for replacement rather than cleaning.',
      },
    ],
    related: ['ductwork-cleaning', 'air-duct-inspection', 'hvac-cleaning'],
  },
  {
    slug: 'ac-vent-cleaning',
    path: '/ac-vent-cleaning/',
    name: 'AC Vent Cleaning',
    group: 'duct',
    icon: 'wind',
    card: 'Cleaning for the visible AC supply and return registers, vent covers and grilles, and the accessible area behind each one.',
    image: ceilingInspection,
    imageAlt: 'Purix technician on a ladder at an open ceiling vent in a living room',
    secondImage: ceilingVentHose,
    secondImageAlt: 'Purix technician connecting a cleaning hose to a ceiling supply vent',
    metaTitle: 'AC Vent Cleaning Services in Miami, FL - Purix',
    metaDescription:
      'AC vent cleaning in Miami by Purix: supply and return registers, grilles and the duct boot behind each vent, cleaned and refitted. Get a free online quote.',
    h1: 'AC Vent Cleaning Services',
    heroSubtitle:
      'AC vent cleaning covers the supply and return registers, vent covers and grilles you can see, plus the accessible duct boot directly behind each one.',
    introHeading: 'What AC vent and register cleaning includes',
    intro: [
      'The AC vents you see on your ceilings and walls are the registers and grilles where conditioned air enters and leaves each room. They are the first place dust, pet hair and grit collect, and the buildup shows right at the opening.',
      'AC vent cleaning focuses on those visible registers and grilles and the accessible duct boot directly behind each one. We pull each cover, clean it, and vacuum the area behind it so the openings are clean and clear.',
      `This is the vents and their immediate surroundings, not the full duct runs. For the supply and return runs deeper in the system, see ${a('/ductwork-cleaning/', 'ductwork cleaning')}. These are air-conditioning vents, not the exhaust on your clothes dryer, which is ${a('/dryer-vent-cleaning/', 'dryer vent cleaning')}.`,
    ],
    componentsHeading: 'The AC vents and registers our service cleans',
    components: [
      { title: 'Supply registers', text: 'The vents that blow cooled air into each room, where dust shows first on the louvers.' },
      { title: 'Return grilles', text: 'The larger return grilles that pull air back to the system and collect the most buildup.' },
      { title: 'Vent covers & louvers', text: 'Each cover is removed and cleaned, then refitted once the opening behind it is clear.' },
      { title: 'Register boots', text: 'The accessible boot directly behind each register, where debris settles right at the opening.' },
    ],
    signsHeading: 'Signs your AC vents may need cleaning',
    signs: [
      'Visible dust or dark streaks on the registers and grilles',
      'Dust building up on the louvers of your supply vents',
      'Pet hair gathering on the return grille',
      'Debris around the vent openings after a renovation',
      'Vent covers that look grimy even after wiping them',
    ],
    processHeading: 'Our AC vent cleaning process',
    process: [
      { title: 'Inspect the vents', text: 'We look at each supply register and return grille and note where buildup has collected.' },
      { title: 'Remove the covers', text: 'Vent covers and return grilles are taken off so the openings can be reached.' },
      { title: 'Clean & vacuum', text: 'Covers are cleaned and the accessible boot directly behind each one is vacuumed out.' },
      { title: 'Refit & check', text: 'Each cover is refitted, and we point out anything that suggests a deeper duct issue.' },
    ],
    benefitsHeading: 'What AC vent cleaning can and cannot do',
    benefits: [
      { title: 'Cleaner-looking vents', text: 'Dust and grime are cleared from the registers and grilles you actually see in each room.' },
      { title: 'Less grit at the opening', text: 'Clearing the boot behind each cover removes the debris that collects right at the vent.' },
      { title: 'Covers cleaned & refitted', text: 'Each vent cover is removed, cleaned and put back, not just wiped over in place.' },
      { title: 'A look behind the vents', text: 'Pulling the covers lets us spot signs that the duct runs themselves may need attention.' },
      { title: 'Honest about limits', text: 'If the buildup is deeper in the ducts, we tell you, instead of treating vent cleaning as a full duct cleaning.' },
      { title: 'A tidy finish', text: 'Work areas are protected and the covers go back clean, with no debris left behind.' },
    ],
    note: {
      heading: 'When the vents are not the whole story',
      paragraphs: [
        'AC vent cleaning works on the registers, grilles and the area right behind them. It freshens what you see and improves how the vents look, but it does not clean the full length of the duct runs.',
        `If airflow is weak across whole rooms, or dust keeps returning quickly, the buildup is usually deeper in the system. In that case ${a('/ductwork-cleaning/', 'ductwork cleaning')} or an ${a('/air-duct-inspection/', 'air duct inspection')} is the better next step, and equipment problems belong to ${a('/hvac-cleaning/', 'HVAC cleaning')}.`,
      ],
    },
    faqs: [
      { q: 'Are AC vents the same as clothes dryer vents?', a: 'No. AC vents are the registers and grilles that circulate conditioned air through your rooms. A dryer vent is a separate exhaust duct that carries lint and hot air from your clothes dryer outside. We clean those under dryer vent cleaning.' },
      { q: 'Is AC vent cleaning the same as full ductwork cleaning?', a: 'No. AC vent cleaning covers the visible registers, grilles and the area directly behind them. Ductwork cleaning covers the full supply and return runs deeper in the system.' },
      { q: 'Does AC vent cleaning include removing and cleaning vent covers?', a: 'Yes. We remove each vent cover and return grille, clean it, vacuum the accessible boot behind it, and refit the cover once the opening is clear.' },
      { q: 'How often should AC vents be cleaned?', a: 'Clean the visible registers and grilles whenever they look dusty. A full duct cleaning on a 3 to 5 year cycle is what addresses buildup deeper in the system.' },
      { q: 'Can vent cleaning resolve weak airflow?', a: 'Sometimes, if the restriction is right at the register. When whole rooms have weak airflow, the cause is usually deeper in the ducts or in the equipment, so we would recommend an air duct inspection.' },
    ],
    related: ['ductwork-cleaning', 'hvac-cleaning', 'dryer-vent-cleaning', 'residential-air-duct-cleaning', 'air-duct-inspection'],
  },

  // ───────────── HVAC & Mold Cleaning ─────────────
  {
    slug: 'hvac-cleaning',
    path: '/hvac-cleaning/',
    name: 'HVAC Cleaning',
    group: 'hvac',
    icon: 'hvac',
    card: 'Cleaning for the equipment side of your AC: the coil, air handler, blower, drain pan and plenums.',
    image: furnaceFilter,
    imageAlt: 'Purix technician replacing an air filter at a home furnace',
    secondImage: hvacFilterService,
    secondImageAlt: 'Purix technician installing a clean air filter during an HVAC service',
    metaTitle: 'HVAC Cleaning Services - Purix Air Duct & Dryer vent',
    metaDescription:
      'Air conditioning cleaning in Miami by Purix. HVAC cleaning of the coil, air handler, blower and drain pan to restore AC airflow. Schedule service online.',
    h1: 'Professional HVAC Cleaning Services',
    heroSubtitle: 'HVAC cleaning targets the equipment inside your AC system, the parts that move, cool and dehumidify the air circulating through your home.',
    introHeading: 'Your AC equipment collects hidden buildup over time too',
    intro: [
      'Ductwork gets most of the attention, but the equipment at the center of your system also collects dust and debris. In Miami’s climate, the evaporator coil and drain pan are wet for much of the year. Dust that reaches them sticks, builds up, and can restrict airflow or contribute to musty odors.',
      `HVAC cleaning focuses on that equipment rather than the ducts. It covers the coil, blower, air handler cabinet, drain pan and plenums. We often pair it with ${a('/', 'air duct cleaning')} so the whole air path is clean. Each component also has its own page: ${a('/ac-coil-cleaning/', 'AC coil cleaning')}, ${a('/air-handler-cleaning/', 'air handler cleaning')} and ${a('/blower-wheel-cleaning/', 'blower wheel cleaning')}.`,
    ],
    componentsHeading: 'The core components our HVAC cleaning service reaches',
    components: [
      { title: 'Evaporator coil', text: 'The indoor coil that cools and dehumidifies the air moving through your AC system.' },
      { title: 'Blower wheel & housing', text: 'The fan and housing that push conditioned air out through all of your ductwork.' },
      { title: 'Air handler cabinet', text: 'The interior surfaces, access panels and filter rack inside the air handler cabinet.' },
      { title: 'Drain pan & line', text: 'Where moisture from the coil collects and drains safely away from the system.' },
      { title: 'Supply & return plenums', text: 'The boxes that connect your air handler to the supply and return ductwork.' },
    ],
    signsHeading: 'Signs your HVAC system is overdue for cleaning',
    signs: [
      'Weak airflow even with a clean filter',
      'The AC runs longer than it used to',
      'A musty smell from the air handler closet or vents',
      'Visible dust on the blower or coil when the panel is open',
      'Water around the air handler or a slow-draining condensate line',
      'The equipment hasn’t been cleaned in years',
    ],
    processHeading: 'Our HVAC cleaning process',
    process: [
      { title: 'Shut down & inspect', text: 'Power is turned off and we open the air handler to inspect each component.' },
      { title: 'Clean the components', text: 'Coil, blower, cabinet and plenums are cleaned using methods suited to each part.' },
      { title: 'Clear the drain', text: 'The drain pan is cleaned and condensate drainage is checked.' },
      { title: 'Reassemble & test', text: 'Panels are sealed, power restored, and the system is run to confirm operation.' },
      { title: 'Walkthrough', text: 'We show you the results and note anything for your HVAC service company to review.' },
    ],
    benefitsHeading: 'What clean HVAC equipment does for comfort and airflow',
    benefits: [
      { title: 'Less airflow restriction', text: 'A clean coil and blower move air through the system with noticeably less resistance.' },
      { title: 'Less strain on gear', text: 'Equipment that is not fighting through buildup simply does not have to work as hard.' },
      { title: 'Fewer musty odors', text: 'Removing buildup from the wet components can reduce the musty smells coming from vents.' },
      { title: 'A full-system clean', text: 'Paired with a duct cleaning, the entire air path through your system gets cleaned at once.' },
      { title: 'Cleaner air at source', text: 'Clearing the equipment reduces the dust that would otherwise get pushed back out your vents.' },
      { title: 'Problems caught early', text: 'Opening up the system lets us flag small issues before they grow into bigger, costly ones.' },
    ],
    note: {
      heading: 'Air conditioning cleaning: what it means',
      paragraphs: [
        'When people search for air conditioning cleaning or AC cleaning, they usually mean cleaning the equipment inside the system, not the ducts. That is exactly what HVAC cleaning covers here.',
        `Air conditioning cleaning focuses on the parts the air passes through: the ${a('/ac-coil-cleaning/', 'evaporator coil')}, the ${a('/air-handler-cleaning/', 'air handler')}, the blower wheel and the drain pan. It is different from cleaning the duct runs, and different again from dryer vent work.`,
      ],
    },
    faqs: [
      { q: 'What’s the difference between HVAC cleaning and air duct cleaning?', a: 'HVAC cleaning focuses on the equipment, such as the coil, blower, air handler and drain pan. Air duct cleaning focuses on the ductwork and vents. They’re often done together.' },
      { q: 'Does HVAC cleaning replace regular AC maintenance?', a: 'No. HVAC cleaning focuses on removing buildup. Refrigerant, electrical and mechanical service should still be handled by your HVAC service company.' },
      { q: 'How often should my AC system be cleaned?', a: 'Many systems benefit from equipment cleaning every few years, and more often if you notice odors, weak airflow or visible buildup.' },
      { q: 'Do you clean commercial HVAC systems?', a: 'Yes. We clean air handlers and related components for offices, restaurants and other commercial properties.' },
      {
        q: 'Which parts of my system does HVAC cleaning cover?',
        a: 'It focuses on the equipment inside your AC system where the air passes through, rather than the duct runs that carry air out to your rooms.',
      },
      { q: 'Is air conditioning cleaning the same as HVAC cleaning?', a: 'Yes. Air conditioning cleaning and AC cleaning are everyday terms for HVAC cleaning: cleaning the coil, air handler, blower and drain pan inside your AC system.' },
    ],
    related: ['ac-coil-cleaning', 'air-handler-cleaning', 'blower-wheel-cleaning', 'hvac-mold-cleaning'],
  },
  {
    slug: 'hvac-mold-cleaning',
    path: '/hvac-mold-cleaning/',
    name: 'HVAC Mold Cleaning',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'droplet',
    card: 'Cleaning of AC components and accessible ductwork with suspected microbial buildup, plus help finding the moisture behind it.',
    image: hvacCoilCleaning,
    imageAlt: 'Technician cleaning an evaporator coil where buildup collects',
    secondImage: serviceTrucks,
    secondImageAlt: 'Purix technicians with service trucks at a South Florida home',
    metaTitle: 'HVAC Mold Cleaning - Purix Air Duct & Dryer vent',
    metaDescription:
      'HVAC Mold Cleaning in Miami by Purix Air Duct & Dryer vent cleaning for musty AC odors and suspected mold on cooling components. Book online today.',
    h1: 'HVAC Mold Cleaning & Odor Removal',
    heroSubtitle: 'Musty smell from your AC? Our HVAC mold cleaning treats the components and accessible ductwork where moisture and microbial buildup tend to collect.',
    introHeading: 'Why AC systems in humid Florida homes turn musty',
    intro: [
      'Your air conditioner cools air by passing it over a cold coil, and in Miami’s humidity that coil is wet much of the time. Water drips into the drain pan, and the air handler cabinet stays damp. When dust and organic debris settle on those wet surfaces, they can support microbial growth. That’s one of the most common causes of the musty smell people notice when the AC turns on.',
      'Our HVAC mold cleaning service targets those areas: the evaporator coil, drain pan, blower, air handler cabinet, plenums and accessible ductwork where buildup is present. We clean the affected surfaces, apply an antimicrobial product where appropriate, and point out moisture problems we see so they can be corrected.',
      `For general system cleaning without odor or microbial concerns, see ${a('/hvac-cleaning/', 'HVAC cleaning')}. For odors in the ductwork only, ${a('/air-duct-sanitizing/', 'air duct sanitizing')} may be enough.`,
    ],
    componentsHeading: 'The areas our HVAC mold cleaning service treats',
    components: [
      { title: 'Evaporator coil', text: 'The cool, wet coil surface where moisture-related buildup most often starts first.' },
      { title: 'Drain pan & line', text: 'Standing water and sludge in the pan, plus a slow or clogged condensate drain.' },
      { title: 'Blower wheel & housing', text: 'Buildup carried from the coil area onto the fan blades and the surrounding housing.' },
      { title: 'Air handler cabinet', text: 'The interior panels and surfaces inside the air handler cabinet where buildup settles.' },
      { title: 'Plenums & ductwork', text: 'The plenums and the duct sections closest to the equipment, wherever reachable.' },
    ],
    signsHeading: 'Musty AC signs that are worth having professionally checked',
    signs: [
      'A musty or mildew-like smell when the AC starts',
      'Dark buildup on supply registers or around vents, which could be dust or something else',
      'Water standing in the drain pan or overflowing',
      'Condensation or sweating on the air handler or nearby ducts',
      'The AC was off for a long stretch, such as summer travel or after a storm',
      'Indoor humidity that stays high even with the AC running',
    ],
    processHeading: 'How our HVAC mold cleaning works',
    process: [
      { title: 'Discuss & inspect', text: 'We talk through your concerns and inspect the accessible components and ductwork.' },
      { title: 'Protect the area', text: 'The work area around the air handler is protected before cleaning begins.' },
      { title: 'Clean affected components', text: 'Coil, drain pan, blower, cabinet and plenums are cleaned as needed.' },
      { title: 'Antimicrobial application', text: 'Where appropriate, a professional antimicrobial product is applied according to label directions.' },
      { title: 'Moisture notes', text: 'We point out moisture sources we see, such as a clogged drain or sweating duct, so they can be fixed.' },
    ],
    benefitsHeading: 'What HVAC mold cleaning can and cannot realistically do',
    benefits: [
      { title: 'Removes visible buildup', text: 'Buildup is cleaned from the AC components and the accessible ductwork that we work on.' },
      { title: 'Can reduce odors', text: 'When the smell is coming from buildup in the HVAC system, a thorough cleaning often helps.' },
      { title: 'Finds moisture sources', text: 'We point out the moisture problems that must be fixed to keep buildup from returning.' },
      { title: 'Honest about limits', text: 'We do not test for mold, and cleaning cannot guarantee that all growth is gone for good.' },
      { title: 'Cleaner cooling surfaces', text: 'We clear the buildup from the components where moisture and growth most tend to collect.' },
      { title: 'Honest next steps', text: 'If a moisture source needs attention, we point it out plainly instead of overselling you.' },
    ],
    note: {
      heading: 'Important to know',
      paragraphs: [
        'Not every dirty duct or vent contains mold. Most buildup is ordinary dust and debris. Mold also can’t be identified just by looking; confirming it requires sampling and lab analysis by a qualified professional. Purix does not provide mold testing.',
        'This service covers cleaning of HVAC components and accessible ductwork. If you suspect growth on walls, ceilings, insulation or other building materials, or if growth is widespread, we recommend contacting a qualified mold professional.',
      ],
    },
    faqs: [
      { q: 'Do you test for mold?', a: 'No. We clean HVAC components and accessible ductwork. If you want to confirm whether mold is present, or identify what kind, that requires testing by a qualified professional.' },
      { q: 'Can you tell if it’s mold just by looking?', a: 'No. Dark buildup can be dust, debris or microbial growth, and it can’t be confirmed visually. We describe what we see and clean the affected components.' },
      { q: 'Will cleaning get rid of the musty smell?', a: 'If the smell comes from buildup on the coil, drain pan, blower or nearby ductwork, cleaning often helps. If an underlying moisture problem isn’t fixed, the smell can return.' },
      { q: 'Does every dirty AC duct have mold?', a: 'No. Most duct buildup is ordinary dust, lint and debris. Microbial growth is more likely where there’s ongoing moisture, which is why we focus on the wet components of the system.' },
      { q: 'How can I keep it from coming back?', a: 'Keep the condensate drain flowing, replace filters on schedule, avoid shutting the AC off for long periods in humid weather, and have sweating or leaking ductwork repaired.' },
    ],
    related: ['hvac-cleaning', 'ac-coil-cleaning', 'air-handler-cleaning', 'air-duct-sanitizing', 'air-duct-inspection'],
  },
  {
    slug: 'ac-coil-cleaning',
    path: '/ac-coil-cleaning/',
    name: 'AC Coil Cleaning',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'coil',
    card: 'Evaporator coil cleaning to clear the dust mat that restricts airflow, plus the drain pan underneath.',
    image: hvacCoilCleaning,
    imageAlt: 'Technician brushing an evaporator coil inside an open air handler',
    secondImage: brandedVan,
    secondImageAlt: 'Purix Air Solution service van',
    metaTitle: 'AC Coil Cleaning Services - Purix Air Duct & Dryer vent',
    metaDescription:
      'AC Coil Cleaning in Miami by Purix Air Duct & Dryer vent cleaning. Evaporator coil and drain pan cleaning to restore cooling airflow. Book online today.',
    h1: 'Evaporator AC Coil Cleaning Services',
    heroSubtitle: 'AC coil cleaning clears the dust and grime packed onto your indoor evaporator coil, the buildup that quietly restricts airflow and cooling.',
    introHeading: 'Why your evaporator coil gets dirty and restricts airflow',
    intro: [
      'The evaporator coil sits inside your air handler, and every bit of air your AC moves passes through its thin metal fins. Because the coil is cold and wet while the system runs, dust that gets past the filter sticks to it. Over time it can form a mat across the coil face.',
      `A dirty coil restricts airflow and makes it harder for the system to remove heat and humidity. Coil cleaning is one part of a full ${a('/hvac-cleaning/', 'HVAC cleaning')}, and it’s often done together with ${a('/blower-wheel-cleaning/', 'blower wheel cleaning')}, since both affect how much air reaches your rooms.`,
    ],
    componentsHeading: 'What a thorough AC coil cleaning service includes',
    components: [
      { title: 'Coil face & fins', text: 'Dust and debris are cleared from the coil surface and from between the delicate fins.' },
      { title: 'Coil drain pan', text: 'The pan beneath the coil is cleaned of sludge and any standing water.' },
      { title: 'Condensate drain', text: 'We confirm that water drains freely from the pan through the condensate line.' },
      { title: 'Coil cabinet area', text: 'The surrounding surfaces inside the coil compartment are cleaned down as well.' },
    ],
    signsHeading: 'Signs of a dirty evaporator coil to watch',
    signs: [
      'Weak airflow from every vent, not just one room',
      'The AC runs a long time without reaching the set temperature',
      'Ice on the coil or refrigerant lines (also worth having your HVAC company check)',
      'A musty smell from the air handler',
      'Water overflowing from the drain pan',
      'Visible dust matting on the coil face',
    ],
    processHeading: 'How we clean AC coils',
    process: [
      { title: 'Power down & access', text: 'The system is shut off and the coil compartment is opened.' },
      { title: 'Inspect', text: 'We check the coil face, fins and drain pan and show you what we find.' },
      { title: 'Clean the coil', text: 'Coil cleaner made for HVAC coils is applied and buildup is lifted and rinsed, without bending the fins.' },
      { title: 'Clean the pan & check drainage', text: 'The drain pan is cleaned and condensate flow is checked.' },
      { title: 'Reassemble & verify', text: 'Panels are sealed and the system is run to confirm normal operation.' },
    ],
    benefitsHeading: 'What a clean AC coil does for your cooling',
    benefits: [
      { title: 'Less airflow restriction', text: 'Air passes through the evaporator coil far more freely once the buildup is removed.' },
      { title: 'Better heat transfer', text: 'A clean coil surface exchanges heat much more effectively than a dusty, matted one.' },
      { title: 'Cleaner drain pan', text: 'Less sludge and standing water are left sitting in the pan directly under the coil.' },
      { title: 'Fewer musty odors', text: 'Removing the buildup from the cool, wet coil surface can noticeably reduce musty smells.' },
      { title: 'Quieter cooling', text: 'A clean coil lets the system cool your home without working as hard to pull air through.' },
      { title: 'Supports drainage', text: 'Clearing the coil and pan helps condensate drain away the way it is actually meant to.' },
    ],
    faqs: [
      { q: 'What’s the difference between the evaporator coil and the condenser coil?', a: 'The evaporator coil is indoors, inside the air handler, and cools the air. The condenser coil is in the outdoor unit and releases heat outside. This service covers the indoor evaporator coil.' },
      { q: 'Can a dirty coil cause my AC to freeze?', a: 'A heavily restricted coil can contribute to freezing, but so can refrigerant and other mechanical problems. If your system is icing, have your HVAC service company check it as well.' },
      { q: 'How often should the evaporator coil be cleaned?', a: 'It depends on filter maintenance, run time and household dust. Many systems benefit from a coil cleaning every few years, or whenever buildup is visible.' },
      { q: 'Can I clean the coil myself?', a: 'Coil fins are thin and bend easily, and the coil sits close to electrical parts. Professional cleaning reduces the risk of damage.' },
      {
        q: 'Can a dirty coil make my home feel humid?',
        a: 'It can. A coil fighting through buildup removes less moisture from the air, so rooms can feel damp even while the AC is running.',
      },
    ],
    related: ['hvac-cleaning', 'blower-wheel-cleaning', 'air-handler-cleaning', 'hvac-mold-cleaning'],
  },
  {
    slug: 'air-handler-cleaning',
    path: '/air-handler-cleaning/',
    name: 'Air Handler Cleaning',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'box',
    card: 'Cleaning of the indoor AC cabinet, including panels, filter rack and plenum connections, often found in Miami condo closets.',
    image: airHandlerCleaning,
    imageAlt: 'Technician cleaning the inside of an open air handler',
    secondImage: brandedVan,
    secondImageAlt: 'Purix Air Solution service van',
    metaTitle: 'Air Handler Cleaning - Purix Air Duct & Dryer vent',
    metaDescription:
      'Air Handler Cleaning in Miami by Purix Air Duct & Dryer vent cleaning. Cabinet, filter rack and return plenum cleaning for airflow. Book online today.',
    h1: 'Professional Air Handler Cleaning Services',
    heroSubtitle: 'Air handler cleaning services the indoor AC cabinet at the center of your system, whether it sits in a condo closet, garage or attic.',
    introHeading: 'The box every bit of your air passes through',
    intro: [
      'The air handler is the indoor cabinet that houses your evaporator coil and blower and connects to the supply and return ductwork. In many Miami condos and apartments, it sits in a closet right next to living space. In houses, it may be in a garage, utility room or attic.',
      `Over time, the inside of the cabinet collects dust, and the area around the filter rack and return plenum can get especially dirty. Air handler cleaning focuses on the cabinet itself. The components inside it have their own services: ${a('/ac-coil-cleaning/', 'AC coil cleaning')} and ${a('/blower-wheel-cleaning/', 'blower wheel cleaning')}. All of them are included in a full ${a('/hvac-cleaning/', 'HVAC cleaning')}.`,
    ],
    componentsHeading: 'Parts of the air handler our cleaning service covers',
    components: [
      { title: 'Cabinet interior', text: 'The interior panels and surfaces inside the cabinet where dust settles over time.' },
      { title: 'Filter rack', text: 'The slot or grille where the filter sits, plus the area immediately around it.' },
      { title: 'Return plenum', text: 'Where return air first enters the cabinet, which is usually the dirtiest section.' },
      { title: 'Supply plenum', text: 'Where conditioned air leaves the cabinet and heads out into your ductwork.' },
      { title: 'Access panels & seals', text: 'Panels are cleaned and reinstalled so they seat and close properly afterward.' },
    ],
    signsHeading: 'Signs your air handler is due for cleaning',
    signs: [
      'Dust and debris visible when you open the cabinet or change the filter',
      'An odor coming from the AC closet',
      'Water stains on the floor or walls around the unit',
      'Gaps around the filter that let dust bypass it',
      'The unit has never been cleaned since installation',
    ],
    processHeading: 'How we clean your air handler',
    process: [
      { title: 'Power off & open', text: 'The system is shut off and access panels are removed.' },
      { title: 'Vacuum & wipe', text: 'Cabinet surfaces are vacuumed and wiped clean.' },
      { title: 'Filter rack & plenums', text: 'The filter area and return and supply plenum connections are cleaned.' },
      { title: 'Coil & blower as needed', text: 'If the coil or blower needs attention, we’ll recommend those services.' },
      { title: 'Close up & test', text: 'Panels are reinstalled and the system is run to confirm operation.' },
    ],
    benefitsHeading: 'Why air handler cleaning is worth doing regularly',
    benefits: [
      { title: 'A cleaner core', text: 'The cabinet that every bit of your air passes through is left free of settled buildup.' },
      { title: 'Better filter fit', text: 'A clean filter rack helps the filter seat properly instead of letting air slip past.' },
      { title: 'Fewer closet odors', text: 'Removing dust and buildup from the cabinet can reduce smells coming from the AC closet.' },
      { title: 'Condo-friendly', text: 'Compact closet units are cleaned with real care for the living space right around them.' },
      { title: 'Cleaner air delivery', text: 'A clean cabinet means far less dust riding along with the air into your rooms.' },
      { title: 'Simpler future service', text: 'A tidy air handler makes future filter changes and routine maintenance much easier to do.' },
    ],
    faqs: [
      { q: 'What is an air handler?', a: 'It’s the indoor part of a central AC system. The cabinet houses the evaporator coil and blower and connects to your ductwork.' },
      { q: 'Is air handler cleaning the same as HVAC cleaning?', a: 'Air handler cleaning is one part of HVAC cleaning. A full HVAC cleaning also includes the coil, blower wheel and drain pan.' },
      { q: 'Can you clean air handlers in condo closets?', a: 'Yes. Closet air handlers are very common in Miami condos, and we protect the surrounding area while we work.' },
      { q: 'Should I clean the ducts at the same time?', a: 'Often, yes. If the air handler is dirty, the return and supply ducts connected to it usually are too.' },
      {
        q: 'How do I know if my air handler needs cleaning?',
        a: 'Dust around the cabinet, a musty smell when the system starts and filters that clog quickly are all common signs the air handler needs attention.',
      },
    ],
    related: ['hvac-cleaning', 'ac-coil-cleaning', 'blower-wheel-cleaning'],
  },
  {
    slug: 'blower-wheel-cleaning',
    path: '/blower-wheel-cleaning/',
    name: 'Blower Wheel Cleaning',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'fan',
    card: 'Removing packed-in buildup from the curved fan blades that move all of your system’s air.',
    image: blowerCleaning,
    imageAlt: 'Technician brushing dust off a blower wheel',
    secondImage: serviceTrucks,
    secondImageAlt: 'Purix technicians with service trucks at a South Florida home',
    metaTitle: 'Blower Wheel Cleaning - Purix Air Duct & Dryer vent',
    metaDescription:
      'Blower Wheel Cleaning in Miami by Purix Air Duct & Dryer vent cleaning. We clear caked-on buildup from the blower wheel and housing. Book online today.',
    h1: 'Blower Wheel Cleaning for Better Airflow',
    heroSubtitle: 'Blower wheel cleaning clears the caked-on buildup packed into the fan that pushes every bit of cooled air through your AC system.',
    introHeading: 'Small fan blades with a big impact on airflow',
    intro: [
      'The blower wheel, sometimes called a squirrel cage, is the fan inside your air handler. Its rows of small curved blades push air across the coil and into your ductwork. When dust gets past the filter, it packs into the curve of each blade. In humid conditions, that buildup can become sticky and dense.',
      `A loaded blower wheel moves less air, and uneven buildup can make it run less smoothly. Blower cleaning is part of a full ${a('/hvac-cleaning/', 'HVAC cleaning')} and pairs naturally with ${a('/ac-coil-cleaning/', 'AC coil cleaning')}, since both affect how much air your system can move.`,
    ],
    componentsHeading: 'What a complete blower wheel cleaning service includes',
    components: [
      { title: 'Blower wheel blades', text: 'Packed buildup is carefully removed from each curved blade on the blower wheel.' },
      { title: 'Blower housing', text: 'The scroll-shaped housing wrapped around the blower wheel is cleaned out too.' },
      { title: 'Motor exterior', text: 'Dust is cleared from the outside of the blower motor and its mounts.' },
      { title: 'Blower compartment', text: 'The surrounding surfaces inside the blower section are wiped down as well.' },
    ],
    signsHeading: 'Signs your blower wheel needs a thorough cleaning',
    signs: [
      'Weaker airflow at every vent',
      'New humming, rattling or vibration from the air handler',
      'Visible gray or dark buildup on the fan blades',
      'A musty smell when the fan starts',
      'A dirty coil, since the blower usually needs attention too',
    ],
    processHeading: 'How we clean blower wheels',
    process: [
      { title: 'Power off & access', text: 'The system is shut down and the blower compartment is opened.' },
      { title: 'Remove when accessible', text: 'Where the design allows, the blower assembly is removed for a thorough cleaning.' },
      { title: 'Clean wheel & housing', text: 'Buildup is cleaned from the blades and housing.' },
      { title: 'Reinstall & check', text: 'The assembly is reinstalled and checked for smooth, balanced operation.' },
      { title: 'Test airflow', text: 'The system is run and airflow is checked at the vents.' },
    ],
    benefitsHeading: 'What a clean blower wheel does for airflow',
    benefits: [
      { title: 'More air movement', text: 'Clean, unobstructed blades move far more air through the system than packed, caked ones.' },
      { title: 'Smoother operation', text: 'Removing the uneven buildup from the wheel can noticeably reduce vibration and running noise.' },
      { title: 'Less buildup downstream', text: 'With the wheel clean, far less loosened debris gets blown into your supply ductwork.' },
      { title: 'Pairs with coil work', text: 'Cleaning the wheel and coil together restores the main path air takes through the unit.' },
      { title: 'Restored air capacity', text: 'Clearing the blades lets the fan move the full volume of air it was built to move.' },
      { title: 'Less dust in vents', text: 'A clean blower wheel sends much less loosened debris on into your ducts and vents.' },
    ],
    faqs: [
      { q: 'What is a blower wheel?', a: 'It’s the cylindrical fan inside your air handler with rows of small curved blades. It moves air across the coil and into the ductwork.' },
      { q: 'Does the blower have to be removed to clean it?', a: 'For a thorough cleaning, removal is best when the unit’s design allows. We’ll let you know what’s possible with your system.' },
      { q: 'Can a dirty blower wheel cause noise?', a: 'Uneven buildup can throw the wheel out of balance and cause vibration. Noise can also come from motor or mechanical issues, which your HVAC service company should check.' },
      { q: 'Do you repair blower motors?', a: 'We clean the blower assembly. Motor diagnosis and replacement should be handled by your HVAC service company.' },
      {
        q: 'Can a dirty blower wheel weaken airflow to my rooms?',
        a: 'Yes. Buildup on the blades changes their shape so the fan moves less air, and rooms farthest from the unit are usually the first to feel weak.',
      },
    ],
    related: ['hvac-cleaning', 'ac-coil-cleaning', 'air-handler-cleaning', 'hvac-mold-cleaning'],
  },

  // ───────────── Dryer Vent ─────────────
  {
    slug: 'dryer-vent-cleaning',
    path: '/dryer-vent-cleaning/',
    name: 'Dryer Vent Cleaning',
    group: 'dryer',
    icon: 'dryer',
    card: 'Full-length lint removal from the dryer to the wall or roof cap, to shorten drying times and reduce lint buildup.',
    image: dryerVentExterior,
    imageAlt: 'Purix technician cleaning a dryer vent from the exterior wall',
    secondImage: vanDryerCrew,
    secondImageAlt: 'Purix crew preparing dryer vent brushes and ductwork beside the service van',
    metaTitle: 'Dryer Vent Cleaning - Purix Air Duct & Dryer vent',
    metaDescription:
      'Clothes dryer vent cleaning in Miami by Purix. Full lint removal from the clothes dryer through the vent run to the exterior cap. Book online today.',
    h1: 'Professional Dryer Vent Cleaning Services',
    heroSubtitle: 'Dryer vent cleaning removes packed lint along the full run, from the back of your dryer to the outside vent cap, improving safety.',
    introHeading: 'Why your lint trap does not catch nearly everything',
    intro: [
      'Lint that gets past the dryer’s lint trap ends up in the vent line running through your wall, ceiling or roof. Over months of laundry it builds up, narrows the vent and traps hot, moist air inside the dryer.',
      'The U.S. Fire Administration reports that failure to clean is the leading cause of home clothes dryer fires. A clogged vent also means longer cycles and extra wear on the dryer. Purix clears the entire vent run, including long condo runs and roof terminations.',
      `If your vent is damaged, too long or made of foil or vinyl, see ${a('/dryer-vent-installation/', 'dryer vent installation')}. For laundromats, hotels and multi-unit buildings, see ${a('/commercial-dryer-vent-cleaning/', 'commercial dryer vent cleaning')}.`,
    ],
    componentsHeading: 'What our dryer vent cleaning service actually reaches',
    components: [
      { title: 'Transition duct', text: 'The connector between the back of the dryer and the wall behind it.' },
      { title: 'Vent run', text: 'The full length of duct running through the wall, ceiling or attic space.' },
      { title: 'Exterior or roof cap', text: 'The outside vent hood or roof cap, including its flap or pest screen.' },
      { title: 'Dryer exhaust outlet', text: 'Packed lint is cleared from the exhaust outlet at the back of the dryer.' },
    ],
    signsHeading: 'Signs your dryer vent is clogged with lint',
    signs: [
      'Clothes need more than one cycle to dry',
      'The dryer or laundry room gets unusually hot',
      'A burning smell while the dryer runs',
      'Lint around the dryer door or behind the dryer',
      'Weak airflow at the outside vent',
      'It’s been more than a year since the last cleaning',
    ],
    processHeading: 'How we clean dryer vents',
    process: [
      { title: 'Disconnect & inspect', text: 'We pull the dryer out and inspect the transition duct and vent connection.' },
      { title: 'Brush & vacuum', text: 'Rotary brushes clean the full vent run while lint is vacuumed out.' },
      { title: 'Clear the cap', text: 'The exterior hood or roof cap is cleared and the flap is checked.' },
      { title: 'Reconnect & test', text: 'The dryer is reconnected and airflow is checked at the exterior.' },
    ],
    benefitsHeading: 'Why regular dryer vent cleaning matters for safety',
    benefits: [
      { title: 'Lower fire risk', text: 'Clearing packed lint removes the buildup that makes a clogged dryer vent a real fire hazard.' },
      { title: 'Shorter drying times', text: 'With moist air able to escape freely, your laundry loads finish drying noticeably faster.' },
      { title: 'Less wear on dryer', text: 'A clear vent means less trapped heat and less strain on your dryer and its components.' },
      { title: 'Condo & roof vents', text: 'We safely clean the long vertical runs and rooftop caps common in condos and townhomes.' },
      { title: 'Removes hidden lint', text: 'Most lint slips past the trap and collects in the vent line, exactly where we clear it.' },
      { title: 'Cooler laundry room', text: 'A clear vent lets hot, damp air escape outside instead of backing up into the room.' },
    ],
    note: {
      heading: 'Clothes dryer vent cleaning, explained',
      paragraphs: [
        'Clothes dryer vent cleaning and dryer vent cleaning are the same service: clearing the exhaust duct that carries hot, lint-filled air from your clothes dryer out of the building.',
        'Every load sheds lint. The lint trap catches some of it, but the rest rides the exhaust from the back of the clothes dryer, through the transition duct and the vent run in your wall, ceiling or attic, out to the exterior or roof cap. We clean that full path so air and moisture escape freely.',
      ],
    },
    faqs: [
      { q: 'How often should dryer vents be cleaned?', a: 'At least once a year for most homes. Large households, pets and long or roof-terminated vents may need more frequent cleaning.' },
      { q: 'Isn’t cleaning the lint trap enough?', a: 'No. The lint trap catches only part of the lint. The rest builds up inside the vent and has to be cleaned out of the duct itself.' },
      { q: 'Do you clean dryer vents in condos?', a: 'Yes. Many Miami condos have long vent runs, and we can coordinate access with building management.' },
      { q: 'How long does dryer vent cleaning take?', a: 'Most cleanings take about an hour. Long runs and roof vents can take longer.' },
      {
        q: 'What are the signs my dryer vent needs cleaning?',
        a: 'Loads that need more than one cycle to dry, a hot laundry room and a burning smell when the dryer runs are the most common warning signs.',
      },
      { q: 'Is clothes dryer vent cleaning the same as dryer vent cleaning?', a: 'Yes. They are two names for the same service: clearing lint from the exhaust duct that vents your clothes dryer to the outside. We clean the full run on every visit.' },
    ],
    related: ['dryer-vent-installation', 'commercial-dryer-vent-cleaning'],
  },
  {
    slug: 'dryer-vent-installation',
    path: '/dryer-vent-installation/',
    name: 'Dryer Vent Installation',
    group: 'dryer',
    parent: 'dryer-vent-cleaning',
    icon: 'wrench',
    card: 'New or rerouted dryer vent runs, metal transition ducts and new wall or roof caps.',
    image: brandedVan,
    imageAlt: 'Purix Air Solution service van for air duct and dryer vent cleaning',
    secondImage: serviceTrucks,
    secondImageAlt: 'Purix technicians with service trucks at a South Florida home',
    metaTitle: 'Dryer Vent Installation - Purix Air Duct & Dryer vent',
    metaDescription:
      'Dryer Vent Installation in Miami by Purix Air Duct & Dryer vent cleaning. New and rerouted vent runs with metal transition ducts. Request a quote online.',
    h1: 'Dryer Vent Installation & Rerouting Services',
    heroSubtitle: 'Dryer vent installation for new, rerouted or upgraded runs, from metal transition ducts to new wall and roof caps that vent properly.',
    introHeading: 'When a dryer vent needs more than a cleaning',
    intro: [
      'Some dryer vents can’t be fixed with a cleaning. Plastic or foil transition hoses crush and trap lint. Runs with too many turns clog quickly. Missing or broken vent caps let in pests and weather. And when you move your laundry area, you need a new vent route.',
      `We install new dryer vent runs and components following the dryer manufacturer’s specifications. If your existing vent is in good shape and just full of lint, ${a('/dryer-vent-cleaning/', 'dryer vent cleaning')} is all you need.`,
    ],
    componentsHeading: 'What our dryer vent installation service typically covers',
    components: [
      { title: 'Metal transition ducts', text: 'Rigid metal duct replaces the old foil or vinyl hose behind your dryer.' },
      { title: 'New vent runs', text: 'Brand-new duct routes run neatly through your walls, ceilings or attic spaces.' },
      { title: 'Rerouted vents', text: 'Shorter, straighter routes for existing vents that currently have too many turns.' },
      { title: 'Wall & roof caps', text: 'New exterior wall hoods and roof caps fitted with properly working flaps.' },
    ],
    signsHeading: 'When to consider a new dryer vent installation',
    signs: [
      'You’re moving the dryer or remodeling the laundry area',
      'The transition hose is plastic, foil or crushed',
      'The vent clogs again soon after each cleaning',
      'The outside cap is missing, broken or stuck shut',
      'The vent run is damaged or disconnected inside the wall or ceiling',
    ],
    processHeading: 'How installation works',
    process: [
      { title: 'Assess the route', text: 'We look at the dryer location, the existing vent and possible routes outside.' },
      { title: 'Recommend & quote', text: 'You get a recommended route and materials with a written quote.' },
      { title: 'Install & seal', text: 'The new vent is installed, connected and sealed.' },
      { title: 'Test airflow', text: 'The dryer is run and airflow is checked at the exterior cap.' },
    ],
    benefitsHeading: 'Benefits of a properly installed, well-routed dryer vent',
    benefits: [
      { title: 'Better airflow', text: 'A shorter, smoother route moves lint and the moist air outside far more efficiently overall.' },
      { title: 'Slower lint buildup', text: 'Smooth rigid metal duct collects noticeably less lint than ribbed foil or vinyl hose.' },
      { title: 'Weather & pest guard', text: 'A properly working exterior vent cap keeps out the rain, insects and nesting birds year-round.' },
      { title: 'Easier future cleaning', text: 'A well-routed vent with fewer turns is far easier to inspect and keep clean later.' },
      { title: 'Smooth, safe routing', text: 'Vents are run with rigid metal duct and proper caps for safe, efficient airflow outside.' },
      { title: 'Fewer future clogs', text: 'A well-routed vent with fewer bends and kinks collects far less lint over the years.' },
    ],
    faqs: [
      { q: 'Rigid or flexible dryer vent: which is better?', a: 'Smooth metal duct is generally preferred for the vent run because it collects less lint. A short metal transition duct connects the dryer to the wall.' },
      { q: 'How long can a dryer vent be?', a: 'It depends on your dryer manufacturer’s specifications and the number of turns. We plan the route so it stays within those limits.' },
      { q: 'Can you vent a dryer through the roof?', a: 'Yes, when that’s the best route available. Roof vents need a proper roof cap and regular cleaning.' },
      { q: 'Do you install dryer vents in condos?', a: 'We can, depending on building rules. We coordinate with building management where needed.' },
      {
        q: 'Can you move my dryer vent to a better spot?',
        a: 'Yes. We reroute vents to shorten the run or exit through a more suitable wall or roof location, which improves airflow and slows lint buildup.',
      },
    ],
    related: ['dryer-vent-cleaning', 'commercial-dryer-vent-cleaning'],
  },
  {
    slug: 'commercial-dryer-vent-cleaning',
    path: '/commercial-dryer-vent-cleaning/',
    name: 'Commercial Dryer Vent Cleaning',
    group: 'dryer',
    parent: 'dryer-vent-cleaning',
    icon: 'building',
    card: 'Scheduled lint removal for laundromats, hotels, salons, gyms and multi-unit buildings.',
    image: vanDryerCrew,
    imageAlt: 'Purix crew preparing dryer vent brushes and ductwork beside the service van',
    secondImage: teamWithVan,
    secondImageAlt: 'Purix technicians with the service van and dryer vent cleaning equipment',
    metaTitle: 'Commercial Dryer Vent Cleaning Services - Purix',
    metaDescription:
      'Commercial Dryer Vent Cleaning by Purix Air Duct & Dryer vent cleaning for Miami laundromats, hotels and gyms, scheduled around you. Book online today.',
    h1: 'Commercial Dryer Vent Cleaning Services',
    heroSubtitle: 'Commercial dryer vent cleaning with scheduled lint removal for laundromats, hotels, gyms and other buildings that run dryers hard all day.',
    introHeading: 'Why commercial dryers build up lint so quickly',
    intro: [
      'Laundromats, hotels, salons, gyms and multi-unit buildings run dryers far more than a household does, and their vents fill with lint much faster. Many condo and apartment buildings also have long or shared vent runs that individual residents can’t reach.',
      `Purix cleans commercial and multi-unit dryer vents on a schedule that fits your operation. For the building’s HVAC ductwork, see ${a('/commercial-air-duct-cleaning/', 'commercial air duct cleaning')}.`,
    ],
    componentsHeading: 'The commercial vent systems our cleaning service covers',
    components: [
      { title: 'Commercial dryer vents', text: 'High-volume dryer exhaust runs found in laundromats and busy on-premise laundry rooms.' },
      { title: 'Multi-unit vents', text: 'Individual unit dryer vents running throughout larger condo, apartment and mixed-use buildings.' },
      { title: 'Roof & wall terminations', text: 'Roof caps and wall hoods terminating the vent runs on commercial buildings.' },
      { title: 'Long horizontal runs', text: 'Extended horizontal runs that travel through the drop ceilings and service corridors above.' },
    ],
    signsHeading: 'Signs your commercial dryer vents need professional service',
    signs: [
      'Drying cycles getting longer',
      'Dryers running hot or shutting off',
      'Lint collecting around dryers or at exterior caps',
      'Residents reporting slow dryers in multiple units',
      'No regular cleaning schedule in place',
    ],
    processHeading: 'How we handle commercial dryer vents',
    process: [
      { title: 'Site review', text: 'We review your dryers, vent routes and access, then provide a quote.' },
      { title: 'Schedule', text: 'Work is planned around operating hours or resident availability.' },
      { title: 'Clean & clear', text: 'Vent runs and terminations are cleaned and lint is removed.' },
      { title: 'Report back', text: 'We let you know about damaged vents or caps that need attention.' },
    ],
    benefitsHeading: 'Why businesses schedule regular commercial dryer vent cleaning',
    benefits: [
      { title: 'Less lint buildup', text: 'Regular cleaning keeps the lint from steadily accumulating inside your high-use commercial vent lines.' },
      { title: 'Faster turnaround', text: 'Clear, unobstructed vents help all of your dryers finish their cycles on time, every time.' },
      { title: 'Less equipment strain', text: 'Dryers no longer have to work against blocked vents, which eases wear on the machines.' },
      { title: 'One point of contact', text: 'A single, reliable point of contact for property managers handling many units or locations.' },
      { title: 'Safer daily operation', text: 'Regular lint removal reduces the fire risk that comes with heavy, all-day commercial use.' },
      { title: 'Scheduled around you', text: 'Service is timed to your operating hours so your laundry operation simply keeps running.' },
    ],
    faqs: [
      { q: 'How often should commercial dryer vents be cleaned?', a: 'It depends on usage. High-volume operations like laundromats and hotels often need cleaning much more often than a household.' },
      { q: 'Do you clean dryer vents in condo and apartment buildings?', a: 'Yes. We work with property managers and associations to clean vents across multiple units.' },
      { q: 'Can you work outside business hours?', a: 'Yes. We schedule around your operating hours where possible.' },
      {
        q: 'Why do commercial dryer vents clog faster than home vents?',
        a: 'Commercial dryers run many more loads each day, so lint collects in the vent lines far faster than it does in a typical household.',
      },
      {
        q: 'Can you service several dryers or a shared vent system?',
        a: 'Yes. We clean individual dryer runs as well as shared vent systems in laundromats, hotels, gyms and multi-unit residential buildings.',
      },
    ],
    related: ['dryer-vent-cleaning', 'dryer-vent-installation', 'commercial-air-duct-cleaning'],
  },

  // ───────────── Attic Insulation ─────────────
  {
    slug: 'attic-insulation-removal',
    path: '/attic-insulation-removal/',
    name: 'Attic Insulation Removal',
    group: 'insulation',
    parent: 'insulation-replacement',
    icon: 'trash',
    card: 'Vacuum removal of old, wet, compressed or rodent-contaminated attic insulation, bagged and hauled away.',
    image: insulationRemoval,
    imageAlt: 'Technician vacuuming old insulation out of an attic',
    secondImage: serviceTrucks,
    secondImageAlt: 'Purix technicians with service trucks at a South Florida home',
    metaTitle: 'Attic Insulation Removal - Purix Air Duct & Dryer vent',
    metaDescription:
      'Attic Insulation Removal in Miami by Purix Air Duct & Dryer vent cleaning. Vacuum removal of old, wet or contaminated insulation. Schedule service online.',
    h1: 'Attic Insulation Removal & Cleanout Services',
    heroSubtitle: 'Attic insulation removal clears out old, damaged or contaminated material, leaving your attic clean and ready for new insulation or other work.',
    introHeading: 'When old attic insulation really has to come out',
    intro: [
      'Attic insulation doesn’t last forever. In South Florida it can get soaked by roof leaks or storm damage, flattened by years of foot traffic and stored items, or contaminated by rodents and insects. Damaged insulation loses much of its value, and contaminated insulation is something most homeowners want gone.',
      'Purix removes old attic insulation with a high-powered insulation vacuum. The material is pulled out of the attic through a hose and collected in bags outside, so it doesn’t travel through your living space. Once it’s out, we clear remaining debris so the attic is clean.',
      `This page covers removal only. To remove the old insulation and install new insulation in one project, see ${a('/insulation-replacement/', 'insulation replacement')}. If your existing insulation is in good shape and just too thin, ${a('/blown-in-attic-insulation/', 'blown-in attic insulation')} can be added on top without removal.`,
    ],
    componentsHeading: 'What our attic insulation removal service takes out',
    components: [
      { title: 'Blown-in insulation', text: 'Loose-fill fiberglass or cellulose spread in a layer across the attic floor.' },
      { title: 'Batt insulation', text: 'Fiberglass batts between the ceiling joists, including any wet or matted sections.' },
      { title: 'Contaminated material', text: 'Insulation fouled by rodent or pest droppings, nesting and the related debris.' },
      { title: 'Attic debris', text: 'Loose debris left behind on the attic floor once the old insulation is out.' },
    ],
    signsHeading: 'Signs your attic insulation should be removed soon',
    signs: [
      'Rodent droppings, nests or tunnels in the insulation',
      'Insulation that got wet from a roof leak or storm',
      'Water stains on the ceiling below the attic',
      'Insulation that is flattened, clumped or uneven',
      'A persistent odor coming from the attic',
      'You’re planning attic work, such as replacing ductwork, and want a clean start',
    ],
    processHeading: 'How attic insulation removal works',
    process: [
      { title: 'Attic inspection', text: 'We look at the type, depth and condition of the insulation and check for anything that needs special handling.' },
      { title: 'Protect your home', text: 'The access area is protected, and the vacuum hose is routed so material leaves through the shortest path.' },
      { title: 'Vacuum removal', text: 'Insulation is vacuumed out of the attic and collected in bags outside the home.' },
      { title: 'Clean-up & haul away', text: 'Remaining debris is cleared and the bagged material is removed from your property.' },
    ],
    benefitsHeading: 'What a proper attic insulation removal gets you',
    benefits: [
      { title: 'Contaminated material gone', text: 'Insulation fouled by pests or water is taken out of the attic entirely, not just covered.' },
      { title: 'A clean attic', text: 'A clear attic floor makes it far easier to see the ceiling, the wiring and the ductwork.' },
      { title: 'Ready for new insulation', text: 'Fresh insulation can go onto a clean surface instead of sitting on top of an old problem.' },
      { title: 'Easier attic work', text: 'Duct repairs and other attic jobs are much easier with the old insulation out of the way.' },
      { title: 'A healthier attic', text: 'Removing the contaminated or pest-damaged material clears out what was sitting right above your ceilings.' },
      { title: 'Ready for an upgrade', text: 'A cleared attic is fully prepped for fresh insulation or whatever attic work comes next.' },
    ],
    note: {
      heading: 'A note on older insulation',
      paragraphs: [
        'Some older homes have vermiculite insulation, a pebble-like, gray-brown or gold material. Vermiculite can contain asbestos, and the EPA advises not disturbing it. If we find vermiculite, we stop and recommend testing by a qualified professional before any removal.',
      ],
    },
    faqs: [
      { q: 'Does insulation removal make a mess inside the house?', a: 'It shouldn’t. The insulation is vacuumed out through a hose and collected in bags outside, and we protect the area around the attic access.' },
      { q: 'How long does attic insulation removal take?', a: 'Most homes take one day. Larger attics or heavily contaminated insulation can take longer.' },
      { q: 'Do I need to replace the insulation after removal?', a: 'In most cases, yes. An uninsulated attic lets a lot of heat into your home. Many customers choose insulation replacement to handle both in one project.' },
      { q: 'Can you remove insulation that has rodent droppings in it?', a: 'Yes. Contaminated insulation is one of the most common reasons for removal. Pest control and sealing entry points should be handled first so the problem doesn’t return.' },
      { q: 'Do you remove vermiculite insulation?', a: 'No. Vermiculite can contain asbestos. If we find it, we stop and recommend testing by a qualified professional.' },
    ],
    related: ['insulation-replacement', 'blown-in-attic-insulation', 'ac-duct-replacement', 'air-duct-inspection'],
  },
  {
    slug: 'blown-in-attic-insulation',
    path: '/blown-in-attic-insulation/',
    name: 'Blown-In Attic Insulation',
    group: 'insulation',
    parent: 'insulation-replacement',
    icon: 'wind',
    card: 'Loose-fill insulation blown evenly across the attic floor to add depth where existing insulation is thin.',
    image: insulationBlownIn,
    imageAlt: 'Technician blowing new insulation between attic joists',
    secondImage: brandedVan,
    secondImageAlt: 'Purix Air Solution service van',
    metaTitle: 'Blown-In Attic Insulation - Purix Air Duct & Dryer vent',
    metaDescription:
      'Blown-In Attic Insulation in Miami by Purix Air Duct & Dryer vent cleaning. Loose-fill coverage to the right depth to cut heat gain. Book online today.',
    h1: 'Blown-In Attic Insulation Services',
    heroSubtitle: 'Blown-in attic insulation spreads loose-fill evenly across your attic floor, topping up thin coverage or insulating an empty attic to the right depth.',
    introHeading: 'Adding blown-in insulation where your attic needs it most',
    intro: [
      'In Miami, the attic is one of the hottest places in the house. On a summer afternoon it can be far hotter than outside, and that heat pushes down through the ceiling into your living space. Attic insulation slows that heat down, but many homes have far less than recommended, or insulation that has settled over the years.',
      'Blown-in insulation is installed with a machine that blows loose-fill insulation through a hose into the attic. It spreads evenly between and over joists and fills gaps around wiring, pipes and framing that batts can miss. It can go on top of existing insulation that is dry and clean, or into an attic that has none.',
      `If your existing insulation is wet, contaminated or badly damaged, it should come out first. See ${a('/attic-insulation-removal/', 'attic insulation removal')} or ${a('/insulation-replacement/', 'insulation replacement')}, which handles removal and new insulation together.`,
    ],
    componentsHeading: 'What our blown-in attic insulation service typically includes',
    components: [
      { title: 'Depth assessment', text: 'We measure your existing insulation and recommend how much more to add.' },
      { title: 'Loose-fill insulation', text: 'Insulation blown evenly across the attic floor to a consistent target depth.' },
      { title: 'Hard-to-reach areas', text: 'Coverage around the wiring, pipes, framing and the tight edges of the attic.' },
      { title: 'Depth markers', text: 'Markers are set in the attic so you can see the installed insulation depth.' },
    ],
    signsHeading: 'Signs your attic is short on blown-in insulation',
    signs: [
      'You can see the tops of the ceiling joists through the insulation',
      'Upstairs or top-floor rooms stay hotter than the rest of the house',
      'The AC runs constantly on hot afternoons',
      'Ceilings feel warm to the touch in summer',
      'The insulation looks thin, settled or patchy',
      'The home is older and the insulation has never been topped up',
    ],
    processHeading: 'How blown-in insulation is installed',
    process: [
      { title: 'Attic check', text: 'We check the existing insulation, look for moisture or pest problems, and measure the depth.' },
      { title: 'Recommend & quote', text: 'You get a recommended depth and material with a written quote.' },
      { title: 'Prepare the attic', text: 'Depth markers are set, and the area is protected where needed.' },
      { title: 'Blow in insulation', text: 'Insulation is blown evenly across the attic to the agreed depth.' },
      { title: 'Final check', text: 'We check coverage and depth before we leave.' },
    ],
    benefitsHeading: 'What added attic insulation does for indoor comfort',
    benefits: [
      { title: 'Less attic heat', text: 'More insulation slows the heat that moves down from a hot attic into the rooms below.' },
      { title: 'More even temperatures', text: 'Rooms sitting under the attic tend to feel far more comfortable with adequate insulation.' },
      { title: 'Less strain on AC', text: 'When less heat comes through the ceiling, your AC simply has less heat to remove.' },
      { title: 'Fills gaps batts miss', text: 'Loose-fill settles neatly around the obstructions for far more continuous and even attic coverage.' },
      { title: 'Fills hidden gaps', text: 'Loose-fill works into the corners and around the obstacles that batt insulation tends to miss.' },
      { title: 'Quick, clean install', text: 'Blown-in insulation goes in quickly and efficiently, with minimal disruption inside your living space.' },
    ],
    faqs: [
      { q: 'How much attic insulation does a Miami home need?', a: 'ENERGY STAR recommends R-30 to R-49 for uninsulated attics in Miami’s climate zone. We measure what you have and recommend how much to add.' },
      { q: 'Can new insulation go on top of old insulation?', a: 'Yes, if the existing insulation is dry, clean and in reasonable shape. If it’s wet, moldy-smelling or contaminated by pests, it should be removed first.' },
      { q: 'What material do you use?', a: 'Blown-in insulation is typically loose-fill fiberglass or cellulose. We’ll recommend a material for your attic and list it in your quote.' },
      { q: 'How long does installation take?', a: 'Most homes take a few hours, depending on the attic size and the depth being added.' },
      { q: 'Will it lower my energy bill?', a: 'Adding insulation to an under-insulated attic often reduces how hard the AC has to work. Results depend on your home, your current insulation and how you use your AC, so we don’t promise a specific saving.' },
    ],
    related: ['insulation-replacement', 'attic-insulation-removal', 'ac-duct-replacement', 'air-duct-inspection'],
  },
  {
    slug: 'insulation-replacement',
    path: '/insulation-replacement/',
    name: 'Insulation Replacement',
    group: 'insulation',
    icon: 'layers',
    card: 'Old attic insulation removed and new blown-in insulation installed in one project.',
    image: insulationReplacement,
    imageAlt: 'Technician installing new attic insulation',
    secondImage: serviceTrucks,
    secondImageAlt: 'Purix technicians with service trucks at a South Florida home',
    metaTitle: 'Insulation Replacement - Purix Air Duct & Dryer vent',
    metaDescription:
      'Insulation Replacement in Miami by Purix Air Duct & Dryer vent cleaning. Old insulation removed and new blown-in insulation installed. Book online today.',
    h1: 'Attic Insulation Replacement Services',
    heroSubtitle: 'Insulation replacement handles it all in one project: removing damaged or contaminated attic insulation and installing fresh blown-in insulation in its place.',
    introHeading: 'Removal and new insulation, handled together in one project',
    intro: [
      'When attic insulation is wet, contaminated or worn out, adding more on top doesn’t fix the problem. The old material needs to come out, and new insulation needs to go in. Insulation replacement handles both in one coordinated project, so your attic isn’t left empty between jobs.',
      'We vacuum out the old insulation, clear the attic floor, and then blow in new insulation evenly to the recommended depth. Because the attic is empty in between, it’s also a good time to look at the condition of the ductwork, and we’ll point out any damaged or disconnected duct runs we see.',
      `For removal on its own, see ${a('/attic-insulation-removal/', 'attic insulation removal')}. To add insulation on top of existing insulation that’s still in good shape, see ${a('/blown-in-attic-insulation/', 'blown-in attic insulation')}. If attic ductwork needs work, ${a('/ac-duct-replacement/', 'AC duct replacement')} can be planned at the same time.`,
    ],
    componentsHeading: 'What our attic insulation replacement project typically covers',
    components: [
      { title: 'Old insulation removal', text: 'Existing insulation is vacuumed out and bagged outside your home for disposal.' },
      { title: 'Attic clean-up', text: 'Remaining debris is cleared from the attic floor before any new work begins.' },
      { title: 'Ductwork check', text: 'A look over the attic duct runs while they are fully visible and accessible.' },
      { title: 'New blown-in insulation', text: 'Fresh loose-fill insulation is installed evenly across the attic to the recommended depth.' },
    ],
    signsHeading: 'When replacement beats simply topping up old insulation',
    signs: [
      'The insulation is contaminated by rodents or pests',
      'It got wet from a roof leak, plumbing leak or storm',
      'It’s badly compressed, clumped or missing in areas',
      'There’s an ongoing odor from the attic',
      'You recently had roof work and the insulation was disturbed',
      'You’re replacing attic ductwork and want the attic redone at the same time',
    ],
    processHeading: 'How insulation replacement works',
    process: [
      { title: 'Inspect & quote', text: 'We check the insulation, attic conditions and ductwork, then provide a written quote.' },
      { title: 'Remove old insulation', text: 'The old material is vacuumed out and bagged outside.' },
      { title: 'Clean the attic', text: 'Debris is cleared and we note anything that needs attention, such as damaged ducts.' },
      { title: 'Install new insulation', text: 'New insulation is blown in evenly to the agreed depth.' },
      { title: 'Final walkthrough', text: 'We confirm coverage and depth and show you the finished attic.' },
    ],
    benefitsHeading: 'Why replacing beats covering up damaged attic insulation',
    benefits: [
      { title: 'Problem material removed', text: 'Contaminated or water-damaged insulation is fully taken out of the attic and not simply buried over.' },
      { title: 'Full, even coverage', text: 'New insulation goes onto a clean attic floor at a consistent, properly measured depth.' },
      { title: 'One coordinated project', text: 'Removal and installation are scheduled together, so your attic is never left sitting empty.' },
      { title: 'Good time for ducts', text: 'With the attic cleared out, your ductwork is far easier to inspect and repair in place.' },
      { title: 'Fresh, even coverage', text: 'Old material comes out and new insulation goes in at a consistent depth across the whole attic.' },
      { title: 'One coordinated visit', text: 'Removal and reinstallation are handled together, so no gap is ever left in your coverage.' },
    ],
    note: {
      heading: 'A note on older insulation',
      paragraphs: [
        'Some older homes have vermiculite insulation, a pebble-like, gray-brown or gold material. Vermiculite can contain asbestos, and the EPA advises not disturbing it. If we find vermiculite, we stop and recommend testing by a qualified professional before any work continues.',
      ],
    },
    faqs: [
      { q: 'How long does insulation replacement take?', a: 'Many homes are done in one to two days, depending on the attic size and the condition of the old insulation.' },
      { q: 'Should I fix a roof leak before replacing insulation?', a: 'Yes. New insulation should only go in once the leak is repaired, or it can get wet again.' },
      { q: 'What about rodents in the attic?', a: 'Pest control and sealing entry points should be handled before new insulation goes in, so the new insulation stays clean.' },
      { q: 'Can you replace ductwork at the same time?', a: 'Yes. Replacement is a good time to address attic ductwork, since it’s fully visible. See our AC duct replacement service.' },
      { q: 'How much new insulation will you install?', a: 'ENERGY STAR recommends R-30 to R-49 for attics in Miami’s climate zone. We’ll recommend a depth and list it in your quote.' },
    ],
    related: ['attic-insulation-removal', 'blown-in-attic-insulation', 'ac-duct-replacement', 'air-duct-inspection'],
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};

export const servicesByGroup = (group: GroupId) => services.filter((s) => s.group === group);
