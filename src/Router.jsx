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
import Item from './routes/Item';
import ErrorPage from './ErrorPage';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout></Layout>} errorElement={<ErrorPage></ErrorPage>}>
        <Route element={<Home></Home>} index></Route>
        <Route element={<Home></Home>} path="/home"></Route>
        <Route element={<Shop></Shop>} path="/shop"></Route>
        <Route element={<Item></Item>} path="/items/:itemId"></Route>
        <Route element={<Cart></Cart>} path="/cart"></Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};
export default Router;
