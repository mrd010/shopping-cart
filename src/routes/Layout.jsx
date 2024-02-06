import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect, useReducer } from 'react';
import { CartContext, CartDispatchContext, cartReducer } from '../CartContext';
import Loading from './components/Loading';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
`;

const Layout = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    if (location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        <Navbar></Navbar>
        <MainContainer>
          {navigation.state === 'loading' && <Loading></Loading>}
          <Outlet></Outlet>
        </MainContainer>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
export default Layout;
