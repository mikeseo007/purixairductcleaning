import type { ImageMetadata } from 'astro';
import naples from '../assets/images/Purix-Air-Duct-Cleaning-Naples-Logo.webp';
import bocaRaton from '../assets/images/Purix-Air-Duct-Dryer-Vent-Cleaning-boca-raton-Website-Logo.webp';
import boyntonBeach from '../assets/images/Purix-Air-Duct-Dryer-Vent-Cleaning-boynton-beach-Website-Logo.webp';
import capeCoral from '../assets/images/Purix-Air-Duct-Dryer-Vent-Cleaning-cape-coral-Website-Logo.webp';
import palmBeach from '../assets/images/Purix-Air-Duct-Dryer-Vent-Cleaning-palm-beach-Website-Logo.webp';
import fortLauderdale from '../assets/images/Purix-Fort-Lauderdale-website-logo.webp';

/**
 * Dedicated, location-specific logo lockups, keyed by location slug. Used by the
 * header and footer on the six location landing pages that have their own NAP.
 * Any location not listed here keeps the sitewide Purix logo. All six source
 * files are 750×300 horizontal lockups.
 */
export const locationLogos: Record<string, ImageMetadata> = {
  naples,
  'boca-raton': bocaRaton,
  'boynton-beach': boyntonBeach,
  'cape-coral': capeCoral,
  'palm-beach': palmBeach,
  'fort-lauderdale': fortLauderdale,
};

export const getLocationLogo = (slug: string): ImageMetadata | undefined => locationLogos[slug];
