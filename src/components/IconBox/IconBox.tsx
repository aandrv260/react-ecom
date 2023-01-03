interface IconBoxProps {
  className?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const IconBox: React.FC<IconBoxProps> = ({ className, onClick, icon: Icon }) => {
  return (
    <div className={className} onClick={onClick}>
      {<Icon />}
    </div>
  );
};

export default IconBox;
