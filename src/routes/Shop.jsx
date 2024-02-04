import { NavLink, Outlet, useLoaderData } from 'react-router-dom';

const Shop = () => {
  const { categories } = useLoaderData();
  return (
    <div>
      <header>
        <h1>Browse through our products</h1>
      </header>
      <nav>
        <h3>Categories</h3>
        <ul>
          {categories.map((cat) => {
            return (
              <li key={cat}>
                <NavLink to={`category/${cat}`}>{cat}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
export default Shop;
