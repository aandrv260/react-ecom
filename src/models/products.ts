import { ProductCategory } from './category';
import { ID } from './general';
import { Image } from './image';

export type ProductRatingStars = 1 | 2 | 3 | 4 | 5;

export interface Product {
  id: ID;
  title: string;
  description: string;
  handle: string;
  url: string;
  image: Image;
  price: number;
  comparePrice?: number;
  quantity: number;
  // TODO: Make the rating optional
  ratingStars: ProductRatingStars;
  category: ProductCategory;
}
