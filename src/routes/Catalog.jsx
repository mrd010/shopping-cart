import { useLoaderData } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import styled from 'styled-components';
import SortMenu from './components/SortMenu';

const CatalogContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;
const CatalogHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  background-color: #eeeeeeee;
  border-radius: 10px;
  position: sticky;
  top: 5rem;
  box-shadow: 0 0 8px ${(props) => props.theme.shadow};
`;
const CategoryTitle = styled.h2`
  padding: 0 1rem;
  margin: 0;
  font-size: 2rem;
  text-transform: capitalize;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Catalog = () => {
  const { category, products } = useLoaderData();
  const cart = useContext(CartContext);
  console.log(products);
  return (
    <CatalogContainer>
      <CatalogHeader>
        {category !== 'all' && <CategoryTitle>{category}</CategoryTitle>}
        <SortMenu></SortMenu>
      </CatalogHeader>

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
    </CatalogContainer>
  );
};
export default Catalog;
