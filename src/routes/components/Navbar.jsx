import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/icons/home_FILL0.svg';
import cartIcon from '../../assets/icons/shopping_cart_FILL0.svg';
import menuIcon from '../../assets/icons/menu_FILL0.svg';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { CartContext } from '../../CartContext';
import Icon from './Icon';
import CategoryMenu from './CategoryMenu';

const StyledNavbar = styled.nav`
  display: flex;
  flex-flow: nowrap row;
  background-color: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.bg};
  padding: 0 1rem;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 0 8px ${(props) => props.theme.shadow};
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.fg};
  display: grid;
  gap: 0.25rem;
  align-items: center;
  grid-auto-flow: column;
  background-color: transparent;
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.main};
  }
  &.pending:not(.active) {
    background-color: ${(props) => props.theme.linkHGL};
  }
  &.menu-button {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0.75rem 0.6rem;
  }
`;

const LinkText = styled.span`
  transform: translateY(2px);
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.$hasIcon ? 'none' : 'inline-block')};
  }
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

const MenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const cart = useContext(CartContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const cartCount = cart.reduce((count, product) => count + product.count, 0);

  return (
    <StyledNavbar>
      <StyledNavLink as="button" onClick={() => setMenuIsOpen(!menuIsOpen)} className="menu-button">
        <Icon iconPath={menuIcon}></Icon>
      </StyledNavLink>

      <StyledNavLink
        to="/home"
        className={({ isActive, isPending }) => [
          isPending ? 'pending' : '',
          isActive ? 'active' : '',
        ]}
      >
        <Icon iconPath={homeIcon} size={28} />
        <LinkText $hasIcon>Home</LinkText>
      </StyledNavLink>
      <StyledNavLink
        to="/shop"
        className={({ isActive, isPending }) => [
          isPending ? 'pending' : '',
          isActive ? 'active' : '',
        ]}
      >
        <LinkText $noIcon>Shop</LinkText>
      </StyledNavLink>
      <StyledNavLink
        to="/cart"
        style={{ marginRight: 'auto' }}
        className={({ isActive, isPending }) => [
          isPending ? 'pending' : '',
          isActive ? 'active' : '',
        ]}
      >
        <Icon iconPath={cartIcon} size={28} />
        {cartCount > 0 && <LinkNotifier>{cartCount}</LinkNotifier>}
      </StyledNavLink>
      <StyledNavLink
        to="/#"
        className={({ isActive, isPending }) => [
          isPending ? 'pending' : '',
          isActive ? 'active' : '',
        ]}
      >
        Support
      </StyledNavLink>
      <MenuContainer>{menuIsOpen && <CategoryMenu></CategoryMenu>}</MenuContainer>
    </StyledNavbar>
  );
};

export default Navbar;
