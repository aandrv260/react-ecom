// TYPES
interface StyleObject {
  readonly [key: string]: string;
}

type StyleClassNameExtractor = (
  styleObj: StyleObject,
  className: string,
  ...otherClassNames: string[]
) => string;

type CapitalizeString = (value: string) => string;

// FUNCTIONS
export const getStyleClassName: StyleClassNameExtractor = (
  styleObj,
  className,
  ...otherClassNames
) => {
  if (!otherClassNames || otherClassNames.length === 0) {
    return `${styleObj[className] ?? ''}`;
  }

  const allClassNames = [className, ...otherClassNames];
  let finalClassName = '';

  allClassNames.forEach(className => (finalClassName += ` ${styleObj[className] ?? ''}`));

  return finalClassName.trim();
};

export const capitalizeString: CapitalizeString = value => {
  const firstLetter = value[0];

  return firstLetter.toUpperCase() + value.slice(1);
};

export const generateId = () => {
  const idPart = () => Math.random().toString(36).substring(2);

  return idPart() + idPart();
};

export const formatToCurrency = (value: number, currency: string = 'USD') => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(value);
};
