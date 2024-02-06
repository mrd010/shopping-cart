import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useReducer } from 'react';
import { CartContext, CartDispatchContext, cartReducer } from '../CartContext';
import Loading from './components/Loading';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
`;

const Layout = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const navigation = useNavigation();
  console.log(navigation);
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
