import { Image } from '../../models/image';

interface ImageBoxProps {
  className?: string;
  image: Image;
}

const ImageBox: React.FC<ImageBoxProps> = ({ image, className }) => {
  return (
    <div className={className}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default ImageBox;
