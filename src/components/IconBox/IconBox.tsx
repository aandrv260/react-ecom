import { Link } from 'react-router-dom';

interface IconBoxProps {
  className?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void;
}

const IconBox: React.FC<IconBoxProps> = ({ className, onClick, icon: Icon, link }) => {
  if (link) {
    return (
      <Link to={link} className={className} onClick={onClick}>
        <Icon />
      </Link>
    );
  }

  return (
    <div className={className} onClick={onClick}>
      <Icon />
    </div>
  );
};

export default IconBox;
