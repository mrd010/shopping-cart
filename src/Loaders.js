import { getCategories, getProducts } from './helpers/dataFetchers';

export const shopLoader = async ({ params }) => {
  const products = await getProducts(params.catName);
  return { category: params.catName ? params.catName : 'all', products };
};
export const categoriesLoader = async () => {
  const categories = await getCategories();
  categories.sort();
  return { categories };
};

export const SHIP_FREE_THRESHOLD = 400;
