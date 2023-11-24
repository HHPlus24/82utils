import { degreeToRadian } from './degreeToRadian';

export const calculateDistance = (
  pt1: { latitude: number; longitude: number },
  pt2: { latitude: number; longitude: number }
): number => {
  const RADIUS_OF_EARTH: number = 6371;

  const [lat1Rad, lon1Rad] = [pt1.latitude, pt1.longitude].map(degreeToRadian);
  const [lat2Rad, lon2Rad] = [pt2.latitude, pt2.longitude].map(degreeToRadian);

  const deltaLat: number = lat2Rad - lat1Rad;
  const deltaLon: number = lon2Rad - lon1Rad;

  const a: number =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLon / 2) ** 2;
  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance: number = RADIUS_OF_EARTH * c;

  return distance;
};
