import { useContext } from 'react';
import ProductCardCart from './components/ProductCardCart';
import { CartContext } from '../CartContext';
import { Link, useLoaderData } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import cartHeaderImg from '../assets/images/online-grocery-shopping-retail-ecommerce-food.jpg';
import styled from 'styled-components';

const CartMain = styled.div`
  display: grid;
  justify-items: center;
`;
const CartProductsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const Cart = () => {
  const { products } = useLoaderData();

  const cart = useContext(CartContext);
  const cartCount = cart.reduce((count, product) => count + product.count, 0);

  return (
    <CartMain>
      <PageHeader bgPath={cartHeaderImg}></PageHeader>
      <main>
        <CartProductsContainer>
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
        </CartProductsContainer>
        <section>
          <button>Proceed and Pay</button>
        </section>
      </main>
    </CartMain>
  );
};
export default Cart;
