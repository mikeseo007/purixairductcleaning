import type { ImageMetadata } from 'astro';
import ceilingVentHose from '../assets/images/ceiling-vent-hose.jpg';
import serviceTrucks from '../assets/images/service-trucks.jpg';
import ceilingInspection from '../assets/images/ceiling-inspection.jpg';
import negativeAirLadder from '../assets/images/negative-air-ladder.jpg';
import ductPlans from '../assets/images/duct-plans.jpg';
import ductCamera from '../assets/images/duct-camera.jpg';
import negativeAirHose from '../assets/images/negative-air-hose.jpg';
import furnaceFilter from '../assets/images/furnace-filter.jpg';
import hvacFilterService from '../assets/images/hvac-filter-service.jpg';
import teamWithVan from '../assets/images/team-with-van.jpg';
import dryerVentExterior from '../assets/images/dryer-vent-exterior.jpg';
import vanDryerCrew from '../assets/images/van-dryer-crew.jpg';
import brandedVan from '../assets/images/branded-van.jpg';
import insulationRemoval from '../assets/images/insulation-removal.jpg';
import insulationBlownIn from '../assets/images/insulation-blown-in.jpg';
import insulationReplacement from '../assets/images/insulation-replacement.jpg';
import hvacCoilCleaning from '../assets/images/hvac-coil-cleaning.jpg';
import airHandlerCleaning from '../assets/images/air-handler-cleaning.jpg';
import blowerCleaning from '../assets/images/blower-wheel-cleaning.jpg';

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
    hub: '/air-duct-cleaning/',
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
    slug: 'air-duct-cleaning',
    path: '/air-duct-cleaning/',
    name: 'Air Duct Cleaning',
    group: 'duct',
    icon: 'duct',
    card: 'Full supply and return duct cleaning under negative pressure to remove the dust and debris that build up in your AC ductwork.',
    image: negativeAirHose,
    imageAlt: 'Purix technician running a negative-air hose up to a ceiling duct',
    secondImage: ceilingVentHose,
    secondImageAlt: 'Purix technician connecting a cleaning hose to a ceiling supply vent',
    metaTitle: 'Air Duct Cleaning Miami, FL | AC Ductwork Cleaning | Purix',
    metaDescription:
      'Air duct cleaning in Miami for homes and businesses. We clean supply and return ducts, trunk lines and registers under negative pressure. Call (305) 449-9881.',
    h1: 'Air Duct Cleaning in Miami, FL',
    heroSubtitle:
      'Supply and return duct cleaning that removes built-up dust, lint and debris from your AC ductwork, for homes, condos and businesses across Miami-Dade and South Florida.',
    introHeading: 'What professional air duct cleaning covers',
    intro: [
      'Every time your air conditioner runs, it moves air through a network of supply and return ducts. In Miami, where AC systems run for most of the year, dust, pet hair, lint and construction debris settle inside that ductwork, and some of it gets blown back into your rooms.',
      'Purix cleans the full duct system under negative pressure. We connect a high-powered collection unit to the system, loosen buildup with rotary brushes and air whips, and pull the debris out of the ductwork so it leaves your property instead of landing on your floors.',
      `This page covers our general air duct cleaning service. For service built around your property type, see ${a('/residential-air-duct-cleaning/', 'residential air duct cleaning')} and ${a('/commercial-air-duct-cleaning/', 'commercial air duct cleaning')}. If the problem is inside the AC unit itself, ${a('/hvac-cleaning/', 'HVAC cleaning')} covers the coil, air handler and blower.`,
    ],
    componentsHeading: 'Ductwork we clean',
    components: [
      { title: 'Supply ducts & registers', text: 'Every run that delivers cooled air to your rooms, plus the registers and diffusers at the end of each one.' },
      { title: 'Return ducts & grilles', text: 'The return side pulls air back to the system and usually collects the heaviest buildup.' },
      { title: 'Trunk lines & plenums', text: 'The main sheet-metal trunks and the supply and return plenums that connect to the air handler.' },
      { title: 'Flex duct runs', text: 'Flexible duct in attics, soffits and drop ceilings, cleaned carefully to avoid damaging the inner liner.' },
    ],
    signsHeading: 'Signs your air ducts need cleaning',
    signs: [
      'Visible dust or dark streaks around supply registers',
      'Dust settles on furniture again soon after you clean',
      'Debris puffs out of the vents when the AC turns on',
      'Some rooms get noticeably weaker airflow than others',
      'A stale smell when the system starts up',
      'You recently renovated, moved in, or haven’t had the ducts cleaned in 3–5 years',
    ],
    processHeading: 'Our air duct cleaning process',
    process: [
      { title: 'Inspect', text: 'We check registers, returns and accessible ductwork and explain what we find before starting.' },
      { title: 'Protect & connect', text: 'Floors and work areas are covered, and our collection unit puts the duct system under negative pressure.' },
      { title: 'Agitate & extract', text: 'Each supply and return run is worked with brushes and air whips while loosened debris is pulled out.' },
      { title: 'Registers & grilles', text: 'Vent covers and return grilles are removed and cleaned before they go back on.' },
      { title: 'Walkthrough', text: 'We show you the results and point out anything that needs attention, such as damaged duct sections.' },
    ],
    benefitsHeading: 'What you can expect afterward',
    benefits: [
      { title: 'Less recirculated dust', text: 'Removing the buildup inside the ducts means less of it gets blown back into your rooms.' },
      { title: 'Clearer air paths', text: 'Debris that restricted individual runs is removed, which can help airflow reach every room.' },
      { title: 'Fewer dust-related odors', text: 'Stale smells caused by dust and debris in the ductwork are often reduced once it’s removed.' },
      { title: 'A clear picture of your ducts', text: 'You’ll know the condition of your ductwork, including any sections that are damaged or disconnected.' },
    ],
    faqs: [
      {
        q: 'How often should air ducts be cleaned in Miami?',
        a: 'Most homes benefit from duct cleaning every 3 to 5 years. Because AC systems in South Florida run nearly year-round, homes with pets, recent renovations or visible dust around the vents may need it sooner.',
      },
      {
        q: 'What’s the difference between air duct cleaning and HVAC cleaning?',
        a: 'Air duct cleaning focuses on the ductwork, registers and plenums. HVAC cleaning focuses on the equipment, such as the evaporator coil, blower wheel and air handler cabinet. Many systems benefit from both, and we can do them in the same visit.',
      },
      {
        q: 'Will duct cleaning make a mess in my home?',
        a: 'No. The ductwork stays under negative pressure while we work, so loosened debris is pulled into our collection unit. We also protect floors and work areas before we start.',
      },
      {
        q: 'Will air duct cleaning help with allergies?',
        a: 'Duct cleaning removes dust and debris that would otherwise recirculate, and many customers notice their home feels less dusty. It isn’t a medical treatment, though, and results vary from home to home.',
      },
      {
        q: 'How long does air duct cleaning take?',
        a: 'Most homes and condos take a few hours. The time depends on the number of vents, the length of the duct runs and how much buildup is in the system.',
      },
    ],
    related: ['residential-air-duct-cleaning', 'commercial-air-duct-cleaning', 'air-duct-inspection', 'air-duct-sanitizing', 'hvac-cleaning'],
  },
  {
    slug: 'residential-air-duct-cleaning',
    path: '/residential-air-duct-cleaning/',
    name: 'Residential Air Duct Cleaning',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'home',
    card: 'Duct cleaning planned around houses, condos and townhomes, with attic flex duct, closet air handlers and pets in mind.',
    image: ceilingVentHose,
    imageAlt: 'Purix technician connecting a cleaning hose to a ceiling supply vent',
    secondImage: ceilingInspection,
    secondImageAlt: 'Purix technician on a ladder at an open ceiling vent in a living room',
    metaTitle: 'Residential Air Duct Cleaning Miami | Home AC Ducts | Purix',
    metaDescription:
      'Air duct cleaning for Miami houses, condos and townhomes. Careful in-home service that protects your floors and works around pets. Call (305) 449-9881.',
    h1: 'Residential Air Duct Cleaning in Miami',
    heroSubtitle: 'Careful, clean duct cleaning for single-family homes, condos and townhomes, with your floors, furniture and pets in mind.',
    introHeading: 'Duct cleaning built around how you live',
    intro: [
      'Cleaning the ducts in a lived-in home is different from cleaning an empty building. There are pets to keep safe, floors and furniture to protect, and in many Miami condos, building rules about access, elevators and working hours.',
      'Our residential service adapts to the type of home you have. Single-family homes often have long flex duct runs in a hot attic. Condos and apartments usually have a closet air handler with short duct runs above the ceiling. Townhomes fall somewhere in between. We plan each visit around your layout.',
      `This page is for homeowners and renters. For an overview of how we clean ductwork, see our main ${a('/air-duct-cleaning/', 'air duct cleaning')} page.`,
    ],
    componentsHeading: 'What we clean in your home',
    components: [
      { title: 'Bedroom & living area supplies', text: 'Every supply run and register in the home, including hard-to-reach high ceilings.' },
      { title: 'Central return & filter grille', text: 'The main return where pet hair and household dust collect fastest.' },
      { title: 'Attic flex duct', text: 'Flexible runs in single-family attics, cleaned with tools sized for flex liner.' },
      { title: 'Condo ceiling ducts', text: 'Short duct runs above drop ceilings and soffits in condos and apartments.' },
      { title: 'Floor registers', text: 'Floor vents in older homes, which tend to collect debris dropped from above.' },
    ],
    signsHeading: 'When homeowners typically call us',
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
    benefitsHeading: 'What homeowners can expect',
    benefits: [
      { title: 'Less dust around the house', text: 'Removing buildup from the ducts reduces how much dust gets blown back into living areas.' },
      { title: 'Clean, respectful service', text: 'Covered floors, cleaned-up work areas and no debris left behind.' },
      { title: 'Pet-friendly scheduling', text: 'We work with you to keep pets comfortable and away from the equipment.' },
      { title: 'Condo-ready', text: 'We coordinate with building management on access, parking and work hours.' },
    ],
    faqs: [
      { q: 'Do I need to be home during the cleaning?', a: 'An adult should be home to let us in and do the walkthrough at the start and end. You don’t need to stay in the room while we work.' },
      { q: 'How do you protect my floors and furniture?', a: 'We cover floors and work areas, and the duct system stays under negative pressure so debris is pulled into our equipment instead of into your home.' },
      { q: 'Can you clean ducts in a condo or high-rise?', a: 'Yes. We regularly work in condos and coordinate with building management on elevator use, parking and allowed work hours.' },
      { q: 'Is duct cleaning safe with pets in the house?', a: 'Yes. We ask that pets be kept in a separate room while equipment is running so they stay calm and safe.' },
      { q: 'How long does it take to clean a typical home?', a: 'Most condos and average-size homes take a few hours. Larger homes with multiple AC systems take longer.' },
    ],
    related: ['air-duct-cleaning', 'air-duct-sanitizing', 'air-duct-inspection', 'hvac-cleaning', 'dryer-vent-cleaning'],
  },
  {
    slug: 'commercial-air-duct-cleaning',
    path: '/commercial-air-duct-cleaning/',
    name: 'Commercial Air Duct Cleaning',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'building',
    card: 'Ductwork cleaning for offices, restaurants, retail and managed buildings, scheduled around your business hours.',
    image: negativeAirLadder,
    imageAlt: 'Purix technician on a ladder with a negative-air hose connected to a ceiling duct',
    secondImage: brandedVan,
    secondImageAlt: 'Purix Air Solution service van',
    metaTitle: 'Commercial Air Duct Cleaning Miami, FL | Purix',
    metaDescription:
      'Commercial air duct cleaning in Miami for offices, restaurants, retail, medical suites and managed buildings. After-hours scheduling available. Call (305) 449-9881.',
    h1: 'Commercial Air Duct Cleaning in Miami, FL',
    heroSubtitle: 'Duct cleaning for offices, restaurants, retail spaces and managed properties, scheduled to keep your business running.',
    introHeading: 'Built for larger systems and busy spaces',
    intro: [
      'Commercial HVAC systems move far more air than residential systems, often for longer hours and with more people coming and going. Their ductwork is larger, includes long rectangular trunk lines and multiple zones, and is often connected to rooftop or packaged units.',
      'Purix cleans commercial ductwork with equipment sized for these systems, and we plan the work around your hours, whether that means early mornings, evenings or days you’re closed.',
      `For the commercial HVAC equipment itself, see ${a('/hvac-cleaning/', 'HVAC cleaning')}. If your property has laundry equipment, we also offer ${a('/commercial-dryer-vent-cleaning/', 'commercial dryer vent cleaning')}.`,
    ],
    componentsHeading: 'Commercial ductwork we clean',
    components: [
      { title: 'Rectangular trunk lines', text: 'Large sheet-metal mains that feed multiple branches and zones.' },
      { title: 'Ceiling diffusers & returns', text: 'Diffusers and return grilles in drop ceilings and open ceilings.' },
      { title: 'Exposed spiral duct', text: 'Round spiral duct common in restaurants, retail and open-plan offices.' },
      { title: 'Rooftop & packaged unit connections', text: 'Supply and return plenums connected to rooftop and packaged equipment.' },
      { title: 'Multi-zone systems', text: 'Larger floor plans served by several systems or zones.' },
    ],
    signsHeading: 'Signs it’s time for commercial duct cleaning',
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
    benefitsHeading: 'Why businesses choose Purix',
    benefits: [
      { title: 'Flexible scheduling', text: 'Early, late and off-day appointments to keep your doors open.' },
      { title: 'Equipment for larger systems', text: 'Collection units and tools sized for commercial trunk lines.' },
      { title: 'Cleaner-looking spaces', text: 'Less dust on diffusers and surfaces near the vents.' },
      { title: 'Clear communication', text: 'A walkthrough of what was cleaned and what we found.' },
    ],
    faqs: [
      { q: 'Can you clean ducts outside business hours?', a: 'Yes. We can schedule work early in the morning, in the evening or on days you’re closed.' },
      { q: 'What types of businesses do you work with?', a: 'Offices, restaurants, retail stores, salons, medical and dental suites, gyms, warehouses and property-managed buildings.' },
      { q: 'How often should commercial ducts be cleaned?', a: 'It depends on occupancy and use. Restaurants, gyms and high-traffic spaces generally need cleaning more often than standard offices.' },
      { q: 'Do you work with property managers?', a: 'Yes. We work with property managers and owners on single suites and multi-unit buildings.' },
    ],
    related: ['air-duct-cleaning', 'hvac-cleaning', 'air-duct-inspection', 'commercial-dryer-vent-cleaning'],
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
    metaTitle: 'Air Duct Sanitizing Miami | Duct Odor Treatment | Purix',
    metaDescription:
      'Air duct sanitizing in Miami: an antimicrobial treatment applied after duct cleaning to help reduce pet, smoke and stale odors in ductwork. Call (305) 449-9881.',
    h1: 'Air Duct Sanitizing in Miami, FL',
    heroSubtitle: 'An antimicrobial treatment applied to your ductwork after cleaning to help reduce lingering odors.',
    introHeading: 'What air duct sanitizing is, and when it makes sense',
    intro: [
      'Sometimes a home still has a smell after its ducts are cleaned, such as pet odor, old smoke, or the stale smell of a system that sat unused. Air duct sanitizing is an optional treatment that follows a full duct cleaning. We apply a professional antimicrobial product to the duct surfaces to help reduce odor-causing bacteria.',
      `Sanitizing is not a substitute for cleaning, because the product works on clean surfaces, not on top of dust. It also isn’t the same as cleaning the AC equipment. If the smell seems to come from the air handler, coil or drain pan, ${a('/hvac-mold-cleaning/', 'HVAC mold cleaning')} or ${a('/ac-coil-cleaning/', 'AC coil cleaning')} is the better fit.`,
    ],
    componentsHeading: 'Where the treatment is applied',
    components: [
      { title: 'Supply duct interiors', text: 'The duct runs that deliver air to each room.' },
      { title: 'Return duct interiors', text: 'The return side, where odors from the living space are pulled into the system.' },
      { title: 'Accessible plenums', text: 'The supply and return plenums connected to the air handler, where accessible.' },
      { title: 'Registers & grilles', text: 'Vent covers are cleaned and treated before being reinstalled.' },
    ],
    signsHeading: 'When to consider sanitizing',
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
    benefitsHeading: 'What sanitizing can do',
    benefits: [
      { title: 'Help with lingering odors', text: 'Targets odor-causing bacteria on duct surfaces after cleaning.' },
      { title: 'A fresher start', text: 'Useful after move-ins, renovations or a system that sat unused.' },
      { title: 'Applied as directed', text: 'Professional products, used according to label directions.' },
      { title: 'Paired with cleaning', text: 'Done in the same visit as your duct cleaning.' },
    ],
    faqs: [
      { q: 'Is sanitizing the same as duct cleaning?', a: 'No. Cleaning removes dust and debris. Sanitizing is an optional treatment applied after cleaning to help reduce odor-causing bacteria on duct surfaces.' },
      { q: 'Does air duct sanitizing remove mold?', a: 'Sanitizing isn’t mold removal. If you suspect microbial growth on AC components, see our HVAC mold cleaning service. Confirming whether mold is present requires testing by a qualified professional.' },
      { q: 'Is the product safe for kids and pets?', a: 'We use professional products according to label directions and will tell you how long to stay out of treated areas before we begin.' },
      { q: 'Will sanitizing permanently stop odors?', a: 'It helps with odors coming from the ductwork. If there’s an ongoing source, such as moisture or smoking indoors, odors can return.' },
    ],
    related: ['air-duct-cleaning', 'hvac-mold-cleaning', 'residential-air-duct-cleaning', 'ac-coil-cleaning'],
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
    metaTitle: 'Air Duct Inspection Miami, FL | AC Duct Check | Purix',
    metaDescription:
      'Air duct inspection in Miami. We check registers, returns and accessible ductwork for buildup, damage and disconnections. Call (305) 449-9881.',
    h1: 'Air Duct Inspection in Miami, FL',
    heroSubtitle: 'Find out what’s really going on in your ductwork before you decide on cleaning, repair or replacement.',
    introHeading: 'Know the condition of your ducts before you spend',
    intro: [
      'Not every airflow problem or dusty vent means you need the same fix. Some systems just need cleaning. Others have crushed, torn or disconnected duct runs that no amount of cleaning will solve. An inspection tells you which situation you’re in.',
      `We look at your registers, returns and the ductwork we can access, then explain what we found and what we’d recommend, whether that’s ${a('/air-duct-cleaning/', 'air duct cleaning')}, ${a('/ac-duct-replacement/', 'AC duct replacement')} or nothing at all.`,
    ],
    componentsHeading: 'What we check',
    components: [
      { title: 'Supply registers & returns', text: 'Buildup, airflow at each vent, and the condition of grilles and boots.' },
      { title: 'Accessible duct runs', text: 'Attic, ceiling and soffit runs we can reach: crushing, kinks, tears and sagging.' },
      { title: 'Connections & seals', text: 'Loose or disconnected joints that leak air into the attic or ceiling.' },
      { title: 'Insulation & condensation', text: 'Damaged duct insulation and signs of sweating or water staining.' },
      { title: 'Air handler surroundings', text: 'Visible buildup or moisture around the air handler and return plenum.' },
    ],
    signsHeading: 'Good times to schedule an inspection',
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
    benefitsHeading: 'Why an inspection helps',
    benefits: [
      { title: 'The right fix the first time', text: 'Avoid paying for cleaning when the real problem is damaged duct, or the other way around.' },
      { title: 'Clear priorities', text: 'Know what needs attention now and what can wait.' },
      { title: 'Useful for home buyers', text: 'Understand the condition of the ductwork in a home you’re buying.' },
      { title: 'No-pressure advice', text: 'We explain your options and let you decide.' },
    ],
    faqs: [
      { q: 'What does an air duct inspection include?', a: 'We check supply registers, returns, accessible duct runs, connections and insulation, and look for visible buildup or moisture around the air handler.' },
      { q: 'Can you tell if I have mold during an inspection?', a: 'We can point out visible buildup, moisture and conditions where microbial growth is more likely, but mold can’t be confirmed by looking. Confirmation requires sampling and lab analysis by a qualified professional.' },
      { q: 'Do I need an inspection before duct cleaning?', a: 'We inspect as the first step of every cleaning. A stand-alone inspection is useful if you’re unsure what the problem is or are comparing cleaning against replacement.' },
      { q: 'Is an inspection useful when buying a home?', a: 'Yes. It helps you understand the condition of the ductwork and whether cleaning or repairs may be needed.' },
    ],
    related: ['air-duct-cleaning', 'ac-duct-replacement', 'hvac-cleaning', 'hvac-mold-cleaning'],
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
    metaTitle: 'AC Duct Replacement Miami, FL | Flex Duct Replacement | Purix',
    metaDescription:
      'AC duct replacement in Miami for crushed, torn, disconnected or sweating ductwork, from single runs to full systems. Call (305) 449-9881.',
    h1: 'AC Duct Replacement in Miami, FL',
    heroSubtitle: 'When ductwork is damaged beyond cleaning, we replace the sections that need it, or the whole system.',
    introHeading: 'When cleaning isn’t enough',
    intro: [
      'Ductwork doesn’t last forever. In South Florida attics and ceilings, flex duct can be crushed during other work, pulled loose from its connections, or have its insulation break down from heat and humidity. Damaged ducts can leak cooled air into the attic, sweat and drip onto ceilings, or leave rooms with little airflow.',
      `Purix replaces damaged AC ductwork, whether that’s one torn run or an entire system. If you’re not sure whether you need replacement or just ${a('/air-duct-cleaning/', 'cleaning')}, start with an ${a('/air-duct-inspection/', 'air duct inspection')}.`,
    ],
    componentsHeading: 'What we replace',
    components: [
      { title: 'Flex duct runs', text: 'Crushed, torn, kinked or deteriorated flexible duct between the plenum and each room.' },
      { title: 'Connections & collars', text: 'Loose or failed connections at the plenum, takeoffs and registers.' },
      { title: 'Register boots', text: 'The fittings where duct meets the ceiling, wall or floor register.' },
      { title: 'Duct insulation', text: 'Insulated duct where the jacket or insulation has broken down and is sweating.' },
      { title: 'Supports & straps', text: 'Proper support so new runs don’t sag or kink.' },
    ],
    signsHeading: 'Signs your ductwork may need replacing',
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
    benefitsHeading: 'What new ductwork can do',
    benefits: [
      { title: 'Air reaches the rooms', text: 'Sealed, connected ducts deliver cooled air to the rooms instead of the attic.' },
      { title: 'Less sweating', text: 'Properly insulated duct reduces condensation and ceiling drips.' },
      { title: 'Fewer weak rooms', text: 'Replacing crushed or disconnected runs restores airflow to affected rooms.' },
      { title: 'A clean start', text: 'New ductwork starts clean, with no years of buildup inside.' },
    ],
    faqs: [
      { q: 'Should I repair or replace my ductwork?', a: 'If the damage is limited to one or two runs, replacing just those sections is often enough. If problems are widespread or the system is old and deteriorating, full replacement can make more sense. We’ll explain both options.' },
      { q: 'How long does duct replacement take?', a: 'Replacing a few runs can often be done in a day. Full-system replacement takes longer, depending on the size of the home and access to the ductwork.' },
      { q: 'Will new ducts lower my energy bill?', a: 'Sealed, properly connected ducts deliver more of your system’s air where it’s needed. Actual savings depend on your system, your home and how much leakage there was before.' },
      { q: 'Can you replace just one section?', a: 'Yes. We often replace individual crushed or disconnected runs without touching the rest of the system.' },
    ],
    related: ['air-duct-inspection', 'air-duct-cleaning', 'hvac-cleaning'],
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
    metaTitle: 'HVAC Cleaning Miami, FL | AC System Cleaning | Purix',
    metaDescription:
      'HVAC cleaning in Miami for the inside of your AC system: evaporator coil, air handler cabinet, blower wheel, drain pan and plenums. Call (305) 449-9881.',
    h1: 'HVAC Cleaning in Miami, FL',
    heroSubtitle: 'Cleaning for the equipment inside your AC system, the parts that move, cool and dehumidify every bit of air in your home.',
    introHeading: 'Your AC equipment collects buildup too',
    intro: [
      'Ductwork gets most of the attention, but the equipment at the center of your system also collects dust and debris. In Miami’s climate, the evaporator coil and drain pan are wet for much of the year. Dust that reaches them sticks, builds up, and can restrict airflow or contribute to musty odors.',
      `HVAC cleaning focuses on that equipment rather than the ducts. It covers the coil, blower, air handler cabinet, drain pan and plenums. We often pair it with ${a('/air-duct-cleaning/', 'air duct cleaning')} so the whole air path is clean. Each component also has its own page: ${a('/ac-coil-cleaning/', 'AC coil cleaning')}, ${a('/air-handler-cleaning/', 'air handler cleaning')} and ${a('/blower-wheel-cleaning/', 'blower wheel cleaning')}.`,
    ],
    componentsHeading: 'Components included in HVAC cleaning',
    components: [
      { title: 'Evaporator coil', text: 'The indoor coil that cools and dehumidifies the air. See AC coil cleaning.' },
      { title: 'Blower wheel & housing', text: 'The fan that moves air through the system. See blower wheel cleaning.' },
      { title: 'Air handler cabinet', text: 'Interior surfaces, panels and the filter rack. See air handler cleaning.' },
      { title: 'Drain pan & condensate line', text: 'Where moisture from the coil collects and drains away.' },
      { title: 'Supply & return plenums', text: 'The boxes connecting the air handler to the ductwork.' },
    ],
    signsHeading: 'Signs your HVAC system needs cleaning',
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
    benefitsHeading: 'What clean equipment can do',
    benefits: [
      { title: 'Less airflow restriction', text: 'A clean coil and blower move air with less resistance.' },
      { title: 'Less strain on the system', text: 'Equipment that isn’t fighting buildup doesn’t have to work as hard.' },
      { title: 'Fewer buildup-related odors', text: 'Removing buildup from wet components can reduce musty smells.' },
      { title: 'A full-system clean', text: 'Paired with duct cleaning, the whole air path is cleaned.' },
    ],
    faqs: [
      { q: 'What’s the difference between HVAC cleaning and air duct cleaning?', a: 'HVAC cleaning focuses on the equipment, such as the coil, blower, air handler and drain pan. Air duct cleaning focuses on the ductwork and vents. They’re often done together.' },
      { q: 'Does HVAC cleaning replace regular AC maintenance?', a: 'No. HVAC cleaning focuses on removing buildup. Refrigerant, electrical and mechanical service should still be handled by your HVAC service company.' },
      { q: 'How often should my AC system be cleaned?', a: 'Many systems benefit from equipment cleaning every few years, and more often if you notice odors, weak airflow or visible buildup.' },
      { q: 'Do you clean commercial HVAC systems?', a: 'Yes. We clean air handlers and related components for offices, restaurants and other commercial properties.' },
    ],
    related: ['ac-coil-cleaning', 'air-handler-cleaning', 'blower-wheel-cleaning', 'hvac-mold-cleaning', 'air-duct-cleaning'],
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
    metaTitle: 'HVAC Mold Cleaning Miami | AC & Duct Mold Cleaning | Purix',
    metaDescription:
      'HVAC mold cleaning in Miami for musty AC odors and suspected microbial buildup on coils, drain pans, blowers and accessible ductwork. Call (305) 449-9881.',
    h1: 'HVAC Mold Cleaning in Miami, FL',
    heroSubtitle: 'Musty smell from your AC? We clean the components and accessible ductwork where moisture and buildup collect.',
    introHeading: 'Why AC systems in Miami get musty',
    intro: [
      'Your air conditioner cools air by passing it over a cold coil, and in Miami’s humidity that coil is wet much of the time. Water drips into the drain pan, and the air handler cabinet stays damp. When dust and organic debris settle on those wet surfaces, they can support microbial growth. That’s one of the most common causes of the musty smell people notice when the AC turns on.',
      'Our HVAC mold cleaning service targets those areas: the evaporator coil, drain pan, blower, air handler cabinet, plenums and accessible ductwork where buildup is present. We clean the affected surfaces, apply an antimicrobial product where appropriate, and point out moisture problems we see so they can be corrected.',
      `For general system cleaning without odor or microbial concerns, see ${a('/hvac-cleaning/', 'HVAC cleaning')}. For odors in the ductwork only, ${a('/air-duct-sanitizing/', 'air duct sanitizing')} may be enough.`,
    ],
    componentsHeading: 'Areas we clean',
    components: [
      { title: 'Evaporator coil', text: 'The wet coil surface where buildup often starts.' },
      { title: 'Drain pan & condensate line', text: 'Standing water and sludge in the pan, and a slow or clogged drain.' },
      { title: 'Blower wheel & housing', text: 'Buildup carried from the coil area onto the fan blades.' },
      { title: 'Air handler cabinet', text: 'Interior panels and surfaces inside the unit.' },
      { title: 'Plenums & accessible ductwork', text: 'The plenums and the duct sections closest to the equipment.' },
    ],
    signsHeading: 'Signs worth having checked',
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
    benefitsHeading: 'What this service can and can’t do',
    benefits: [
      { title: 'Removes visible buildup', text: 'Buildup is cleaned from the AC components and accessible ductwork we work on.' },
      { title: 'Can reduce musty odors', text: 'When the odor comes from buildup in the HVAC system, cleaning often helps.' },
      { title: 'Highlights moisture sources', text: 'Fixing the moisture problem is key to keeping buildup from returning.' },
      { title: 'Honest limits', text: 'We don’t test for mold, and cleaning isn’t a guarantee that all growth is gone or that health symptoms will change.' },
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
    metaTitle: 'AC Coil Cleaning Miami, FL | Evaporator Coil Cleaning | Purix',
    metaDescription:
      'Evaporator coil cleaning in Miami. We clear dust and buildup from the indoor AC coil and drain pan to reduce airflow restriction. Call (305) 449-9881.',
    h1: 'AC Coil Cleaning in Miami, FL',
    heroSubtitle: 'Indoor evaporator coil cleaning that clears the buildup restricting your AC’s airflow.',
    introHeading: 'Why the evaporator coil gets dirty',
    intro: [
      'The evaporator coil sits inside your air handler, and every bit of air your AC moves passes through its thin metal fins. Because the coil is cold and wet while the system runs, dust that gets past the filter sticks to it. Over time it can form a mat across the coil face.',
      `A dirty coil restricts airflow and makes it harder for the system to remove heat and humidity. Coil cleaning is one part of a full ${a('/hvac-cleaning/', 'HVAC cleaning')}, and it’s often done together with ${a('/blower-wheel-cleaning/', 'blower wheel cleaning')}, since both affect how much air reaches your rooms.`,
    ],
    componentsHeading: 'What coil cleaning includes',
    components: [
      { title: 'Coil face & fins', text: 'Dust and debris are removed from the coil surface and between the fins.' },
      { title: 'Coil drain pan', text: 'The pan under the coil is cleaned of sludge and standing water.' },
      { title: 'Condensate drain connection', text: 'We check that water drains freely from the pan.' },
      { title: 'Coil cabinet area', text: 'Surrounding surfaces inside the coil compartment.' },
    ],
    signsHeading: 'Signs of a dirty evaporator coil',
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
    benefitsHeading: 'What a clean coil can do',
    benefits: [
      { title: 'Less airflow restriction', text: 'Air passes through the coil more freely once buildup is removed.' },
      { title: 'Better heat transfer', text: 'A clean coil surface exchanges heat more effectively than a matted one.' },
      { title: 'Cleaner drain pan', text: 'Less sludge and standing water under the coil.' },
      { title: 'Fewer coil-related odors', text: 'Removing buildup from the wet coil can reduce musty smells.' },
    ],
    faqs: [
      { q: 'What’s the difference between the evaporator coil and the condenser coil?', a: 'The evaporator coil is indoors, inside the air handler, and cools the air. The condenser coil is in the outdoor unit and releases heat outside. This service covers the indoor evaporator coil.' },
      { q: 'Can a dirty coil cause my AC to freeze?', a: 'A heavily restricted coil can contribute to freezing, but so can refrigerant and other mechanical problems. If your system is icing, have your HVAC service company check it as well.' },
      { q: 'How often should the evaporator coil be cleaned?', a: 'It depends on filter maintenance, run time and household dust. Many systems benefit from a coil cleaning every few years, or whenever buildup is visible.' },
      { q: 'Can I clean the coil myself?', a: 'Coil fins are thin and bend easily, and the coil sits close to electrical parts. Professional cleaning reduces the risk of damage.' },
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
    metaTitle: 'Air Handler Cleaning Miami, FL | Purix',
    metaDescription:
      'Air handler cleaning in Miami homes, condos and businesses. We clean the cabinet interior, filter rack, return plenum and connections. Call (305) 449-9881.',
    h1: 'Air Handler Cleaning in Miami, FL',
    heroSubtitle: 'Cleaning for the indoor AC cabinet at the center of your system, whether it’s in a condo closet, garage or attic.',
    introHeading: 'The box every bit of air passes through',
    intro: [
      'The air handler is the indoor cabinet that houses your evaporator coil and blower and connects to the supply and return ductwork. In many Miami condos and apartments, it sits in a closet right next to living space. In houses, it may be in a garage, utility room or attic.',
      `Over time, the inside of the cabinet collects dust, and the area around the filter rack and return plenum can get especially dirty. Air handler cleaning focuses on the cabinet itself. The components inside it have their own services: ${a('/ac-coil-cleaning/', 'AC coil cleaning')} and ${a('/blower-wheel-cleaning/', 'blower wheel cleaning')}. All of them are included in a full ${a('/hvac-cleaning/', 'HVAC cleaning')}.`,
    ],
    componentsHeading: 'Parts of the air handler we clean',
    components: [
      { title: 'Cabinet interior', text: 'Interior panels and surfaces where dust settles.' },
      { title: 'Filter rack', text: 'The slot or grille where the filter sits, and the area around it.' },
      { title: 'Return plenum', text: 'Where return air enters the cabinet, which is often the dirtiest section.' },
      { title: 'Supply plenum connection', text: 'Where conditioned air leaves the cabinet into the ductwork.' },
      { title: 'Access panels & seals', text: 'Panels are cleaned and reinstalled so they close properly.' },
    ],
    signsHeading: 'Signs your air handler needs cleaning',
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
    benefitsHeading: 'Why it’s worth doing',
    benefits: [
      { title: 'A cleaner core system', text: 'The cabinet that every bit of air passes through is free of buildup.' },
      { title: 'Better filter fit', text: 'A clean filter rack helps the filter seat properly.' },
      { title: 'Fewer closet odors', text: 'Removing dust and buildup can reduce smells from the AC closet.' },
      { title: 'Condo-friendly', text: 'Compact closet units cleaned with care for the living space around them.' },
    ],
    faqs: [
      { q: 'What is an air handler?', a: 'It’s the indoor part of a central AC system. The cabinet houses the evaporator coil and blower and connects to your ductwork.' },
      { q: 'Is air handler cleaning the same as HVAC cleaning?', a: 'Air handler cleaning is one part of HVAC cleaning. A full HVAC cleaning also includes the coil, blower wheel and drain pan.' },
      { q: 'Can you clean air handlers in condo closets?', a: 'Yes. Closet air handlers are very common in Miami condos, and we protect the surrounding area while we work.' },
      { q: 'Should I clean the ducts at the same time?', a: 'Often, yes. If the air handler is dirty, the return and supply ducts connected to it usually are too.' },
    ],
    related: ['hvac-cleaning', 'ac-coil-cleaning', 'blower-wheel-cleaning', 'air-duct-cleaning'],
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
    metaTitle: 'Blower Wheel Cleaning Miami, FL | AC Blower Cleaning | Purix',
    metaDescription:
      'AC blower wheel cleaning in Miami. We remove packed buildup from the blower wheel and housing to reduce airflow restriction. Call (305) 449-9881.',
    h1: 'Blower Wheel Cleaning in Miami, FL',
    heroSubtitle: 'Clearing the buildup packed into the fan that moves every bit of air through your AC system.',
    introHeading: 'Small blades, big impact on airflow',
    intro: [
      'The blower wheel, sometimes called a squirrel cage, is the fan inside your air handler. Its rows of small curved blades push air across the coil and into your ductwork. When dust gets past the filter, it packs into the curve of each blade. In humid conditions, that buildup can become sticky and dense.',
      `A loaded blower wheel moves less air, and uneven buildup can make it run less smoothly. Blower cleaning is part of a full ${a('/hvac-cleaning/', 'HVAC cleaning')} and pairs naturally with ${a('/ac-coil-cleaning/', 'AC coil cleaning')}, since both affect how much air your system can move.`,
    ],
    componentsHeading: 'What blower cleaning includes',
    components: [
      { title: 'Blower wheel blades', text: 'Buildup is removed from each curved blade.' },
      { title: 'Blower housing', text: 'The scroll-shaped housing around the wheel is cleaned.' },
      { title: 'Motor exterior', text: 'Dust is cleared from the outside of the motor.' },
      { title: 'Blower compartment', text: 'Surrounding surfaces inside the blower section.' },
    ],
    signsHeading: 'Signs your blower wheel needs cleaning',
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
    benefitsHeading: 'What a clean blower can do',
    benefits: [
      { title: 'More air movement', text: 'Clean blades move air more effectively than packed ones.' },
      { title: 'Smoother operation', text: 'Removing uneven buildup can reduce vibration and noise.' },
      { title: 'Less buildup downstream', text: 'Less debris gets blown into the supply ductwork.' },
      { title: 'Pairs with coil cleaning', text: 'Cleaning both restores the main path air takes through the unit.' },
    ],
    faqs: [
      { q: 'What is a blower wheel?', a: 'It’s the cylindrical fan inside your air handler with rows of small curved blades. It moves air across the coil and into the ductwork.' },
      { q: 'Does the blower have to be removed to clean it?', a: 'For a thorough cleaning, removal is best when the unit’s design allows. We’ll let you know what’s possible with your system.' },
      { q: 'Can a dirty blower wheel cause noise?', a: 'Uneven buildup can throw the wheel out of balance and cause vibration. Noise can also come from motor or mechanical issues, which your HVAC service company should check.' },
      { q: 'Do you repair blower motors?', a: 'We clean the blower assembly. Motor diagnosis and replacement should be handled by your HVAC service company.' },
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
    metaTitle: 'Dryer Vent Cleaning Miami, FL | Purix',
    metaDescription:
      'Dryer vent cleaning in Miami homes and condos. We clear lint from the full vent run, from the dryer to the wall or roof cap. Call (305) 449-9881.',
    h1: 'Dryer Vent Cleaning in Miami, FL',
    heroSubtitle: 'Full-length lint removal from the back of your dryer to the outside vent cap.',
    introHeading: 'Your lint trap doesn’t catch it all',
    intro: [
      'Lint that gets past the dryer’s lint trap ends up in the vent line running through your wall, ceiling or roof. Over months of laundry it builds up, narrows the vent and traps hot, moist air inside the dryer.',
      'The U.S. Fire Administration reports that failure to clean is the leading cause of home clothes dryer fires. A clogged vent also means longer cycles and extra wear on the dryer. Purix clears the entire vent run, including long condo runs and roof terminations.',
      `If your vent is damaged, too long or made of foil or vinyl, see ${a('/dryer-vent-installation/', 'dryer vent installation')}. For laundromats, hotels and multi-unit buildings, see ${a('/commercial-dryer-vent-cleaning/', 'commercial dryer vent cleaning')}.`,
    ],
    componentsHeading: 'What we clean',
    components: [
      { title: 'Transition duct', text: 'The connector between the dryer and the wall.' },
      { title: 'Vent run', text: 'The full length of duct through the wall, ceiling or attic.' },
      { title: 'Exterior or roof cap', text: 'The vent hood or roof cap, including the flap or screen.' },
      { title: 'Dryer exhaust outlet', text: 'Lint buildup at the back of the dryer.' },
    ],
    signsHeading: 'Signs your dryer vent is clogged',
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
    benefitsHeading: 'Why it matters',
    benefits: [
      { title: 'Less lint buildup', text: 'Removing lint addresses the leading cause of dryer fires reported by the USFA.' },
      { title: 'Shorter drying times', text: 'Moist air can escape, so loads dry faster.' },
      { title: 'Less wear on the dryer', text: 'Less heat and strain on the dryer’s components.' },
      { title: 'Condo & roof vents', text: 'Long runs and roof caps cleaned safely.' },
    ],
    faqs: [
      { q: 'How often should dryer vents be cleaned?', a: 'At least once a year for most homes. Large households, pets and long or roof-terminated vents may need more frequent cleaning.' },
      { q: 'Isn’t cleaning the lint trap enough?', a: 'No. The lint trap catches only part of the lint. The rest builds up inside the vent and has to be cleaned out of the duct itself.' },
      { q: 'Do you clean dryer vents in condos?', a: 'Yes. Many Miami condos have long vent runs, and we can coordinate access with building management.' },
      { q: 'How long does dryer vent cleaning take?', a: 'Most cleanings take about an hour. Long runs and roof vents can take longer.' },
    ],
    related: ['dryer-vent-installation', 'commercial-dryer-vent-cleaning', 'air-duct-cleaning'],
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
    metaTitle: 'Dryer Vent Installation Miami, FL | Purix',
    metaDescription:
      'Dryer vent installation in Miami: new and rerouted vent runs, metal transition ducts and new wall or roof caps for homes and condos. Call (305) 449-9881.',
    h1: 'Dryer Vent Installation in Miami, FL',
    heroSubtitle: 'New, rerouted or upgraded dryer vents, from metal transition ducts to new wall and roof caps.',
    introHeading: 'When a vent needs more than cleaning',
    intro: [
      'Some dryer vents can’t be fixed with a cleaning. Plastic or foil transition hoses crush and trap lint. Runs with too many turns clog quickly. Missing or broken vent caps let in pests and weather. And when you move your laundry area, you need a new vent route.',
      `We install new dryer vent runs and components following the dryer manufacturer’s specifications. If your existing vent is in good shape and just full of lint, ${a('/dryer-vent-cleaning/', 'dryer vent cleaning')} is all you need.`,
    ],
    componentsHeading: 'What we install',
    components: [
      { title: 'Metal transition ducts', text: 'Replace foil or vinyl hoses behind the dryer.' },
      { title: 'New vent runs', text: 'New duct routes through walls, ceilings or attics.' },
      { title: 'Rerouted vents', text: 'Shorter, straighter routes for vents with too many turns.' },
      { title: 'Wall & roof caps', text: 'New exterior hoods and roof caps with working flaps.' },
    ],
    signsHeading: 'When to consider a new dryer vent',
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
    benefitsHeading: 'Benefits of a properly installed vent',
    benefits: [
      { title: 'Better airflow', text: 'A shorter, smoother route moves lint and moist air outside.' },
      { title: 'Slower lint buildup', text: 'Smooth metal duct collects less lint than ribbed foil or vinyl.' },
      { title: 'Weather & pest protection', text: 'A working cap keeps out rain, insects and nesting birds.' },
      { title: 'Easier future cleaning', text: 'A well-routed vent is easier to inspect and clean.' },
    ],
    faqs: [
      { q: 'Rigid or flexible dryer vent: which is better?', a: 'Smooth metal duct is generally preferred for the vent run because it collects less lint. A short metal transition duct connects the dryer to the wall.' },
      { q: 'How long can a dryer vent be?', a: 'It depends on your dryer manufacturer’s specifications and the number of turns. We plan the route so it stays within those limits.' },
      { q: 'Can you vent a dryer through the roof?', a: 'Yes, when that’s the best route available. Roof vents need a proper roof cap and regular cleaning.' },
      { q: 'Do you install dryer vents in condos?', a: 'We can, depending on building rules. We coordinate with building management where needed.' },
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
    metaTitle: 'Commercial Dryer Vent Cleaning Miami, FL | Purix',
    metaDescription:
      'Commercial dryer vent cleaning in Miami for laundromats, hotels, salons, gyms and condo buildings. Scheduled service around your hours. Call (305) 449-9881.',
    h1: 'Commercial Dryer Vent Cleaning in Miami',
    heroSubtitle: 'Scheduled lint removal for businesses and buildings that run dryers all day.',
    introHeading: 'Commercial dryers produce lint fast',
    intro: [
      'Laundromats, hotels, salons, gyms and multi-unit buildings run dryers far more than a household does, and their vents fill with lint much faster. Many condo and apartment buildings also have long or shared vent runs that individual residents can’t reach.',
      `Purix cleans commercial and multi-unit dryer vents on a schedule that fits your operation. For the building’s HVAC ductwork, see ${a('/commercial-air-duct-cleaning/', 'commercial air duct cleaning')}.`,
    ],
    componentsHeading: 'Commercial vent systems we clean',
    components: [
      { title: 'Commercial dryer vents', text: 'High-volume dryer exhaust runs in laundromats and on-premise laundries.' },
      { title: 'Multi-unit building vents', text: 'Individual unit vents in condo and apartment buildings.' },
      { title: 'Roof & wall terminations', text: 'Roof caps and wall hoods on commercial buildings.' },
      { title: 'Long horizontal runs', text: 'Extended runs through ceilings and service corridors.' },
    ],
    signsHeading: 'Signs your commercial dryer vents need service',
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
    benefitsHeading: 'Why businesses schedule regular cleaning',
    benefits: [
      { title: 'Less lint buildup', text: 'Regular cleaning keeps lint from accumulating in high-use vents.' },
      { title: 'Faster turnaround', text: 'Clear vents help dryers finish cycles on time.' },
      { title: 'Less equipment strain', text: 'Dryers don’t have to work against blocked vents.' },
      { title: 'One point of contact', text: 'For property managers handling many units.' },
    ],
    faqs: [
      { q: 'How often should commercial dryer vents be cleaned?', a: 'It depends on usage. High-volume operations like laundromats and hotels often need cleaning much more often than a household.' },
      { q: 'Do you clean dryer vents in condo and apartment buildings?', a: 'Yes. We work with property managers and associations to clean vents across multiple units.' },
      { q: 'Can you work outside business hours?', a: 'Yes. We schedule around your operating hours where possible.' },
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
    metaTitle: 'Attic Insulation Removal Miami, FL | Purix',
    metaDescription:
      'Attic insulation removal in Miami for old, wet, compressed or rodent-contaminated insulation. Vacuum removal, bagged and hauled away. Call (305) 449-9881.',
    h1: 'Attic Insulation Removal in Miami, FL',
    heroSubtitle: 'Removal of old, damaged or contaminated attic insulation, so your attic is clean and ready for what comes next.',
    introHeading: 'When old insulation has to come out',
    intro: [
      'Attic insulation doesn’t last forever. In South Florida it can get soaked by roof leaks or storm damage, flattened by years of foot traffic and stored items, or contaminated by rodents and insects. Damaged insulation loses much of its value, and contaminated insulation is something most homeowners want gone.',
      'Purix removes old attic insulation with a high-powered insulation vacuum. The material is pulled out of the attic through a hose and collected in bags outside, so it doesn’t travel through your living space. Once it’s out, we clear remaining debris so the attic is clean.',
      `This page covers removal only. To remove the old insulation and install new insulation in one project, see ${a('/insulation-replacement/', 'insulation replacement')}. If your existing insulation is in good shape and just too thin, ${a('/blown-in-attic-insulation/', 'blown-in attic insulation')} can be added on top without removal.`,
    ],
    componentsHeading: 'What we remove',
    components: [
      { title: 'Blown-in insulation', text: 'Loose-fill fiberglass or cellulose spread across the attic floor.' },
      { title: 'Batt insulation', text: 'Fiberglass batts between ceiling joists, including wet or matted batts.' },
      { title: 'Contaminated material', text: 'Insulation fouled by rodent or pest droppings and nesting.' },
      { title: 'Attic debris', text: 'Loose debris left on the attic floor once the insulation is out.' },
    ],
    signsHeading: 'Signs your attic insulation should be removed',
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
    benefitsHeading: 'What removal gets you',
    benefits: [
      { title: 'Contaminated material gone', text: 'Insulation fouled by pests or water is taken out of the attic entirely.' },
      { title: 'A clean attic', text: 'A clear attic floor makes it easier to see the ceiling, wiring and ductwork.' },
      { title: 'Ready for new insulation', text: 'New insulation goes onto a clean surface instead of on top of a problem.' },
      { title: 'Easier attic work', text: 'Duct repairs and other attic jobs are easier without old insulation in the way.' },
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
    metaTitle: 'Blown-In Attic Insulation Miami, FL | Purix',
    metaDescription:
      'Blown-in attic insulation in Miami. Loose-fill insulation added evenly across the attic to reach the recommended depth and reduce heat gain. Call (305) 449-9881.',
    h1: 'Blown-In Attic Insulation in Miami, FL',
    heroSubtitle: 'Loose-fill insulation blown evenly across your attic to top up thin insulation or insulate an empty attic.',
    introHeading: 'Adding insulation where your attic needs it',
    intro: [
      'In Miami, the attic is one of the hottest places in the house. On a summer afternoon it can be far hotter than outside, and that heat pushes down through the ceiling into your living space. Attic insulation slows that heat down, but many homes have far less than recommended, or insulation that has settled over the years.',
      'Blown-in insulation is installed with a machine that blows loose-fill insulation through a hose into the attic. It spreads evenly between and over joists and fills gaps around wiring, pipes and framing that batts can miss. It can go on top of existing insulation that is dry and clean, or into an attic that has none.',
      `If your existing insulation is wet, contaminated or badly damaged, it should come out first. See ${a('/attic-insulation-removal/', 'attic insulation removal')} or ${a('/insulation-replacement/', 'insulation replacement')}, which handles removal and new insulation together.`,
    ],
    componentsHeading: 'What’s included',
    components: [
      { title: 'Depth assessment', text: 'We measure the existing insulation and recommend how much to add.' },
      { title: 'Loose-fill insulation', text: 'Insulation blown evenly across the attic floor to a consistent depth.' },
      { title: 'Hard-to-reach areas', text: 'Coverage around wiring, pipes, framing and attic edges.' },
      { title: 'Depth markers', text: 'Markers placed in the attic so you can see the installed depth.' },
    ],
    signsHeading: 'Signs your attic needs more insulation',
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
    benefitsHeading: 'What more insulation can do',
    benefits: [
      { title: 'Less heat from the attic', text: 'More insulation slows the heat that moves from a hot attic into your rooms.' },
      { title: 'More even temperatures', text: 'Rooms under the attic are often more comfortable with adequate insulation.' },
      { title: 'Less strain on the AC', text: 'When less heat comes through the ceiling, the AC has less to remove.' },
      { title: 'Fills gaps batts miss', text: 'Loose-fill settles around obstructions for more continuous coverage.' },
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
    metaTitle: 'Insulation Replacement Miami, FL | Attic Insulation | Purix',
    metaDescription:
      'Attic insulation replacement in Miami: old or damaged insulation removed and new blown-in insulation installed in one project. Call (305) 449-9881.',
    h1: 'Attic Insulation Replacement in Miami, FL',
    heroSubtitle: 'Out with the old, in with the new: removal of damaged attic insulation and installation of fresh insulation in one project.',
    introHeading: 'Removal and new insulation, handled together',
    intro: [
      'When attic insulation is wet, contaminated or worn out, adding more on top doesn’t fix the problem. The old material needs to come out, and new insulation needs to go in. Insulation replacement handles both in one coordinated project, so your attic isn’t left empty between jobs.',
      'We vacuum out the old insulation, clear the attic floor, and then blow in new insulation evenly to the recommended depth. Because the attic is empty in between, it’s also a good time to look at the condition of the ductwork, and we’ll point out any damaged or disconnected duct runs we see.',
      `For removal on its own, see ${a('/attic-insulation-removal/', 'attic insulation removal')}. To add insulation on top of existing insulation that’s still in good shape, see ${a('/blown-in-attic-insulation/', 'blown-in attic insulation')}. If attic ductwork needs work, ${a('/ac-duct-replacement/', 'AC duct replacement')} can be planned at the same time.`,
    ],
    componentsHeading: 'What the project covers',
    components: [
      { title: 'Old insulation removal', text: 'Existing insulation vacuumed out and bagged outside your home.' },
      { title: 'Attic clean-up', text: 'Remaining debris cleared from the attic floor.' },
      { title: 'Ductwork check', text: 'A look at the attic duct runs while they’re fully visible.' },
      { title: 'New blown-in insulation', text: 'Fresh loose-fill insulation installed to the recommended depth.' },
    ],
    signsHeading: 'When replacement makes more sense than a top-up',
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
    benefitsHeading: 'Why replace instead of covering it up',
    benefits: [
      { title: 'Problem material removed', text: 'Contaminated or water-damaged insulation is taken out, not buried.' },
      { title: 'Full, even coverage', text: 'New insulation goes onto a clean attic floor at a consistent depth.' },
      { title: 'One coordinated project', text: 'Removal and installation are scheduled together, so your attic isn’t left empty.' },
      { title: 'A good time for duct work', text: 'With the attic clear, ductwork is easier to inspect and repair.' },
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
