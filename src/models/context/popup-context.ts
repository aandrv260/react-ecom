import { Item } from '../products';

export type UpdateContent = (heading: string, item: Item) => void;

export interface PopupContextType {
  isHidden: boolean;
  heading: string;
  item: Item;
  close: () => void;
  open: () => void;
  toggle: () => void;
  clear: () => void;
  updateContent: UpdateContent;
}

export interface PopupContextProviderProps {
  children: React.ReactNode;
}
