import { useContext } from 'react';
import ProductCardCart from './components/ProductCardCart';
import { CartContext } from '../CartContext';
import { Link, useLoaderData } from 'react-router-dom';

const Cart = () => {
  const { products } = useLoaderData();

  const cart = useContext(CartContext);
  const cartCount = cart.reduce((count, product) => count + product.count, 0);

  return (
    <div>
      <header>
        <h1>This is your Cart</h1>
        <div>
          {cartCount > 0 ? (
            <>
              <span>Total Items in Cart :</span>
              <span>{cartCount}</span>
            </>
          ) : (
            <span>Your cart is empty</span>
          )}
        </div>
      </header>
      <main>
        <section>
          {cartCount === 0 ? (
            <div>
              <Link to="../shop">Go to Shop</Link>
            </div>
          ) : (
            cart.map((productInCart) => {
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
            })
          )}
        </section>
        <section>
          <button>Pay</button>
        </section>
      </main>
    </div>
  );
};
export default Cart;
