import { API_ROOT } from '../constants/api';
import { AllCategoriesData, FetchData, FetchSpecificData } from '../models/api';

export const getCategoryApiURL = (categoryId: string) => {
  return `https://react-ecom-e5729-default-rtdb.firebaseio.com/category/${categoryId}`;
};

export const getProductApiURL = (productId: string) => {
  return `https://react-ecom-e5729-default-rtdb.firebaseio.com/product/${productId}`;
};

export const fetchData: FetchData = async endpoint => {
  const apiURL = `${API_ROOT}/${endpoint}.json`;
  const resp = await fetch(apiURL);
  const data = await resp.json();

  return data;
};

// TODO: There is a duplicate code because of still not being able to set up generics properly. Fix it as soon as possible
// An idea is to wrap it in a generic class, it will work that way.
// It will work with a custom hook that is a generic function

/**
 * Fetches the information for all categories at once.
 * @param endpoint -
 * @param callback - A callback function to execute specific actions when the data arrives. It has 1 parameter which is the `data` that has just arrived
 * @returns - `data` that was fetched from the server
 */
export const getCategoriesData: FetchSpecificData<AllCategoriesData> = async callback => {
  const data = (await fetchData('categories')) as AllCategoriesData;

  callback && callback(data);
  return data;
};
