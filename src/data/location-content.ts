import type { ImageMetadata } from 'astro';
import { photos } from './photos';

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
  extraSeo: { heading: string; body: string[] }[];
  pois: { name: string; note: string }[];
  directionsEmbed: string;
  faqs: { q: string; a: string }[];
  // Homepage-only teaser cards (ductwork cleaning, AC vent cleaning) that link
  // out to the dedicated service pages. Rendered only when isHome, so city
  // pages leave this undefined.
  homeSections?: { heading: string; body: string[]; href: string }[];
}

export const locationContent: Record<string, LocationContent> = {
  miami: {
    metaTitle: 'Air Duct Cleaning in Miami, FL - Purix Air Duct & Dryer',
    metaDescription:
      'Looking for Air Duct Cleaning in Miami? Purix Air Duct & Dryer vent cleaning offers deep air duct, coil and vent cleaning plus dust removal. Book today!',
    h1: 'Air Duct Cleaning in Miami, FL',
    heroSubtitle:
      'Air Duct Cleaning in Miami for homes, condos and businesses across Miami-Dade, plus dryer vent, HVAC coil, air handler and mold cleaning.',
    heroImage: photos.teamWithVan.src,
    heroImageAlt: photos.teamWithVan.alt,
    introHeading: 'Miami’s air duct and dryer vent cleaning specialists',
    intro: [
      'In Miami, your air conditioner isn’t a seasonal appliance. It runs nearly every day of the year, moving and dehumidifying every bit of air in your home or business. All that run time means dust and debris build up in the ductwork, and moisture collects on the coil, drain pan and air handler.',
      'Purix Air Duct & Dryer Vent Cleaning focuses on the air moving through your home: supply and return ductwork, AC coils, air handlers and blower wheels, plus the dryer vent line that carries hot, lint-filled air outside. We also help homeowners deal with musty AC odors and suspected microbial buildup in their HVAC equipment, and we offer attic insulation removal and replacement.',
    ],
    introImage: photos.ductCamera.src,
    introImageAlt: photos.ductCamera.alt,
    localHeading: 'Why Miami AC systems need more attention',
    local: [
      'High humidity means your AC’s evaporator coil and drain pan stay wet much of the year. When dust reaches those wet surfaces, it sticks. That’s why musty odors from AC vents are so common in South Florida homes and condos.',
      'Many Miami condos and high-rises have closet air handlers with short duct runs right next to living space, while single-family homes often have long flex duct runs in hot attics. Both need different approaches, and we plan each job around the system you have.',
      'From Brickell, Downtown and Edgewater to nearby <a href="/north-miami-beach/">North Miami Beach</a>, <a href="/aventura/">Aventura</a>, <a href="/miami-gardens/">Miami Gardens</a> and <a href="/miami-beach/">Miami Beach</a>, Purix serves homes and businesses across Miami-Dade, with service extending into Broward and Palm Beach counties and Southwest Florida.',
    ],
    localImage: photos.serviceTrucks.src,
    localImageAlt: photos.serviceTrucks.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Miami, explained for homes and businesses',
        body: [
          'Our Air Duct Cleaning in Miami covers the full air path: supply and return ducts, registers and plenums, plus the coil, blower and air handler where buildup really collects. Miami systems run almost year-round, so dust, humidity and pet dander load up ductwork faster than in cooler climates.',
        ],
      },
      {
        heading: 'Why Miami AC systems collect buildup so quickly',
        body: [
          'Miami air conditioners run nearly year-round, pulling humid, dusty air through the system every day. That constant use lets dust, pet dander and moisture-related buildup settle in the ducts and on the coil faster than in places where the AC rests for months, so regular cleaning keeps air quality up.',
        ],
      },
    ],
    pois: [
      { name: 'Wynwood (Wynwood Walls)', note: 'arts and mural district just north of downtown' },
      { name: 'Little Havana', note: 'Cuban cultural district centered on Calle Ocho' },
      { name: 'Brickell', note: 'dense financial and high-rise district south of downtown' },
      { name: 'Bayfront Park', note: 'downtown waterfront park along Biscayne Boulevard' },
      { name: 'Vizcaya Museum and Gardens', note: 'historic bayfront estate near Coconut Grove' },
      { name: 'loanDepot Park', note: 'Miami Marlins ballpark in the Little Havana area' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d106536.77172005665!2d-80.26382919496598!3d25.867748672728048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20USA!3m2!1d25.7616798!2d-80.1917902!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760440565!5m2!1sen!2s',
    faqs: [
      {
        q: 'What does Purix specialize in?',
        a: 'Our main focus is air duct and dryer vent cleaning: AC ductwork cleaning, dryer vent cleaning and installation, HVAC component cleaning (coils, air handlers, blower wheels) and HVAC mold cleaning. We also offer attic insulation removal, blown-in insulation and replacement.',
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
        a: 'We’re open 24 hours a day, 7 days a week.',
      },
      {
        q: 'Do you clean condo AC systems?',
        a: 'Yes. Closet air handlers and short condo duct runs are some of the most common systems we clean, and we coordinate with building management when needed.',
      },
    ],
    homeSections: [
      {
        heading: 'Ductwork Cleaning',
        href: '/ductwork-cleaning/',
        body: [
          'Deep cleaning of the supply and return duct runs, trunk lines and plenums that carry conditioned air through your property, the network hidden behind the vents you can see.',
        ],
      },
      {
        heading: 'AC Vent Cleaning',
        href: '/ac-vent-cleaning/',
        body: [
          'Cleaning for the visible supply and return registers, vent covers and grilles, plus the accessible area directly behind each one. Not the same as dryer vent cleaning.',
        ],
      },
    ],
  },
  'fort-lauderdale': {
    metaTitle: 'Reliable Air Duct Cleaning in Fort Lauderdale - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Fort Lauderdale? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Fort Lauderdale, FL',
    heroSubtitle: 'Air Duct Cleaning in Fort Lauderdale for beachside condos, downtown offices and older mainland homes, plus dryer vent and coil cleaning.',
    heroImage: photos.brandedVan.src,
    heroImageAlt: photos.brandedVan.alt,
    introHeading: 'Duct and AC system cleaning across Fort Lauderdale',
    intro: [
      'Fort Lauderdale’s salt air, heat and humidity keep air conditioners running hard. Ductwork collects dust and debris, and wet AC components can develop the musty odors many residents notice when the system kicks on.',
      'Purix cleans the full air path, from supply and return ducts to the coil, blower and air handler. We serve single-family homes, waterfront condos and commercial spaces, and we offer dryer vent cleaning as well.',
    ],
    introImage: photos.airHandlerCleaning.src,
    introImageAlt: photos.airHandlerCleaning.alt,
    localHeading: 'Homes, high-rises and businesses',
    local: [
      'Older homes in neighborhoods like Victoria Park, Rio Vista and Coral Ridge often have duct systems that haven’t been cleaned or inspected in years. Damaged runs are common, and an inspection tells you whether cleaning or replacement makes sense.',
      'Condos along the beach and Galt Ocean Mile usually have closet air handlers with compact ductwork. We coordinate with building management on access and timing.',
      'Offices, restaurants and retail spaces in Downtown, Flagler Village and Las Olas get commercial duct and HVAC cleaning scheduled around business hours.',
    ],
    localImage: photos.vanDryerCrew.src,
    localImageAlt: photos.vanDryerCrew.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Fort Lauderdale, explained for coastal homes',
        body: [
          'Near the water, salt air and steady humidity help dust and microbial buildup settle in ductwork and on cooling components. Our Air Duct Cleaning in Fort Lauderdale clears the supply and return runs, registers and the coil and blower, so beachside condos and mainland homes get cleaner, fresher air.',
        ],
      },
      {
        heading: 'How salt air and humidity affect your coastal AC',
        body: [
          'Homes close to the Intracoastal and the beach deal with damp, salty air that AC systems pull in day after day. That moisture encourages musty odors and buildup on coils and in ducts, which is why regular duct and HVAC cleaning matters more here than inland.',
        ],
      },
    ],
    pois: [
      { name: 'Las Olas Boulevard', note: 'landmark shopping and dining street from downtown toward the beach' },
      { name: 'Fort Lauderdale Beach', note: 'popular Atlantic shoreline along the Central Beach area' },
      { name: 'Riverwalk', note: 'park path tracing the New River through the arts district' },
      { name: 'Museum of Discovery and Science', note: 'downtown science museum with an IMAX theater' },
      { name: 'Broward Center for the Performing Arts', note: 'major cultural venue overlooking the New River' },
      { name: 'Hugh Taylor Birch State Park', note: 'barrier-island park between the Intracoastal and the Atlantic' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114709.97849592016!2d-80.24232109039882!3d26.043800974839957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9012720facaf5%3A0x7602be7540bf8ebe!2sFort%20Lauderdale%2C%20Florida%2C%20USA!3m2!1d26.1224386!2d-80.1373174!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760686446!5m2!1sen!2s',
    faqs: [
      { q: 'Do you clean AC systems in Fort Lauderdale high-rise condos?', a: 'Yes. We clean closet air handlers and condo ductwork and coordinate with your building on access and allowed work hours.' },
      { q: 'My older home has rooms that barely cool. What should I do?', a: 'Start with an air duct inspection. Weak rooms often point to crushed or disconnected ductwork, which cleaning alone won’t fix.' },
      { q: 'Do you offer commercial service in Fort Lauderdale?', a: 'Yes. We clean commercial ductwork and HVAC equipment for offices, restaurants and retail, scheduled around your hours.' },
      { q: 'Do you clean dryer vents too?', a: 'Yes. Dryer vent cleaning and installation are available, including long condo runs and roof vents.' },
      {
        q: 'How does living near the beach affect my air ducts?',
        a: 'Salt air and high humidity speed up buildup inside ducts and on the coil, and can bring on musty odors. Homes near the water often benefit from cleaning a little more often than inland properties.',
      },
    ],
  },
  'boca-raton': {
    metaTitle: 'Reliable Air Duct Cleaning in Boca Raton - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Boca Raton? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Boca Raton, FL',
    heroSubtitle: 'Air Duct Cleaning in Boca Raton for country-club homes, seasonal condos and offices, including homes that run multiple AC systems.',
    heroImage: photos.serviceTrucks.src,
    heroImageAlt: photos.serviceTrucks.alt,
    introHeading: 'AC duct and system cleaning for Boca Raton',
    intro: [
      'Many Boca Raton homes are larger than average, with multiple AC systems serving different zones. Each system has its own ductwork, coil and air handler, and each one collects dust and moisture over time.',
      'Purix cleans each system thoroughly, including the ducts, coil, blower and air handler cabinet, and quotes each system clearly so you know exactly what’s included. Dryer vent cleaning is available too.',
    ],
    introImage: photos.furnaceFilter.src,
    introImageAlt: photos.furnaceFilter.alt,
    localHeading: 'Multi-system homes and professional offices',
    local: [
      'In communities like Boca West, Royal Palm Yacht & Country Club and Woodfield, it’s common for one home to have two or three air handlers. We clean them one at a time and check airflow in every zone.',
      'Seasonal residents often return to a home that has been closed up with the AC set high. That’s when musty odors from coils and drain pans tend to show up. Cleaning the wet components is often the place to start.',
      'Offices around Town Center and Glades Road get commercial duct and HVAC cleaning, scheduled to keep disruption to a minimum.',
    ],
    localImage: photos.vanDuctCrew.src,
    localImageAlt: photos.vanDuctCrew.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Boca Raton, explained for larger homes',
        body: [
          'Many Boca Raton homes run two or more AC systems across a large floor plan, and each one has its own ducts, coil and air handler. Our Air Duct Cleaning in Boca Raton covers every system in the home, so no zone is left with dusty ducts or a buildup-coated coil.',
        ],
      },
      {
        heading: 'What seasonal residents should check before returning',
        body: [
          'When a home sits closed through the off-season, moisture and stale air settle into the ductwork and AC. Before the season starts, a duct and HVAC cleaning clears that buildup and the musty smell, so the house feels fresh the day you walk back in.',
        ],
      },
    ],
    pois: [
      { name: 'Mizner Park', note: 'downtown Mediterranean-style shopping, dining and amphitheater district' },
      { name: 'Florida Atlantic University (FAU)', note: 'public university with its main campus and stadium here' },
      { name: 'Gumbo Limbo Nature Center', note: 'coastal nature center with sea turtle rehabilitation and trails' },
      { name: 'Red Reef Park', note: 'oceanfront park known for swimming and snorkeling' },
      { name: 'Spanish River Park', note: 'large beachfront park along the Intracoastal Waterway' },
      { name: 'Town Center at Boca Raton', note: 'major regional shopping mall off Glades Road' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d191646.41319556764!2d-80.3063985901066!3d26.128151848633664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d923c2ef36fb27%3A0xd23ea6eeca6095c9!2sBoca%20Raton%2C%20Florida%2C%20USA!3m2!1d26.368306399999998!2d-80.1289321!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760725650!5m2!1sen!2s',
    faqs: [
      {
        q: 'Can you clean homes with more than one AC system?',
        a: 'Yes. We clean each system separately, ductwork and equipment, and quote each one so you know exactly what’s included.',
      },
      {
        q: 'We just came back for the season and the AC smells musty. What should we do?',
        a: 'Musty smells after a home has been closed up often come from buildup on wet AC components. HVAC mold cleaning targets the coil, drain pan and air handler.',
      },
      {
        q: 'Do you serve offices in Boca Raton?',
        a: 'Yes. We provide commercial air duct and HVAC cleaning and can work outside business hours.',
      },
      {
        q: 'Do you also clean roof dryer vents?',
        a: 'Yes. Roof-terminated dryer vents are common here, and we clean them from end to end.',
      },
      {
        q: 'How often should a seasonal Boca Raton home be cleaned?',
        a: 'Most homes benefit every three to five years. Seasonal homes that sit closed through the summer often schedule a cleaning just before the owners return.',
      },
    ],
  },
  naples: {
    metaTitle: 'Air Duct Cleaning in Naples, FL | Purix Air Duct',
    metaDescription:
      'Looking for Air Duct Cleaning in Naples? Purix Air Duct & Dryer vent cleaning offers deep air duct, coil and vent cleaning plus dust removal. Book today!',
    h1: 'Air Duct Cleaning in Naples, FL',
    heroSubtitle: 'Air Duct Cleaning in Naples for seasonal residences, Gulf-side condos and larger homes, plus dryer vent, HVAC and mold cleaning.',
    heroImage: photos.vanDryerCrew.src,
    heroImageAlt: photos.vanDryerCrew.alt,
    introHeading: 'Duct and AC cleaning for Naples homes',
    intro: [
      'Naples has a large share of seasonal and second homes. When a home sits closed for the summer, humidity and dust work on the AC system, and the ductwork and air handler can greet you with a stale or musty smell when you return.',
      'Purix cleans the ductwork and the AC equipment, including the coil, blower and air handler, so your system starts the season clean. Dryer vent cleaning is available as well.',
    ],
    introImage: photos.hvacCoilCleaning.src,
    introImageAlt: photos.hvacCoilCleaning.alt,
    localHeading: 'Seasonal homes and larger residences',
    local: [
      'We recommend scheduling HVAC and duct cleaning before you arrive for the season, or soon after, so the house feels fresh from the first day.',
      'Larger homes in Pelican Bay, Port Royal and Park Shore often have multiple AC zones and long duct runs. Condos in Vanderbilt Beach and Park Shore usually have compact closet units. We clean both.',
      'From Old Naples to Golden Gate and East Naples, Purix serves homes and businesses in Naples and surrounding Collier County communities.',
    ],
    localImage: photos.teamWithVan.src,
    localImageAlt: photos.teamWithVan.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Naples, explained for seasonal homes',
        body: [
          'Naples homes that sit closed for months build up stale, humid air inside the ductwork and AC. Our Air Duct Cleaning in Naples clears the ducts, coil, drain pan and air handler, so seasonal residences and Gulf-side condos are fresh and ready when owners return for the winter season.',
        ],
      },
      {
        heading: 'Why closed-up Naples homes develop musty AC odors',
        body: [
          'With the house shut and the AC barely running through the humid summer, moisture lingers around the coil and inside the ducts, feeding the musty smell many owners notice at move-in. A thorough duct and HVAC cleaning before the season removes that buildup at the source.',
        ],
      },
    ],
    pois: [
      { name: 'Naples Pier', note: 'historic Gulf of Mexico fishing pier, a landmark since 1888' },
      { name: 'Fifth Avenue South', note: 'downtown’s palm-lined strip of shops and restaurants' },
      { name: 'Naples Botanical Garden', note: '170-acre tropical garden and nature preserve' },
      { name: 'Tin City', note: 'rustic waterfront marketplace with boutiques and seafood eateries' },
      { name: 'Naples Zoo at Caribbean Gardens', note: 'historic zoo set in a longtime botanical garden' },
      { name: 'Clam Pass Park', note: 'Gulf beach reached by a boardwalk through mangroves' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d908636.9537631426!2d-81.62235391572993!3d26.04281512763367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88dae19b73c2d7ad%3A0x673f5318d72c9aaa!2sNaples%2C%20Florida%2C%20USA!3m2!1d26.139177699999998!2d-81.7955475!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760741867!5m2!1sen!2s',
    faqs: [
      {
        q: 'Can you clean my AC system before I return for the season?',
        a: 'Yes. Many seasonal homeowners schedule a cleaning ahead of their arrival. Call us to arrange access and timing.',
      },
      {
        q: 'Why does my AC smell musty after the house was closed up?',
        a: 'Humidity and dust can build up on wet AC components while a home sits closed. Cleaning the coil, drain pan and air handler often helps.',
      },
      {
        q: 'Do you clean homes with multiple AC zones?',
        a: 'Yes. We clean each system and its ductwork and check airflow in every zone.',
      },
      {
        q: 'Do you offer dryer vent cleaning in Naples?',
        a: 'Yes, including condo and roof-terminated vents.',
      },
      {
        q: 'How long does cleaning a multi-zone Naples home take?',
        a: 'Homes with several AC zones take longer than a single-system home, since each zone has its own ducts and equipment. We give you a timeframe when scheduling.',
      },
    ],
  },
  'cape-coral': {
    metaTitle: 'Reliable Air Duct Cleaning in Cape Coral - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Cape Coral? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Cape Coral, FL',
    heroSubtitle: 'Air Duct Cleaning in Cape Coral for single-story homes, waterfront properties and businesses, including long attic duct runs and dryer vents.',
    heroImage: photos.vanDuctCrew.src,
    heroImageAlt: photos.vanDuctCrew.alt,
    introHeading: 'Attic ductwork and AC system cleaning',
    intro: [
      'Many Cape Coral homes are single-story block construction with ductwork running through a hot attic. In summer, that ductwork bakes and sweats, and the AC runs nearly nonstop to keep up.',
      'Purix cleans the attic duct system and the AC equipment that feeds it. We can also inspect the attic runs for crushed, torn or disconnected sections that may need replacement. If the attic insulation around those ducts is thin or damaged, we also offer <a href="/insulation-replacement/">attic insulation replacement</a> and <a href="/blown-in-attic-insulation/">blown-in insulation</a>.',
    ],
    introImage: photos.negativeAirHose.src,
    introImageAlt: photos.negativeAirHose.alt,
    localHeading: 'Canal-front living and year-round AC',
    local: [
      'With hundreds of miles of canals, Cape Coral has warm, humid air for most of the year. Wet AC components collect buildup, which is a common source of musty odors when the system starts.',
      'Seasonal residents often come back to a stale-smelling home. Cleaning the coil, drain pan and air handler, along with the ductwork, is a good way to start the season fresh.',
      'From the Yacht Club and Cape Harbour to the Northwest Cape, Purix serves homes and businesses across Cape Coral.',
    ],
    localImage: photos.brandedVan.src,
    localImageAlt: photos.brandedVan.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Cape Coral, explained for single-story homes',
        body: [
          'Most Cape Coral homes are single-story with long duct runs snaking through a hot attic. Our Air Duct Cleaning in Cape Coral reaches those full attic runs, the registers and the AC coil and air handler, clearing the dust and debris that settle along the way in our climate.',
        ],
      },
      {
        heading: 'How attic ductwork shapes duct cleaning in Cape Coral',
        body: [
          'Long attic runs sit in serious heat and collect dust, insulation particles and debris over time. Cleaning the full length, rather than just the vents you can see, is what actually improves airflow and cuts the buildup that gets pushed back into the rooms below.',
        ],
      },
    ],
    pois: [
      { name: 'Four Mile Cove Ecological Preserve', note: 'mangrove preserve with a boardwalk along the Caloosahatchee River' },
      { name: 'Sun Splash Family Waterpark', note: 'a large, popular family waterpark' },
      { name: 'Cape Harbour', note: 'waterfront district with restaurants, shops and a marina' },
      { name: 'Yacht Club Community Park', note: 'longstanding riverfront park with a small beach and pier' },
      { name: 'Rotary Park Environmental Center', note: 'nature park with trails, boardwalks and an environmental center' },
      { name: 'Jaycee Park', note: 'popular riverfront park with walking paths and water views' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d915726.2578443693!2d-81.70687982367438!3d26.29229444282469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88db44a7e78016f5%3A0xafd1a4163a9b6ff2!2sCape%20Coral%2C%20Florida%2C%20USA!3m2!1d26.629737799999997!2d-81.9597375!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760759424!5m2!1sen!2s',
    faqs: [
      {
        q: 'Can you inspect the ductwork in my attic?',
        a: 'Yes. We check accessible attic runs for crushing, tears, disconnections and damaged insulation, and explain whether cleaning or replacement makes more sense.',
      },
      {
        q: 'What causes musty AC smells in Cape Coral homes?',
        a: 'Humidity keeps the coil and drain pan wet, and buildup on those surfaces is a common cause. HVAC mold cleaning focuses on those components.',
      },
      {
        q: 'Do you clean commercial systems in Cape Coral?',
        a: 'Yes. We provide commercial duct and HVAC cleaning for offices, restaurants and retail spaces.',
      },
      {
        q: 'Do you clean dryer vents in Cape Coral?',
        a: 'Yes, including roof-terminated vents.',
      },
      {
        q: 'Are weekend or after-hours appointments available in Cape Coral?',
        a: 'Yes. Purix is available 24 hours a day, 7 days a week, so we can schedule your Cape Coral service at a time that fits around work and family.',
      },
    ],
  },

  // ───────────── Miami-Dade ─────────────
  'north-miami-beach': {
    metaTitle: 'Reliable Air Duct Cleaning in North Miami Beach - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in North Miami Beach? Purix Air Duct & Dryer vent cleaning offers deep duct and coil cleaning plus dust removal. Book today!',
    h1: 'Air Duct Cleaning in North Miami Beach, FL',
    heroSubtitle: 'Air Duct Cleaning in North Miami Beach for homes, Intracoastal condos and local businesses near our Ives Dairy Road home base.',
    heroImage: photos.teamWithVan.src,
    heroImageAlt: photos.teamWithVan.alt,
    introHeading: 'Your neighborhood duct and HVAC cleaners',
    intro: [
      'North Miami Beach is our home turf. Our office on Ives Dairy Road is just minutes away, so homes and businesses here are among the easiest for us to schedule.',
      'The city has a mix of single-family homes from the 1950s through the 1970s, waterfront homes, and condo buildings along the Intracoastal. Purix cleans the ductwork and AC equipment in all of them, and we offer dryer vent cleaning too.',
    ],
    introImage: photos.blowerCleaning.src,
    introImageAlt: photos.blowerCleaning.alt,
    localHeading: 'Older homes, waterfront properties and condos',
    local: [
      'In neighborhoods like Fulford-by-the-Sea and Eastern Shores, many homes have older duct systems that have never been looked at closely. An <a href="/air-duct-inspection/">air duct inspection</a> shows what’s inside and whether anything is damaged.',
      'Waterfront homes and condos deal with extra humidity. Keeping the coil and drain pan clean is one of the best ways to prevent musty AC odors; see <a href="/ac-coil-cleaning/">AC coil cleaning</a>.',
      'Shops, offices and restaurants along West Dixie Highway and NE 163rd and 167th Streets can book commercial duct and HVAC cleaning.',
    ],
    localImage: photos.serviceTrucks.src,
    localImageAlt: photos.serviceTrucks.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in North Miami Beach, explained for mixed properties',
        body: [
          'North Miami Beach mixes mid-century homes with newer Intracoastal condos, and each has its own duct layout. Our Air Duct Cleaning in North Miami Beach covers the ducts, registers, coil and air handler, and because we are based nearby, scheduling in this neighborhood is straightforward.',
        ],
      },
      {
        heading: 'What older North Miami Beach homes should know about ducts',
        body: [
          'Many homes here date to the 1960s and still run their original ductwork. Over decades those ducts collect dust and can develop leaks or disconnections, so an inspection and cleaning often makes a clear difference in airflow and the amount of dust around the vents.',
        ],
      },
    ],
    pois: [
      { name: 'Oleta River State Park', note: 'large urban state park on Biscayne Bay off NE 163rd Street' },
      { name: 'Greynolds Park', note: 'historic Miami-Dade County park off West Dixie Highway' },
      { name: 'Ancient Spanish Monastery', note: 'historic cloister on West Dixie Highway' },
      { name: 'The Mall at 163rd Street', note: 'longtime shopping center along NE 163rd Street' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30198.351122033044!2d-80.2032109046131!3d25.94786748453079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9adcf84c3bfe1%3A0x124edef8955c78e8!2sNorth%20Miami%20Beach%2C%20Florida%2C%20USA!3m2!1d25.933148799999998!2d-80.1625463!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760456177!5m2!1sen!2s',
    faqs: [
      {
        q: 'Where are you located?',
        a: 'Our office is on Ives Dairy Road, just minutes from North Miami Beach.',
      },
      {
        q: 'My home is from the 1960s. Is the original ductwork still OK?',
        a: 'It may be, or it may have leaks, crushed sections or deteriorated insulation. An inspection shows its condition and whether cleaning or replacement is the better choice.',
      },
      {
        q: 'Do you clean condo AC systems along the Intracoastal?',
        a: 'Yes. We clean closet air handlers and condo ductwork and work within your building’s contractor rules.',
      },
      {
        q: 'Do you clean dryer vents in North Miami Beach?',
        a: 'Yes, for homes and condo buildings.',
      },
      {
        q: 'How long does a North Miami Beach visit usually take?',
        a: 'Most homes and condos take a few hours. The exact time depends on the number of vents, the length of the duct runs and how much buildup has collected inside.',
      },
    ],
  },
  aventura: {
    metaTitle: 'Reliable Air Duct Cleaning in Aventura - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Aventura? Purix Air Duct & Dryer vent cleaning offers deep air duct, coil and vent cleaning plus dust removal. Book today!',
    h1: 'Air Duct Cleaning in Aventura, FL',
    heroSubtitle: 'Air Duct Cleaning in Aventura for high-rise condos, townhomes and offices, with scheduling that works around your building’s access and elevator rules.',
    heroImage: photos.brandedVan.src,
    heroImageAlt: photos.brandedVan.alt,
    introHeading: 'Condo AC cleaning in Aventura',
    intro: [
      'Aventura is a few minutes east of our office on Ives Dairy Road. Most residents live in high-rise and mid-rise condos, where each unit has its own air handler in a closet and a short duct system above the ceiling.',
      'Those compact systems run nearly all year and collect dust and moisture quickly. Purix cleans the ductwork, coil, drain pan, blower and air handler cabinet, so the whole system is cleaned, not just the vents.',
    ],
    introImage: photos.hvacFilterService.src,
    introImageAlt: photos.hvacFilterService.alt,
    localHeading: 'High-rises, townhomes and offices',
    local: [
      'In buildings along Country Club Drive, on Williams Island and around the Yacht Club, we schedule within each building’s contractor hours and elevator rules.',
      'Musty odors are a common complaint in units that sit closed for part of the year. <a href="/hvac-mold-cleaning/">HVAC mold cleaning</a> focuses on the wet components where that buildup collects.',
      'Offices and medical practices around Aventura Mall and Biscayne Boulevard can book <a href="/commercial-air-duct-cleaning/">commercial air duct cleaning</a>.',
    ],
    localImage: photos.vanDryerCrew.src,
    localImageAlt: photos.vanDryerCrew.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Aventura, explained for condo living',
        body: [
          'Aventura is condo country, where AC systems are compact and tucked into closets. Our Air Duct Cleaning in Aventura cleans the coil, air handler and the shorter duct runs these homes use, and we coordinate with building management on access, parking and work hours so the visit goes smoothly.',
        ],
      },
      {
        heading: 'Scheduling duct and vent cleaning in Aventura buildings',
        body: [
          'High-rise buildings often have their own rules for vendor access, elevators and service hours. We plan around those requirements, so your air duct and vent cleaning fits the building schedule instead of fighting it, and your unit is back to normal the same day.',
        ],
      },
    ],
    pois: [
      { name: 'Aventura Mall', note: 'one of the largest shopping malls in the United States' },
      { name: 'Founders Park', note: 'city park with sports fields and green space' },
      { name: 'Aventura Arts & Cultural Center', note: 'waterfront performing arts venue' },
      { name: 'Don Soffer Exercise Trail', note: 'popular walking and running loop through the city' },
      { name: 'William Lehman Causeway', note: 'road connecting Aventura east to Sunny Isles Beach' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14348.821984529925!2d-80.17102055337413!3d25.96130003410945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9acf0b2276fd1%3A0x2b5cf9ea95a4b370!2sAventura%2C%20Florida%2C%20USA!3m2!1d25.9564812!2d-80.1392121!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760487954!5m2!1sen!2s',
    faqs: [
      {
        q: 'How close are you to Aventura?',
        a: 'Our office is on Ives Dairy Road, a few minutes west of Aventura.',
      },
      {
        q: 'My condo AC smells musty after I’ve been away. What causes it?',
        a: 'When a unit sits closed with the AC off or set high, humidity builds and buildup on the coil and drain pan can produce odors. Cleaning those components usually helps.',
      },
      {
        q: 'Does my building need to approve the work?',
        a: 'Many buildings have rules for contractors. Check with your management office, and we’ll schedule within their allowed hours.',
      },
      {
        q: 'Do you clean dryer vents in Aventura condos?',
        a: 'Yes, including long vent runs in condo buildings.',
      },
      {
        q: 'Do you offer evening or weekend appointments in Aventura?',
        a: 'Yes. Purix is available 24 hours a day, 7 days a week, so we can work around your schedule and your building’s preferred service windows.',
      },
    ],
  },
  'miami-gardens': {
    metaTitle: 'Reliable Air Duct Cleaning in Miami Gardens - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Miami Gardens? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Miami Gardens, FL',
    heroSubtitle: 'Air Duct Cleaning in Miami Gardens for homes, rentals and local businesses, plus dryer vent, coil and air handler cleaning.',
    heroImage: photos.serviceTrucks.src,
    heroImageAlt: photos.serviceTrucks.alt,
    introHeading: 'Duct and AC cleaning in Miami Gardens',
    intro: [
      'Miami Gardens is right next door to our office on Ives Dairy Road. Most of the city is single-family homes built from the 1960s to the 1980s, many with ductwork that’s decades old and AC equipment that has been replaced at least once.',
      'Purix cleans the supply and return ducts and the AC components, and we let you know if any ductwork is damaged or disconnected. Dryer vent cleaning is available too.',
    ],
    introImage: photos.ceilingVentHose.src,
    introImageAlt: photos.ceilingVentHose.alt,
    localHeading: 'Established neighborhoods across the city',
    local: [
      'In neighborhoods like Carol City, Andover, Norwood, Scott Lake and Rolling Oaks, many homes have a central return grille in a hallway that collects heavy dust. Return-side buildup is often the first thing we find in older systems.',
      'Homes with pets, large households or recent renovations often need duct cleaning sooner than the typical 3 to 5 year interval.',
      'Businesses along NW 27th Avenue and NW 183rd Street can book commercial duct and HVAC cleaning.',
    ],
    localImage: photos.vanDuctCrew.src,
    localImageAlt: photos.vanDuctCrew.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Miami Gardens, explained for homes and rentals',
        body: [
          'Miami Gardens neighborhoods like Carol City and Andover are full of single-family homes and rentals where ducts quietly collect dust. Our Air Duct Cleaning in Miami Gardens covers the supply and return runs, registers, coil and air handler, so the air moving through the home is cleaner.',
        ],
      },
      {
        heading: 'Why dust gathers around your return vents',
        body: [
          'A return vent pulls household air back toward the system, so it collects the heaviest dust in the house. Heavy buildup there is a common sign the ducts and coil need attention, and cleaning the system usually cuts the dust that keeps reappearing on the grille.',
        ],
      },
    ],
    pois: [
      { name: 'Hard Rock Stadium', note: 'home of the Miami Dolphins and major events' },
      { name: 'Florida Memorial University', note: 'Miami’s only historically Black university' },
      { name: 'St. Thomas University', note: 'private Catholic university in the city' },
      { name: 'Calder Casino', note: 'gaming venue along NW 27th Avenue' },
      { name: 'Betty T. Ferguson Recreational Complex', note: 'large municipal recreation complex' },
      { name: 'Miami Gardens Drive', note: 'major east-west corridor the city is named for' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28699.596315976843!2d-80.23448883303325!3d25.9532932367404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9afbb808c2f67%3A0xed99d888e5e26bd5!2sMiami%20Gardens%2C%20Florida%2C%20USA!3m2!1d25.9420377!2d-80.2456045!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760505086!5m2!1sen!2s',
    faqs: [
      {
        q: 'Are you close to Miami Gardens?',
        a: 'Yes. Our office is on Ives Dairy Road, just east of Miami Gardens.',
      },
      {
        q: 'Why is there so much dust around my return vent?',
        a: 'The return pulls air from the whole house back to the AC, so it collects the most dust. Heavy buildup at the return grille often means the return duct needs cleaning too.',
      },
      {
        q: 'Can you tell if my old ducts need to be replaced?',
        a: 'Yes. During an inspection we check for crushed, torn or disconnected sections and explain whether cleaning or replacement makes more sense.',
      },
      {
        q: 'Do you serve businesses in Miami Gardens?',
        a: 'Yes. Commercial duct and HVAC cleaning is available for offices, retail stores, churches and other commercial buildings in the city.',
      },
      {
        q: 'How long does duct cleaning take in a Miami Gardens home?',
        a: 'Most single-family homes take a few hours. Larger homes or systems with heavy buildup take longer, and we give you an expected timeframe when we schedule.',
      },
    ],
  },
  hialeah: {
    metaTitle: 'Reliable Air Duct Cleaning in Hialeah - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Hialeah? Purix Air Duct & Dryer vent cleaning offers deep air duct, coil and vent cleaning plus dust removal. Book today!',
    h1: 'Air Duct Cleaning in Hialeah, FL',
    heroSubtitle: 'Air Duct Cleaning in Hialeah for homes, duplexes and busy local businesses, including new AC units running on old ductwork.',
    heroImage: photos.vanDryerCrew.src,
    heroImageAlt: photos.vanDryerCrew.alt,
    introHeading: 'Duct and AC system cleaning for Hialeah homes',
    intro: [
      'Hialeah is one of the most densely built cities in South Florida, with blocks of concrete single-family homes and duplexes, many dating from the 1950s through the 1980s. In homes this age, the AC unit has often been replaced more than once while the original ductwork stayed in place.',
      'Purix cleans that ductwork along with the coil, blower and air handler. If ducts are damaged or poorly connected after past equipment changes, we’ll tell you, and we can quote <a href="/ac-duct-replacement/">AC duct replacement</a> if it makes sense.',
    ],
    introImage: photos.ductCamera.src,
    introImageAlt: photos.ductCamera.alt,
    localHeading: 'Homes, additions and duplexes',
    local: [
      'Many Hialeah homes have been expanded over the years, with additions tied into the existing duct system. Those added runs are often where airflow problems start, so we check them during every cleaning.',
      'Duplexes and small multi-family buildings often have one AC system per unit. We can clean each system and coordinate with owners and tenants.',
      'From East Hialeah to the west side near Hialeah Gardens, plus the commercial areas along the Palmetto Expressway, Purix serves homes and businesses across Hialeah.',
    ],
    localImage: photos.teamWithVan.src,
    localImageAlt: photos.teamWithVan.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Hialeah, explained for homes and duplexes',
        body: [
          'Hialeah has a dense mix of homes, duplexes and small businesses, many with ductwork older than the AC unit bolted to it. Our Air Duct Cleaning in Hialeah cleans the ducts, registers, coil and air handler so a newer system is not just recirculating dust from tired old ducts.',
        ],
      },
      {
        heading: 'Why new AC units still need the old ducts cleaned',
        body: [
          'Replacing an AC unit does not touch the ducts it blows through. If those runs are full of years of dust, the new system pushes that debris right back into your rooms, so cleaning the existing ductwork lets the upgrade actually deliver cleaner air.',
        ],
      },
    ],
    pois: [
      { name: 'Hialeah Park Racing & Casino', note: 'historic 1925 racetrack and casino known for its flamingos' },
      { name: 'Amelia Earhart Park', note: 'large county park with lakes, trails and a petting zoo' },
      { name: 'Milander Park & Center for Arts', note: 'recreation complex with sports fields and a theater' },
      { name: 'Westland Mall', note: 'longtime enclosed shopping mall' },
      { name: 'Leah Arts District', note: 'creative district known for murals and galleries' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d103040.77251772808!2d-80.30782320394681!3d25.89635723408767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9ba8b0e7ef5ef%3A0xfbb5a88631343c5e!2sHialeah%2C%20Florida%2C%20USA!3m2!1d25.8268582!2d-80.2810044!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760521633!5m2!1sen!2s',
    faqs: [
      {
        q: 'Do you clean AC systems in duplexes and rental units?',
        a: 'Yes. We can clean each unit’s system and work with owners or property managers on scheduling.',
      },
      {
        q: 'We replaced our AC unit but kept the old ducts. Should they be cleaned?',
        a: 'Usually, yes. Older ductwork holds years of dust that a new unit will keep pushing into your rooms. An inspection also checks that the old ducts are properly connected to the new equipment.',
      },
      {
        q: 'Do you serve businesses in Hialeah?',
        a: 'Yes. We clean commercial ductwork and HVAC equipment for offices, shops and other businesses.',
      },
      {
        q: 'Do you clean dryer vents in Hialeah?',
        a: 'Yes, for single-family homes and multi-unit buildings.',
      },
      {
        q: 'Do you give an upfront quote before any work starts?',
        a: 'Yes. We look over the system, explain what it needs and provide a clear, upfront quote before any cleaning begins, with no surprise charges afterward.',
      },
    ],
  },
  'miami-beach': {
    metaTitle: 'Reliable Air Duct Cleaning in Miami Beach - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Miami Beach? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Miami Beach, FL',
    heroSubtitle: 'Air Duct Cleaning in Miami Beach for oceanfront condos, Art Deco buildings and hospitality spaces, where salt air speeds up buildup.',
    heroImage: photos.vanDuctCrew.src,
    heroImageAlt: photos.vanDuctCrew.alt,
    introHeading: 'AC system cleaning by the ocean',
    intro: [
      'Miami Beach AC systems deal with salt air, high humidity and heavy use. Most residents live in condos and apartment buildings with compact air handlers in a closet, and those units collect dust and moisture fast.',
      'Purix cleans condo ductwork and AC equipment, including the coil, drain pan, blower and cabinet, and works within each building’s contractor rules. We also serve single-family homes on the islands, in Mid-Beach and in North Beach.',
    ],
    introImage: photos.airHandlerCleaning.src,
    introImageAlt: photos.airHandlerCleaning.alt,
    localHeading: 'Condos, historic buildings and island homes',
    local: [
      'Many South Beach buildings date to the 1930s and 1940s, with AC added long after construction. Ductwork in these buildings is often short and tucked into soffits and dropped ceilings.',
      'Homes on the Sunset Islands, in La Gorce and on Normandy Isles tend to have larger, multi-zone systems. We clean each system and check airflow room by room.',
      'Restaurants, hotels and shops can book <a href="/commercial-air-duct-cleaning/">commercial air duct cleaning</a>, and buildings with shared laundry rooms can schedule <a href="/commercial-dryer-vent-cleaning/">commercial dryer vent cleaning</a>.',
    ],
    localImage: photos.brandedVan.src,
    localImageAlt: photos.brandedVan.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Miami Beach, explained for condos and hotels',
        body: [
          'From South Beach to North Beach, Miami Beach runs on condos, historic Art Deco buildings and hospitality spaces. Our Air Duct Cleaning in Miami Beach cleans the coil, air handler and duct runs these systems use, handled carefully in older buildings where equipment sits in tight closets.',
        ],
      },
      {
        heading: 'How the beach environment affects your AC system',
        body: [
          'Salt air and constant humidity are hard on cooling equipment near the ocean. Moisture encourages musty odors and buildup on coils and inside ducts, so island properties often benefit from duct and HVAC cleaning on a more regular schedule than inland homes.',
        ],
      },
    ],
    pois: [
      { name: 'South Beach', note: 'famous southern beachfront district along Ocean Drive' },
      { name: 'Art Deco Historic District', note: 'preserved 1930s architecture around Ocean Drive and Collins Avenue' },
      { name: 'Lincoln Road Mall', note: 'pedestrian shopping and dining promenade' },
      { name: 'Lummus Park', note: 'beachfront park running along Ocean Drive' },
      { name: 'Miami Beach Convention Center', note: 'major event venue near Collins Avenue' },
      { name: 'South Pointe Park', note: 'waterfront park at the island’s southern tip' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114878.66017990804!2d-80.25604639599801!3d25.870855398973347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9a6172bfeddb9%3A0x37be1741259463eb!2sMiami%20Beach%2C%20Florida%2C%20USA!3m2!1d25.790654!2d-80.1300455!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760539240!5m2!1sen!2s',
    faqs: [
      {
        q: 'Do you work in Miami Beach condo buildings?',
        a: 'Yes. We coordinate with building management on access, elevator use and allowed work hours.',
      },
      {
        q: 'How does the beach environment affect my AC?',
        a: 'Salt air can corrode outdoor equipment over time. Inside, the bigger day-to-day issue is humidity, which keeps the coil and drain pan wet. Regular coil and drain cleaning helps.',
      },
      {
        q: 'Can you clean AC systems in older Art Deco buildings?',
        a: 'Yes. Systems in older buildings are often compact and tucked into soffits, so we plan access before we start.',
      },
      {
        q: 'Do you serve hotels and restaurants?',
        a: 'Yes. We clean commercial ductwork, HVAC equipment and dryer vents for hospitality businesses.',
      },
      {
        q: 'How often should an oceanfront Miami Beach AC be cleaned?',
        a: 'Most systems do well on a three-to-five-year cycle, but condos near the ocean dealing with constant salt air and humidity often benefit from the shorter end of that range.',
      },
    ],
  },
  doral: {
    metaTitle: 'Air Duct Cleaning in Doral, FL | Purix Air Duct',
    metaDescription:
      'Looking for Air Duct Cleaning in Doral? Purix Air Duct & Dryer vent cleaning offers deep air duct, coil and vent cleaning plus dust removal. Book today!',
    h1: 'Air Duct Cleaning in Doral, FL',
    heroSubtitle: 'Air Duct Cleaning in Doral for offices, showrooms and warehouses as well as townhomes and condos, scheduled around your business hours.',
    heroImage: photos.teamWithVan.src,
    heroImageAlt: photos.teamWithVan.alt,
    introHeading: 'Commercial and residential HVAC cleaning in Doral',
    intro: [
      'Doral is one of South Florida’s busiest business hubs, with offices, showrooms and warehouses near the airport and the Palmetto. It also has a fast-growing residential side, with newer townhomes, condos and single-family communities.',
      'Purix cleans commercial ductwork and HVAC equipment on a schedule that works around your business, and we clean residential systems in homes across Doral.',
    ],
    introImage: photos.furnaceFilter.src,
    introImageAlt: photos.furnaceFilter.alt,
    localHeading: 'Offices, warehouses and newer communities',
    local: [
      'Office and showroom spaces often have long ceiling duct runs serving many rooms. <a href="/commercial-air-duct-cleaning/">Commercial air duct cleaning</a> can be scheduled outside business hours.',
      'Warehouse and light-industrial buildings generate a lot of dust, and the office areas inside them often need more frequent filter changes and duct cleaning.',
      'In residential areas like Downtown Doral, Doral Isles and Doral Park, many homes and townhomes are newer and may still have construction dust in the ducts.',
    ],
    localImage: photos.serviceTrucks.src,
    localImageAlt: photos.serviceTrucks.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Doral, explained for business and home',
        body: [
          'Doral blends offices, showrooms and warehouses with newer townhomes and condos. Our Air Duct Cleaning in Doral handles both: larger commercial duct systems cleaned around your operating hours, and residential ducts, coils and air handlers cleaned with care for the living space.',
        ],
      },
      {
        heading: 'Do newer Doral townhomes really need duct cleaning',
        body: [
          'Even a townhome only a few years old collects construction dust, drywall fines and everyday debris in its ducts. A first cleaning clears that leftover building debris, and from there the system stays cleaner with far less dust settling around the vents.',
        ],
      },
    ],
    pois: [
      { name: 'Trump National Doral', note: 'golf resort with championship courses including the Blue Monster' },
      { name: 'Doral Central Park', note: 'large city park with a lake and jogging trails' },
      { name: 'CityPlace Doral', note: 'mixed-use shopping, dining and entertainment destination' },
      { name: 'Downtown Doral', note: 'main-street district of shops and restaurants' },
      { name: 'Morgan Levy Park', note: 'city park well known for its soccer fields' },
      { name: 'Doral Legacy Park', note: 'city park for sports, cultural arts and nature' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114854.51628813341!2d-80.33524887738066!3d25.8956755106156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9bc6ffa603329%3A0xb1282f675bf065b0!2sDoral%2C%20Florida%2C%20USA!3m2!1d25.821663599999997!2d-80.3341312!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760554918!5m2!1sen!2s',
    faqs: [
      {
        q: 'Do you clean HVAC systems in offices and warehouses?',
        a: 'Yes. We clean commercial ductwork and HVAC equipment for offices, showrooms and the office areas of warehouses.',
      },
      {
        q: 'Can you work outside our business hours?',
        a: 'Yes. We’re open 24 hours a day, 7 days a week, and can schedule around your operations.',
      },
      {
        q: 'My townhome is only a few years old. Do the ducts need cleaning?',
        a: 'They may. New construction often leaves drywall dust and debris in the ducts. An inspection will show what’s there.',
      },
      {
        q: 'Do you clean dryer vents in Doral?',
        a: 'Yes, for homes, townhomes and condo buildings.',
      },
      {
        q: 'How long does a Doral commercial duct cleaning take?',
        a: 'It depends on the size of the system and the building. We assess the job first, give you a clear timeframe, and can stage the work around your operating hours.',
      },
    ],
  },
  'coral-gables': {
    metaTitle: 'Reliable Air Duct Cleaning in Coral Gables - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Coral Gables? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Coral Gables, FL',
    heroSubtitle: 'Air Duct Cleaning in Coral Gables for historic homes, multi-zone estates and offices, handled carefully to protect original finishes and architectural detail.',
    heroImage: photos.brandedVan.src,
    heroImageAlt: photos.brandedVan.alt,
    introHeading: 'Duct and AC care for Coral Gables homes',
    intro: [
      'Many Coral Gables homes date to the 1920s and 1930s, built long before central air conditioning. Their duct systems were added later and often had to work around thick walls, plaster ceilings and architectural details.',
      'Purix cleans these systems carefully, protecting floors and finishes, and pays close attention to duct condition. Newer and larger homes, including multi-system estates, get the same thorough cleaning of ductwork, coils, blowers and air handlers.',
    ],
    introImage: photos.hvacCoilCleaning.src,
    introImageAlt: photos.hvacCoilCleaning.alt,
    localHeading: 'Historic homes, estates and the business district',
    local: [
      'In historic neighborhoods around the Biltmore and Granada, retrofitted ductwork can have sharp turns and tight connections. An <a href="/air-duct-inspection/">air duct inspection</a> helps catch leaks and disconnections.',
      'Larger homes in areas like Cocoplum and Gables Estates often have several AC zones. We clean each system and check airflow throughout the house.',
      'Offices along Miracle Mile, Ponce de Leon Boulevard and near the University of Miami can book commercial duct and HVAC cleaning.',
    ],
    localImage: photos.vanDryerCrew.src,
    localImageAlt: photos.vanDryerCrew.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Coral Gables, explained for historic homes',
        body: [
          'Coral Gables is known for its historic Mediterranean homes and grand estates, many with multiple AC zones. Our Air Duct Cleaning in Coral Gables cleans each zone’s ducts, coil and air handler while protecting plaster, tile and original finishes that these homes are built around.',
        ],
      },
      {
        heading: 'Cleaning ductwork in a historic home without damage',
        body: [
          'Older homes reward a careful approach. We protect finishes, work through existing access points and clean the full duct system under negative pressure, so the ductwork gets properly cleaned without disturbing the character and detail that make a Gables home special.',
        ],
      },
    ],
    pois: [
      { name: 'Biltmore Hotel', note: '1926 Mediterranean Revival hotel and National Historic Landmark' },
      { name: 'Venetian Pool', note: 'historic 1924 spring-fed pool carved from coral rock' },
      { name: 'Miracle Mile', note: 'downtown commercial strip of shops and restaurants' },
      { name: 'University of Miami', note: 'major private research university on its Coral Gables campus' },
      { name: 'Lowe Art Museum', note: 'art museum on the University of Miami campus' },
      { name: 'Coral Gables City Hall', note: 'historic 1928 Mediterranean-style civic landmark' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114893.36588377935!2d-80.32751697446056!3d25.85572694875192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9b78e141efa21%3A0x511093dc4495a9d6!2sCoral%20Gables%2C%20Florida%2C%20USA!3m2!1d25.7491968!2d-80.2635411!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760599834!5m2!1sen!2s',
    faqs: [
      {
        q: 'Can you clean ductwork in a historic home without damaging finishes?',
        a: 'We protect floors and work areas and plan access around existing finishes before we start. If a register or access point is difficult, we’ll talk it through with you first.',
      },
      {
        q: 'My home has several AC zones. Do you clean all of them?',
        a: 'Yes. We clean each system separately and quote each one so you know what’s included.',
      },
      {
        q: 'Is Coral Gables in your service area?',
        a: 'Yes. Coral Gables is part of our Miami-Dade service area.',
      },
      {
        q: 'Do you offer commercial service in Coral Gables?',
        a: 'Yes. We clean commercial ductwork and HVAC equipment and can schedule around office hours.',
      },
      {
        q: 'How should I prepare my Coral Gables home before the visit?',
        a: 'Very little is needed. Clearing a path to the air handler and vents helps; we protect floors and finishes and handle the rest once our technicians arrive.',
      },
    ],
  },

  // ───────────── Broward ─────────────
  hollywood: {
    metaTitle: 'Reliable Air Duct Cleaning in Hollywood - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Hollywood? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Hollywood, FL',
    heroSubtitle: 'Air Duct Cleaning in Hollywood for Hollywood Hills ranch homes, Broadwalk-area condos and local businesses, plus dryer vent and coil cleaning.',
    heroImage: photos.serviceTrucks.src,
    heroImageAlt: photos.serviceTrucks.alt,
    introHeading: 'Duct and AC cleaning just up the road in Hollywood',
    intro: [
      'Hollywood sits just north of our office, across the county line in Broward. Many homes here were built in the 1950s through the 1970s, and their ductwork has often been patched, extended or partly replaced over the decades.',
      'Purix cleans the supply and return ductwork and the AC equipment behind it, including the coil, blower and air handler. In older homes we also look closely at duct condition, since leaks and disconnected runs are common. Dryer vent cleaning is available too.',
    ],
    introImage: photos.negativeAirHose.src,
    introImageAlt: photos.negativeAirHose.alt,
    localHeading: 'Ranch homes, beach condos and Downtown businesses',
    local: [
      'In neighborhoods like Hollywood Hills, Hollywood Lakes and Emerald Hills, many ranch-style homes have ducts that run through low attics or were added after the home was built. An <a href="/air-duct-inspection/">air duct inspection</a> shows whether those runs need cleaning, repair or replacement.',
      'Condos along Hollywood Beach deal with salt air and humidity year-round. Closet air handlers in these units collect moisture and dust quickly, which is why <a href="/ac-coil-cleaning/">AC coil cleaning</a> is a common request.',
      'Offices, restaurants and shops in Downtown Hollywood and around Young Circle can book commercial duct and HVAC cleaning outside business hours.',
    ],
    localImage: photos.vanDuctCrew.src,
    localImageAlt: photos.vanDuctCrew.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Hollywood, explained for homes near the coast',
        body: [
          'Hollywood ranges from Hollywood Hills ranch houses to condos near the beachfront Broadwalk. Our Air Duct Cleaning in Hollywood cleans the ducts, registers, coil and air handler, with extra attention to the humidity and salt air that beachside units deal with year-round.',
        ],
      },
      {
        heading: 'Why older Hollywood homes get weak airflow to some rooms',
        body: [
          'In older ranch homes, long or aging duct runs collect buildup and can sag or come loose, starving the rooms at the end of the run. Cleaning and checking the ductwork often restores airflow to the rooms that never quite seem to cool.',
        ],
      },
    ],
    pois: [
      { name: 'Hollywood Beach Broadwalk', note: 'brick oceanfront promenade along the Atlantic' },
      { name: 'ArtsPark at Young Circle', note: 'downtown park with performances and public art' },
      { name: 'Anne Kolb Nature Center', note: 'Intracoastal nature center with an observation tower' },
      { name: 'Seminole Hard Rock Hotel & Casino', note: 'large guitar-shaped resort and casino' },
      { name: 'Downtown Hollywood', note: 'walkable district known for its mural project and dining' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29658.30594273264!2d-80.1923088957704!3d25.98679489515481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9a96fc7ff31a7%3A0x7d77abe75b7b868!2sHollywood%2C%20Florida%2C%20USA!3m2!1d26.0098511!2d-80.159142!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760620451!5m2!1sen!2s',
    faqs: [
      {
        q: 'Is Hollywood in your service area?',
        a: 'Yes. Hollywood is just north of our Miami office, and we serve homes and businesses throughout the city.',
      },
      {
        q: 'Some rooms in my older home get weak airflow. Is it the ducts?',
        a: 'It can be. Older duct systems often have leaks, crushed flex duct or disconnected runs. An inspection tells you whether cleaning, repair or replacement is the right fix.',
      },
      {
        q: 'Do you clean AC systems in beachfront condos?',
        a: 'Yes. We clean closet air handlers and condo ductwork and coordinate with building management on access.',
      },
      {
        q: 'Do you offer dryer vent cleaning in Hollywood?',
        a: 'Yes, for homes and condo buildings, including roof-terminated vents.',
      },
      {
        q: 'How often should a Hollywood home clean its air ducts?',
        a: 'Every three to five years suits most homes. Properties near the beach, or homes with pets, often benefit from cleaning a little more often than that.',
      },
    ],
  },
  miramar: {
    metaTitle: 'Reliable Air Duct Cleaning in Miramar - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Miramar? Purix Air Duct & Dryer vent cleaning offers deep air duct, coil and vent cleaning plus dust removal. Book today!',
    h1: 'Air Duct Cleaning in Miramar, FL',
    heroSubtitle: 'Air Duct Cleaning in Miramar for newer homes, townhomes and offices, from East Miramar to the Silver Shores communities, plus dryer vents.',
    heroImage: photos.vanDryerCrew.src,
    heroImageAlt: photos.vanDryerCrew.alt,
    introHeading: 'Duct and AC cleaning for Miramar’s newer communities',
    intro: [
      'Miramar has grown fast, and much of the city west of I-75 is construction from the 1990s and 2000s. Newer doesn’t mean clean: construction dust often settles in the ducts from day one, and many of these systems have never been cleaned.',
      'East Miramar has older homes with older duct systems. Wherever you are in the city, Purix cleans the ductwork and the AC equipment, including the coil, blower and air handler.',
    ],
    introImage: photos.blowerCleaning.src,
    introImageAlt: photos.blowerCleaning.alt,
    localHeading: 'Newer communities, townhomes and corporate offices',
    local: [
      'In communities like Silver Shores, Monarch Lakes, Sunset Lakes and Riviera Isles, many homes are around 20 years old, a common point for a first duct cleaning and an AC coil check.',
      'Townhomes often have compact systems with the air handler in a closet or garage. We clean those systems and check the condensate drain, which can clog and cause musty odors.',
      'Offices in the Miramar Park of Commerce and along Miramar Parkway can book <a href="/commercial-air-duct-cleaning/">commercial air duct cleaning</a> scheduled around business hours.',
    ],
    localImage: photos.teamWithVan.src,
    localImageAlt: photos.teamWithVan.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Miramar, explained for newer communities',
        body: [
          'Much of Miramar is newer master-planned homes and townhomes, from East Miramar to Silver Shores. Our Air Duct Cleaning in Miramar cleans the ducts, coil and air handler, clearing the construction dust newer homes hide and keeping airflow strong as the system ages.',
        ],
      },
      {
        heading: 'Do newer Miramar homes need their ducts cleaned',
        body: [
          'New construction leaves drywall dust and debris inside the ductwork, even in a home only a few years old. A first duct cleaning removes that leftover building debris, so the system is not quietly pushing it back into your rooms every time the AC runs.',
        ],
      },
    ],
    pois: [
      { name: 'Miramar Regional Park', note: 'large park with sports fields, aquatics and an amphitheater' },
      { name: 'Ansin Sports Complex', note: 'track-and-field venue that has hosted national championships' },
      { name: 'Miramar Cultural Center / ArtsPark', note: '800-seat performing-arts venue in Town Center' },
      { name: 'Miramar Town Center', note: 'civic and commercial hub housing city hall' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50218.71689005367!2d-80.26018335991562!3d25.974821739554983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9a698bf50e1f7%3A0x3ba9f9e721e3bcfa!2sMiramar%2C%20Florida%2C%20USA!3m2!1d25.9860762!2d-80.30356019999999!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760635896!5m2!1sen!2s',
    faqs: [
      {
        q: 'My home is newer. Do the ducts really need cleaning?',
        a: 'Often, yes. New homes can have drywall dust and construction debris in the ducts from the build. If the system has never been cleaned, an inspection will show what’s there.',
      },
      {
        q: 'Do you clean townhome AC systems?',
        a: 'Yes, including air handlers in closets and garages.',
      },
      {
        q: 'Do you clean offices in Miramar?',
        a: 'Yes. We clean commercial ductwork and HVAC equipment and can schedule outside business hours.',
      },
      {
        q: 'Do you clean dryer vents in Miramar?',
        a: 'Yes, including second-floor laundry rooms with long vent runs.',
      },
      {
        q: 'Do I need to be home for the Miramar appointment?',
        a: 'It helps to have someone there at the start and finish so we can reach the system and walk you through what we found, but you do not need to stay the whole time.',
      },
    ],
  },
  'pembroke-pines': {
    metaTitle: 'Reliable Air Duct Cleaning in Pembroke Pines - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Pembroke Pines? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Pembroke Pines, FL',
    heroSubtitle: 'Air Duct Cleaning in Pembroke Pines for two-story homes, HOA communities and offices, including houses running two separate AC systems.',
    heroImage: photos.vanDuctCrew.src,
    heroImageAlt: photos.vanDuctCrew.alt,
    introHeading: 'Duct and AC cleaning for suburban Pembroke Pines',
    intro: [
      'Most Pembroke Pines homes were built from the 1980s onward in planned communities, and many are two stories with ductwork running through an attic. Those long attic runs collect dust, and the upstairs often struggles to stay as cool as the downstairs.',
      'Purix cleans the full duct system and the AC equipment that feeds it. Because so much of the system sits in the attic, we also look at the condition of the ducts and the insulation around them.',
    ],
    introImage: photos.hvacFilterService.src,
    introImageAlt: photos.hvacFilterService.alt,
    localHeading: 'Two-story homes, HOA communities and 55+ condos',
    local: [
      'In communities like Silver Lakes, Pembroke Falls, Chapel Trail and Pembroke Lakes, two-story homes often have one system per floor or a zoned system. We clean each system and check airflow upstairs and down.',
      'If upstairs rooms stay hot, the attic may be part of the problem. Thin or settled insulation lets heat through the ceiling, and <a href="/blown-in-attic-insulation/">blown-in attic insulation</a> can add depth where it’s needed.',
      'We also clean AC systems in condos and villas in Century Village and other 55+ communities, where closet air handlers are common.',
    ],
    localImage: photos.brandedVan.src,
    localImageAlt: photos.brandedVan.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Pembroke Pines, explained for two-story homes',
        body: [
          'Two-story homes in Pembroke Pines often run separate AC systems for upstairs and downstairs, each with its own ducts and coil. Our Air Duct Cleaning in Pembroke Pines cleans both systems, so the upstairs that always runs warm gets the same airflow and attention as the main floor.',
        ],
      },
      {
        heading: 'Why your upstairs stays hotter than downstairs',
        body: [
          'Heat rises and upstairs systems work harder, so restricted or dusty ducts show up there first as weak airflow and uneven cooling. Cleaning the upstairs ducts and coil, and checking the runs, is often what evens out the temperature between floors.',
        ],
      },
    ],
    pois: [
      { name: 'C.B. Smith Park', note: 'county park with a water park and mini-golf' },
      { name: 'Pembroke Lakes Mall', note: 'enclosed regional mall near Pines and Flamingo' },
      { name: 'Charles F. Dodge City Center', note: 'city convention and event venue' },
      { name: 'Chapel Trail Nature Preserve', note: 'western wetland preserve with a boardwalk' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d57386.34209121893!2d-80.28238338213177!3d25.979635345681505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9a698bf8cc6ab%3A0x9be2cf42d1963635!2sPembroke%20Pines%2C%20Florida%2C%20USA!3m2!1d26.007765!2d-80.2962555!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760653153!5m2!1sen!2s',
    faqs: [
      {
        q: 'Why is my upstairs hotter than downstairs?',
        a: 'Upstairs rooms sit right under a hot attic. Restricted ductwork, thin attic insulation or a dirty coil can all make it worse. We can check the ducts and the attic in one visit.',
      },
      {
        q: 'Do you clean homes with two AC systems?',
        a: 'Yes. We clean each system separately and quote each one so you know what’s included.',
      },
      {
        q: 'Do you work in gated and HOA communities?',
        a: 'Yes, and we follow each community’s access rules for contractors.',
      },
      {
        q: 'Can you add attic insulation at the same time?',
        a: 'Yes. Duct cleaning and attic insulation work can be scheduled together.',
      },
      {
        q: 'How long does the service take for a two-story Pines home?',
        a: 'A two-story home with separate upstairs and downstairs systems takes longer than a single-system home. We give you an expected timeframe when we schedule the visit.',
      },
    ],
  },
  davie: {
    metaTitle: 'Air Duct Cleaning in Davie, FL | Purix Air Duct',
    metaDescription:
      'Looking for Air Duct Cleaning in Davie? Purix Air Duct & Dryer vent cleaning offers deep air duct, coil and vent cleaning plus dust removal. Book today!',
    h1: 'Air Duct Cleaning in Davie, FL',
    heroSubtitle: 'Air Duct Cleaning in Davie for large-lot ranch properties, newer communities and businesses, plus dryer vent and attic insulation work.',
    heroImage: photos.teamWithVan.src,
    heroImageAlt: photos.teamWithVan.alt,
    introHeading: 'Duct and AC cleaning for Davie’s larger homes',
    intro: [
      'Davie has a mix of large-lot ranch properties, established neighborhoods and newer communities. Larger homes often have long duct runs and more than one AC system, and properties with open land or horses see more dust and pollen than a typical home.',
      'Purix cleans each system’s ductwork and equipment, including the coil, blower and air handler, and checks airflow throughout the house.',
    ],
    introImage: photos.ceilingVentHose.src,
    introImageAlt: photos.ceilingVentHose.alt,
    localHeading: 'Ranch properties, family neighborhoods and campus-area businesses',
    local: [
      'On larger properties in areas like Long Lake Ranches, Shenandoah and Pine Island Ridge, outdoor dust and pollen come in every time a door opens. Regular filter changes help, and periodic duct cleaning removes what gets past them.',
      'Long attic duct runs are common in larger homes. If the attic insulation around them is thin or damaged, <a href="/insulation-replacement/">insulation replacement</a> can be planned along with duct work.',
      'Offices and businesses near Nova Southeastern University and along University Drive can book commercial duct and HVAC cleaning.',
    ],
    localImage: photos.serviceTrucks.src,
    localImageAlt: photos.serviceTrucks.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Davie, explained for large-lot properties',
        body: [
          'Davie mixes acreage and ranch properties with newer communities, and rural lots tend to get dusty fast. Our Air Duct Cleaning in Davie cleans the ducts, coil and air handler, and because we also handle attic insulation, exposed ductwork can be inspected while we are already up there.',
        ],
      },
      {
        heading: 'Will duct cleaning help a dusty home on acreage',
        body: [
          'Homes on open, rural lots pull in more outdoor dust and pollen, which settles in the ductwork and recirculates. Cleaning the system removes that reservoir of debris, so the house stays cleaner between the dustings that acreage living always seems to demand.',
        ],
      },
    ],
    pois: [
      { name: 'Nova Southeastern University', note: 'Florida’s largest private university, central Davie campus' },
      { name: 'Flamingo Gardens', note: 'botanical garden and wildlife sanctuary founded in 1927' },
      { name: 'Old Davie School Historical Museum', note: 'oldest standing schoolhouse in Broward County' },
      { name: 'Robbins Lodge Park', note: 'park preserving the historic 1917 Vance Robbins House' },
      { name: 'Broward College Central Campus', note: 'the college’s main campus, located in Davie' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114723.01101826924!2d-80.28995166826424!3d26.030477136743713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9a7e20aa07b1d%3A0xe7b2c8ac6892b1fc!2sDavie%2C%20Florida%2C%20USA!3m2!1d26.076478299999998!2d-80.25211569999999!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760669652!5m2!1sen!2s',
    faqs: [
      {
        q: 'Do you clean homes with multiple AC systems in Davie?',
        a: 'Yes. We clean each system and quote each one separately.',
      },
      {
        q: 'We live on acreage and the house gets dusty fast. Will duct cleaning help?',
        a: 'Duct cleaning removes dust that has built up inside the system. On properties with a lot of outdoor dust, a good filter changed on schedule matters just as much.',
      },
      {
        q: 'Do you work on attic insulation in Davie?',
        a: 'Yes. We remove old insulation, add blown-in insulation and handle full insulation replacement.',
      },
      {
        q: 'Do you clean dryer vents in Davie?',
        a: 'Yes, including long runs in larger homes.',
      },
      {
        q: 'How often should a Davie home schedule duct cleaning?',
        a: 'Every three to five years works for most homes, though properties on open, dusty acreage or with pets often benefit from a somewhat shorter schedule.',
      },
    ],
  },
  plantation: {
    metaTitle: 'Reliable Air Duct Cleaning in Plantation - Purix',
    metaDescription:
      'Looking for Air Duct Cleaning in Plantation? Purix Air Duct & Dryer vent cleaning offers deep air duct cleaning and dust buildup removal. Book today!',
    h1: 'Air Duct Cleaning in Plantation, FL',
    heroSubtitle: 'Air Duct Cleaning in Plantation for established homes, offices and medical suites, from the Jacaranda area to the larger Plantation Acres lots.',
    heroImage: photos.brandedVan.src,
    heroImageAlt: photos.brandedVan.alt,
    introHeading: 'Duct and AC cleaning for Plantation’s established homes',
    intro: [
      'Plantation is one of Broward’s more established cities, with tree-lined neighborhoods of 1960s and 1970s homes in the east and larger properties out west in Plantation Acres. Heavy tree cover means plenty of pollen around the home.',
      'Purix cleans the ductwork and AC equipment in homes and businesses across Plantation, and we look closely at duct condition in older homes.',
    ],
    introImage: photos.ductCamera.src,
    introImageAlt: photos.ductCamera.alt,
    localHeading: 'Mature neighborhoods and a busy business district',
    local: [
      'In older neighborhoods east of University Drive, such as Plantation Isles, the original ductwork may be 40 years old or more. An <a href="/air-duct-inspection/">air duct inspection</a> tells you whether it can be cleaned or should be replaced.',
      'Jacaranda and the communities farther west tend to have newer systems, where regular duct cleaning and <a href="/ac-coil-cleaning/">AC coil cleaning</a> keep things running well.',
      'Offices and medical buildings along Broward Boulevard and around Plantation Midtown can schedule commercial duct and HVAC cleaning.',
    ],
    localImage: photos.vanDryerCrew.src,
    localImageAlt: photos.vanDryerCrew.alt,
    extraSeo: [
      {
        heading: 'Air Duct Cleaning in Plantation, explained for established neighborhoods',
        body: [
          'Plantation is full of mature, tree-lined neighborhoods from Jacaranda to Plantation Acres. Our Air Duct Cleaning in Plantation cleans the ducts, coil and air handler for established homes and offices, including the medical suites where clean, well-moving air really matters.',
        ],
      },
      {
        heading: 'How all those trees affect your ductwork in Plantation',
        body: [
          'Heavy tree cover means more pollen and fine organic debris drawn into the AC system through doors, windows and the return. That material collects in the ducts and on the coil over the years, so wooded lots often see a clear benefit from a thorough cleaning.',
        ],
      },
    ],
    pois: [
      { name: 'Plantation Heritage Park', note: 'county park with botanical gardens, a lake and disc golf' },
      { name: 'Broward Mall', note: 'major enclosed regional mall on University Drive' },
      { name: 'Plantation Central Park', note: 'city park with pools, a tennis center and ball fields' },
      { name: 'Volunteer Park', note: 'community park hosting the weekly Plantation Farmers Market' },
      { name: 'Plantation Historical Museum', note: 'local history museum near the library' },
    ],
    directionsEmbed:
      'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114703.89475076065!2d-80.28945285631006!3d26.0500185395907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88d9070fefbb13c3%3A0x5d77828d8dcd7916!2sPlantation%2C%20Florida%2C%20USA!3m2!1d26.1275862!2d-80.23310359999999!4m5!1s0x88d9ad0d9d62c0b1%3A0xd0c16c9b02b5647e!2sPurix%20Air%20Duct%20%26%20Dryer%20vent%20cleaning%2C%201021%20Ives%20Dairy%20Rd%20Ste%20212%2C%20Miami%2C%20FL%2033179%2C%20United%20States!3m2!1d25.9657381!2d-80.18223189999999!5e0!3m2!1sen!2s!4v1792760708826!5m2!1sen!2s',
    faqs: [
      {
        q: 'How old does ductwork have to be before it should be replaced?',
        a: 'Age alone doesn’t decide it. We check for crushing, tears, disconnections and deteriorated insulation, then explain whether cleaning or replacement makes more sense.',
      },
      {
        q: 'Do you clean HVAC systems in medical offices?',
        a: 'We clean commercial ductwork and HVAC equipment in office buildings, including medical offices, and schedule around your hours.',
      },
      {
        q: 'There are lots of trees around my home. Does that matter?',
        a: 'Heavy tree cover means more pollen and debris for your filter and ducts to collect. Regular filter changes help, and periodic cleaning removes buildup.',
      },
      {
        q: 'Do you clean dryer vents in Plantation?',
        a: 'Yes, for homes and multi-unit buildings.',
      },
      {
        q: 'Do you provide a written quote before starting the work?',
        a: 'Yes. Once we understand the size of the system and the scope of the job, you get a clear quote before any work begins, with no surprises afterward.',
      },
    ],
  },
};
