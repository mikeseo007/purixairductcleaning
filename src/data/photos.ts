import type { ImageMetadata } from 'astro';
import brandedVan from '../assets/images/branded-van.jpg';
import ceilingInspection from '../assets/images/ceiling-inspection.jpg';
import ceilingVentHose from '../assets/images/ceiling-vent-hose.jpg';
import dryerVentExterior from '../assets/images/dryer-vent-exterior.jpg';
import ductCamera from '../assets/images/duct-camera.jpg';
import ductPlans from '../assets/images/duct-plans.jpg';
import furnaceFilter from '../assets/images/furnace-filter.jpg';
import hvacFilterService from '../assets/images/hvac-filter-service.jpg';
import negativeAirHose from '../assets/images/negative-air-hose.jpg';
import negativeAirLadder from '../assets/images/negative-air-ladder.jpg';
import serviceTrucks from '../assets/images/service-trucks.jpg';
import teamWithVan from '../assets/images/team-with-van.jpg';
import vanDryerCrew from '../assets/images/van-dryer-crew.jpg';
import vanDuctCrew from '../assets/images/van-duct-crew.jpg';
import insulationRemoval from '../assets/images/insulation-removal.jpg';
import insulationBlownIn from '../assets/images/insulation-blown-in.jpg';
import insulationReplacement from '../assets/images/insulation-replacement.jpg';
import hvacCoilCleaning from '../assets/images/hvac-coil-cleaning.jpg';
import airHandlerCleaning from '../assets/images/air-handler-cleaning.jpg';
import blowerCleaning from '../assets/images/blower-wheel-cleaning.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** Photos in the same family look alike, so a page shows at most one of them. */
  family: string;
}

export const photos = {
  brandedVan: { src: brandedVan, alt: 'Purix service van parked outside a South Florida home', family: 'van' },
  serviceTrucks: { src: serviceTrucks, alt: 'Purix technicians with service trucks at a South Florida home', family: 'trucks' },
  teamWithVan: { src: teamWithVan, alt: 'Two Purix technicians with duct cleaning equipment beside the service van', family: 'team' },
  vanDryerCrew: { src: vanDryerCrew, alt: 'Purix crew cleaning a dryer vent duct beside the service van', family: 'crew' },
  vanDuctCrew: { src: vanDuctCrew, alt: 'Purix technicians preparing duct cleaning equipment beside the open service van', family: 'van-crew' },
  ceilingVentHose: { src: ceilingVentHose, alt: 'Purix technician connecting a cleaning hose to a ceiling supply vent', family: 'ceiling-hose' },
  ductCamera: { src: ductCamera, alt: 'Purix technician inspecting a ceiling duct with a camera and monitor', family: 'camera' },
  ductPlans: { src: ductPlans, alt: 'Purix technician reviewing ductwork plans on site', family: 'plans' },
  ceilingInspection: { src: ceilingInspection, alt: 'Purix technician on a ladder inspecting an open ceiling vent', family: 'ladder' },
  furnaceFilter: { src: furnaceFilter, alt: 'Purix technician replacing the air filter in an air handler', family: 'filter' },
  hvacFilterService: { src: hvacFilterService, alt: 'Purix technician installing a clean air filter during an HVAC service', family: 'filter' },
  negativeAirHose: { src: negativeAirHose, alt: 'Purix technician running a negative-air hose up to a ceiling duct', family: 'negative-air' },
  negativeAirLadder: { src: negativeAirLadder, alt: 'Purix technician on a ladder with a negative-air hose connected to a ceiling duct', family: 'negative-air' },
  dryerVentExterior: { src: dryerVentExterior, alt: 'Purix technician cleaning a dryer vent connection in a laundry area', family: 'dryer' },
  insulationRemoval: { src: insulationRemoval, alt: 'Technician vacuuming old insulation out of an attic', family: 'insulation-removal' },
  insulationBlownIn: { src: insulationBlownIn, alt: 'Technician blowing new insulation between attic joists', family: 'insulation-blown' },
  insulationReplacement: { src: insulationReplacement, alt: 'Technician installing new attic insulation', family: 'insulation-replacement' },
  hvacCoilCleaning: { src: hvacCoilCleaning, alt: 'Technician cleaning an evaporator coil inside an open air handler', family: 'coil' },
  airHandlerCleaning: { src: airHandlerCleaning, alt: 'Technician cleaning the inside of an open air handler', family: 'handler' },
  blowerCleaning: { src: blowerCleaning, alt: 'Technician brushing dust off a blower wheel', family: 'blower' },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

const all: Photo[] = Object.values(photos);

/** Company vehicle shots suit any section, so they're the first fallback when a section's own photos are taken. */
export const vehicles: Photo[] = [photos.teamWithVan, photos.vanDuctCrew, photos.brandedVan, photos.serviceTrucks, photos.vanDryerCrew];

export const familyOf = (img: ImageMetadata) => all.find((p) => p.src.src === img.src)?.family ?? img.src;

/** Keys to seed a `pickPhoto` set with photos already on the page. */
export const usedKeys = (images: ImageMetadata[]) => images.flatMap((img) => [familyOf(img), img.src]);

/**
 * Picks the first candidate whose family isn't already on the page, then records it.
 * Falls back to any unused family in the library, then to any unused file, and only
 * repeats a photo when every file is already on the page.
 * `minWidth` and `landscape` keep small or tall files out of large, wide slots,
 * where they would be upscaled or cropped to a sliver.
 */
export function pickPhoto(candidates: Photo[], used: Set<string>, fit: { minWidth?: number; landscape?: boolean } = {}): Photo {
  const fits = (p: Photo) => p.src.width >= (fit.minWidth ?? 0) && (!fit.landscape || p.src.width / p.src.height >= 1.2);
  const fresh = (p: Photo) => !used.has(p.family) && !used.has(p.src.src);
  const good = (p: Photo) => fresh(p) && fits(p);
  const choice =
    candidates.find(good) ??
    vehicles.find(good) ??
    all.find(good) ??
    candidates.find(fresh) ??
    vehicles.find(fresh) ??
    all.find(fresh) ??
    candidates.find((p) => !used.has(p.src.src)) ??
    candidates[0];
  used.add(choice.family);
  used.add(choice.src.src);
  return choice;
}

export const asPhoto = (src: ImageMetadata, alt: string): Photo =>
  all.find((p) => p.src.src === src.src) ?? { src, alt, family: src.src };
