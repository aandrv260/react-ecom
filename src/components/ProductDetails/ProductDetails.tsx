import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import scss from './ProductDetails.module.scss';
import { getStyleClassName } from '../../utils/general';
import Button from '../Button/Button';
import { ProductData } from '../../models/api';
import Prices from '../PricesBox/PricesBox';
import Rating from '../Rating/Rating';
import { cartActions } from '../../store/cartSlice';
import ButtonsWrapper from '../ButtonsWrapper/ButtonsWrapper';
import { convertProductToWishlistItem } from '../../utils/wishlist';
import { wishlistActions } from '../../store/wishlistSlice';

interface ProductDetailsProps {
  product: ProductData;
}

interface PricesTypes {
  main: number;
  compare?: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  const [currentPrices, setCurrentPrices] = useState<PricesTypes>({
    main: product?.price,
    compare: product?.comparePrice,
  });

  const isInputQtyGreaterThanProductQty = (curQuantity: number) => curQuantity > product.quantity;

  const quantityChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    // If the user deletes the input text, 0 will be the value of the `inputQuantity` by default.
    // This resets it to 1 in this case
    const inputQuantity = +event.currentTarget.value ? +event.currentTarget.value : 1;
    setQuantity(inputQuantity);

    if (isInputQtyGreaterThanProductQty(inputQuantity)) return;

    setCurrentPrices({
      main: product.price * inputQuantity,
      compare: product.comparePrice && product.comparePrice * inputQuantity,
    });
  };

  // Add item to Cart
  const addToCartHandler: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    dispatch(cartActions.addItem({ product, quantity }));
  };

  // Add item to Wishlist
  const addToWishlistHandler = () => {
    const newWishlistItem = convertProductToWishlistItem(product);
    dispatch(wishlistActions.addItem({ item: newWishlistItem }));
  };

  return (
    <section>
      <div className={`${getStyleClassName(scss, 'product-details')} container`}>
        {/* Product Images */}
        <div className={getStyleClassName(scss, 'product-details__images')}>
          <div className={getStyleClassName(scss, 'product-details__main-image-box')}>
            <img src={product.image.src} alt={product.image.alt} />
          </div>
        </div>

        {/* Product Information */}
        <div className={getStyleClassName(scss, 'product-details__info')}>
          {product.ratingStars && <Rating stars={product.ratingStars} />}
          <h1 className={getStyleClassName(scss, 'product-details__title')}>{product.title}</h1>

          <Prices
            className={getStyleClassName(scss, 'product-details__price-box')}
            price={currentPrices.main}
            comparePrice={currentPrices.compare}
            fontSize="large"
          />

          {/* Description */}
          <div className={getStyleClassName(scss, 'product-details__description-box')}>
            {product.description}
          </div>

          <div className={getStyleClassName(scss, 'product-details__description-box')}>
            {isInputQtyGreaterThanProductQty(quantity) && (
              <p style={{ color: 'red' }}>
                The max quantity you can purchase is {product.quantity}
              </p>
            )}
          </div>

          {/* Add to cart form */}
          <form
            className={getStyleClassName(scss, 'product-details__cta-form')}
            onSubmit={addToCartHandler}
            style={{ flexDirection: 'column' }}
          >
            <input
              type="text"
              value={quantity}
              onChange={quantityChangeHandler}
              placeholder={quantity.toString()}
            />

            <ButtonsWrapper>
              <Button type="submit">Add to cart</Button>
              <Button
                btnStyle="outline"
                textColor="dark"
                type="button"
                onClick={addToWishlistHandler}
              >
                Add to wishlist
              </Button>
            </ButtonsWrapper>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
