import { IProduct } from '../Interfaces/IProduct';
import { v4 as uuidv4 } from 'uuid';

// Sucre vendu au kg, avec un prix fluctuant simulé
export class Sucre implements IProduct {
  id: string;
  name: string;
  unitPrice: number;
  unit: string;

  constructor() {
    this.id = uuidv4();
    this.name = "Sucre";
    this.unitPrice = this.getRandomPrice(); // Simulation d'un prix fluctuant
    this.unit = "kg";
  }

  getRandomPrice(): number {
    return 3.5 + Math.random() * 1; // Simule une variation entre 3,5€ et 4,5€
  }

  getPrice(quantity: number): number {
    return this.unitPrice * quantity;
  }
}
