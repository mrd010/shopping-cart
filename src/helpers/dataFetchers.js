const getProductsUrl = 'https://fakestoreapi.com/products';

export const getProducts = async (category) => {
  try {
    const response = await fetch(`${getProductsUrl}${category ? `/category/${category}` : ''}`, {
      mode: 'cors',
    });
    if (response.status >= 400 || !response.ok) {
      throw new Error('Network error');
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const getCategories = async () => {
  try {
    const response = await fetch(`${getProductsUrl}/categories`, {
      mode: 'cors',
    });
    if (response.status >= 400 || !response.ok) {
      throw new Error('Network error');
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error(error);
    return error;
  }
};
