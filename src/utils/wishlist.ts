import { Product } from '../models/products';
import { Wishlist, WishlistItem } from '../models/wishlist';

export const convertProductToWishlistItem = (product: Product): WishlistItem => {
  return {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    comparePrice: product.comparePrice,
  };
};

export const wishlistAlreadyContainsItem = (state: Wishlist, item: WishlistItem): boolean => {
  const itemIsAlreadyInWishlist = state.items.some(curItem => curItem.id === item.id);
  return itemIsAlreadyInWishlist;
};

export const findIndexOfWishlistItemById = (state: Wishlist, id: string): number => {
  return state.items.findIndex(curItem => curItem.id === id);
};

export const updateWishlistItemsCount = (state: Wishlist) => {
  state.totalItems = state.items.length;
};
