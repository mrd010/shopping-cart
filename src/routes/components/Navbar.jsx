import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/icons/home_FILL0.svg';
import cartIcon from '../../assets/icons/shopping_cart_FILL0.svg';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import Icon from './Icon';

const StyledNavbar = styled.nav`
  display: flex;
  flex-flow: nowrap row;
  background-color: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.bg};
  padding: 0 1rem;
  font-weight: 600;
  position: sticky;
  top: 0;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  padding: 0.75rem 1rem;
  display: grid;
  gap: 0.25rem;
  align-items: center;
  grid-auto-flow: column;
  &:hover {
    background-color: ${(props) => props.theme.main};
  }
`;

const LinkText = styled.span`
  transform: translateY(2px);
`;

const LinkNotifier = styled.span`
  font-size: 0.9rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  background-color: ${(props) => props.theme.bg};
  border-radius: 15px;
  color: ${(props) => props.theme.fg};
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  font-family: 'Courier New', Courier, monospace;
`;

const Navbar = () => {
  const cart = useContext(CartContext);
  const cartCount = cart.reduce((count, product) => count + product.count, 0);

  return (
    <StyledNavbar>
      <StyledNavLink to="/home">
        <Icon iconPath={homeIcon} size={28} />
        <LinkText>Home</LinkText>
      </StyledNavLink>
      <StyledNavLink to="/shop">
        <LinkText>Shop</LinkText>
      </StyledNavLink>
      <StyledNavLink to="/cart" style={{ marginRight: 'auto' }}>
        <Icon iconPath={cartIcon} size={28} />
        {cartCount > 0 && <LinkNotifier>{cartCount}</LinkNotifier>}
      </StyledNavLink>
      <StyledNavLink to="/support">Support</StyledNavLink>
    </StyledNavbar>
  );
};

export default Navbar;
