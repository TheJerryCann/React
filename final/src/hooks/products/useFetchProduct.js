import { useFetch } from '../useFetch';

export const useFetchProduct = (productId) => {
  return useFetch(`/cars/${productId}`);
};
