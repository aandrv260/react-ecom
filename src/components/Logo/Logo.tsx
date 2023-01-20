import { Image as ImageType } from '../../models/image';
import Image from '../Image/Image';

interface LogoProps {
  className?: string;
  logo: ImageType;
}

const Logo: React.FC<LogoProps> = ({ logo, className }) => {
  return (
    <div className={className}>
      <Image image={logo} />
    </div>
  );
};

export default Logo;
