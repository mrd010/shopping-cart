const getProductsUrl = 'https://fakestoreapi.com/products';

export const getProducts = async (category) => {
  let response;
  try {
    response = await fetch(`${getProductsUrl}${category ? `/category/${category}` : ''}`, {
      mode: 'cors',
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }

  if (response.status >= 400 || !response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }
  const products = await response.json();
  if (products.length <= 0) {
    throw new Response('Not Found', { status: 404 });
  }
  return products;
};

export const getCategories = async () => {
  let response;
  try {
    response = await fetch(`${getProductsUrl}/categories`, {
      mode: 'cors',
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
  if (response.status >= 400 || !response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }
  const categories = await response.json();
  return categories;
};
