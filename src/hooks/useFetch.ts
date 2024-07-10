import { useEffect, useState } from 'react';
import { IError } from '../interfaces/IError';

export function useFetch(fetchFn: any, initialValue: any, param?: any) {
  const [isFetching, setIsFetching] = useState<boolean>();
  const [error, setError] = useState<IError>();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = param !== undefined ? await fetchFn(param) : await fetchFn();
        setFetchedData(data);
      } catch (error: any) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn, param]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error
  }
}