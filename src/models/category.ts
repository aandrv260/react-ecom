import { ID } from './general';
import { Image } from './image';
import { Product } from './products';

export interface ProductCategory {
  id: ID;
  title: string;
}

export interface Category extends ProductCategory {
  image: Image;
  products: Product[];
}
