import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartSlider from './components/CartSlider/CartSlider';
import Header from './layout/Header/Header';
import img1 from './assets/images/testimonials/ben.jpg';
import Loader from './components/Loader/Loader';
import AccessibilityLinks from './components/AccessibilityLinks/AccessibilityLinks';
import Notification from './components/Notification/Notification';
import { useCustomSelector } from './store';

// Pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage/CategoriesPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'));

const App = () => {
  const cart = useCustomSelector(state => state.cart);

  return (
    <>
      <AccessibilityLinks />
      <Header />
      <CartSlider cart={cart} hidden={cart.isHidden} />
      {/* <Notification
        heading="You've added the item to your wishlist!"
        itemDetails={{
          image: { src: img1, alt: '' },
          price: 45,
          comparePrice: 34,
          title: 'Hippie Mouse',
        }}
      /> */}

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
