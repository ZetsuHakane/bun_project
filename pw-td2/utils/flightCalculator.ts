import { Planet } from '../src/index';
import { Starship } from '../src/index';

// La fonction calcule la durée du vol depuis la Terre jusqu'à une planète donnée
export function calculateFlightDurationFromEarth(
  planet: Planet,
  starship: Starship,
  unity: 'hours' | 'days' = 'hours'
): number {
  // Distance entre la Terre et la planète (en km)
  const distance = planet.distanceFromEarth * 1_000_000; // distance en millions de km
  
  // Vitesse du vaisseau (en km/h)
  const speed = starship.speed; 
  
  // Calcul du temps de vol en heures
  const flightDurationInHours = distance / speed;
  
  // Si l'unité est "days", on convertit en jours
  if (unity === 'days') {
    return flightDurationInHours / 24;
  }
  
  // Sinon, on retourne le temps en heures
  return flightDurationInHours;
}
