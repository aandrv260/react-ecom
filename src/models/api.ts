import { Image } from './image';

export type APIEndpoint = '' | 'products' | 'categories';
export type FetchDataCallbackAction<T> = (data: T) => void;
export type FetchData = (endpoint: APIEndpoint) => Promise<unknown> | never;
export type FetchSpecificData<T> = (callback?: FetchDataCallbackAction<T>) => Promise<T> | never;

export interface ProductData {}

export interface CategoryData {
  id: string;
  title: string;
  handle: string;
  image: Image;
  url: string;
  products: ProductData[];
}

export type AllCategoriesData = CategoryData[];
