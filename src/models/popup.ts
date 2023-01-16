import { ButtonStyle } from './button';
import { Image } from './image';

export interface PopupItemDetails {
  image: Image;
  title: string;
  price: number;
  comparePrice?: number;
}

export interface PopupButton {
  text: string;
  btnStyle?: ButtonStyle;
  onClick: () => void;
}
