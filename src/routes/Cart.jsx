import { useContext } from 'react';
import ProductCardCart from './components/ProductCardCart';
import { CartContext } from '../CartContext';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
  const { products } = useLoaderData();

  const cart = useContext(CartContext);
  const cartCount = cart.reduce((count, product) => count + product.count, 0);
  return (
    <div>
      <header>
        <h1>This is your Cart</h1>
        <div>
          <span>Total Items in Cart :</span>
          <span>{cartCount}</span>
        </div>
      </header>
      <main>
        <section>
          {cart.map((productInCart) => {
            const product = products.find((p) => p.id === productInCart.id);
            if (product) {
              return (
                <ProductCardCart
                  key={product.id}
                  product={product}
                  count={productInCart.count}
                ></ProductCardCart>
              );
            }
          })}
        </section>
        <section>
          <button>Pay</button>
        </section>
      </main>
    </div>
  );
};
export default Cart;
