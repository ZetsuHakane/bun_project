// src/interfaces/IProduct.ts
export interface IProduct {
    id: string;
    name: string;
    unitPrice: number;
    unit: string;
    getPrice(quantity: number): number;
  }
  