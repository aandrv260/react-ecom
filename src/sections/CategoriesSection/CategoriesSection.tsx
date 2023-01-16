import CategoryBox from '../../components/CategoryBox/CategoryBox';
import scss from './CategoriesSection.module.scss';
import { getStyleClassName } from '../../utils/general';
import { useEffect, useState } from 'react';
import { AllCategoriesData, FetchData } from '../../models/api';
import { getCategoriesData } from '../../utils/api';
import Loader from '../../components/Loader/Loader';

export default function CategoriesSection() {
  const [allCategories, setAllCategories] = useState<AllCategoriesData>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingClassName = isLoading ? 'loading' : '';

  // TODO: Save to global state
  useEffect(() => {
    getCategoriesData(data => {
      setAllCategories(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <section
      className={`${getStyleClassName(scss, 'categories-section', isLoadingClassName)} container`}
    >
      {/* TODO: IF the categories are more than 16, implement infinite loading */}
      {isLoading ? (
        <Loader />
      ) : (
        allCategories.map(category => (
          <CategoryBox
            key={Math.random()}
            title={category.title}
            link={category.url}
            bgImage={category.image.src}
          />
        ))
      )}
    </section>
  );
}
