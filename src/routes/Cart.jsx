import { useContext } from 'react';
import ProductCardCart from './components/ProductCardCart';
import { CartContext } from '../CartContext';
import { useLoaderData } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import cartHeaderImg from '../assets/images/online-grocery-shopping-retail-ecommerce-food.jpg';
import styled from 'styled-components';
import CustomLink from './components/CustomLink';

const CartContainer = styled.div`
  display: grid;
  justify-items: center;
`;
const CartMain = styled.div`
  display: grid;
  justify-items: center;
`;
const CartProductsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;
const EmptyNotifier = styled.p`
  font-size: 5rem;
  font-weight: 600;
  margin: 5rem 1rem 1rem 1rem;
  user-select: none;
`;

const Cart = () => {
  const { products } = useLoaderData();

  const cart = useContext(CartContext);
  const cartCount = cart.reduce((count, product) => count + product.count, 0);

  return (
    <CartContainer>
      <PageHeader bgPath={cartHeaderImg}></PageHeader>
      <CartMain>
        {cartCount === 0 ? (
          <>
            <EmptyNotifier>Your Cart is Empty!</EmptyNotifier>
            <CustomLink to="../shop">Go to Shop</CustomLink>
          </>
        ) : (
          <>
            <CartProductsContainer>
              {cartCount === 0 ? (
                <div></div>
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
          </>
        )}
      </CartMain>
    </CartContainer>
  );
};
export default Cart;
