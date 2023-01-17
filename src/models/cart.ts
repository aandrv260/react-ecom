import { Product } from './products';

export interface Cart {
  items: CartItem[];
  subtotal: number;
  total: number;
  totalItems: number;
  isHidden: boolean;
}

export interface CartItem {
  product: Readonly<Product>;
  quantity: number;
}
