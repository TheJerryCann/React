import { useFetch } from '../useFetch';

export const useFetchProducts = () => {
  return useFetch('/cars');
};
