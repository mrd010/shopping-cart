import ProductCardCart from './components/ProductCardCart';

const Cart = () => {
  return (
    <div>
      <header>
        <h1>This is your Cart</h1>
        <div>
          <span>Total Items in Cart :</span>
          <span>5</span>
        </div>
      </header>
      <main>
        <section>
          <ProductCardCart></ProductCardCart>
          <ProductCardCart></ProductCardCart>
          <ProductCardCart></ProductCardCart>
        </section>
        <section>
          <button>Pay</button>
        </section>
      </main>
    </div>
  );
};
export default Cart;
