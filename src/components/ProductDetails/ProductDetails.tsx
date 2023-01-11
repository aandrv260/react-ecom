import React, { useState } from 'react';
import scss from './ProductDetails.module.scss';
import { Product } from '../../models/products';
import { getStyleClassName } from '../../utils/general';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import IconBox from '../IconBox/IconBox';
import Button from '../Button/Button';

interface ProductDetailsProps {
  product: Product;
}

interface Prices {
  main: number;
  compare?: number;
}

const putNumberOfElementsIntoArray = (value: number) => {
  const array = [];

  for (let i = 0; i < value; i++) {
    array.push(i);
  }

  return array;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [currentPrices, setCurrentPrices] = useState<Prices>({
    main: product.price,
    compare: product.comparePrice,
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
          <div className={getStyleClassName(scss, 'product-details__rating')}>
            {putNumberOfElementsIntoArray(product.ratingStars).map(num => (
              <IconBox
                className={getStyleClassName(scss, 'product-details__star-icon-box')}
                icon={StarIcon}
                key={num}
              />
            ))}
          </div>

          <h1 className={getStyleClassName(scss, 'product-details__title')}>{product.title}</h1>

          <div className={getStyleClassName(scss, 'product-details__price-box')}>
            {product.comparePrice && (
              <span className={getStyleClassName(scss, 'product-details__compare-price')}>
                ${currentPrices.compare}
              </span>
            )}

            <span className={getStyleClassName(scss, 'product-details__price')}>
              ${currentPrices.main}
            </span>
          </div>

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
