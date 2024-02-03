import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/home.svg';
import cartIcon from '../../assets/shopping_cart.svg';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/home">
        <img src={homeIcon} />
      </NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">
        <img src={cartIcon} />
      </NavLink>
    </nav>
  );
};
export default Navbar;
