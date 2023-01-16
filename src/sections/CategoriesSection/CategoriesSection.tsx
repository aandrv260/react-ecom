import CategoryBox from '../../components/CategoryBox/CategoryBox';
import { useCallback, useEffect, useState } from 'react';
import { AllCategoriesData } from '../../models/api';
import { getCategoriesData } from '../../utils/api';
import Loader from '../../components/Loader/Loader';
import Grid from '../../components/Grid/Grid';
import useStoreData from '../../hooks/useStoreData';

export default function CategoriesSection() {
  const [allCategories, setAllCategories] = useState<AllCategoriesData>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingClassName = isLoading ? 'loading' : '';

  const dataArrivalHandler = useCallback((data: AllCategoriesData) => {
    setAllCategories(data);
    setIsLoading(false);
  }, []);

  // TODO: Save to global state
  useStoreData({
    dataType: 'categories',
    onDataArrival: dataArrivalHandler,
  });
  // useEffect(() => {
  //   getCategoriesData(data => {
  //     setAllCategories(data);
  //     setIsLoading(false);
  //   });
  // }, []);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid className={`container ${isLoadingClassName}`} columns={2}>
          {/* TODO: IF the categories are more than 16, implement infinite loading */}

          {allCategories.map(category => (
            <CategoryBox
              key={Math.random()}
              title={category.title}
              link={category.url}
              bgImage={category.image.src}
            />
          ))}
        </Grid>
      )}
    </section>
  );
}
