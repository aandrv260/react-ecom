import { Category } from './category';
import { ID } from './general';
import { Image } from './image';

export interface Product {
  id: ID;
  title: string;
  image: Image;
  price: number;
  comparePrice?: number;
  quantity: number;
  category: Category;
}
