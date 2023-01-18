import { Product } from '../models/products';
import { Wishlist, WishlistItem } from '../models/wishlist';

export const getWishlistItemFromProduct = (product: Product): WishlistItem => {
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
