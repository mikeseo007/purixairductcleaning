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
import dirtySupply from '../assets/images/dirty-supply-register.webp';
import commercialCeiling from '../assets/images/commercial-ceiling-duct-cleaning.webp';
import commercialBeforeAfter from '../assets/images/commercial-duct-before-after.webp';
import fogging from '../assets/images/technician-fogging-vent-sanitizing.webp';

const alt = {
  ceilingVentBrush: 'Technician cleaning inside a ceiling supply duct with a rotary brush',
  livingRoom: 'Two Purix technicians preparing duct cleaning equipment in a living room',
  technicianAttic: 'Technician working on flexible AC ductwork through a ceiling opening',
  brushCeiling: 'Technician on a ladder cleaning a ceiling vent with a brush',
  commercialSpiral: 'Exposed spiral ductwork and diffuser in a commercial space',
  dirtyFloorRegister: 'Floor register lifted to show debris inside the duct opening',
  ceilingHose: 'Purix technician connecting cleaning equipment at a ceiling vent',
  returnFilter: 'Technician opening a return air grille to reach the filter',
  floorVacuum: 'Floor register connected to a duct cleaning vacuum hose',
  grille: 'Gloved technician cleaning a dirty return air grille',
  roundDuct: 'Round air duct interior before and after cleaning',
  negativeAir: 'Negative air collection machine connected to a home duct system',
  trunkBrush: 'Rotary brush cleaning inside sheet-metal ductwork',
  hoseTeam: 'Two technicians running cleaning hoses through a wall register',
  dirtySupply: 'Dust buildup on a ceiling supply register',
  commercialCeiling: 'Duct cleaning hose run through a commercial drop ceiling',
  commercialBeforeAfter: 'Commercial rectangular duct before and after cleaning',
  fogging: 'Technician applying a treatment through a ceiling vent',
};

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
      'Purix Air Duct & Dryer Vent Cleaning focuses on that system. We clean supply and return ductwork, AC coils, air handlers and blower wheels, and we help homeowners deal with musty AC odors and suspected microbial buildup in their HVAC equipment. We also offer dryer vent services and attic insulation removal and replacement.',
    ],
    introImage: livingRoom,
    introImageAlt: 'Two Purix technicians preparing duct cleaning equipment in a Miami living room',
    localHeading: 'Why Miami AC systems need more attention',
    local: [
      'High humidity means your AC’s evaporator coil and drain pan stay wet much of the year. When dust reaches those wet surfaces, it sticks. That’s why musty odors from AC vents are so common in South Florida homes and condos.',
      'Many Miami condos and high-rises have closet air handlers with short duct runs right next to living space, while single-family homes often have long flex duct runs in hot attics. Both need different approaches, and we plan each job around the system you have.',
      'From Brickell, Downtown and Edgewater to nearby <a href="/north-miami-beach/">North Miami Beach</a>, <a href="/aventura/">Aventura</a>, <a href="/miami-gardens/">Miami Gardens</a> and <a href="/miami-beach/">Miami Beach</a>, Purix serves homes and businesses across Miami-Dade, with service extending into Broward and Palm Beach counties and Southwest Florida.',
    ],
    localImage: technicianAttic,
    localImageAlt: 'Technician working on flexible AC ductwork through a ceiling opening',
    faqs: [
      {
        q: 'What does Purix specialize in?',
        a: 'Our main focus is air conditioning systems: air duct and AC ductwork cleaning, HVAC component cleaning (coils, air handlers, blower wheels), and HVAC mold cleaning. We also offer dryer vent services and attic insulation removal, blown-in insulation and replacement.',
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
      'Purix cleans the attic duct system and the AC equipment that feeds it. We can also inspect the attic runs for crushed, torn or disconnected sections that may need replacement. If the attic insulation around those ducts is thin or damaged, we also offer <a href="/insulation-replacement/">attic insulation replacement</a> and <a href="/blown-in-attic-insulation/">blown-in insulation</a>.',
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

  // ───────────── Miami-Dade ─────────────
  'north-miami-beach': {
    metaTitle: 'Air Duct & HVAC Cleaning North Miami Beach | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in North Miami Beach for homes, waterfront properties and condos, close to our Ives Dairy Road office. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in North Miami Beach, FL',
    heroSubtitle: 'Duct and AC system cleaning for North Miami Beach homes, condos and businesses, right in our own neighborhood.',
    heroImage: livingRoom,
    heroImageAlt: alt.livingRoom,
    introHeading: 'Your neighborhood duct and HVAC cleaners',
    intro: [
      'North Miami Beach is our home turf. Our office on Ives Dairy Road is just minutes away, so homes and businesses here are among the easiest for us to schedule.',
      'The city has a mix of single-family homes from the 1950s through the 1970s, waterfront homes, and condo buildings along the Intracoastal. Purix cleans the ductwork and AC equipment in all of them, and we offer dryer vent cleaning too.',
    ],
    introImage: dirtyFloorRegister,
    introImageAlt: alt.dirtyFloorRegister,
    localHeading: 'Older homes, waterfront properties and condos',
    local: [
      'In neighborhoods like Fulford-by-the-Sea and Eastern Shores, many homes have older duct systems that have never been looked at closely. An <a href="/air-duct-inspection/">air duct inspection</a> shows what’s inside and whether anything is damaged.',
      'Waterfront homes and condos deal with extra humidity. Keeping the coil and drain pan clean is one of the best ways to prevent musty AC odors; see <a href="/ac-coil-cleaning/">AC coil cleaning</a>.',
      'Shops, offices and restaurants along West Dixie Highway and NE 163rd and 167th Streets can book commercial duct and HVAC cleaning.',
    ],
    localImage: trunkBrush,
    localImageAlt: alt.trunkBrush,
    faqs: [
      { q: 'Where are you located?', a: 'Our office is on Ives Dairy Road, just minutes from North Miami Beach.' },
      { q: 'My home is from the 1960s. Is the original ductwork still OK?', a: 'It may be, or it may have leaks, crushed sections or deteriorated insulation. An inspection shows its condition and whether cleaning or replacement is the better choice.' },
      { q: 'Do you clean condo AC systems along the Intracoastal?', a: 'Yes. We clean closet air handlers and condo ductwork and work within your building’s contractor rules.' },
      { q: 'Do you clean dryer vents in North Miami Beach?', a: 'Yes, for homes and condo buildings.' },
    ],
  },
  aventura: {
    metaTitle: 'Air Duct & HVAC Cleaning Aventura, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Aventura for high-rise condos, townhomes and offices, minutes from our Ives Dairy Road office. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Aventura, FL',
    heroSubtitle: 'Duct and AC system cleaning for Aventura condos, townhomes and offices, just minutes from our office.',
    heroImage: ceilingHose,
    heroImageAlt: alt.ceilingHose,
    introHeading: 'Condo AC cleaning in Aventura',
    intro: [
      'Aventura is a few minutes east of our office on Ives Dairy Road. Most residents live in high-rise and mid-rise condos, where each unit has its own air handler in a closet and a short duct system above the ceiling.',
      'Those compact systems run nearly all year and collect dust and moisture quickly. Purix cleans the ductwork, coil, drain pan, blower and air handler cabinet, so the whole system is cleaned, not just the vents.',
    ],
    introImage: dirtySupply,
    introImageAlt: alt.dirtySupply,
    localHeading: 'High-rises, townhomes and offices',
    local: [
      'In buildings along Country Club Drive, on Williams Island and around the Yacht Club, we schedule within each building’s contractor hours and elevator rules.',
      'Musty odors are a common complaint in units that sit closed for part of the year. <a href="/hvac-mold-cleaning/">HVAC mold cleaning</a> focuses on the wet components where that buildup collects.',
      'Offices and medical practices around Aventura Mall and Biscayne Boulevard can book <a href="/commercial-air-duct-cleaning/">commercial air duct cleaning</a>.',
    ],
    localImage: grille,
    localImageAlt: alt.grille,
    faqs: [
      { q: 'How close are you to Aventura?', a: 'Our office is on Ives Dairy Road, a few minutes west of Aventura.' },
      { q: 'My condo AC smells musty after I’ve been away. What causes it?', a: 'When a unit sits closed with the AC off or set high, humidity builds and buildup on the coil and drain pan can produce odors. Cleaning those components usually helps.' },
      { q: 'Does my building need to approve the work?', a: 'Many buildings have rules for contractors. Check with your management office, and we’ll schedule within their allowed hours.' },
      { q: 'Do you clean dryer vents in Aventura condos?', a: 'Yes, including long vent runs in condo buildings.' },
    ],
  },
  'miami-gardens': {
    metaTitle: 'Air Duct & HVAC Cleaning Miami Gardens, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Miami Gardens for single-family homes in Carol City, Andover, Norwood and nearby, plus local businesses. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Miami Gardens, FL',
    heroSubtitle: 'Duct and AC system cleaning for Miami Gardens homes and businesses, right next to our office.',
    heroImage: brushCeiling,
    heroImageAlt: alt.brushCeiling,
    introHeading: 'Duct and AC cleaning in Miami Gardens',
    intro: [
      'Miami Gardens is right next door to our office on Ives Dairy Road. Most of the city is single-family homes built from the 1960s to the 1980s, many with ductwork that’s decades old and AC equipment that has been replaced at least once.',
      'Purix cleans the supply and return ducts and the AC components, and we let you know if any ductwork is damaged or disconnected. Dryer vent cleaning is available too.',
    ],
    introImage: grille,
    introImageAlt: alt.grille,
    localHeading: 'Established neighborhoods across the city',
    local: [
      'In neighborhoods like Carol City, Andover, Norwood, Scott Lake and Rolling Oaks, many homes have a central return grille in a hallway that collects heavy dust. Return-side buildup is often the first thing we find in older systems.',
      'Homes with pets, large households or recent renovations often need duct cleaning sooner than the typical 3 to 5 year interval.',
      'Businesses along NW 27th Avenue and NW 183rd Street can book commercial duct and HVAC cleaning.',
    ],
    localImage: roundDuct,
    localImageAlt: alt.roundDuct,
    faqs: [
      { q: 'Are you close to Miami Gardens?', a: 'Yes. Our office is on Ives Dairy Road, just east of Miami Gardens.' },
      { q: 'Why is there so much dust around my return vent?', a: 'The return pulls air from the whole house back to the AC, so it collects the most dust. Heavy buildup at the return grille often means the return duct needs cleaning too.' },
      { q: 'Can you tell if my old ducts need to be replaced?', a: 'Yes. During an inspection we check for crushed, torn or disconnected sections and explain whether cleaning or replacement makes more sense.' },
      { q: 'Do you serve businesses in Miami Gardens?', a: 'Yes. Commercial duct and HVAC cleaning is available for offices, retail stores, churches and other commercial buildings in the city.' },
    ],
  },
  hialeah: {
    metaTitle: 'Air Duct & HVAC Cleaning Hialeah, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Hialeah for single-family homes, duplexes and businesses. Ductwork, AC coil and air handler cleaning. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Hialeah, FL',
    heroSubtitle: 'Ductwork and AC system cleaning for Hialeah homes, duplexes and local businesses.',
    heroImage: trunkBrush,
    heroImageAlt: alt.trunkBrush,
    introHeading: 'AC duct and system cleaning in Hialeah',
    intro: [
      'Hialeah is one of the most densely built cities in South Florida, with blocks of concrete single-family homes and duplexes, many dating from the 1950s through the 1980s. In homes this age, the AC unit has often been replaced more than once while the original ductwork stayed in place.',
      'Purix cleans that ductwork along with the coil, blower and air handler. If ducts are damaged or poorly connected after past equipment changes, we’ll tell you, and we can quote <a href="/ac-duct-replacement/">AC duct replacement</a> if it makes sense.',
    ],
    introImage: returnFilter,
    introImageAlt: alt.returnFilter,
    localHeading: 'Homes, additions and duplexes',
    local: [
      'Many Hialeah homes have been expanded over the years, with additions tied into the existing duct system. Those added runs are often where airflow problems start, so we check them during every cleaning.',
      'Duplexes and small multi-family buildings often have one AC system per unit. We can clean each system and coordinate with owners and tenants.',
      'From East Hialeah to the west side near Hialeah Gardens, plus the commercial areas along the Palmetto Expressway, Purix serves homes and businesses across Hialeah.',
    ],
    localImage: dirtyFloorRegister,
    localImageAlt: alt.dirtyFloorRegister,
    faqs: [
      { q: 'Do you clean AC systems in duplexes and rental units?', a: 'Yes. We can clean each unit’s system and work with owners or property managers on scheduling.' },
      { q: 'We replaced our AC unit but kept the old ducts. Should they be cleaned?', a: 'Usually, yes. Older ductwork holds years of dust that a new unit will keep pushing into your rooms. An inspection also checks that the old ducts are properly connected to the new equipment.' },
      { q: 'Do you serve businesses in Hialeah?', a: 'Yes. We clean commercial ductwork and HVAC equipment for offices, shops and other businesses.' },
      { q: 'Do you clean dryer vents in Hialeah?', a: 'Yes, for single-family homes and multi-unit buildings.' },
    ],
  },
  'miami-beach': {
    metaTitle: 'Air Duct & HVAC Cleaning Miami Beach, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Miami Beach for condos, Art Deco buildings, island homes and hospitality businesses. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Miami Beach, FL',
    heroSubtitle: 'Duct and AC system cleaning for Miami Beach condos, homes and hospitality businesses, from North Beach to South Beach.',
    heroImage: commercialCeiling,
    heroImageAlt: alt.commercialCeiling,
    introHeading: 'AC system cleaning by the ocean',
    intro: [
      'Miami Beach AC systems deal with salt air, high humidity and heavy use. Most residents live in condos and apartment buildings with compact air handlers in a closet, and those units collect dust and moisture fast.',
      'Purix cleans condo ductwork and AC equipment, including the coil, drain pan, blower and cabinet, and works within each building’s contractor rules. We also serve single-family homes on the islands, in Mid-Beach and in North Beach.',
    ],
    introImage: fogging,
    introImageAlt: alt.fogging,
    localHeading: 'Condos, historic buildings and island homes',
    local: [
      'Many South Beach buildings date to the 1930s and 1940s, with AC added long after construction. Ductwork in these buildings is often short and tucked into soffits and dropped ceilings.',
      'Homes on the Sunset Islands, in La Gorce and on Normandy Isles tend to have larger, multi-zone systems. We clean each system and check airflow room by room.',
      'Restaurants, hotels and shops can book <a href="/commercial-air-duct-cleaning/">commercial air duct cleaning</a>, and buildings with shared laundry rooms can schedule <a href="/commercial-dryer-vent-cleaning/">commercial dryer vent cleaning</a>.',
    ],
    localImage: commercialBeforeAfter,
    localImageAlt: alt.commercialBeforeAfter,
    faqs: [
      { q: 'Do you work in Miami Beach condo buildings?', a: 'Yes. We coordinate with building management on access, elevator use and allowed work hours.' },
      { q: 'How does the beach environment affect my AC?', a: 'Salt air can corrode outdoor equipment over time. Inside, the bigger day-to-day issue is humidity, which keeps the coil and drain pan wet. Regular coil and drain cleaning helps.' },
      { q: 'Can you clean AC systems in older Art Deco buildings?', a: 'Yes. Systems in older buildings are often compact and tucked into soffits, so we plan access before we start.' },
      { q: 'Do you serve hotels and restaurants?', a: 'Yes. We clean commercial ductwork, HVAC equipment and dryer vents for hospitality businesses.' },
    ],
  },
  doral: {
    metaTitle: 'Air Duct & HVAC Cleaning Doral, FL | Purix',
    metaDescription:
      'Commercial and residential air duct and HVAC cleaning in Doral for offices, showrooms, warehouses, townhomes and condos. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Doral, FL',
    heroSubtitle: 'Duct and AC system cleaning for Doral offices, showrooms, warehouses, townhomes and condos.',
    heroImage: commercialCeiling,
    heroImageAlt: alt.commercialCeiling,
    introHeading: 'Commercial and residential HVAC cleaning in Doral',
    intro: [
      'Doral is one of South Florida’s busiest business hubs, with offices, showrooms and warehouses near the airport and the Palmetto. It also has a fast-growing residential side, with newer townhomes, condos and single-family communities.',
      'Purix cleans commercial ductwork and HVAC equipment on a schedule that works around your business, and we clean residential systems in homes across Doral.',
    ],
    introImage: commercialSpiral,
    introImageAlt: alt.commercialSpiral,
    localHeading: 'Offices, warehouses and newer communities',
    local: [
      'Office and showroom spaces often have long ceiling duct runs serving many rooms. <a href="/commercial-air-duct-cleaning/">Commercial air duct cleaning</a> can be scheduled outside business hours.',
      'Warehouse and light-industrial buildings generate a lot of dust, and the office areas inside them often need more frequent filter changes and duct cleaning.',
      'In residential areas like Downtown Doral, Doral Isles and Doral Park, many homes and townhomes are newer and may still have construction dust in the ducts.',
    ],
    localImage: commercialBeforeAfter,
    localImageAlt: alt.commercialBeforeAfter,
    faqs: [
      { q: 'Do you clean HVAC systems in offices and warehouses?', a: 'Yes. We clean commercial ductwork and HVAC equipment for offices, showrooms and the office areas of warehouses.' },
      { q: 'Can you work outside our business hours?', a: 'Yes. We’re open 24 hours Sunday through Friday and can schedule around your operations.' },
      { q: 'My townhome is only a few years old. Do the ducts need cleaning?', a: 'They may. New construction often leaves drywall dust and debris in the ducts. An inspection will show what’s there.' },
      { q: 'Do you clean dryer vents in Doral?', a: 'Yes, for homes, townhomes and condo buildings.' },
    ],
  },
  'coral-gables': {
    metaTitle: 'Air Duct & HVAC Cleaning Coral Gables, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Coral Gables for historic homes, multi-zone estates and offices. Duct inspection and AC system cleaning. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Coral Gables, FL',
    heroSubtitle: 'Careful duct and AC system cleaning for Coral Gables historic homes, estates and offices.',
    heroImage: brushCeiling,
    heroImageAlt: alt.brushCeiling,
    introHeading: 'Duct and AC care for Coral Gables homes',
    intro: [
      'Many Coral Gables homes date to the 1920s and 1930s, built long before central air conditioning. Their duct systems were added later and often had to work around thick walls, plaster ceilings and architectural details.',
      'Purix cleans these systems carefully, protecting floors and finishes, and pays close attention to duct condition. Newer and larger homes, including multi-system estates, get the same thorough cleaning of ductwork, coils, blowers and air handlers.',
    ],
    introImage: livingRoom,
    introImageAlt: alt.livingRoom,
    localHeading: 'Historic homes, estates and the business district',
    local: [
      'In historic neighborhoods around the Biltmore and Granada, retrofitted ductwork can have sharp turns and tight connections. An <a href="/air-duct-inspection/">air duct inspection</a> helps catch leaks and disconnections.',
      'Larger homes in areas like Cocoplum and Gables Estates often have several AC zones. We clean each system and check airflow throughout the house.',
      'Offices along Miracle Mile, Ponce de Leon Boulevard and near the University of Miami can book commercial duct and HVAC cleaning.',
    ],
    localImage: returnFilter,
    localImageAlt: alt.returnFilter,
    faqs: [
      { q: 'Can you clean ductwork in a historic home without damaging finishes?', a: 'We protect floors and work areas and plan access around existing finishes before we start. If a register or access point is difficult, we’ll talk it through with you first.' },
      { q: 'My home has several AC zones. Do you clean all of them?', a: 'Yes. We clean each system separately and quote each one so you know what’s included.' },
      { q: 'Is Coral Gables in your service area?', a: 'Yes. Coral Gables is part of our Miami-Dade service area.' },
      { q: 'Do you offer commercial service in Coral Gables?', a: 'Yes. We clean commercial ductwork and HVAC equipment and can schedule around office hours.' },
    ],
  },

  // ───────────── Broward ─────────────
  hollywood: {
    metaTitle: 'Air Duct & HVAC Cleaning Hollywood, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Hollywood, FL for older ranch homes, beachside condos and local businesses. AC coil and dryer vent services. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Hollywood, FL',
    heroSubtitle: 'Duct and AC system cleaning for Hollywood homes, from Hollywood Hills ranch houses to condos along the Broadwalk.',
    heroImage: ceilingHose,
    heroImageAlt: alt.ceilingHose,
    introHeading: 'Duct and AC cleaning just up the road in Hollywood',
    intro: [
      'Hollywood sits just north of our office, across the county line in Broward. Many homes here were built in the 1950s through the 1970s, and their ductwork has often been patched, extended or partly replaced over the decades.',
      'Purix cleans the supply and return ductwork and the AC equipment behind it, including the coil, blower and air handler. In older homes we also look closely at duct condition, since leaks and disconnected runs are common. Dryer vent cleaning is available too.',
    ],
    introImage: dirtySupply,
    introImageAlt: alt.dirtySupply,
    localHeading: 'Ranch homes, beach condos and Downtown businesses',
    local: [
      'In neighborhoods like Hollywood Hills, Hollywood Lakes and Emerald Hills, many ranch-style homes have ducts that run through low attics or were added after the home was built. An <a href="/air-duct-inspection/">air duct inspection</a> shows whether those runs need cleaning, repair or replacement.',
      'Condos along Hollywood Beach deal with salt air and humidity year-round. Closet air handlers in these units collect moisture and dust quickly, which is why <a href="/ac-coil-cleaning/">AC coil cleaning</a> is a common request.',
      'Offices, restaurants and shops in Downtown Hollywood and around Young Circle can book commercial duct and HVAC cleaning outside business hours.',
    ],
    localImage: floorVacuum,
    localImageAlt: alt.floorVacuum,
    faqs: [
      { q: 'Is Hollywood in your service area?', a: 'Yes. Hollywood is just north of our Miami office, and we serve homes and businesses throughout the city.' },
      { q: 'Some rooms in my older home get weak airflow. Is it the ducts?', a: 'It can be. Older duct systems often have leaks, crushed flex duct or disconnected runs. An inspection tells you whether cleaning, repair or replacement is the right fix.' },
      { q: 'Do you clean AC systems in beachfront condos?', a: 'Yes. We clean closet air handlers and condo ductwork and coordinate with building management on access.' },
      { q: 'Do you offer dryer vent cleaning in Hollywood?', a: 'Yes, for homes and condo buildings, including roof-terminated vents.' },
    ],
  },
  miramar: {
    metaTitle: 'Air Duct & HVAC Cleaning Miramar, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Miramar for newer homes, townhomes and offices in the Miramar Park of Commerce. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Miramar, FL',
    heroSubtitle: 'Ductwork and AC cleaning for Miramar homes, townhomes and businesses, from East Miramar to Silver Shores.',
    heroImage: hoseTeam,
    heroImageAlt: alt.hoseTeam,
    introHeading: 'AC duct and system cleaning in Miramar',
    intro: [
      'Miramar has grown fast, and much of the city west of I-75 is construction from the 1990s and 2000s. Newer doesn’t mean clean: construction dust often settles in the ducts from day one, and many of these systems have never been cleaned.',
      'East Miramar has older homes with older duct systems. Wherever you are in the city, Purix cleans the ductwork and the AC equipment, including the coil, blower and air handler.',
    ],
    introImage: commercialSpiral,
    introImageAlt: alt.commercialSpiral,
    localHeading: 'Newer communities, townhomes and corporate offices',
    local: [
      'In communities like Silver Shores, Monarch Lakes, Sunset Lakes and Riviera Isles, many homes are around 20 years old, a common point for a first duct cleaning and an AC coil check.',
      'Townhomes often have compact systems with the air handler in a closet or garage. We clean those systems and check the condensate drain, which can clog and cause musty odors.',
      'Offices in the Miramar Park of Commerce and along Miramar Parkway can book <a href="/commercial-air-duct-cleaning/">commercial air duct cleaning</a> scheduled around business hours.',
    ],
    localImage: grille,
    localImageAlt: alt.grille,
    faqs: [
      { q: 'My home is newer. Do the ducts really need cleaning?', a: 'Often, yes. New homes can have drywall dust and construction debris in the ducts from the build. If the system has never been cleaned, an inspection will show what’s there.' },
      { q: 'Do you clean townhome AC systems?', a: 'Yes, including air handlers in closets and garages.' },
      { q: 'Do you clean offices in Miramar?', a: 'Yes. We clean commercial ductwork and HVAC equipment and can schedule outside business hours.' },
      { q: 'Do you clean dryer vents in Miramar?', a: 'Yes, including second-floor laundry rooms with long vent runs.' },
    ],
  },
  'pembroke-pines': {
    metaTitle: 'Air Duct & HVAC Cleaning Pembroke Pines, FL | Purix',
    metaDescription:
      'Air duct, HVAC and attic insulation services in Pembroke Pines for two-story homes, HOA communities and 55+ condos. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Pembroke Pines, FL',
    heroSubtitle: 'Duct and AC system cleaning for Pembroke Pines homes, from Silver Lakes to Chapel Trail.',
    heroImage: technicianAttic,
    heroImageAlt: alt.technicianAttic,
    introHeading: 'Duct and AC cleaning for suburban Pembroke Pines',
    intro: [
      'Most Pembroke Pines homes were built from the 1980s onward in planned communities, and many are two stories with ductwork running through an attic. Those long attic runs collect dust, and the upstairs often struggles to stay as cool as the downstairs.',
      'Purix cleans the full duct system and the AC equipment that feeds it. Because so much of the system sits in the attic, we also look at the condition of the ducts and the insulation around them.',
    ],
    introImage: livingRoom,
    introImageAlt: alt.livingRoom,
    localHeading: 'Two-story homes, HOA communities and 55+ condos',
    local: [
      'In communities like Silver Lakes, Pembroke Falls, Chapel Trail and Pembroke Lakes, two-story homes often have one system per floor or a zoned system. We clean each system and check airflow upstairs and down.',
      'If upstairs rooms stay hot, the attic may be part of the problem. Thin or settled insulation lets heat through the ceiling, and <a href="/blown-in-attic-insulation/">blown-in attic insulation</a> can add depth where it’s needed.',
      'We also clean AC systems in condos and villas in Century Village and other 55+ communities, where closet air handlers are common.',
    ],
    localImage: negativeAir,
    localImageAlt: alt.negativeAir,
    faqs: [
      { q: 'Why is my upstairs hotter than downstairs?', a: 'Upstairs rooms sit right under a hot attic. Restricted ductwork, thin attic insulation or a dirty coil can all make it worse. We can check the ducts and the attic in one visit.' },
      { q: 'Do you clean homes with two AC systems?', a: 'Yes. We clean each system separately and quote each one so you know what’s included.' },
      { q: 'Do you work in gated and HOA communities?', a: 'Yes, and we follow each community’s access rules for contractors.' },
      { q: 'Can you add attic insulation at the same time?', a: 'Yes. Duct cleaning and attic insulation work can be scheduled together.' },
    ],
  },
  davie: {
    metaTitle: 'Air Duct & HVAC Cleaning Davie, FL | Purix',
    metaDescription:
      'Air duct, HVAC and attic insulation services in Davie for ranch properties, larger homes and businesses near Nova Southeastern. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Davie, FL',
    heroSubtitle: 'Ductwork and AC system cleaning for Davie homes, from large-lot ranch properties to newer communities.',
    heroImage: negativeAir,
    heroImageAlt: alt.negativeAir,
    introHeading: 'Duct and AC cleaning for Davie’s larger homes',
    intro: [
      'Davie has a mix of large-lot ranch properties, established neighborhoods and newer communities. Larger homes often have long duct runs and more than one AC system, and properties with open land or horses see more dust and pollen than a typical home.',
      'Purix cleans each system’s ductwork and equipment, including the coil, blower and air handler, and checks airflow throughout the house.',
    ],
    introImage: technicianAttic,
    introImageAlt: alt.technicianAttic,
    localHeading: 'Ranch properties, family neighborhoods and campus-area businesses',
    local: [
      'On larger properties in areas like Long Lake Ranches, Shenandoah and Pine Island Ridge, outdoor dust and pollen come in every time a door opens. Regular filter changes help, and periodic duct cleaning removes what gets past them.',
      'Long attic duct runs are common in larger homes. If the attic insulation around them is thin or damaged, <a href="/insulation-replacement/">insulation replacement</a> can be planned along with duct work.',
      'Offices and businesses near Nova Southeastern University and along University Drive can book commercial duct and HVAC cleaning.',
    ],
    localImage: floorVacuum,
    localImageAlt: alt.floorVacuum,
    faqs: [
      { q: 'Do you clean homes with multiple AC systems in Davie?', a: 'Yes. We clean each system and quote each one separately.' },
      { q: 'We live on acreage and the house gets dusty fast. Will duct cleaning help?', a: 'Duct cleaning removes dust that has built up inside the system. On properties with a lot of outdoor dust, a good filter changed on schedule matters just as much.' },
      { q: 'Do you work on attic insulation in Davie?', a: 'Yes. We remove old insulation, add blown-in insulation and handle full insulation replacement.' },
      { q: 'Do you clean dryer vents in Davie?', a: 'Yes, including long runs in larger homes.' },
    ],
  },
  plantation: {
    metaTitle: 'Air Duct & HVAC Cleaning Plantation, FL | Purix',
    metaDescription:
      'Air duct and HVAC cleaning in Plantation for established homes, Plantation Acres properties and offices. Duct inspection and AC cleaning. Call (305) 449-9881.',
    h1: 'Air Duct & HVAC Cleaning in Plantation, FL',
    heroSubtitle: 'Duct and AC system cleaning for Plantation homes and offices, from Jacaranda to Plantation Acres.',
    heroImage: ceilingVentBrush,
    heroImageAlt: alt.ceilingVentBrush,
    introHeading: 'AC duct and system cleaning in Plantation',
    intro: [
      'Plantation is one of Broward’s more established cities, with tree-lined neighborhoods of 1960s and 1970s homes in the east and larger properties out west in Plantation Acres. Heavy tree cover means plenty of pollen around the home.',
      'Purix cleans the ductwork and AC equipment in homes and businesses across Plantation, and we look closely at duct condition in older homes.',
    ],
    introImage: roundDuct,
    introImageAlt: alt.roundDuct,
    localHeading: 'Mature neighborhoods and a busy business district',
    local: [
      'In older neighborhoods east of University Drive, such as Plantation Isles, the original ductwork may be 40 years old or more. An <a href="/air-duct-inspection/">air duct inspection</a> tells you whether it can be cleaned or should be replaced.',
      'Jacaranda and the communities farther west tend to have newer systems, where regular duct cleaning and <a href="/ac-coil-cleaning/">AC coil cleaning</a> keep things running well.',
      'Offices and medical buildings along Broward Boulevard and around Plantation Midtown can schedule commercial duct and HVAC cleaning.',
    ],
    localImage: commercialCeiling,
    localImageAlt: alt.commercialCeiling,
    faqs: [
      { q: 'How old does ductwork have to be before it should be replaced?', a: 'Age alone doesn’t decide it. We check for crushing, tears, disconnections and deteriorated insulation, then explain whether cleaning or replacement makes more sense.' },
      { q: 'Do you clean HVAC systems in medical offices?', a: 'We clean commercial ductwork and HVAC equipment in office buildings, including medical offices, and schedule around your hours.' },
      { q: 'There are lots of trees around my home. Does that matter?', a: 'Heavy tree cover means more pollen and debris for your filter and ducts to collect. Regular filter changes help, and periodic cleaning removes buildup.' },
      { q: 'Do you clean dryer vents in Plantation?', a: 'Yes, for homes and multi-unit buildings.' },
    ],
  },
};
