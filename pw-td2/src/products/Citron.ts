import { IProduct } from '../Interfaces/IProduct';
import { v4 as uuidv4 } from 'uuid';

// Citron vendu à l'unité
export class Citron implements IProduct {
  id: string;
  name: string;
  unitPrice: number;
  unit: string;

  constructor() {
    this.id = uuidv4();
    this.name = "Citron";
    this.unitPrice = 0.5;
    this.unit = "unité";
  }

  getPrice(quantity: number): number {
    return this.unitPrice * quantity;
  }
}
