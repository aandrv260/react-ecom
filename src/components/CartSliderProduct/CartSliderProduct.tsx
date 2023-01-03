import scss from './CartSliderProduct.module.scss';
import { Product } from '../../models/products';
import { formatToCurrency, getStyleClassName } from '../../utils/general';
import ImageBox from '../ImageBox/ImageBox';
import { ChangeEventHandler, useState } from 'react';
import IconBox from '../IconBox/IconBox';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';

interface CartSliderProductProps {
  product: Product;
}

const CartSliderProduct: React.FC<CartSliderProductProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const quantityChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
    const inputValue = +event.currentTarget.value;

    if (!isNaN(inputValue)) setQuantity(inputValue);
    else throw new Error('Value must be a number');
  };

  return (
    <div className={getStyleClassName(scss, 'cart-slider-product')}>
      <ImageBox
        className={getStyleClassName(scss, 'cart-slider-product__img-box')}
        image={product.image}
      />

      <div className={getStyleClassName(scss, 'cart-slider-product__info-box')}>
        <span className={getStyleClassName(scss, 'cart-slider-product__title')}>
          {product.title}
        </span>
        {product.comparePrice ? (
          <div className={getStyleClassName(scss, 'cart-slider-product__price-box')}>
            <span className={getStyleClassName(scss, 'cart-slider-product__compare-price')}>
              {formatToCurrency(product.comparePrice)}
            </span>

            <span className={getStyleClassName(scss, 'cart-slider-product__price')}>
              {formatToCurrency(product.price)}
            </span>
          </div>
        ) : (
          <span className={getStyleClassName(scss, 'cart-slider-product__price')}>
            {formatToCurrency(product.price)}
          </span>
        )}
      </div>

      <div className={getStyleClassName(scss, 'cart-slider-product__actions-box')}>
        <div className={getStyleClassName(scss, 'cart-slider-product__qty-box')}>
          <input
            type="number"
            min={0}
            value={quantity}
            onChange={quantityChangeHandler}
            placeholder={product.quantity.toString()}
          />

          <div className={getStyleClassName(scss, 'cart-slider-product__icons-box')}>
            <IconBox
              className={getStyleClassName(scss, 'cart-slider-product__qty-icon-box')}
              icon={PlusIcon}
            />

            <IconBox
              className={getStyleClassName(scss, 'cart-slider-product__qty-icon-box')}
              icon={MinusIcon}
            />
          </div>

          <IconBox
            className={getStyleClassName(scss, 'cart-slider-product__delete-icon-box')}
            icon={TrashIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default CartSliderProduct;
