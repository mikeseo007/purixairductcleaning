import type { ImageMetadata } from 'astro';
import ceilingVentBrush from '../assets/images/ceiling-vent-brush-cleaning.webp';
import livingRoom from '../assets/images/technicians-living-room-duct-cleaning.png';
import technicianAttic from '../assets/images/technician-cleaning-attic-duct.jpg';
import brushCeiling from '../assets/images/technician-brush-ceiling-vent.webp';
import commercialSpiral from '../assets/images/commercial-spiral-duct-diffuser.webp';
import dirtyFloorRegister from '../assets/images/dirty-floor-register.webp';
import ceilingHose from '../assets/images/technician-ceiling-vent-hose.webp';
import returnFilter from '../assets/images/return-grille-filter-change.webp';
import floorVacuum from '../assets/images/floor-register-vacuum.webp';
import grille from '../assets/images/vent-grille-cleaning.webp';
import roundDuct from '../assets/images/round-duct-before-after.webp';
import negativeAir from '../assets/images/negative-air-machine-duct-cleaning.jpg';
import trunkBrush from '../assets/images/trunk-duct-brush-cleaning.webp';
import hoseTeam from '../assets/images/technicians-duct-hose-cleaning.webp';

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

export const locationContent: Record<string, LocationContent> = {
  miami: {
    metaTitle: 'Air Duct & HVAC Cleaning in Miami, FL | Purix',
    metaDescription:
      'Air duct, AC ductwork and HVAC cleaning in Miami, including coil, air handler and HVAC mold cleaning, plus dryer vent services. Call (305) 449-9881.',
    h1: 'Professional Air Duct & HVAC Cleaning in Miami, FL',
    heroSubtitle:
      'AC ductwork and ventilation system cleaning, HVAC component cleaning, and mold cleaning for AC systems and accessible ductwork, for homes, condos and businesses across Miami-Dade.',
    heroImage: ceilingVentBrush,
    heroImageAlt: 'Technician cleaning inside a ceiling supply duct with a rotary brush',
    introHeading: 'Miami’s AC ductwork and HVAC cleaning specialists',
    intro: [
      'In Miami, your air conditioner isn’t a seasonal appliance. It runs nearly every day of the year, moving and dehumidifying every bit of air in your home or business. All that run time means dust and debris build up in the ductwork, and moisture collects on the coil, drain pan and air handler.',
      'Purix Air Duct & Dryer Vent Cleaning focuses on that system. We clean supply and return ductwork, AC coils, air handlers and blower wheels, and we help homeowners deal with musty AC odors and suspected microbial buildup in their HVAC equipment. We also offer dryer vent cleaning and installation as a secondary service.',
    ],
    introImage: livingRoom,
    introImageAlt: 'Two Purix technicians preparing duct cleaning equipment in a Miami living room',
    localHeading: 'Why Miami AC systems need more attention',
    local: [
      'High humidity means your AC’s evaporator coil and drain pan stay wet much of the year. When dust reaches those wet surfaces, it sticks. That’s why musty odors from AC vents are so common in South Florida homes and condos.',
      'Many Miami condos and high-rises have closet air handlers with short duct runs right next to living space, while single-family homes often have long flex duct runs in hot attics. Both need different approaches, and we plan each job around the system you have.',
      'From North Miami Beach, Aventura and Sunny Isles to Brickell, Downtown and Coral Gables, Purix serves homes and businesses across Miami-Dade, with service extending into Broward and Palm Beach counties and Southwest Florida.',
    ],
    localImage: technicianAttic,
    localImageAlt: 'Technician working on flexible AC ductwork through a ceiling opening',
    faqs: [
      {
        q: 'What does Purix specialize in?',
        a: 'Our main focus is air conditioning systems: air duct and AC ductwork cleaning, HVAC component cleaning (coils, air handlers, blower wheels), and HVAC mold cleaning. Dryer vent cleaning and installation are secondary services.',
      },
      {
        q: 'How often should AC ducts be cleaned in Miami?',
        a: 'Most homes benefit from duct cleaning every 3 to 5 years. Because AC systems here run almost all year, homes with pets, recent renovations or visible dust at the vents may benefit sooner.',
      },
      {
        q: 'Why does my AC smell musty?',
        a: 'In humid climates, a common cause is buildup on wet AC components like the evaporator coil and drain pan. Cleaning those components often helps. If there’s an ongoing moisture problem, it also needs to be fixed.',
      },
      {
        q: 'What are your hours?',
        a: 'We’re open 24 hours Sunday through Friday and closed on Saturday.',
      },
      {
        q: 'Do you clean condo AC systems?',
        a: 'Yes. Closet air handlers and short condo duct runs are some of the most common systems we clean, and we coordinate with building management when needed.',
      },
    ],
  },
  'fort-lauderdale': {
    metaTitle: 'Air Duct & HVAC Cleaning Fort Lauderdale, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Fort Lauderdale for homes, high-rise condos and businesses. AC coil, air handler and dryer vent services too. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Fort Lauderdale, FL',
    heroSubtitle: 'Ductwork and AC system cleaning for Fort Lauderdale homes, beachside condos and downtown businesses.',
    heroImage: brushCeiling,
    heroImageAlt: 'Technician on a ladder cleaning a ceiling vent with a brush',
    introHeading: 'Duct and AC system cleaning across Fort Lauderdale',
    intro: [
      'Fort Lauderdale’s salt air, heat and humidity keep air conditioners running hard. Ductwork collects dust and debris, and wet AC components can develop the musty odors many residents notice when the system kicks on.',
      'Purix cleans the full air path, from supply and return ducts to the coil, blower and air handler. We serve single-family homes, waterfront condos and commercial spaces, and we offer dryer vent cleaning as well.',
    ],
    introImage: commercialSpiral,
    introImageAlt: 'Exposed spiral ductwork and diffuser in a commercial space',
    localHeading: 'Homes, high-rises and businesses',
    local: [
      'Older homes in neighborhoods like Victoria Park, Rio Vista and Coral Ridge often have duct systems that haven’t been cleaned or inspected in years. Damaged runs are common, and an inspection tells you whether cleaning or replacement makes sense.',
      'Condos along the beach and Galt Ocean Mile usually have closet air handlers with compact ductwork. We coordinate with building management on access and timing.',
      'Offices, restaurants and retail spaces in Downtown, Flagler Village and Las Olas get commercial duct and HVAC cleaning scheduled around business hours.',
    ],
    localImage: dirtyFloorRegister,
    localImageAlt: 'Floor register lifted to show debris inside the duct opening',
    faqs: [
      { q: 'Do you clean AC systems in Fort Lauderdale high-rise condos?', a: 'Yes. We clean closet air handlers and condo ductwork and coordinate with your building on access and allowed work hours.' },
      { q: 'My older home has rooms that barely cool. What should I do?', a: 'Start with an air duct inspection. Weak rooms often point to crushed or disconnected ductwork, which cleaning alone won’t fix.' },
      { q: 'Do you offer commercial service in Fort Lauderdale?', a: 'Yes. We clean commercial ductwork and HVAC equipment for offices, restaurants and retail, scheduled around your hours.' },
      { q: 'Do you clean dryer vents too?', a: 'Yes. Dryer vent cleaning and installation are available, including long condo runs and roof vents.' },
    ],
  },
  'boca-raton': {
    metaTitle: 'Air Duct & HVAC Cleaning Boca Raton, FL | Purix',
    metaDescription:
      'Air duct, AC coil and HVAC cleaning in Boca Raton for homes with multiple AC systems, condos and offices. Dryer vent services available. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Boca Raton, FL',
    heroSubtitle: 'Ductwork and AC equipment cleaning for Boca Raton homes, country club communities and offices.',
    heroImage: ceilingHose,
    heroImageAlt: 'Purix technician connecting cleaning equipment at a ceiling vent',
    introHeading: 'AC duct and system cleaning for Boca Raton',
    intro: [
      'Many Boca Raton homes are larger than average, with multiple AC systems serving different zones. Each system has its own ductwork, coil and air handler, and each one collects dust and moisture over time.',
      'Purix cleans each system thoroughly, including the ducts, coil, blower and air handler cabinet, and quotes each system clearly so you know exactly what’s included. Dryer vent cleaning is available too.',
    ],
    introImage: returnFilter,
    introImageAlt: 'Technician opening a return air grille to reach the filter',
    localHeading: 'Multi-system homes and professional offices',
    local: [
      'In communities like Boca West, Royal Palm Yacht & Country Club and Woodfield, it’s common for one home to have two or three air handlers. We clean them one at a time and check airflow in every zone.',
      'Seasonal residents often return to a home that has been closed up with the AC set high. That’s when musty odors from coils and drain pans tend to show up. Cleaning the wet components is often the place to start.',
      'Offices around Town Center and Glades Road get commercial duct and HVAC cleaning, scheduled to keep disruption to a minimum.',
    ],
    localImage: floorVacuum,
    localImageAlt: 'Floor register connected to a duct cleaning vacuum hose',
    faqs: [
      { q: 'Can you clean homes with more than one AC system?', a: 'Yes. We clean each system separately, ductwork and equipment, and quote each one so you know exactly what’s included.' },
      { q: 'We just came back for the season and the AC smells musty. What should we do?', a: 'Musty smells after a home has been closed up often come from buildup on wet AC components. HVAC mold cleaning targets the coil, drain pan and air handler.' },
      { q: 'Do you serve offices in Boca Raton?', a: 'Yes. We provide commercial air duct and HVAC cleaning and can work outside business hours.' },
      { q: 'Do you also clean roof dryer vents?', a: 'Yes. Roof-terminated dryer vents are common here, and we clean them from end to end.' },
    ],
  },
  naples: {
    metaTitle: 'Air Duct & HVAC Cleaning Naples, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Naples for seasonal homes, condos and larger residences. AC coil, air handler and HVAC mold cleaning. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Naples, FL',
    heroSubtitle: 'AC ductwork and HVAC system cleaning for Naples homes, condos and seasonal residences.',
    heroImage: technicianAttic,
    heroImageAlt: 'Technician working on flexible AC ductwork through a ceiling opening',
    introHeading: 'Duct and AC cleaning for Naples homes',
    intro: [
      'Naples has a large share of seasonal and second homes. When a home sits closed for the summer, humidity and dust work on the AC system, and the ductwork and air handler can greet you with a stale or musty smell when you return.',
      'Purix cleans the ductwork and the AC equipment, including the coil, blower and air handler, so your system starts the season clean. Dryer vent cleaning is available as well.',
    ],
    introImage: grille,
    introImageAlt: 'Gloved technician cleaning a dirty return air grille',
    localHeading: 'Seasonal homes and larger residences',
    local: [
      'We recommend scheduling HVAC and duct cleaning before you arrive for the season, or soon after, so the house feels fresh from the first day.',
      'Larger homes in Pelican Bay, Port Royal and Park Shore often have multiple AC zones and long duct runs. Condos in Vanderbilt Beach and Park Shore usually have compact closet units. We clean both.',
      'From Old Naples to Golden Gate and East Naples, Purix serves homes and businesses in Naples and surrounding Collier County communities.',
    ],
    localImage: roundDuct,
    localImageAlt: 'Round air duct interior before and after cleaning',
    faqs: [
      { q: 'Can you clean my AC system before I return for the season?', a: 'Yes. Many seasonal homeowners schedule a cleaning ahead of their arrival. Call us to arrange access and timing.' },
      { q: 'Why does my AC smell musty after the house was closed up?', a: 'Humidity and dust can build up on wet AC components while a home sits closed. Cleaning the coil, drain pan and air handler often helps.' },
      { q: 'Do you clean homes with multiple AC zones?', a: 'Yes. We clean each system and its ductwork and check airflow in every zone.' },
      { q: 'Do you offer dryer vent cleaning in Naples?', a: 'Yes, including condo and roof-terminated vents.' },
    ],
  },
  'cape-coral': {
    metaTitle: 'Air Duct & HVAC Cleaning Cape Coral, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Cape Coral for single-story homes, attic ductwork and AC equipment. HVAC mold cleaning and dryer vent services. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Cape Coral, FL',
    heroSubtitle: 'Cleaning for attic ductwork and AC equipment in Cape Coral homes and businesses.',
    heroImage: negativeAir,
    heroImageAlt: 'Negative air collection machine connected to a home duct system',
    introHeading: 'Attic ductwork and AC system cleaning',
    intro: [
      'Many Cape Coral homes are single-story block construction with ductwork running through a hot attic. In summer, that ductwork bakes and sweats, and the AC runs nearly nonstop to keep up.',
      'Purix cleans the attic duct system and the AC equipment that feeds it. We can also inspect the attic runs for crushed, torn or disconnected sections that may need replacement. Dryer vent cleaning is available too.',
    ],
    introImage: hoseTeam,
    introImageAlt: 'Two technicians running cleaning hoses through a wall register',
    localHeading: 'Canal-front living and year-round AC',
    local: [
      'With hundreds of miles of canals, Cape Coral has warm, humid air for most of the year. Wet AC components collect buildup, which is a common source of musty odors when the system starts.',
      'Seasonal residents often come back to a stale-smelling home. Cleaning the coil, drain pan and air handler, along with the ductwork, is a good way to start the season fresh.',
      'From the Yacht Club and Cape Harbour to the Northwest Cape, Purix serves homes and businesses across Cape Coral.',
    ],
    localImage: trunkBrush,
    localImageAlt: 'Rotary brush cleaning inside sheet-metal ductwork',
    faqs: [
      { q: 'Can you inspect the ductwork in my attic?', a: 'Yes. We check accessible attic runs for crushing, tears, disconnections and damaged insulation, and explain whether cleaning or replacement makes more sense.' },
      { q: 'What causes musty AC smells in Cape Coral homes?', a: 'Humidity keeps the coil and drain pan wet, and buildup on those surfaces is a common cause. HVAC mold cleaning focuses on those components.' },
      { q: 'Do you clean commercial systems in Cape Coral?', a: 'Yes. We provide commercial duct and HVAC cleaning for offices, restaurants and retail spaces.' },
      { q: 'Do you clean dryer vents in Cape Coral?', a: 'Yes, including roof-terminated vents.' },
    ],
  },
};
