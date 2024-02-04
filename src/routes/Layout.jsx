import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useReducer } from 'react';
import { CartContext, CartDispatchContext, cartReducer } from '../CartContext';

const Layout = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
export default Layout;
