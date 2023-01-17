import scss from './CartSliderProduct.module.scss';
import { formatToCurrency, getStyleClassName } from '../../utils/general';
import ImageBox from '../ImageBox/ImageBox';
import { useDispatch } from 'react-redux';
import IconBox from '../IconBox/IconBox';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { CartItem } from '../../models/cart';
import { useCustomSelector } from '../../store';
import { cartActions } from '../../store/cartSlice';

interface CartSliderProductProps {
  item: CartItem;
}

const CartSliderProduct: React.FC<CartSliderProductProps> = ({ item }) => {
  const dispatch = useDispatch();
  const curQty = useCustomSelector(state =>
    state.cart.items.find(curItem => curItem.product.id === item.product.id)
  )?.quantity;

  const removeItemItemHandler = () => {
    dispatch(cartActions.removeItem(item.product.id));
  };

  const changeQuantityHandler = (newQuantity: number) => {
    dispatch(cartActions.changeQuantity({ id: item.product.id, newQuantity }));
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
            value={curQty}
            onChange={event => {
              changeQuantityHandler(+event.currentTarget.value);
            }}
            placeholder={curQty?.toString() || '1'}
          />

          <div className={getStyleClassName(scss, 'cart-slider-product__icons-box')}>
            <IconBox
              className={getStyleClassName(scss, 'cart-slider-product__qty-icon-box')}
              icon={PlusIcon}
              onClick={changeQuantityHandler.bind(null, item.quantity + 1)}
            />

            <IconBox
              className={getStyleClassName(scss, 'cart-slider-product__qty-icon-box')}
              icon={MinusIcon}
              onClick={changeQuantityHandler.bind(null, item.quantity - 1)}
            />
          </div>

          <IconBox
            className={getStyleClassName(scss, 'cart-slider-product__delete-icon-box')}
            icon={TrashIcon}
            onClick={removeItemItemHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CartSliderProduct;
