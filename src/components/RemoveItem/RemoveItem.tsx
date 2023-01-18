import IconBox from '../IconBox/IconBox';
import scss from './RemoveItem.module.scss';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import { getStyleClassName } from '../../utils/general';

interface RemoveItemProps {
  className?: string;
  onRemove?: () => void;
}

/**
 * Should be used only on popup items or items that can be removed from a list because it uses `absolute` CSS positioning
 */
const RemoveItem: React.FC<RemoveItemProps> = ({ className, onRemove }) => {
  const finalClassName = `${getStyleClassName(scss, 'remove-item')} ${className}`.trim();

  return <IconBox className={finalClassName} icon={IconClose} onClick={onRemove} />;
};

export default RemoveItem;
