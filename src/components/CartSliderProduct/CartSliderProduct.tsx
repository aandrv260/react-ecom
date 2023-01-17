import scss from './CartSliderProduct.module.scss';
import { Product } from '../../models/products';
import { formatToCurrency, getStyleClassName } from '../../utils/general';
import ImageBox from '../ImageBox/ImageBox';
import { ChangeEventHandler, useState } from 'react';
import IconBox from '../IconBox/IconBox';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { CartItem } from '../../models/cart';

interface CartSliderProductProps {
  item: CartItem;
}

const CartSliderProduct: React.FC<CartSliderProductProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const quantityChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
    const inputValue = event.currentTarget.value;

    setQuantity(parseInt(inputValue));
  };

  return (
    <div className={getStyleClassName(scss, 'cart-slider-product')}>
      <ImageBox
        className={getStyleClassName(scss, 'cart-slider-product__img-box')}
        image={item.product.image}
      />

      {/* Contains the product title and prices */}
      <div className={getStyleClassName(scss, 'cart-slider-product__info-box')}>
        <span className={getStyleClassName(scss, 'cart-slider-product__title')}>
          {item.product.title}
        </span>
        {item.product.comparePrice ? (
          <div className={getStyleClassName(scss, 'cart-slider-product__price-box')}>
            <span className={getStyleClassName(scss, 'cart-slider-product__compare-price')}>
              {formatToCurrency(item.product.comparePrice)}
            </span>

            <span className={getStyleClassName(scss, 'cart-slider-product__price')}>
              {formatToCurrency(item.product.price)}
            </span>
          </div>
        ) : (
          <span className={getStyleClassName(scss, 'cart-slider-product__price')}>
            {formatToCurrency(item.product.price)}
          </span>
        )}
      </div>

      {/* Contains the quantity input and the delete icon */}
      <div className={getStyleClassName(scss, 'cart-slider-product__actions-box')}>
        <div className={getStyleClassName(scss, 'cart-slider-product__qty-box')}>
          <input
            type="number"
            min={0}
            value={quantity}
            onChange={quantityChangeHandler}
            placeholder={item.product.quantity.toString()}
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
