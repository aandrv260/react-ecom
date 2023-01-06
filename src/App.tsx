import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartSlider from './components/CartSlider/CartSlider';
import Header from './layout/Header/Header';
import { Cart } from './models/cart';
import { Product } from './models/products';
import img1 from './assets/images/testimonials/ben.jpg';
import Loader from './components/Loader/Loader';

// Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const testProducts: Product[] = [
  {
    id: 1,
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
      <Header />
      <CartSlider cart={testCart} hidden />

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
