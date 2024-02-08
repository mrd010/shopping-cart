import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Cart from './routes/Cart';
import ErrorPage from './ErrorPage';
import { categoriesLoader, shopLoader } from './Loaders';
import Catalog from './routes/Catalog';
import Errors400 from './Errors400';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout></Layout>}
        loader={categoriesLoader}
        errorElement={<Errors400></Errors400>}
      >
        <Route element={<Home></Home>} index></Route>
        <Route element={<Home></Home>} path="/home"></Route>
        <Route element={<Shop></Shop>} path="/shop" errorElement={<ErrorPage></ErrorPage>}>
          <Route errorElement={<ErrorPage></ErrorPage>}>
            <Route element={<Catalog></Catalog>} index loader={shopLoader}></Route>
            <Route
              element={<Catalog></Catalog>}
              path="category/:catName"
              loader={shopLoader}
            ></Route>
          </Route>
        </Route>
        <Route
          element={<Cart></Cart>}
          path="/cart"
          loader={shopLoader}
          errorElement={<ErrorPage></ErrorPage>}
        ></Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};
export default Router;
