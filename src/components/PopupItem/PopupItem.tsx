import { PopupButton, PopupItemDetails } from '../../models/popup';
import { getStyleClassName } from '../../utils/general';
import Button from '../Button/Button';
import Prices from '../PricesBox/PricesBox';
import scss from './PopupItem.module.scss';

interface PopupItemProps {
  item: PopupItemDetails;
  button?: PopupButton;
}

const PopupItem: React.FC<PopupItemProps> = ({ item, button }) => {
  return (
    <div className={getStyleClassName(scss, 'popup-item')}>
      <div className={getStyleClassName(scss, 'popup-item__info')}>
        <div className={getStyleClassName(scss, 'popup-item__img-box')}>
          <img src={item.image.src} alt={item.image.alt} />
        </div>

        <div>
          <h4 className={getStyleClassName(scss, 'popup-item__title')}>{item.title}</h4>
          <Prices price={item.price} comparePrice={item.comparePrice} fontSize="small" />
        </div>
      </div>

      {button && (
        <Button btnStyle="full" onClick={button.onClick}>
          {button.text}
        </Button>
      )}
    </div>
  );
};

export default PopupItem;
