import { Product } from '../../models/products';
import { generateId, getStyleClassName } from '../../utils/general';
import scss from './Wishlist.module.scss';
import img1 from '../../assets/images/testimonials/ben.jpg';
import PopupItem from '../PopupItem/PopupItem';

interface WishlistProps {
  hidden: boolean;
}

const testProducts: Product[] = [
  {
    id: 1,
    handle: 'my-first-product',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, fugiat accusamus modi quam porro ad labore culpa ratione corrupti tempore similique pariatur error assumenda sed atque tenetur laborum corporis quas, distinctio et? Tempora nostrum dolore quas suscipit accusantium voluptate pariatur, cum neque, minima asperiores fugiat repellendus aperiam ab molestias iste?',
    category: {
      id: 'c1',
      title: '',
    },
    price: 111,
    comparePrice: 121,
    title: 'Example product 1',
    image: { alt: '', src: img1 },
    quantity: 1,
    ratingStars: 5,
    url: '/product/my-first-product',
  },
];

const Wishlist: React.FC<WishlistProps> = ({ hidden }) => {
  // ... Get the products from Redux / Context API
  const hiddenClassName = hidden ? 'hidden' : '';

  return (
    <div className={getStyleClassName(scss, 'wishlist', hiddenClassName)}>
      {testProducts.map(product => (
        <div key={generateId()}>
          <PopupItem
            item={product}
            key={product.id}
            button={{ text: 'Add to cart', onClick: () => {} }}
          />
          <PopupItem
            item={product}
            key={product.id.toString() + 1}
            button={{ text: 'Add to cart', onClick: () => {} }}
          />
          <PopupItem
            item={product}
            key={product.id.toString() + 2}
            button={{ text: 'Add to cart', onClick: () => {} }}
          />
          <PopupItem
            item={product}
            key={product.id.toString() + 3}
            button={{ text: 'Add to cart', onClick: () => {} }}
          />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
