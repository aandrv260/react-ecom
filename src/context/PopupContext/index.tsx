import { createContext, useState } from 'react';
import {
  PopupContextProviderProps,
  PopupContextType,
  UpdateContent,
} from '../../models/context/popup-context';
import { Item } from '../../models/products';

const defaultItem: Item = {
  id: '',
  image: { src: '', alt: '' },
  price: 0,
  title: '',
  comparePrice: 0,
};

const initialValue: PopupContextType = {
  isHidden: false,
  heading: '',
  item: defaultItem,
  open() {},
  toggle() {},
  close() {},
  clear() {},
  updateContent() {},
};

export const PopupContext = createContext(initialValue);

const PopupContextProvider: React.FC<PopupContextProviderProps> = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [item, setItem] = useState<Item>(defaultItem);
  const [heading, setHeading] = useState('');

  const openHandler = () => {
    setIsHidden(false);
  };

  const toggleHandler = () => {
    setIsHidden(prevState => !prevState);
  };

  const clearHandler = () => {
    setIsHidden(true);
    setHeading('');
    setItem(defaultItem);
  };

  const closeHandler = () => {
    clearHandler();
  };

  const updateContentHandler: UpdateContent = (heading, item) => {
    setHeading(heading);
    setItem(item);
  };

  const value: PopupContextType = {
    heading,
    item: item || ({} as Item),
    isHidden,
    open: openHandler,
    toggle: toggleHandler,
    close: closeHandler,
    clear: clearHandler,
    updateContent: updateContentHandler,
  };

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};

export default PopupContextProvider;
