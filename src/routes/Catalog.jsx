import { useLoaderData } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const Catalog = () => {
  const { category, products } = useLoaderData();
  const cart = useContext(CartContext);

  console.log(products);
  return (
    <section>
      <h3>{category}</h3>
      {products.map((product) => {
        const productInCart = cart.find((p) => p.id === product.id);
        return (
          <ProductCard
            key={product.id}
            product={product}
            count={productInCart ? productInCart.count : 0}
          ></ProductCard>
        );
      })}
    </section>
  );
};
export default Catalog;
