import { useLoaderData, useLocation } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';
import styled from 'styled-components';
import SortMenu from './components/SortMenu';

const CatalogContainer = styled.section`
  display: flex;
  gap: 1rem;
  flex-flow: column nowrap;
`;
const CatalogHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  background-color: #eeeeeeee;
  border-radius: 10px;
  position: sticky;
  z-index: 40;
  top: 5rem;
  box-shadow: 0 0 8px ${(props) => props.theme.shadow};
`;
const CategoryTitle = styled.h2`
  padding: 0 1rem;
  margin: 0;
  font-size: 2rem;
  white-space: nowrap;
  text-transform: capitalize;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    padding: 0 0.5rem;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  padding: 1rem;
  @media screen and (max-width: 1280px) {
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    gap: 3rem;
  }
`;

// component ########################
const Catalog = () => {
  const [sortSettings, setSortSettings] = useState({ sortBy: 'name', order: 'ascending' });
  const { category, products } = useLoaderData();
  const cart = useContext(CartContext);
  const location = useLocation();

  const handleSort = (value) => {
    setSortSettings(value);
  };

  useEffect(() => {
    if (location) {
      setSortSettings({ sortBy: 'name', order: 'ascending' });
    }
  }, [location]);

  const sortedProducts = products.sort((a, b) => {
    switch (sortSettings.sortBy) {
      case 'name':
        return sortSettings.order === 'ascending'
          ? a.title > b.title
            ? 1
            : -1
          : b.title > a.title
            ? 1
            : -1;
      case 'price':
        return sortSettings.order === 'ascending' ? a.price - b.price : b.price - a.price;
      case 'rating':
        return sortSettings.order === 'ascending'
          ? a.rating.rate - b.rating.rate
          : b.rating.rate - a.rating.rate;
      default:
        break;
    }
  });
  return (
    <CatalogContainer>
      <CatalogHeader>
        {category !== 'all' && <CategoryTitle>{category}</CategoryTitle>}
        <SortMenu
          onSortChange={handleSort}
          sortBy={sortSettings.sortBy}
          order={sortSettings.order}
        ></SortMenu>
      </CatalogHeader>
      <ProductsContainer>
        {sortedProducts.map((product) => {
          const productInCart = cart.find((p) => p.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              count={productInCart ? productInCart.count : 0}
            ></ProductCard>
          );
        })}
      </ProductsContainer>
    </CatalogContainer>
  );
};
export default Catalog;
