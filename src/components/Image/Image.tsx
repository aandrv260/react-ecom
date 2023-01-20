import { Image as ImageType } from '../../models/image';

interface ImageProps {
  className?: string;
  image: ImageType;
  onLoad?: () => void;
  onClick?: () => void;
}

const Image: React.FC<ImageProps> = ({ image, className, onLoad, onClick }) => {
  return (
    <img className={className} src={image.src} alt={image.alt} onLoad={onLoad} onClick={onClick} />
  );
};

export default Image;
