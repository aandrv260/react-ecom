import { getStyleClassName } from '../../utils/general';
import scss from './Notification.module.scss';
import PopupItem from '../PopupItem/PopupItem';
import { PopupButton, PopupItemDetails } from '../../models/popup';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import RemoveItem from '../RemoveItem/RemoveItem';

interface NotificationProps {
  heading: string;
  button?: PopupButton;
  itemDetails: PopupItemDetails;
  hidden: boolean;
}

const notificationWrapper = document.getElementById('notification-wrapper') as HTMLElement;

const Notification: React.FC<NotificationProps> = props => {
  const { itemDetails, heading, button, hidden } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const isHiddenClassName = hidden ? 'hidden' : '';

  const closeNotificationHandler = () => setIsOpen(false);

  return createPortal(
    <>
      {isOpen && (
        <div className={getStyleClassName(scss, 'notification', isHiddenClassName)}>
          <header className={getStyleClassName(scss, 'notification__header')}>
            <h6 className={getStyleClassName(scss, 'notification__heading')}>{heading}</h6>
            <RemoveItem
              className={getStyleClassName(scss, 'notification__close-icon')}
              onRemove={closeNotificationHandler}
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
