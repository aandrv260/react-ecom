import { useSearchParams } from 'react-router-dom';

interface QueryParameters {
  [key: string]: string | null;
}

type ReadonlyQueryParameters = Readonly<QueryParameters>;

/**
 * Get query parameters from the URL
 * @param requestedValues - Either `string` or `string[]` of parameters.
 * @returns An object which contains the passed `requestedValues` as keys and their values. If no value was found for the query parameter, the value associated with the key in the object is `null`.
 */
const useQuery = (requestedValues: string | string[]): ReadonlyQueryParameters => {
  const [searchParams] = useSearchParams();

  if (requestedValues instanceof Array && requestedValues.length === 0)
    return {} as ReadonlyQueryParameters;

  if (typeof requestedValues === 'string') {
    const values: QueryParameters = {};
    values[requestedValues] = searchParams.get(requestedValues);

    return {
      ...values,
    } as ReadonlyQueryParameters;
  }

  const values: QueryParameters = {};

  requestedValues.forEach(value => {
    values[value] = searchParams.get(value);
  });

  return {
    ...values,
  } as ReadonlyQueryParameters;
};

export default useQuery;
