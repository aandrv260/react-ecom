import React, { useState } from 'react';
import scss from './ProductDetails.module.scss';
import { Product } from '../../models/products';
import { getStyleClassName } from '../../utils/general';
import IconBox from '../IconBox/IconBox';
import Button from '../Button/Button';
import { ProductData } from '../../models/api';
import Prices from '../PricesBox/PricesBox';
import Rating from '../Rating/Rating';

interface ProductDetailsProps {
  product: ProductData;
}

interface PricesTypes {
  main: number;
  compare?: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
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

  const addToCartHandler: React.MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault();

    // TODO: Make the cart slider appear appear on the right after the product is added to cart
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

          <form className={getStyleClassName(scss, 'product-details__cta-form')}>
            <input
              type="text"
              value={quantity}
              onChange={quantityChangeHandler}
              placeholder={quantity.toString()}
            />

            <Button type="submit" onClick={addToCartHandler}>
              Add to cart
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
