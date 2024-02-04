import ProductCard from './components/ProductCard';

const Shop = () => {
  return (
    <div>
      <header>
        <h1>Browse through all our products</h1>
      </header>
      <main>
        <section>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </section>
      </main>
    </div>
  );
};
export default Shop;
