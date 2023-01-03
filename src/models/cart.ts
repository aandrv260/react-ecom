import { Product } from './products';

export interface Cart {
  items: Product[];
  subtotal: number;
  shippingPrice: number;
  total: number;
  totalItems: number;
}
