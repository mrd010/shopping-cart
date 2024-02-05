import { Outlet, useLoaderData } from 'react-router-dom';
import CategoryMenu from './components/CategoryMenu';
import PageHeader from './components/PageHeader';
import shopBanner from '../assets/images/Shopping.jpg';
import styled from 'styled-components';

const ShopLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
`;

const Vitrain = styled.main`
  margin: 1rem;
`;

const Shop = () => {
  const { categories } = useLoaderData();
  return (
    <ShopLayout>
      <PageHeader bgPath={shopBanner} primaryTitle="Browse through our products"></PageHeader>
      <CategoryMenu categories={categories}></CategoryMenu>
      <Vitrain>
        <Outlet></Outlet>
      </Vitrain>
    </ShopLayout>
  );
};
export default Shop;
