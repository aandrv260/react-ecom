import { ID } from './general';
import { Image } from './image';
import { Product } from './products';

export interface Category {
  id: ID;
  title: string;
  image: Image;
  products: Product[];
}
