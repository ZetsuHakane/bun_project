import { IProduct } from '../Interfaces/IProduct';
import { v4 as uuidv4 } from 'uuid';

// Huile d'olive vendue au litre
export class HuileOlive implements IProduct {
  id: string;
  name: string;
  unitPrice: number;
  unit: string;

  constructor() {
    this.id = uuidv4();
    this.name = "Huile d'olive";
    this.unitPrice = 5; 
    this.unit = "litre";
  }

  getPrice(quantity: number): number {
    return this.unitPrice * quantity;
  }
}
