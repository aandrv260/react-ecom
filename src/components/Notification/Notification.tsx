import { Image } from '../../models/image';
import { getStyleClassName } from '../../utils/general';
import IconBox from '../IconBox/IconBox';
import scss from './Notification.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import PopupItem from '../PopupItem/PopupItem';
import { PopupButton, PopupItemDetails } from '../../models/popup';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface NotificationProps {
  heading: string;
  button?: PopupButton;
  itemDetails: PopupItemDetails;
}

const notificationWrapper = document.getElementById('notification-wrapper') as HTMLElement;

const Notification: React.FC<NotificationProps> = props => {
  const { itemDetails, heading, button } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const closeNotificationHandler = () => setIsOpen(false);

  return createPortal(
    <>
      {isOpen && (
        <div className={getStyleClassName(scss, 'notification')}>
          <header className={getStyleClassName(scss, 'notification__header')}>
            <h6 className={getStyleClassName(scss, 'notification__heading')}>{heading}</h6>
            <IconBox
              className={getStyleClassName(scss, 'notification__close-icon')}
              icon={CloseIcon}
              onClick={closeNotificationHandler}
            />
          </header>

          <div className={getStyleClassName(scss, 'notification__main-content')}>
            <PopupItem item={itemDetails} button={button} />
          </div>
        </div>
      )}
    </>,
    notificationWrapper
  );
};

export default Notification;
