import CategoryBox from '../../components/CategoryBox/CategoryBox';
import { useCallback, useState } from 'react';
import { AllCategoriesData } from '../../models/api';
import Loader from '../../components/Loader/Loader';
import Grid from '../../components/Grid/Grid';
import useStoreData from '../../hooks/useStoreData';
import useDataFailed from '../../hooks/useDataFailed';
import PageContent from '../../components/PageContent/PageContent';

export default function CategoriesSection() {
  const [allCategories, setAllCategories] = useState<AllCategoriesData>([]);
  const { dataFailed, markDataAsFailedToFetch } = useDataFailed();
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingClassName = isLoading ? 'loading' : '';

  const dataArrivalHandler = useCallback((data: AllCategoriesData) => {
    setAllCategories(data);
    setIsLoading(false);
  }, []);

  // TODO: Save to global state to prevent sending HTTP requests if the page has already been visited
  useStoreData({
    dataType: 'categories',
    onDataArrival: dataArrivalHandler,
    onFail: markDataAsFailedToFetch,
  });

  return (
    <section>
      <PageContent
        dataFailure={{
          hasFailed: dataFailed,
          message: 'Categories could not be loaded. Please try again later.',
        }}
      >
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
      </PageContent>
    </section>
  );
}
