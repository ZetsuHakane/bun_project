import { IProduct } from '../Interfaces/IProduct';

interface OrderLine {
  product: IProduct;
  quantity: number;
}

export class Cart {
  private orderLines: OrderLine[] = [];
  orderLine: any;

  // Ajoute un produit avec une quantité au panier
  add(product: IProduct, quantity: number) {
    this.orderLines.push({ product, quantity });
  }

  // Calcule le montant total pour chaque type de produit
  calculateAmountByProduct(product: IProduct): number {
    const line = this.orderLines.find(line => line.product.id === product.id);
    if (line) {
      return line.product.getPrice(line.quantity);
    }
    return 0;
  }

  // Calcule le montant total du panier
  calculateAmount(): number {
    return this.orderLines.reduce((total, line) => total + line.product.getPrice(line.quantity), 0);
  }

  // Affiche les détails du panier
  displayDetails(): string[] {
    return this.orderLines.map(line => {
      const { id, name, unitPrice, unit } = line.product;
      const quantity = line.quantity;
      const amount = line.product.getPrice(quantity).toFixed(2);

      return `Produit: ${name}, Quantité: ${quantity} ${unit}, Prix Unitaire: ${unitPrice}€, Montant: ${amount}€`;
    });
  }
}
