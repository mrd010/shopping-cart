import { getCategories, getProducts } from './helpers/dataFetchers';

export const shopLoader = async ({ params }) => {
  const products = await getProducts(params.catName);
  return { products };
};
export const categoriesLoader = async () => {
  const categories = await getCategories();
  return { categories };
};
