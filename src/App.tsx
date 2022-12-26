import React from 'react';
import Header from './layout/Header/Header';
import CategoriesSection from './sections/CategoriesSection/CategoriesSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <CategoriesSection />
        <TestimonialsSection />
      </main>
    </>
  );
}

export default App;
