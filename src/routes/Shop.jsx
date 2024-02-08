import { Outlet } from 'react-router-dom';
import CategoryMenu from './components/CategoryMenu';
import PageHeader from './components/PageHeader';
import shopBanner from '../assets/images/Shopping.jpg';
import styled from 'styled-components';

const ShopLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Vitrain = styled.main`
  margin: 1rem;
`;

const MenuContainer = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Shop = () => {
  return (
    <ShopLayout>
      <PageHeader bgPath={shopBanner} primaryTitle="Browse through our products"></PageHeader>
      <MenuContainer>
        <CategoryMenu></CategoryMenu>
      </MenuContainer>
      <Vitrain>
        <Outlet></Outlet>
      </Vitrain>
    </ShopLayout>
  );
};
export default Shop;
