import { ProductCategory } from './category';
import { ID } from './general';
import { Image } from './image';

export type ProductRatingStars = 1 | 2 | 3 | 4 | 5;

export interface Item {
  id: ID;
  title: string;
  image: Image;
  price: number;
  comparePrice?: number;
}
export interface Product extends Item {
  description: string;
  handle: string;
  quantity: number;
  // TODO: Make the rating optional
  ratingStars: ProductRatingStars;
  category: ProductCategory;
}
