import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartSlider from './components/CartSlider/CartSlider';
import Header from './layout/Header/Header';
import { Cart } from './models/cart';
import { Product } from './models/products';
import img1 from './assets/images/testimonials/ben.jpg';
import Loader from './components/Loader/Loader';
import AccessibilityLinks from './components/AccessibilityLinks/AccessibilityLinks';
import Notification from './components/Notification/Notification';

// Pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage/CategoriesPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'));

// TEST OBJECTS
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
      <Notification
        heading="You've added the item to your wishlist!"
        itemDetails={{
          image: { src: img1, alt: '' },
          price: 45,
          comparePrice: 34,
          title: 'Hippie Mouse',
        }}
      />

      <main id="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/category/:handle" element={<CategoryPage />} />
            <Route path="/product/:handle" element={<ProductPage />} />
            <Route index path="account" element={<AccountPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
