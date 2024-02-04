import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.svg';
import cartIcon from '../../assets/icons/shopping_cart.svg';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  flex-flow: nowrap row;
  background-color: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.bg};
`;

const StyledNavLink = styled(NavLink)`
  padding: 1rem;
`;

const Icon = styled.img`
  filter: invert(99%) sepia(34%) saturate(493%) hue-rotate(175deg) brightness(99%) contrast(96%);
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavLink to="/home">
        <Icon src={homeIcon} />
      </StyledNavLink>
      <StyledNavLink to="/shop">Shop</StyledNavLink>
      <StyledNavLink to="/cart">
        <Icon src={cartIcon} />
        <span>3</span>
      </StyledNavLink>
      <StyledNavLink to="/support">Support</StyledNavLink>
    </StyledNavbar>
  );
};

export default Navbar;
