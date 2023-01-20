import IconBox from '../IconBox/IconBox';
import { ReactComponent as MenuIconSvg } from '../../assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
interface MenuIconProps {
  className?: string;
  onClick?: () => void;
  menuOpen: boolean;
}

const MenuIcon: React.FC<MenuIconProps> = ({ className, onClick, menuOpen }) => {
  return (
    <IconBox className={className} icon={menuOpen ? CloseIcon : MenuIconSvg} onClick={onClick} />
  );
};

export default MenuIcon;
