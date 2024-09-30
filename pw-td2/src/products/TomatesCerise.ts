import { IProduct } from '../Interfaces/IProduct';
import { v4 as uuidv4 } from 'uuid';

// Tomates cerise vendues au kg
export class TomatesCerise implements IProduct {
  id: string;
  name: string;
  unitPrice: number;
  unit: string;

  constructor() {
    this.id = uuidv4();
    this.name = "Tomates cerise";
    this.unitPrice = 3.5; // 3,5€ le kg
    this.unit = "kg";
  }

  getPrice(quantity: number): number {
    return this.unitPrice * quantity;
  }
}
