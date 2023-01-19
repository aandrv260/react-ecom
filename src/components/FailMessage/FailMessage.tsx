import scss from './FailMessage.module.scss';
import { getStyleClassName } from '../../utils/general';

interface FailMessageProps {
  className?: string;
  message: string;
}

const FailMessage: React.FC<FailMessageProps> = ({ className, message }) => {
  const finalClassName = `${getStyleClassName(scss, 'fail-message')} ${className}`.trim();

  return <p className={finalClassName}>{message}</p>;
};

export default FailMessage;
