import { Outlet, useLoaderData } from 'react-router-dom';
import CategoryMenu from './components/CategoryMenu';

const Shop = () => {
  const { categories } = useLoaderData();
  return (
    <div>
      <header>
        <h1>Browse through our products</h1>
      </header>
      <CategoryMenu categories={categories}></CategoryMenu>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
export default Shop;
