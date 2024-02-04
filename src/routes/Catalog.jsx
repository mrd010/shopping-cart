import { useLoaderData } from 'react-router-dom';
import ProductCard from './components/ProductCard';

const Catalog = () => {
  const { category, products } = useLoaderData();

  console.log(products);
  return (
    <section>
      <h3>{category}</h3>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </section>
  );
};
export default Catalog;
