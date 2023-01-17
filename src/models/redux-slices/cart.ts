import { CartItem } from '../cart';
import { Product } from '../products';

export type AddItemPayload = CartItem;
export type RemoveItemPayload = string;
export interface ChangeQuantityPayload {
  id: string;
  newQuantity: number;
}
