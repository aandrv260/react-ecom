import React from 'react';
import CartSlider from './components/CartSlider/CartSlider';
import Header from './layout/Header/Header';
import { Cart } from './models/cart';
import { Product } from './models/products';
import CategoriesSection from './sections/CategoriesSection/CategoriesSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import img1 from './assets/images/testimonials/ben.jpg';

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
      <CartSlider cart={testCart} hidden />
      <Header />

      <main>
        <CategoriesSection />
        <TestimonialsSection />
      </main>
    </>
  );
};

export default App;
