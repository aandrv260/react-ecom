import { getStyleClassName } from '../../utils/general';
import scss from './Notification.module.scss';
import PopupItem from '../PopupItem/PopupItem';
import { PopupButton, PopupItemDetails } from '../../models/popup';
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import RemoveItem from '../RemoveItem/RemoveItem';
import { PopupContext } from '../../context/PopupContext';

// interface NotificationProps {
//   heading: string;
//   button?: PopupButton;
//   itemDetails: PopupItemDetails;
//   hidden: boolean;
// }

const notificationWrapper = document.getElementById('notification-wrapper') as HTMLElement;

const Notification: React.FC<{}> = props => {
  // const { itemDetails, heading, button, hidden } = props;
  const popupContext = useContext(PopupContext);
  const isHiddenClassName = popupContext.isHidden ? 'hidden' : '';

  const closeNotificationHandler = () => popupContext.close();

  return createPortal(
    <>
      {/* TODO: Make this show conditionally and animate it with a 3rd party package */}

      <div className={getStyleClassName(scss, 'notification', isHiddenClassName)}>
        <header className={getStyleClassName(scss, 'notification__header')}>
          <h6 className={getStyleClassName(scss, 'notification__heading')}>
            {popupContext.heading}
          </h6>
          <RemoveItem
            className={getStyleClassName(scss, 'notification__close-icon')}
            onRemove={closeNotificationHandler}
          />
        </header>

        <div className={getStyleClassName(scss, 'notification__main-content')}>
          <PopupItem item={popupContext.item} />
        </div>
      </div>
    </>,
    notificationWrapper
  );
};

export default Notification;
