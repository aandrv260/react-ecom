import { useState } from 'react';
import { PopupButton, PopupItemDetails } from '../../models/popup';
import { getStyleClassName } from '../../utils/general';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Prices from '../PricesBox/PricesBox';
import scss from './PopupItem.module.scss';

interface PopupItemProps {
  item: PopupItemDetails;
  button?: PopupButton;
}

const PopupItem: React.FC<PopupItemProps> = ({ item, button }) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const onImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <div className={getStyleClassName(scss, 'popup-item')}>
      <div className={getStyleClassName(scss, 'popup-item__info')}>
        <div className={getStyleClassName(scss, 'popup-item__img-box')}>
          {isImageLoading && <Loader size="small" />}
          <img
            className={getStyleClassName(scss, isImageLoading ? 'hidden' : '')}
            src={item.image.src}
            alt={item.image.alt}
            onLoad={onImageLoad}
          />
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
