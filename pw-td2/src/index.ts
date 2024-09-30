
import { v4 as uuidv4 } from 'uuid';
import { isUUID } from 'validator';
import { Cart } from './classes/Cart';
import { Citron } from './products/Citron';
import { HuileOlive } from './products/HuileOlive';
import { Sucre } from './products/Sucre';
import { TomatesCerise } from './products/TomatesCerise';

export type Planet = {
  name: string;
  distanceFromEarth: number; 
}

//Enumeration
export enum StarshipStatus {
  PARKED = 'stationné',
  TAKING_OFF = 'en cours de décollage',
  FLYING = 'en vol',
  LANDING = 'en cours d\'atterrissage'
}

// Class Starship
export class Starship {
  ref: string;
  speed: number;
  status: StarshipStatus;
  id: string;

  constructor(ref: string, speed: number, id?: string) {
    this.ref = ref;
    this.speed = speed;
    this.status = StarshipStatus.PARKED;

    // Assign a UUID if no id is passed, else validate the passed id
    if (id) {
      if (!isUUID(id, 4)) {
        throw new Error("L'ID fourni n'est pas un UUID valide.");
      }
      this.id = id;
    } else {
      this.id = uuidv4();
    }
  }

  
  // Method to take off the starship
  takeOff() {
    if (this.status !== StarshipStatus.PARKED) {
      throw new Error("Le vaisseau ne peut pas décoller, il n'est pas stationné.");
    }
    console.log(`Le vaisseau ${this.ref} (ID: ${this.id}) est en train de décoller.`);
    this.status = StarshipStatus.TAKING_OFF;
  }

  // Method to fly the starship
  fly() {
    if (this.status !== StarshipStatus.TAKING_OFF) {
      throw new Error("Le vaisseau ne peut pas voler, il doit d'abord décoller.");
    }
    console.log(`Le vaisseau ${this.ref} (ID: ${this.id}) est maintenant en vol.`);
    this.status = StarshipStatus.FLYING;
  }

  // Method to land the starship
  land() {
    if (this.status !== StarshipStatus.FLYING) {
      throw new Error("Le vaisseau ne peut pas atterrir, il n'est pas en vol.");
    }
    console.log(`Le vaisseau ${this.ref} (ID: ${this.id}) est en train d'atterrir.`);
    this.status = StarshipStatus.LANDING;
  }

  // Method to park the starship
  park() {
    if (this.status !== StarshipStatus.LANDING) {
      throw new Error("Le vaisseau ne peut pas se garer, il doit d'abord atterrir.");
    }
    console.log(`Le vaisseau ${this.ref} (ID: ${this.id}) est maintenant stationné.`);
    this.status = StarshipStatus.PARKED;
  }
}

// Creer une instance de Strarship
const prometheus = new Starship('Prometheus', 100000);

try {
  prometheus.takeOff();
  prometheus.fly();
  prometheus.land();
  prometheus.park();
} catch (error) {
  console.error(error.message);
}

// 1. Créer un tableau typé planets
const planets: Planet[] = [
  { name: 'Mercury', distanceFromEarth: 77 },
  { name: 'Venus', distanceFromEarth: 41 },
  { name: 'Mars', distanceFromEarth: 78 },
  { name: 'Jupiter', distanceFromEarth: 628 },
  { name: 'Saturn', distanceFromEarth: 1275 },
  { name: 'Uranus', distanceFromEarth: 2721 },
  { name: 'Neptune', distanceFromEarth: 4347 },
];

// 2. Trier par distance croissante
const planetsByDistance = [...planets].sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log('Planètes triées par distance croissante :', planetsByDistance);

// 3. Trier par ordre alphabétique croissant
const planetsByNameAsc = [...planets].sort((a, b) => a.name.localeCompare(b.name));
console.log('Planètes triées par ordre alphabétique croissant :', planetsByNameAsc);

// 4. Trier par ordre alphabétique décroissant
const planetsByNameDesc = [...planets].sort((a, b) => b.name.localeCompare(a.name));
console.log('Planètes triées par ordre alphabétique décroissant :', planetsByNameDesc);

// 5. Calculer la distance moyenne avec reduce
const totalDistance = planets.reduce((acc, planet) => acc + planet.distanceFromEarth, 0);
const averageDistance = totalDistance / planets.length;
console.log('Distance moyenne de la Terre aux planètes :', averageDistance.toFixed(2), 'millions de km');


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


// Création du panier
const cart = new Cart();

// Création des produits
const citron = new Citron();
const huileOlive = new HuileOlive();
const sucre = new Sucre();
const tomatesCerise = new TomatesCerise();

// Ajout des produits dans le panier
cart.add(citron, 2);              // 2 citrons
cart.add(huileOlive, 1.5);        // 1,5 litres d'huile d'olive
cart.add(sucre, 0.5);             // 500g de sucre
cart.add(citron, 5);              // 5 citrons supplémentaires
cart.add(sucre, 3);               // 3kg de sucre
cart.add(tomatesCerise, 1.5);     // 1,5kg de tomates cerises

// Affichage des informations dans le terminal
console.log(`Nombre de types de produits: ${cart.orderLine.length}`);
console.log(`Montant pour les tomates: ${cart.calculateAmountByProduct(tomatesCerise).toFixed(2)}€`);
console.log(`Montant total du panier: ${cart.calculateAmount().toFixed(2)}€`);
console.log(cart.displayDetails().join('\n'));
