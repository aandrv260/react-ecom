import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartSlider from './components/CartSlider/CartSlider';
import Header from './layout/Header/Header';
import { Cart } from './models/cart';
import { Product } from './models/products';
import img1 from './assets/images/testimonials/ben.jpg';
import Loader from './components/Loader/Loader';
import AccessibilityLinks from './components/AccessibilityLinks/AccessibilityLinks';

// Pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const PageNotFound = lazy(() => import('./pages/CategoriesPage/PageNotFound'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));

// TEST OBJECTS
const testProducts: Product[] = [
  {
    id: 1,
    handle: 'my-first-product',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, fugiat accusamus modi quam porro ad labore culpa ratione corrupti tempore similique pariatur error assumenda sed atque tenetur laborum corporis quas, distinctio et? Tempora nostrum dolore quas suscipit accusantium voluptate pariatur, cum neque, minima asperiores fugiat repellendus aperiam ab molestias iste?',
    category: {
      id: 'c1',
      image: { alt: '', src: '' },
      products: [],
      title: '',
    },
    price: 111,
    comparePrice: 121,
    title: 'Example product 1',
    image: { alt: '', src: img1 },
    quantity: 1,
    ratingStars: 5,
  },
];

const testCart: Cart = {
  items: testProducts,
  shippingPrice: 0,
  subtotal: 111,
  total: 111,
  totalItems: 1,
};

const App = () => {
  return (
    <>
      <AccessibilityLinks />
      <Header />
      <CartSlider cart={testCart} hidden />

      <main id="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/product/:handle" element={<ProductPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
