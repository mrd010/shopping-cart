const getProductsUrl = 'https://fakestoreapi.com/products';

export const getProducts = async (category) => {
  try {
    const response = await fetch(`${getProductsUrl}${category ? `/category/${category}` : ''}`, {
      mode: 'cors',
    });
    if (response.status >= 400 || !response.ok) {
      throw new Response(response.statusText, { status: response.status });
    }
    const products = await response.json();
    return products;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
export const getCategories = async () => {
  try {
    const response = await fetch(`${getProductsUrl}/categories`, {
      mode: 'cors',
    });
    if (response.status >= 400 || !response.ok) {
      throw new Response(response.statusText, { status: response.status });
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
