import { Image } from './image';
import { Product } from './products';

export type FetchDataCallbackAction<T> = (data: T) => void;
export type FetchData = (endpoint: string) => Promise<unknown> | never;

export type FetchDataAction<T> = (
  endpoint: string,
  callback: FetchDataCallbackAction<T>
) => Promise<T> | never;

export type FetchSpecificData<T> = (callback?: FetchDataCallbackAction<T>) => Promise<T> | never;
export type FetchSpecificDataByID<T> = (
  id: string,
  callback?: FetchDataCallbackAction<T>
) => Promise<T> | never;

export type ProductData = Product;

export interface CategoryData {
  id: string;
  title: string;
  handle: string;
  image: Image;
  url: string;
  products: ProductData[];
}

export type AllCategoriesData = CategoryData[];
